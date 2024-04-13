import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_NwW57S91.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Modal, $ as $$Layout } from './calculatorPage_tKFNwyE0.mjs';

const $$Astro$1 = createAstro();
const $$TodoStatic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TodoStatic;
  return renderTemplate`${renderComponent($$result, "Todo", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/dill/repos/DSC/src/components/TodoComp.tsx", "client:component-export": "default" })}`;
}, "/Users/dill/repos/DSC/src/components/TodoStatic.astro", void 0);

const $$Astro = createAstro();
const $$TodoPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TodoPage;
  const title = "Checklist";
  const modal = "Let's make it sure were organized and focused on what's important. Treat this page like your personal checklist \u2013 a little hub of efficiency. As you power through your day, tick off each task once it's done. Our goal? To help you keep track of everything, ensuring that nothing slips through the cracks before your shift wraps up. Think of it as your trusty sidekick, keeping you on top of your game.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> ${renderComponent($$result2, "Modal", $$Modal, { "content": modal })} ${renderComponent($$result2, "Todo", $$TodoStatic, {})} </div> ` })}`;
}, "/Users/dill/repos/DSC/src/pages/todoPage.astro", void 0);

const $$file = "/Users/dill/repos/DSC/src/pages/todoPage.astro";
const $$url = "/todoPage";

export { $$TodoPage as default, $$file as file, $$url as url };
