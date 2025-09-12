import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CloudFogIcon: React.FC<
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
                  d="M160 320c-53 0-96-43-96-96 0-42.5 27.6-78.6 65.9-91.2-1.3-6.7-1.9-13.7-1.9-20.8C128 50.1 178.1 0 240 0c43.1 0 80.5 24.3 99.2 60 14.7-17.1 36.5-28 60.8-28 44.2 0 80 35.8 80 80 0 5.5-.6 10.8-1.6 16h1.6c53 0 96 43 96 96s-43 96-96 96zM0 392c0-13.3 10.7-24 24-24h528c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m64 96c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.3 0-24-10.7-24-24m208 0c0-13.3 10.7-24 24-24h320c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24"
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
                  d="M176 120c0-39.8 32.2-72 72-72 25.8 0 48.5 13.6 61.2 34 3.8 6.1 10.1 10.2 17.2 11.1s14.3-1.3 19.5-6.2c10-9.3 23.4-15 38.1-15 29 0 52.9 22.1 55.7 50.4 1.2 12.3 11.6 21.7 23.9 21.6h.3c35.3 0 64 28.7 64 64s-28.7 64-64 64H170.1c-.3 0-.7-.1-1-.1-31.8-1.4-57.1-27.6-57.1-59.8 0-28.3 19.6-52.1 46.1-58.4 11.8-2.8 19.6-13.9 18.3-25.9-.3-2.5-.4-5.1-.4-7.7M248 0c-64 0-116.3 50.1-119.8 113.3C90.4 130.1 64 167.9 64 212c0 57.1 44.3 103.9 100.5 107.7 1.2.2 2.3.3 3.5.3h296c61.9 0 112-50.1 112-112 0-55.2-39.9-101.1-92.5-110.3C470.5 55 430.9 24 384 24c-18 0-34.9 4.6-49.7 12.6C312.5 14.1 281.9 0 248 0M0 392c0 13.3 10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24m64 96c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24H88c-13.3 0-24 10.7-24 24m208 0c0 13.3 10.7 24 24 24h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H296c-13.3 0-24 10.7-24 24"
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
                  d="M160 112c0-44.2 35.8-80 80-80 32.2 0 59.9 19 72.6 46.4 2.2 4.8 6.6 8.1 11.8 9s10.4-.8 14.1-4.5c11.6-11.7 27.7-19 45.5-19 35.3 0 64 28.7 64 64v.3c0 4.5 1.9 8.8 5.2 11.8s7.8 4.5 12.2 4.1c2.2-.2 4.3-.3 6.6-.3 39.8 0 72 32.2 72 72s-32.2 72-72 72H168c-39.8 0-72-32.2-72-72 0-33.5 22.9-61.7 53.9-69.7 8.2-2.1 13.3-10.3 11.7-18.6-1-5.1-1.5-10.3-1.5-15.7zm416 104c0-55.2-43-100.3-97.3-103.8C471.2 66.7 431.6 32 384 32c-19.3 0-37.3 5.7-52.4 15.5C311.3 18.8 277.9 0 240 0c-61.9 0-112 50.1-112 112 0 2.6.1 5.3.3 7.9C90.6 135.5 64 172.6 64 216c0 57.4 46.6 104 104 104h304c57.4 0 104-46.6 104-104M0 400c0 8.8 7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16m64 96c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-8.8 0-16 7.2-16 16m224 0c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16H304c-8.8 0-16 7.2-16 16"
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
                  d="M462.7 124.8c.8-4.1 1.3-8.4 1.3-12.8 0-35.3-28.7-64-64-64-19.5 0-36.9 8.7-48.6 22.4-3.4 4-8.7 6.1-13.9 5.5s-9.9-3.8-12.4-8.5C309 36.8 276.9 16 240 16c-53 0-96 43-96 96 0 6.1.6 12.1 1.7 17.9 1.5 7.9-3.1 15.6-10.7 18.1-32 10.5-55 40.6-55 76 0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80s-35.8-80-80-80h-1.3c-4.8.1-9.5-2-12.6-5.8s-4.3-8.7-3.4-13.4M240 0c37.1 0 70 18.1 90.4 45.9 3.3 4.5 6.2 9.2 8.8 14.1q5.4-6.3 12-11.4C364.7 38.2 381.6 32 400 32c44.2 0 80 35.8 80 80 0 5.5-.6 10.8-1.6 16h1.6c4.9 0 9.8.4 14.5 1.1 46.2 7 81.5 46.8 81.5 94.9 0 53-43 96-96 96H160c-53 0-96-43-96-96 0-42.5 27.6-78.6 65.9-91.2-1.3-6.7-1.9-13.7-1.9-20.8C128 50.1 178.1 0 240 0M0 408c0-4.4 3.6-8 8-8h560c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8m64 96c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8m224 0c0-4.4 3.6-8 8-8h336c4.4 0 8 3.6 8 8s-3.6 8-8 8H296c-4.4 0-8-3.6-8-8"
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
                  d="M24 368c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24zm64 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24zm208 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h320c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 224c0 53 43 96 96 96h320c53 0 96-43 96-96s-43-96-96-96h-1.6c1.1-5.2 1.6-10.5 1.6-16 0-44.2-35.8-80-80-80-24.3 0-46.1 10.9-60.8 28C320.5 24.3 283.1 0 240 0c-61.9 0-112 50.1-112 112 0 7.1.7 14.1 1.9 20.8C91.6 145.4 64 181.5 64 224"
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
