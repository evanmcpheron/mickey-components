import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const VoicemailIcon: React.FC<
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
                  d="M144 320a80 80 0 1 1 0-160 80 80 0 1 1 0 160m119.8 0c15.3-22.9 24.2-50.4 24.2-80 0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144h352c79.5 0 144-64.5 144-144S575.5 96 496 96s-144 64.5-144 144c0 29.6 8.9 57.1 24.2 80zM496 160a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
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
                  d="M144 144a96 96 0 1 1 0 192 96 96 0 1 1 0-192m107.3 192c22.8-25.5 36.7-59.1 36.7-96 0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144h352c79.5 0 144-64.5 144-144S575.5 96 496 96s-144 64.5-144 144c0 36.9 13.9 70.5 36.7 96zM496 144a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
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
                  d="M144 352a112 112 0 1 0 0-224 112 112 0 1 0 0 224m144-112c0 45.2-20.9 85.6-53.5 112h171c-32.6-26.4-53.5-66.8-53.5-112 0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144H144C64.5 384 0 319.5 0 240S64.5 96 144 96s144 64.5 144 144m208 112a112 112 0 1 0 0-224 112 112 0 1 0 0 224"
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
                  d="M144 368a128 128 0 1 0 0-256 128 128 0 1 0 0 256m144-128c0 55.7-31.7 104.1-78 128h220c-46.3-23.9-78-72.3-78-128 0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144H144C64.5 384 0 319.5 0 240S64.5 96 144 96s144 64.5 144 144m208 128a128 128 0 1 0 0-256 128 128 0 1 0 0 256m-352-64a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160m416 80a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-144 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
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
                  d="M144 288a48 48 0 1 0 0-96 48 48 0 1 0 0 96m352 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144 320a80 80 0 1 1 0-160 80 80 0 1 1 0 160m119.8 0c15.3-22.9 24.2-50.4 24.2-80 0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144h352c79.5 0 144-64.5 144-144S575.5 96 496 96s-144 64.5-144 144c0 29.6 8.9 57.1 24.2 80zM496 160a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
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
