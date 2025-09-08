import styled, { css } from "styled-components";
import type { CardProps } from "./card.component";

const toSpace = (v?: number | string) =>
  v === undefined ? undefined : typeof v === "number" ? `var(--space-${v})` : v;

const toRadius = (v?: number | string) => {
  if (v === undefined) return `var(--radius-md)`;
  if (typeof v === "number") return `${v}px`;
  return ["none", "xs", "sm", "md", "lg", "xl", "2xl", "pill"].includes(v)
    ? `var(--radius-${v})`
    : v;
};

const toShadow = (elev?: number) => {
  if (elev === undefined) return `var(--card-shadow)`;
  if (elev === 0) return `var(--shadow-0)`;
  return `var(--shadow-${elev})`;
};

const bumpShadow = (elev?: number) => {
  if (elev === undefined) return `var(--shadow-2)`;
  const order = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24];
  const i = Math.max(0, order.indexOf(elev));
  const next = order[Math.min(i + 1, order.length - 1)];
  return toShadow(next);
};

export const StyledCard = styled.div<CardProps>`
  position: relative;
  display: block;

  background: var(--card-bg);
  color: var(--text-primary);
  border-radius: ${({ radius }) => toRadius(radius)};
  overflow: hidden; /* clip children to radius */

  ${({ fullWidth }) => !fullWidth && "width: fit-content"};

  padding: ${({ padding }) => toSpace(padding)};

  ${({ variant }) =>
    variant === "outlined"
      ? css`
          border: 1px solid var(--card-border);
          box-shadow: var(--shadow-0);
        `
      : variant === "plain"
      ? css`
          border: 1px solid transparent;
          box-shadow: var(--shadow-0);
        `
      : css`
          border: 1px solid transparent;
          box-shadow: var(--card-shadow);
        `}

  ${({ variant, elevation }) =>
    variant === "elevated" &&
    elevation !== undefined &&
    css`
      box-shadow: ${toShadow(elevation)};
    `}

  transition:
    box-shadow var(--duration-short) var(--easing-ease-in-out),
    transform var(--duration-short) var(--easing-ease-in-out),
    background-color var(--duration-short) var(--easing-ease-in-out);

  ${({ hoverable, variant, elevation }) =>
    hoverable &&
    css`
      cursor: pointer;
      &:hover {
        ${variant === "outlined"
          ? css`
              box-shadow: var(--shadow-1);
              background: var(--surface-elevated);
            `
          : css`
              box-shadow: ${bumpShadow(elevation)};
              transform: translateY(-1px);
            `}
      }
    `}

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
`;

export const StyledCardHeader = styled.div`
  border-bottom: 1px solid var(--primary-main);
  padding: 0 var(--space-1);
  margin-bottom: var(--space-1);
`;

export const StyledCardBody = styled.div`
  padding: 0 var(--space-1);
`;

export const StyledCardFooter = styled.div`
  border-top: 1px solid var(--primary-main);
  padding-top: var(--space-1);
  margin-top: var(--space-1);
`;
