import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SignsPostIcon: React.FC<
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
                  d="M224 32H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h377.4c4.2 0 8.3-1.7 11.3-4.7l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-3-3-7.1-4.7-11.3-4.7H288c0-17.7-14.3-32-32-32s-32 14.3-32 32m256 224c0-17.7-14.3-32-32-32H288v-32h-64v32H70.6c-4.2 0-8.3 1.7-11.3 4.7l-48 48c-6.2 6.2-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7H448c17.7 0 32-14.3 32-32zM288 480v-96h-64v96c0 17.7 14.3 32 32 32s32-14.3 32-32"
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
                  d="M232 24c0-13.3 10.7-24 24-24s24 10.7 24 24v8h160.3c4.9 0 9.5 2.2 12.5 6l51.2 64c4.7 5.8 4.7 14.1 0 20l-51.2 64c-3 3.8-7.6 6-12.5 6H280v32h168c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H280v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V384H71.7c-4.9 0-9.5-2.2-12.5-6L8 314c-4.7-5.8-4.7-14.1 0-20l51.2-64c3-3.8 7.6-6 12.5-6H232v-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h168zM80 80v64h344.9l25.6-32-25.6-32zm352 256v-64H87.1l-25.6 32 25.6 32z"
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
                  d="M240 16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h168.3c4.9 0 9.5 2.2 12.5 6l51.2 64c4.7 5.8 4.7 14.1 0 20l-51.2 64c-3 3.8-7.6 6-12.5 6H272v32h176c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H272v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H71.7c-4.9 0-9.5-2.2-12.5-6L8 314c-4.7-5.8-4.7-14.1 0-20l51.2-64c3-3.8 7.6-6 12.5-6H240v-32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h176zm192.6 48H64v96h368.6l38.4-48zM79.4 256 41 304l38.4 48H448v-96z"
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
                  d="M248 8c0-4.4 3.6-8 8-8s8 3.6 8 8v40h176.8c4.6 0 8.9 2 12 5.4l49.8 56c5.4 6.1 5.4 15.2 0 21.3l-49.8 56c-3 3.4-7.4 5.4-12 5.4H264v48h184c17.7 0 32 14.3 32 32v80c0 17.7-14.3 32-32 32H264V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V384H71.2c-4.6 0-8.9-2-12-5.4l-49.8-56c-5.4-6.1-5.4-15.2 0-21.3l49.8-56c3-3.4 7.4-5.4 12-5.4H248V192H64c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32h184zm192.8 56H64c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h376.8l49.8-56zM71.2 256l-49.8 56 49.8 56H448c8.8 0 16-7.2 16-16v-80c0-8.8-7.2-16-16-16z"
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
                  d="M224 32v32h64V32c0-17.7-14.3-32-32-32s-32 14.3-32 32m64 160h-64v32h64zm0 288V352h-64v128c0 17.7 14.3 32 32 32s32-14.3 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 64h377.4c4.2 0 8.3 1.7 11.3 4.7l48 48c6.2 6.2 6.2 16.4 0 22.6l-48 48c-3 3-7.1 4.7-11.3 4.7H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32m384 160c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H70.6c-4.2 0-8.3-1.7-11.3-4.7l-48-48c-6.2-6.2-6.2-16.4 0-22.6l48-48c3-3 7.1-4.7 11.3-4.7z"
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
