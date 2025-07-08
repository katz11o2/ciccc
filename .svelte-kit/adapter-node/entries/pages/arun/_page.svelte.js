import { h as head, c as pop, p as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&amp;display=swap" rel="stylesheet">`;
  });
  $$payload.out += `<div class="container svelte-h4s813"><div class="heading fade-in svelte-h4s813">Operations Manager's Message</div> <div class="heading-decor fade-in svelte-h4s813"><div class="blue-dot svelte-h4s813"></div> <div class="blue-dot svelte-h4s813"></div> <hr class="blue-line svelte-h4s813"></div> <div class="glass-box fade-in svelte-h4s813"><div class="ceo-image fade-in svelte-h4s813"><img src="https://i.postimg.cc/7Y6LN7B1/Untitled-design-3.png" alt="Chairman Image" class="svelte-h4s813"> <div class="ceo-quote svelte-h4s813">Mr. Arun Singh <br> Operations Manager, CIC</div></div> <div class="ceo-message fade-in svelte-h4s813"><p class="svelte-h4s813">Managing CIC has been a journey of constant learning and inspiration. We work closely with
        every incubatee, ensuring they get personalized guidance, timely mentorship, and access to all
        necessary resources. We invite every dreamer and doer to join CIC and take their first step
        towards building something extraordinary.</p></div></div></div>`;
  pop();
}
export {
  _page as default
};
