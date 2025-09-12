import { styles } from "@/helpers";
import type { MickeyObject } from "@/helpers/types/base.types";

export type AnimationFunction =
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "linear"
  | "step-start"
  | "step-end"
  | (string & { value?: string });

export const getCssColor = () => {
  return styles.color.neutral[0];
};

export const getCssProperties = (props: MickeyObject) => {
  return `
  ${props.display ? `display:${props.display};` : "display:block;"}
  ${props.color ? `red;` : `red;`} 
    `;
};
export const getGetFontSize = (props: MickeyObject) => {
  if (props.size === "xx-small") {
    return `
      font-size: 0.76rem !important; 
      line-height: 0.76rem !important; 
      .apple & { font-size: 0.76rem !important; line-height: 0.76rem !important; } 
      .phone & { font-size: 0.86rem !important; line-height: 0.86rem !important; }
    `;
  }

  if (props.size === "x-small") {
    return `
      font-size: 0.9rem !important; 
      line-height: 0.9rem !important; 
      .apple & { font-size: 0.9rem !important; line-height: 0.9rem !important; } 
      .phone & { font-size: 1rem !important; line-height: 1rem !important; }
    `;
  }

  if (props.size === "small") {
    return `
      font-size: 1rem !important; 
      line-height: 1rem !important; 
      .apple & { font-size: 1rem !important; line-height: 1rem !important; } 
      .phone & { font-size: 1.1rem !important; line-height: 1.1rem !important; }
    `;
  }

  if (props.size === "regular") {
    return `
      font-size: 1.1rem !important; 
      line-height: 1.1rem !important; 
      .apple & { font-size: 1.1rem !important; line-height: 1.1rem !important; } 
      .phone & { font-size: 1.2rem !important; line-height: 1.2rem !important; }
    `;
  }

  if (props.size === "medium") {
    return `
      font-size: 1.32rem !important; 
      line-height: 1.32rem !important; 
      .apple & { font-size: 1.32rem !important; line-height: 1.32rem !important; } 
      .phone & { font-size: 1.52rem !important; line-height: 1.52rem !important; }
    `;
  }

  if (props.size === "large") {
    return `
      font-size: 1.6rem !important; 
      line-height: 1.6rem !important; 
      .apple & { font-size: 1.6rem !important; line-height: 1.6rem !important; } 
      .phone & { font-size: 1.8rem !important; line-height: 1.8rem !important; }
    `;
  }

  if (props.size === "x-large") {
    return `
      font-size: 1.8rem !important; 
      line-height: 1.8rem !important; 
      .apple & { font-size: 1.8rem !important; line-height: 1.8rem !important; } 
      .phone & { font-size: 2rem !important; line-height: 2rem !important; }
    `;
  }

  if (props.size === "xx-large") {
    return `
      font-size: 2.2rem !important; 
      line-height: 2.2rem !important; 
      .apple & { font-size: 2.2rem !important; line-height: 2.2rem !important; } 
      .phone & { font-size: 2.4rem !important; line-height: 2.4rem !important; }
    `;
  }

  if (props.size) {
    return `
      font-size: ${props.size} !important; 
      line-height: ${props.size} !important; 
      .apple & { font-size: ${props.size} !important; line-height: ${props.size} !important; } 
      .phone & { font-size: ${props.size} !important; line-height: ${props.size} !important; }
    `;
  }

  return ``;
};
