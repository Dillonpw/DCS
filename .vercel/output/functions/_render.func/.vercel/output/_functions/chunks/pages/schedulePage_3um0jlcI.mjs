import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent } from '../astro_NwW57S91.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Modal, $ as $$Layout } from './calculatorPage_tKFNwyE0.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$ScheduleComp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ScheduleComp;
  return renderTemplate`${maybeRenderHead()}<main> <div class="container"> <form id="scheduling"> <label for="workDays">Work Days:</label> <input type="number" id="workDays" min="1" placeholder="4" required> <label for="offDays">Off Days:</label> <input type="number" id="offDays" min="1" placeholder="2" required> <label for="totalDays">Total Days:</label> <input type="number" id="totalDays" min="1" placeholder="90" required> <label for="startDate">Start Date:</label> <input type="date" id="startDate" placeholder="01/01/2024" required> <button type="submit" id="generate">Show Schedule</button> </form> <div id="tableWrapper"> <table border="1"> <thead> <tr> <th>Week Day</th> <th>Date</th> <th>On/Off</th> </tr> </thead> <tbody id="scheduleTable"> <!-- Schedule data will be inserted here using JavaScript --> </tbody> </table> </div> </div> </main> `;
}, "/Users/dill/repos/DSC/src/components/ScheduleComp.astro", void 0);

const $$Astro = createAstro();
const $$SchedulePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SchedulePage;
  const title = "Schedule Tracker";
  const modal = "Let's get your work schedule organized in a flash. Just fill in the boxes below with your shift details. Whether you're working '4 on, 2 off' or any other rotation, this tool is here to help. Start by entering your schedule beginning from the first day of your work rotation. Here's a neat feature for you: once you input your schedule, we'll keep it safely stored in your device's browser for 30 days. This way, you won't have to burden your memory with every single shift detail. It's all about making your crucial role a bit more manageable. Plan your workdays here and focus on what you do best \u2013 being an incredible 911 dispatcher!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Modal", $$Modal, { "content": modal })} ${renderComponent($$result2, "Schedule", $$ScheduleComp, {})} ` })}`;
}, "/Users/dill/repos/DSC/src/pages/schedulePage.astro", void 0);

const $$file = "/Users/dill/repos/DSC/src/pages/schedulePage.astro";
const $$url = "/schedulePage";

export { $$SchedulePage as default, $$file as file, $$url as url };
