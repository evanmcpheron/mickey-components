import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RightIcon: React.FC<
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
                  d="M438.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-9.2 9.2-22.9 11.9-34.9 6.9S223.9 429 223.9 416v-96H40c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h184V96c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l160 160z"
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
                  d="M397.6 256 247.7 398.7c-.8.8-2 1.3-3.2 1.3-2.5 0-4.6-2-4.6-4.6V312c0-13.3-10.7-24-24-24H48v-64h168c13.3 0 24-10.7 24-24v-83.4c0-2.5 2-4.6 4.6-4.6 1.2 0 2.3.5 3.2 1.3zm-153 192c13.5 0 26.5-5.2 36.3-14.5l153.9-146.6c8.5-8.1 13.2-19.2 13.2-30.9s-4.8-22.8-13.2-30.9l-154-146.6c-9.7-9.3-22.7-14.5-36.2-14.5-29 0-52.6 23.5-52.6 52.6V176H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h144v59.4c0 29 23.5 52.6 52.6 52.6"
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
                  d="M416 253.7v4.6c0 4.4-1.8 8.6-5 11.6L261.2 412.5c-2.3 2.2-5.4 3.5-8.7 3.5-6.9 0-12.6-5.6-12.6-12.6V320c0-8.8-7.2-16-16-16H48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h176c8.8 0 16-7.2 16-16v-83.4c0-6.9 5.6-12.6 12.6-12.6 3.2 0 6.3 1.2 8.7 3.5L411 242.1c3.2 3 5 7.2 5 11.6M252.6 448c11.4 0 22.5-4.4 30.7-12.3L433.1 293c9.5-9.1 14.9-21.6 14.9-34.8v-4.6c0-13.1-5.4-25.7-14.9-34.8L283.3 76.3C275 68.4 264 64 252.6 64 228 64 208 84 208 108.6V176H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160v67.4c0 24.6 20 44.6 44.6 44.6"
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
                  d="M432 256c0 8.1-3.2 15.9-9 21.7L274.6 426.1c-3.8 3.8-9 5.9-14.3 5.9-11.2 0-20.3-9.1-20.3-20.3V312c0-4.4-3.6-8-8-8H40c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h192c4.4 0 8-3.6 8-8v-99.7c0-11.2 9.1-20.3 20.3-20.3 5.4 0 10.5 2.1 14.3 5.9L423 234.3c5.7 5.7 9 13.5 9 21.7M260.3 448c9.6 0 18.9-3.8 25.7-10.6L434.4 289c8.7-8.7 13.7-20.6 13.7-33s-4.9-24.2-13.7-33L285.9 74.6c-6.8-6.8-16-10.6-25.7-10.6-20 0-36.3 16.2-36.3 36.3V192H40c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h184v91.7c0 20 16.2 36.3 36.3 36.3"
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
                  d="M224 192v128H40c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 320v96c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-9.2-9.2-22.9-11.9-34.9-6.9S224 83.1 224 96.1V320"
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
