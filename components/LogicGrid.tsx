"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./LogicGrid.module.css";
import { Icon, ICON_LIBRARY, IconSprite } from "./IconSprite";
import {
  Answers,
  Cat,
  CATS,
  Checkpoint,
  emptyState,
  MarkValue,
  PuzzleState,
  Snapshot,
  STORAGE_KEY,
} from "@/lib/types";

function snap(s: PuzzleState): Snapshot {
  return JSON.parse(
    JSON.stringify({
      dims: s.dims,
      names: s.names,
      icons: s.icons,
      custom: s.custom,
      marks: s.marks,
      answers: s.answers,
    })
  );
}

function pushHist(s: PuzzleState): Snapshot[] {
  return [...s.hist, snap(s)].slice(-100);
}

const bc = (w: number) => (w === 2 ? "var(--ink)" : "var(--line)");

export default function LogicGrid() {
  const [state, setState] = useState<PuzzleState>(emptyState());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        if (d && d.dims) {
          setState((s) => ({
            ...s,
            dims: d.dims,
            names: d.names || { s: [], l: [], w: [] },
            icons: d.icons || { s: [], l: [], w: [] },
            custom: d.custom || { s: [], l: [], w: [] },
            marks: d.marks || {},
            answers: d.answers || { k: "", w: "", l: "" },
            cps: d.cps || [],
            nextCp: d.nextCp || 1,
            tool: d.tool || "O",
          }));
        }
      }
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          dims: state.dims,
          names: state.names,
          icons: state.icons,
          custom: state.custom,
          marks: state.marks,
          answers: state.answers,
          cps: state.cps,
          nextCp: state.nextCp,
          tool: state.tool,
        })
      );
    } catch {
      // storage may be unavailable (private mode, quota) — non-fatal
    }
  }, [state, hydrated]);

  const toggleCell = (key: string, mark: MarkValue | "E") => {
    setState((s) => {
      const marks = { ...s.marks };
      if (mark === "E" || marks[key] === mark) {
        if (marks[key] === undefined) return s;
        delete marks[key];
      } else {
        marks[key] = mark as MarkValue;
      }
      return { ...s, marks, hist: pushHist(s) };
    });
  };

  const selectHead = (c: Cat, i: number) => {
    setState((s) => {
      if (s.sel && s.sel.c === c && s.sel.i === i) return { ...s, sel: null };
      return { ...s, sel: { c, i } };
    });
  };

  const closeSel = () => setState((s) => ({ ...s, sel: null }));

  const setIconKey = (c: Cat, i: number, key: string) => {
    setState((s) => {
      const arr = (s.icons[c] || []).slice();
      for (let k = 0; k < i; k++) if (arr[k] === undefined) arr[k] = null;
      arr[i] = key;
      const ca = (s.custom[c] || []).slice();
      ca[i] = "";
      return {
        ...s,
        icons: { ...s.icons, [c]: arr },
        custom: { ...s.custom, [c]: ca },
      };
    });
  };

  const setCustomChar = (c: Cat, i: number, v: string) => {
    setState((s) => {
      const ca = (s.custom[c] || []).slice();
      for (let k = 0; k < i; k++) if (ca[k] === undefined) ca[k] = null;
      ca[i] = v;
      return { ...s, custom: { ...s.custom, [c]: ca } };
    });
  };

  const setName = (c: Cat, i: number, v: string) => {
    setState((s) => {
      const arr = (s.names[c] || []).slice();
      for (let k = 0; k < i; k++) if (arr[k] === undefined) arr[k] = null;
      arr[i] = v;
      return { ...s, names: { ...s.names, [c]: arr } };
    });
  };

  const setDim = (c: Cat, delta: number) => {
    setState((s) => {
      const n = Math.max(2, Math.min(8, s.dims[c] + delta));
      if (n === s.dims[c]) return s;
      return { ...s, dims: { ...s.dims, [c]: n }, hist: pushHist(s) };
    });
  };

  const undo = () => {
    setState((s) => {
      if (!s.hist.length) return s;
      const last = s.hist[s.hist.length - 1];
      return {
        ...s,
        dims: last.dims,
        names: last.names,
        icons: last.icons,
        custom: last.custom,
        marks: last.marks,
        answers: last.answers,
        hist: s.hist.slice(0, -1),
      };
    });
  };

  const clearAll = () => {
    setState((s) => {
      if (!Object.keys(s.marks).length) return s;
      return { ...s, marks: {}, hist: pushHist(s) };
    });
  };

  const setAnswer = (k: keyof Answers, v: string) => {
    setState((s) => ({ ...s, answers: { ...s.answers, [k]: v } }));
  };

  const saveCp = () => {
    setState((s) => {
      const vals = Object.values(s.marks);
      const o = vals.filter((v) => v === "O").length;
      const x = vals.filter((v) => v === "X").length;
      const at = new Date().toLocaleTimeString("th-TH", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const label = (s.cpLabel || "").trim() || "จุดที่ " + s.nextCp;
      const cp: Checkpoint = {
        id: "cp" + Date.now(),
        label,
        at,
        o,
        x,
        snap: snap(s),
      };
      return { ...s, cps: [...s.cps, cp], nextCp: s.nextCp + 1, cpLabel: "" };
    });
  };

  const restoreCp = (id: string) => {
    setState((s) => {
      const cp = s.cps.find((c) => c.id === id);
      if (!cp) return s;
      const sn = JSON.parse(JSON.stringify(cp.snap)) as Snapshot;
      return { ...s, ...sn, hist: pushHist(s) };
    });
  };

  const delCp = (id: string) => {
    setState((s) => ({ ...s, cps: s.cps.filter((c) => c.id !== id) }));
  };

  const setTool = (t: MarkValue | "E") => setState((s) => ({ ...s, tool: t }));

  const d = state.dims;
  const nS = d.s;
  const nL = d.l;
  const nW = d.w;

  const iconKeyOf = (c: Cat, i: number) =>
    (state.icons[c] || [])[i] || ICON_LIBRARY[c][i % ICON_LIBRARY[c].length][0];
  const customOf = (c: Cat, i: number) => (state.custom[c] || [])[i] || "";
  const iconLabel = (c: Cat, i: number) => {
    const cu = customOf(c, i);
    if (cu) return "สัญลักษณ์ " + cu;
    const k = iconKeyOf(c, i);
    const found = ICON_LIBRARY[c].find((e) => e[0] === k);
    return found ? found[1] : k;
  };
  const defName = (c: Cat, i: number) => iconLabel(c, i);
  const nameOf = (c: Cat, i: number) => {
    const v = (state.names[c] || [])[i];
    return v === undefined || v === null || v === "" ? defName(c, i) : v;
  };
  const ariaName = (c: Cat, i: number) => nameOf(c, i) || defName(c, i);

  const headCell = (
    role: "col" | "row",
    c: Cat,
    i: number,
    gridArea: string,
    borderRight?: string,
    borderBottom?: string
  ) => {
    const isSel = !!(state.sel && state.sel.c === c && state.sel.i === i);
    const cu = customOf(c, i);
    return (
      <div
        key={`head-${role}-${c}-${i}`}
        className={styles.headCell}
        style={{ gridArea, borderRight, borderBottom }}
      >
        <button
          type="button"
          aria-label={`สัญลักษณ์ ${CATS[c].th} ที่ ${i + 1} ชื่อ ${ariaName(c, i)} (แตะเพื่อแก้ไข)`}
          title={ariaName(c, i)}
          onClick={() => selectHead(c, i)}
          className={`${styles.headBtn} ${isSel ? styles.headBtnSelected : ""}`}
        >
          {cu ? (
            <span className={styles.customGlyph}>{cu}</span>
          ) : (
            <Icon cat={c} iconKey={iconKeyOf(c, i)} size={36} />
          )}
        </button>
      </div>
    );
  };

  const cellsFor = (
    rc: Cat,
    i: number,
    cc: Cat,
    nc: number,
    rowNo: number,
    colStart: number,
    nr: number,
    topEdge: boolean,
    leftEdge: boolean
  ) => {
    const out = [];
    for (let j = 0; j < nc; j++) {
      const key = rc + i + cc + j;
      const v = state.marks[key];
      const T = i === 0 && topEdge ? 2 : 0;
      const Lw = j === 0 && leftEdge ? 2 : 0;
      const R = j === nc - 1 ? 2 : 1;
      const B = i === nr - 1 ? 2 : 1;
      out.push(
        <button
          type="button"
          key={key}
          className={styles.cell}
          aria-label={`${ariaName(rc, i)} กับ ${ariaName(cc, j)} : ${
            v === "O" ? "ถูก" : v === "X" ? "ผิด" : "ว่าง"
          }`}
          onClick={() => toggleCell(key, state.tool)}
          onContextMenu={(e) => {
            e.preventDefault();
            toggleCell(key, "X");
          }}
          style={{
            gridRow: rowNo,
            gridColumn: colStart + j,
            borderWidth: `${T}px ${R}px ${B}px ${Lw}px`,
            borderColor: `${bc(T)} ${bc(R)} ${bc(B)} ${bc(Lw)}`,
            background: v === "O" ? "var(--oBg)" : v === "X" ? "var(--xBg)" : "var(--field)",
          }}
        >
          {v === "O" && (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12.5l5 5L20 6.5" />
            </svg>
          )}
          {v === "X" && (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          )}
        </button>
      );
    }
    return out;
  };

  const gridNodes = useMemo(() => {
    const nodes: React.ReactNode[] = [];

    nodes.push(
      <div key="cg-s" style={{ gridRow: 1, gridColumn: `3 / span ${nS}` }} className={styles.colGroupLabel}>
        <span className={styles.colGroupEn}>{CATS.s.en}</span>
        <span className={styles.colGroupTh}>{CATS.s.th}</span>
      </div>
    );
    nodes.push(
      <div key="cg-l" style={{ gridRow: 1, gridColumn: `${3 + nS} / span ${nL}` }} className={styles.colGroupLabel}>
        <span className={styles.colGroupEn}>{CATS.l.en}</span>
        <span className={styles.colGroupTh}>{CATS.l.th}</span>
      </div>
    );

    for (let i = 0; i < nS; i++) {
      const last = i === nS - 1;
      const w = last ? 2 : 1;
      nodes.push(headCell("col", "s", i, `2 / ${3 + i}`, `${w}px solid ${bc(w)}`));
    }
    for (let i = 0; i < nL; i++) {
      const last = i === nL - 1;
      const w = last ? 2 : 1;
      nodes.push(headCell("col", "l", i, `2 / ${3 + nS + i}`, `${w}px solid ${bc(w)}`));
    }

    nodes.push(
      <div key="rg-w" style={{ gridColumn: 1, gridRow: `3 / span ${nW}` }} className={styles.rowGroupLabel}>
        <div className={styles.rowGroupInner}>
          <span className={styles.rowGroupTh}>{CATS.w.th}</span>
          <span className={styles.rowGroupEn}>{CATS.w.en}</span>
        </div>
      </div>
    );
    nodes.push(
      <div key="rg-l" style={{ gridColumn: 1, gridRow: `${3 + nW} / span ${nL}` }} className={styles.rowGroupLabel}>
        <div className={styles.rowGroupInner}>
          <span className={styles.rowGroupTh}>{CATS.l.th}</span>
          <span className={styles.rowGroupEn}>{CATS.l.en}</span>
        </div>
      </div>
    );

    for (let i = 0; i < nW; i++) {
      const w = i === nW - 1 ? 2 : 1;
      const area = `${3 + i} / 2`;
      nodes.push(headCell("row", "w", i, area, undefined, `${w}px solid ${bc(w)}`));
      nodes.push(...cellsFor("w", i, "s", nS, 3 + i, 3, nW, true, true));
      nodes.push(...cellsFor("w", i, "l", nL, 3 + i, 3 + nS, nW, true, false));
    }
    for (let i = 0; i < nL; i++) {
      const w = i === nL - 1 ? 2 : 1;
      const area = `${3 + nW + i} / 2`;
      nodes.push(headCell("row", "l", i, area, undefined, `${w}px solid ${bc(w)}`));
      nodes.push(...cellsFor("l", i, "s", nS, 3 + nW + i, 3, nL, false, true));
    }

    return nodes;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.dims, state.marks, state.sel, state.icons, state.custom, state.names, state.tool]);

  const gridTemplate = {
    gridTemplateColumns: `44px 72px repeat(${nS + nL}, 54px)`,
    gridTemplateRows: `44px 72px repeat(${nW + nL}, 54px)`,
  };

  const dimControls: { c: Cat }[] = [{ c: "s" }, { c: "l" }, { c: "w" }];

  const sel = state.sel && state.sel.i < d[state.sel.c] ? state.sel : null;

  const cpListSorted = state.cps.slice().reverse();

  return (
    <div className={styles.page}>
      <IconSprite />
      <div className={styles.wrap}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>Casebook · Logic Grid</div>
          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12.5l5 5L20 6.5" />
              </svg>
              <span>ใช่ / ตรงกัน (O)</span>
            </div>
            <div className={styles.legendItem}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
              <span>ไม่ใช่ / ตัดออก (X)</span>
            </div>
          </div>
        </header>

        <section className={styles.titleBlock}>
          <h1 className={styles.title}>ไขคดีด้วยตารางตัดตัวเลือก</h1>
          <p className={styles.subtitle}>
            จดผลจับคู่ระหว่างผู้ต้องสงสัย สถานที่ และอาวุธ ตัดตัวเลือกทีละช่อง แล้วบันทึกค่าที่แน่ชัดไว้ก่อนลองสมมุติว่าใครโกหก
          </p>
        </section>

        <section className={styles.controlsBar}>
          <div className={styles.dimList}>
            {dimControls.map(({ c }) => (
              <div key={c} className={styles.dimGroup}>
                <div className={styles.dimLabel}>
                  <span className={styles.dimTitle}>{CATS[c].en}</span>
                  <span className={styles.dimSub}>{CATS[c].th}</span>
                </div>
                <button
                  type="button"
                  aria-label={`ลดจำนวน${CATS[c].th}`}
                  onClick={() => setDim(c, -1)}
                  disabled={d[c] <= 2}
                  className={styles.stepperBtn}
                >
                  −
                </button>
                <span className={styles.stepperVal}>{d[c]}</span>
                <button
                  type="button"
                  aria-label={`เพิ่มจำนวน${CATS[c].th}`}
                  onClick={() => setDim(c, 1)}
                  disabled={d[c] >= 8}
                  className={styles.stepperBtn}
                >
                  +
                </button>
              </div>
            ))}
          </div>
          <div className={styles.toolsGroup}>
            <button
              type="button"
              aria-pressed={state.tool === "O"}
              onClick={() => setTool("O")}
              className={`${styles.toolBtn} ${state.tool === "O" ? styles.toolBtnActive : ""}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12.5l5 5L20 6.5" />
              </svg>
              <span>ถูก (O)</span>
            </button>
            <button
              type="button"
              aria-pressed={state.tool === "X"}
              onClick={() => setTool("X")}
              className={`${styles.toolBtn} ${state.tool === "X" ? styles.toolBtnActive : ""}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
              <span>ผิด (X)</span>
            </button>
            <button
              type="button"
              aria-pressed={state.tool === "E"}
              onClick={() => setTool("E")}
              className={`${styles.toolBtn} ${state.tool === "E" ? styles.toolBtnActive : ""}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 19h14M7 15l8-9 4 4-6 6H7z" />
              </svg>
              <span>ลบช่อง</span>
            </button>
            <span className={styles.divider} />
            <button type="button" onClick={undo} disabled={state.hist.length === 0} className={styles.actionBtn}>
              ย้อนขั้นล่าสุด
            </button>
            <button
              type="button"
              onClick={clearAll}
              disabled={Object.keys(state.marks).length === 0}
              className={styles.actionBtn}
            >
              ล้างตารางทั้งหมด
            </button>
          </div>
        </section>

        <div className={styles.main}>
          <section className={styles.gridCard}>
            <p className={styles.gridHint}>
              เลือกเครื่องมือด้านบน (ค่าเริ่มต้นคือถูก) แล้วคลิกซ้ายที่ช่อง · คลิกขวา = เครื่องหมายผิด (X) เสมอ ·
              คลิกซ้ำที่ค่าเดิมเพื่อล้างช่อง · แตะสัญลักษณ์ที่หัวตารางเพื่อเปลี่ยนสัญลักษณ์หรือตั้งชื่อ
              (สัญลักษณ์สถานที่ใช้ร่วมกันทั้งสองแกน)
            </p>
            <div className={styles.gridScroll}>
              <div className={styles.gridContainer} style={gridTemplate}>
                {gridNodes}
              </div>
            </div>
          </section>

          <aside className={styles.side}>
            <section className={styles.panel}>
              <h2 className={styles.panelTitle}>สรุปคำตอบ</h2>
              <div className={styles.summaryField}>
                <label htmlFor="ansK" className={styles.summaryLabel}>
                  ฆาตกร?
                </label>
                <input
                  id="ansK"
                  type="text"
                  value={state.answers.k}
                  onChange={(e) => setAnswer("k", e.target.value)}
                  className={styles.underlineInput}
                />
              </div>
              <div className={styles.summaryField}>
                <label htmlFor="ansW" className={styles.summaryLabel}>
                  อาวุธ?
                </label>
                <input
                  id="ansW"
                  type="text"
                  value={state.answers.w}
                  onChange={(e) => setAnswer("w", e.target.value)}
                  className={styles.underlineInput}
                />
              </div>
              <div className={styles.summaryField}>
                <label htmlFor="ansL" className={styles.summaryLabel}>
                  สถานที่?
                </label>
                <input
                  id="ansL"
                  type="text"
                  value={state.answers.l}
                  onChange={(e) => setAnswer("l", e.target.value)}
                  className={styles.underlineInput}
                />
              </div>
            </section>

            <section className={styles.panel}>
              <h2 className={styles.panelTitle}>จุดบันทึกค่าแน่ชัด</h2>
              <p className={styles.panelHint}>
                กรณีมีคนให้การเท็จ: บันทึกค่าที่แน่ชัดไว้ก่อน แล้วลองสมมุติว่าใครโกหก ถ้าขัดแย้งกัน กดย้อนกลับมาที่จุดนี้ได้ทันที
              </p>
              <div className={styles.field}>
                <label htmlFor="cpName" className={styles.fieldLabel}>
                  ชื่อจุดบันทึก (ไม่ใส่ก็ได้)
                </label>
                <input
                  id="cpName"
                  type="text"
                  maxLength={40}
                  value={state.cpLabel}
                  onChange={(e) => setState((s) => ({ ...s, cpLabel: e.target.value }))}
                  placeholder={`จุดที่ ${state.nextCp}`}
                  className={styles.cpLabelInput}
                />
                <button type="button" onClick={saveCp} className={styles.saveCpBtn}>
                  บันทึกค่าตอนนี้
                </button>
              </div>
              {state.cps.length === 0 && <div className={styles.cpEmpty}>ยังไม่มีจุดบันทึก</div>}
              <div className={styles.cpList}>
                {cpListSorted.map((cp) => (
                  <div key={cp.id} className={styles.cpItem}>
                    <div className={styles.cpItemLabel}>
                      <span>{cp.label}</span>
                      <span className={styles.cpItemMeta}>
                        {cp.at} น. · ถูก {cp.o} · ผิด {cp.x}
                      </span>
                    </div>
                    <div className={styles.cpActions}>
                      <button
                        type="button"
                        aria-label={`ย้อนกลับไปที่ ${cp.label}`}
                        onClick={() => restoreCp(cp.id)}
                        className={styles.restoreBtn}
                      >
                        ย้อนกลับมาจุดนี้
                      </button>
                      <button
                        type="button"
                        aria-label={`ลบจุดบันทึก ${cp.label}`}
                        onClick={() => delCp(cp.id)}
                        className={styles.deleteBtn}
                      >
                        ลบ
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          <section className={`${styles.panel} ${styles.symbolPanel}`}>
          <h2 className={styles.panelTitle}>สัญลักษณ์หัวตาราง</h2>
          {!sel && (
            <p className={styles.panelHint}>
              แตะสัญลักษณ์ที่หัวคอลัมน์หรือหัวแถวในตาราง เพื่อเลือกสัญลักษณ์ใหม่ ตั้งชื่อ หรือพิมพ์อักขระของคุณเอง (มีให้เลือกหมวดละ 100 แบบ)
            </p>
          )}
          {sel && (
            <div className={styles.selBlock}>
              <div className={styles.selKicker}>
                {CATS[sel.c].en} · {CATS[sel.c].th} · ลำดับที่ {sel.i + 1}
              </div>
              <div className={styles.field}>
                <label htmlFor="symName" className={styles.fieldLabel}>
                  ชื่อ (แสดงเมื่อชี้เมาส์ และใช้กับโปรแกรมอ่านหน้าจอ)
                </label>
                <input
                  id="symName"
                  type="text"
                  maxLength={28}
                  value={(state.names[sel.c] || [])[sel.i] ?? ""}
                  placeholder={defName(sel.c, sel.i)}
                  onChange={(e) => setName(sel.c, sel.i, e.target.value)}
                  className={styles.textInput}
                />
              </div>
              <div className={styles.field}>
                <span className={styles.fieldLabel}>เลือกสัญลักษณ์</span>
                <div className={styles.iconGrid}>
                  {ICON_LIBRARY[sel.c].map(([key, label]) => {
                    const hasCu = !!customOf(sel.c, sel.i);
                    const on = !hasCu && iconKeyOf(sel.c, sel.i) === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        aria-label={label}
                        title={label}
                        aria-pressed={on}
                        onClick={() => setIconKey(sel.c, sel.i, key)}
                        className={`${styles.iconBtn} ${on ? styles.iconBtnActive : ""}`}
                      >
                        <Icon cat={sel.c} iconKey={key} size={30} />
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="symChar" className={styles.fieldLabel}>
                  หรือพิมพ์อักขระเอง (1-2 ตัว เช่น A, 7, ?)
                </label>
                <input
                  id="symChar"
                  type="text"
                  maxLength={2}
                  value={customOf(sel.c, sel.i)}
                  onChange={(e) => setCustomChar(sel.c, sel.i, e.target.value)}
                  className={styles.charInput}
                />
              </div>
              <button type="button" onClick={closeSel} className={styles.doneBtn}>
                เสร็จสิ้น
              </button>
            </div>
          )}
          </section>
        </div>
      </div>
    </div>
  );
}
