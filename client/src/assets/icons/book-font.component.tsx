import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BookFontIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 96C0 43 43 0 96 0h320c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-53 0-96-43-96-96zm64 320c0 17.7 14.3 32 32 32h256v-64H96c-17.7 0-32 14.3-32 32M254.3 72.8C251.6 67.4 246 64 240 64s-11.6 3.4-14.3 8.8l-64 128-32 64c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2l27.5-55.1h108.2l27.6 55.2c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5l-32-64-64-128zm-14.3 43 38.1 76.2h-76.2z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 88C0 39.4 39.4 0 88 0h304c30.9 0 56 25.1 56 56v288c0 22.3-13.1 41.6-32 50.6V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80 0-2.7.1-5.4.4-8H0zm80 312c-17.7 0-32 14.3-32 32s14.3 32 32 32h288v-64zm-32-41.3c9.8-4.3 20.6-6.7 32-6.7h312c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8H88c-22.1 0-40 17.9-40 40zM261.5 93.3l88 176c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L289.2 256h-98.4l-17.4 34.8c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l88-176C222.6 85.1 230.9 80 240 80s17.4 5.1 21.5 13.3m3.7 114.7L240 157.7 214.8 208h50.3z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 64C0 28.7 28.7 0 64 0h336c26.5 0 48 21.5 48 48v320c0 20.9-13.4 38.7-32 45.3V480h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.3 0-64-28.7-64-64zm64 352c-17.7 0-32 14.3-32 32s14.3 32 32 32h320v-64zm-32-23.4c9.4-5.4 20.3-8.6 32-8.6h336c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H64c-17.7 0-32 14.3-32 32zm222.3-287.8 63.9 127.7.3.6 31.8 63.7c4 7.9.7 17.5-7.2 21.5s-17.5.7-21.5-7.2L294.1 256H185.9l-27.6 55.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l31.8-63.7.3-.6 63.9-127.7c2.7-5.4 8.3-8.8 14.3-8.8s11.6 3.4 14.3 8.8zM278.1 224 240 147.8 201.9 224z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 56C0 25.1 25.1 0 56 0h352c22.1 0 40 17.9 40 40v336c0 19.4-13.7 35.5-32 39.2V496h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-30.9 0-56-25.1-56-56zm56 360c-22.1 0-40 17.9-40 40s17.9 40 40 40h344v-80zm-40 .8C26.2 406.4 40.3 400 56 400h352c13.3 0 24-10.7 24-24V40c0-13.3-10.7-24-24-24H56c-22.1 0-40 17.9-40 40zm231.2-316.4 71.9 143.9.1.3 31.9 63.8c2 4 .4 8.8-3.6 10.7s-8.8.4-10.7-3.6L307.1 256H172.9l-29.8 59.6c-2 4-6.8 5.6-10.7 3.6s-5.6-6.8-3.6-10.7l31.9-63.8.1-.3 71.9-143.9c1.4-2.7 4.1-4.4 7.2-4.4s5.8 1.7 7.2 4.4zM299.1 240 240 121.9 180.9 240z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 416c0-17.7 14.3-32 32-32h320v64H96c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h320c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H96m158.3 72.8 64 128 32 64c4 7.9.7 17.5-7.2 21.5s-17.5.7-21.5-7.2L294.1 224H185.9l-27.6 55.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l32-64 64-128c2.7-5.4 8.3-8.8 14.3-8.8s11.6 3.4 14.3 8.8zm-14.3 43L201.9 192h76.2z"
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
