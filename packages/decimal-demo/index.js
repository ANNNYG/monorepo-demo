import Decimal from "decimal.js";
import Dayjs from "dayjs";

import { arr, result } from "lodash-demo";

const num_10 = new Decimal(10);
const num_5 = new Decimal(5);

const div_result = num_10.div(2);

console.log(Dayjs());

console.log(div_result, "div_result");
console.log(arr, "result", result);
