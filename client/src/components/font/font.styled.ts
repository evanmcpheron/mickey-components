import styled, { css } from "styled-components";
import type {
  FontVariant,
  FontWeight,
  FontAlign,
  FontTone,
} from "./font.component";

const variantCSS: Record<FontVariant, ReturnType<typeof css>> = {
  h1: css`
    font-size: 6rem;
    line-height: 1.167;
    letter-spacing: -0.01562em;
    font-weight: 300;
  `,
  h2: css`
    font-size: 3.75rem;
    line-height: 1.2;
    letter-spacing: -0.00833em;
    font-weight: 300;
  `,
  h3: css`
    font-size: 3rem;
    line-height: 1.167;
    letter-spacing: 0em;
    font-weight: 400;
  `,
  h4: css`
    font-size: 2.125rem;
    line-height: 1.235;
    letter-spacing: 0.00735em;
    font-weight: 400;
  `,
  h5: css`
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
    font-weight: 400;
  `,
  h6: css`
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    font-weight: 500;
  `,
  subtitle1: css`
    font-size: 1rem;
    line-height: 1.75;
    letter-spacing: 0.00938em;
    font-weight: 400;
  `,
  subtitle2: css`
    font-size: 0.875rem;
    line-height: 1.57;
    letter-spacing: 0.00714em;
    font-weight: 500;
  `,
  body1: css`
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-weight: 500;
  `,
  body2: css`
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    font-weight: 400;
  `,
  button: css`
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    font-weight: 500;
    text-transform: uppercase;
  `,
  caption: css`
    font-size: 0.75rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    font-weight: 400;
  `,
  overline: css`
    font-size: 0.75rem;
    line-height: 2.66;
    letter-spacing: 0.08333em;
    font-weight: 400;
    text-transform: uppercase;
  `,
};

const weightToNumber = (w?: FontWeight) =>
  typeof w === "number"
    ? w
    : w === "light"
    ? 300
    : w === "medium"
    ? 500
    : w === "bold"
    ? 700
    : undefined; // regular => use variant default

interface StyledProps {
  $variant: FontVariant;
  $align: FontAlign;
  $gutterBottom: boolean;
  $paragraph: boolean;
  $noWrap: boolean;
  $clamp?: number;
  $tone: FontTone;
  $weight?: FontWeight;
  $uppercase: boolean;
}

export const StyledFont = styled.span<StyledProps>`
  margin: 0;
  color: ${({ $tone }) =>
    $tone === "inherit" ? "inherit" : `var(--${$tone}-main)`};
  text-align: ${({ $align }) => $align};
  ${({ $variant }) => variantCSS[$variant]}

  /* optional weight override */
  ${({ $weight }) =>
    $weight !== undefined &&
    css`
      font-weight: ${weightToNumber($weight)};
    `}

  /* optional uppercase override */
  ${({ $uppercase }) =>
    $uppercase &&
    css`
      text-transform: uppercase;
    `}

  /* noWrap: single-line ellipsis */
  ${({ $noWrap }) =>
    $noWrap &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}

  /* clamp: multi-line truncation */
  ${({ $clamp }) =>
    $clamp &&
    $clamp > 1 &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${$clamp};
      line-clamp: ${$clamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}

  /* spacing helpers similar to MUI */
  ${({ $gutterBottom }) =>
    $gutterBottom &&
    css`
      margin-bottom: 0.35em;
    `}
  ${({ $paragraph, $clamp }) =>
    $paragraph &&
    !$clamp &&
    css`
      line-height: 1.65;
      display: block;
    `}
`;
