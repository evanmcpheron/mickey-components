import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BasketShoppingPlusIcon: React.FC<
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
                  d="M243.1 2.7c11.8 6.1 16.3 20.6 10.2 32.4L171.7 192h232.6L322.7 35.1c-6.1-11.8-1.5-26.3 10.2-32.4s26.2-1.5 32.4 10.2L458.4 192H544c17.7 0 32 14.3 32 32s-14.3 32-32 32l-51.9 207.5C485 492 459.4 512 430 512H146c-29.4 0-55-20-62.1-48.5L32 256c-17.7 0-32-14.3-32-32s14.3-32 32-32h85.6l93.1-179.1c6.1-11.8 20.6-16.3 32.4-10.2M184 352c0 13.3 10.7 24 24 24h56v56c0 13.3 10.7 24 24 24s24-10.7 24-24v-56h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-56c-13.3 0-24 10.7-24 24"
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
                  d="M243.1 2.7c11.8 6.1 16.3 20.6 10.2 32.4L171.7 192h232.6L322.7 35.1c-6.1-11.8-1.5-26.3 10.2-32.4s26.2-1.5 32.4 10.2L458.4 192H552c13.3 0 24 10.7 24 24s-10.7 24-24 24h-20l-55.9 223.5C469 492 443.4 512 414 512H162c-29.4 0-55-20-62.1-48.5L44 240H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h93.6l93.1-179.1c6.1-11.8 20.6-16.3 32.4-10.2M482.5 240h-389l53 211.9c1.8 7.1 8.2 12.1 15.5 12.1h252c7.3 0 13.7-5 15.5-12.1zM200 352c0-13.3 10.7-24 24-24h40v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v40h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-40c-13.3 0-24-10.7-24-24"
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
                  d="M322.2 24.1c-4.5-7.6-1.9-17.4 5.8-21.9S345.4.3 349.9 8l107.3 184H560c8.8 0 16 7.2 16 16s-7.2 16-16 16h-24l-59.9 239.5C469 492 443.4 512 414 512H162c-29.4 0-55-20-62.1-48.5L40 224H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h102.8L226.2 7.9c4.5-7.6 14.2-10.2 21.9-5.8s10.2 14.2 5.8 21.9l-98 168h264.2l-98-167.9zM503 224H73l57.9 231.8c3.6 14.2 16.4 24.2 31 24.2H414c14.7 0 27.5-10 31-24.2zM192 352c0-8.8 7.2-16 16-16h64v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64c-8.8 0-16-7.2-16-16"
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
                  d="M337 11.8c-2.1-3.9-.7-8.7 3.2-10.8s8.7-.7 10.8 3.2L452.8 192H568c4.4 0 8 3.6 8 8s-3.6 8-8 8h-28l-63.9 255.5C469 492 443.4 512 414 512H162c-29.4 0-55-20-62.1-48.5L36 208H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h115.2L225 4.2c2.1-3.9 7-5.3 10.8-3.2s5.3 7 3.2 10.8L141.4 192h293.2zM523.5 208h-471l62.9 251.6C120.7 481 139.9 496 162 496h252c22 0 41.2-15 46.6-36.4zM200 352c0-4.4 3.6-8 8-8h72v-72c0-4.4 3.6-8 8-8s8 3.6 8 8v72h72c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72h-72c-4.4 0-8-3.6-8-8"
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
                  d="M32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32l51.9 207.5C91 492 116.6 512 146 512h284c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32zm152 160c0-13.3 10.7-24 24-24h56v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v56c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56h-56c-13.3 0-24-10.7-24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M253.9 33.8 183 192h-52.6l79.7-177.8c5.4-12.1 19.6-17.5 31.7-12.1s17.5 19.6 12.1 31.7m112-19.6L445.6 192H393L322.1 33.8c-5.4-12.1 0-26.3 12.1-31.7s26.3 0 31.7 12.1M264 432v-56h-56c-13.3 0-24-10.7-24-24s10.7-24 24-24h56v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v56c0 13.3-10.7 24-24 24s-24-10.7-24-24"
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
