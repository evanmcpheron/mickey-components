import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UtensilsSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.8-68V32c0-17.7-14.3-32-32-32-16 0-128 32-128 176v99.7l-77.6-60.8c8.6-13.6 13.6-29.7 13.6-47 0-6.4-.7-12.8-2.1-19.1L287.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S256 7.8 256 16v134.2c0 5.4-4.4 9.8-9.8 9.8-5.1 0-9.3-3.9-9.8-9L223.9 14.6C223.2 6.3 216.3 0 208 0s-15.2 6.3-15.9 14.6l-9.4 103.3-22.7-17.8V16c0-8.2-6.1-15-14.3-15.9s-15.6 4.5-17.4 12.4L116.5 66zm201.2 280L96.1 171.7c1.9 44.2 36.3 80 79.9 83.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z"
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
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1L115.3 65l4.9-43.7C121.6 8.2 133.5-1.3 146.7.1s22.7 13.3 21.2 26.5l-8.1 73.2 40.2 31.7V24c0-13.3 10.7-24 24-24s24 10.7 24 24v145.1l43.2 33.9c3-5.6 4.8-12.1 4.8-19v-14.7L280.1 26.7c-1.5-13.2 8-25 21.2-26.5s25 8 26.5 21.2l16 144 .1 1.3V184c0 18-5.4 34.8-14.7 48.8l54.8 42.9V176C384 32 496 0 512 0c17.7 0 32 14.3 32 32v369.1l86.8 68c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2M104 184v-6.1l144 113.5V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272h-8c-48.6 0-88-39.4-88-88m415.7 328h.6-.6M432 176v112c0 8.8 7.2 16 16 16h48V55.1c-7.1 3.6-14.9 8.5-22.6 15.2-19.7 17.1-41.4 48-41.4 105.7"
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
                  d="M151.8 18.6c1.5-8.7-4.4-17-13.2-18.4s-17 4.4-18.4 13.2l-.5 3L148.4 39l3.4-20.3zM197 77.3l3-60.5C200.4 8 193.6.5 184.8 0S168.5 6.4 168 15.2L166.1 53zm56.4 44.5L248 15.2c-.5-8.8-8-15.6-16.8-15.2S215.6 8 216 16.8l4 78.7zM129.3 187l-33.2-26.2c-.1 1.5-.1 3-.1 4.5V176c0 44.2 35.8 80 80 80h16v240c0 8.8 7.2 16 16 16s16-7.2 16-16V261.8L176.2 224h-.2c-22.7 0-41.8-15.8-46.7-37M320 174.5v-9.2c0-4.4-.4-8.8-1.1-13.2L295.8 13.4c-1.5-8.7-9.7-14.6-18.4-13.2s-14.6 9.7-13.2 18.4l21.5 128.7zm224 176.8V32c0-17.7-14.3-32-32-32-16 0-128 32-128 176v49l32 25.3V176c0-62.5 23.8-97.8 47-117.8 12-10.4 24.4-17.2 34.5-21.3 7.6-3.1 12.6-4.2 14.3-4.6l.2-.1V320h-7.6zM25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M143.9 9.3c.7-4.4-2.2-8.5-6.6-9.2s-8.5 2.2-9.2 6.6l-.9 5.4 14.3 11.3 2.3-14.1zm45.5 51.8L192 8.4c.2-4.4-3.2-8.2-7.6-8.4s-8.2 3.2-8.4 7.6L173.9 49l15.4 12.2zm55.5 43.8L240 7.6c-.2-4.4-4-7.8-8.4-7.6s-7.8 4-7.6 8.4l4.2 83.4 16.7 13.2zm-117.7 90.7-22.6-17.8c4.7 35.2 34.9 62.3 71.3 62.3h7.5l-23-18.2c-14.2-4.1-26.1-13.7-33.3-26.3zM200 253v251c0 4.4 3.6 8 8 8s8-3.6 8-8V265.6zm112-95v-.7c0-4-.3-7.9-1-11.8L287.9 6.7c-.7-4.4-4.8-7.3-9.2-6.6s-7.3 4.8-6.6 9.2l22.5 134.9zm216 170.5V24c0-13.3-10.7-24-24-24-16 0-120 32-120 176v38.8l16 12.6V176c0-67.7 24.2-107.4 48.9-130.3 12.5-11.6 25.5-19.2 36-23.8 5.3-2.3 9.9-3.8 13.4-4.8 3.7-1 5.6-1.1 5.7-1.1 4.4 0 8 3.6 8 8v291.8l16 12.6zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M544 401.1V32c0-17.7-14.3-32-32-32-16 0-128 32-128 176v99.7zM306.4 214.9c8.6-13.6 13.6-29.7 13.6-47 0-6.4-.7-12.8-2.1-19.1L287.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S256 7.8 256 16v134.2c0 5.4-4.4 9.8-9.8 9.8-5.1 0-9.3-3.9-9.8-9L223.9 14.6C223.2 6.3 216.3 0 208 0s-15.2 6.3-15.9 14.6l-9.4 103.3 123.8 97zM160 100.1V16c0-8.2-6.1-15-14.3-15.9s-15.6 4.5-17.4 12.4L116.5 66zm80 185L96.1 171.7c1.9 44.2 36.3 80 79.9 83.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z"
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
