import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowUpSquareTriangleIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2l32.4-35.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48m123.1 223c-5.8-9.4-16.1-15-27.1-15s-21.3 5.7-27.1 15l-80 128c-6.2 9.9-6.5 22.3-.9 32.5s16.4 16.5 28 16.5h160c11.6 0 22.3-6.3 28-16.5s5.3-22.6-.9-32.5z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M528 454.9c0 13.8-11.2 25.1-25.1 25.1H329.1c-13.8 0-25.1-11.2-25.1-25.1 0-4.5 1.2-9 3.6-12.9l84.2-140.3c5.1-8.5 14.3-13.7 24.2-13.7s19.1 5.2 24.2 13.7L524.4 442c2.3 3.9 3.6 8.4 3.6 12.9M368 80v96h96V80zm94.4 352L416 354.6 369.6 432zM320 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48zM143 39c9.4-9.4 24.6-9.4 33.9 0l96 96c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V113.9L81 169c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l96-96z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M171.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L144 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM352 176V80c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16m64 147.5L490.7 448H341.3zM320 176c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48zm-12.4 266c-2.3 3.9-3.6 8.4-3.6 12.9 0 13.8 11.2 25.1 25.1 25.1h173.8c13.8 0 25.1-11.2 25.1-25.1 0-4.5-1.2-9-3.6-12.9l-84.2-140.3c-5.1-8.5-14.3-13.7-24.2-13.7s-19.1 5.2-24.2 13.7z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M154.3 34.3c3.1-3.1 8.2-3.1 11.3 0l104 104c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L168 59.3V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V59.3l-90.3 90.4c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l104-104zm285.9 267.4L524.4 442c2.3 3.9 3.6 8.4 3.6 12.9 0 13.8-11.2 25.1-25.1 25.1H329.1c-13.8 0-25.1-11.2-25.1-25.1 0-4.5 1.2-9 3.6-12.9l84.2-140.3c5.1-8.5 14.3-13.7 24.2-13.7s19.1 5.2 24.2 13.7m-34.7 8.3-84.2 140.3c-.8 1.4-1.3 3-1.3 4.7 0 5 4.1 9.1 9.1 9.1h173.8c5 0 9.1-4.1 9.1-9.1 0-1.6-.4-3.3-1.3-4.7L426.5 310c-2.2-3.7-6.2-6-10.5-6s-8.3 2.3-10.5 6M336 176c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32zm-16 0V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M368 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48m48 256c11 0 21.3 5.7 27.1 15l80 128c6.2 9.9 6.5 22.3.9 32.5S507.6 480 496 480H336c-11.6 0-22.3-6.3-28-16.5s-5.3-22.6.9-32.5l80-128c5.8-9.4 16.1-15 27.1-15"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 32c9 0 17.5 3.8 23.6 10.4l88 96c11.9 13 11.1 33.3-2 45.2s-33.3 11.1-45.2-2L192 146.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V146.3l-32.4 35.3c-11.9 13-32.2 13.9-45.2 2s-13.9-32.2-2-45.2l88-96C142.5 35.8 151 32 160 32"
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
