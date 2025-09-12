import type { MickeyObject } from "./types/base.types";

export const addClass = (elem: MickeyObject, value: MickeyObject) => {
  if (!elem?.classList || typeof value !== "string") return;

  const classNames = value.split(" ");
  for (const className of classNames) {
    elem.classList.add(className);
  }
};

export const removeClass = (elem: MickeyObject, value: MickeyObject) => {
  if (!elem?.classList || typeof value !== "string") return;

  const classNames = value.split(" ");
  for (const className of classNames) {
    elem.classList.remove(className);
  }
};

export const find = (elem: MickeyObject, searchFor: MickeyObject) => {
  return elem?.querySelectorAll(searchFor) || [];
};

export const attr = (
  elem: MickeyObject,
  key: MickeyObject,
  value?: MickeyObject
) => {
  if (!elem?.setAttribute || !elem?.getAttribute || typeof key !== "string")
    return;

  if (value !== undefined) {
    elem.setAttribute(key, value);
  } else {
    return elem.getAttribute(key);
  }
};

export const removeAttr = (elem: MickeyObject, key: MickeyObject) => {
  if (!elem?.removeAttribute || typeof key !== "string") return;

  try {
    elem.removeAttribute(key);
  } catch {
    /** Handle any potential exceptions */
  }
};

export const getDomFromPointer = (obj: MickeyObject) => {
  if (obj?.current) {
    return obj.current.base || obj.current;
  }

  return null;
};

export const isScrollable = (el: MickeyObject) => {
  const style = getComputedStyle(el);
  const canScrollY =
    (style.overflowY === "auto" ||
      style.overflowY === "scroll" ||
      style.overflowY === "overlay") &&
    el.scrollHeight > el.clientHeight;
  const canScrollX =
    (style.overflowX === "auto" ||
      style.overflowX === "scroll" ||
      style.overflowX === "overlay") &&
    el.scrollWidth > el.clientWidth;
  return {
    vertical: canScrollY,
    horizontal: canScrollX,
    any: canScrollY || canScrollX,
  };
};

export const getFirstScrollHeight = (element: MickeyObject) => {
  let maxScroll = 0;
  let canScroll = false;
  while (!canScroll && element) {
    canScroll = isScrollable(element).vertical;
    maxScroll = element.clientHeight;
    element = element.parentElement;
  }
  return maxScroll;
};

export const getFirstScrollWidth = (element: MickeyObject) => {
  let maxScroll = 0;
  let canScroll = false;
  while (!canScroll && element) {
    canScroll = isScrollable(element).horizontal;
    maxScroll = element.clientWidth;
    element = element.parentElement;
  }
  return maxScroll;
};
