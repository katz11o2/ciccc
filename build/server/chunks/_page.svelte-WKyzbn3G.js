import { e as ensure_array_like } from './index-CVbcr3lX.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import './escaping-CqgfEcN3.js';

function _page($$payload) {
  const images = [
    "https://i.postimg.cc/JnMrHBDk/1.jpg",
    "https://i.postimg.cc/YS2mcPYB/Whats-App-Image-2025-04-24-at-13-15-36-11eb078f.jpg"
  ];
  const each_array = ensure_array_like(images);
  $$payload.out += `<div class="page svelte-f4mtfi"><div class="greeting svelte-f4mtfi"><div class="header svelte-f4mtfi"><h2 class="svelte-f4mtfi">Seminar Hall 1</h2> <div class="flex items-center gap-3 mt-2 mb-1 svelte-f4mtfi"><span class="w-2 h-2 bg-blue-900 rounded-full svelte-f4mtfi"></span> <span class="w-2 h-2 bg-blue-900 rounded-full svelte-f4mtfi"></span> <div class="w-[150px] h-0.5 bg-blue-900 ml-2 svelte-f4mtfi"></div></div></div></div> <div class="image-grid svelte-f4mtfi"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let img = each_array[$$index];
    $$payload.out += `<div class="card svelte-f4mtfi"><img${attr("src", img)} alt="Gallery image" class="svelte-f4mtfi"></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="description svelte-f4mtfi"><p>Meet our Points of Contact who guide and inspire.<br> Empowering innovation, collaboration, and creativity.<br> Dedicated to making every event impactful and memorable.</p></div></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-WKyzbn3G.js.map
