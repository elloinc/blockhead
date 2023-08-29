import { Cache } from "./cache";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

var cache_default = new Cache();
export {
  cache_default as default
};
