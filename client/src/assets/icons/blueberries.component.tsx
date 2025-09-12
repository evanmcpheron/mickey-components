import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BlueberriesIcon: React.FC<
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
                  d="M512 176C512 78.8 433.2 0 336 0c-80.6 0-148.6 54.2-169.4 128.2 3.1-.1 6.3-.2 9.4-.2 114.9 0 208 93.1 208 208 0 3.2-.1 6.3-.2 9.4C457.8 324.6 512 256.6 512 176M176 512a176 176 0 1 0 0-352 176 176 0 1 0 0 352m0-304c8.8 0 16 7.2 16 16v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16M384 64v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V64c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M512 176C512 78.8 433.2 0 336 0c-80.6 0-148.6 54.2-169.4 128.2 3.1-.1 6.3-.2 9.4-.2 114.9 0 208 93.1 208 208 0 3.2-.1 6.3-.2 9.4C457.8 324.6 512 256.6 512 176M384 64v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V64c0-8.8 7.2-16 16-16s16 7.2 16 16M176 208a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 304a176 176 0 1 0 0-352 176 176 0 1 0 0 352m0-256c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32z"
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
                  d="M382.7 312.3C439.3 292.9 480 239.2 480 176c0-79.5-64.5-144-144-144-63.2 0-116.9 40.7-136.3 97.3-7.8-.9-15.7-1.3-23.7-1.3-3.2 0-6.3.1-9.4.2C187.4 54.2 255.4 0 336 0c97.2 0 176 78.8 176 176 0 80.6-54.2 148.6-128.2 169.4.1-3.1.2-6.3.2-9.4 0-8-.5-15.9-1.3-23.7M320 336a144 144 0 1 0-288 0 144 144 0 1 0 288 0M0 336a176 176 0 1 1 352 0 176 176 0 1 1-352 0m176-96v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-32c0-8.8 7.2-16 16-16s16 7.2 16 16M368 80v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V80c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M383.9 328.7c65-20.3 112.1-81 112.1-152.7 0-88.4-71.6-160-160-160-71.7 0-132.4 47.1-152.7 112.1-2.4-.1-4.8-.1-7.3-.1-3.2 0-6.3.1-9.4.2C187.4 54.2 255.4 0 336 0c97.2 0 176 78.8 176 176 0 80.6-54.2 148.6-128.2 169.4.1-3.1.2-6.3.2-9.4 0-2.4 0-4.9-.1-7.3M336 336a160 160 0 1 0-320 0 160 160 0 1 0 320 0M0 336a176 176 0 1 1 352 0 176 176 0 1 1-352 0m168-96v40h40c4.4 0 8 3.6 8 8s-3.6 8-8 8h-40v40c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h40v-40c0-4.4 3.6-8 8-8s8 3.6 8 8M360 80v40h40c4.4 0 8 3.6 8 8s-3.6 8-8 8h-40v40c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h40V80c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M351.3 351.3C441.4 343.6 512 268 512 176 512 78.8 433.2 0 336 0c-92 0-167.6 70.6-175.3 160.7 5.1-.4 10.2-.7 15.3-.7 97.2 0 176 78.8 176 176 0 5.2-.2 10.3-.7 15.3M368 48c8.8 0 16 7.2 16 16v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V64c0-8.8 7.2-16 16-16M192 224c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 64v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V64c0-8.8 7.2-16 16-16s16 7.2 16 16M0 336a176 176 0 1 1 352 0 176 176 0 1 1-352 0m176-128c-8.8 0-16 7.2-16 16v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-32c0-8.8-7.2-16-16-16"
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
