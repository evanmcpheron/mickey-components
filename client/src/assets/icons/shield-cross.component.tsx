import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShieldCrossIcon: React.FC<
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
                  d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM256 66.8l32 13.6V128c0 17.7 14.3 32 32 32h111.3c-1.2 19.6-4.2 41.4-9.4 64H320c-17.7 0-32 14.3-32 32v170.8c-10 6.5-20.7 12.5-32 18-11.3-5.5-22-11.5-32-18V256c0-17.7-14.3-32-32-32H90.1c-5.2-22.6-8.1-44.4-9.4-64H192c17.7 0 32-14.3 32-32V80.3l32-13.6z"
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
                  d="m73 127 183-77.6L439 127c5.9 2.5 9.1 7.8 9 12.8-.4 91.4-38.4 249.3-186.3 320.1-3.6 1.7-7.8 1.7-11.3 0C102.4 389 64.5 231.2 64 139.7c0-5 3.1-10.2 9-12.8zm384.7-44.2L269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.8 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2M280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24v48h-96c-13.3 0-24 10.7-24 24s10.7 24 24 24h96v176c0 13.3 10.7 24 24 24s24-10.7 24-24V216h96c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96z"
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
                  d="M243.5 37.3c8-3.4 17-3.4 25 0l176.7 75c11.3 4.8 18.9 15.5 18.8 27.6-.5 94-39.4 259.8-195.5 334.5-7.9 3.8-17.2 3.8-25.1 0C87.3 399.6 48.5 233.8 48 139.8c-.1-12.1 7.5-22.8 18.8-27.6l176.7-75zM281 7.8c-16-6.8-34-6.8-50 0l-176.7 75c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM272 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v64H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h128v192c0 8.8 7.2 16 16 16s16-7.2 16-16V208h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H272z"
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
                  d="M237.3 22.6c12-5.1 25.5-5.1 37.5 0l176.7 75c16.6 7.1 28.6 23.2 28.5 42.4-.5 96.6-40.3 270.2-204.5 348.8-12.3 5.9-26.7 5.9-39 0C72.3 410.1 32.5 236.5 32 139.9c-.1-19.1 11.9-35.3 28.5-42.4l176.7-75zM281 7.8c-16-6.8-34-6.8-50 0l-176.7 75c-22 9.3-38.4 31-38.3 57.2.5 99.2 41.3 280.7 213.6 363.2 16.7 8 36.1 8 52.8 0C454.8 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2zM264 104c0-4.4-3.6-8-8-8s-8 3.6-8 8v80H104c-4.4 0-8 3.6-8 8s3.6 8 8 8h144v208c0 4.4 3.6 8 8 8s8-3.6 8-8V200h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H264z"
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
                  d="m224 10.8-169.7 72c-22 9.3-38.4 31-38.3 57.2 0 6.4.2 13 .6 20H192c17.7 0 32-14.3 32-32zM24.7 224c19 95.9 72.7 213.2 199.3 276.4V256c0-17.7-14.3-32-32-32zM288 500.4C414.6 437.2 468.3 319.9 487.3 224H320c-17.7 0-32 14.3-32 32zM495.4 160c.4-7 .6-13.7.6-20 .1-26.2-16.3-47.9-38.3-57.2L288 10.8V128c0 17.7 14.3 32 32 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m288 10.8-18.6-7.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L224 10.8V128c0 17.7-14.3 32-32 32H16.6c1.1 19.4 3.6 41.1 8.1 64H192c17.7 0 32 14.3 32 32v244.4c1.9.9 3.7 1.8 5.6 2.7 16.7 8 36.1 8 52.8 0 1.9-.9 3.8-1.8 5.6-2.7V256c0-17.7 14.3-32 32-32h167.3c4.5-22.9 7.1-44.6 8.1-64H320c-17.7 0-32-14.3-32-32z"
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
