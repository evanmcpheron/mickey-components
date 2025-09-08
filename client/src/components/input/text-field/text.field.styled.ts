import { Font } from "@/components/font";
import type { MickeyObject } from "@/helpers/types/base.types";
import styled, { css } from "styled-components";

type Variant = "outlined" | "filled" | "standard";
type Size = "sm" | "md";

const heights: Record<Size, number> = { sm: 36, md: 44 } as MickeyObject;
const paddX: Record<Size, number> = { sm: 12, md: 14 } as MickeyObject;
const labelPad = 4;

export const FieldRoot = styled.div<{ $fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  gap: var(--space-1);
  min-width: 0; /* flex shrink friendliness */
`;

export const FieldWrapper = styled.label<{
  $variant: Variant;
  $size: Size;
  $error: boolean;
  $disabled: boolean;
  $hasStart: boolean;
  $hasEnd: boolean;
  $shrink: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;

  border-radius: var(--radius-sm);
  background: ${({ $variant }) =>
    $variant === "filled" ? "var(--input-bg)" : "transparent"};
  border: 1px solid
    ${({ $variant }) =>
      $variant === "outlined" ? "var(--input-border-color)" : "transparent"};

  padding-left: ${({ $hasStart, $size }) => ($hasStart ? 8 : paddX[$size])}px;
  padding-right: ${({ $hasEnd, $size }) => ($hasEnd ? 8 : paddX[$size])}px;

  height: ${({ $size }) => heights[$size]}px;

  /* Focus ring */
  &:focus-within {
    border-color: var(--input-focus-border);
    box-shadow: 0 0 0 1px var(--input-focus-border);
  }

  /* Error */
  ${({ $error }) =>
    $error &&
    css`
      border-color: var(--error-main);
      &:focus-within {
        box-shadow: 0 0 0 1px var(--error-main);
      }
    `}

  /* Disabled */
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: var(--opacity-disabled);
      cursor: not-allowed;
    `}
`;

export const Label = styled(Font)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  transition: transform var(--duration-short) var(--easing-ease-in-out),
    top var(--duration-short) var(--easing-ease-in-out),
    color var(--duration-short) var(--easing-ease-in-out),
    font-size var(--duration-short) var(--easing-ease-in-out);
  color: var(--text-secondary);
  background: transparent;
  padding: 0 ${labelPad}px;

  ${({ $variant }) =>
    $variant === "outlined" &&
    css`
      /* Sit atop border with same background as input bg so it "notches" */
      background: var(--surface-paper);
    `}

  ${({ $variant, $size, $shrink }) =>
    $shrink
      ? css`
          top: 0;
          transform: translateY(-50%) scale(0.85);
          transform-origin: left top;
          color: var(--text-secondary);
        `
      : css`
          font-size: ${$size === "sm" ? "0.875rem" : "1rem"};
        `}
  
  ${({ $error }) =>
    $error &&
    css`
      color: var(--error-main);
    `}
  ${({ $disabled }) =>
    $disabled &&
    css`
      color: var(--text-disabled);
    `}
`;

const inputBase = css<{
  $size: Size;
  $variant: Variant;
  $hasStart: boolean;
  $hasEnd: boolean;
}>`
  appearance: none;
  border: none;
  outline: none;
  background: transparent;
  color: var(--input-text-color);
  font: inherit;
  width: 100%;
  min-width: 0; /* flex shrink friendliness */

  line-height: ${({ $size }) => ($size === "sm" ? 1.4 : 1.5)};
  padding: 0;

  /* Placeholder */
  &::placeholder {
    color: var(--input-placeholder-color);
    opacity: 1;
  }

  /* Standard + filled underline (minimal first pass) */
  ${({ $variant }) =>
    $variant !== "outlined" &&
    css`
      border-bottom: 1px solid var(--input-border-color);
      &:focus {
        border-bottom-color: var(--input-focus-border);
      }
    `}
`;

export const StyledInput = styled.input<{
  $size: Size;
  $variant: Variant;
  $hasStart: boolean;
  $hasEnd: boolean;
}>`
  ${inputBase}
`;

export const StyledTextArea = styled.textarea<MickeyObject>`
  ${inputBase}
  resize: none;
  padding-top: 6px;
  padding-bottom: 6px;
  height: auto;
`;

export const StartSlot = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
`;

export const EndSlot = styled(StartSlot)``;

export const HelperText = styled.div<{ $error: boolean; $disabled: boolean }>`
  font-size: 0.75rem;
  line-height: 1.4;
  color: ${({ $error, $disabled }) =>
    $error
      ? "var(--error-main)"
      : $disabled
      ? "var(--text-disabled)"
      : "var(--text-secondary)"};
  margin: 0 2px;
`;
