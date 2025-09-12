import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EjectIcon: React.FC<
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
                  d="M224 32c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 320 400 320H48c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192c9-9.9 21.8-15.5 35.3-15.5M0 432c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48s-21.5 48-48 48H48c-26.5 0-48-21.5-48-48"
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
                  d="M4.1 323.3c-7.7-17.4-4.3-37.7 8.6-51.8l176-192c9-9.9 21.8-15.5 35.3-15.5s26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 352 400 352H48c-19 0-36.3-11.2-43.9-28.7M48 304h352L224 112zm-24 96h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M224 96c-4.5 0-8.8 1.9-11.8 5.2l-176 192c-4.3 4.7-5.4 11.4-2.9 17.3s8.3 9.6 14.6 9.6H400c6.3 0 12.1-3.7 14.6-9.6s1.4-12.6-2.9-17.3l-176-192c-3-3.3-7.3-5.2-11.8-5.2zm0-32c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 352 400 352H48c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192c9-9.9 21.8-15.5 35.3-15.5M16 416h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M224 80c-9 0-17.5 3.8-23.6 10.4l-176 192c-8.6 9.4-10.8 22.9-5.7 34.5S35.3 336 48 336h352c12.7 0 24.2-7.5 29.3-19.1s2.9-25.2-5.7-34.5l-176-192C241.5 83.8 233 80 224 80m0-16c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 352 400 352H48c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192c9-9.9 21.8-15.5 35.3-15.5M8 432h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M0 432c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48s-21.5 48-48 48H48c-26.5 0-48-21.5-48-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M259.4 47.6C250.3 37.6 237.5 32 224 32s-26.3 5.6-35.4 15.6l-176 192c-12.9 14-16.2 34.3-8.6 51.8S29 320 48 320h352c19 0 36.3-11.2 43.9-28.7s4.3-37.7-8.6-51.8l-176-192z"
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
