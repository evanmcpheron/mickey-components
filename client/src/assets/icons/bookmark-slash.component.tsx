import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BookmarkSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512 376V48c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v27zm471 492.6L128 196.8v290.9c0 13.4 10.9 24.3 24.3 24.3 5 0 9.9-1.5 14-4.4L320 400l153.7 107.6c4.1 2.9 9 4.4 14 4.4 9.9 0 18.4-5.9 22.2-14.3z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512 376V48c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v27zM176 112.6V48h288v290.4zm333.9 385.2L315.3 344.5c-3.3.6-6.5 2-9.3 4l-130 92.9V234.7l-48-37.8V488c0 9 5 17.2 13 21.3s17.6 3.4 24.9-1.8l154.1-110 154.1 110c7.3 5.2 16.9 5.9 24.9 1.8 4.9-2.5 8.8-6.7 10.9-11.6z"
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
                  d="M512 48c0-26.5-21.5-48-48-48H176c-18.9 0-35.2 10.9-43.1 26.8L160 48.1V48c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v252.8l32 25.2zM160 471.4V211.2L128 186v303.9c0 12.2 9.9 22.1 22.1 22.1 4.4 0 8.6-1.3 12.3-3.7L320 403.2l157.6 105.1c3.6 2.4 7.9 3.7 12.3 3.7 12.2 0 22.1-9.9 22.1-22.1v-.7l-32-25.3v7.6L328.9 370.7c-5.4-3.6-12.4-3.6-17.7 0zM25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M512 56c0-30.9-25.1-56-56-56H184c-18.1 0-34.1 8.6-44.4 21.9l12.6 9.9C159.5 22.2 171 16 184 16h272c22.1 0 40 17.9 40 40v247.2l16 12.6zM144 485.8v-277l-16-12.6v289.6c0 14.5 11.8 26.2 26.2 26.2 5.4 0 10.6-1.7 15.1-4.7L320 401.8l150.7 105.5c4.4 3.1 9.7 4.7 15.1 4.7 10.4 0 19.4-6 23.6-14.8L496 486.6c-.5 5.2-4.9 9.4-10.2 9.4-2.1 0-4.2-.6-5.9-1.9L324.6 385.4c-2.8-1.9-6.4-1.9-9.2 0L160.1 494.1c-1.7 1.2-3.8 1.9-5.9 1.9-5.7 0-10.2-4.6-10.2-10.2M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M512 376V48c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v27zm-2.2 121.7L128 196.8v290.9c0 13.4 10.9 24.3 24.3 24.3 5 0 9.9-1.5 14-4.4L320 400l153.7 107.6c4.1 2.9 9 4.4 14 4.4 9.9 0 18.4-5.9 22.2-14.3z"
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
