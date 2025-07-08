import { h as head, c as pop, p as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&amp;display=swap" rel="stylesheet">`;
  });
  $$payload.out += `<div class="container svelte-1dwad8i"><div class="heading fade-in svelte-1dwad8i">CEO's Message</div> <div class="heading-decor fade-in svelte-1dwad8i"><div class="blue-dot svelte-1dwad8i"></div> <div class="blue-dot svelte-1dwad8i"></div> <hr class="blue-line svelte-1dwad8i"></div> <div class="glass-box fade-in svelte-1dwad8i"><div class="ceo-image fade-in svelte-1dwad8i"><img src="https://engg.cambridge.edu.in/wp-content/uploads/2021/07/ceo-1-788x1024-1.jpg.webp" alt="Chairman Image" class="svelte-1dwad8i"> <div class="ceo-quote svelte-1dwad8i">Shri. Nithin Mohan<br> Chief Executive Officer,<br> Cambridge Institute of Technology</div></div> <div class="ceo-message fade-in svelte-1dwad8i"><p class="svelte-1dwad8i">CIC is more than an incubation centre – it is a launchpad for visionaries. We believe in creating
        an ecosystem where innovation thrives and startups flourish with the right support, mentorship,
        and infrastructure. Our partnerships with academia and industry ensure that our incubatees are
        always future-ready.</p></div></div></div>`;
  pop();
}
export {
  _page as default
};
