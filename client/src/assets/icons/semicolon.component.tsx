import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SemicolonIcon: React.FC<
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
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 64a64 64 0 1 1 0 128 64 64 0 1 1 0-128m54.8 319L83.7 492.8C76.4 504.7 63.5 512 49.5 512 24 512 5 488.5 10.4 463.6L37.5 337c6.1-28.6 31.4-49 60.6-49 34.2 0 61.9 28.1 61.9 62.3 0 11.5-3.2 22.9-9.2 32.7"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M72 128a24 24 0 1 1 48 0 24 24 0 1 1-48 0m96 0a72 72 0 1 0-144 0 72 72 0 1 0 144 0M84.4 347c1.4-6.4 7.1-11 13.6-11 7.3 0 13.9 6.2 13.9 14.3 0 2.7-.8 5.4-2.1 7.6L67.1 428zm-.7 145.8L150.8 383c6-9.8 9.2-21.2 9.2-32.7 0-34.2-27.7-62.3-61.9-62.3-29.2 0-54.4 20.4-60.6 49L10.4 463.6C5 488.5 24 512 49.5 512c14 0 26.9-7.3 34.2-19.2"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-32 222.4c0 5.6-1.5 11.1-4.5 15.9L55.4 477.9c-.8 1.3-2.3 2.1-3.8 2.1-2.8 0-4.9-2.5-4.4-5.2l23.3-130.9C73 330.1 85 320 99 320c16 0 29 13 29 29v1.5zm32 0V349c0-33.7-27.3-61-61-61-29.5 0-54.8 21.2-60 50.2L15.7 469.1c-4 22.3 13.2 42.9 35.9 42.9 12.7 0 24.5-6.6 31.1-17.4L150.8 383c6-9.8 9.2-21.1 9.2-32.6"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 128a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-16 222.4c0 8.5-2.4 16.9-6.8 24.2L69 486.2c-3.7 6.1-10.3 9.8-17.5 9.8-12.7 0-22.4-11.5-20.1-24.1l23.4-130.8C58.6 319.6 77.3 304 99 304c24.8 0 45 20.1 45 45v1.5zm16 0V349c0-33.7-27.3-61-61-61-29.5 0-54.8 21.2-60 50.2L15.7 469.1c-4 22.3 13.2 42.9 35.9 42.9 12.7 0 24.5-6.6 31.1-17.4L150.8 383c6-9.8 9.2-21.1 9.2-32.6"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M83.7 492.8 150.8 383c6-9.8 9.2-21.2 9.2-32.7 0-34.2-27.7-62.3-61.9-62.3-29.2 0-54.4 20.4-60.6 49L10.4 463.6C5 488.5 24 512 49.5 512c14 0 26.9-7.3 34.2-19.2"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 128a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
