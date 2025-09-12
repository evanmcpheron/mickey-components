import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HelmetSafetyIcon: React.FC<
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
                  d="M256 32c-17.7 0-32 14.3-32 32v101.9c0 5.6-4.5 10.1-10.1 10.1-3.6 0-7-1.9-8.8-5.1l-48-83.9C83 123.5 32 199.8 32 288v64h512v-66.4c-.9-87.2-51.7-162.4-125.1-198.6l-48 83.9c-1.8 3.2-5.2 5.1-8.8 5.1-5.6 0-10.1-4.5-10.1-10.1V64c0-17.7-14.3-32-32-32zM16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9 0-9.2-7.4-16.6-16.6-16.6z"
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
                  d="M264 80h48c4.4 0 8 3.6 8 8v208c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-30.9-25.1-56-56-56h-48c-30.9 0-56 25.1-56 56v208c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-4.4 3.6-8 8-8m295.4 304H16.6C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9 0-9.2-7.4-16.6-16.6-16.6M32 288v64h48v-64c0-68.4 39-127.7 96-156.8V78.7C91.8 110.9 32 192.5 32 288m464-2.2V352h48v-66.4c-1-94.5-60.5-174.9-144-206.9v52.5c56.4 28.8 95.2 87.2 96 154.6"
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
                  d="M240 80v192c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v192c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m-64-1.3v34.7C109.9 143.7 64 210.5 64 288v32H32v-32c0-95.5 59.8-177.1 144-209.3m224 34.7V78.7c83.5 31.9 143 112.4 144 206.9V320h-32v-34.3c-.9-76.5-46.5-142.3-112-172.3M537.3 384H38.7c-3.7 0-6.7 3-6.7 6.7 0 .4 0 .7.1 1C58.5 408.5 136.6 448 288 448s229.5-39.5 255.9-56.3c0-.2.1-.6.1-1 0-3.7-3-6.7-6.7-6.7M38.7 352h498.6c21.4 0 38.7 17.3 38.7 38.7 0 11-4.7 21.4-13.9 27.3-30.8 19.9-115 62-274.1 62S44.7 437.9 13.9 418.1C4.7 412.1 0 401.7 0 390.7 0 369.3 17.3 352 38.7 352"
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
                  d="M232 72v208c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-22.1 17.9-40 40-40h64c22.1 0 40 17.9 40 40v208c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-13.3-10.7-24-24-24h-64c-13.3 0-24 10.7-24 24m-40 1.3V90C108.4 117 48 195.5 48 288v32H32v-32c0-101.5 67.5-187.2 160-214.7M384 90V73.3c91.8 27.3 158.9 111.9 160 212.3V320h-16v-34.4c-1-91.5-61.1-168.8-144-195.6m153.3 278H38.7C26.2 368 16 378.2 16 390.7c0 6.6 2.7 11.4 6.6 13.9C50.7 422.7 131.9 464 288 464s237.3-41.3 265.4-59.4c3.8-2.5 6.6-7.3 6.6-13.9 0-12.6-10.2-22.7-22.7-22.7M38.7 352h498.6c21.4 0 38.7 17.3 38.7 38.7 0 11-4.7 21.4-13.9 27.3-30.8 19.9-115 62-274.1 62S44.7 437.9 13.9 418.1C4.7 412.1 0 401.7 0 390.7 0 369.3 17.3 352 38.7 352"
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
                  d="M559.4 384H16.6C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9 0-9.2-7.4-16.6-16.6-16.6"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 64c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v101.9c0 5.6 4.5 10.1 10.1 10.1 3.6 0 7-1.9 8.8-5.1l48-83.9c73.4 36.1 124.2 111.4 125.1 198.6V384H32v-96c0-88.2 51-164.5 125.1-201l48 83.9c1.8 3.2 5.2 5.1 8.8 5.1 5.6 0 10.1-4.5 10.1-10.1V64"
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
