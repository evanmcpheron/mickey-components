import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowDownUpLockIcon: React.FC<
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
                  d="m150.6 502.6 96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7V288h256v-16c0-17.2 3.9-33.5 10.8-48H352V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-6-6-14.1-9.4-22.6-9.4s-16.6 3.4-22.6 9.4l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l41.2-41.4V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v114.7l-41.4-41.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0zM160 192V64c0-17.7-14.3-32-32-32S96 46.3 96 64v128zm128 128v128c0 17.7 14.3 32 32 32s32-14.3 32-32V320zm240-80c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"
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
                  d="m145 505 96-96c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55V280H416v-8c0-14.1 2.6-27.6 7.4-40H344V81.9l55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L337 7c-4.5-4.5-10.6-7-17-7s-12.5 2.5-17 7l-96 96c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55V232H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h80v150.1L49 375c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l96 96c9.4 9.4 24.6 9.4 33.9 0zm7-313V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v136zm144 128v136c0 13.3 10.7 24 24 24s24-10.7 24-24V320zm232-80c17.7 0 32 14.3 32 32v48h-64v-48c0-17.7 14.3-32 32-32m-80 32v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80"
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
                  d="m139.3 507.3 96-96c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L144 457.4V272h272c0-11.1 1.6-21.9 4.6-32H336V54.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L304 54.6V240H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h96v185.4l-68.7-68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0M144 200V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v152zm192 112h-32v152c0 8.8 7.2 16 16 16s16-7.2 16-16zm192-88c26.5 0 48 21.5 48 48v48h-96v-48c0-26.5 21.5-48 48-48m-80 48v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80m0 80h160v128H448z"
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
                  d="m133.7 509.7 96-96c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L136 484.7V264h280.3c.4-5.5 1.2-10.8 2.3-16H328V27.3l82.3 82.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-96-96c-3.1-3.1-8.2-3.1-11.3 0l-96 96c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L312 27.3V248H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h112v220.7l-82.3-82.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l96 96c3.1 3.1 8.2 3.1 11.3 0zM136 192V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v152zm192 128h-16v152c0 4.4 3.6 8 8 8s8-3.6 8-8zm200-112c26.5 0 48 21.5 48 48v64h-96v-64c0-26.5 21.5-48 48-48m-64 48v64h-16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32h-16v-64c0-35.3-28.7-64-64-64s-64 28.7-64 64m-16 80h160c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H448c-8.8 0-16-7.2-16-16V352c0-8.8 7.2-16 16-16"
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
                  d="m246.6 406.6-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L96 402.7V288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h256V109.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c6-6 14.1-9.4 22.6-9.4s16.6 3.4 22.6 9.4l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L352 109.3V224h74.8c-6.9 14.5-10.8 30.8-10.8 48v16H160v114.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM160 64v128H96V64c0-17.7 14.3-32 32-32s32 14.3 32 32m128 384V320h64v128c0 17.7-14.3 32-32 32s-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 272v48h64v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32m-48 48v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32"
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
