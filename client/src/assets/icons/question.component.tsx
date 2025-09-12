import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const QuestionIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1a87.98 87.98 0 0 0-40.4 74v1.5c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32m80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 160c0-44.2 35.8-80 80-80h32c44.2 0 80 35.8 80 80v4.6c0 24.1-12 46.6-32.1 59.9l-52.3 34.9C149.4 274.2 136 299.2 136 326v2c0 13.3 10.7 24 24 24s24-10.7 24-24v-2c0-10.7 5.3-20.7 14.2-26.6l52.3-34.9c33.4-22.3 53.4-59.7 53.4-99.8V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 13.3 10.7 24 24 24s24-10.7 24-24m96 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 64c-53 0-96 43-96 96 0 8.8-7.2 16-16 16s-16-7.2-16-16C16 89.3 73.3 32 144 32h32c70.7 0 128 57.3 128 128 0 35.3-16.6 68.4-44.8 89.6l-60.8 45.6C184.3 305.8 176 322.4 176 340v12c0 8.8-7.2 16-16 16s-16-7.2-16-16v-12c0-27.7 13-53.8 35.2-70.4L240 224c20.1-15.1 32-38.8 32-64 0-53-43-96-96-96zm-8 384a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 152C32 94.6 78.6 48 136 48h48c57.4 0 104 46.6 104 104v6.3c0 28.6-13.9 55.4-37.3 71.9L185.8 276c-21.2 15-33.9 39.4-33.9 65.4V368c0 4.4 3.6 8 8 8s8-3.6 8-8v-26.7c0-20.8 10.1-40.3 27.1-52.3l65-45.8c27.6-19.5 44-51.2 44-85V152c0-66.3-53.7-120-120-120h-48C69.7 32 16 85.7 16 152v8c0 4.4 3.6 8 8 8s8-3.6 8-8zm128 312a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M120 440a40 40 0 1 1 80 0 40 40 0 1 1-80 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144 96c-35.3 0-64 28.7-64 64 0 17.7-14.3 32-32 32s-32-14.3-32-32C16 89.3 73.3 32 144 32h32c70.7 0 128 57.3 128 128v3.6c0 43.6-22.1 84.1-58.8 107.7L203 298.4c-6.9 4.4-11 12-11 20.2v1.4c0 17.7-14.3 32-32 32s-32-14.3-32-32v-1.4c0-29.9 15.2-57.8 40.4-74l42.2-27.1c18.3-11.8 29.4-32.1 29.4-53.8V160c0-35.3-28.7-64-64-64z"
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
