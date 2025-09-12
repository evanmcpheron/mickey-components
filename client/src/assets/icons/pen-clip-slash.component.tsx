import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PenClipSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L409.9 296l55-55 17-17-1-1-16-16-96-96-17-17-13-13c-28.1-28.1-73.7-28.1-101.8 0l-44.6 44.6zm191.7 150.3 40.5-40.5c9.4-9.4 24.6-9.4 33.9 0l13.2 13.1-53.8 53.8-33.7-26.4zm110.7 209.4L195.8 250.3l-32.3 32.3c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9.9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1l47.7-47.7zM517.3 19.3c-25-25-65.5-25-90.5 0l-52.2 52.1 17 17 96 96 16 16 1 1 52.1-52.1c25-25 25-65.5 0-90.5z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L409.9 296l146.8-146.7c25-25 25-65.5 0-90.5l-39.4-39.5c-25-25-65.5-25-90.5 0L384 62.1 370.9 49c-28.1-28.1-73.7-28.1-101.8 0l-76.6 76.6zm191.7 150.3L303 82.9c9.4-9.4 24.6-9.4 33.9 0L350.1 96l-85.8 85.8-33.7-26.4zm71.8 56.2 81.7-81.7 62.1 62.1-74.2 74.2-69.6-54.5zm38.8 153.2-38-29.9-43.6 43.6c-38.8 38.8-87.5 66-140.7 78.6 12.7-53.2 39.9-101.9 78.6-140.7l36.3-36.3-38-29.9-32.3 32.3c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9.9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zm530.8 145.9c25-25 25-65.5 0-90.5l-39.4-39.5c-25-25-65.5-25-90.5 0l-48.5 48.4-13-13.1c-25-25-65.5-25-90.5 0l-47 47 25.3 20 44.3-44.3c12.5-12.5 32.8-12.5 45.3 0l13.1 13.1-62.8 62.7 25.3 20 60-60.1 84.7 84.7-50.1 50.1 25.3 20zM321.8 338.9l-50.9 50.9c-43.6 43.6-99 73.2-159.4 85.3l-13.2 2.6 2.6-13.2c12.1-60.4 41.8-115.9 85.3-159.4l40.9-40.9-25.3-20-38.3 38.3c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9.9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1l53.5-53.6-25.3-20zm127.6-297c12.5-12.5 32.8-12.5 45.3 0l39.4 39.4c12.5 12.5 12.5 32.8 0 45.3L485.7 175 401 90.3z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zm543.7 147.6c25-25 25-65.5 0-90.5l-39.4-39.5c-25-25-65.5-25-90.5 0l-54.1 54.1-13.1-13.1c-21.9-21.9-57.3-21.9-79.2 0l-40.6 40.6 12.6 10 39.3-39.3c15.6-15.6 40.9-15.6 56.6 0l13.1 13.1-62.7 62.7 12.6 10L372.7 96 480 203.3l-48.8 48.8 12.6 10zM174.9 293.8l33.9-33.9-12.6-10-32.6 32.6c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9.9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1l47.9-47.9-12.6-10-46.5 46.5c-45.8 45.8-104.1 77-167.6 89.7l-25 5c-2.6.5-5.3-.3-7.2-2.2s-2.7-4.6-2.2-7.2l5-25c12.7-63.5 43.9-121.8 89.7-167.6zM438.1 30.6c18.7-18.7 49.1-18.7 67.9 0L545.4 70c18.7 18.7 18.7 49.1 0 67.9L491.3 192 384 84.7z"
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
                  d="m195.8 250.3 145.4 114.5-47.7 47.7c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8l32.3-32.3zm68.5-68.5 53.8-53.8-13.1-13.1c-9.4-9.4-24.6-9.4-33.9 0l-40.5 40.5-38.1-29.8L237.1 81c28.1-28.1 73.7-28.1 101.8 0L352 94.1l17 17 96 96 16 16 1 1-17 17-55 55-145.8-114.3zM426.7 19.3c25-25 65.5-25 90.5 0l39.4 39.4c25 25 25 65.5 0 90.5l-52.1 52.1-1-1-16-16-96-96-17-17 52.1-52.1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
