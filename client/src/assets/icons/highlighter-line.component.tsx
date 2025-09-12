import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HighlighterLineIcon: React.FC<
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
                  d="M229 229 444 70.6l29.3 29.3L315 315zm-101 91-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3l50.7 50.7c12.5 12.5 32.8 12.5 45.3 0L224 416h71.7c15.3 0 29.6-7.2 38.6-19.5l201.3-273.1c5.5-7.4 8.4-16.4 8.4-25.6 0-11.4-4.5-22.4-12.6-30.5l-54.8-54.7C468.5 4.5 457.6 0 446.2 0 437 0 428 2.9 420.6 8.4L147.5 209.6c-12.3 9-19.5 23.4-19.5 38.6zm-57.9 83.3-63 63c-4.5 4.5-7 10.6-7 17v4.7c0 13.3 10.7 24 24 24h68.6c6.4 0 12.5-2.5 17-7l31-31zM224 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h328c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
                  d="m169.9 330.6-38.1 38.1 51.5 51.5 38.1-38.1c9-9 21.2-14.1 33.9-14.1h48l16.2-22.5-113-113-22.5 16.1v48c0 12.7-5.1 24.9-14.1 33.9zm178-24.6L502.8 90.2c.8-1.1 1.2-2.4 1.2-3.7 0-1.7-.7-3.3-1.9-4.5L470 49.9c-1.2-1.2-2.8-1.9-4.5-1.9-1.3 0-2.6.4-3.7 1.2L246 204.1zm-44.5 110h-48l-43.7 43.7c-10.7 10.7-26 14.1-39.5 10.1l-32.8 32.8c-6 6-14.1 9.4-22.6 9.4H32c-17.7 0-32-14.3-32-32v-4.7c0-8.5 3.4-16.6 9.4-22.6l72.8-72.8c-4-13.6-.6-28.8 10.1-39.5l43.7-43.8v-48c0-15.5 7.4-30 20-39L433.8 10.2C443 3.6 454.1 0 465.5 0c14.4 0 28.2 5.7 38.4 15.9l32.2 32.2c10.2 10.2 15.9 24 15.9 38.4 0 11.4-3.6 22.5-10.2 31.7L342.4 396c-9 12.6-23.5 20-39 20m-190.7 1.3L65.9 464H110l24.7-24.7-22.1-22.1zM248 464h304c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M166.6 319.2 122.9 363c-3.1 3.1-3.1 8.2 0 11.3l62.8 62.8c3.1 3.1 8.2 3.1 11.3 0l43.7-43.7c6-6 14.1-9.4 22.6-9.4h48c5.2 0 10-2.5 13-6.7l19.4-27-134.1-134-27 19.4c-4.2 3-6.7 7.8-6.7 13v48c0 8.5-3.4 16.6-9.4 22.6zm196 4.8L523.8 99.5c2.7-3.8 4.2-8.4 4.2-13 0-5.9-2.4-11.6-6.5-15.8l-32.2-32.2c-4.2-4.2-9.9-6.5-15.8-6.5-4.7 0-9.2 1.5-13 4.2L236 197.4zm-51.3 92h-48l-43.7 43.7a39.88 39.88 0 0 1-42 9.3l-36 36c-4.5 4.5-10.6 7-17 7H24c-13.3 0-24-10.7-24-24v-4.7c0-6.4 2.5-12.5 7-17l84-84c-5.2-14.2-2.1-30.7 9.3-42l43.7-43.7v-48c0-15.5 7.4-30 20-39L441.8 10.2C451 3.6 462.1 0 473.5 0c14.4 0 28.2 5.7 38.4 15.9l32.2 32.2c10.2 10.2 15.9 24 15.9 38.4 0 11.4-3.6 22.5-10.2 31.7L350.4 396c-9 12.6-23.5 20-39 20zM111 407.6 38.6 480h82.7l31-31zM240 480h320c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="m139.3 323.9-35.7 35.7c-9.4 9.4-9.4 24.6 0 33.9l46.8 46.8c9.4 9.4 24.6 9.4 33.9 0l35.7-35.7c3-3 7.1-4.7 11.3-4.7h64c10.3 0 20-5 26-13.3l22.6-31.4-155.1-155.1-31.4 22.6c-8.4 6-13.3 15.7-13.3 26v64c0 4.2-1.7 8.3-4.7 11.3zM353.4 342l167.4-233.1c4.7-6.5 7.2-14.3 7.2-22.4 0-10.2-4-19.9-11.2-27.1l-32.2-32.2C477.4 20 467.7 16 457.5 16c-8 0-15.8 2.5-22.4 7.2L201.9 190.6l151.5 151.5zm-58 73.9h-64l-35.7 35.7c-15.6 15.6-40.9 15.6-56.6 0l-46.8-46.7c-15.6-15.6-15.6-40.9 0-56.6l35.7-35.7v-64c0-15.5 7.4-30 20-39L425.8 10.2C435 3.6 446.1 0 457.5 0c14.4 0 28.2 5.7 38.4 15.9l32.2 32.2c10.2 10.2 15.9 24 15.9 38.4 0 11.4-3.6 22.5-10.2 31.7L334.4 396c-9 12.6-23.5 20-39 20zm-224.7 1.4c3.1 3.1 3.1 8.2 0 11.3l-52.1 52.1c-1.7 1.7-2.6 4-2.6 6.3 0 5 4 9 9 9h57.7c6.4 0 12.5-2.5 17-7l15.7-15.7c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L111 500.3c-7.5 7.5-17.7 11.7-28.3 11.7H25c-13.8 0-25-11.2-25-25 0-6.6 2.6-13 7.3-17.7l52.1-52.1c3.1-3.1 8.2-3.1 11.3 0zM232 496h336c4.4 0 8 3.6 8 8s-3.6 8-8 8H232c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="m183.3 183.3 177.4 177.4-26.3 35.7c-9 12.3-23.4 19.5-38.6 19.5H224l-57.4 57.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3L128 320v-71.7c0-15.3 7.2-29.6 19.5-38.6l35.7-26.3zM224 464h328c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M360.7 360.7 183.3 183.3 420.6 8.4C428 2.9 437 0 446.2 0c11.4 0 22.4 4.5 30.5 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5 0 9.2-2.9 18.2-8.4 25.6zM7 466.3l56-56c1.5 4.5 4.1 8.7 7.6 12.2l50.7 50.7c3.6 3.6 7.8 6.1 12.2 7.6l-24 24c-4.5 4.5-10.6 7-17 7H24c-13.3 0-24-10.7-24-24v-4.7c0-6.4 2.5-12.5 7-17z"
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
