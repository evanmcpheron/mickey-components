import type { RowDirection, Spacing } from "@/helpers";
import styled from "styled-components";

export const RadioWrapper = styled.div<{
  $groupDirection: RowDirection;
  $spacing?: Spacing;
}>`
  display: flex;
  gap: var(--space-1);
  justify-content: ${({ $spacing }) => $spacing ?? "initial"};
  flex-direction: ${({ $groupDirection }) => $groupDirection};
`;

export const RadioOptionWrapper = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  user-select: none;
  position: relative;
`;

export const HiddenRadio = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  pointer-events: none;

  &:focus-visible + span {
    outline: 2px solid Highlight;
    outline-offset: 2px;
  }
`;

export const CustomControl = styled.span<{
  $checked: boolean;
  $disabled?: boolean;
  $color?: string;
}>`
  /* Size of the radio */
  width: 18px;
  height: 18px;
  border-radius: 50%;
  box-sizing: border-box;

  /* Border + base color */
  border: ${({ $checked }) => ($checked ? "2px" : "1px")} solid
    ${({ $checked, $color }) =>
      $checked ? $color || "var(--primary-main)" : "var(--color-neutral-6)"};
  background: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: border-color 120ms ease, background 120ms ease,
    box-shadow 120ms ease;

  /* Inner dot */
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(${({ $checked }) => ($checked ? 1 : 0)});
    transition: transform 120ms ease;
    background: ${({ $color }) => $color || "var(--primary-main)"};
  }

  /* Disabled look */
  ${({ $disabled }) =>
    $disabled &&
    `
      border-color: #c7c7c7;
      background: #f5f5f5;
    `}
`;
