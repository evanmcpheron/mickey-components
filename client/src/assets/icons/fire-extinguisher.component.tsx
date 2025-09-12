import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FireExtinguisherIcon: React.FC<
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
                  d="M500.3 7.3c7.4 6 11.7 15.1 11.7 24.7v96c0 9.6-4.3 18.7-11.7 24.7s-17.2 8.5-26.6 6.6l-160-32c-12.2-2.4-21.7-11.6-24.7-23.3h-65v34.8c37.8 18 64 56.5 64 101.2v144H64V240c0-44.7 26.2-83.2 64-101.2V110c-36.2 11.1-66 36.9-82.3 70.5-5.8 11.9-20.2 16.9-32.1 11.1s-16.9-20.2-11.1-32.1C26.7 109.8 72.7 72.6 128 60.4V32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v24h65c3-11.7 12.5-20.9 24.7-23.4l160-32c9.4-1.9 19.1.6 26.6 6.6zM288 416v32c0 35.3-28.7 64-64 64h-96c-35.3 0-64-28.7-64-64v-32zM176 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M500.3 7.3c7.4 6 11.7 15.1 11.7 24.7v96c0 9.6-4.3 18.7-11.7 24.7s-17.2 8.5-26.6 6.6l-160-32c-12.2-2.4-21.7-11.6-24.7-23.3h-89v26.6c50.3 11 88 55.8 88 109.4v208c0 35.3-28.7 64-64 64h-96c-35.3 0-64-28.7-64-64V240c0-53.6 37.7-98.4 88-109.4v-25.7c-46.9 5.5-86.5 34.8-106.3 75.6-5.8 11.9-20.2 16.9-32.1 11.1s-16.9-20.2-11.1-32.1C30.1 102.8 86.1 62.4 152 56.7V24c0-13.3 10.7-24 24-24s24 10.7 24 24v32h89c3-11.7 12.5-20.9 24.7-23.4l160-32c9.4-1.9 19.1.6 26.6 6.6zM112 416v32c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-32zm0-48h128V240c0-35.3-28.7-64-64-64s-64 28.7-64 64z"
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
                  d="M320 96V64l160-32v96zm-32-32h-96V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c-55.5 0-104.4 28.3-133 71.1-7.3 11-13.4 22.9-17.8 35.6-2.9 8.3 1.4 17.5 9.8 20.4s17.5-1.4 20.4-9.8c3.6-10.1 8.4-19.7 14.3-28.4C76.5 118.6 115.6 96 160 96v33.1c-54.3 7.8-96 54.4-96 110.9v208c0 35.3 28.7 64 64 64h96c35.3 0 64-28.7 64-64V240c0-56.4-41.7-103.1-96-110.9V96h96c0 15.3 10.8 28.4 25.7 31.4l160 32c9.4 1.9 19.1-.6 26.6-6.6s11.7-15.2 11.7-24.7V32c0-9.6-4.3-18.7-11.7-24.7S483.1-1.2 473.7.7l-160 32c-15 3-25.7 16.1-25.7 31.4zm-112 96c44.2 0 80 35.8 80 80v144H96V240c0-44.2 35.8-80 80-80m80 288c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-32h160z"
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
                  d="M490.1 19.6c3.7 3 5.9 7.6 5.9 12.4v96c0 4.8-2.2 9.3-5.9 12.4s-8.6 4.3-13.3 3.3l-160-32c-7.5-1.5-12.9-8.1-12.9-15.7V64c0-7.6 5.4-14.2 12.9-15.7l160-32c4.7-.9 9.6.3 13.3 3.3M288 88v8c0 15.3 10.8 28.4 25.7 31.4l160 32c9.4 1.9 19.1-.6 26.6-6.6s11.7-15.2 11.7-24.7V32c0-9.6-4.3-18.7-11.7-24.7S483.1-1.2 473.7.7l-160 32c-15 3-25.7 16.1-25.7 31.4v8h-64V32c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v40h-16C50.1 72 0 122.1 0 184c0 4.4 3.6 8 8 8s8-3.6 8-8c0-53 43-96 96-96h16v50.8c-37.8 18-64 56.5-64 101.2v208c0 35.3 28.7 64 64 64h96c35.3 0 64-28.7 64-64V240c0-44.7-26.2-83.2-64-101.2V88zm-16 152v160H80V240c0-39.7 24.1-73.8 58.5-88.4.4-.1.8-.3 1.2-.5 11.2-4.6 23.5-7.1 36.3-7.1s25.1 2.5 36.3 7.1c.4.2.8.4 1.2.5 34.4 14.6 58.5 48.7 58.5 88.4M144 32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v100.6c-10.1-3-20.9-4.6-32-4.6s-21.9 1.6-32 4.6zm128 384v32c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-32z"
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
                  d="M289 56h-65v48h65c-.7-2.6-1-5.2-1-8V64c0-2.8.4-5.4 1-8M2.5 159.5c-5.8 11.9-.9 26.3 11.1 32.1s26.3.9 32.1-11.1C62 146.9 91.8 121.1 128 110V60.4C72.7 72.6 26.7 109.8 2.5 159.5M288 416H64v32c0 35.3 28.7 64 64 64h96c35.3 0 64-28.7 64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M500.3 7.3c7.4 6 11.7 15.1 11.7 24.7v96c0 9.6-4.3 18.7-11.7 24.7s-17.2 8.5-26.6 6.6l-160-32c-15-3-25.7-16.1-25.7-31.4V64c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1.6 26.6 6.6zM128 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v106.8c37.8 18 64 56.5 64 101.2v176H64V240c0-44.7 26.2-83.2 64-101.2zm48 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
