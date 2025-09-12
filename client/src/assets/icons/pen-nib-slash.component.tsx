import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PenNibSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L450.3 327.6l28.3-94.4 2.8-9.2L352 94.6l-9.2 2.8-134.7 40.4zm29 440.7c-3.8 11.3-1 23.9 7.3 32.4l153.6-153.5c-3-6.3-4.7-13.3-4.7-20.7 0-9.4 2.7-18.2 7.4-25.7l-85-67zM404.9 415l-98.5-77.6c-8.7 9-20.9 14.6-34.4 14.6-7.4 0-14.4-1.7-20.7-4.7L97.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c3.6-1.2 7.1-2.8 10.5-4.6m27.5-396.7-55.7 55.8 125.2 125.2 55.7-55.7c21.9-21.9 21.9-57.3 0-79.2l-46-46.1c-21.9-21.9-57.3-21.9-79.2 0"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L448.6 326.3 476.2 225l10.4-10.4 71-71c21.9-21.9 21.9-57.3 0-79.2l-46-46.1c-21.9-21.9-57.3-21.9-79.2 0l-71 71L351 99.8l-142 38.7zm217.3 170.3 104.8-28.6 68.3 68.3-21.6 79.1zM401 411.9l-44.7-35.2-207.2 72.8 102.2-102.2c6.3 3 13.3 4.7 20.7 4.7 13.5 0 25.7-5.6 34.4-14.6l-75-59.1c-4.7 7.4-7.4 16.2-7.4 25.7 0 7.4 1.7 14.4 4.7 20.7L126.5 426.9l63.6-181.1-39.8-31.4L71 440c-6.5 18.5-1.8 39.1 12 52.9s34.4 18.5 52.9 12L400 412.1l.8-.3z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zm452.4 228.9 75.1-75.1c25-25 25-65.5 0-90.5l-44.1-44.1c-25-25-65.5-25-90.5 0l-75.1 75.1-80.3 21.9 31.2 24.7 52.6-14.4 98.9 98.9-7.9 28.9 27.3 21.5zm-99.3 162c-.5.2-1.1.4-1.7.5l-248 74.5 110.2-110.2c9.5 5.6 20.6 8.9 32.5 8.9 18.7 0 35.6-8 47.3-20.8l-25.3-20c-5.7 5.4-13.5 8.8-22 8.8-17.7 0-32-14.3-32-32 0-5.8 1.6-11.3 4.3-16l-25.2-20c-7 10.2-11.1 22.6-11.1 36 0 11.9 3.2 23 8.9 32.5L106.7 446.7l64.8-216.1-27-21.3-76.6 255.3c-3.7 12.3-.3 25.7 8.8 34.7s22.4 12.5 34.7 8.8l275.2-82.5c7.2-2.2 14-5.3 20.2-9.3zm62.4-349c12.5-12.5 32.8-12.5 45.3 0l44.1 44.1c12.5 12.5 12.5 32.8 0 45.3L464 201.4 374.6 112l66.7-66.7z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zm466.1 218.5 76.6-76.6c21.9-21.9 21.9-57.3 0-79.2l-44.1-44.1c-21.9-21.9-57.3-21.9-79.2 0l-76.6 76.6-87.4 26.6 15.3 12.1 74.1-22.5L463 218.3l-14.4 47.5 13.4 10.6 17.1-56.1zm-92.2 180.3c-1.7.8-3.5 1.4-5.4 2L96.4 493c-.8.3-1.6.4-2.5.5l144.6-144.6c9.3 7 21 11.1 33.5 11.1 16.2 0 30.7-6.9 41-17.8l-12.6-10c-7.2 7.3-17.3 11.8-28.3 11.8-22.1 0-40-17.9-40-40 0-7.7 2.2-14.9 6-21l-12.6-10c-5.9 8.9-9.4 19.5-9.4 31 0 12.6 4.1 24.2 11.1 33.5L82.6 482.1c.1-.8.2-1.7.5-2.5L164 224.5l-13.4-10.6-82.8 260.9c-3 9.5-.5 19.8 6.5 26.9s17.4 9.6 26.9 6.6l285.1-90.4c5.1-1.6 9.9-3.7 14.4-6.4l-13.8-10.9zm56.8-368.9c15.6-15.6 40.9-15.6 56.6 0l44.1 44.1c15.6 15.6 15.6 40.9 0 56.6L472 204.7 371.3 104z"
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
                  d="m306.4 337.4 98.5 77.6c-3.3 1.8-6.8 3.4-10.5 4.6l-264.2 88.6c-11.3 3.8-23.9 1-32.4-7.3l153.5-153.6c6.3 3 13.3 4.7 20.7 4.7 13.5 0 25.7-5.6 34.4-14.6m-160-126.1 85 67c-4.7 7.4-7.4 16.2-7.4 25.7 0 7.4 1.7 14.4 4.7 20.7L75.1 478.3c-8.3-8.6-11.2-21.1-7.3-32.4l78.6-234.5zm332.3 21.9-28.3 94.4-242.3-189.8 134.7-40.5 9.2-2.8L481.4 224l-2.8 9.2zM432.4 18.3c21.9-21.9 57.3-21.9 79.2 0l46.1 46.1c21.9 21.9 21.9 57.3 0 79.2L502 199.3 376.7 74.1l55.7-55.7z"
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
