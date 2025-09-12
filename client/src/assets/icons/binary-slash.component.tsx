import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BinarySlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512 376v-24c0-35.3-28.7-64-64-64h-48.3L298 208.3c13.5-11.7 22-29 22-48.3V64c0-35.3-28.7-64-64-64h-64c-35.3 0-64 28.7-64 64v11zM192 125.2V64h64v96h-19.6zM464 32c0-10.3-4.9-19.9-13.3-26s-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2V160H384c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16zM240 320c0-10.3-4.9-19.9-13.3-26s-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2V448H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16zm80 32v96c0 35.3 28.7 64 64 64h64c20.1 0 38.1-9.3 49.8-23.8l-51-40.2H384v-49.5l-63.9-50.3c-.1 1.3-.1 2.5-.1 3.8"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512 376v-16c0-39.8-32.2-72-72-72h-40.3l-104.3-81.8C310.5 193 320 173.6 320 152V72c0-39.8-32.2-72-72-72h-48c-39.8 0-72 32.2-72 72v3zM176 112.6V72c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v80c0 10.7-7 19.7-16.6 22.8zM456 24c0-7.7-3.7-15-10-19.5s-14.3-5.7-21.6-3.3l-48 16C363.8 21.4 357 35 361.2 47.6S379 67 391.6 62.8l16.4-5.5V176h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32zM232 312c0-7.7-3.7-15-10-19.5s-14.3-5.7-21.6-3.3l-48 16c-12.6 4.2-19.4 17.8-15.2 30.4s17.8 19.4 30.4 15.2l16.4-5.5V464h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32zm88 48v80c0 39.8 32.2 72 72 72h48c22.2 0 42-10 55.2-25.8l-37.8-29.7c-4.4 4.7-10.6 7.6-17.5 7.6H392c-13.3 0-24-10.7-24-24v-54.2l-47.1-37.1c-.6 3.7-.9 7.4-.9 11.2"
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
                  d="M448 16c0-5.1-2.5-10-6.6-13S431.9-.8 427 .8l-48 16c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l26.9-9V192h-48c-6.3 0-11.8 3.7-14.4 9l29.1 23H496c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48zM320 144V80c0-44.2-35.8-80-80-80h-32c-27.2 0-51.2 13.5-65.6 34.2l25.2 19.9C176.1 40.8 191 32 208 32h32c26.5 0 48 21.5 48 48v64c0 1.7-.1 3.4-.3 5l27.6 21.8c3-8.4 4.6-17.4 4.6-26.8zm0 224v64c0 44.2 35.8 80 80 80h32c27.2 0 51.2-13.5 65.6-34.2l-25.2-19.9C463.9 471.2 449 480 432 480h-32c-26.5 0-48-21.5-48-48v-64c0-1.7.1-3.4.3-5l-27.6-21.8c-3 8.4-4.6 17.4-4.6 26.8zm-96-64c0-5.1-2.5-10-6.6-13s-9.5-3.8-14.4-2.2l-48 16c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l26.9-9V480h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48zM25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M432 224h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64V8c0-2.6-1.3-5.1-3.4-6.6s-4.9-1.8-7.4-.9l-64 24c-4.1 1.6-6.2 6.2-4.7 10.3s6.2 6.2 10.3 4.7l53.2-20V208h-48.6l20.3 16zM304 64c0-35.3-28.7-64-64-64h-32c-23.7 0-44.4 12.9-55.5 32.1l12.7 10.1c8-15.6 24.2-26.2 42.8-26.2h32c26.5 0 48 21.5 48 48v75l16 12.6zm32 384c0 35.3 28.7 64 64 64h32c23.7 0 44.4-12.9 55.5-32.1l-12.7-10.1c-8 15.5-24.1 26.1-42.7 26.1H400c-26.5 0-48-21.5-48-48V373l-16-12.6zM216 296c0-2.6-1.3-5.1-3.4-6.6s-4.9-1.8-7.4-.9l-64 24c-4.1 1.6-6.2 6.2-4.7 10.3s6.2 6.2 10.3 4.7l53.2-20V496h-64c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="m384 398.5-63.9-50.3c-.1 1.3-.1 2.5-.1 3.8v96c0 35.3 28.7 64 64 64h64c20.1 0 38.1-9.3 49.8-23.8l-51-40.2H384zM399.7 288 512 376v-24c0-35.3-28.7-64-64-64zM236.4 160l61.6 48.3c13.5-11.7 22-29 22-48.3V64c0-35.3-28.7-64-64-64h-64c-35.3 0-64 28.7-64 64v11l64 50.2V64h64v96zM464 32c0-10.3-4.9-19.9-13.3-26s-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2V160H384c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16zM240 320c0-10.3-4.9-19.9-13.3-26s-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2V448H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
