import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StaplerIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone" | Dimensions;
  }
> = ({ type, size, color, active, className, style, ...more }) => {
  const domRef: MickeyObject = useRef(null);

  const { onPress, onOut, onMove, onUp, onDown, onOver, groupId } = more;
  const pointerEvents = {
    onPress,
    onOut,
    onMove,
    onUp,
    onDown,
    onOver,
    groupId,
  };

  usePointerEvent({ element: domRef, active: active, ...pointerEvents });

  const internalProperties = removeUndefined({
    className,
    style: { ...(style || {}) },
    active,
    size,
    color,
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M640 299.3V432c0 26.5-21.5 48-48 48H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h384v-48H96c-17.7 0-32-14.3-32-32V219.4L33.8 214C14.2 210.5 0 193.5 0 173.7c0-8.9 2.9-17.5 8.2-24.6l35.6-47.5C76.7 57.8 128.2 32 182.9 32c27 0 53.6 6.3 77.8 18.4l326.2 163.1c32.6 16.2 53.1 49.5 53.1 85.8M448 304v-16l-320-57.1V304z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M448 384v48H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h536c26.5 0 48-21.5 48-48V288l-.7-.1c-3.8-31.8-23.3-59.9-52.4-74.4L260.7 50.4C236.6 38.3 209.9 32 182.9 32c-54.7 0-106.2 25.8-139.1 69.6l-32.3 43.1C4 154.6 0 166.7 0 179.1c0 26.4 17.9 49.3 43.5 55.7L64 240v104c0 22.1 17.9 40 40 40zm0-48H112v-84zm72 96h-24v-96c0-22-15-41.2-36.4-46.6L55.2 188.3c-4.2-1.1-7.2-4.8-7.2-9.2 0-2 .7-4 1.9-5.7l32.3-43.1C106 98.7 143.3 80 182.9 80c19.5 0 38.8 4.6 56.3 13.3l326.3 163.1c14.5 7.3 24.3 21.3 26.2 37.2l.3 2.4v136z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M448 352v32H80c-26.5 0-48 21.5-48 48s21.5 48 48 48h512c26.5 0 48-21.5 48-48V299.3c0-36.4-20.5-69.6-53.1-85.9l-326.2-163C236.6 38.3 209.9 32 182.9 32c-54.7 0-106.2 25.8-139.1 69.6l-32.3 43.1C4 154.6 0 166.7 0 179.1c0 26.4 17.9 49.3 43.5 55.7L72 242v78c0 17.7 14.3 32 32 32zm-64-32H104v-70zm224 64H480v-48c0-14.7-10-27.5-24.2-31L51.3 203.8C39.9 201 32 190.8 32 179.1c0-5.5 1.8-10.9 5.1-15.3l32.3-43.1C96.2 85 138.3 64 182.9 64c22 0 43.8 5.1 63.5 15l326.2 163.1c21.7 10.8 35.4 33 35.4 57.2V384m-128 32h128v16c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h400"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M448 352v64H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h528c26.5 0 48-21.5 48-48V315.3c0-36.4-20.5-69.6-53.1-85.9l-326.2-163C236.6 54.3 209.9 48 182.9 48c-54.7 0-106.2 25.8-139.1 69.6l-35.2 47C3 172 0 181 0 190.4c0 19.8 13.5 37 32.6 41.8L48 236v92c0 13.3 10.7 24 24 24zm0-16H72c-4.4 0-8-3.6-8-8v-88zm176 80H464v-80c0-7.3-5-13.7-12.1-15.5L36.5 216.6c-12.1-3-20.5-13.8-20.5-26.3 0-5.9 1.9-11.6 5.4-16.3l35.2-47c29.9-39.6 76.6-63 126.3-63 24.5 0 48.7 5.7 70.6 16.7l326.3 163.1c27.1 13.5 44.2 41.2 44.2 71.5V416m-160 16h160c0 17.7-14.3 32-32 32H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h400"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M448 288v64H96c-17.7 0-32-14.3-32-32V219.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M640 304v-4.7c0-36.4-20.5-69.6-53.1-85.9l-326.2-163C236.6 38.3 209.9 32 182.9 32c-54.7 0-106.2 25.8-139.1 69.6L8.2 149.1C2.9 156.2 0 164.8 0 173.7c0 19.9 14.2 36.9 33.8 40.4L448 288v128H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h528c26.5 0 48-21.5 48-48z"
                />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
