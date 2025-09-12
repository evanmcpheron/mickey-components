import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DownRightIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M336 432H96c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l72-72-134-134C4.1 164.1 0 154.2 0 144s4.1-20.1 11.3-27.3l41.4-41.4C59.9 68.1 69.8 64 80 64s20.1 4.1 27.3 11.3l134.1 134.1 72-72c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6V400c0 17.7-14.3 32-32 32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M320 384V190.6c0-1.7-.8-3.2-2.1-4.2-2.1-1.6-5-1.4-6.9.5L257 241c-9.4 9.4-24.6 9.4-33.9 0L98.3 116.3c-2.7-2.7-6.5-4.3-10.3-4.3s-7.6 1.5-10.3 4.3l-25.4 25.4c-2.7 2.7-4.3 6.5-4.3 10.3s1.5 7.6 4.3 10.3L177 287c9.4 9.4 9.4 24.6 0 33.9L122.9 375c-1.8 1.8-2.1 4.8-.5 6.9 1 1.3 2.5 2.1 4.2 2.1zm48 8c0 22.1-17.9 40-40 40H126.6c-16.8 0-32.5-7.9-42.6-21.3-15.9-21.2-13.8-50.9 4.9-69.6l37.2-37.1L18.3 196.3C6.6 184.5 0 168.6 0 152s6.6-32.5 18.3-44.3l25.4-25.3C55.5 70.6 71.4 64 88 64s32.5 6.6 44.3 18.3L240 190.1l37.1-37.1c18.7-18.7 48.4-20.8 69.6-5 13.4 10.1 21.3 25.8 21.3 42.6z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M312 384c4.4 0 8-3.6 8-8V174.6c0-3.7-3-6.6-6.6-6.6-1.8 0-3.4.7-4.7 1.9l-61.4 61.4c-6.2 6.2-16.4 6.2-22.6 0L112 118.6c-4.2-4.2-10-6.6-16-6.6s-11.8 2.4-16 6.6L54.6 144c-4.2 4.2-6.6 10-6.6 16s2.4 11.8 6.6 16l112.7 112.7c3 3 4.7 7.1 4.7 11.3s-1.7 8.3-4.7 11.3l-61.4 61.4c-1.2 1.2-1.9 2.9-1.9 4.7 0 3.7 3 6.6 6.6 6.6zm40-8c0 22.1-17.9 40-40 40H110.6C89.3 416 72 398.7 72 377.4c0-10.2 4.1-20.1 11.3-27.3l50.1-50.1L32 198.6c-10.2-10.2-16-24.1-16-38.6s5.8-28.4 16-38.6L57.4 96C67.6 85.8 81.5 80 96 80s28.4 5.8 38.6 16L236 197.4l50.1-50.1c7.2-7.2 17.1-11.3 27.3-11.3 21.3 0 38.6 17.3 38.6 38.6z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M336 416c8.8 0 16-7.2 16-16V164.3c0-11.2-9.1-20.3-20.3-20.3-5.4 0-10.5 2.1-14.3 5.9l-75.7 75.7c-3.1 3.1-8.2 3.1-11.3 0L93.7 89C88 83.3 80.2 80 72 80s-15.9 3.2-21.7 9L25 114.4c-5.7 5.7-9 13.5-9 21.7s3.2 15.9 9 21.7l136.7 136.5c1.5 1.5 2.3 3.5 2.3 5.7s-.8 4.2-2.3 5.7l-75.8 75.7c-3.8 3.8-5.9 9-5.9 14.3 0 11.2 9.1 20.3 20.3 20.3zm32-16c0 17.7-14.3 32-32 32H100.3c-20 0-36.3-16.2-36.3-36.3 0-9.6 3.8-18.9 10.6-25.7l70.1-70-131-131C4.9 160.2 0 148.4 0 136s4.9-24.2 13.7-33L39 77.7C47.8 68.9 59.6 64 72 64s24.2 4.9 33 13.7l131 131 70.1-70.1c6.8-6.8 16-10.6 25.7-10.6 20 0 36.3 16.2 36.3 36.3V400z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M145.4 305.4 11.3 171.3C4.1 164.1 0 154.2 0 144s4.1-20.1 11.3-27.3l41.4-41.4C59.9 68.1 69.8 64 80 64s20.1 4.1 27.3 11.3l134.1 134.1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M336 432H96c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l240-240c9.2-9.2 22.9-11.9 34.9-6.9S368 147 368 160v240c0 17.7-14.3 32-32 32"
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
