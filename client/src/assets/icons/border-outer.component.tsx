import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BorderOuterIcon: React.FC<
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
                  d="M64 96v320h320V96zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-64 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128-32a32 32 0 1 1-64 0 32 32 0 1 1 64 0M224 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-64 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128-32a32 32 0 1 1-64 0 32 32 0 1 1 64 0M224 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 88a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-72 72a24 24 0 1 1-48 0 24 24 0 1 1 48 0m72 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48m120-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0M224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-80 80a16 16 0 1 1-32 0 16 16 0 1 1 32 0m80 16a16 16 0 1 1 0-32 16 16 0 1 1 0 32m112-16a16 16 0 1 1-32 0 16 16 0 1 1 32 0M224 368a16 16 0 1 1 0-32 16 16 0 1 1 0 32"
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
                  d="M256 160a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-96 96a32 32 0 1 1-64 0 32 32 0 1 1 64 0m64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128-32a32 32 0 1 1-64 0 32 32 0 1 1 64 0M224 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 96v320H64V96zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z"
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
