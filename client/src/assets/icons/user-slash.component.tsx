import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128 448 57.3 390.7 0 320 0c-69.8 0-126.5 55.8-128 125.2zm225.5 299.2C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7h388.6c3.9 0 7.6-.7 11-2.1z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128 448 57.3 390.7 0 320 0c-69.8 0-126.5 55.8-128 125.2zm251.7 197.3-35.6-27.9c-9.4-13.1-14.9-29.2-14.9-46.5 0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80c-10.4 0-20.4-2-29.5-5.6m-26.2 101.9C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7h388.6c3.9 0 7.6-.7 11-2.1L467.1 464H145.3c8.9-63.3 63.3-112 129-112h50.6z"
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
                  d="M448 128C448 57.3 390.7 0 320 0c-53.9 0-100.1 33.4-118.9 80.6l26.6 21C239.2 61.4 276.1 32 320 32c53 0 96 43 96 96 0 35.9-19.7 67.2-48.9 83.7l26.6 21C426.6 209.5 448 171.2 448 128m52.4 352H128c1.2-79.7 66.2-144 146.3-144H318l-40.5-32h-3.2C175.8 304 96 383.8 96 482.3c0 16.4 13.3 29.7 29.7 29.7h388.6c7 0 13.4-2.4 18.5-6.5zM25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M448 128C448 57.3 390.7 0 320 0c-51 0-95 29.8-115.6 73l12.9 10.2C234.6 43.6 274.1 16 320 16c61.9 0 112 50.1 112 112 0 36.6-17.5 69-44.6 89.5l12.9 10.2c29.1-23.5 47.7-59.4 47.7-99.7m59.8 368H125.7c-7.6 0-13.7-6.1-13.7-13.7 0-89.6 72.7-162.3 162.3-162.3h10.6l-20-15.8C170.8 309.1 96 387 96 482.3c0 16.4 13.3 29.7 29.7 29.7h388.6c3.9 0 7.7-.8 11.1-2.1zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="M448 128c0 59.2-40.1 109-94.7 123.6L192 125.2C193.5 55.8 250.2 0 320 0c70.7 0 128 57.3 128 128M264.3 304.3l261 205.6c-3.4 1.4-7.1 2.1-11 2.1H125.7c-16.4 0-29.7-13.3-29.7-29.7 0-95.1 74.5-172.9 168.3-178"
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
