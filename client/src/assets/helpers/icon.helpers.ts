import { styles } from "@/helpers";
import type { MickeyObject } from "@/helpers/types/base.types";

export const getCssColor = () => {
  return `fill: ${styles.color.primary.main}`;
};

export const getCssProperties = (props: MickeyObject) => {
  return ` 
  ${props.color ? `${getCssColor()};` : "color: var(--color-base-text-color);"} 
    `;
};

export const getIconSize = (props: MickeyObject) => {
  if (props.size === "small") {
    return `
     width: 12px;
     height: 12px;
    `;
  }

  if (props.size === "regular") {
    return `
     width: 14px;
     height: 14px;
    `;
  }

  if (props.size === "medium") {
    return `
     width: 16px;
     height: 16px;
    `;
  }

  if (props.size === "large") {
    return `
     width: 18px;
     height: 18px;
    `;
  }

  if (props.size === "x-large") {
    return `
     width: 22px;
     height: 22px;
    `;
  }

  if (props.size === "xx-large") {
    return `
     width: 32px;
     height: 32px;
    `;
  }

  if (props.size) {
    return `
     width: ${props.size};
     height: ${props.size};
    `;
  }
  return `
     width: 14px;
     height: 14px;
    `;
};
