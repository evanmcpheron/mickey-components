import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const IglooIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M320 33.8V160H48.5C100.2 82.8 188.1 32 288 32c10.8 0 21.5.6 32 1.8M352 160V39.1C424.9 55.7 487.2 99.8 527.5 160zM29.9 192H96v128H0c0-46 10.8-89.4 29.9-128M192 320h-64V192h320v128h-64v32h192v80c0 26.5-21.5 48-48 48H352V352c0-35.3-28.7-64-64-64s-64 28.7-64 64v128H48c-26.5 0-48-21.5-48-48v-80h192zm288 0V192h66.1c19.2 38.6 29.9 82 29.9 128z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 432H400v-64h128v48c0 8.8-7.2 16-16 16M395.4 320c-13.8-46.3-56.6-80-107.4-80s-93.6 33.7-107.4 80H144V192h288v128zm95.7-128c23.4 37 36.9 80.9 36.9 128h-48V192zM96 192v128H48c0-47.1 13.5-91 36.9-128zM288 80c5.4 0 10.7.2 16 .5V144H124.8C167.7 104.3 225 80 288 80m64 64V88.6c37.6 10.4 71.4 29.6 99.2 55.4zM176 368v64H64c-8.8 0-16-7.2-16-16v-48zM64 480h448c35.3 0 64-28.7 64-64v-96c0-159.1-128.9-288-288-288S0 160.9 0 320v96c0 35.3 28.7 64 64 64m224-192c35.3 0 64 28.7 64 64v80H224v-80c0-35.3 28.7-64 64-64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M576 320v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-96C0 160.9 128.9 32 288 32s288 128.9 288 288m-32 32H384v96h128c17.7 0 32-14.3 32-32zm0-32c0-46.6-12.5-90.3-34.2-128H480v128zM352 192H128v128h69.5c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H448V192zM96 352H32v64c0 17.7 14.3 32 32 32h128v-96H96m0-32V192H66.2C44.5 229.7 32 273.4 32 320zm391.9-160c-34.1-42.5-81.5-73.9-135.9-87.9V160zM320 66c-10.5-1.3-21.2-2-32-2-80.8 0-152.9 37.5-199.9 96H320zm-32 222c-35.3 0-64 28.7-64 64v96h128v-96c0-35.3-28.7-64-64-64"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M560 320v16h-96V192h64.1c20.4 38.1 31.9 81.7 31.9 128m-112 16h-69.5c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64H128V192h320zm-65.3 16H560v64c0 26.5-21.5 48-48 48H384v-96c0-5.5-.5-10.8-1.3-16M128 352h65.3c-.9 5.2-1.3 10.5-1.3 16v96H64c-26.5 0-48-21.5-48-48v-64h112m-16-16H16v-16c0-46.3 11.6-89.9 32-128.1v.1h64zm406.8-160H336V52.2c77 13.7 142.8 59.9 182.8 123.8M288 48c10.8 0 21.5.6 32 1.9V176H57.2C105.3 99.1 190.7 48 288 48M64 480h448c35.3 0 64-28.7 64-64v-96c0-159.1-128.9-288-288-288S0 160.9 0 320v96c0 35.3 28.7 64 64 64m224-192c44.2 0 80 35.8 80 80v96H208v-96c0-44.2 35.8-80 80-80"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M288 32c10.8 0 21.5.6 32 1.8V160H48.5C100.2 82.8 188.1 32 288 32m239.5 128H352V39.1C424.9 55.7 487.2 99.8 527.5 160M0 320c0-46 10.8-89.4 29.9-128H96v128zm197.5 0H128V192h320v128h-69.5c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64M384 352h192v80c0 26.5-21.5 48-48 48H384zM192 480H48c-26.5 0-48-21.5-48-48v-80h192zm384-160h-96V192h66.1c19.2 38.6 29.9 82 29.9 128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 33.8c10.9 1.2 21.5 3 32 5.4V160h175.5c6.8 10.2 13 20.9 18.6 32H480v128h96v32H384v128h-32V352c0-35.3-28.7-64-64-64s-64 28.7-64 64v128h-32V352H0v-32h96V192H29.9c5.5-11.1 11.7-21.8 18.6-32H320zM197.5 320c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H448V192H128v128z"
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
