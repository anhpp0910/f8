// Modules: Import/Export

import { logger2 } from "./logger/index.js";
import * as constant from "./constant.js";
console.log(constant);

logger2("test message...", constant.TYPE_LOG);
logger2("test message...", constant.TYPE_WARN);
logger2("test message...", constant.TYPE_ERROR);
