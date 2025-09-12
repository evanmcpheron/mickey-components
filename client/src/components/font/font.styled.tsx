import type { MickeyObject } from "@/helpers/types/base.types";
import { getGetFontSize } from "./font.helper";
import { filterProps } from "@/helpers/types/style.types";
import type { FontProperties } from "./font.types";
import { styles } from "@/helpers";

const renderCssOptions = (props: MickeyObject) => {
  return `
    & * {
      user-select: none;
    }
    
    input, textarea, select, button {
      user-select: text !important;
    }
      
  ${
    props.display
      ? `display:${props.display} !important;`
      : "display:inline-block;"
  }
  ${props.color ? `color: ${props.color};` : `color: ${styles.text.primary};`} 
    `;
};

export const NormalizeLabels = filterProps("div")`
  * {
    margin-block-end: 0;
    margin-block-start: 0;
  }
`;

export const H1Container = filterProps<FontProperties>("h1")`
  ${(props: FontProperties) => (!props.font ? `font: var(--font-bold);` : ``)}
  ${(props: FontProperties) =>
    !props.size ? `font-size: 3rem; .phone & { font-size: 3rem; }` : ``}
    ${(props: FontProperties) => (!props.weight ? `font-weight: bold;` : ``)}

  ${(props: FontProperties) => {
    return renderCssOptions(props);
  }}

  ${(props: FontProperties) => {
    return props.font ? styles.typography.family : ``;
  }}

  ${(props: FontProperties) => {
    return props.size ? getGetFontSize(props) : ``;
  }}

  line-height: 1;
  ${(props: FontProperties) => {
    return props.lineHeight
      ? `line-height: ${props.lineHeight} !important;`
      : ``;
  }}

  letter-spacing: -0.0625rem;
  .standalone & { }
`;

export const H2Container = filterProps<FontProperties>("h2")`
  ${(props: FontProperties) => (!props.font ? `font: var(--font-bold);` : ``)}
  ${(props: FontProperties) =>
    !props.size ? `font-size: 2.4rem; .phone & { font-size: 2.4rem; }` : ``}
  ${(props: FontProperties) => (!props.weight ? `font-weight: bold;` : ``)}

  ${(props: FontProperties) => {
    return renderCssOptions(props);
  }}

  ${(props: FontProperties) => {
    return props.font ? styles.typography.family : ``;
  }}

  ${(props: FontProperties) => {
    return props.size ? getGetFontSize(props) : ``;
  }}
  
  line-height: 1.067; 
    ${(props: FontProperties) => {
      return props.lineHeight
        ? `line-height: ${props.lineHeight} !important;`
        : ``;
    }}

  letter-spacing: -0.05rem;
  
`;

export const H3Container = filterProps<FontProperties>("h3")`
  ${(props: FontProperties) => (!props.font ? `font: var(--font-bold);` : ``)}
  ${(props: FontProperties) =>
    !props.size ? `font-size: 2rem; .phone & { font-size: 2rem; }` : ``}
  ${(props: FontProperties) => (!props.weight ? `font-weight: bold;` : ``)}

  ${(props: FontProperties) => {
    return renderCssOptions(props);
  }}

  ${(props: FontProperties) => {
    return props.font ? styles.typography.family : ``;
  }}

  ${(props: FontProperties) => {
    return props.size ? getGetFontSize(props) : ``;
  }}
  
  line-height: 1.083; 
    ${(props: FontProperties) => {
      return props.lineHeight
        ? `line-height: ${props.lineHeight} !important;`
        : ``;
    }}

  letter-spacing: -0.0375rem;
  
`;

export const H4Container = filterProps<FontProperties>("h4")`
  ${(props: FontProperties) => (!props.font ? `font: var(--font-bold);` : ``)}
  ${(props: FontProperties) =>
    !props.size ? `font-size: 1.7rem; .phone & { font-size: 1.7rem; }` : ``}
  ${(props: FontProperties) => (!props.weight ? `font-weight: bold;` : ``)}

  ${(props: FontProperties) => {
    return renderCssOptions(props);
  }}

  ${(props: FontProperties) => {
    return props.font ? styles.typography.family : ``;
  }}

  ${(props: FontProperties) => {
    return props.size ? getGetFontSize(props) : ``;
  }}
  
  line-height: 1; 
    ${(props: FontProperties) => {
      return props.lineHeight
        ? `line-height: ${props.lineHeight} !important;`
        : ``;
    }}

  letter-spacing: -0.025rem;
  
`;

export const H5Container = filterProps<FontProperties>("h5")`
  ${(props: FontProperties) => (!props.font ? `font: var(--font-bold);` : ``)}
  ${(props: FontProperties) =>
    !props.size ? `font-size: 1.5rem; .phone & { font-size: 1.5rem; }` : ``}
  ${(props: FontProperties) => (!props.weight ? `font-weight: bold;` : ``)}

  ${(props: FontProperties) => {
    return renderCssOptions(props);
  }}

  ${(props: FontProperties) => {
    return props.font ? styles.typography.family : ``;
  }}

  ${(props: FontProperties) => {
    return props.size ? getGetFontSize(props) : ``;
  }}
  
  line-height: 1; 
    ${(props: FontProperties) => {
      return props.lineHeight
        ? `line-height: ${props.lineHeight} !important;`
        : ``;
    }}

  letter-spacing: -0.0125rem; 
`;

export const H6Container = filterProps<FontProperties>("h6")`
  ${(props: FontProperties) => (!props.font ? `font: var(--font-bold);` : ``)}
  ${(props: FontProperties) =>
    !props.size ? `font-size: 1.3rem; .phone & { font-size: 1.3rem; }` : ``}
  ${(props: FontProperties) => (!props.weight ? `font-weight: bold;` : ``)}

  ${(props: FontProperties) => {
    return renderCssOptions(props);
  }}

  ${(props: FontProperties) => {
    return props.font ? styles.typography.family : ``;
  }}

  ${(props: FontProperties) => {
    return props.size ? getGetFontSize(props) : ``;
  }}

  
  line-height: 1; 
    ${(props: FontProperties) => {
      return props.lineHeight
        ? `line-height: ${props.lineHeight} !important;`
        : ``;
    }}

  letter-spacing: -0.00625rem; 
`;

export const LeadContainer = filterProps<FontProperties>("p")`
  ${(props: FontProperties) => (!props.font ? `font: var(--font-medium);` : ``)}
  ${(props: FontProperties) =>
    !props.size ? `font-size: 1.5rem; .phone & { font-size: 1.7rem; }` : ``}
  ${(props: FontProperties) => (!props.weight ? `font-weight: normal;` : ``)}

  ${(props: FontProperties) => {
    return renderCssOptions(props);
  }}

  ${(props: FontProperties) => {
    return props.font ? styles.typography.family : ``;
  }}

  ${(props: FontProperties) => {
    return props.size ? getGetFontSize(props) : ``;
  }}
 
  line-height: 1.5; 
    ${(props: FontProperties) => {
      return props.lineHeight
        ? `line-height: ${props.lineHeight} !important;`
        : ``;
    }}

  letter-spacing: -0.015625rem; 
`;

export const BodyContainer = filterProps<FontProperties>("span")`

  ${(props: FontProperties) =>
    !props.size ? `font-size: 1.2rem; .phone & { font-size: 1.4rem; }` : ``}
  ${(props: FontProperties) => (!props.weight ? `font-weight: normal;` : ``)}

  ${(props: FontProperties) => {
    return renderCssOptions(props);
  }}

  ${(props: FontProperties) => {
    return props.font ? styles.typography.family : ``;
  }}

  ${(props: FontProperties) => {
    return props.size ? getGetFontSize(props) : ``;
  }}
 
  line-height: 1; 
    ${(props: FontProperties) => {
      return props.lineHeight
        ? `line-height: ${props.lineHeight} !important;`
        : ``;
    }}

  letter-spacing: -0.00625rem; 
`;

export const SmallContainer = filterProps<FontProperties>("span")`
 
  ${(props: FontProperties) =>
    !props.size ? `font-size: 1rem; .phone & { font-size: 1.2rem; }` : ``}
  ${(props: FontProperties) => (!props.weight ? `font-weight: normal;` : ``)}

  ${(props: FontProperties) => {
    return renderCssOptions(props);
  }}

  ${(props: FontProperties) => {
    return props.font ? styles.typography.family : ``;
  }}

  ${(props: FontProperties) => {
    return props.size ? getGetFontSize(props) : ``;
  }}
 
  line-height: 1.47059; 
    ${(props: FontProperties) => {
      return props.lineHeight
        ? `line-height: ${props.lineHeight} !important;`
        : ``;
    }}

  letter-spacing: -0.00625rem; 
`;
