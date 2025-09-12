import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HeartCircleMinusIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m47.6 300.4 180.7 168.7c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176 28.3 0 55 6.7 78.7 18.5.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141-45.6-7.6-92 7.3-124.6 39.9l-12 12-12-12c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5M576 368a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-64 0c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m225.8 468.2-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144 39.4-7.6 79.7 1.5 111.8 24.1 9 6.4 17.4 13.8 25 22.3 4.2-4.8 8.7-9.2 13.5-13.3 3.7-3.2 7.5-6.2 11.5-9 32.1-22.6 72.4-31.7 111.8-24.2C462 58.6 512 119.1 512 189.5v3.3c0 6-.4 12-1.1 17.9-14.6-7.3-30.4-12.7-47-15.8v-5.4c0-47.3-33.6-88-80.1-96.9-34-6.5-69 5.4-92 31.2l-.1.1-.1.1-17.8 20c-.3.4-.7.7-1 1.1-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1c-23.1-25.9-58-37.7-92-31.2-46.5 8.8-80.1 49.4-80.1 96.8v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7l8.7-8c5.3 16.1 12.8 31.2 22.2 44.9l-.6.6c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM288 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m224 0c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m244 130.6-12-13.5-4.2-4.7c-26-29.2-65.3-42.8-103.8-35.8-53.3 9.7-92 56.1-92 110.3v3.5c0 32.3 13.4 63.1 37.1 85.1L253 446.8c.8.7 1.9 1.2 3 1.2s2.2-.4 3-1.2l10.9-10.2c4.3 10.2 9.6 20 15.7 29.1l-4.9 4.5c-.8.8-1.7 1.5-2.6 2.2-6.3 4.9-14.1 7.5-22.1 7.5-9.2 0-18-3.5-24.8-9.7L47.2 299c-3.8-3.5-7.3-7.2-10.7-11C13.1 261 0 226.4 0 190.4v-3.5C0 117.3 49.8 57.6 118.3 45.1c40.9-7.4 82.6 3.2 114.7 28.4 6.7 5.3 13 11.1 18.7 17.6l4.2 4.7 4.2-4.7c4.2-4.7 8.6-9.1 13.3-13.1l5.4-4.5c32.2-25.1 73.9-35.8 114.9-28.4C462.2 57.6 512 117.3 512 186.9v3.5c0 6.8-.5 13.5-1.4 20.1-9.8-4.9-20.2-8.9-30.9-12q.3-4.05.3-8.1v-3.5c0-54.2-38.7-100.6-92-110.3-38.5-7-77.8 6.6-103.8 35.8l-4.2 4.7-12 13.5c-3 3.4-7.4 5.4-12 5.4s-8.9-2-12-5.4M432 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m80 144c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M393.6 57.7c-42.9-5.6-85.8 12.6-111.2 47.6l-20 27.5c-1.5 2.1-3.9 3.3-6.5 3.3s-5-1.2-6.5-3.3l-20-27.5C204 70.4 161.1 52.1 118.2 57.7 60.1 65.3 16 114.9 16 173.5c0 30.3 11.8 59.4 32.9 81.2L248 460.4c2.2 2.3 5.2 3.6 8.4 3.6s6.2-1.3 8.4-3.6l11-11.4q3.9 7.35 8.4 14.4l-7.8 8.1c-5.2 5.4-12.4 8.5-19.9 8.5s-14.7-3-19.9-8.4L37.4 265.8C13.4 241.1 0 208 0 173.5 0 106.8 50.2 50.4 116.3 41.8c48.6-6.3 97.4 14.3 126.2 54l13.5 18.6 13.5-18.6c28.9-39.7 77.6-60.4 126.2-54 66.1 8.6 116.3 65 116.3 131.8 0 12-1.6 23.9-4.8 35.3-4.9-2.3-9.8-4.4-14.9-6.2 2.4-9.4 3.7-19.2 3.7-29 0-58.7-44.1-108.4-102.4-116M432 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288m80 144c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8s3.6-8 8-8h144c4.4 0 8 3.6 8 8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M228.3 469.1 47.6 300.4C17.2 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141 45.6-7.6 92 7.3 124.6 39.9l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9 68.9 11.5 119.4 71.1 119.4 141v5.8c0 6.6-.4 13.2-1.3 19.6C487 198.7 460.3 192 432 192c-97.2 0-176 78.8-176 176 0 36.6 11.2 70.6 30.3 98.7l-2.6 2.4c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9"
                />
                <path
                  className="aps-icon-foreground"
                  d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m64-128H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16"
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
