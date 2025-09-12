import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WIcon: React.FC<
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
                  d="M20.8 34c16.5-6.2 35 2.2 41.2 18.7l110.2 294L257.3 55c4-13.7 16.5-23 30.7-23s26.7 9.4 30.7 23l85.1 291.7L514 52.8c6.2-16.5 24.6-24.9 41.2-18.7s24.9 24.7 18.7 41.2l-144 384c-4.8 12.9-17.4 21.3-31.2 20.7s-25.7-9.8-29.5-23L288 178.3 206.7 457c-3.9 13.2-15.8 22.5-29.5 23s-26.3-7.8-31.2-20.7L2 75.2c-6.2-16.5 2.2-35 18.8-41.2"
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
                  d="M15.9 33.4c12.5-4.5 26.2 2 30.7 14.5l119.3 331.5L265 49.1C268.1 39 277.4 32 288 32s19.9 7 23 17.1l99.1 330.3L529.4 47.9c4.5-12.5 18.2-18.9 30.7-14.5s18.9 18.2 14.5 30.7l-144 400c-3.5 9.7-12.9 16.1-23.2 15.9s-19.4-7.2-22.3-17.1L288 139.5l-97 323.4c-3 9.9-12 16.8-22.3 17.1s-19.7-6.1-23.2-15.9L1.4 64.1c-4.5-12.5 2-26.2 14.5-30.7"
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
                  d="M10.5 33c8.3-3 17.5 1.2 20.5 9.5l135.2 370L272.6 43.6c2-6.8 8.2-11.6 15.4-11.6s13.4 4.7 15.4 11.6l106.4 368.9L545 42.5c3-8.3 12.2-12.6 20.5-9.5s12.6 12.2 9.5 20.5l-152 416c-2.4 6.5-8.7 10.7-15.6 10.5s-12.9-4.9-14.8-11.6L288 105.7 183.4 468.4c-1.9 6.7-7.9 11.3-14.8 11.6s-13.2-4-15.6-10.5L1 53.5C-2.1 45.2 2.2 36 10.5 33"
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
                  d="M5.4 32.5c4.2-1.5 8.7.7 10.2 4.9L159.4 446l121-408.3c1-3.4 4.1-5.7 7.7-5.7s6.7 2.3 7.7 5.7L416.7 446 560.5 37.3c1.5-4.2 6-6.4 10.2-4.9s6.4 6 4.9 10.2l-152 432c-1.2 3.3-4.3 5.4-7.7 5.3s-6.5-2.4-7.5-5.7L288 68.2 167.7 474.3c-1 3.3-4 5.6-7.5 5.7s-6.6-2.1-7.7-5.3L.5 42.7c-1.5-4.2.7-8.7 4.9-10.2"
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
                  d="M20.8 34c16.5-6.2 35 2.2 41.2 18.7l110.2 294L257.3 55c4-13.7 16.5-23 30.7-23s26.7 9.4 30.7 23l85.1 291.7L514 52.8c6.2-16.5 24.6-24.9 41.2-18.7s24.9 24.7 18.7 41.2l-144 384c-4.8 12.9-17.4 21.3-31.2 20.7s-25.7-9.8-29.5-23L288 178.3 206.7 457c-3.9 13.2-15.8 22.5-29.5 23s-26.3-7.8-31.2-20.7L2 75.2c-6.2-16.5 2.2-35 18.8-41.2"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
