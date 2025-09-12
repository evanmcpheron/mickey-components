import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CupcakeIcon: React.FC<
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
                  d="M240 0c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l6.1 6.1c3.4 3.4 5.3 7.9 5.3 12.7C240 56 232 64 222.1 64H160c-35.3 0-64 28.7-64 64v.8c-3.3.5-6.6 1.4-9.9 2.4L50.9 143C20.5 153.2 0 181.6 0 213.6 0 254.7 33.3 288 74.4 288h299.2c41.1 0 74.4-33.3 74.4-74.4 0-32-20.5-60.4-50.9-70.6l-35.3-11.8c-4.1-1.4-8.2-2.3-12.5-2.8 1.7-6.7 2.6-13.8 2.6-21C352 48.1 303.9 0 244.6 0zm27.9 512 24-192H156.1l24 192zM64 320l25.3 151.9c3.9 23.1 23.9 40.1 47.4 40.1h11.2l-24-192zm236.1 192h11.2c23.5 0 43.5-17 47.3-40.1L384 320h-59.9z"
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
                  d="M224 0c-8.9 0-17 4.9-21.2 12.7S199.1 30 204 37.3l10.8 16.3c.7 1.1 1.1 2.4 1.1 3.7 0 3.7-3 6.7-6.7 6.7H152c-39.8 0-72 32.2-72 72v.8C34.9 142.7 0 181.3 0 228c0 50.8 41.2 92 92 92h264c50.8 0 92-41.2 92-92 0-46.8-35-85.5-80.2-91.3.2-2 .2-4 .2-6.1C368 58.5 309.5 0 237.3 0zm40 57.3c0-1.7-.1-3.3-.2-5 32.7 11 56.2 41.9 56.2 78.3 0 6-1.8 11.5-4.8 16.1-4.9 7.4-5.3 16.8-1.1 24.6s12.3 12.6 21.1 12.6H356c24.3 0 44 19.7 44 44s-19.7 44-44 44H92c-24.3 0-44-19.7-44-44s19.7-44 44-44h18.4c8.6 0 16.5-4.6 20.8-12s4.3-16.6 0-24c-2-3.5-3.2-7.6-3.2-12 0-13.3 10.7-24 24-24h57.3c30.2 0 54.7-24.5 54.7-54.7zM89.3 471.9c3.9 23.1 23.9 40.1 47.4 40.1h11.2l-20-160H69.3zm90.8 40.1h87.8l20-160H160.1zm120 0h11.2c23.5 0 43.5-17 47.3-40.1l20-119.9h-58.5z"
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
                  d="M208 0c-5.9 0-11.3 3.2-14.1 8.5s-2.5 11.5.8 16.4l10.8 16.3c1.6 2.4 2.5 5.3 2.5 8.2 0 8.1-6.6 14.7-14.7 14.7H148c-36.2 0-65.8 28.3-67.9 64H80c-44.2 0-80 35.8-80 80s35.8 80 80 80h288c44.2 0 80-35.8 80-80s-35.8-80-80-80C368 57.3 310.7 0 240 0zm32 49.3c0-6-1.1-11.8-3.3-17.3h3.3c53 0 96 43 96 96 0 4-.6 7.8-1.7 11.4-1.4 4.8-.5 10.1 2.5 14.1s7.8 6.4 12.8 6.4H368c26.5 0 48 21.5 48 48s-21.5 48-48 48H80c-26.5 0-48-21.5-48-48s21.5-48 48-48h17.4c4.9 0 9.5-2.2 12.5-6.1s4.1-8.8 3-13.6c-.6-2.7-1-5.4-1-8.3 0-19.9 16.1-36 36-36h45.3c25.9.1 46.8-20.8 46.8-46.6M89.7 471.4c3.7 23.4 23.8 40.6 47.4 40.6h173.7c23.6 0 43.8-17.2 47.4-40.6L382 320h-32.4l-22.9 146.5c-1.2 7.8-7.9 13.5-15.8 13.5h-29.5l13.3-160h-32.1l-13.3 160h-50.6l-13.3-160h-32.1l13.3 160h-29.5c-7.9 0-14.6-5.7-15.8-13.5L98.4 320H66z"
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
                  d="M208 0c-3 0-5.7 1.6-7.1 4.2s-1.2 5.8.4 8.2l10.8 16.3c2.5 3.7 3.8 8.1 3.8 12.6.1 12.5-10.1 22.7-22.6 22.7H152c-35.3 0-64 28.7-64 64h-8c-44.2 0-80 35.8-80 80s35.8 80 80 80h288c44.2 0 80-35.8 80-80s-35.8-80-80-80h-8.1c0-.9.1-1.8.1-2.7C360 56.1 303.9 0 234.7 0zm17.5 19.8-2.6-3.8h11.7C295 16 344 65 344 125.3c0 3.2-.3 6.2-.8 9.2-.4 2.3.2 4.7 1.7 6.6s3.8 2.9 6.1 2.9h17c35.3 0 64 28.7 64 64s-28.7 64-64 64H80c-35.3 0-64-28.7-64-64s28.7-64 64-64h16.6c2.3 0 4.5-1 6-2.8s2.2-4.1 1.9-6.4c-.3-2.2-.5-4.5-.5-6.9 0-26.5 21.5-48 48-48h41.3c21.4.1 38.7-17.2 38.7-38.6 0-7.6-2.3-15.1-6.5-21.5m-135.4 451c3.4 23.6 23.6 41.2 47.5 41.2h172.8c23.9 0 44.1-17.6 47.5-41.2L379.4 320h-16.1L342 468.5c-2.3 15.8-15.8 27.5-31.7 27.5H272l14.7-176h-16.1L256 495.3v.7h-64v-.7L177.4 320h-16.1L176 496h-38.4c-15.9 0-29.4-11.7-31.7-27.5L84.7 320H68.6z"
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
                  d="M225.2 9.9c2.5-6 8.3-9.9 14.8-9.9h4.6C303.9 0 352 48.1 352 107.4c0 7.3-.9 14.3-2.6 21 4.2.5 8.4 1.5 12.5 2.8l22.6 7.5C422.4 151.5 448 187 448 227c0 51.4-41.6 93-93 93H93c-51.4 0-93-41.6-93-93 0-40 25.6-75.6 63.6-88.2l22.6-7.5q4.8-1.65 9.9-2.4v-.8c0-35.3 28.7-64 64-64h62.1C232 64 240 56 240 46.1c0-4.8-1.9-9.3-5.3-12.7l-6.1-6.1c-4.6-4.6-5.9-11.5-3.5-17.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m64.6 315.6 25 156c3.7 23.3 23.8 40.4 47.4 40.4h10.9l-24-192H93c-9.9 0-19.5-1.5-28.4-4.4m91.6 4.4 24 192H268l24-192H156.1zm168 0-24 192h10.9c23.6 0 43.7-17.1 47.4-40.4l25-156c-9 2.9-18.5 4.4-28.4 4.4h-31z"
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
