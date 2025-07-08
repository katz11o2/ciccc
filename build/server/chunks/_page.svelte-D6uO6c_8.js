import { e as ensure_array_like } from './index-CVbcr3lX.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import './escaping-CqgfEcN3.js';

function _page($$payload) {
  const images = [
    "https://i.postimg.cc/YStCGmC6/IMG20230904091154-01.jpg",
    "https://i.postimg.cc/0N0nN4MF/284A9787.jpg",
    "https://i.postimg.cc/sXKTTL37/IMG20230904091222-01.jpg",
    "https://i.postimg.cc/cCHX2cJj/IMG20230904091245-01.jpg"
  ];
  const each_array = ensure_array_like(images);
  $$payload.out += `<div class="page svelte-rnildq"><div class="greeting svelte-rnildq"><div class="header svelte-rnildq"><h2 class="svelte-rnildq">Auditorium</h2> <div class="flex items-center gap-3 mt-2 mb-1 svelte-rnildq"><span class="w-2 h-2 bg-blue-900 rounded-full svelte-rnildq"></span> <span class="w-2 h-2 bg-blue-900 rounded-full svelte-rnildq"></span> <div class="w-[130px] h-0.5 bg-blue-900 ml-2 svelte-rnildq"></div></div></div></div> <div class="image-grid svelte-rnildq"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let img = each_array[$$index];
    $$payload.out += `<div class="card svelte-rnildq"><img${attr("src", img)} alt="Gallery image" class="svelte-rnildq"></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="description svelte-rnildq"><p>Meet our Points of Contact who guide and inspire.<br> Empowering innovation, collaboration, and creativity.<br> Dedicated to making every event impactful and memorable.</p></div></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D6uO6c_8.js.map
