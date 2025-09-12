import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AnglesUpIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3l137.4 137.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3l137.4 137.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M241 47c-9.4-9.4-24.6-9.4-33.9 0L47 207c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l143-143L367 241c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm160 352L241 239c-9.4-9.4-24.6-9.4-33.9 0L47 399c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l143-143L367 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M235.3 52.7c-6.2-6.2-16.4-6.2-22.6 0l-160 160c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 86.6l148.7 148.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zm160 352-160-160c-6.2-6.2-16.4-6.2-22.6 0l-160 160c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 278.6l148.7 148.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M229.7 50.3c-3.1-3.1-8.2-3.1-11.3 0l-176 176c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L224 67.3l170.3 170.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-176-176zm176 368-176-176c-3.1-3.1-8.2-3.1-11.3 0l-176 176c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L224 259.3l170.3 170.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M201.4 233.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 301.3 86.6 438.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M201.4 41.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 109.3 86.6 246.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
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
