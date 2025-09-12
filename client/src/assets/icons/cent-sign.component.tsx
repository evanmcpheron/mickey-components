import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CentSignIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 0c17.7 0 32 14.3 32 32v34.7c30.9 5.2 59.2 17.7 83.2 35.8 14.1 10.6 17 30.7 6.4 44.8s-30.7 17-44.8 6.4C279.4 137.5 252.9 128 224 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c28.9 0 55.4-9.5 76.8-25.6 14.1-10.6 34.2-7.8 44.8 6.4s7.8 34.2-6.4 44.8c-24 18-52.4 30.6-83.2 35.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-34.7C101.2 430.1 32 351.1 32 256S101.2 81.9 192 66.7V32c0-17.7 14.3-32 32-32"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M216 0c13.3 0 24 10.7 24 24v48.5c37.9 2.5 73 15.5 101.9 35.9 10.8 7.7 13.4 22.6 5.7 33.5s-22.6 13.4-33.5 5.7C289.7 130.3 259.2 120 226 120c-82 0-146 62.2-146 136s64 136 146 136c33.3 0 63.7-10.3 88.2-27.6 10.8-7.7 25.8-5.1 33.5 5.7s5.1 25.8-5.7 33.5c-29 20.4-64.1 33.4-102 35.9V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-50.8C102 422 32 347.7 32 256S102 90 192 74.8V24c0-13.3 10.7-24 24-24"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M208 0c8.8 0 16 7.2 16 16v48h4c44 0 84.7 14.2 117.5 38.3 7.1 5.2 8.7 15.2 3.4 22.4s-15.2 8.7-22.4 3.4C299.1 108 265 96 228 96c-90.9 0-164 72-164 160s73.1 160 164 160c37 0 71.1-12 98.5-32.1 7.1-5.2 17.1-3.7 22.4 3.4s3.7 17.1-3.4 22.4C312.7 433.8 272 448 228 448h-4v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-51.2C101.2 428.2 32 350.3 32 256S101.2 83.8 192 67.2V16c0-8.8 7.2-16 16-16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 0c4.4 0 8 3.6 8 8v56c43.7.4 84.1 14.6 116.7 38.3 3.6 2.6 4.4 7.6 1.8 11.2s-7.6 4.4-11.2 1.8C308.9 93.1 271 80 230 80 129.2 80 48 159 48 256s81.2 176 182 176c41.1 0 78.9-13.1 109.3-35.3 3.6-2.6 8.6-1.8 11.2 1.8s1.8 8.6-1.8 11.2c-32.6 23.7-73 37.9-116.7 38.3v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56.5C113.4 440.6 32 357.7 32 256S113.4 71.4 216 64.5V8c0-4.4 3.6-8 8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M224 0c-17.7 0-32 14.3-32 32v34.7c10.4-1.7 21.1-2.7 32-2.7s21.6.9 32 2.7V32c0-17.7-14.3-32-32-32m-32 445.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-34.7c-10.4 1.7-21.1 2.7-32 2.7s-21.6-.9-32-2.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c28.9 0 55.4-9.5 76.8-25.6 14.1-10.6 34.2-7.8 44.8 6.4s7.8 34.2-6.4 44.8c-32.1 24.1-72 38.4-115.2 38.4-106 0-192-86-192-192S118 64 224 64c43.2 0 83.1 14.3 115.2 38.4 14.1 10.6 17 30.7 6.4 44.8s-30.7 17-44.8 6.4C279.4 137.5 252.9 128 224 128"
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
