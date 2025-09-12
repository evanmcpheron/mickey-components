import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LaptopArrowDownIcon: React.FC<
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
                  d="M128 32c-35.3 0-64 28.7-64 64v256h64V96h128V32zm384 64v256h64V96c0-35.3-28.7-64-64-64H384v64zM19.2 384C8.6 384 0 392.6 0 403.2 0 445.6 34.4 480 76.8 480h486.4c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2zM344 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v182.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V56z"
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
                  d="M256 32v48H128c-8.8 0-16 7.2-16 16v224H64V96c0-35.3 28.7-64 64-64zm128 48V32h128c35.3 0 64 28.7 64 64v224h-48V96c0-8.8-7.2-16-16-16zm-64-48c13.3 0 24 10.7 24 24v182.1l39-39c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l39 39V56c0-13.3 10.7-24 24-24zM96 432h448c20.9 0 38.7-13.4 45.3-32H50.7c6.6 18.6 24.4 32 45.3 32M0 384c0-17.7 14.3-32 32-32h576c17.7 0 32 14.3 32 32 0 53-43 96-96 96H96c-53 0-96-43-96-96"
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
                  d="M128 32h144v32H128c-17.7 0-32 14.3-32 32v256H64V96c0-35.3 28.7-64 64-64m384 32H368V32h144c35.3 0 64 28.7 64 64v256h-32V96c0-17.7-14.3-32-32-32M76.8 448h486.4c20.3 0 37.4-13.5 42.9-32H33.9c5.5 18.5 22.7 32 42.9 32M0 403.2C0 392.6 8.6 384 19.2 384h601.6c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2M336 48v217.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0l-80-80c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l52.7 52.7V48c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M128 32h152v16H128c-26.5 0-48 21.5-48 48v256H64V96c0-35.3 28.7-64 64-64m384 16H360V32h152c35.3 0 64 28.7 64 64v256h-16V96c0-26.5-21.5-48-48-48M16 403.2c0 33.6 27.2 60.8 60.8 60.8h486.4c33.6 0 60.8-27.2 60.8-60.8 0-1.8-1.4-3.2-3.2-3.2H19.2c-1.8 0-3.2 1.4-3.2 3.2m-16 0C0 392.6 8.6 384 19.2 384h601.6c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2M328 40v252.7l74.3-74.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-88 88c-3.1 3.1-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l74.4 74.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M296 32H128c-35.3 0-64 28.7-64 64v256h64V96h168zm48 64h168v256h64V96c0-35.3-28.7-64-64-64H344zM0 403.2C0 445.6 34.4 480 76.8 480h486.4c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2H19.2C8.6 384 0 392.6 0 403.2"
                />
                <path
                  className="aps-icon-foreground"
                  d="M296 96H128v256h384V96H344v110.1l39-39c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l39 39V96z"
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
