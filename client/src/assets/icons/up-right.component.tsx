import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UpRightIcon: React.FC<
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
                  d="M336 80H96c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l72 72-134 134C4.1 347.9 0 357.8 0 368s4.1 20.1 11.3 27.3l41.4 41.4C59.9 443.9 69.8 448 80 448s20.1-4.1 27.3-11.3l134.1-134.1 72 72c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V112c0-17.7-14.3-32-32-32z"
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
                  d="M320 128v193.4c0 1.7-.8 3.2-2.1 4.2-2.1 1.6-5 1.4-6.9-.5L257 271c-9.4-9.4-24.6-9.4-33.9 0L98.3 395.7c-2.7 2.7-6.5 4.3-10.3 4.3s-7.6-1.5-10.3-4.3l-25.4-25.4c-2.7-2.7-4.3-6.5-4.3-10.3s1.5-7.6 4.3-10.3L177 225c9.4-9.4 9.4-24.6 0-33.9L122.9 137c-1.8-1.8-2.1-4.8-.5-6.9 1-1.3 2.5-2.1 4.2-2.1zm48-8c0-22.1-17.9-40-40-40H126.6c-16.8 0-32.5 7.9-42.6 21.3-15.9 21.2-13.8 50.9 4.9 69.6l37.2 37.1L18.3 315.7C6.6 327.5 0 343.4 0 360s6.6 32.5 18.3 44.3l25.4 25.4C55.5 441.4 71.4 448 88 448s32.5-6.6 44.3-18.3L240 321.9l37.1 37.1c18.7 18.7 48.4 20.8 69.6 5 13.4-10.1 21.3-25.8 21.3-42.6z"
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
                  d="M312 128c4.4 0 8 3.6 8 8v201.4c0 3.7-3 6.6-6.6 6.6-1.8 0-3.4-.7-4.7-1.9l-61.4-61.4c-6.2-6.2-16.4-6.2-22.6 0L112 393.4c-4.2 4.2-10 6.6-16 6.6s-11.8-2.4-16-6.6L54.6 368c-4.2-4.2-6.6-10-6.6-16s2.4-11.8 6.6-16l112.7-112.7c3-3 4.7-7.1 4.7-11.3s-1.7-8.3-4.7-11.3l-61.4-61.4c-1.2-1.2-1.9-2.9-1.9-4.7 0-3.7 3-6.6 6.6-6.6zm40 8c0-22.1-17.9-40-40-40H110.6C89.3 96 72 113.3 72 134.6c0 10.2 4.1 20.1 11.3 27.3l50.1 50.1L32 313.4c-10.2 10.2-16 24.1-16 38.6s5.8 28.4 16 38.6L57.4 416c10.2 10.2 24.1 16 38.6 16s28.4-5.8 38.6-16L236 314.6l50.1 50.1c7.2 7.2 17.1 11.3 27.3 11.3 21.3 0 38.6-17.3 38.6-38.6z"
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
                  d="M336 96c8.8 0 16 7.2 16 16v235.7c0 11.2-9.1 20.3-20.3 20.3-5.4 0-10.5-2.1-14.3-5.9l-75.7-75.7c-3.1-3.1-8.2-3.1-11.3 0L93.7 423c-5.7 5.7-13.5 9-21.7 9s-15.9-3.2-21.7-9L25 397.6c-5.7-5.7-9-13.5-9-21.7s3.2-15.9 9-21.7l136.7-136.5c1.5-1.5 2.3-3.5 2.3-5.7s-.8-4.2-2.3-5.7l-75.8-75.7c-3.8-3.8-5.9-9-5.9-14.3 0-11.2 9.1-20.3 20.3-20.3zm32 16c0-17.7-14.3-32-32-32H100.3C80.2 80 64 96.2 64 116.3c0 9.6 3.8 18.9 10.6 25.7l70.1 70-131 131C4.9 351.8 0 363.6 0 376s4.9 24.2 13.7 33L39 434.3C47.7 443 59.6 448 72 448s24.2-4.9 33-13.7l131-131 70.1 70.1c6.8 6.8 16 10.6 25.7 10.6 20 0 36.3-16.2 36.3-36.3V112z"
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
                  d="M145.4 206.6 11.3 340.7C4.1 347.9 0 357.8 0 368s4.1 20.1 11.3 27.3l41.4 41.4C59.9 443.9 69.8 448 80 448s20.1-4.1 27.3-11.3l134.1-134.1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M336 80H96c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l240 240c9.2 9.2 22.9 11.9 34.9 6.9S368 365 368 352V112c0-17.7-14.3-32-32-32"
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
