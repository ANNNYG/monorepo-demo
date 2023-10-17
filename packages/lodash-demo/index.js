import _ from "lodash";

import dayjs from "dayjs";

const arr = ["a", "b", "c", "d"];
const result = _.chunk(arr, 2);

console.log(dayjs("2023-9-10").format("DD/MMMM/YYYY"), "====");

export { result, arr };
