// import { Laptop } from "./China.js"; // import variable
// import { Toys } from "./China.js";
// import { Cow } from "./China.js";

import { Laptop, Toys, China } from "./China.js"; // import using same name in a single line
import Goru from "./Cow.js"

console.log(Laptop)

const c = new China();
c.mobile();

Toys()


// import default
const g = new Goru();
g.food();