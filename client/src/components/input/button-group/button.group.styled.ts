import type { Orientation, Variant } from "@/helpers";
import styled from "styled-components";

interface StyledButtonGroupProps {
  variant?: Variant;
  $fullWidth?: boolean;
  $orientation?: Orientation;
  color?: string;
}

export const StyledButtonGroup = styled.div<StyledButtonGroupProps>`
  display: ${({ $fullWidth }) => ($fullWidth ? "flex" : "inline-flex")};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  flex: ${({ $fullWidth }) => ($fullWidth ? "1 1 auto" : "0 0 auto")};

  flex-direction: ${({ $orientation }) =>
    $orientation === "vertical" ? "column" : "row"};

  border-radius: var(--radius-sm);
  overflow: hidden;

  button {
    margin: 0;
    border-radius: 0;

    flex: ${({ $fullWidth, $orientation }) =>
      $fullWidth && $orientation !== "vertical" ? "1 1 0" : "0 0 auto"};

    ${({ variant, color }) =>
      variant === "text" &&
      `
        border-left: 1px solid var(--${color || "primary"}-main);
        border-right: 1px solid var(--${color || "primary"}-main);
      `}

    &:active {
      transform: scale(1);
      box-shadow: none;

      ${({ variant, color }) =>
        variant === "contained" &&
        `background: color-mix(in srgb, var(--${color}-main) 92%, black);`}
    }
    &:hover {
      box-shadow: none;
    }
  }

  button:first-child {
    border-top-left-radius: ${({ $orientation }) =>
      $orientation !== "vertical" ? "var(--radius-sm)" : "0"};
    border-bottom-left-radius: ${({ $orientation }) =>
      $orientation !== "vertical" ? "var(--radius-sm)" : "0"};
    ${({ variant, $orientation }) =>
      $orientation !== "vertical" && variant === "text" && "border-left: none;"}
  }

  button:last-child {
    border-top-right-radius: ${({ $orientation }) =>
      $orientation !== "vertical" ? "var(--radius-sm)" : "0"};
    border-bottom-right-radius: ${({ $orientation }) =>
      $orientation !== "vertical" ? "var(--radius-sm)" : "0"};
    ${({ variant, $orientation }) =>
      $orientation !== "vertical" &&
      variant === "text" &&
      "border-right: none;"}
  }
`;
