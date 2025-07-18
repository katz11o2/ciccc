import { d as slot, e as ensure_array_like } from './index-CVbcr3lX.js';
import { H as Header } from './Header-DtLEOkqT.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { a as attr } from './attributes-BeaNKpgU.js';

function Footer($$payload) {
  const navLinks = [
    { href: "/about", text: "About" },
    { href: "/programs", text: "Programs" },
    { href: "/Facilities", text: "Facilities" },
    {
      text: "Courses",
      dropdown: [
        { href: "/programs/ug", text: "UG" },
        { href: "/programs/pg", text: "PG" }
      ]
    },
    { href: "/login", text: "Login" },
    {
      href: "https://engg.cambridge.edu.in/photo-gallery/",
      text: "Gallery"
    },
    { href: "/contact", text: "Contact" }
  ];
  const each_array = ensure_array_like(navLinks);
  $$payload.out += `<footer class="relative py-10 text-left" style="background: linear-gradient(to right, #17194a,#17194a, #17194a,#17194a);"><link href="https://fonts.googleapis.com/css2?family=Merriweather&amp;display=swap" rel="stylesheet"> <div class="relative container mx-auto px-4"><div class="grid gap-12 md:grid-cols-3"><div class="space-y-2"><h3 class="text-1xl font-small text-white">In Association With MSME - COE (IISc) &amp; Ministry of MSME ( GoI )</h3> <p class="text-blue-100">Innovation and Incubation Center</p> <p class="text-sm text-blue-200">Transforming ideas into breakthrough innovations since 2010</p></div> <div class="space-y-2 ml-20"><h3 class="text-m font-small text-white">Connect With Us</h3> <p class="text-blue-200">Follow us on social media for updates and news.</p> <div class="flex space-x-4"><a href="#" class="rounded-lg bg-white/5 p-2 text-blue-100 transition-all hover:bg-white/10 hover:text-blue-400"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg></a> <a href="#" class="rounded-lg bg-white/5 p-2 text-blue-100 transition-all hover:bg-white/10 hover:text-blue-400"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg></a> <a href="#" class="rounded-lg bg-white/5 p-2 text-blue-100 transition-all hover:bg-white/10 hover:text-blue-400"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path></svg></a></div></div> <div class="space-y-2 ml-30"><h3 class="text-xl font-small text-white">Quick Links</h3> <nav class="flex flex-col space-y-2 transition-all duration-300"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let { href, text, dropdown } = each_array[$$index_1];
    if (dropdown) {
      $$payload.out += "<!--[-->";
      const each_array_1 = ensure_array_like(dropdown);
      $$payload.out += `<div class="relative group"><a href="#" class="relative text-sm font-small text-blue-100 transition-colors hover:text-white">${escape_html(text)}</a> <div class="absolute left-0 mt-1 hidden w-32 bg-[#000A30] shadow-lg group-hover:block"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let { href: href2, text: text2 } = each_array_1[$$index];
        $$payload.out += `<a${attr("href", href2)} class="block px-4 py-2 text-blue-100 hover:bg-white/5">${escape_html(text2)}</a>`;
      }
      $$payload.out += `<!--]--></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<a${attr("href", href)} class="text-sm font-small text-blue-100 transition-colors hover:text-white">${escape_html(text)}</a>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></nav></div></div> <div class="mt-0 border-t border-blue-800/10 pt-9 text-center"><p class="text-sm text-blue-200">© 2025 Cambridge Institute Innovation and Incubation Center. All rights reserved.</p></div></div></footer>`;
}
function _layout($$payload, $$props) {
  $$payload.out += `<div class="layout-wrapper">`;
  Header($$payload);
  $$payload.out += `<!----> <main class="flex-grow"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-Cj1LzCpb.js.map
