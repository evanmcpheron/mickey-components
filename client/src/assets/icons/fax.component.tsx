import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaxIcon: React.FC<
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
                  d="M128 64v96h64V64h194.7L416 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L432 18.7C420 6.7 403.7 0 386.7 0H192c-35.3 0-64 28.7-64 64M0 160v320c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m480 32H128v288c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32m-224 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m96 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-160 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M176 64c0-8.8 7.2-16 16-16h191.4c4.2 0 8.3 1.7 11.3 4.7l32.6 32.6c3 3 4.7 7.1 4.7 11.3V160h48V96.6c0-17-6.7-33.3-18.7-45.3l-32.6-32.6C416.7 6.7 400.4 0 383.4 0H192c-35.3 0-64 28.7-64 64v66c-5.1-1.3-10.5-2-16-2H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H176zm0 176h272c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16H174c1.3-5.1 2-10.5 2-16zm-64 224H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16m160-192a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-32 128a32 32 0 1 0 64 0 32 32 0 1 0-64 0m128-128a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-32 128a32 32 0 1 0 64 0 32 32 0 1 0-64 0"
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
                  d="M160 64c0-17.7 14.3-32 32-32h196.1c8.5 0 16.6 3.4 22.6 9.4l27.9 27.9c6 6 9.4 14.1 9.4 22.6V160h32V91.9c0-17-6.7-33.3-18.7-45.3l-27.9-27.9C421.4 6.7 405.1 0 388.1 0H192c-35.3 0-64 28.7-64 64v72.6c-9.4-5.4-20.3-8.6-32-8.6H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h32c19.1 0 36.3-8.4 48-21.7 11.7 13.3 28.9 21.7 48 21.7h256c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H160zm0 160h288c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zm-32-32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32m168 112a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 72a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-120 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M160 56c0-22.1 17.9-40 40-40h180.1c10.6 0 20.8 4.2 28.3 11.7l27.9 27.9c7.5 7.5 11.7 17.7 11.7 28.3V160h16V83.9c0-14.9-5.9-29.1-16.4-39.6l-27.9-27.9A55.92 55.92 0 0 0 380.1 0H200c-30.9 0-56 25.1-56 56v93.7c-11.7-13.3-28.9-21.7-48-21.7H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h32c22.9 0 43-12 54.3-30.1 9.3 17.9 28.1 30.1 49.7 30.1h256c30.9 0 56-25.1 56-56V248c0-30.9-25.1-56-56-56H160zm0 152h296c22.1 0 40 17.9 40 40v208c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V208m-16 240.1c0 26.5-21.5 47.9-48 47.9H64c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v256.1M232 320a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0m144 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 48a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-48 96a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m96 48a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32-16a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-144 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
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
                  d="M128 64v128h352V90.5c0-17-6.7-33.3-18.7-45.3l-26.6-26.5C422.7 6.7 406.5 0 389.5 0H192c-35.3 0-64 28.7-64 64m96 224a32 32 0 1 0 64 0 32 32 0 1 0-64 0m0 128a32 32 0 1 0 64 0 32 32 0 1 0-64 0m128-128a32 32 0 1 0 64 0 32 32 0 1 0-64 0m0 128a32 32 0 1 0 64 0 32 32 0 1 0-64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 128c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32zm448 64H128v288c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32m-224 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m96 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-160 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
