import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PlaceOfWorshipIcon: React.FC<
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
                  d="M224 109.3v108.3L183.3 242c-14.5 8.7-23.3 24.3-23.3 41.2V512h96v-96c0-35.3 28.7-64 64-64s64 28.7 64 64v96h96V283.2c0-16.9-8.8-32.5-23.3-41.2L416 217.6V109.3c0-8.5-3.4-16.6-9.4-22.6l-75.3-75.4c-6.2-6.2-16.4-6.2-22.6 0l-75.3 75.3c-6 6-9.4 14.1-9.4 22.6zm-199.1 221C9.5 338.8 0 354.9 0 372.4V464c0 26.5 21.5 48 48 48h80V273.6zM592 512c26.5 0 48-21.5 48-48v-91.6c0-17.5-9.5-33.6-24.9-42.1L512 273.6V512z"
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
                  d="M320 0c6.8 0 13.3 2.9 17.8 7.9l67.9 75.4c6.6 7.3 10.3 16.9 10.3 26.8v75.4l38.4 24.9c15.9 10.3 25.6 28 25.6 47V464h88c13.3 0 24-10.7 24-24v-69.9c0-8.1-4.1-15.7-11-20.2l-69-44.7v-57.1l95.1 61.5c20.5 13.3 32.9 36 32.9 60.4v70c0 39.8-32.2 72-72 72H72c-39.8 0-72-32.2-72-72v-69.9c0-24.4 12.4-47.2 32.9-60.4l95.1-61.6v57.2L59 350c-6.8 4.4-11 12-11 20.2V440c0 13.3 10.7 24 24 24h88V257.4c0-19 9.6-36.7 25.6-47l38.4-24.9v-75.4c0-9.9 3.7-19.4 10.3-26.8l67.9-75.4c4.5-5 11-7.9 17.8-7.9m-48 113.2v85.4c0 8.1-4.1 15.7-11 20.1l-49.4 32c-2.3 1.5-3.7 4-3.7 6.7V464h64v-96c0-26.5 21.5-48 48-48s48 21.5 48 48v96h64V257.4c0-2.7-1.4-5.2-3.7-6.7l-49.4-32c-6.8-4.4-11-12-11-20.1v-85.4L320 59.9z"
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
                  d="M320 0c4.2 0 8.3 1.7 11.3 4.7L406.6 80c6 6 9.4 14.1 9.4 22.6v89.3l41 25.1c14.3 8.7 23 24.2 23 41v222h96c17.7 0 32-14.3 32-32v-69.9c0-10.9-5.5-21-14.6-26.9L512 298.6v-38.1l98.8 63.9c18.2 11.8 29.2 32 29.2 53.7V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-69.9c0-21.7 11-41.9 29.2-53.7l98.8-63.9v38.1l-81.4 52.6c-9.1 5.9-14.6 16-14.6 26.9V448c0 17.7 14.3 32 32 32h96V257.9c0-16.7 8.7-32.2 23-41l41-25.1v-89.2c0-8.5 3.4-16.6 9.4-22.6l75.3-75.3c3-3 7.1-4.7 11.3-4.7m128 257.9c0-5.6-2.9-10.7-7.7-13.7l-48.7-29.8c-4.8-2.9-7.7-8.1-7.7-13.7v-98.3l-64-64-64 64v98.3c0 5.6-2.9 10.7-7.7 13.7l-48.7 29.8c-4.8 2.9-7.7 8.1-7.7 13.7V480h64v-96c0-35.3 28.7-64 64-64s64 28.7 64 64v96h64V257.9zM352 480v-96c0-17.7-14.3-32-32-32s-32 14.3-32 32v96z"
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
                  d="M314.3 2.3c3.1-3.1 8.2-3.1 11.3 0L409 85.7c4.5 4.5 7 10.6 7 17v103.6l44 25.5c12.4 7.2 20 20.3 20 34.6V496h104c22.1 0 40-17.9 40-40v-70.3c0-13.4-6.7-25.9-17.8-33.3l-98.6-65.8c-3.7-2.5-4.7-7.4-2.2-11.1s7.4-4.7 11.1-2.2l98.6 65.8c15.5 10.4 24.9 27.9 24.9 46.6V456c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56v-70.3c0-18.7 9.4-36.2 24.9-46.6l98.6-65.8c3.7-2.5 8.6-1.5 11.1 2.2s1.5 8.6-2.2 11.1l-98.6 65.8C22.7 359.8 16 372.3 16 385.7V456c0 22.1 17.9 40 40 40h104V266.4c0-14.3 7.6-27.5 20-34.6l44-25.5V102.6c0-6.4 2.5-12.5 7-17zM464 496V266.4c0-8.6-4.6-16.5-12-20.8l-48-27.8c-2.5-1.4-4-4.1-4-6.9V102.6c0-2.1-.8-4.2-2.3-5.7L320 19.3 242.3 97c-1.5 1.5-2.3 3.5-2.3 5.7v108.2c0 2.9-1.5 5.5-4 6.9l-48 27.8c-7.4 4.3-12 12.2-12 20.8V496h80V384c0-35.3 28.7-64 64-64s64 28.7 64 64v112h80m-96-112c0-26.5-21.5-48-48-48s-48 21.5-48 48v112h96z"
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
                  d="M160 272 28.3 331.3C11.1 339 0 356.2 0 375v89c0 26.5 21.5 48 48 48h112zm320 240h112c26.5 0 48-21.5 48-48v-89c0-18.9-11.1-36-28.3-43.8L480 272z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 201.6v-92.3c0-8.5 3.4-16.6 9.4-22.6l75.3-75.3c6.2-6.2 16.4-6.2 22.6 0l75.3 75.3c6 6 9.4 14.1 9.4 22.6v92.3l40.7 24.4c14.5 8.7 23.3 24.3 23.3 41.2V512h-96v-96c0-35.3-28.7-64-64-64s-64 28.7-64 64v96h-96V267.2c0-16.9 8.8-32.5 23.3-41.2z"
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
