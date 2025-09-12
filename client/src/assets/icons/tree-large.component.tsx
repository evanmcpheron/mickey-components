import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TreeLargeIcon: React.FC<
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
                  d="M62 169.4 210.6 5.9C214 2.1 218.9 0 224 0s10 2.1 13.4 5.9L386 169.4c3.9 4.2 6 9.8 6 15.5 0 12.7-10.3 23.1-23.1 23.1H344l75.5 105.7c2.9 4.1 4.5 9 4.5 14.1 0 13.4-10.9 24.2-24.2 24.2H368l76.2 122c2.5 4 3.8 8.5 3.8 13.2 0 13.7-11.1 24.9-24.9 24.9H24.9C11.1 512 0 500.9 0 487.1c0-4.7 1.3-9.2 3.8-13.2L80 352H48.2C34.8 352 24 341.1 24 327.8c0-5 1.6-10 4.5-14.1L104 208H79.1C66.3 208 56 197.7 56 184.9c0-5.7 2.1-11.3 6-15.5"
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
                  d="M224 0c7.4 0 14.4 3.4 18.9 9.3l138.3 177.6c5.6 7.2 6.6 17 2.6 25.3s-12.4 13.5-21.6 13.5h-16.5l67.2 100.6c4.9 7.4 5.4 16.8 1.2 24.6s-12.3 12.7-21.2 12.7H369l74.9 111.1c5 7.4 5.5 16.9 1.3 24.7S432.9 512 424 512H24c-8.9 0-17-4.9-21.2-12.7S-.9 482 4.1 474.6L79 363.5H55c-8.9 0-17-4.9-21.2-12.7s-3.7-17.3 1.2-24.6l67.2-100.6H85.8c-9.2 0-17.5-5.2-21.6-13.5s-3-18 2.6-25.3L205.1 9.3C209.6 3.4 216.6 0 224 0m-89.1 177.6h12.3c8.9 0 17 4.9 21.2 12.7s3.7 17.3-1.2 24.6L99.9 315.5h24.2c8.9 0 17 4.9 21.2 12.7s3.7 17.3-1.3 24.7L69.1 464h309.8l-75-111.1c-5-7.4-5.5-16.9-1.3-24.7s12.3-12.7 21.2-12.7H348l-67.2-100.6c-4.9-7.4-5.4-16.8-1.2-24.6s12.3-12.7 21.2-12.7h12.3L224 63.1z"
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
                  d="M224 0c4.8 0 9.3 2.2 12.4 5.9l141.3 172.7c4.1 5 6.3 11.2 6.3 17.6 0 15.3-12.4 27.8-27.8 27.8h-18.9l72.6 90.8c4 4.9 6.1 11.1 6.1 17.4 0 15.4-12.5 27.8-27.8 27.8h-21.3l76 107.6c3.4 4.7 5.2 10.4 5.2 16.2 0 15.5-12.6 28.1-28.1 28.1H28.1C12.6 512 0 499.4 0 483.9c0-5.8 1.8-11.5 5.2-16.2L81.1 360H59.8C44.5 360 32 347.5 32 332.2c0-6.3 2.2-12.5 6.1-17.4l72.6-90.8H91.8C76.4 224 64 211.6 64 196.2c0-6.4 2.2-12.6 6.3-17.6L211.6 5.9c3-3.7 7.6-5.9 12.4-5.9m-64 480h252.4l-89.5-126.8c-3.4-4.9-3.9-11.3-1.1-16.6S330 328 336 328h43.5l-88-110c-3.8-4.8-4.6-11.4-1.9-16.9s8.3-9.1 14.4-9.1h43.3L224 41.3 100.7 192H144c6.2 0 11.8 3.5 14.4 9.1s1.9 12.1-1.9 16.9l-88 110H112c6 0 11.5 3.3 14.2 8.6s2.3 11.7-1.1 16.6L35.6 480z"
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
                  d="M224 0c2.2 0 4.3.9 5.8 2.5l145.7 153.4c5.4 5.7 8.5 13.3 8.5 21.3 0 17-13.8 30.9-30.9 30.9h-30.8l85.4 91.9c5.3 5.7 8.3 13.3 8.3 21.1 0 17.1-13.9 31-31 31h-32.2l88.1 108.4c4.6 5.6 7.1 12.7 7.1 19.9 0 17.5-14.2 31.6-31.6 31.6H31.6C14.2 512 0 497.8 0 480.4c0-7.3 2.5-14.3 7.1-19.9L95.2 352H63c-17.1 0-31-13.9-31-31 0-7.8 3-15.3 8.3-21.1l85.4-91.9H94.9c-17 0-30.9-13.8-30.9-30.9 0-7.9 3-15.5 8.5-21.3L218.2 2.5C219.7.9 221.8 0 224 0m-64 496h256.4c8.6 0 15.6-7 15.6-15.6 0-3.6-1.2-7.1-3.5-9.8L329.8 349c-1.9-2.4-2.3-5.7-1-8.5s4.1-4.6 7.2-4.6h49c8.3 0 15-6.7 15-15 0-3.8-1.4-7.4-4-10.2l-97.9-105.3c-2.2-2.3-2.7-5.7-1.5-8.6s4.2-4.8 7.3-4.8H353c8.2 0 14.9-6.7 14.9-14.9 0-3.8-1.5-7.5-4.1-10.2L224 19.6 84.1 166.9c-2.6 2.8-4.1 6.4-4.1 10.2 0 8.2 6.7 14.9 14.9 14.9H144c3.2 0 6.1 1.9 7.3 4.8s.7 6.3-1.5 8.6L52 310.8c-2.6 2.8-4 6.4-4 10.2 0 8.3 6.7 15 15 15h49c3.1 0 5.9 1.8 7.2 4.6s.9 6.1-1 8.5L19.5 470.5c-2.3 2.8-3.5 6.3-3.5 9.8 0 8.7 7 15.7 15.6 15.7z"
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
                  d="M210.6 5.9 62 169.4c-3.9 4.2-6 9.8-6 15.5 0 12.8 10.3 23.1 23.1 23.1H104L28.5 313.7c-2.9 4.1-4.5 9-4.5 14.1 0 13.3 10.8 24.2 24.2 24.2H80L3.8 474c-2.5 4-3.8 8.5-3.8 13.2C0 500.9 11.1 512 24.9 512H192V224c0-17.7 14.3-32 32-32s32 14.3 32 32v288h167.1c13.7 0 24.9-11.1 24.9-24.9 0-4.7-1.3-9.2-3.8-13.2L368 352h31.8c13.4 0 24.2-10.9 24.2-24.2 0-5-1.6-10-4.5-14.1L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1 0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 192c17.7 0 32 14.3 32 32v288h-64V224c0-17.7 14.3-32 32-32"
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
