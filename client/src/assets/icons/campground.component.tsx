import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CampgroundIcon: React.FC<
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
                  d="M377 52c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-39 48.8L249 12c-11-13.8-31.2-16-45-5s-16 31.2-5 45l48 60L12.3 405.4c-8 10-12.3 22.3-12.3 35V464c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48v-23.6c0-12.7-4.3-25.1-12.3-35L329 112zm-89 396H168.5L288 291.7 407.5 448z"
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
                  d="M375.4 5.6c10.2 8.5 11.5 23.6 3 33.8l-59.1 70.7 235.7 282c8.4 10.1 13 22.8 13 35.9v28c0 30.9-25.1 56-56 56H64c-30.9 0-56-25.1-56-56v-28c0-13.1 4.6-25.8 13-35.9l235.7-282-59.1-70.7c-8.5-10.2-7.1-25.3 3-33.8s25.3-7.1 33.8 3L288 72.7l53.6-64.1c8.5-10.2 23.6-11.5 33.8-3M57.9 422.8c-1.2 1.4-1.9 3.3-1.9 5.1v28c0 4.4 3.6 8 8 8h62l143.1-182.7c4.5-5.8 11.5-9.2 18.9-9.2s14.4 3.4 18.9 9.2L450 464h62c4.4 0 8-3.6 8-8v-28c0-1.9-.7-3.7-1.9-5.1L288 147.5zM187 464h202L288 334.9z"
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
                  d="M394.3 3.7c6.8 5.7 7.7 15.8 2 22.5l-87.4 104.2 223.9 266.8c7.2 8.6 11.2 19.5 11.2 30.8v36c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48v-36c0-11.3 4-22.2 11.2-30.9l223.9-266.7-87.4-104.1c-5.7-6.8-4.8-16.9 2-22.5s16.9-4.8 22.5 2l83.8 99.7 83.7-99.8c5.7-6.8 15.8-7.7 22.5-2zm-326.6 414c-2.4 2.9-3.7 6.5-3.7 10.3v36c0 8.8 7.2 16 16 16h49.9l1.5-1.9 144-184c3-3.9 7.7-6.1 12.6-6.1s9.6 2.3 12.6 6.1l144 184 1.5 1.9H496c8.8 0 16-7.2 16-16v-36c0-3.8-1.3-7.4-3.7-10.3L288 155.3zM170.6 480h234.8L288 330z"
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
                  d="M397.2 1.9c3.4 2.9 3.8 7.9.9 11.3L298.5 131l232.3 274.8c8.5 10.1 13.2 22.9 13.2 36.2v30c0 22.1-17.9 40-40 40H72c-22.1 0-40-17.9-40-40v-30.1c0-13.2 4.7-26 13.2-36.2L277.5 131 177.9 13.2c-2.9-3.4-2.4-8.4.9-11.3s8.4-2.4 11.3.9L288 118.6 385.9 2.8c2.9-3.4 7.9-3.8 11.3-.9M57.5 416.1c-6.1 7.2-9.5 16.4-9.5 25.8V472c0 13.3 10.7 24 24 24h68.1l141.6-180.9c1.5-1.9 3.8-3.1 6.3-3.1s4.8 1.1 6.3 3.1L435.9 496H504c13.3 0 24-10.7 24-24v-30.1c0-9.5-3.4-18.6-9.5-25.8L288 143.4zm103 79.9h255.1L288 333 160.4 496z"
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
                  d="M0 448v16c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48v-16H0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M372 7c13.8 11 16 31.2 5 45l-48 60 234.7 293.4c7.9 9.9 12.3 22.3 12.3 35v7.6H407.5L288 291.7 168.5 448H0v-7.6c0-12.7 4.3-25.1 12.3-35L247 112l-48-60c-11-13.8-8.8-33.9 5-45s33.9-8.8 45 5l39 48.8L327 12c11-13.8 31.2-16 45-5M47.7 512h480.6H47.7"
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
