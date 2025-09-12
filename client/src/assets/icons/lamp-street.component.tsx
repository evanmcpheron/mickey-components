import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LampStreetIcon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 176c0-61.9 50.1-112 112-112 57.4 0 104.7 43.2 111.2 98.8-80.1 13.8-143.2 77.1-156.6 157.3-2.9 17.5 11.7 31.9 29.4 31.9h320c17.7 0 32.3-14.4 29.4-31.9-13.5-80.6-77.2-144.2-157.9-157.6C344.6 71.6 268.7 0 176 0 78.8 0 0 78.8 0 176v304c0 17.7 14.3 32 32 32s32-14.3 32-32zm256 272c35.3 0 64-28.7 64-64H256c0 35.3 28.7 64 64 64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 172c0-68.5 55.5-124 124-124 65 0 118.3 50 123.6 113.5-84 10.7-151.1 75.6-164.9 158.6-3 17.5 11.6 31.9 29.3 31.9h320c17.7 0 32.3-14.4 29.4-31.9-13.9-83.2-81.4-148.3-165.7-158.7C338.2 71.4 263.4 0 172 0 77 0 0 77 0 172v316c0 13.3 10.7 24 24 24s24-10.7 24-24zm407.8 132H184.2c19.8-55.9 73.1-96 135.8-96s116.1 40.1 135.8 96M320 448c35.3 0 64-28.7 64-64H256c0 35.3 28.7 64 64 64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 168C32 92.9 92.9 32 168 32c72.7 0 132 57 135.8 128.7-83.1 6.9-151.1 66.7-170.3 145.6-6.2 25.5 14.8 45.7 37.5 45.7h298c22.7 0 43.7-20.2 37.5-45.7-19.3-79-87.5-138.9-170.7-145.7C332 71.3 258.3 0 168 0 75.2 0 0 75.2 0 168v328c0 8.8 7.2 16 16 16s16-7.2 16-16zm288 24c75.2 0 138.4 51.9 155.4 121.9.3 1.4 0 2.6-1 3.8-1.1 1.3-3 2.3-5.5 2.3H171c-2.4 0-4.4-1-5.5-2.3-1-1.1-1.3-2.4-1-3.8C181.6 243.9 244.8 192 320 192m-78.4 192c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64h-33.1c-6.6 18.6-24.4 32-45.3 32s-38.7-13.4-45.3-32z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 164C16 82.3 82.3 16 164 16h4c79.5 0 144 64.5 144 144h8c-95.2 0-174.2 69.3-189.4 160.1-2.9 17.5 11.7 31.9 29.4 31.9h320c17.7 0 32.3-14.4 29.4-31.9C494.2 229.3 415.2 160 320 160h8C328 71.6 256.4 0 168 0h-4C73.4 0 0 73.4 0 164v340c0 4.4 3.6 8 8 8s8-3.6 8-8zm304 12c87.2 0 159.7 63.5 173.6 146.8 1 5.9-3.9 13.2-13.6 13.2H160c-9.7 0-14.6-7.4-13.6-13.2C160.3 239.5 232.8 176 320 176m-78.4 208c7.4 36.5 39.7 64 78.4 64s71-27.5 78.4-64H382c-7.1 27.6-32.2 48-62 48s-54.9-20.4-62-48z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M176 64c-61.9 0-112 50.1-112 112v304c0 17.7-14.3 32-32 32S0 497.7 0 480V176C0 78.8 78.8 0 176 0s176 78.8 176 176v18.7c-10.4-1.7-21.1-2.7-32-2.7s-21.6.9-32 2.7V176c0-61.9-50.1-112-112-112m208 320c0 35.3-28.7 64-64 64s-64-28.7-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 192c-95.2 0-174.2 69.3-189.4 160.1-2.9 17.5 11.7 31.9 29.4 31.9h320c17.7 0 32.3-14.4 29.4-31.9C494.2 261.3 415.2 192 320 192"
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
