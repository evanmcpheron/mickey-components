import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SmokingIcon: React.FC<
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
                  d="M448 32v11c0 38.2 15.2 74.8 42.2 101.8l21 21c21 21 32.8 49.5 32.8 79.2v11c0 17.7-14.3 32-32 32s-32-14.3-32-32v-11c0-12.7-5.1-24.9-14.1-33.9l-21-21c-39-39-60.9-92-60.9-147.1V32c0-17.7 14.3-32 32-32s32 14.3 32 32m128 224v-11c0-38.2-15.2-74.8-42.2-101.8l-21-21c-21-21-32.8-49.5-32.8-79.2V32c0-17.7 14.3-32 32-32s32 14.3 32 32v11c0 12.7 5.1 24.9 14.1 33.9l21 21c39 39 60.9 91.9 60.9 147.1v11c0 17.7-14.3 32-32 32s-32-14.3-32-32M0 416c0-35.3 28.7-64 64-64h352c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64zm224 0v32h160v-32zm288-64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-17.7 14.3-32 32-32m96 0c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96c0-17.7 14.3-32 32-32"
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
                  d="M440 0c13.3 0 24 10.7 24 24v19c0 38.2 15.2 74.8 42.2 101.8l21 21c21 21 32.8 49.5 32.8 79.2v19c0 13.3-10.7 24-24 24s-24-10.7-24-24v-19c0-17-6.7-33.3-18.7-45.3l-21-21C436.2 142.7 416 93.9 416 43V24c0-13.3 10.7-24 24-24m176 288c-13.3 0-24-10.7-24-24v-19c0-38.2-15.2-74.8-42.2-101.8l-21-21c-21-21-32.8-49.5-32.8-79.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24v19c0 17 6.7 33.3 18.7 45.3l21 21c36 36 56.2 84.8 56.2 135.8v19c0 13.3-10.7 24-24 24zm-56 88v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V376c0-13.3 10.7-24 24-24s24 10.7 24 24m80 0v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V376c0-13.3 10.7-24 24-24s24 10.7 24 24m-416 88h208v-64H224zM0 416c0-35.3 28.7-64 64-64h384c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64z"
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
                  d="M464 0c-8.8 0-16 7.2-16 16v27c0 46.7 18.5 91.4 51.5 124.5l21 21c15 15 23.4 35.4 23.4 56.6v27c0 8.8 7.2 16 16 16s16-7.2 16-16V245c0-29.7-11.8-58.2-32.8-79.2l-21-21C495.2 117.8 480 81.2 480 43V16c0-8.8-7.2-16-16-16m160 288c8.8 0 16-7.2 16-16v-27c0-46.7-18.5-91.4-51.5-124.5l-21-21C552.4 84.5 544 64.2 544 43V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v27c0 29.7 11.8 58.2 32.8 79.2l21 21c27 27 42.2 63.6 42.2 101.8v27c0 8.8 7.2 16 16 16M64 384h128v96H64c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32m160 0h256v96H224zM64 512h432c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64m496-160c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V368c0-8.8-7.2-16-16-16m64 0c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V368c0-8.8-7.2-16-16-16"
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
                  d="M456 0c-4.4 0-8 3.6-8 8v35c0 46.7 18.5 91.4 51.5 124.5l21 21c15 15 23.4 35.4 23.4 56.6v35c0 4.4 3.6 8 8 8s8-3.6 8-8V245c0-25.5-10.1-49.9-28.1-67.9l-21-21C480.9 126.1 464 85.4 464 43V8c0-4.4-3.6-8-8-8m176 288c4.4 0 8-3.6 8-8v-35c0-46.7-18.5-91.4-51.5-124.5l-21-21C552.4 84.5 544 64.2 544 43V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v35c0 25.5 10.1 49.9 28.1 67.9l21 21c30 30 46.9 70.7 46.9 113.1v35c0 4.4 3.6 8 8 8M48 368h176v128H48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m192-16H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h432c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm240 144H240V368h240c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16m160-136c0-4.4-3.6-8-8-8s-8 3.6-8 8v144c0 4.4 3.6 8 8 8s8-3.6 8-8zm-88-8c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8s8-3.6 8-8V360c0-4.4-3.6-8-8-8m48 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v144c0 4.4 3.6 8 8 8s8-3.6 8-8z"
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
                  d="M448 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v11c0 55.2 21.9 108.1 60.9 147.1l21 21c9 9 14.1 21.2 14.1 33.9v11c0 17.7 14.3 32 32 32s32-14.3 32-32v-11c0-29.7-11.8-58.2-32.8-79.2l-21-21c-27-27-42.2-63.6-42.2-101.8zm128 224c0 17.7 14.3 32 32 32s32-14.3 32-32v-11c0-55.2-21.9-108.1-60.9-147.1l-21-21c-9-9-14.1-21.2-14.1-33.9V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v11c0 29.7 11.8 58.2 32.8 79.2l21 21c27 27 42.2 63.6 42.2 101.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h352c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32zm160 64h160v32H224zm320-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32zm96 0c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32z"
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
