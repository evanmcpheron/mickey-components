import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Square2Icon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm126.7 152.7-24.2 18.4c-10.5 8-25.6 6-33.6-4.5s-6-25.6 4.5-33.6l24.2-18.4c15.8-12 35.2-18.4 55.1-18.1l3.4.1c46.5.7 83.8 38.6 83.8 85.1 0 23.5-9.7 46-26.9 62.1L212.7 336H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-9.8 0-18.7-6-22.3-15.2s-1.3-19.6 5.9-26.3l108.7-101.9c7.5-7 11.7-16.8 11.7-27.1 0-20.3-16.3-36.8-36.6-37.1l-3.4-.1c-9.1-.1-18 2.8-25.3 8.3z"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm190.7 88.7-24.2 18.4c-10.5 8-25.6 6-33.6-4.5s-6-25.6 4.5-33.6l24.2-18.4c15.8-12 35.2-18.4 55.1-18.1l3.4.1c46.5.7 83.8 38.6 83.8 85.1 0 23.5-9.7 46-26.9 62.1L212.7 336H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-9.8 0-18.7-6-22.3-15.2s-1.3-19.6 5.9-26.3l108.7-101.9c7.5-7 11.7-16.8 11.7-27.1 0-20.3-16.3-36.8-36.6-37.1l-3.4-.1c-9.1-.1-18 2.8-25.3 8.3z"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm185 78.4-14 13.3c-6.4 6.1-16.6 5.7-22.6-.7s-5.7-16.6.7-22.6l14.1-13.2c15.8-14.9 36.8-23 58.5-22.7 45.6.5 82.3 37.8 82.3 83.5 0 22.2-8.8 43.4-24.5 59.1L198.6 352H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l108.2-108.2c9.7-9.7 15.1-22.8 15.1-36.5 0-28.2-22.7-51.2-50.9-51.6-13.4-.2-26.3 4.8-36.1 14"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm187.4 61.9L157 182.2c-3.4 2.8-8.5 2.2-11.2-1.2s-2.2-8.5 1.2-11.2l30.4-24.3c14.1-11.3 31.7-17.3 49.8-17.1h2.3c41.3.6 74.5 34.3 74.5 75.6 0 20.1-8 39.3-22.1 53.5L171.3 368H312c4.4 0 8 3.6 8 8s-3.6 8-8 8H152c-3.2 0-6.2-1.9-7.4-4.9s-.6-6.4 1.7-8.7l124.2-124.3C281.7 235 288 219.8 288 204c0-32.6-26.2-59.1-58.8-59.6h-2.3c-14.4-.2-28.3 4.6-39.6 13.6z"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm126.7 152.7-24.2 18.4c-10.5 8-25.6 6-33.6-4.5s-6-25.6 4.5-33.6l24.2-18.4c15.8-12 35.2-18.4 55.1-18.1l3.4.1c46.5.7 83.8 38.6 83.8 85.1 0 23.5-9.7 46-26.9 62.1L212.7 336H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-9.8 0-18.7-6-22.3-15.2s-1.3-19.6 5.9-26.3l108.7-101.9c7.5-7 11.7-16.8 11.7-27.1 0-20.3-16.3-36.8-36.6-37.1l-3.4-.1c-9.1-.1-18 2.8-25.3 8.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M216 176.3c-9.1-.1-18 2.8-25.3 8.3L166.5 203c-10.5 8-25.6 6-33.6-4.5s-6-25.6 4.5-33.6l24.2-18.4c15.8-12 35.2-18.4 55.1-18.1l3.4.1c46.5.7 83.8 38.6 83.8 85.1 0 23.5-9.7 46-26.9 62.1L212.7 336H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-9.8 0-18.7-6-22.3-15.2s-1.3-19.6 5.9-26.3l108.7-101.9c7.5-7 11.7-16.8 11.7-27.1 0-20.3-16.3-36.8-36.6-37.1z"
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
