import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChessKingPieceIcon: React.FC<
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
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v32H60.2C49.1 96 40 105.1 40 116.2c0 2.5.5 4.9 1.3 7.3L73.8 208H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h4L60 384h136l-16-128h4c13.3 0 24-10.7 24-24s-10.7-24-24-24h-1.8l32.5-84.5c.9-2.3 1.3-4.8 1.3-7.3 0-11.2-9.1-20.2-20.2-20.2H144V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16zM48 416 4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24 0-5.2-1.7-10.2-4.8-14.4L208 416z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v32H66.9C43.2 96 24 115.2 24 138.9c0 4.7.8 9.4 2.3 13.8l19.6 57.5C37.7 214.1 32 222.4 32 232c0 11.6 8.2 21.3 19.2 23.5L49.1 352h48l2.1-96h57.6l2.1 96h48l-2.1-96.5c10.9-2.2 19.2-11.9 19.2-23.5 0-9.6-5.7-17.9-13.9-21.8l19.6-57.5c1.5-4.5 2.3-9.1 2.3-13.8 0-23.7-19.2-42.9-42.9-42.9H144V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16zm16.2 192H95.8L74 144h108zm-91 224h117.6l16.6 32H52.7l16.6-32zm-9.7-48c-12 0-22.9 6.7-28.4 17.3L4.6 452.5c-3 5.8-4.6 12.2-4.6 18.7C0 493.8 18.2 512 40.8 512h174.4c22.5 0 40.8-18.2 40.8-40.8 0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2c-5.5-10.6-16.5-17.3-28.4-17.3z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v32H52.6C41.2 96 32 105.2 32 116.6c0 2.2.4 4.4 1.1 6.5L66.7 224H56c-8.8 0-16 7.2-16 16s7.2 16 16 16h13.8l-13.1 96H89l13.1-96h51.8l13.1 96h32.3l-13.1-96H200c8.8 0 16-7.2 16-16s-7.2-16-16-16h-10.7l33.6-100.8c.7-2.1 1.1-4.3 1.1-6.5 0-11.4-9.2-20.6-20.6-20.6H144V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16zm11.6 208h-55.2l-32-96h119.2zm34.6 160H65.8c-11.1 0-21.4 5.7-27.2 15.1L5.9 451.8C2.1 458 0 465.2 0 472.6 0 494.3 17.7 512 39.4 512h177.2c21.8 0 39.4-17.7 39.4-39.4 0-7.3-2.1-14.5-5.9-20.8l-32.7-52.7c-5.8-9.4-16.1-15.1-27.2-15.1M33.1 468.7 65.8 416h124.4l32.7 52.7c.7 1.2 1.1 2.5 1.1 3.9 0 4.1-3.3 7.4-7.4 7.4H39.4c-4.1 0-7.4-3.3-7.4-7.4 0-1.4.4-2.7 1.1-3.9"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M136 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v24H88c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v48H72c-17.7 0-32 14.3-32 32v1.6c0 4.2.8 8.4 2.5 12.3L76.7 224H64c-4.4 0-8 3.6-8 8s3.6 8 8 8h14.7l-23 144h16.2l23-144h66.2l23 144h16.2l-23-144H192c4.4 0 8-3.6 8-8s-3.6-8-8-8h-12.7l34.2-82.1c1.6-3.9 2.5-8.1 2.5-12.3V128c0-17.7-14.3-32-32-32h-48V48h32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32zm62.8 127.8L162 224H94l-36.8-88.2c-.8-2-1.2-4-1.2-6.2V128c0-8.8 7.2-16 16-16h112c8.8 0 16 7.2 16 16v1.6c0 2.1-.4 4.2-1.2 6.2M56.2 416c-7.8 0-15 3.7-19.5 10.1L4.5 471.2c-2.9 4-4.5 8.9-4.5 13.9v2.9c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24v-2.9c0-5-1.6-9.9-4.5-13.9l-32.2-45.1c-4.5-6.3-11.8-10.1-19.5-10.1zm-6.5 19.4c1.5-2.1 3.9-3.4 6.5-3.4h143.6c2.6 0 5 1.2 6.5 3.4l32.2 45.1c1 1.4 1.5 3 1.5 4.6v2.9c0 4.4-3.6 8-8 8H24c-4.4 0-8-3.6-8-8v-2.9c0-1.7.5-3.3 1.5-4.6z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M208 416H48L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24 0-5.2-1.7-10.2-4.8-14.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 0c8.8 0 16 7.2 16 16v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v32h51.8c11.2 0 20.2 9.1 20.2 20.2 0 2.5-.5 4.9-1.3 7.3L182.2 208h1.8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-2.7L208 416H48l26.7-160H72c-13.3 0-24-10.7-24-24s10.7-24 24-24h1.8l-32.5-84.5c-.9-2.3-1.3-4.8-1.3-7.3C40 105.1 49.1 96 60.2 96H112V64H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V16c0-8.8 7.2-16 16-16"
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
