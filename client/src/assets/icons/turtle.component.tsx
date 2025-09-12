import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TurtleIcon: React.FC<
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
                  d="M384 249.2c0 21.4-17.4 38.8-38.8 38.8H70.8C49.4 288 32 270.6 32 249.2V208c0-97.2 78.8-176 176-176s176 78.8 176 176zm96 38.8c-2 0-4-.1-5.9-.3-16.3 53.3-64.3 92.7-122.1 96V440c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-56h-32v56c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-56H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h312c39.8 0 72-32.2 72-72v-72c0-35.3 28.7-64 64-64 53 0 96 43 96 96v16c0 35.3-28.7 64-64 64zm16-64a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M336 240v-32c0-70.7-57.3-128-128-128S80 137.3 80 208v32zm48-32v41.2c0 21.4-17.4 38.8-38.8 38.8H70.8C49.4 288 32 270.6 32 249.2V208c0-97.2 78.8-176 176-176s176 78.8 176 176m96 80c-8.3 0-16.3-1.6-23.6-4.5C440.3 328 400.4 361 352 367v73c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-72h-32v72c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-72H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h312c44.2 0 80-35.8 80-80v-64c0-35.3 28.7-64 64-64 53 0 96 43 96 96v16c0 35.3-28.7 64-64 64zm-208 80v64h32v-64zm-160 0v64h32v-64zm384-144a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M200 64c-75.1 0-136 60.9-136 136v40c0 8.8-7.2 16-16 16s-16-7.2-16-16v-40c0-92.8 75.2-168 168-168s168 75.2 168 168v40c0 8.8-7.2 16-16 16s-16-7.2-16-16v-40c0-75.1-60.9-136-136-136m200 124.6c0-42.3 34.3-76.6 76.6-76.6 54.9 0 99.4 44.5 99.4 99.4V224c0 35.3-28.7 64-64 64h-20.5c-20.3 57.4-74.7 96-135.8 96H352v48c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48v-48h-32v48c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48v-48H48c-26.5 0-48-21.5-48-48s21.5-48 48-48h312c22.1 0 40-17.9 40-40zM256 416v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-80h35.7c48.2 0 91-30.8 106.3-76.6l2.8-8.5c2.2-6.5 8.3-10.9 15.2-10.9h32c17.7 0 32-14.3 32-32v-12.6c0-37.2-30.2-67.4-67.4-67.4-24.6 0-44.6 20-44.6 44.6V248c0 39.8-32.2 72-72 72H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v80c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-80h96v64m224-224a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M208 48c-88.4 0-160 71.6-160 160v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56c0-97.2 78.8-176 176-176s176 78.8 176 176v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56c0-88.4-71.6-160-160-160m208 152c0-39.8 32.2-72 72-72 48.6 0 88 39.4 88 88v16c0 30.9-25.1 56-56 56h-34.2l-1 3c-18.5 55.5-70.5 93-129 93H336v56c0 22.1-17.9 40-40 40h-16c-22.1 0-40-17.9-40-40v-56h-64v56c0 22.1-17.9 40-40 40h-16c-22.1 0-40-17.9-40-40v-56H40c-22.1 0-40-17.9-40-40s17.9-40 40-40h328c26.5 0 48-21.5 48-48zM240 368h16v72c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-72h35.7c51.7 0 97.5-33.1 113.8-82.1l2.8-8.5c1.1-3.3 4.1-5.5 7.6-5.5h40c22.1 0 40-17.9 40-40V216c0-39.8-32.2-72-72-72-30.9 0-56 25.1-56 56v56c0 35.3-28.7 64-64 64H40c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v72c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-72h80m256-176a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M474.1 287.7c1.9.2 3.9.3 5.9.3h32c35.3 0 64-28.7 64-64v-16c0-53-43-96-96-96-35.3 0-64 28.7-64 64v72c0 39.8-32.2 72-72 72H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v56c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-56h32v56c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40v-56.2c57.8-3.4 105.9-42.8 122.1-96zM496 192a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 249.2V208c0-97.2-78.8-176-176-176S32 110.8 32 208v41.2c0 21.4 17.4 38.8 38.8 38.8h274.4c21.4 0 38.8-17.4 38.8-38.8"
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
