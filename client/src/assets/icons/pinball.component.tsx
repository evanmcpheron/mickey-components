import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PinballIcon: React.FC<
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
                  d="M352 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192m22.1 254.4c14.9 4.8 30.7-1.8 37.9-15 7.4-13.5 4.2-30.8-8.4-40.6l-246-208.3C117 180.4 56.4 185.7 22.4 226.3S-6.3 327.5 34.3 361.6c9.2 7.7 19.9 13.8 32 17.7zM64 288a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M352 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-144a96 96 0 1 1 0 192 96 96 0 1 1 0-192m-40 376L126.8 251.2c-20.3-17-50.5-14.3-67.6 6s-14.4 50.6 6 67.7c4.5 3.8 9.8 6.8 15.9 8.8h.1zM66.3 379.3c-12.1-3.9-22.8-10-32-17.7-40.6-34.1-46-94.7-11.9-135.3s94.6-45.9 135.2-11.8l246 208.3c12.6 9.8 15.8 27.1 8.4 40.6-7.2 13.2-23.1 19.9-37.9 15zM96 264a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M352 64a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192m-232 64a24 24 0 1 0-48 0 24 24 0 1 0 48 0m263.9 160L76.2 348.9c-8.1-2.6-15.2-6.7-21.3-11.8-27.1-22.7-30.6-63.2-7.9-90.2s63-30.6 90.1-7.9L383 447.2l.5.4.4.3zm19.8-25.2-246-208.3c-40.6-34.1-101.2-28.8-135.2 11.8S-6.3 327.5 34.3 361.6c9.2 7.7 19.9 13.8 32 17.7l307.8 99.1c14.9 4.8 30.7-1.8 37.9-15 7.4-12.8 4.2-30.8-8.4-40.6z"
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
                  d="M352 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-176a96 96 0 1 1 0 192 96 96 0 1 1 0-192m46 423.7c3.7-6.7 2.1-15.4-4.2-20.3l-.2-.2-.2-.2-246-208.3c-33.8-28.4-84.3-24-112.7 9.9s-24 84.4 9.9 112.8c7.6 6.4 16.6 11.4 26.6 14.7L379 463.2c7.4 2.4 15.4-.9 19-7.5M34.3 361.6c-40.6-34.1-46-94.7-11.9-135.3s94.6-45.9 135.2-11.8l246 208.3c12.6 9.8 15.8 27.1 8.4 40.6-7.2 13.2-23.1 19.9-37.9 15L66.3 379.3c-12.1-3.9-22.8-10-32-17.7M80 288a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                <path className="aps-icon-background" d="" />
                <path
                  className="aps-icon-foreground"
                  d="M412.1 463.4c-7.2 13.2-23.1 19.9-37.9 15L66.3 379.3c-12.1-3.9-22.8-10-32-17.7-40.6-34.1-46-94.7-11.9-135.3s94.6-45.9 135.2-11.8l246 208.3c12.6 9.8 15.8 27.1 8.4 40.6zM96 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64M352 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192"
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
