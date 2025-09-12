import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CameraSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-55.5-43.5c.5-3.1.7-6.3.7-9.6V160c0-35.3-28.7-64-64-64h-74.7l-10.4-31.2C420.4 45.2 402.1 32 381.4 32H258.6c-20.7 0-39 13.2-45.5 32.8L202.7 96h-47.9zm246.6 193.3c10.7-4.1 22.4-6.4 34.6-6.4 53 0 96 43 96 96 0 4.1-.3 8.2-.8 12.2zm202 281.6-131-103.2c-11.2 4.6-23.5 7.2-36.4 7.2-53 0-96-43-96-96 0-5 .4-9.9 1.1-14.6l-159.9-126Q64 153.55 64 160v256c0 35.3 28.7 64 64 64z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-55.5-43.5c.5-3.1.7-6.3.7-9.6V160c0-35.3-28.7-64-64-64h-73.4L430 70.3C422.4 47.4 401 32 376.9 32H263.1C239 32 217.6 47.4 210 70.3L201.4 96h-46.6zM216 144h2.7c10.3 0 19.5-6.6 22.8-16.4l14-42.1c1.1-3.3 4.1-5.5 7.6-5.5h113.8c3.4 0 6.5 2.2 7.6 5.5l14 42.1c3.3 9.8 12.4 16.4 22.8 16.4H512c8.8 0 16 7.2 16 16v228.5l-98.4-77.2c1.6-7.5 2.4-15.4 2.4-23.4 0-61.9-50.1-112-112-112-17.5 0-34.1 4-48.9 11.2zm166.6 130.6L318.1 224h1.9c30.7 0 56.4 21.7 62.6 50.6M487.4 480l-60.9-48H128c-8.8 0-16-7.2-16-16V184.2l-46.8-36.8Q64 153.55 64 160v256c0 35.3 28.7 64 64 64zm-116.8-92-45.9-36.1c-1.6.1-3.1.2-4.7.2-31.8 0-58.2-23.2-63.2-53.6L211 262.2c-1.9 8.3-3 16.9-3 25.8 0 61.9 50.1 112 112 112 18.2 0 35.4-4.3 50.6-12"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM576 376.6V160c0-35.3-28.7-64-64-64h-71.1l-10.4-31.2C423.9 45.2 405.6 32 384.9 32H255.1c-20.7 0-39 13.2-45.5 32.8l-5.9 17.8 26.7 21.1L240 75c2.2-6.5 8.3-10.9 15.2-10.9h129.7c6.9 0 13 4.4 15.2 10.9l14 42.1c2.2 6.5 8.3 10.9 15.2 10.9H512c17.7 0 32 14.3 32 32v191.3zM96 160.7l-28.3-22.3c-2.4 6.8-3.7 14-3.7 21.6v256c0 35.3 28.7 64 64 64h372.4l-40.5-32H128c-17.7 0-32-14.3-32-32zm282.4 222.9-27.6-21.8c-9.5 4-19.9 6.1-30.8 6.1-44.2 0-80-35.8-80-80 0-4.4.3-8.6 1-12.8l-27.6-21.8c-3.5 10.9-5.4 22.5-5.4 34.6 0 61.9 50.1 112 112 112 21.4 0 41.4-6 58.4-16.4z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zm563 364.7V160c0-35.3-28.7-64-64-64h-76.9l-10.4-31.2C418.2 45.2 399.8 32 379.2 32H260.8c-20.7 0-39 13.2-45.5 32.8l-4.4 13.3 13.4 10.5 6.3-18.8c4.2-13 16.5-21.8 30.2-21.8h118.4c13.8 0 26 8.8 30.4 21.9l12.2 36.6c1.1 3.3 4.1 5.5 7.6 5.5H512c26.5 0 48 21.5 48 48v193.7l16 12.6zM80 158.3l-14.6-11.6c-.9 4.3-1.4 8.7-1.4 13.3v256c0 35.3 28.7 64 64 64h359.5l-20.3-16H128c-26.5 0-48-21.5-48-48V158.3m290.8 229.5-14.1-11.1c-11.3 4.7-23.7 7.3-36.7 7.3-53 0-96-43-96-96 0-5.1.4-10.2 1.2-15.1l-14.1-11.1c-2 8.4-3.1 17.2-3.1 26.2 0 61.9 50.1 112 112 112 18.3 0 35.6-4.4 50.8-12.2"
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
                  d="M356.4 376.8c-11.2 4.6-23.5 7.2-36.4 7.2-53 0-96-43-96-96 0-5 .4-9.9 1.1-14.6l-159.9-126Q64 153.55 64 160v256c0 35.3 28.7 64 64 64h359.4zM416 288c0 4.1-.3 8.2-.8 12.2l160 125.4c.5-3.1.7-6.3.7-9.6V160c0-35.3-28.7-64-64-64h-74.6l-10.4-31.2C420.4 45.2 402.1 32 381.4 32H258.6c-20.7 0-39 13.2-45.5 32.8L202.7 96h-47.9l130.6 102.4c10.7-4.1 22.4-6.4 34.6-6.4 53 0 96 43 96 96"
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
