import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MandolinIcon: React.FC<
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
                  d="M435.3 3.6C444.8-2.3 457.1-.9 465 7l40 40c7.9 7.9 9.3 20.2 3.4 29.7l-40 64c-3.2 5.1-8.2 8.8-14 10.4L388 169.2l-65.9 65.9C323.7 322.4 311.5 512 176 512 78.8 512 0 433.2 0 336c0-135.5 189.6-147.7 276.9-146.2l65.9-65.8 18.1-66.3c1.6-5.8 5.3-10.8 10.4-14l64-40zM208 352a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M435.3 3.6C444.8-2.3 457.1-.9 465 7l40 40c7.9 7.9 9.3 20.2 3.4 29.7l-40 64c-3.2 5.1-8.2 8.8-14 10.4l-81.8 22.3L322 224c2.6 81.1-4.5 288-146 288C78.8 512 0 433.2 0 336c0-141.5 206.9-148.6 287.9-145.9l50.6-50.6 22.3-81.9c1.6-5.8 5.3-10.8 10.4-14l64-40zm-246.8 286 51.5-51.5c-22.3.8-47.1 2.8-71.6 7.1-36.9 6.5-68.6 17.3-90.1 32.8C58.9 292.1 48 309.4 48 336c0 70.7 57.3 128 128 128 26.6 0 43.9-10.9 57.9-30.2 15.6-21.5 26.4-53.2 32.8-90.1 4.3-24.5 6.3-49.3 7.1-71.6l-51.5 51.5c1.1 4 1.6 8.1 1.6 12.4 0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48c4.3 0 8.5.6 12.4 1.6z"
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
                  d="M459.3 4.7c-5-5.1-12.8-6.2-19.1-2.7l-72 40c-4 2.2-6.8 6-7.8 10.4l-23 99.5-38.6 38.6C227.4 187.1 0 187.6 0 336c0 97.2 78.8 176 176 176 148.4 0 148.9-227.4 145.4-298.8l38.6-38.6 99.5-23c4.4-1 8.2-3.9 10.4-7.8l40-72c3.5-6.2 2.4-14-2.7-19.1l-48-48zm-191.7 217-43.1 43.1c-9.5-5.6-20.6-8.9-32.5-8.9-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64c0-11.9-3.2-23-8.9-32.5l43.1-43.1c.2 28.6-1.4 65.6-7.8 102.1-6.6 37.9-18 72.4-35.6 96.7-16.5 23-38.4 36.9-70.8 36.9-79.5 0-144-64.5-144-144 0-32.4 13.9-54.3 36.8-70.8 24.3-17.6 58.8-29 96.7-35.6 36.5-6.4 73.5-7.9 102.1-7.8zM445.5 122l-72.1 16.6L390 66.5l55.2-30.7 30.9 30.9zM192 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M447.1 16c-2.9 0-5.7.9-8 2.7l-52.6 39.4c-1.8 1.4-3 3.4-3.2 5.7l-6.5 71.4 71.4-6.5c2.3-.2 4.3-1.4 5.7-3.2l39.4-52.6c1.7-2.3 2.7-5.1 2.7-8 0-3.6-1.4-7-3.9-9.5l-35.5-35.5c-2.5-2.5-5.9-3.9-9.5-3.9m-86.8 124.4 7.1-78c.6-6.8 4.1-13 9.5-17l52.6-39.5c5.1-3.8 11.3-5.9 17.6-5.9 7.8 0 15.3 3.1 20.8 8.6l35.5 35.5c5.5 5.5 8.6 13 8.6 20.8 0 6.4-2.1 12.6-5.9 17.6l-39.4 52.6c-4.1 5.4-10.3 8.9-17 9.5l-78 7.1-50.8 50.8c3.6 55.2 12 309.5-144.9 309.5C78.8 512 0 433.2 0 336c0-156.9 254.3-148.5 309.5-144.8zm-129 129 63.1-63.1c-7-.3-15.2-.5-24.4-.6-29.4-.2-68.4 1.2-107.1 8-39 6.8-76.2 18.8-103.4 38.4C33 271.4 16 297.8 16 336c0 88.4 71.6 160 160 160 38.2 0 64.6-17 83.8-43.4 19.7-27.2 31.6-64.4 38.4-103.4 6.8-38.7 8.3-77.7 8-107.1-.1-9.2-.3-17.5-.6-24.4l-63.1 63.1C251 291.6 256 305.2 256 320c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64c14.8 0 28.4 5 39.2 13.4zM240 320a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M276.9 189.8C189.6 188.3 0 200.5 0 336c0 97.2 78.8 176 176 176 135.5 0 147.7-189.6 146.2-276.9L256 301.3c0 .9.1 1.8.1 2.7 0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48c.9 0 1.8 0 2.7.1l66.2-66.2z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M465 7c-7.9-7.9-20.2-9.3-29.7-3.4l-64 40c-5.1 3.2-8.8 8.2-10.4 14L342.8 124 210.7 256.1c24.4 1.3 43.9 20.9 45.3 45.3l132-132.2 66.3-18.1c5.8-1.6 10.8-5.3 14-10.4l40-64c5.9-9.5 4.5-21.8-3.4-29.7z"
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
