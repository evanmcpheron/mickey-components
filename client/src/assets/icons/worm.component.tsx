import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WormIcon: React.FC<
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
                  d="M256 96c0-53 43-96 96-96h38.4C439.9 0 480 40.1 480 89.6V376c0 75.1-60.9 136-136 136s-136-60.9-136-136v-80c0-22.1-17.9-40-40-40s-40 17.9-40 40v168c0 26.5-21.5 48-48 48s-48-21.5-48-48V296c0-75.1 60.9-136 136-136s136 60.9 136 136v80c0 22.1 17.9 40 40 40s40-17.9 40-40V192h-32c-53 0-96-43-96-96m144-8a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M400 192v176c0 35.3-28.7 64-64 64s-64-28.7-64-64v-48c0-53-43-96-96-96s-96 43-96 96v128c0 8.8 7.2 16 16 16s16-7.2 16-16V320c0-35.3 28.7-64 64-64s64 28.7 64 64v48c0 53 43 96 96 96s96-43 96-96V96c0-26.5-21.5-48-48-48h-48c-26.5 0-48 21.5-48 48s21.5 48 48 48h64zm-224-16c15.9 0 31.2 2.6 45.5 7.3 27.7 9.2 51.7 26.6 69 49.3q7.65 10.05 13.5 21.3c10.2 19.8 16 42.2 16 66V368c0 8.8 7.2 16 16 16s16-7.2 16-16V192h-16c-6.3 0-12.5-.6-18.5-1.8-27.6-5.4-51-22.6-64.7-46.2-8.2-14.1-12.8-30.5-12.8-48 0-53 43-96 96-96h48c53 0 96 43 96 96v272c0 79.5-64.5 144-144 144-55.7 0-104.1-31.7-128-78-10.2-19.8-16-42.2-16-66v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 35.3-28.7 64-64 64s-64-28.7-64-64V320c0-79.5 64.5-144 144-144M376 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M432 192v-27.8l-27.5-3.9-31.1-4.4c-30.7-4.4-53.4-30.6-53.4-61.6 0-34.4 27.9-62.3 62.3-62.3h40.1c31.8 0 57.6 25.8 57.6 57.6V356c0 68.5-55.5 124-124 124s-124-55.5-124-124v-36c0-44.2-35.8-80-80-80-39.8 0-72 32.2-72 72v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V312c0-66.3 53.7-120 120-120 70.7 0 128 57.3 128 128v36c0 42 34 76 76 76s76-34 76-76zM382.3 0C330.2 0 288 42.2 288 94.3c0 46.9 34.5 86.7 80.9 93.3L400 192v164c0 24.3-19.7 44-44 44s-44-19.7-44-44v-36c0-88.4-71.6-160-160-160C68.1 160 0 228.1 0 312v144c0 30.9 25.1 56 56 56s56-25.1 56-56V312c0-22.1 17.9-40 40-40 26.5 0 48 21.5 48 48v36c0 86.2 69.8 156 156 156s156-69.8 156-156V89.6C512 40.1 471.9 0 422.4 0zM408 112a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M432 178.3v-13.9l-13.7-2-54.4-7.8c-34.3-4.9-59.8-34.3-59.8-69C304 47.2 335.2 16 373.7 16h48.7C463 16 496 49 496 89.6V360c0 75.1-60.9 136-136 136s-136-60.9-136-136v-48c0-39.8-32.2-72-72-72s-72 32.2-72 72v152c0 17.7-14.3 32-32 32s-32-14.3-32-32V312c0-75.1 60.9-136 136-136s136 60.9 136 136v48c0 39.8 32.2 72 72 72s72-32.2 72-72zM373.7 0C326.4 0 288 38.4 288 85.7c0 42.6 31.4 78.8 73.6 84.8l54.4 7.8V360c0 30.9-25.1 56-56 56s-56-25.1-56-56v-48c0-83.9-68.1-152-152-152S0 228.1 0 312v152c0 26.5 21.5 48 48 48s48-21.5 48-48V312c0-30.9 25.1-56 56-56s56 25.1 56 56v48c0 83.9 68.1 152 152 152s152-68.1 152-152V89.6C512 40.1 471.9 0 422.4 0zM400 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M288 96c0-53 43-96 96-96h38.4C471.9 0 512 40.1 512 89.6V360c0 83.9-68.1 152-152 152s-152-68.1-152-152v-48c0-30.9-25.1-56-56-56s-56 25.1-56 56v152c0 26.5-21.5 48-48 48S0 490.5 0 464V312c0-83.9 68.1-152 152-152s152 68.1 152 152v48c0 30.9 25.1 56 56 56s56-25.1 56-56V192h-32c-53 0-96-43-96-96m144-8a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 88a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
