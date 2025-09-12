import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BangladeshiTakaSignIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M36 32.2C18.4 30.1 2.4 42.5.2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v160c0 53 43 96 96 96h32c106 0 192-86 192-192v-32c0-53-43-96-96-96h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128h-32c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32v-31.5c0-48.4-36.1-89.3-84.1-95.3z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M26.4 32.1C13.2 30.8 1.4 40.4.1 53.6s8.3 25 21.5 26.3L44 82.1c20.4 2 36 19.3 36 39.8V176H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v168c0 48.6 39.4 88 88 88h32c101.6 0 184-82.4 184-184v-32c0-48.6-39.4-88-88-88h-16c-13.3 0-24 10.7-24 24s10.7 24 24 24h16c22.1 0 40 17.9 40 40v32c0 75.1-60.9 136-136 136h-32c-22.1 0-40-17.9-40-40V224h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40v-54.1c0-45.2-34.3-83.1-79.2-87.6z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M50 32.1C41.2 31 33.2 37.2 32.1 46S37.2 62.8 46 63.9l7.9 1c24 3 42 23.4 42 47.6V192H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v176c0 44.2 35.8 80 80 80h32c97.2 0 176-78.8 176-176v-32c0-44.2-35.8-80-80-80h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c26.5 0 48 21.5 48 48v32c0 79.5-64.5 144-144 144h-32c-26.5 0-48-21.5-48-48V224h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-79.5c0-40.3-30-74.4-70.1-79.4z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M41 32.1c-4.4-.5-8.4 2.6-8.9 6.9s2.6 8.4 6.9 8.9l7.9 1C75 52.4 96 76.3 96 104.5V192H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v200c0 39.8 32.2 72 72 72h16c110.5 0 200-89.5 200-200v-16c0-39.8-32.2-72-72-72h-48c-4.4 0-8 3.6-8 8s3.6 8 8 8h48c30.9 0 56 25.1 56 56v16c0 101.6-82.4 184-184 184h-16c-30.9 0-56-25.1-56-56V208h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72v-87.5c0-36.3-27-66.9-63.1-71.4z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32zm64 64h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M.2 60C2.4 42.5 18.4 30.1 36 32.2l7.9 1c48 6 84.1 46.8 84.1 95.3V384c0 17.7 14.3 32 32 32h32c70.7 0 128-57.3 128-128v-32c0-17.7-14.3-32-32-32h-16c-17.7 0-32-14.3-32-32s14.3-32 32-32h16c53 0 96 43 96 96v32c0 106-86 192-192 192h-32c-53 0-96-43-96-96V128.5c0-16.1-12-29.8-28-31.8l-7.9-1C10.5 93.6-1.9 77.6.2 60"
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
