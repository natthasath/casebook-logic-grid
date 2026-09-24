export type Cat = "s" | "l" | "w";

export type Dims = Record<Cat, number>;
export type StrArrMap = Record<Cat, (string | null | undefined)[]>;
export type MarkValue = "O" | "X";

export interface Answers {
  k: string;
  w: string;
  l: string;
}

export interface Snapshot {
  dims: Dims;
  names: StrArrMap;
  icons: StrArrMap;
  custom: StrArrMap;
  marks: Record<string, MarkValue>;
  answers: Answers;
}

export interface Checkpoint {
  id: string;
  label: string;
  at: string;
  o: number;
  x: number;
  snap: Snapshot;
}

export interface Selection {
  c: Cat;
  i: number;
}

export interface PuzzleState extends Snapshot {
  sel: Selection | null;
  tool: MarkValue | "E";
  cps: Checkpoint[];
  hist: Snapshot[];
  cpLabel: string;
  nextCp: number;
}

export const CATS: Record<Cat, { en: string; th: string }> = {
  s: { en: "Suspects", th: "ผู้ต้องสงสัย" },
  l: { en: "Locations", th: "สถานที่" },
  w: { en: "Weapons", th: "อาวุธ" },
};

export const STORAGE_KEY = "casebook-logic-grid-v1";

export function emptyState(): PuzzleState {
  return {
    dims: { s: 3, l: 3, w: 3 },
    names: { s: [], l: [], w: [] },
    icons: { s: [], l: [], w: [] },
    custom: { s: [], l: [], w: [] },
    marks: {},
    answers: { k: "", w: "", l: "" },
    sel: null,
    tool: "O",
    cps: [],
    hist: [],
    cpLabel: "",
    nextCp: 1,
  };
}
