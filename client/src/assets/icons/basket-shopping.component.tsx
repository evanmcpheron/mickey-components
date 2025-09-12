import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BasketShoppingIcon: React.FC<
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
                  d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32l51.9 207.5C91 492 116.6 512 146 512h284c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-85.6L365.3 12.9c-6.1-11.7-20.6-16.3-32.4-10.2s-16.3 20.6-10.2 32.4L404.3 192H171.7zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16m96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16m128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M243.1 2.7c11.8 6.1 16.3 20.6 10.2 32.4L171.7 192h232.6L322.7 35.1c-6.1-11.8-1.5-26.3 10.2-32.4s26.2-1.5 32.4 10.2L458.4 192H552c13.3 0 24 10.7 24 24s-10.7 24-24 24h-20l-55.9 223.5C469 492 443.4 512 414 512H162c-29.4 0-55-20-62.1-48.5L44 240H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h93.6l93.1-179.1c6.1-11.8 20.6-16.3 32.4-10.2M93.5 240l53 211.9c1.8 7.1 8.2 12.1 15.5 12.1h252c7.3 0 13.7-5 15.5-12.1l53-211.9zM224 312v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80c0-13.3 10.7-24 24-24s24 10.7 24 24m64-24c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80c0-13.3 10.7-24 24-24m112 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M327.9 2.2c-7.6 4.5-10.2 14.2-5.8 21.9l98 167.9H155.9l98-167.9c4.5-7.6 1.9-17.4-5.8-21.9S230.7.3 226.2 8L118.8 192H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h24l59.9 239.5C107 492 132.6 512 162 512h252c29.4 0 55-20 62.1-48.5L536 224h24c8.8 0 16-7.2 16-16s-7.2-16-16-16H457.2L349.8 7.9c-4.5-7.6-14.2-10.2-21.9-5.8zM73 224h430l-57.9 231.8C441.5 470 428.7 480 414 480H162c-14.7 0-27.5-10-31-24.2zm151 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16zm64-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8-7.2-16-16-16m96 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
                  d="M340.2 1c-3.9 2.1-5.3 7-3.2 10.8L434.6 192H141.4L239 11.8c2.1-3.9.7-8.7-3.2-10.8S227.1.3 225 4.2L123.2 192H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h28l63.9 255.5C107 492 132.6 512 162 512h252c29.4 0 55-20 62.1-48.5L540 208h28c4.4 0 8-3.6 8-8s-3.6-8-8-8H452.8L351 4.2c-2.1-3.9-7-5.3-10.8-3.2M52.5 208h471l-62.9 251.6C455.3 481 436.1 496 414 496H162c-22 0-41.2-15-46.6-36.4zM208 296c0-4.4-3.6-8-8-8s-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8zm80-8c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8V296c0-4.4-3.6-8-8-8m96 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v112c0 4.4 3.6 8 8 8s8-3.6 8-8z"
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
                  d="m393 192 33.1 73.8c5.4 12.1 19.6 17.5 31.7 12.1s17.5-19.6 12.1-31.7L445.6 192H544c17.7 0 32 14.3 32 32s-14.3 32-32 32l-51.9 207.5C485 492 459.4 512 430 512H146c-29.4 0-55-20-62.1-48.5L32 256c-17.7 0-32-14.3-32-32s14.3-32 32-32h98.4l-24.3 54.2c-5.4 12.1 0 26.3 12.1 31.7s26.3 0 31.7-12.1L183 192zM192 320c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16zm96-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8-7.2-16-16-16m128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M253.9 33.8c5.4-12.1 0-26.3-12.1-31.7s-26.3 0-31.7 12.1l-104 232c-5.4 12.1 0 26.3 12.1 31.7s26.3 0 31.7-12.1zm68.2 0 104 232c5.4 12.1 19.6 17.5 31.7 12.1s17.5-19.6 12.1-31.7l-104-232c-5.4-12.1-19.6-17.5-31.7-12.1s-17.5 19.6-12.1 31.7"
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
