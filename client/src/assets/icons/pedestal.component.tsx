import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PedestalIcon: React.FC<
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
                  d="M96 0C60.7 0 32 28.7 32 64v352h384V64c0-35.3-28.7-64-64-64zm24 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48m184 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
                  d="M352 48H96c-8.8 0-16 7.2-16 16v368H32V64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64v368h-48V64c0-8.8-7.2-16-16-16M24 464h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24m96-352a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M352 32H96c-17.7 0-32 14.3-32 32v384H32V64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64v384h-32V64c0-17.7-14.3-32-32-32M16 480h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16m96-384a16 16 0 1 1 32 0 16 16 0 1 1-32 0m208-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M352 16H96c-26.5 0-48 21.5-48 48v400H32V64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64v400h-16V64c0-26.5-21.5-48-48-48M8 496h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8M96 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m192-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m16 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M32 64C32 28.7 60.7 0 96 0h256c35.3 0 64 28.7 64 64v384H32zm112 24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m184 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144 88a24 24 0 1 0-48 0 24 24 0 1 0 48 0m208 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
