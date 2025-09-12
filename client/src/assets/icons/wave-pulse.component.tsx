import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WavePulseIcon: React.FC<
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
                  d="M319.1 0c14.8-.4 27.9 9.3 31.8 23.6l74 271.2 17.7-35.4c10.8-21.7 33-35.4 57.2-35.4H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H499.8l-55.2 110.3c-5.9 11.9-18.6 18.8-31.8 17.5s-24.2-10.6-27.7-23.4l-61.4-225.1-68.4 319.4c-3.1 14.4-15.5 24.8-30.2 25.3s-27.8-9.1-31.8-23.2L135.9 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h103.9c28.6 0 53.7 18.9 61.5 46.4l22.2 77.6 69.1-322.7C291.8 10.9 304.4.4 319.1 0"
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
                  d="M319.4 0c11.1-.3 21 7.1 23.8 17.9l79.3 303.9 27.1-57.7c9.2-19.6 29-32.2 50.7-32.2H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H500.3c-3.1 0-5.9 1.8-7.2 4.6l-55.4 117.7c-4.3 9.1-13.9 14.6-23.9 13.7s-18.5-8.1-21-17.8l-70.1-268.7-75.2 363.5c-2.2 10.9-11.6 18.8-22.7 19.1s-21-6.9-23.9-17.6l-57.6-208.5c-1-3.5-4.1-5.9-7.7-5.9H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h111.6c25.2 0 47.3 16.8 54 41.1l31 112.6 75.9-366.6C298.8 8.2 308.2.3 319.4 0"
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
                  d="M319.6 0c7.5-.2 14.1 4.9 15.9 12.1l84 336 37.6-93.9C464.4 236 482 224 501.7 224H624c8.8 0 16 7.2 16 16s-7.2 16-16 16H501.7c-6.5 0-12.4 4-14.9 10.1l-56 139.9c-2.6 6.4-9 10.5-15.9 10s-12.8-5.4-14.4-12.1l-78.7-315-82 410.2c-1.5 7.3-7.8 12.7-15.3 12.9s-14.1-4.9-15.9-12.1l-58.1-231.8c-1.7-7.1-8.1-12.1-15.5-12.1H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h119c22 0 41.2 15 46.6 36.4l40.7 162.7 82-410.2C305.8 5.5 312.1.2 319.6 0"
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
                  d="M319.8 0c3.8-.1 7.1 2.5 8 6.1l90.1 375.6 46.6-116.5c6.1-15.2 20.8-25.1 37.1-25.1H632c4.4 0 8 3.6 8 8s-3.6 8-8 8H501.7c-9.8 0-18.6 6-22.3 15.1l-56 139.8c-1.3 3.2-4.5 5.3-8 5s-6.4-2.7-7.2-6.1L320.8 45.8l-89 459.7c-.7 3.7-3.9 6.4-7.6 6.5s-7.1-2.4-8-6.1l-57.9-231.7C155.6 263.5 146 256 135 256H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h127c18.4 0 34.4 12.5 38.8 30.3L223 467 312.1 6.5c.7-3.7 3.9-6.4 7.7-6.5"
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
                  d="M319.1 0c14.8-.4 27.9 9.3 31.8 23.6l74 271.2 17.7-35.4c10.8-21.7 33-35.4 57.2-35.4H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H499.8l-55.2 110.3c-5.9 11.9-18.6 18.8-31.8 17.5s-24.2-10.6-27.7-23.4l-61.4-225.1-68.4 319.4c-3.1 14.4-15.5 24.8-30.2 25.3s-27.8-9.1-31.8-23.2L135.9 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h103.9c28.6 0 53.7 18.9 61.5 46.4l22.2 77.6 69.1-322.7C291.8 10.9 304.4.4 319.1 0"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
