import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareGIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 224c0 44.2 35.8 80 80 80 35.8 0 66.1-23.5 76.3-56H248c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24 0 70.7-57.3 128-128 128S96 326.7 96 256s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6 9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9C263.2 183.7 244.5 176 224 176c-44.2 0-80 35.8-80 80"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 160c0 44.2 35.8 80 80 80 35.8 0 66.1-23.5 76.3-56H248c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24 0 70.7-57.3 128-128 128S96 326.7 96 256s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6 9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9C263.2 183.7 244.5 176 224 176c-44.2 0-80 35.8-80 80"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 160c0 53 43 96 96 96 47.6 0 87.1-34.6 94.7-80H256c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c8.8 0 16 7.2 16 16 0 70.7-57.3 128-128 128S96 326.7 96 256s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6 6.6 5.9 7.1 16 1.3 22.6s-16 7.1-22.6 1.3c-17-15.2-39.4-24.4-64-24.4-53 0-96 43-96 96z"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112 160c0 61.9 50.1 112 112 112 59.2 0 107.6-45.9 111.7-104h-77.4c-4.4 0-8-3.6-8-8s3.6-8 8-8H336c8.7 0 16.3 7.2 15.7 16.5C347.3 331.2 291.8 384 224 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6 3.3 2.9 3.6 8 .6 11.3s-8 3.6-11.3.6c-19.8-17.7-46-28.5-74.7-28.5-61.9 0-112 50.1-112 112z"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 224c0 44.2 35.8 80 80 80 35.8 0 66.1-23.5 76.3-56H248c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24 0 70.7-57.3 128-128 128S96 326.7 96 256s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6 9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9C263.2 183.7 244.5 176 224 176c-44.2 0-80 35.8-80 80"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 176c-44.2 0-80 35.8-80 80s35.8 80 80 80c35.8 0 66.1-23.5 76.3-56H248c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24 0 70.7-57.3 128-128 128S96 326.7 96 256s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6 9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9C263.2 183.7 244.5 176 224 176"
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
