import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const LollipopIcon: React.FC<
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
                  d="M210.8 334.8C265.3 314.2 304 261.6 304 200v-8c0-61.9-50.1-112-112-112S80 130.1 80 192c0 39.8 32.2 72 72 72s72-32.2 72-72v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-35.3 28.7-64 64-64s64 28.7 64 64v8c0 53-43 96-96 96h-8c-57.4 0-104-46.6-104-104 0-79.5 64.5-144 144-144s144 64.5 144 144c0 73.2-54.6 133.6-125.2 142.8M0 192c0 106 86 192 192 192 41.5 0 79.9-13.1 111.2-35.5l154.2 154.1c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L348.5 303.2C370.9 271.9 384 233.5 384 192 384 86 298 0 192 0S0 86 0 192"
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
                  d="M210.8 334.8C265.3 314.2 304 261.6 304 200v-8c0-61.9-50.1-112-112-112S80 130.1 80 192c0 39.8 32.2 72 72 72s72-32.2 72-72v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-35.3 28.7-64 64-64s64 28.7 64 64v8c0 53-43 96-96 96h-8c-57.4 0-104-46.6-104-104 0-79.5 64.5-144 144-144s144 64.5 144 144c0 73.2-54.6 133.6-125.2 142.8M0 192c0 106 86 192 192 192 44.4 0 85.2-15 117.7-40.3L471 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L343.7 309.7C369 277.2 384 236.4 384 192 384 86 298 0 192 0S0 86 0 192"
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
                  d="M192 352c-27 0-52.4-6.7-74.7-18.5 8.7 1.6 17.6 2.5 26.7 2.5h16c75.1 0 136-60.9 136-136v-8c0-57.4-46.6-104-104-104S88 134.6 88 192c0 35.3 28.7 64 64 64s64-28.7 64-64v-8c0-8.8-7.2-16-16-16s-16 7.2-16 16v8c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-39.8 32.2-72 72-72s72 32.2 72 72v8c0 57.4-46.6 104-104 104h-16c-61.9 0-112-50.1-112-112 0-88.4 71.6-160 160-160s160 71.6 160 160-71.6 160-160 160M0 192c0 106 86 192 192 192 47.3 0 90.5-17.1 124-45.4l168.7 168.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L338.6 316c28.3-33.5 45.4-76.7 45.4-124C384 86 298 0 192 0S0 86 0 192"
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
                  d="M192 368c-51.8 0-98.4-22.4-130.6-58.1C84.8 326.4 113.3 336 144 336h16c70.7 0 128-57.3 128-128v-16c0-53-43-96-96-96s-96 43-96 96c0 30.9 25.1 56 56 56s56-25.1 56-56v-8c0-4.4-3.6-8-8-8s-8 3.6-8 8v8c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-44.2 35.8-80 80-80s80 35.8 80 80v16c0 61.9-50.1 112-112 112h-16c-70.7 0-128-57.3-128-128C16 94.8 94.8 16 192 16s176 78.8 176 176-78.8 176-176 176M0 192c0 106 86 192 192 192 50.1 0 95.8-19.2 130-50.7.1.1.2.2.3.4l176 176c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-176-176c-.1-.1-.2-.2-.4-.3 31.5-34.2 50.7-79.9 50.7-130C384 86 298 0 192 0S0 86 0 192"
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
                  d="M303.2 348.5c17.5-12.5 32.8-27.8 45.3-45.3l154.1 154.2c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 192c0 57.4 46.6 104 104 104h8c53 0 96-43 96-96v-8c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c0 39.8-32.2 72-72 72s-72-32.2-72-72c0-61.9 50.1-112 112-112s112 50.1 112 112v8c0 61.6-38.7 114.2-93.2 134.8C281.4 325.6 336 265.2 336 192c0-79.5-64.5-144-144-144S48 112.5 48 192m-48 0a192 192 0 1 1 384 0 192 192 0 1 1-384 0"
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
