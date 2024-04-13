import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent } from '../astro_NwW57S91.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './calculatorPage_tKFNwyE0.mjs';
import 'clsx';

const $$Astro$2 = createAstro();
const $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Reviews;
  return renderTemplate`${maybeRenderHead()}<section class="reviews"> <div id="reviewBox"> <h3>If you found this useful, or have any suggestions let us know!</h3> <form action="https://api.web3forms.com/submit" method="POST" id="reviewForm"> <input type="hidden" name="access_key" value="a1bf7f2c-e2c4-4575-9d2e-ac544037c627
      "> <label for="user">Name:</label> <input type="text" id="user" name="user" placeholder="anonymous"> <label for="text">Review:</label> <textarea id="text" name="text" cols="30" rows="10" placeholder="Your thoughts here..." required></textarea> <button type="submit">Submit</button> </form> </div> <div id="reviewsContainer"></div> </section> `;
}, "/Users/dill/repos/DSC/src/components/Reviews.astro", void 0);

const $$Astro$1 = createAstro();
const $$Iframe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Iframe;
  return renderTemplate`${maybeRenderHead()}<section class="videoBox"> <h2>
Not sure why a schedule tracker like our could be useful? This video gives a
    brief explanation of what a rotating schedule is and why they are used.
</h2> <iframe loading="eager" class="video" width="90%" height="400px" src="https://www.youtube.com/embed/1NLaqDuLPwI?autoplay=1&mute=1" title="A Guide to Creating a Successful Rotating Shift Schedule | When I Work" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
  </iframe> </section>`;
}, "/Users/dill/repos/DSC/src/components/Iframe.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "911 Dispatcher Cheat Sheet";
  const modal = "This website is specially crafted for 911 Emergency Dispatchers, and it's all about making your important job a little easier. Visit often to see our new features and improvements.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p id="intro">${modal}</p> ${renderComponent($$result2, "Iframe", $$Iframe, {})} ${renderComponent($$result2, "Reviews", $$Reviews, {})} ` })}`;
}, "/Users/dill/repos/DSC/src/pages/index.astro", void 0);

const $$file = "/Users/dill/repos/DSC/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
