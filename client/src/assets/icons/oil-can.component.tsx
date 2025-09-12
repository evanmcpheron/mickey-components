import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const OilCanIcon: React.FC<
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
                  d="M320 128c17.7 0 32-14.3 32-32s-14.3-32-32-32H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32H48c-26.5 0-48 21.5-48 48v64.8c0 19 11.2 36.2 28.5 43.9l67.5 30V368c0 26.5 21.5 48 48 48h259.1c18.4 0 35.8-7.9 48-21.7l182.4-206.6c12.3-13.9-.3-35.4-18.4-31.5L448 192l-50.5-25.2c-8.9-4.4-18.7-6.8-28.6-6.8H288v-32zM96 208v86.1l-48-21.3V208z"
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
                  d="M328 112c13.3 0 24-10.7 24-24s-10.7-24-24-24H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48H48c-26.5 0-48 21.5-48 48v64.8c0 19 11.2 36.2 28.5 43.9l67.5 30V368c0 26.5 21.5 48 48 48h259.1c18.4 0 35.8-7.9 48-21.7L615 208.6l1.4-1.6 7.6-8.6 9.4-10.6c12.3-13.9-.3-35.4-18.4-31.5l-13.9 3-11.3 2.4-2.1.4L448 192l-50.5-25.2c-8.9-4.4-18.7-6.8-28.6-6.8H280v-48zm97.1 125.8c10.4 5.2 22.3 6.7 33.6 4.3l72.1-15.4-118.1 133.8c-2.4 2.8-5.9 4.3-9.6 4.3H147.2V211.2h221.7c2 0 3.9.5 5.7 1.4zM96 294.1l-48-21.3V208h48v86.1"
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
                  d="M336 96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v64H48c-26.5 0-48 21.5-48 48v62.7c0 20 12.4 37.9 31.1 44.9L96 340v28c0 26.5 21.5 48 48 48h259.1c18.4 0 35.8-7.9 48-21.7l182.4-206.6c12.3-13.9-.3-35.4-18.4-31.5L448 192l-50.5-25.2c-8.9-4.4-18.7-6.8-28.6-6.8H272V96zm97.7 124.6c6.5 3.2 13.9 4.2 21 2.7l129.1-27.7-156.7 177.6c-6.1 6.9-14.8 10.8-24 10.8H144c-8.8 0-16-7.2-16-16V192h240.9c5 0 9.9 1.2 14.3 3.4zM96 305.8l-53.6-20.1c-6.2-2.3-10.4-8.3-10.4-15V208c0-8.8 7.2-16 16-16h48z"
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
                  d="M344 80c4.4 0 8-3.6 8-8s-3.6-8-8-8H168c-4.4 0-8 3.6-8 8s3.6 8 8 8h80v80H48c-26.5 0-48 21.5-48 48v64.3c0 19.2 11.4 36.6 29.1 44.1L96 345.1V368c0 26.5 21.5 48 48 48h259.1c18.4 0 35.8-7.9 48-21.7l182.4-206.6c12.3-13.9-.3-35.4-18.4-31.5L448 192l-50.5-25.2c-8.9-4.4-18.7-6.8-28.6-6.8H264V80zm96.8 126.3c3.2 1.6 7 2.1 10.5 1.3l167-35.8c1.1-.2 1.6 0 2 .1.5.2 1 .7 1.4 1.4s.5 1.4.5 1.9c0 .4-.2 1-.9 1.8L439.1 383.8c-9.1 10.3-22.2 16.2-36 16.2H144c-17.7 0-32-14.3-32-32V176h256.9c7.4 0 14.8 1.7 21.5 5.1l50.5 25.2zM96 327.7l-60.6-26c-11.8-5-19.4-16.6-19.4-29.4V208c0-17.7 14.3-32 32-32h48z"
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
                  d="M320 128c17.7 0 32-14.3 32-32s-14.3-32-32-32H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32h64v-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M368.9 160c9.9 0 19.7 2.3 28.6 6.8L448 192l167-35.8c18.1-3.9 30.7 17.6 18.4 31.5L451.1 394.3c-12.1 13.8-29.6 21.7-48 21.7H144c-26.5 0-48-21.5-48-48v-21.3l-67.5-30C11.2 309 0 291.8 0 272.8V208c0-26.5 21.5-48 48-48h320.9M96 208H48v64.8l48 21.3z"
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
