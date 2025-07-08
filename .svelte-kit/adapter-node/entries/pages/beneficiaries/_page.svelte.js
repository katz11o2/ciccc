import { e as ensure_array_like } from "../../../chunks/index.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload) {
  const startups = [
    {
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2023/01/Kokoshell-1-1086x1536.png",
      title: "KoKo Shell",
      document: "https://engg.cambridge.edu.in/wp-content/uploads/2025/01/Group-2.pdf"
    },
    {
      image: "https://engg.cambridge.edu.in/wp-content/uploads/elementor/thumbs/121669489-finger-snapping-icon-transformed-1-q2mmhn9ejzpd3q2562e9fm4wztnyy5dqwbnglkz37g.webp",
      title: "Gestify",
      document: "https://example.com/doc6"
    },
    {
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2023/01/Happy-Cures-1-1086x1536.png",
      title: "Happy Cures",
      document: "https://example.com/doc7"
    },
    {
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2023/01/LOGO-FINblack.png",
      title: "Projectoo",
      document: "https://example.com/doc8"
    },
    {
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2023/01/EksauEk-150x150.png",
      title: "Ek Sau Ek",
      document: "https://example.com/doc9"
    },
    {
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2023/01/Assista-1-1086x1536.png",
      title: "Assista",
      document: "https://example.com/doc10"
    },
    {
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2023/01/Anime-Vyuh%E2%80%8B-1-1086x1536.png",
      title: "Anime Vyuh",
      document: "https://example.com/doc11"
    },
    {
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2023/01/Right-Path%E2%80%8B-1-1086x1536.png",
      title: "Right Path",
      document: "https://example.com/doc12"
    },
    {
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2023/01/Qr-Travel.png",
      title: "QR Travel",
      document: "https://example.com/doc13"
    },
    {
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2023/01/S-card.png",
      title: "S-Card",
      document: "https://example.com/doc14"
    },
    {
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2023/01/Vitality-Monitor%E2%80%8B-1-1086x1536.png",
      title: "Vitality Monitors",
      document: "https://example.com/doc15"
    },
    {
      image: "https://engg.cambridge.edu.in/wp-content/uploads/2023/01/V-Praxis-1-1086x1536.png",
      title: "V-Praxis",
      document: "https://example.com/doc16"
    }
  ];
  const each_array = ensure_array_like(startups);
  $$payload.out += `<h1 class="svelte-h62cee">Student Startups</h1> <div class="grid svelte-h62cee"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let startup = each_array[$$index];
    $$payload.out += `<div class="card svelte-h62cee"><img${attr("src", startup.image)}${attr("alt", startup.title)} class="svelte-h62cee"> <div class="title svelte-h62cee">${escape_html(startup.title)}</div></div>`;
  }
  $$payload.out += `<!--]--></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
}
export {
  _page as default
};
