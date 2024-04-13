import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent } from '../astro_NwW57S91.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Modal, $ as $$Layout } from './calculatorPage_tKFNwyE0.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Weather = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Weather;
  return renderTemplate`${maybeRenderHead()}<main class="container"> <div id="box"> <form id="weatherForm" onsubmit="getLocation()"> <label for="searchQuery"></label> <input type="text" id="searchQuery" name="searchQuery" required placeholder="Search"> <button id="weatherBtn" type="submit"> Go</button> </form> <div id="locationDiv"> <div id="conditionDiv"> <h2>Condition</h2> <h3 id="conditionData">- -</h3> </div> <div id="tempDiv"> <h2>Temperature</h2> <h3 id="tempDataF">- -</h3> <h3 id="tempDataC">- -</h3> </div> <div id="humidityDiv"> <h2>Humidity</h2> <h3 id="humidityData">- -</h3> </div> <div id="visDiv"> <h2>Visibilty</h2> <h3 id="visDataF">- -</h3> <h3 id="visDataC">- -</h3> </div> <div id="windDiv"> <h2>Wind Speed</h2> <h3 id="windDataUS">- -</h3> <h3 id="windDataEU">- -</h3> </div> </div> </div> <div class="toggleInfo"> <p>Imperial</p> <label for="mode" class="switch"> <input id="mode" type="checkbox"> <span class="slider round"></span> </label> <p>Metric</p> </div> </main> `;
}, "/Users/dill/repos/DSC/src/components/Weather.astro", void 0);

const $$Astro = createAstro();
const $$WeatherPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WeatherPage;
  const title = "Weather";
  const modal = "Stay informed about the weather conditions in any city or town. This tool helps you understand the weather dynamics that might affect emergency situations. Plus, you can switch between Imperial and Metric measurements for your convenience.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Modal", $$Modal, { "content": modal })} ${renderComponent($$result2, "Weather", $$Weather, {})}` })}`;
}, "/Users/dill/repos/DSC/src/pages/weatherPage.astro", void 0);

const $$file = "/Users/dill/repos/DSC/src/pages/weatherPage.astro";
const $$url = "/weatherPage";

export { $$WeatherPage as default, $$file as file, $$url as url };
