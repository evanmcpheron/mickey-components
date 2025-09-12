import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WifiExclamationIcon: React.FC<
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
                  d="M320 32c-27.2 0-48.7 23.1-46.8 50.2l14.9 208C289.3 307 303.2 320 320 320s30.7-13 31.9-29.7l14.9-208C368.7 55.1 347.2 32 320 32m-78.7 52.5c-1.2-17.4 3.3-33.9 11.9-47.6C159.4 51 75.1 94.1 9.8 156.7-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2.9c51.3-49.2 116.2-84.3 188.5-99.1l-1.4-19.3zm157.4 0-1.4 19.3c72.3 14.8 137.2 49.9 188.5 99.1 12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C564.9 94.1 480.6 51 386.8 37c8.6 13.7 13.1 30.1 11.9 47.6zM129.5 264c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c23.6-20.8 51.6-36.7 82.4-46.2l-4.7-65.1c-45.2 11.3-86.2 33.4-120.1 63.3m260.9-63.3-4.6 65.1c30.8 9.4 58.8 25.4 82.4 46.2 13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2c-33.9-29.9-74.9-52-120.1-63.3zM384 416a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
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
                  d="M344 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v256c0 13.3 10.7 24 24 24s24-10.7 24-24zM8.2 149.6c-9.9 8.8-10.9 23.9-2.2 33.9s23.9 10.9 33.9 2.2c61.5-54.2 138.8-90.8 224.1-102V56c0-7.5 1.5-14.6 4.1-21.2C169 45.7 79.1 87.2 8.2 149.6m111.7 136.3c-9.8 9-10.4 24.1-1.5 33.9s24.1 10.4 33.9 1.5c31-28.4 69.2-49.1 111.6-58.9v-49.1c-54.9 10.5-104.5 36.2-144.1 72.6zM376 213.3v49.1c42.4 9.8 80.6 30.4 111.6 58.9 9.8 9 25 8.3 33.9-1.5s8.3-24.9-1.5-33.9c-39.6-36.3-89.1-62-144.1-72.6zM264 424a56 56 0 1 0 112 0 56 56 0 1 0-112 0M376 56v27.7c85.3 11.2 162.6 47.8 224.1 102 9.9 8.8 25.1 7.8 33.9-2.2s7.8-25.1-2.2-33.9C560.9 87.2 471 45.7 371.9 34.8c2.7 6.5 4.1 13.7 4.1 21.2"
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
                  d="M336 48v240c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.8 7.2-16 16-16s16 7.2 16 16M4.7 161.7C75.4 91.7 169.4 45 274 34.3c-1.3 4.3-2 8.9-2 13.7v18.7c-95 11-180.2 53.9-244.7 117.7-6.3 6.2-16.4 6.2-22.6-.1s-6.2-16.4.1-22.6zm112 114.3c41.3-41.2 95.2-69.9 155.3-80v32.5c-51.3 9.7-97.2 34.8-132.7 70.2-6.3 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zM368 196c60.1 10.1 114 38.8 155.3 80 6.3 6.2 6.3 16.4 0 22.6s-16.4 6.3-22.6 0c-35.5-35.4-81.4-60.5-132.7-70.2zm0-148c0-4.7-.7-9.3-2-13.7C470.6 45 564.6 91.7 635.3 161.7c6.3 6.2 6.3 16.3.1 22.6s-16.3 6.3-22.6.1C548.2 120.6 463 77.7 368 66.7zm-48 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="m289.2 81.1 14.9 208c.6 8.4 7.6 14.9 16 14.9s15.4-6.5 16-14.9l14.9-208c1.1-17.9-13.1-33.1-31-33.1s-32.1 15.2-30.8 33.1m-16 1.1C271.3 55.1 292.8 32 320 32s48.7 23.1 46.8 50.2l-14.9 208C350.7 307 336.8 320 320 320s-30.7-13-31.9-29.7l-14.9-208zM122.5 270.4c35.2-33.1 78.7-57.5 127.1-69.7l1.2 16.2A271 271 0 0 0 133.5 282c-3.2 3-8.3 2.9-11.3-.3s-2.9-8.3.3-11.3m267.9-69.7c48.4 12.2 91.9 36.6 127.1 69.7 3.2 3 3.4 8.1.3 11.3s-8.1 3.4-11.3.3c-32.6-30.7-72.7-53.4-117.3-65.1zm235.8-25.4C564.7 113.5 484.6 70.2 395.1 54.5c-2-6.2-4.8-12.1-8.2-17.5 97.3 14.6 184.4 60.4 250.7 127 3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0zM2.5 164C68.7 97.4 155.8 51.5 253.2 37c-3.4 5.4-6.2 11.3-8.2 17.5-89.6 15.7-169.6 59-231.1 120.8-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3zM384 416a64 64 0 1 1-128 0 64 64 0 1 1 128 0m-64 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M253.2 37c-8.6 13.7-13.1 30.1-11.9 47.6l1.4 19.3c-72.3 14.8-137.2 49.9-188.5 99.1-12.8 12.2-33 11.8-45.2-.9s-11.8-33 .9-45.2C75.1 94.1 159.4 51 253.2 37m133.7 0c93.8 14 178 57.1 243.3 119.8 12.8 12.2 13.2 32.5.9 45.2s-32.5 13.2-45.2.9c-51.3-49.2-116.2-84.3-188.5-99.1l1.4-19.3c1.2-17.4-3.3-33.9-11.9-47.6zM249.6 200.7l4.7 65.1c-30.8 9.4-58.8 25.4-82.4 46.2-13.3 11.7-33.5 10.4-45.2-2.8s-10.4-33.5 2.8-45.2c33.9-29.9 74.9-52 120.1-63.3m136.2 65.1 4.6-65.1c45.2 11.4 86.2 33.4 120.1 63.3 13.2 11.7 14.5 31.9 2.8 45.2s-31.9 14.5-45.2 2.8c-23.6-20.8-51.6-36.7-82.4-46.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 32c-27.2 0-48.7 23.1-46.8 50.2l14.9 208C289.3 307 303.2 320 320 320s30.7-13 31.9-29.7l14.9-208C368.7 55.1 347.2 32 320 32m0 448a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
