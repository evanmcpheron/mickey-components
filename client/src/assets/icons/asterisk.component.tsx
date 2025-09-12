import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AsteriskIcon: React.FC<
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
                  d="M192 32c17.7 0 32 14.3 32 32v135.5l111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11l-111.6-67V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V312.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11l111.6 67V64c0-17.7 14.3-32 32-32"
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
                  d="M192 32c13.3 0 24 10.7 24 24v156.9l131.4-81.3c11.3-7 26.1-3.5 33 7.8s3.5 26.1-7.8 33l-135 83.6 135 83.6c11.3 7 14.8 21.8 7.8 33s-21.8 14.7-33 7.8L216 299.1V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V299.1L36.6 380.4c-11.3 7-26.1 3.5-33-7.8s-3.5-26.1 7.8-33l135-83.6-135-83.6c-11.3-7-14.8-21.8-7.8-33s21.8-14.8 33-7.8L168 212.9V56c0-13.3 10.7-24 24-24"
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
                  d="M192 32c8.8 0 16 7.2 16 16v178.9l151.4-96.4c7.5-4.7 17.3-2.5 22.1 4.9s2.5 17.3-4.9 22.1L221.8 256l154.8 98.5c7.5 4.7 9.7 14.6 4.9 22.1s-14.6 9.7-22.1 4.9L208 285.1V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V285.1L24.6 381.5c-7.5 4.7-17.3 2.5-22.1-4.9S0 359.3 7.4 354.5L162.2 256 7.4 157.5c-7.5-4.7-9.7-14.6-4.9-22.1s14.6-9.7 22.1-4.9L176 226.9V48c0-8.8 7.2-16 16-16"
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
                  d="M192 32c4.4 0 8 3.6 8 8v201.2l171.6-111.9c3.7-2.4 8.7-1.4 11.1 2.3s1.4 8.7-2.3 11.1L206.6 256l173.8 113.3c3.7 2.4 4.7 7.4 2.3 11.1s-7.4 4.7-11.1 2.3L200 270.8V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V270.8L12.4 382.7c-3.7 2.4-8.7 1.4-11.1-2.3s-1.4-8.7 2.3-11.1L177.4 256 3.6 142.7c-3.7-2.4-4.7-7.4-2.3-11.1s7.4-4.7 11.1-2.3L184 241.2V40c0-4.4 3.6-8 8-8"
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
                  d="M192 32c17.7 0 32 14.3 32 32v135.5l111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11l-111.6-67V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V312.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11l111.6 67V64c0-17.7 14.3-32 32-32"
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
