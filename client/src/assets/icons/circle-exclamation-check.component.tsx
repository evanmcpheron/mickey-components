import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleExclamationCheckIcon: React.FC<
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
                  d="M506.5 203 480 229.5l-18.7-18.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5l64 64c11.9 11.9 27.4 18.2 43 18.7-44.3 76.5-127 128-221.8 128C114.6 512 0 397.4 0 256S114.6 0 256 0c123.2 0 226.1 87 250.5 203M280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm-24 232a32 32 0 1 0 0-64 32 32 0 1 0 0 64m369-175L497 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
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
                  d="M48 256c0-114.9 93.1-208 208-208 84.1 0 156.7 50 189.4 121.9 5.5 12.1 19.7 17.4 31.8 11.9s17.4-19.7 11.9-31.8C448.8 61.6 359.6 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256c72.9 0 138.8-30.5 185.4-79.4 9.1-9.6 8.8-24.8-.8-33.9s-24.8-8.8-33.9.8c-38 39.7-91.4 64.5-150.7 64.5-114.9 0-208-93.1-208-208m232-104c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24zm-24 232a32 32 0 1 0 0-64 32 32 0 1 0 0 64m369-209c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L625 209c9.4-9.4 9.4-24.6 0-33.9z"
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
                  d="M32 256C32 132.3 132.3 32 256 32c95.3 0 176.7 59.5 209.1 143.4 3.2 8.2 12.4 12.4 20.7 9.2s12.4-12.4 9.2-20.7C458 68 364.9 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256c75.8 0 144-33 190.8-85.3 5.9-6.6 5.3-16.7-1.3-22.6s-16.7-5.3-22.6 1.3c-41 45.9-100.6 74.7-167 74.7C132.3 480 32 379.7 32 256m240-112c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16zm-16 232a24 24 0 1 0 0-48 24 24 0 1 0 0 48m363.3-195.3c-6.2-6.2-16.4-6.2-22.6 0L480 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128c6.2-6.2 6.2-16.4 0-22.6"
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
                  d="M16 256C16 123.5 123.5 16 256 16c99.6 0 185 60.7 221.4 147.1 1.7 4.1 6.4 6 10.5 4.3s6-6.4 4.3-10.5C453.4 64.7 362.3 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256c93 0 174.5-49.7 219.3-123.9 2.3-3.8 1.1-8.7-2.7-11s-8.7-1.1-11 2.7C419.6 449.5 343.2 496 256 496 123.5 496 16 388.5 16 256m248-120c0-4.4-3.6-8-8-8s-8 3.6-8 8v160c0 4.4 3.6 8 8 8s8-3.6 8-8zm-8 232a16 16 0 1 0 0-32 16 16 0 1 0 0 32m357.7-181.7c-3.1-3.1-8.2-3.1-11.3 0L480 308.7l-58.3-58.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0l128-128c3.1-3.1 3.1-8.2 0-11.3z"
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
                  d="m480 229.5 26.5-26.5C482.1 87 379.2 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256c94.8 0 177.5-51.5 221.8-128-15.6-.5-31.1-6.8-43-18.7l-64-64c-25-25-25-65.5 0-90.5s65.5-25 90.5 0zM256 128c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24m-32 224a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24m32 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m337-143c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0z"
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
