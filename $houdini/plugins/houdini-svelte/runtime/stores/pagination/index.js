import { FragmentStoreCursor, FragmentStoreOffset } from "./fragment";
import { QueryStoreCursor, QueryStoreOffset } from "./query";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export {
  FragmentStoreCursor,
  FragmentStoreOffset,
  QueryStoreCursor,
  QueryStoreOffset
};
