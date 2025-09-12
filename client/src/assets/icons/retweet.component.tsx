import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RetweetIcon: React.FC<
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
                  d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 192 32.1 192h32v128c0 53 43 96 96 96zm32-320c-17.7 0-32 14.3-32 32s14.3 32 32 32h112c17.7 0 32 14.3 32 32v128h-32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9S556.9 320 543.9 320h-32V192c0-53-43-96-96-96z"
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
                  d="M120 208h31c22.6 0 41-18.3 41-41 0-10.9-4.3-21.3-12-29l-67-67c-4.5-4.5-10.6-7-17-7s-12.5 2.5-17 7l-67 67c-7.7 7.7-12 18.1-12 29 0 22.6 18.3 41 41 41h31v120c0 48.6 39.4 88 88 88h136c13.3 0 24-10.7 24-24s-10.7-24-24-24H160c-22.1 0-40-17.9-40-40zm-24-86.1 38.1 38.1H58zM504 304V184c0-48.6-39.4-88-88-88H280c-13.3 0-24 10.7-24 24s10.7 24 24 24h136c22.1 0 40 17.9 40 40v120h-31c-22.6 0-41 18.3-41 41 0 10.9 4.3 21.3 12 29l67 67c4.5 4.5 10.6 7 17 7s12.5-2.5 17-7l67-67c7.7-7.7 12-18.1 12-29 0-22.6-18.3-41-41-41zm-24 86.1L441.9 352H518z"
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
                  d="m96 103.9 50.5 56.1h-101zm88 60.5c0-6.8-2.5-13.4-7.1-18.4l-69-76.7c-3-3.4-7.4-5.3-11.9-5.3s-8.9 1.9-11.9 5.3l-69 76.7c-4.6 5.1-7.1 11.6-7.1 18.4C8 179.7 20.3 192 35.6 192H80v144c0 44.2 35.8 80 80 80h144c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-26.5 0-48-21.5-48-48V192h44.4c15.2 0 27.6-12.3 27.6-27.6m296 243.7L429.5 352h100.9zm-88-60.5c0 6.8 2.5 13.4 7.1 18.4l69 76.7c3 3.4 7.4 5.3 11.9 5.3s8.9-1.9 11.9-5.3l69-76.7c4.6-5.1 7.1-11.6 7.1-18.4 0-15.2-12.3-27.6-27.6-27.6H496V176c0-44.2-35.8-80-80-80H272c-8.8 0-16 7.2-16 16s7.2 16 16 16h144c26.5 0 48 21.5 48 48v144h-44.4c-15.2 0-27.6 12.3-27.6 27.6"
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
                  d="M176 164.7c0 6.2-5.1 11.3-11.3 11.3H27.3c-6.2 0-11.3-5.1-11.3-11.3 0-3 1.2-5.9 3.3-8L96 80l76.7 76.7c2.1 2.1 3.3 5 3.3 8M27.3 192H88v152c0 39.8 32.2 72 72 72h152c4.4 0 8-3.6 8-8s-3.6-8-8-8H160c-30.9 0-56-25.1-56-56V192h60.7c15.1 0 27.3-12.2 27.3-27.3 0-7.2-2.9-14.2-8-19.3l-76.7-76.7c-3-3-7.1-4.7-11.3-4.7s-8.3 1.7-11.3 4.7L8 145.4c-5.1 5.1-8 12.1-8 19.3C0 179.8 12.2 192 27.3 192M400 347.3c0-6.2 5.1-11.3 11.3-11.3h137.4c6.2 0 11.3 5.1 11.3 11.3 0 3-1.2 5.9-3.3 8L480 432l-76.7-76.7c-2.1-2.1-3.3-5-3.3-8M548.7 320H488V168c0-39.8-32.2-72-72-72H264c-4.4 0-8 3.6-8 8s3.6 8 8 8h152c30.9 0 56 25.1 56 56v152h-60.7c-15.1 0-27.3 12.2-27.3 27.3 0 7.2 2.9 14.2 8 19.3l76.7 76.7c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7l76.7-76.7c5.1-5.1 8-12.1 8-19.3 0-15.1-12.2-27.3-27.3-27.3"
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
                  d="M272 128c0-17.7 14.3-32 32-32h112c53 0 96 43 96 96v128h32c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8h32V192c0-17.7-14.3-32-32-32h-112c-17.7 0-32-14.3-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M304 384c0 17.7-14.3 32-32 32H160c-53 0-96-43-96-96V192H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l64-64c12.5-12.5 32.8-12.5 45.3 0l64 64c9.2 9.2 11.9 22.9 6.9 34.9S172.9 192 159.9 192H128v128c0 17.7 14.3 32 32 32h112c17.7 0 32 14.3 32 32"
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
