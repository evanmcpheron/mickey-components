import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ConveyorBeltArmIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M240.9 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32h-52.9l-5.7 34c.8 1 1.5 2 2.3 3l204.5 27.3c17.5 2.3 29.8 18.4 27.5 35.9-1.4 10.2-7.4 18.7-15.7 23.5V208c0 8.8-7.2 16-16 16s-16-7.2-16-16v-17.9l-192.8-25.6c-8.4 7.2-19.3 11.6-31.2 11.6-26.5 0-48-21.5-48-48 0-17.1 8.9-32 22.3-40.6l3.9-23.5H160c-17.7 0-32-14.3-32-32s14.3-32 32-32h80.9m-.9 128a16 16 0 1 0-32 0 16 16 0 1 0 32 0m176 152c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v40h32c53 0 96 43 96 96s-43 96-96 96H96c-53 0-96-43-96-96s43-96 96-96v-40c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v40h64v-40c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v40h64zM128 448a32 32 0 1 0 0-64 32 32 0 1 0 0 64m224-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M152 0h176c13.3 0 24 10.7 24 24s-10.7 24-24 24h-69l-4.5 26.9c6 5 10.8 11.4 13.9 18.8l198.8 26.5c13.1 1.8 22.4 13.8 20.6 27-.8 5.9-3.7 11-7.8 14.7V192c0 8.8-7.2 16-16 16s-16-7.2-16-16v-25.9l-186-24.8c-8.8 11.4-22.6 18.7-38 18.7-26.5 0-48-21.5-48-48 0-20.6 13-38.1 31.2-45l3.2-19H152c-13.3 0-24-10.7-24-24s10.7-24 24-24m88 112a16 16 0 1 0-32 0 16 16 0 1 0 32 0m176 152c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24h16c61.9 0 112 50.1 112 112s-50.1 112-112 112H112C50.1 512 0 461.9 0 400c0-56.4 41.7-103.1 96-110.9V264c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24h64v-24c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24h64zm-304 72c-35.3 0-64 28.7-64 64s28.7 64 64 64h416c35.3 0 64-28.7 64-64s-28.7-64-64-64H112m16 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m160 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 16c0 8.8 7.2 16 16 16h77.1l-5.5 32.7c-22.5 4-39.6 23.6-39.6 47.3 0 26.5 21.5 48 48 48 18.6 0 34.8-10.6 42.8-26.2L448 158v50c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8-5.9-14.8-13.9-15.9l-195.1-26c-2.9-13.8-11.8-25.5-23.8-32.1l6.3-38H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H144c-8.8 0-16 7.2-16 16m72 96a24 24 0 1 1 48 0 24 24 0 1 1-48 0m248 176h32v32h-32zm-32-8v40h-64v-40c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v40h-64v-40c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v40c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96h-32v-40c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24M96 352h448c35.3 0 64 28.7 64 64s-28.7 64-64 64H96c-35.3 0-64-28.7-64-64s28.7-64 64-64m64-64v32h-32v-32zm128 32v-32h32v32zM128 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48m216-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m168 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 8c0 4.4 3.6 8 8 8h94.7l-7.4 48c-26.2.4-47.3 21.7-47.3 48 0 26.5 21.5 48 48 48 21.6 0 39.8-14.2 45.9-33.8L456 151v57c0 4.4 3.6 8 8 8s8-3.6 8-8v-64c0-4-3-7.4-6.9-7.9L272 110.3c-.7-20.5-14.3-37.7-32.9-43.9l7.8-50.4H344c4.4 0 8-3.6 8-8s-3.6-8-8-8H136c-4.4 0-8 3.6-8 8m64 104a32 32 0 1 1 64 0 32 32 0 1 1-64 0m304 168v40h-64v-40c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8m-80 0v40h-64v-40c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v40h-64v-40c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v40c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96h-32v-40c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24m-240 56h368c44.2 0 80 35.8 80 80s-35.8 80-80 80H96c-44.2 0-80-35.8-80-80s35.8-80 80-80h80m0-56v40h-64v-40c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8m96 40v-40c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v40zM80 416a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96m176-48a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M96 320c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m160 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M240.9 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32h-52.9l-5.7 34c.8 1 1.5 2 2.3 3l204.5 27.3c17.5 2.3 29.8 18.4 27.5 35.9-1.4 10.2-7.4 18.7-15.7 23.5V208c0 8.8-7.2 16-16 16s-16-7.2-16-16v-17.9l-192.8-25.6c-8.4 7.2-19.3 11.6-31.2 11.6-26.5 0-48-21.5-48-48 0-17.1 8.9-32 22.3-40.6l3.9-23.5H160c-17.7 0-32-14.3-32-32s14.3-32 32-32h80.9m-.9 128a16 16 0 1 0-32 0 16 16 0 1 0 32 0M96 280c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v40H96zm184-24h48c13.3 0 24 10.7 24 24v40h-96v-40c0-13.3 10.7-24 24-24m160 0h48c13.3 0 24 10.7 24 24v40h-96v-40c0-13.3 10.7-24 24-24"
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
