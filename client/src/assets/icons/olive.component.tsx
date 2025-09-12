import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const OliveIcon: React.FC<
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
                  d="M160 480C71.6 480 0 408.4 0 320 0 128 181.9 32 280 32c56 0 112 56 112 56s56 56 56 112c0 98.1-96 280-288 280m127.1-287.1c30.3 30.3 69.6 40.1 87.8 21.9s8.4-57.5-21.9-87.8-69.6-40.1-87.8-21.9-8.4 57.5 21.9 87.8"
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
                  d="M160 432c-61.9 0-112-50.1-112-112 0-79.2 37-138.4 85.9-179.1C184.3 99 243.7 80 280 80c13.6 0 31.8 7.5 50.4 19.9 8.5 5.7 15.7 11.4 20.8 15.8 2.5 2.1 4.4 3.9 5.6 5l1.2 1.2.1.1.1.1 1.2 1.2c1.1 1.2 2.9 3.1 5 5.6 4.3 5 10.1 12.2 15.8 20.8 12.3 18.5 19.8 36.7 19.8 50.3 0 36.3-19 95.7-60.9 146.1C298.4 395 239.2 432 160 432M0 320c0 88.4 71.6 160 160 160 192 0 288-181.9 288-280 0-56-56-112-56-112s-56-56-112-56C181.9 32 0 128 0 320m271.1-111.1c30.3 30.3 69.6 40.1 87.8 21.9s8.4-57.5-21.9-87.8-69.6-40.1-87.8-21.9-8.4 57.5 21.9 87.8"
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
                  d="M160 448c-70.7 0-128-57.3-128-128 0-84.8 39.8-148.3 91.7-191.4C176.5 84.7 239.5 64 280 64c18.4 0 39.8 9.7 59.3 22.6 9.2 6.1 16.9 12.3 22.3 16.9 2.7 2.3 4.8 4.2 6.1 5.4.7.6 1.2 1.1 1.5 1.4l.3.3.3.3c.3.3.7.8 1.4 1.5 1.3 1.3 3.1 3.4 5.4 6.1 4.6 5.4 10.8 13.1 16.9 22.3 12.8 19.4 22.5 40.8 22.5 59.2 0 40.5-20.7 103.5-64.6 156.3C308.3 408.2 244.8 448 160 448M0 320c0 88.4 71.6 160 160 160 192 0 288-181.9 288-280 0-56-56-112-56-112s-56-56-112-56C181.9 32 0 128 0 320m260.4-187.6c3.6-3.6 11.2-6.2 24.2-3 12.6 3.2 27.6 11.5 41 24.9s21.8 28.4 24.9 41c3.2 13 .6 20.6-3 24.2s-11.2 6.2-24.2 3c-12.6-3.2-27.6-11.5-41-24.9s-21.8-28.4-24.9-41c-3.2-13-.6-20.6 3-24.2m87.8-.7c-16.9-16.9-36.7-28.6-55.9-33.4-18.8-4.7-39.9-3.2-54.5 11.4s-16.1 35.8-11.4 54.5c4.8 19.1 16.5 39 33.4 55.9s36.7 28.6 55.9 33.4c18.8 4.7 39.9 3.2 54.5-11.4s16.1-35.8 11.4-54.5c-4.8-19.1-16.5-39-33.4-55.9"
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
                  d="M160 464c-79.5 0-144-64.5-144-144 0-90.4 42.6-158.1 97.4-203.7C168.7 70.3 235.2 48 280 48c23.2 0 47.9 11.8 68.1 25.3 9.8 6.6 18.1 13.1 23.8 18.1 2.9 2.5 5.1 4.5 6.6 5.9.7.7 1.3 1.2 1.7 1.6l.4.4.1.1.1.1.4.4c.3.4.9.9 1.6 1.7 1.4 1.5 3.4 3.7 5.9 6.6 4.9 5.8 11.5 14 18.1 23.8 13.4 20.1 25.2 44.8 25.2 68 0 44.8-22.3 111.3-68.3 166.6C318.1 421.4 250.4 464 160 464M0 320c0 88.4 71.6 160 160 160 192 0 288-181.9 288-280 0-56-56-112-56-112s-56-56-112-56C181.9 32 0 128 0 320m247.9-200.1c7.5-7.5 20.2-10.1 36.7-6 16.2 4.1 34.6 14.5 50.8 30.7s26.6 34.5 30.7 50.8c4.1 16.4 1.5 29.2-6 36.7s-20.2 10.1-36.7 6c-16.2-4.1-34.6-14.5-50.8-30.7s-26.6-34.5-30.7-50.8c-4.1-16.4-1.5-29.2 6-36.7m98.8 13.4c-17.9-17.9-38.7-30-58.2-34.9-19.3-4.8-38.9-2.8-51.9 10.2s-15 32.5-10.2 51.9c4.9 19.5 17 40.3 34.9 58.2s38.7 30 58.2 34.9c19.3 4.8 38.9 2.8 51.9-10.2s15-32.5 10.2-51.9c-4.9-19.5-17-40.3-34.9-58.2"
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
                  d="M374.9 214.9c-18.2 18.2-57.5 8.4-87.8-21.9s-40.1-69.6-21.9-87.8 57.5-8.4 87.8 21.9 40.1 69.6 21.9 87.8"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 480C71.6 480 0 408.4 0 320 0 128 181.9 32 280 32c56 0 112 56 112 56s56 56 56 112c0 98.1-96 280-288 280m127.1-287.1c30.3 30.3 69.6 40.1 87.8 21.9s8.4-57.5-21.9-87.8-69.6-40.1-87.8-21.9-8.4 57.5 21.9 87.8"
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
