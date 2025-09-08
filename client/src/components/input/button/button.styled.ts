import type { Role, Variant } from "@/helpers";
import styled, { css } from "styled-components";

interface StyledButtonProps {
  $color?: Role;
  $variant?: Variant;
  $fullWidth?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  font-family: var(--font-family-sans);
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-button);
  line-height: var(--line-height-button);

  border-radius: var(--radius-sm);
  padding: calc(var(--space-unit) * 1) calc(var(--space-unit) * 2);
  cursor: pointer;
  transition: background var(--duration-short) var(--easing-ease-in-out),
    color var(--duration-short) var(--easing-ease-in-out),
    border-color var(--duration-short) var(--easing-ease-in-out),
    box-shadow var(--duration-short) var(--easing-ease-in-out),
    transform 80ms ease;

  ${({ $color = "primary", $variant = "contained" }) => {
    switch ($variant) {
      case "text":
        return css`
          background: transparent;
          color: var(--${$color}-main);
          border: none;

          &:hover {
            background: var(--action-hover);
          }
          &:active {
            transform: scale(0.97);
          }
          &:disabled {
            color: var(--button-disabled-color);
            background: transparent;
            cursor: not-allowed;
          }
        `;

      case "outlined":
        return css`
          background: transparent;
          color: var(--${$color}-main);
          border: 1px solid var(--${$color}-main);

          &:hover {
            background: var(--action-hover);
          }
          &:active {
            transform: scale(0.97);
          }
          &:disabled {
            color: var(--button-disabled-color);
            border-color: var(--button-disabled-bg);
            cursor: not-allowed;
          }
        `;

      case "contained":
      default:
        return css`
          background: var(--${$color}-main);
          color: var(--${$color}-contrast);
          border: none;

          &[data-selected="true"] {
            background: var(--${$color}-light);
          }

          &:hover {
            background: color-mix(in srgb, var(--${$color}-main) 92%, black);
            box-shadow: var(--shadow-2);
          }
          &:active {
            transform: scale(0.97);
            box-shadow: var(--shadow-1);
          }
          &:disabled {
            background: var(--button-disabled-bg);
            color: var(--button-disabled-color);
            cursor: not-allowed;
          }
        `;
    }
  }}

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
`;
