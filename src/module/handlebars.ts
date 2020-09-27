import * as util from "util";
import {advantageDisadvantageTerm} from "./i18n";

export default function registerHandlebarsHelpers():void {

  Handlebars.registerHelper('advantageDisadvantageTerm', (str) => {
    return advantageDisadvantageTerm(str);
  });

  Handlebars.registerHelper('capitalize', (str) => {
    if (!util.isString(str)) {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  Handlebars.registerHelper('concat', function (a, b) {
    return a + b;
  });
}
