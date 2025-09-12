import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SignHangingIcon: React.FC<
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
                  d="M96 0c17.7 0 32 14.3 32 32v32h352c17.7 0 32 14.3 32 32s-14.3 32-32 32H128v352c0 17.7-14.3 32-32 32s-32-14.3-32-32V128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V32C64 14.3 78.3 0 96 0m96 160h256c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32"
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
                  d="M88 0c13.3 0 24 10.7 24 24v40h376c13.3 0 24 10.7 24 24s-10.7 24-24 24H112v376c0 13.3-10.7 24-24 24s-24-10.7-24-24V112H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40V24C64 10.7 74.7 0 88 0m104 336h240V192H192zm-48-160c0-17.7 14.3-32 32-32h272c17.7 0 32 14.3 32 32v176c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32z"
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
                  d="M80 0c8.8 0 16 7.2 16 16v48h400c8.8 0 16 7.2 16 16s-7.2 16-16 16H96v400c0 8.8-7.2 16-16 16s-16-7.2-16-16V96H16C7.2 96 0 88.8 0 80s7.2-16 16-16h48V16c0-8.8 7.2-16 16-16m80 160v192h288V160zm-32 0c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32z"
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
                  d="M72 0c4.4 0 8 3.6 8 8v56h424c4.4 0 8 3.6 8 8s-3.6 8-8 8H80v424c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h56V8c0-4.4 3.6-8 8-8m88 144c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32z"
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
                  d="M128 32c0-17.7-14.3-32-32-32S64 14.3 64 32v32H32C14.3 64 0 78.3 0 96s14.3 32 32 32h32v352c0 17.7 14.3 32 32 32s32-14.3 32-32V128h352c17.7 0 32-14.3 32-32s-14.3-32-32-32H128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 160c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z"
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
