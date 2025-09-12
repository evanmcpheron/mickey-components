import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowsTurnToDotsIcon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M249.4 25.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L269.3 96H416c53 0 96 43 96 96v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32c0-17.7-14.3-32-32-32H269.3l25.4 25.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-80-80c-12.5-12.5-12.5-32.8 0-45.3zm13.3 256 80 80c12.5 12.5 12.5 32.8 0 45.3l-80 80c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l25.3-25.4H96c-17.7 0-32 14.3-32 32v32c0 17.7-14.3 32-32 32S0 497.7 0 480v-32c0-53 43-96 96-96h146.7l-25.4-25.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0zM384 384a64 64 0 1 1 128 0 64 64 0 1 1-128 0M64 192a64 64 0 1 1 0-128 64 64 0 1 1 0 128"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M255 31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-39 39 174.1.1c48.6 0 88 39.4 88 88v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40c0-22.1-17.9-40-40-40H249.9l39 39c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9zm2 256 80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H88c-22.1 0-40 17.9-40 40v40c0 13.3-10.7 24-24 24S0 501.3 0 488v-40c0-48.6 39.4-88 88-88h174.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zm127 97a64 64 0 1 1 128 0 64 64 0 1 1-128 0M64 192a64 64 0 1 1 0-128 64 64 0 1 1 0 128"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M260.7 36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L230.6 112H432c44.2 0 80 35.8 80 80v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-26.5-21.5-48-48-48H230.6l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-80-80c-6.2-6.2-6.2-16.4 0-22.6zm-9.4 256 80 80c6.2 6.2 6.2 16.4 0 22.6l-80 80c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l52.7-52.7H80c-26.5 0-48 21.5-48 48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-44.2 35.8-80 80-80h201.4l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0M448 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128M32 128a32 32 0 1 0 64 0 32 32 0 1 0-64 0m96 0a64 64 0 1 1-128 0 64 64 0 1 1 128 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M274.3 34.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L211.3 120H440c39.8 0 72 32.2 72 72v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56c0-30.9-25.1-56-56-56H211.3l74.3 74.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3zm-36.7 256 88 88c3.1 3.1 3.1 8.2 0 11.3l-88 88c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l74.4-74.3H72c-30.9 0-56 25.1-56 56v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56c0-39.8 32.2-72 72-72h228.7l-74.3-74.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0zM448 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128M16 128a48 48 0 1 0 96 0 48 48 0 1 0-96 0m112 0a64 64 0 1 1-128 0 64 64 0 1 1 128 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M262.6 281.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l25.4 25.3H96c-53 0-96 43-96 96v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c0-17.7 14.3-32 32-32h146.7l-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3zM448 448a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M249.4 25.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L269.3 96H416c53 0 96 43 96 96v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32c0-17.7-14.3-32-32-32H269.3l25.4 25.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-80-80c-12.5-12.5-12.5-32.8 0-45.3zM64 192a64 64 0 1 1 0-128 64 64 0 1 1 0 128"
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
