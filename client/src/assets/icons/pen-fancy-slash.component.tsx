import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PenFancySlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L387.9 278.7l161-140.2c17.2-15 27.1-36.7 27.1-59.6 0-43.6-35.4-79-79-79-22.8 0-44.6 9.9-59.6 27.1L287.1 199.7zM318 346.5l-107-84.2-60.1 13.9c-17.1 3.9-30.7 16.9-35.4 33.8L65.7 487.6l95.4-95.4c-.7-2.6-1.1-5.4-1.1-8.3 0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-95.3 95.5L266 460.5c16.9-4.7 29.9-18.3 33.8-35.4z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L398.9 287.3l149.9-139.5A85.3 85.3 0 0 0 576 85.3C576 38.2 537.8 0 490.7 0c-23.7 0-46.3 9.8-62.5 27.2L275.8 190.9zm274.9 215.5L463.4 59.9c7.1-7.6 17-11.9 27.3-11.9 20.6 0 37.3 16.7 37.3 37.3 0 10.4-4.3 20.2-11.9 27.3L360.6 257.4zm19.9 144.6-40.4-31.8-20.7 67.3c-2.3 7.6-8.3 13.5-15.9 15.9L149 449.7l49.7-49.7h1.3c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24v1.3L126.3 427l33.1-107.7c2.3-7.6 8.3-13.5 15.9-15.9l57.5-17.7-45.8-36-25.8 7.9c-22.8 7-40.6 24.9-47.6 47.6L65.9 460.1c-9.4 30.7 19.3 59.4 50 50l154.8-47.6c22.8-7 40.6-24.9 47.6-47.6l15.3-49.6z"
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
                  d="M548.7 143.7c17.4-15.6 27.3-37.9 27.3-61.3C576 36.9 539.1 0 493.6 0c-23.4 0-45.6 9.9-61.3 27.3L308.2 165.2l25.2 19.8L456.1 48.7c9.6-10.6 23.2-16.7 37.5-16.7 27.8 0 50.4 22.6 50.4 50.4 0 14.3-6.1 27.9-16.7 37.5L398.1 236.1l25.5 20.1zM304.2 325 280 403.7c-3 9.9-10.7 17.7-20.5 20.9l-128.3 42.8 67.5-67.4h1.3c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24v1.3l-67.4 67.4 42.8-128.3c3.3-9.8 11.1-17.4 20.9-20.5l68.4-20.9-30.5-24.1-47.3 14.6c-19.8 6.1-35.4 21.3-41.9 40.9L66.9 468.6c-8.3 25 15.5 48.8 40.5 40.5L269.6 455c19.6-6.5 34.9-22.1 40.9-41.9l20.6-66.8zM25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M548.7 139.4C566 124.3 576 102.5 576 79.5 576 35.6 540.4 0 496.5 0c-23 0-44.8 9.9-59.9 27.3L318.4 163l12.6 9.9L448.7 37.8c12-13.9 29.5-21.8 47.8-21.8 35.1 0 63.5 28.4 63.5 63.5 0 18.4-7.9 35.8-21.8 47.9l-126 109.7 12.8 10.1zM158.5 273.3c-18 5.1-32.2 18.9-37.9 36.7L66.3 478.7c-6.1 18.9 12.2 36.6 30.9 29.9l170.8-61c16.6-5.9 29.5-19.4 34.7-36.3l19.1-62.2-13.5-10.6-20.9 68.1c-3.7 12.1-12.9 21.7-24.8 25.9l-167.8 60 75.1-75.1c6.3 4.2 13.9 6.6 22.1 6.6 22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40c0 8.2 2.4 15.7 6.6 22.1l-76.9 76.8 54-168.1c4.1-12.7 14.3-22.6 27.1-26.2l60.4-17.3-15.5-12.2-49.3 14.1zM168 384a24 24 0 1 1 48 0 24 24 0 1 1-48 0M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="m211 262.3 107 84.3-18.1 78.6c-3.9 17.1-16.9 30.7-33.8 35.4L88.4 510.3l95.4-95.4c2.6.7 5.4 1.1 8.3 1.1 17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32c0 2.9.4 5.6 1.1 8.3l-95.5 95.3L115.5 310c4.7-16.9 18.3-29.9 35.4-33.8zm337.9-123.8-161 140.2-100.8-79L437.5 27.1C452.5 9.9 474.2 0 497 0c43.6 0 79 35.4 79 79 0 22.8-9.9 44.6-27.1 59.6z"
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
