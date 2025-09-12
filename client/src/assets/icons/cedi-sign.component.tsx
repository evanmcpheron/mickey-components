import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CediSignIcon: React.FC<
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
                  d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v34.7C101.2 81.9 32 160.9 32 256s69.2 174.1 160 189.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-34.7c30.9-5.2 59.2-17.7 83.2-35.8 14.1-10.6 17-30.7 6.4-44.8s-30.7-17-44.8-6.4c-13.2 9.9-28.3 17.3-44.8 21.6V132c16.4 4.2 31.6 11.6 44.8 21.6 14.1 10.6 34.2 7.8 44.8-6.4s7.8-34.2-6.4-44.8c-24-18-52.4-30.6-83.2-35.8zm-64 100v248c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124"
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
                  d="M216 0c13.3 0 24 10.7 24 24v48.5c37.9 2.5 73 15.5 101.9 35.9 10.8 7.7 13.4 22.6 5.7 33.5s-22.6 13.4-33.5 5.7c-20.9-14.8-46.3-24.5-74.1-27v270.8c27.8-2.5 53.2-12.2 74.1-27 10.8-7.7 25.8-5.1 33.5 5.7s5.1 25.8-5.7 33.5C313 424 277.9 437 240 439.5V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-50.8C102 422 32 347.7 32 256S102 90 192 74.8V24c0-13.3 10.7-24 24-24M80 256c0 63.2 47 117.9 112 132.3V123.7C127 138.1 80 192.8 80 256"
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
                  d="M208 0c8.8 0 16 7.2 16 16v48h4c44 0 84.7 14.2 117.5 38.3 7.1 5.2 8.7 15.2 3.4 22.4s-15.2 8.7-22.4 3.4C299.1 108 265 96 228 96h-4v320h4c37 0 71.1-12 98.5-32.1 7.1-5.2 17.1-3.7 22.4 3.4s3.7 17.1-3.4 22.4C312.7 433.8 272 448 228 448h-4v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-51.2C101.2 428.2 32 350.3 32 256S101.2 83.8 192 67.2V16c0-8.8 7.2-16 16-16M64 256c0 76 54.5 140.1 128 156.1V99.9C118.5 115.9 64 180 64 256"
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
                  d="M224 0c4.4 0 8 3.6 8 8v56c43.7.4 84.1 14.6 116.7 38.3 3.6 2.6 4.4 7.6 1.8 11.2s-7.6 4.4-11.2 1.8C309.4 93.5 272.3 80.4 232 80v352c40.3-.4 77.4-13.5 107.3-35.3 3.6-2.6 8.6-1.8 11.2 1.8s1.8 8.6-1.8 11.2c-32.6 23.7-73 37.9-116.7 38.3v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56.5C113.4 440.6 32 357.7 32 256S113.4 71.4 216 64.5V8c0-4.4 3.6-8 8-8M48 256c0 92.4 73.8 168.6 168 175.5v-351C121.8 87.4 48 163.6 48 256"
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
                  d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v34.7c10.4-1.7 21.1-2.7 32-2.7s21.6.9 32 2.7zm0 100c-10.2-2.6-20.9-4-32-4-11 0-21.8 1.4-32 4v248c10.2 2.6 21 4 32 4 11.1 0 21.8-1.4 32-4zm0 313.3c-10.4 1.7-21.1 2.7-32 2.7s-21.6-.9-32-2.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32z"
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
