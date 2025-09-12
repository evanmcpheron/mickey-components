import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CarCircleBoltIcon: React.FC<
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
                  d="M135.2 117.4 109.1 192h293.8l-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4H165.4c-13.6 0-25.7 8.6-30.2 21.4m-95.6 79.4L74.8 96.3C88.3 57.8 124.6 32 165.4 32h181.2c40.8 0 77.1 25.8 90.6 64.3l34.1 97.4C385.8 205.7 320 279.2 320 368c0 10.9 1 21.6 2.9 32H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V256c0-26.7 16.4-49.6 39.6-59.2M128 288a32 32 0 1 0-64 0 32 32 0 1 0 64 0m368-64a144 144 0 1 1 0 288 144 144 0 1 1 0-288m47.9 63c-4.3-3.7-10.6-4-15.1-.6l-96 72c-4.1 3.1-5.8 8.5-4.2 13.4s6.2 8.2 11.4 8.2h35.6l-30.1 54.2c-2.8 5-1.7 11.1 2.6 14.9s10.6 4 15.1.6l96-72c4.1-3.1 5.8-8.5 4.2-13.4s-6.2-8.2-11.4-8.2h-35.6l30.1-54.2c2.8-5 1.7-11.1-2.6-14.9"
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
                  d="M127.7 106.8 103.4 176h305.2l-24.2-69.2c-5.6-16-20.8-26.8-37.8-26.8H165.4c-17 0-32.1 10.7-37.8 26.8zm-79.6 82 34.2-97.9C94.7 55.6 128 32 165.4 32h181.2c37.4 0 70.7 23.6 83.1 58.9l34.3 97.9c2.6 1.5 5.2 3.2 7.6 4.9-28.3 3.9-54.4 14.6-76.8 30.3H96c-26.5 0-48 21.5-48 48v80h272.7c-.5 5.3-.7 10.6-.7 16 0 10.9 1 21.6 2.9 32H48v56c0 13.3-10.7 24-24 24S0 469.3 0 456V272c0-35.6 19.3-66.6 48.1-83.2M112 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m384-32a144 144 0 1 1 0 288 144 144 0 1 1 0-288m47.9 63c-4.3-3.7-10.6-4-15.1-.6l-96 72c-4.1 3.1-5.8 8.5-4.2 13.4s6.2 8.2 11.4 8.2h35.6l-30.1 54.2c-2.8 5-1.7 11.1 2.6 14.9s10.6 4 15.1.6l96-72c4.1-3.1 5.8-8.5 4.2-13.4s-6.2-8.2-11.4-8.2h-35.6l30.1-54.2c2.8-5 1.7-11.1-2.6-14.9"
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
                  d="M113.6 98.2c6.1-20.3 24.8-34.2 46-34.2h192.8c21.2 0 39.9 13.9 46 34.2l28.3 94.4c-3.5-.4-7.1-.6-10.7-.6H96c-3.6 0-7.2.2-10.7.6zM74.3 227.8l.5.1.1-.3c6.6-2.3 13.8-3.6 21.2-3.6h298.7c19.5-13.7 41.9-23.6 66.2-28.5L429 89c-10.2-33.8-41.3-57-76.6-57H159.6C124.3 32 93.1 55.2 83 89L48.7 203.4l-.4 1.3C19.4 221.2 0 252.3 0 288v176c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h294.6c-2.9-10.3-4.9-21-5.9-32H32v-96c0-27.7 17.6-51.3 42.3-60.2M104 320a24 24 0 1 0 0-48 24 24 0 1 0 0 48m280 48a112 112 0 1 1 224 0 112 112 0 1 1-224 0m256 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-96.1-81c-4.3-3.7-10.6-4-15.1-.6l-96 72c-4.1 3.1-5.8 8.5-4.2 13.4s6.2 8.2 11.4 8.2h35.6l-30.1 54.2c-2.8 5-1.7 11.1 2.6 14.9s10.6 4 15.1.6l96-72c4.1-3.1 5.8-8.5 4.2-13.4s-6.2-8.2-11.4-8.2h-35.6l30.1-54.2c2.8-5 1.7-11.1-2.6-14.9"
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
                  d="M160.3 48h191.4c25 0 47 16.6 53.8 40.6L435.7 194c-6.4-1.3-12.9-2-19.7-2H96c-6.7 0-13.3.7-19.7 2l30.1-105.4c6.9-24 28.8-40.6 53.8-40.6zM91 84.2 58 199.8C23.9 214.5 0 248.5 0 288v160c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-48h226.9c-1-5.3-1.7-10.6-2.2-16H16v-96c0-44.2 35.8-80 80-80h320c2 0 4.1.1 6.1.2 9.9-4.6 20.3-8.3 31.2-11L421 84.2C412.1 53.3 383.9 32 351.7 32H160.3C128.1 32 99.9 53.3 91 84.2M80 400v48c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16v-48zm16-128a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m400-80a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m36.5-230.6c-3-2-6.9-1.8-9.7.6l-112 96c-2.5 2.2-3.5 5.7-2.3 8.8s4.2 5.2 7.5 5.2h58.2l-17.8 53.5c-1.1 3.4.1 7.2 3.1 9.2s6.9 1.8 9.7-.6l112-96c2.5-2.2 3.5-5.7 2.3-8.8s-4.2-5.2-7.5-5.2h-58.2l17.8-53.5c1.1-3.4-.1-7.2-3.1-9.2M437.6 376l73.7-63.1-12.2 36.6c-.8 2.4-.4 5.1 1.1 7.2s3.9 3.3 6.5 3.3h47.7l-73.7 63.1 12.2-36.6c.8-2.4.4-5.1-1.1-7.2s-3.9-3.3-6.5-3.3z"
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
                  d="M165.4 96h181.2c13.6 0 25.7 8.6 30.2 21.4l26.1 74.6H109.1l26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4m-90.6.3L39.6 196.8C16.4 206.4 0 229.3 0 256v192c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-48h226.9c-1.9-10.4-2.9-21.1-2.9-32 0-88.8 65.8-162.3 151.3-174.3l-34.1-97.4C423.7 57.8 387.4 32 346.6 32H165.4c-40.8 0-77.1 25.8-90.6 64.3M96 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m194.5-66.2c2.8-5 1.7-11.1-2.6-14.9s-10.6-4-15.1-.6l-96 72c-4.1 3.1-5.8 8.5-4.2 13.4s6.2 8.2 11.4 8.2h35.6l-30.1 54.2c-2.8 5-1.7 11.1 2.6 14.9s10.6 4 15.1.6l96-72c4.1-3.1 5.8-8.5 4.2-13.4s-6.2-8.2-11.4-8.2h-35.6z"
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
