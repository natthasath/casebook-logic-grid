// Symbol library for the three categories (suspects/locations/weapons).
// Path data ported verbatim from the design mockup (Main.dc.html).
const SPRITE_HTML = `<defs>
<symbol id="ic-s-hood" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.5 2 3.5 6.5 3.5 12v4.5c0 2 1.2 3.5 3 4.5V22h11v-1c1.8-1 3-2.5 3-4.5V12C20.5 6.5 17.5 2 12 2z M12 7.5a4.2 4.5 0 1 0 0 9 4.2 4.5 0 1 0 0-9z M10.2 10.4a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 1 0 0-2.2z M13.8 10.4a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 1 0 0-2.2z"></path></symbol>
<symbol id="ic-s-tophat" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M6.5 3h11v11.5h-11z M6.5 10.5h11v2.5h-11z M2.5 16h19v3h-19z"></path></symbol>
<symbol id="ic-s-mustache" viewBox="0 0 24 24"><path d="M12 10.5C10.8 8.9 8.8 8.3 6.8 8.9 4.6 9.6 3 11 2 13.5c1.6-.6 2.8-.3 3.8.6 1.4 1.2 3.4 1.2 6.2-.3z"></path><path transform="translate(24 0) scale(-1 1)" d="M12 10.5C10.8 8.9 8.8 8.3 6.8 8.9 4.6 9.6 3 11 2 13.5c1.6-.6 2.8-.3 3.8.6 1.4 1.2 3.4 1.2 6.2-.3z"></path></symbol>
<symbol id="ic-s-glasses" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="6.5" cy="13.5" r="3.6"></circle><circle cx="17.5" cy="13.5" r="3.6"></circle><path d="M10.1 13h3.8M2.9 13L2 9.5M21.1 13L22 9.5"></path></g></symbol>
<symbol id="ic-s-crown" viewBox="0 0 24 24"><path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z"></path></symbol>
<symbol id="ic-s-mask" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2 9c3-2 6-2 10-.5 4-1.5 7-1.5 10 .5v3c0 3-2.5 5-5 5-2 0-3-1-5-1s-3 1-5 1c-2.5 0-5-2-5-5z M5.5 12.6a2 1.6 0 1 0 4 0 2 1.6 0 1 0-4 0z M14.5 12.6a2 1.6 0 1 0 4 0 2 1.6 0 1 0-4 0z"></path></symbol>
<symbol id="ic-s-bowtie" viewBox="0 0 24 24"><path d="M2 7l8 5-8 5z M22 7l-8 5 8 5z M10 9.5h4v5h-4z"></path></symbol>
<symbol id="ic-s-cap" viewBox="0 0 24 24"><path d="M4 14a8 8 0 0 1 16 0z M2 16h20v2.5H2z"></path></symbol>
<symbol id="ic-s-skull" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.5c-4.5 0-8 3-8 7.5 0 2.5 1.2 4.3 3 5.5V20h10v-4.5c1.8-1.2 3-3 3-5.5 0-4.5-3.5-7.5-8-7.5z M9 8.7a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 1 0 0-3.8z M15 8.7a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 1 0 0-3.8z M12 12.8l-1.3 2.7h2.6z"></path></symbol>
<symbol id="ic-s-person" viewBox="0 0 24 24"><path d="M12 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 1 0 0-9z M4 21c0-4.5 3.5-7.5 8-7.5s8 3 8 7.5z"></path></symbol>
<symbol id="ic-l-house" viewBox="0 0 24 24"><path d="M12 3l10 9h-3v9h-5v-6h-4v6H5v-9H2z"></path></symbol>
<symbol id="ic-l-toilet" viewBox="0 0 24 24"><path d="M6 2.5h9v6H6z M4 10h17c0 4-2 6.5-5 7.5V21H9v-3.5C6 16.5 4 14 4 10z"></path></symbol>
<symbol id="ic-l-stage" viewBox="0 0 24 24"><path d="M3 3h18v3H3z M3 6h5c0 6-1 10-1 14H3z M21 6h-5c0 6 1 10 1 14h4z M3 20.5h18V22H3z"></path></symbol>
<symbol id="ic-l-bed" viewBox="0 0 24 24"><path d="M2 5h2.5v14H2z M2 14h20v5h-2.5v-2h-15v2H2z M6.5 9h4.5a1.5 1.5 0 0 1 1.5 1.5V12.5h-6z"></path></symbol>
<symbol id="ic-l-kitchen" viewBox="0 0 24 24"><path d="M4 9h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z M1.5 11h2.5v2.5H1.5z M20 11h2.5v2.5H20z M8 5h8v2H8z"></path></symbol>
<symbol id="ic-l-library" viewBox="0 0 24 24"><path d="M3 4h7c1 0 2 .5 2 1.5V20c-.8-.7-1.7-1-2.7-1H3z M21 4h-7c-1 0-2 .5-2 1.5V20c.8-.7 1.7-1 2.7-1H21z"></path></symbol>
<symbol id="ic-l-tree" viewBox="0 0 24 24"><path d="M12 2l7 9h-4l5 7H4l5-7H5z M10.8 18h2.4v4h-2.4z"></path></symbol>
<symbol id="ic-l-car" viewBox="0 0 24 24"><path d="M2.5 12.5L5 7h14l2.5 5.5V18h-3v-2H5.5v2h-3z"></path><circle cx="7" cy="18" r="2.5"></circle><circle cx="17" cy="18" r="2.5"></circle></symbol>
<symbol id="ic-l-stairs" viewBox="0 0 24 24"><path d="M3 21v-4h4v-4h4V9h4V5h6v16z"></path></symbol>
<symbol id="ic-l-door" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M6 2.5h12v19H6z M15 11.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0z M8.5 5h7v5h-7z M8.5 12.5h4v6h-4z"></path></symbol>
<symbol id="ic-w-printer" viewBox="0 0 24 24"><path d="M6 3h12v5H6z M3 9h18a1 1 0 0 1 1 1v8h-4v-3H6v3H2v-8a1 1 0 0 1 1-1z M7.5 15.5h9V21h-9z"></path></symbol>
<symbol id="ic-w-triangle" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 3v18h18z M7.5 11v6.5H14z"></path></symbol>
<symbol id="ic-w-compass" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="1.9"></circle><path d="M12 6.4L6 21M12 6.4L18 21M8.6 15h6.8"></path></g></symbol>
<symbol id="ic-w-knife" viewBox="0 0 24 24"><path d="M5 20C5 11 11 5 20 4c-1 9-7 15-15 16z"></path><path d="M2.5 21.5l3-3" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"></path></symbol>
<symbol id="ic-w-key" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="12" r="3.6"></circle></g><path d="M10.6 10.8H22v2.4H10.6z M17 13.2h2v3h-2z M20.5 13.2h1.5v2.2h-1.5z"></path></symbol>
<symbol id="ic-w-hammer" viewBox="0 0 24 24"><path d="M3 4h13v5H3z M8.5 9h3v13h-3z"></path></symbol>
<symbol id="ic-w-rope" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="3.6"></circle><path d="M17.7 17.7L21.5 21.5"></path></g></symbol>
<symbol id="ic-w-scissors" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3L17 15.5M17.5 3L7 15.5"></path><circle cx="6" cy="19" r="2.6"></circle><circle cx="18" cy="19" r="2.6"></circle></g></symbol>
<symbol id="ic-w-candle" viewBox="0 0 24 24"><path d="M12 1.5c2 2.5 2.5 4 0 6.5-2.5-2.5-2-4 0-6.5z M10 9.5h4v8h-4z M6.5 17.5h11l1.5 4H5z"></path></symbol>
<symbol id="ic-w-poison" viewBox="0 0 24 24"><path d="M9.5 2.5h5v4h-5z"></path><path fill-rule="evenodd" d="M9 7h6l3 4v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20v-9z M11 12.5h2v2h2v2h-2v2h-2v-2H9v-2h2z"></path></symbol>
</defs>`;

/** Renders once per page; every <Icon> below references it via <use>. */
export function IconSprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: SPRITE_HTML }}
    />
  );
}

export const ICON_LIBRARY: Record<"s" | "l" | "w", [string, string][]> = {
  s: [
    ["hood", "ผ้าคลุม"],
    ["tophat", "หมวกทรงสูง"],
    ["mustache", "หนวด"],
    ["glasses", "แว่นตา"],
    ["crown", "มงกุฎ"],
    ["mask", "หน้ากาก"],
    ["bowtie", "โบว์ไท"],
    ["cap", "หมวกแก๊ป"],
    ["skull", "กะโหลก"],
    ["person", "คนทั่วไป"],
  ],
  l: [
    ["house", "บ้าน"],
    ["toilet", "ห้องน้ำ"],
    ["stage", "เวที"],
    ["bed", "ห้องนอน"],
    ["kitchen", "ห้องครัว"],
    ["library", "ห้องสมุด"],
    ["tree", "สวน"],
    ["car", "รถ"],
    ["stairs", "บันได"],
    ["door", "ประตู"],
  ],
  w: [
    ["printer", "เครื่องพิมพ์"],
    ["triangle", "ไม้ฉาก"],
    ["compass", "วงเวียน"],
    ["knife", "มีด"],
    ["key", "กุญแจ"],
    ["hammer", "ค้อน"],
    ["rope", "เชือก"],
    ["scissors", "กรรไกร"],
    ["candle", "เชิงเทียน"],
    ["poison", "ขวดยาพิษ"],
  ],
};

export function Icon({ cat, iconKey, size = 30 }: { cat: "s" | "l" | "w"; iconKey: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <use href={`#ic-${cat}-${iconKey}`} />
    </svg>
  );
}
