import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SealExclamationIcon: React.FC<
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
                  d="M222.1 17.9c18.7-18.7 49.1-18.7 67.9 0L336 64h64c26.5 0 48 21.5 48 48v64l45.6 45.6c18.7 18.7 18.7 49.1 0 67.9L448 335.1V400c0 26.5-21.5 48-48 48h-64.9L290 493.1c-18.7 18.7-49.1 18.7-67.9 0L176.9 448H112c-26.5 0-48-21.5-48-48v-64.9l-45.6-45.6c-18.7-18.7-18.7-49.1 0-67.9L64 176v-64c0-26.5 21.5-48 48-48h64zM256 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24m32 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M176 112c12.7 0 24.9-5.1 33.9-14.1l46.1-46L302.1 98c9 9 21.2 14.1 33.9 14.1h64v64c0 12.7 5.1 24.9 14.1 33.9l45.6 45.6-45.6 45.6c-9 9-14.1 21.2-14.1 33.9V400h-64.9c-12.7 0-24.9 5.1-33.9 14.1L256 459.2l-45.1-45.1c-9-9-21.2-14.1-33.9-14.1h-65v-64.9c0-12.7-5.1-24.9-14.1-33.9l-45.5-45.7L98 209.9c9-9 14.1-21.2 14.1-33.9v-64h64zm113.9-94.1C271.2-.8 240.8-.8 222 17.9L176 64h-64c-26.5 0-48 21.5-48 48v64l-45.6 45.6c-18.7 18.7-18.7 49.1 0 67.9L64 335.1V400c0 26.5 21.5 48 48 48h64.9l45.1 45.1c18.7 18.7 49.1 18.7 67.9 0l45.2-45.1H400c26.5 0 48-21.5 48-48v-64.9l45.6-45.6c18.7-18.7 18.7-49.1 0-67.9L448 176v-64c0-26.5-21.5-48-48-48h-64zM256 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24m32 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M86.6 198.6c6-6 9.4-14.1 9.4-22.6v-64c0-8.8 7.2-16 16-16h64c8.5 0 16.6-3.4 22.6-9.4l52.7-52.7c1.2-1.2 2.9-1.9 4.7-1.9s3.4.7 4.7 1.9l52.7 52.7c6 6 14.1 9.4 22.6 9.4h64c8.8 0 16 7.2 16 16v64c0 8.5 3.4 16.6 9.4 22.6l52.7 52.7c1.2 1.2 1.9 2.9 1.9 4.7s-.7 3.4-1.9 4.7l-52.7 52.7c-6 6-9.4 14.1-9.4 22.6v64c0 8.8-7.2 16-16 16h-64c-8.5 0-16.6 3.4-22.6 9.4l-52.7 52.7c-1.2 1.2-2.9 1.9-4.7 1.9s-3.4-.7-4.7-1.9l-52.7-52.7c-6-6-14.1-9.4-22.6-9.4h-64c-8.8 0-16-7.2-16-16v-64c0-8.5-3.4-16.6-9.4-22.6l-52.7-52.7c-1.2-1.2-1.9-2.9-1.9-4.7s.7-3.4 1.9-4.7zM64 112v64l-52.7 52.7C4.1 235.9 0 245.8 0 256s4.1 20.1 11.3 27.3L64 336v64c0 26.5 21.5 48 48 48h64l52.7 52.7c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3L336 448h64c26.5 0 48-21.5 48-48v-64l52.7-52.7c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3L448 176v-64c0-26.5-21.5-48-48-48h-64l-52.7-52.7C276.1 4.1 266.2 0 256 0s-20.1 4.1-27.3 11.3L176 64h-64c-26.5 0-48 21.5-48 48m192 16c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16m24 224a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M75.3 187.3c3-3 4.7-7.1 4.7-11.3v-64c0-17.7 14.3-32 32-32h64c4.2 0 8.3-1.7 11.3-4.7L240 22.6c4.2-4.2 10-6.6 16-6.6s11.8 2.4 16 6.6l52.7 52.7c3 3 7.1 4.7 11.3 4.7h64c17.7 0 32 14.3 32 32v64c0 4.2 1.7 8.3 4.7 11.3l52.7 52.7c4.2 4.2 6.6 10 6.6 16s-2.4 11.8-6.6 16l-52.7 52.7c-3 3-4.7 7.1-4.7 11.3v64c0 17.7-14.3 32-32 32h-64c-4.2 0-8.3 1.7-11.3 4.7L272 489.4c-4.2 4.2-10 6.6-16 6.6s-11.8-2.4-16-6.6l-52.7-52.7c-3-3-7.1-4.7-11.3-4.7h-64c-17.7 0-32-14.3-32-32v-64c0-4.2-1.7-8.3-4.7-11.3L22.6 272c-4.2-4.2-6.6-10-6.6-16s2.4-11.8 6.6-16zM64 112v64l-52.7 52.7C4.1 235.9 0 245.8 0 256s4.1 20.1 11.3 27.3L64 336v64c0 26.5 21.5 48 48 48h64l52.7 52.7c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3L336 448h64c26.5 0 48-21.5 48-48v-64l52.7-52.7c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3L448 176v-64c0-26.5-21.5-48-48-48h-64l-52.7-52.7C276.1 4.1 266.2 0 256 0s-20.1 4.1-27.3 11.3L176 64h-64c-26.5 0-48 21.5-48 48m192 16c-4.4 0-8 3.6-8 8v160c0 4.4 3.6 8 8 8s8-3.6 8-8V136c0-4.4-3.6-8-8-8m16 224a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M4.4 256c0 12.3 4.7 24.6 14.1 33.9L64 335.5V400c0 26.5 21.5 48 48 48h64.5l45.6 45.6c18.7 18.7 49.1 18.7 67.9 0l45.5-45.6H400c26.5 0 48-21.5 48-48v-64.5l45.6-45.6c18.7-18.7 18.7-49.1 0-67.9L448 176.5V112c0-26.5-21.5-48-48-48h-64.5l-45.6-45.6C271.2-.3 240.8-.3 222 18.4L176.5 64H112c-26.5 0-48 21.5-48 48v64.5l-45.6 45.6c-9.4 9.3-14 21.6-14 33.9M224 352a32 32 0 1 0 64 0 32 32 0 1 0-64 0m8-200v112c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24s-24 10.7-24 24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm-24 232a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
