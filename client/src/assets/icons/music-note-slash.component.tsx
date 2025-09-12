import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MusicNoteSlashIcon: React.FC<
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
                  d="M512 32c0-9.9-4.5-19.2-12.3-25.2S481.8-1.4 472.2 1l-128 32C330 36.5 320 49.3 320 64v161.5L38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L384 275.7V153l103.8-26c14.2-3.5 24.2-16.3 24.2-31zM272 352c-61.9 0-112 35.8-112 80s50.1 80 112 80 112-35.8 112-80v-20.8L317.8 359c-14-4.5-29.5-7-45.8-7"
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
                  d="M512 31.1C512 13.9 498.1 0 480.9 0c-2.7 0-5.3.3-7.9 1L321.9 40.8C311.3 43.6 304 53.1 304 64v149L38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L352 250.6v-55.2l141.9-36.1C504.6 156.6 512 147 512 136zM304 366.3c-18.1-9-40.2-14.3-64-14.3-61.9 0-112 35.8-112 80s50.1 80 112 80 112-35.8 112-80v-58.7l-48-37.8zm0 65.7c0 2.6-1.4 9.4-12.7 17.5-11.2 8-29.2 14.5-51.3 14.5s-40.1-6.5-51.3-14.5c-11.3-8.1-12.7-14.9-12.7-17.5s1.4-9.4 12.7-17.5c11.2-8 29.2-14.5 51.3-14.5s40.1 6.5 51.3 14.5c11.3 8.1 12.7 14.9 12.7 17.5m160-314.7-112 28.5V82.5L464 53z"
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
                  d="m352 189.1 147.9-37.6c7.1-1.8 12.1-8.2 12.1-15.5V23.1C512 10.3 501.7 0 488.9 0c-2 0-4 .3-5.9.8L331.9 40.5c-7 1.8-11.9 8.2-11.9 15.5v118.5l32 25.3zm-32 148.4V376c-20.3-14.8-48.7-24-80-24-61.9 0-112 35.8-112 80s50.1 80 112 80 112-35.8 112-80v-69.2zm0 94.5c0 9.1-5.1 20.3-19.4 30.5S265 480 240 480s-46.3-7.3-60.6-17.5S160 441.1 160 432s5.1-20.3 19.4-30.5S215 384 240 384s46.3 7.3 60.6 17.5S320 422.9 320 432m160-308.4-128 32.5V68.3l128-33.7v88.9zM25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="m354 190.4 139.9-35.6c10.6-2.7 18.1-12.3 18.1-23.3V15.1C512 6.8 505.2 0 496.9 0c-1.3 0-2.6.2-3.8.5L353.9 37.1C343.3 39.9 336 49.4 336 60.3v116.6l17.3 13.7c.2 0 .4-.1.7-.1zm-18 170v30.4c-19.6-23.2-55.3-38.8-96-38.8-61.9 0-112 35.8-112 80s50.1 80 112 80 112-35.8 112-80v-59zm22-307.8 138-36.3v115.3c0 3.7-2.5 6.9-6 7.8l-138 35V60.3c0-3.6 2.4-6.8 6-7.7M336 432c0 15.6-8.8 31.2-26.1 43.5C292.6 487.9 268 496 240 496s-52.6-8.1-69.9-20.5c-17.3-12.3-26.1-28-26.1-43.5s8.8-31.2 26.1-43.5C187.4 376.1 212 368 240 368s52.6 8.1 69.9 20.5c17.3 12.3 26.1 28 26.1 43.5M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M512 32c0-9.9-4.5-19.2-12.3-25.2S481.8-1.4 472.2 1l-128 32C330 36.5 320 49.3 320 64v161.5l64 50.2V153l103.8-26c14.2-3.5 24.2-16.3 24.2-31zM320 348.1v11.6c-14.5-4.9-30.8-7.7-48-7.7-61.9 0-112 35.8-112 80s50.1 80 112 80 112-35.8 112-80v-33.5z"
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
