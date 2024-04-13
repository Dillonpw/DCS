import { e as createAstro, f as createComponent, r as renderTemplate } from '../astro_NwW57S91.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$MapPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MapPage;
  return renderTemplate`<!-- <Layout title={title}>
  <Modal content={modal} />
<Maps/>
</Layout> -->`;
}, "/Users/dill/repos/DSC/src/pages/mapPage.astro", void 0);

const $$file = "/Users/dill/repos/DSC/src/pages/mapPage.astro";
const $$url = "/mapPage";

export { $$MapPage as default, $$file as file, $$url as url };
