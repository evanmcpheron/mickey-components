import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LambdaIcon: React.FC<
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
                  d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h108.2l16.4 32.7L18.8 434.9c-7.3 16.1-.1 35.1 16 42.3s35.1.1 42.3-16l116.4-258.6 121 242c10.8 21.7 33 35.4 57.2 35.4H416c17.7 0 32-14.3 32-32s-14.3-32-32-32h-44.2L197.5 67.4c-10.9-21.7-33-35.4-57.3-35.4z"
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
                  d="M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h108.6c3 0 5.7 1.7 7.1 4.3l10.2 19.6L2 446.5c-5.3 12.2.4 26.3 12.5 31.5s26.3-.3 31.5-12.5l132.4-306.6 151.3 291c9.6 18.5 28.8 30.2 49.7 30.2H424c13.3 0 24-10.7 24-24s-10.7-24-24-24h-44.6c-3 0-5.7-1.7-7.1-4.3l-190-365.6C172.6 43.6 153.5 32 132.6 32z"
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
                  d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h123.5c6.2 0 11.9 3.6 14.5 9.3l7.6 16.5-.3-.1-160 368c-3.5 8.1.2 17.5 8.3 21.1s17.5-.2 21.1-8.3l148.7-342.2 149.5 323.8c7.8 17 24.9 27.9 43.6 27.9H432c8.8 0 16-7.2 16-16s-7.2-16-16-16h-59.5c-6.2 0-11.9-3.6-14.5-9.3L183.1 59.9c-7.8-17-24.9-27.9-43.6-27.9z"
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
                  d="M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h123.9c9.2 0 17.6 5.3 21.6 13.6l21.1 43.9L16.7 468.8c-1.8 4.1.1 8.8 4.1 10.5s8.8-.1 10.5-4.1l152.5-350.7 160.3 332.9c6.7 13.8 20.7 22.6 36 22.6H440c4.4 0 8-3.6 8-8s-3.6-8-8-8h-59.9c-9.2 0-17.6-5.3-21.6-13.6L167.9 54.6c-6.7-13.8-20.7-22.6-36-22.6z"
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
                  d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h108.2l16.4 32.7L18.8 434.9c-7.3 16.1-.1 35.1 16 42.3s35.1.1 42.3-16l116.4-258.6 121 242c10.8 21.7 33 35.4 57.2 35.4H416c17.7 0 32-14.3 32-32s-14.3-32-32-32h-44.2L197.5 67.4c-10.9-21.7-33-35.4-57.3-35.4z"
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
