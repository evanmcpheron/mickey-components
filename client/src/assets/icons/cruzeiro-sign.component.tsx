import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CruzeiroSignIcon: React.FC<
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
                  d="M96 256c0-88.4 71.6-160 160-160 41 0 78.3 15.4 106.7 40.7 13.2 11.8 33.4 10.7 45.2-2.5s10.7-33.4-2.5-45.2c-39.6-35.5-92-57-149.3-57C132.3 32 32 132.3 32 256s100.3 224 224 224c57.4 0 109.7-21.6 149.3-57 13.2-11.8 14.3-32 2.5-45.2s-32-14.3-45.2-2.5C334.3 400.6 297 416 256 416V311.3c0-12.8 10.4-23.3 23.3-23.3 4.6 0 9.1 1.4 12.9 3.9l10.1 6.7c14.7 9.8 34.6 5.8 44.4-8.9s5.8-34.6-8.9-44.4l-10.1-6.7c-14.3-9.6-31.2-14.7-48.4-14.7-12.4 0-24.2 2.6-34.9 7.3-5.5-4.5-12.6-7.3-20.3-7.3-17.7 0-32 14.3-32 32v146.8C135.5 378 96 321.6 96 256"
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
                  d="M80 256c0-97 79.3-176 177.6-176 45.6 0 87 17 118.5 44.9 9.9 8.8 25.1 7.9 33.9-2s7.9-25.1-2-33.9c-40-35.5-92.7-57-150.4-57C133.2 32 32 132.1 32 256s101.2 224 225.6 224c57.7 0 110.4-21.5 150.3-57 9.9-8.8 10.8-24 2-33.9s-24-10.8-33.9-2C344.6 415 303.2 432 257.6 432c-6.3 0-12.5-.3-18.6-1 .7-2.2 1-4.6 1-7V318.2c0-21.1 17.1-38.2 38.2-38.2 10.1 0 19.9 4 27 11.2l5.8 5.8c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-5.8-5.8c-16.2-16.2-38.1-25.3-61-25.3-14.1 0-27.4 3.4-39.2 9.4C236.2 231.3 227 224 216 224c-13.3 0-24 10.7-24 24v171.6C126.3 393.7 80 330.1 80 256"
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
                  d="M64 256c0-105.9 86.6-192 193.7-192 49.6 0 94.9 18.5 129.2 48.9 6.6 5.9 16.7 5.3 22.6-1.3s5.3-16.7-1.3-22.6c-39.9-35.4-92.7-57-150.4-57C133.2 32 32 132.2 32 256s101.2 224 225.7 224c57.7 0 110.5-21.6 150.4-57 6.6-5.9 7.2-16 1.3-22.6s-16-7.2-22.6-1.3c-34.2 30.4-79.5 48.9-129.1 48.9-11.5 0-22.7-1-33.7-2.9V320c0-26.5 21.5-48 48-48 15.1 0 29.3 7.1 38.4 19.2l4.8 6.4c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4L336 272c-15.1-20.1-38.8-32-64-32-18 0-34.6 6-48 16v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v196.7C117.3 410 64 339.1 64 256"
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
                  d="M48 256c0-114.7 95.1-208 212.8-208 54.6 0 104.3 20.1 141.9 53 3.3 2.9 8.4 2.6 11.3-.7s2.6-8.4-.7-11.3c-40.5-35.4-93.9-57-152.5-57C134.6 32 32 132.1 32 256s102.6 224 228.8 224c58.5 0 112-21.5 152.5-57 3.3-2.9 3.7-8 .7-11.3s-8-3.7-11.3-.8c-37.6 33-87.4 53-141.9 53-12.6 0-24.8-1.1-36.8-3.1V328c0-30.9 25.1-56 56-56 17.6 0 34.2 8.3 44.8 22.4l4.8 6.4c2.6 3.5 7.7 4.3 11.2 1.6s4.2-7.7 1.6-11.2l-4.8-6.4C324 266.7 302.7 256 280 256c-22.6 0-42.8 10.4-56 26.7V264c0-4.4-3.6-8-8-8s-8 3.6-8 8v193.6C115.9 434.6 48 352.9 48 256"
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
                  d="M256 416V311.3c0-12.8 10.4-23.3 23.3-23.3 4.6 0 9.1 1.4 12.9 3.9l10.1 6.7c14.7 9.8 34.6 5.8 44.4-8.9s5.8-34.6-8.9-44.4l-10.1-6.7c-14.3-9.6-31.2-14.7-48.4-14.7-12.4 0-24.2 2.6-34.9 7.3-5.5-4.5-12.6-7.3-20.3-7.3-17.7 0-32 14.3-32 32v146.8c19.6 8.6 41.2 13.3 64 13.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 96c-88.4 0-160 71.6-160 160s71.6 160 160 160c41 0 78.3-15.4 106.7-40.7 13.2-11.8 33.4-10.7 45.2 2.5s10.7 33.4-2.5 45.2c-39.6 35.5-92 57-149.3 57C132.3 480 32 379.7 32 256S132.3 32 256 32c57.4 0 109.7 21.6 149.3 57 13.2 11.8 14.3 32 2.5 45.2s-32 14.3-45.2 2.5C334.3 111.4 297 96 256 96"
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
