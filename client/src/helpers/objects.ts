import type { MickeyObject } from "./types/base.types";

export const JSONStringify = (obj: MickeyObject) => {
  let cache: MickeyObject = [];
  let str = JSON.stringify(obj, function (_key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        return;
      }
      cache.push(value);
    }
    return value;
  });
  cache = null;
  return str;
};

export const removeUndefined = (obj: MickeyObject) => {
  return JSON.parse(JSONStringify(obj));
};
