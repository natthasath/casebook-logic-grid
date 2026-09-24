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
<symbol id="ic-s-monocle" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="13.5" cy="9.5" r="5"></circle><path d="M13.5 14.5c-1 3 0 6 3 7.5M9 7L3.5 4.5"></path></g></symbol>
<symbol id="ic-s-pipe" viewBox="0 0 24 24"><path d="M2 14a3.5 3.5 0 0 1 3.5-3.5H9V8h11v2.5h-2.5L21 14l-1.6 1.4-4-4.4H9a1.5 1.5 0 0 0-1.5 1.5v1A3.5 3.5 0 0 1 4 17.5 3.5 3.5 0 0 1 2 14z"></path></symbol>
<symbol id="ic-s-beard" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5 3h14v8c0 5-3 10-7 10s-7-5-7-10z M8.5 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0z M13.5 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0z"></path></symbol>
<symbol id="ic-s-wig" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5 12h14v3c0 3.5-3 6.5-7 6.5s-7-3-7-6.5z"></path><circle cx="6" cy="7" r="3.4"></circle><circle cx="12" cy="5" r="3.8"></circle><circle cx="18" cy="7" r="3.4"></circle><circle cx="8.5" cy="10.5" r="3"></circle><circle cx="15.5" cy="10.5" r="3"></circle></symbol>
<symbol id="ic-s-eyepatch" viewBox="0 0 24 24"><path d="M4 3l16 3-1 3-15-3z"></path><circle cx="14.5" cy="10.5" r="4.5"></circle></symbol>
<symbol id="ic-s-earring" viewBox="0 0 24 24"><circle cx="12" cy="14" r="6.5" fill="none" stroke="currentColor" stroke-width="2.6"></circle><circle cx="12" cy="5.5" r="2"></circle></symbol>
<symbol id="ic-s-bandana" viewBox="0 0 24 24"><path d="M2 6l10-3 10 3-10 9z M15 9l6 3-2 2-5-2z"></path></symbol>
<symbol id="ic-s-bowler" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 1 6 6v3H6V9a6 6 0 0 1 6-6z M2.5 12h19v2.5h-19z"></path></symbol>
<symbol id="ic-s-necktie" viewBox="0 0 24 24"><path d="M9.5 2h5l1 4-2 2.5 3 11-4.5 3.5-4.5-3.5 3-11-2-2.5z"></path></symbol>
<symbol id="ic-s-locket" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.2" d="M4 4c0 6 3.5 9 8 9s8-3 8-9"></path><circle cx="12" cy="16" r="4.5"></circle></symbol>
<symbol id="ic-s-fedora" viewBox="0 0 24 24"><path d="M7 3h9l1 7H6z M1.5 11h21v2.5h-21z M7.5 9.5h9v1.4h-9z"></path></symbol>
<symbol id="ic-s-veil" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2a4 4 0 0 1 4 4v2c4 1 6 5 6 10v3H2v-3c0-5 2-9 6-10V6a4 4 0 0 1 4-4z M9.5 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0z M12.5 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0z"></path></symbol>
<symbol id="ic-s-turban" viewBox="0 0 24 24"><path d="M4 14a8 6.5 0 0 1 16 0c0 1-1 1.6-2 1.2a7 5 0 0 0-12 0c-1 .4-2-.2-2-1.2z M9 15h6v2.2H9z M15.5 6l4-2 .8 1.6-3.4 2.2z"></path></symbol>
<symbol id="ic-s-headband" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 3a8 8 0 0 1 8 8v4a1.6 1.6 0 0 1-3.2 0v-4a4.8 4.8 0 1 0-9.6 0v4a1.6 1.6 0 0 1-3.2 0v-4a8 8 0 0 1 8-8z"></path><path d="M2 10.5h20v2.4H2z"></path></symbol>
<symbol id="ic-s-ponytail" viewBox="0 0 24 24"><circle cx="11" cy="8" r="6"></circle><path d="M16 6c3 .5 5 3 4.5 6-3-1-5-1.5-6-1z M15 9c2 4 2 9-1 13-1-4-1-9 0-13z"></path></symbol>
<symbol id="ic-s-braid" viewBox="0 0 24 24"><circle cx="12" cy="6.5" r="4.5"></circle><path d="M9 10.5c2 1 4 1 6 0-1 2-1 3 0 4-2 1-4 1-6 0 1-1 1-2 0-4z M9 14.5c2 1 4 1 6 0-1 2-1 3 0 4-2 1-4 1-6 0 1-1 1-2 0-4z M9 18.5c2 1 4 1 6 0l-1.5 3.5h-3z"></path></symbol>
<symbol id="ic-s-sideburns" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5 2h14v9c0 6-4 11-7 11S5 17 5 11z M9.5 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0z M12.5 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0z"></path><path d="M5 6h3v8H5z M16 6h3v8h-3z"></path></symbol>
<symbol id="ic-s-nosering" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.5c-5 0-8 4-8 9s3 9 8 9 8-4 8-9-3-9-8-9z M9.5 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0z M12.5 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0z"></path><circle cx="12" cy="16.5" r="2" fill="none" stroke="currentColor" stroke-width="1.8"></circle></symbol>
<symbol id="ic-s-cane" viewBox="0 0 24 24"><path d="M9 2a5 5 0 0 0 0 10c1 0 2-.3 2.8-.8L13 22.5l2-.3-1.4-11.4A5 5 0 0 0 9 2z"></path></symbol>
<symbol id="ic-s-umbrella" viewBox="0 0 24 24"><path d="M11 2v1.1A10 10 0 0 0 2 12h9V3.1z M13 3.1V12h9a10 10 0 0 0-9-8.9z M11 12h2v8a2 2 0 0 1-4 0h2z"></path></symbol>
<symbol id="ic-s-handbag" viewBox="0 0 24 24"><path d="M3 10h18l-1.5 12h-15z M8 10V7a4 4 0 0 1 8 0v3h-2V7a2 2 0 0 0-4 0v3z"></path></symbol>
<symbol id="ic-s-gloves" viewBox="0 0 24 24"><path d="M3 22V9a2 2 0 0 1 4 0v3l1-4a1.4 1.4 0 0 1 2.7.7L9.5 14l1.3-3.3a1.4 1.4 0 0 1 2.6 1L12 16l1-2a1.4 1.4 0 0 1 2.5 1.3L13 22z"></path></symbol>
<symbol id="ic-s-scarf" viewBox="0 0 24 24"><path d="M3 5c3 3 15 3 18 0-1 4-4 6-8 6.5V17h3l-2 5-5-1v-9.5C7 11 4 9 3 5z"></path></symbol>
<symbol id="ic-s-brooch" viewBox="0 0 24 24"><path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z"></path><circle cx="12" cy="11" r="2.4"></circle></symbol>
<symbol id="ic-s-pearls" viewBox="0 0 24 24"><g><circle cx="12" cy="4" r="1.8"></circle><circle cx="6.5" cy="6.5" r="1.8"></circle><circle cx="17.5" cy="6.5" r="1.8"></circle><circle cx="3.5" cy="11.5" r="1.8"></circle><circle cx="20.5" cy="11.5" r="1.8"></circle><circle cx="6" cy="16.5" r="1.8"></circle><circle cx="18" cy="16.5" r="1.8"></circle><circle cx="12" cy="19.5" r="2.4"></circle></g></symbol>
<symbol id="ic-s-watch" viewBox="0 0 24 24"><path d="M9 2h6v4H9z M9 18h6v4H9z"></path><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="2.2"></circle><path d="M12 8.5v4l3 1.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></symbol>
<symbol id="ic-s-bald" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2.5a8 8 0 0 1 8 8V17a1.6 1.6 0 0 1-3.2 0v-1.2a4.8 4.8 0 0 0-9.6 0V17A1.6 1.6 0 0 1 4 17V10.5a8 8 0 0 1 8-8z M9.5 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0z M12.5 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0z"></path><path d="M8 5.5l1.5 2M16 5.5l-1.5 2" stroke="currentColor" stroke-width="1.4" fill="none"></path></symbol>
<symbol id="ic-s-beret" viewBox="0 0 24 24"><path d="M12 2a1.4 1.4 0 0 1 1.4 1.4v1.3c4.6.9 8 3.8 8 7.3 0 3-4.3 5.5-9.4 5.5S2.6 15 2.6 12c0-3.3 3-6.1 7.3-7.2V3.4A1.4 1.4 0 0 1 12 2z"></path></symbol>
<symbol id="ic-s-balaclava" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.5 2 4 6 4 11v10h16V11c0-5-2.5-9-8-9z M8.5 12a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 1 0 0-3.2z M15.5 12a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 1 0 0-3.2z M9 18h6v1.6H9z"></path></symbol>
<symbol id="ic-s-bunhair" viewBox="0 0 24 24"><circle cx="12" cy="4.5" r="3"></circle><path fill-rule="evenodd" d="M12 8.5a7 7 0 0 1 7 7v6H5v-6a7 7 0 0 1 7-7z M9.5 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0z M12.5 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0z"></path></symbol>
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
<symbol id="ic-l-garage" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2 10L12 3l10 7v11h-6v-7H8v7H2z M8 10h8V8H8z"></path></symbol>
<symbol id="ic-l-attic" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2 13L12 3l10 10v9H2z M9.5 15a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0z"></path></symbol>
<symbol id="ic-l-basement" viewBox="0 0 24 24"><path d="M2 12l10-8 10 8v2H2z M4 14h7v7H4z M13 14h7v7h-7z"></path></symbol>
<symbol id="ic-l-balcony" viewBox="0 0 24 24"><path d="M2 3h20v3H2z"></path><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 8v13M20 8v13M4 20h16M7 8v10M10.5 8v10M14 8v10M17.5 8v10"></path></g></symbol>
<symbol id="ic-l-pool" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2 5h20v13H2z M5 8h14v7H5z"></path><path d="M2 21c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></symbol>
<symbol id="ic-l-study" viewBox="0 0 24 24"><path d="M2 12h20v2.5H2z M3.5 14.5h2.5V21h-2.5z M18 14.5h2.5V21H18z M9 3h6v9H9z M9 3h6v2H9z"></path></symbol>
<symbol id="ic-l-dining" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2 9h20v2.5H2z M9.5 3a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0z"></path><path d="M4 11.5h2V21H4z M18 11.5h2V21h-2z M9.5 3h5v3h-5z"></path></symbol>
<symbol id="ic-l-closet" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 2h16v20H4z M9 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0z M15 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0z"></path><path d="M12 2v20" stroke="currentColor" stroke-width="1.6" fill="none"></path></symbol>
<symbol id="ic-l-elevator" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 2h18v20H3z M6.5 6h4.5v14H6.5z M13 6h4.5v14H13z M9 9l-1.6 2h3.2z M15.5 15l1.6-2h-3.2z"></path></symbol>
<symbol id="ic-l-gate" viewBox="0 0 24 24"><path d="M2 6h4v16H2z M18 6h4v16H18z M2 6l10-4 10 4z M6 10h12v3H6z M11 10h2v12h-2z"></path></symbol>
<symbol id="ic-l-greenhouse" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M2 10L12 3l10 7v11H2z M5 10v11M9 10v11M13 10v11M17 10v11M2 15h20"></path></g></symbol>
<symbol id="ic-l-observatory" viewBox="0 0 24 24"><path d="M3 14h18v8H3z M12 2a7 7 0 0 1 7 7v3H5v-3a7 7 0 0 1 7-7z M12 6l7-2 .8 1.9L13 8z"></path></symbol>
<symbol id="ic-l-boathouse" viewBox="0 0 24 24"><path d="M2 11L12 4l10 7v3H2z M4 14h16v4H4z M1 20l3-3h16l3 3z"></path></symbol>
<symbol id="ic-l-gazebo" viewBox="0 0 24 24"><path d="M12 2l9 5.5-9 3-9-3z M4 10h2v11H4z M18 10h2v11h-2z M9 12h2v9H9z M13 12h2v9h-2z"></path></symbol>
<symbol id="ic-l-fountain" viewBox="0 0 24 24"><path d="M3 18h18v3H3z M9 14h6v4H9z M5 10h14v2H5z M11 3h2v8h-2z"></path><g stroke="currentColor" stroke-width="1.4" stroke-linecap="round" fill="none"><path d="M7 5l1.2 5M17 5l-1.2 5M12 3v7"></path></g></symbol>
<symbol id="ic-l-hallway" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 2h16v20H4z M8 6h8v14H8z"></path><path d="M5 9h2v2H5z M17 9h2v2h-2z M5 14h2v2H5z M17 14h2v2h-2z"></path></symbol>
<symbol id="ic-l-bathroom" viewBox="0 0 24 24"><path d="M2 13h20v3a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z"></path><path d="M3 13V9a3 3 0 0 1 3-3 3 3 0 0 1 2.8 2" fill="none" stroke="currentColor" stroke-width="2"></path></symbol>
<symbol id="ic-l-fireplace" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 3h18v19H3z M7 7h10v9H7z"></path><path d="M12 9c1.5 1.5 2 3 .8 4.4-1.2-1-1.6-2-1.6-2s-.8 1-.4 2.2c-1.6-1.2-1-3.2 1.2-4.6z"></path></symbol>
<symbol id="ic-l-ballroom" viewBox="0 0 24 24"><path d="M11 2h2v3h-2z M6 6h12l-2 3H8z M8 9h8l-1.5 3h-5z M11 12h2v10h-2z M6 22h12v1.4H6z"></path></symbol>
<symbol id="ic-l-conservatory" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M3 21V9a9 9 0 0 1 18 0v12z M3 14h18M9 9v12M15 9v12"></path></g><path d="M12 11c1.2 1.2 1.6 2.6.6 3.8-1-.8-1.3-1.6-1.3-1.6s-.6.8-.3 1.8c-1.3-1-.8-2.6 1-4z"></path></symbol>
<symbol id="ic-l-laundry" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 2h16v20H4z M12 14a5 5 0 1 0 0-10 5 5 0 1 0 0 10z"></path><path d="M6 4h2v2H6z M10 4h2v2h-2z"></path></symbol>
<symbol id="ic-l-terrace" viewBox="0 0 24 24"><path d="M2 6h20v2.5H2z"></path><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 11v10M20 11v10M4 21h16M7 11v8M10.5 11v8M14 11v8M17.5 11v8"></path></g></symbol>
<symbol id="ic-l-shed" viewBox="0 0 24 24"><path d="M2 12l4-3h12l4 3v9H2z M8 21v-6h4v6"></path></symbol>
<symbol id="ic-l-barn" viewBox="0 0 24 24"><path d="M2 22V11L12 2l10 9v11h-6v-7h-8v7z M12 2l6 5.5-2 1.5-4-3.5-4 3.5-2-1.5z"></path></symbol>
<symbol id="ic-l-chapel" viewBox="0 0 24 24"><path d="M11 2h2v3h-2z M12 3.5l7 7.5h-4v11H9v-11H5z M11 12h2v9h-2z"></path></symbol>
<symbol id="ic-l-maze" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"><path d="M2 2h20v20H2z M5 5h14v9H10V9h6"></path></g></symbol>
<symbol id="ic-l-dock" viewBox="0 0 24 24"><path d="M2 8h20v2.5H2z M4 10.5h2V20H4z M18 10.5h2V20h-2z"></path><path d="M2 20c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0" fill="none" stroke="currentColor" stroke-width="1.6"></path></symbol>
<symbol id="ic-l-lighthouse" viewBox="0 0 24 24"><path d="M9 22l1.5-13h3L15 22z M8.5 9h7l-1-6h-5z M10.7 3h2.6V1.5h-2.6z M3 12l5-2v2l-5 2z M21 12l-5-2v2l5 2z"></path></symbol>
<symbol id="ic-l-windmill" viewBox="0 0 24 24"><path d="M10.5 22V11h3v11z M12 11a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 1 1 0 3.6z M13.2 9.8L20 4.5l1 1.5-7 5z M10.8 9.8L4 4.5 3 6l7 5z M13.2 10.2L20 15.5l1-1.5-7-5z M10.8 10.2L4 15.5 3 14l7-5z"></path></symbol>
<symbol id="ic-l-stable" viewBox="0 0 24 24"><path d="M2 22V10l10-7 10 7v12H15v-8H9v8z M9 8.5a3 3 0 1 1 6 0 3 3 0 1 1-6 0z"></path></symbol>
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
<symbol id="ic-w-gun" viewBox="0 0 24 24"><path d="M2 10h13v3h3v-2h4v5h-3l-1 2h-4v-3H9v3H6v-3a2 2 0 0 1-2-2z"></path></symbol>
<symbol id="ic-w-bat" viewBox="0 0 24 24"><path d="M3 21L16 4c1.5-1.8 4.5 1.2 3 3L6 22.5z"></path></symbol>
<symbol id="ic-w-wrench" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M14.5 2a5.5 5.5 0 0 0-5.4 6.6L2 15.7l3 3 7-7.1A5.5 5.5 0 0 0 20 6.5l-3.5 3.5-2-2L18 4.5A5.5 5.5 0 0 0 14.5 2z"></path></symbol>
<symbol id="ic-w-axe" viewBox="0 0 24 24"><path d="M2 22l8-14 2.5 1.5L4.5 23z M12 2c4 0 8 2 9 6-3 2-8 3-11-.5z"></path></symbol>
<symbol id="ic-w-dagger" viewBox="0 0 24 24"><path d="M11 2h2v9h-2z M6 10h12v2.5H6z M11 13h2v5h-2z M9.5 18h5l-2.5 4z"></path></symbol>
<symbol id="ic-w-saw" viewBox="0 0 24 24"><path d="M2 17l14-14 3 3-14 14z M15 7l3 3-2 2-3-3z M17 3l4 4-2 2-4-4z"></path></symbol>
<symbol id="ic-w-syringe" viewBox="0 0 24 24"><path d="M20.5 2L22 3.5l-2.5 2.5 1 1-9 9-2-2-1.5 1.5 1 1-1.5 1.5-3-3 1.5-1.5 1 1 1.5-1.5-2-2 9-9 1 1z"></path></symbol>
<symbol id="ic-w-bottle" viewBox="0 0 24 24"><path d="M10 2h4v3.5l2 3V21a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 21V8.5l2-3z"></path></symbol>
<symbol id="ic-w-trophy" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M6 3h12v4a6 6 0 0 1-12 0z M2 5h4v2a3 3 0 0 1-4-2.8z M18 5h4a3 3 0 0 1-4 2.8z M11 13h2v4h-2z M7 17h10v2H7z M8 19h8v2H8z"></path></symbol>
<symbol id="ic-w-chain" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><ellipse cx="7" cy="6" rx="4" ry="3" transform="rotate(-30 7 6)"></ellipse><ellipse cx="13" cy="11" rx="4" ry="3" transform="rotate(-30 13 11)"></ellipse><ellipse cx="19" cy="16" rx="4" ry="3" transform="rotate(-30 19 16)"></ellipse></g></symbol>
<symbol id="ic-w-crowbar" viewBox="0 0 24 24"><path d="M3 21l14-16 2.5 2-4 4.5 2 1.8-3 3.3-2-1.8L6 23z"></path></symbol>
<symbol id="ic-w-shovel" viewBox="0 0 24 24"><path d="M14 2l2 2-9.5 9.5-2-2z M15 5l4 4-2.5 2.5-4-4z M6.5 13a5 4.5 0 1 0 6 6z"></path></symbol>
<symbol id="ic-w-pickaxe" viewBox="0 0 24 24"><path d="M12 2c5 0 9 3 10 7-3-1-6-1-8 .5l2 2-2.5 2.5-2-2C10 14 10 17 11 20l-3 1c-1.5-4-1-8 1-11-2.5-1-5.5-1-9 0 1-4 5-8 12-8z"></path></symbol>
<symbol id="ic-w-spear" viewBox="0 0 24 24"><path d="M2 22L18 6l2 2L4 24z M16 4l3-3 4 4-3 3z"></path></symbol>
<symbol id="ic-w-slingshot" viewBox="0 0 24 24"><path d="M11 22V13.5L4 5l1.6-1.4 6.9 8 6.9-8L21 5l-7 8.5V22z"></path><circle cx="12" cy="9" r="1.6"></circle></symbol>
<symbol id="ic-w-dumbbell" viewBox="0 0 24 24"><path d="M2 10h2.5v4H2z M4.5 8h3v8h-3z M8.5 11h7v2h-7z M15.5 8h3v8h-3z M19.5 10H22v4h-2.5z"></path></symbol>
<symbol id="ic-w-anvil" viewBox="0 0 24 24"><path d="M6 4h9v4l6 2v2H6a3 3 0 0 0-3 3H2v-3a4 4 0 0 1 4-4z M9 12h4v9H9z M6.5 21h11v2h-11z"></path></symbol>
<symbol id="ic-w-poker" viewBox="0 0 24 24"><path d="M20 4a3 3 0 0 1-3 3 3 3 0 0 1-1-.2L6.5 17.3a3 3 0 1 1-1.8-1.8L15.2 5a3 3 0 0 1-.2-1 3 3 0 0 1 5-2.2A3 3 0 0 1 20 4z"></path></symbol>
<symbol id="ic-w-letteropener" viewBox="0 0 24 24"><path d="M9 15L19 5l2 2L11 17z M4 20l4-1.5 1.5-4L3 21z"></path></symbol>
<symbol id="ic-w-icepick" viewBox="0 0 24 24"><path d="M9 15L20 4l1.5 1.5L10 17z M4 21l3.5-1 1-3.5L2 23z M14 2l4 4-1.5 1.5-4-4z"></path></symbol>
<symbol id="ic-w-cleaver" viewBox="0 0 24 24"><path d="M3 22c0-6 3-11 9-12h9v8a2 2 0 0 1-2 2H9c-1.5 0-2.5 1-3 2z M12 10V4h2v6z"></path></symbol>
<symbol id="ic-w-sickle" viewBox="0 0 24 24"><path d="M12 2a9 9 0 0 1 8.9 7.8 6.5 6.5 0 0 0-11.3 4.4c0 .9.2 1.7.5 2.4L8 18l-2 3-3-2 2-3 1.6-1.9A9 9 0 0 1 12 2z"></path></symbol>
<symbol id="ic-w-nailgun" viewBox="0 0 24 24"><path d="M3 10h9v3h3v-2h4a1 1 0 0 1 1 1v3l-3 1v2h-3v-3H8v3H5v-4a2 2 0 0 1-2-2z M10 3h2v6h-2z"></path></symbol>
<symbol id="ic-w-brick" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2 8h20v10H2z M2 12.4h20v1.2H2z M6.2 8h1.2v4.4H6.2z M16.6 8h1.2v4.4h-1.2z M10.4 13.6h1.2V18h-1.2z"></path></symbol>
<symbol id="ic-w-book" viewBox="0 0 24 24"><path d="M3 3h8v18l-8-2z M21 3h-8v18l8-2z"></path></symbol>
<symbol id="ic-w-lamp" viewBox="0 0 24 24"><path d="M7 2h10l2 8H5z M9.5 10h5v9h-5z M6 19h12v2H6z"></path></symbol>
<symbol id="ic-w-golfclub" viewBox="0 0 24 24"><path d="M11 2h2v17.5h-2z M13 15l7-3.5c1.5 2 1 5-1 6.5z"></path></symbol>
<symbol id="ic-w-harpoon" viewBox="0 0 24 24"><path d="M2 22L17 7l2 2L4 24z M15 5l2-3 5 5-3 2z M17 7l3-1 1 3-3 1z"></path></symbol>
<symbol id="ic-w-crossbow" viewBox="0 0 24 24"><path d="M2 6l2-1.5 8 7-8 7L2 17l6.5-6.5z M9 9.5h13v2H9z"></path></symbol>
<symbol id="ic-w-kettle" viewBox="0 0 24 24"><path d="M4 12h13a3 3 0 0 1 3 3l3 1-1 2-2.5-.8A6 6 0 0 1 14 22H8a6 6 0 0 1-6-6z M9 12V7a3 3 0 0 1 6 0v1h-2V7a1 1 0 0 0-2 0v5z M9.5 3h5v2h-5z"></path></symbol>
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
    ["monocle", "เลนส์ตาเดียว"],
    ["pipe", "กล้องยาสูบ"],
    ["beard", "เคราแพะ"],
    ["wig", "วิกผมหยิก"],
    ["eyepatch", "ผ้าปิดตา"],
    ["earring", "ต่างหู"],
    ["bandana", "ผ้าโพกหัว"],
    ["bowler", "หมวกทรงโบว์เลอร์"],
    ["necktie", "เนคไท"],
    ["locket", "สร้อยจี้"],
    ["fedora", "หมวกปีกกว้าง"],
    ["veil", "ผ้าคลุมหน้า"],
    ["turban", "ผ้าโพกศีรษะ"],
    ["headband", "ผ้ารัดผม"],
    ["ponytail", "ผมหางม้า"],
    ["braid", "ผมเปีย"],
    ["sideburns", "จอน"],
    ["nosering", "ห่วงจมูก"],
    ["cane", "ไม้เท้า"],
    ["umbrella", "ร่ม"],
    ["handbag", "กระเป๋าถือ"],
    ["gloves", "ถุงมือ"],
    ["scarf", "ผ้าพันคอ"],
    ["brooch", "เข็มกลัด"],
    ["pearls", "สร้อยไข่มุก"],
    ["watch", "นาฬิกาข้อมือ"],
    ["bald", "หัวล้าน"],
    ["beret", "หมวกเบเร่ต์"],
    ["balaclava", "หมวกไหมพรมคลุมหน้า"],
    ["bunhair", "ผมเกล้ามวย"],
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
    ["garage", "โรงรถ"],
    ["attic", "ห้องใต้หลังคา"],
    ["basement", "ห้องใต้ดิน"],
    ["balcony", "ระเบียง"],
    ["pool", "สระว่ายน้ำ"],
    ["study", "ห้องทำงาน"],
    ["dining", "ห้องอาหาร"],
    ["closet", "ตู้เสื้อผ้า"],
    ["elevator", "ลิฟต์"],
    ["gate", "ประตูรั้ว"],
    ["greenhouse", "เรือนกระจก"],
    ["observatory", "หอดูดาว"],
    ["boathouse", "โรงเก็บเรือ"],
    ["gazebo", "ศาลาในสวน"],
    ["fountain", "น้ำพุ"],
    ["hallway", "ทางเดิน"],
    ["bathroom", "ห้องอาบน้ำ"],
    ["fireplace", "เตาผิง"],
    ["ballroom", "ห้องเต้นรำ"],
    ["conservatory", "เรือนกระจกพันธุ์ไม้"],
    ["laundry", "ห้องซักผ้า"],
    ["terrace", "ระเบียงดาดฟ้า"],
    ["shed", "โรงเก็บของ"],
    ["barn", "โรงนา"],
    ["chapel", "โบสถ์น้อย"],
    ["maze", "เขาวงกต"],
    ["dock", "ท่าเทียบเรือ"],
    ["lighthouse", "ประภาคาร"],
    ["windmill", "กังหันลม"],
    ["stable", "คอกม้า"],
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
    ["gun", "ปืน"],
    ["bat", "ไม้ตี"],
    ["wrench", "ประแจ"],
    ["axe", "ขวาน"],
    ["dagger", "กริช"],
    ["saw", "เลื่อย"],
    ["syringe", "เข็มฉีดยา"],
    ["bottle", "ขวดแก้ว"],
    ["trophy", "ถ้วยรางวัล"],
    ["chain", "โซ่"],
    ["crowbar", "ชะแลง"],
    ["shovel", "พลั่ว"],
    ["pickaxe", "อีเต้อ"],
    ["spear", "หอก"],
    ["slingshot", "หนังสติ๊ก"],
    ["dumbbell", "ดัมเบล"],
    ["anvil", "ทั่ง"],
    ["poker", "เหล็กคุ้ยเตาไฟ"],
    ["letteropener", "มีดเปิดจดหมาย"],
    ["icepick", "เหล็กสกัดน้ำแข็ง"],
    ["cleaver", "มีดสับ"],
    ["sickle", "เคียว"],
    ["nailgun", "ปืนตะปู"],
    ["brick", "อิฐ"],
    ["book", "หนังสือเล่มหนา"],
    ["lamp", "โคมไฟตั้งโต๊ะ"],
    ["golfclub", "ไม้กอล์ฟ"],
    ["harpoon", "ฉมวก"],
    ["crossbow", "หน้าไม้"],
    ["kettle", "กาต้มน้ำ"],
  ],
};

export function Icon({
  cat,
  iconKey,
  size = 30,
  className,
}: {
  cat: "s" | "l" | "w";
  iconKey: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <use href={`#ic-${cat}-${iconKey}`} />
    </svg>
  );
}
