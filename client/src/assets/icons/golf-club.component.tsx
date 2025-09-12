import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GolfClubIcon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M508.6 46.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L264 392.5v-.5L42.1 318C21.4 311.1 0 326.6 0 348.4V376h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v8c0 17.7 14.3 32 32 32h223.3c12 .3 23.6-6.3 29.3-17.7z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M498.7 2.5c11.9 5.9 16.7 20.3 10.7 32.2L290.7 472.2a71.96 71.96 0 0 1-64.4 39.8H56c-30.9 0-56-25.1-56-56V347.1c0-37.6 36.3-64.5 72.2-53.6L293 360.4 466.5 13.3c5.9-11.9 20.3-16.7 32.2-10.7zM271.2 404 58.3 339.5c-5.1-1.6-10.3 2.3-10.3 7.7V368h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H48v16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H48v8c0 4.4 3.6 8 8 8h170.3c9.1 0 17.4-5.1 21.5-13.3z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M510.3 23.2c4-7.9.7-17.5-7.2-21.5s-17.5-.7-21.5 7.2L303.5 365.1l-243-65.7C30 291.2 0 314.2 0 345.8V464c0 26.5 21.5 48 48 48h178.3c24.2 0 46.4-13.7 57.2-35.4l42.7-85.5 184-368zM52.2 330.4l236.8 64-34 68c-5.4 10.8-16.5 17.7-28.6 17.7H48c-8.8 0-16-7.2-16-16V448h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H32v-16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H32v-22.2c0-10.5 10-18.2 20.2-15.4"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M511.2 11.6c2-4 .4-8.8-3.6-10.7s-8.8-.4-10.7 3.6L309.6 378.8l-259.2-70C25 301.9 0 321.1 0 347.4V472c0 22.1 17.9 40 40 40h186.3c21.2 0 40.6-12 50.1-31l44.6-89.2zM16 456h64c4.4 0 8-3.6 8-8s-3.6-8-8-8H16v-48h64c4.4 0 8-3.6 8-8s-3.6-8-8-8H16v-28.6c0-15.8 15-27.3 30.3-23.2l256.1 69.2-40.2 80.5c-6.8 13.6-20.6 22.1-35.8 22.1H40c-13.3 0-24-10.7-24-24z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M508.6 46.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L264 392.5v-.5L42.1 318C21.4 311.1 0 326.6 0 348.4V376h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v8c0 17.7 14.3 32 32 32h223.3c12 .3 23.6-6.3 29.3-17.7z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 408h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H0zm0 64h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H0z"
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
