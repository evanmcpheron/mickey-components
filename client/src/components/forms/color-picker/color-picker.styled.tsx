import { css } from "styled-components";
import type {
  ColorDivProps,
  ColorPickerProps,
  CircleProps,
  PopoverProps,
  CoverProps,
} from "./color-picker.types";
import type { ColorResult, RgbaColor, HslaColor } from "@uiw/react-color";
import { filterProps } from "@/helpers/types/style.types";
import { styles } from "@/helpers";

const getBackgroundColor = (
  color: ColorResult | undefined,
  disabled?: boolean
) => {
  if (color) {
    if (typeof color === "object") {
      if (typeof color === typeof {} && "rgb" in color) {
        const { r, g, b, a } = color.rgba as RgbaColor;
        return `background: rgba(${r}, ${g}, ${b}, ${a})`;
      } else if (typeof color === typeof {} && "hsl" in color) {
        const { h, s, l, a } = color.hsla as HslaColor;
        return `background: hsla(${h}, ${s}%, ${l}%, ${a})`;
      }
    }

    if (disabled) {
      return `
      background: linear-gradient(135deg, ${color} 0%, ${color} 45%, ${styles.color.disabled.onBackground} 45%,${styles.color.disabled.onBackground} 55%, ${color} 55%, ${color} 100%);
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${styles.color.disabled.background};
        opacity: .75;
      }
      `;
    }

    return `background: ${color}`;
  } else {
    const colorDisabled = disabled
      ? styles.color.disabled.background
      : "rgba(236, 236, 236, 0.7)";
    return `background: linear-gradient(135deg, ${colorDisabled} 0%, ${colorDisabled} 45%, ${
      disabled ? styles.color.disabled.onBackground : styles.color.primary.main
    }  50%, ${colorDisabled} 55%, ${colorDisabled} 100%)`;
  }
};

export const Container = filterProps<ColorPickerProps>("div")`
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
`;

export const ColorDiv = filterProps<ColorDivProps>("div")`
  position: relative;
	width: 40px;
	height: 40px;
	border-radius:  ${styles.radius.md};
  border: ${styles.surface.border.default.solidLightMd};
	${({ color, disabled }) => {
    return getBackgroundColor(color, disabled);
  }};
`;

export const Popover = filterProps<PopoverProps>("div")`
	position: absolute;
	z-index: 999999; 
  left: 0;
  right: 0;
  border: ${styles.surface.border.default.solidLightThin};
  background: ${styles.color.primary.contrast};
  min-height: 250px;
  min-width: 250px;
  border-radius: ${styles.radius.md};
  pointer-events: auto;
  padding: 6px;
  width: 235px;
  display: flex;
  justify-content: center;
  align-items: center;

  	${({ popoverUp }) =>
      popoverUp
        ? css`
            margin-bottom: 4px;
            bottom: 100%;
            top: auto;
          `
        : css`
            margin-top: 4px;
            top: 100%;
            bottom: auto;
          `}
`;

export const Cover = filterProps<CoverProps>("div")`
	position: fixed;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
`;

export const Circle = filterProps<CircleProps>("div")`
  position: relative;
width: 40px;
	height: 40px;
	box-sizing: border-box;
	border-radius: 100%;
  border: ${styles.surface.border.default.solidLightThin};
	${({ color, disabled }) => {
    return getBackgroundColor(color, disabled);
  }};
`;

export const Controls = filterProps("div")`
	display: flex;
	justify-content: space-between;
	margin-bottom: 5px;
	gap: 10px;
`;

export const ButtonGroups = filterProps("div")`
	display: flex;
	align-items: center;
  width: 100%;
  justify-content: space-between
`;
