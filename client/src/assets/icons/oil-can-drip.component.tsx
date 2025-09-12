import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const OilCanDripIcon: React.FC<
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
                  d="M352 96c0 17.7-14.3 32-32 32h-32v32h80.9c9.9 0 19.7 2.3 28.6 6.8L448 192l167-35.8c18.1-3.9 30.7 17.6 18.4 31.5L451.1 394.3c-12.1 13.8-29.6 21.7-48 21.7H144c-26.5 0-48-21.5-48-48v-21.3l-67.5-30C11.2 309 0 291.8 0 272.8V208c0-26.5 21.5-48 48-48h176v-32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h128c17.7 0 32 14.3 32 32M48 208v64.8l48 21.3V208zm544 240c-26.5 0-48-21.5-48-48 0-21 20.6-62.6 34.9-88.8 5.8-10.6 20.5-10.6 26.3 0C619.4 337.4 640 379 640 400c0 32-21.5 48-48 48"
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
                  d="M352 88c0 13.3-10.7 24-24 24h-48v48h88.9c9.9 0 19.7 2.3 28.6 6.8L448 192l139.8-30 2.1-.4 11.3-2.4 13.9-3c18.1-3.9 30.7 17.6 18.4 31.5l-9.4 10.6-7.6 8.6-1.4 1.6-164 185.8c-12.1 13.8-29.6 21.7-48 21.7H144c-26.5 0-48-21.5-48-48v-21.3l-67.5-30C11.2 309 0 291.8 0 272.8V208c0-26.5 21.5-48 48-48h184v-48h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h144c13.3 0 24 10.7 24 24m106.7 154.1c-11.4 2.4-23.2.9-33.6-4.3l-50.5-25.2c-1.8-.9-3.7-1.4-5.7-1.4H147.2v153.6h255.9c3.7 0 7.2-1.6 9.6-4.3l118.1-133.9-72.1 15.4zM96 211.2V208H48v64.8l48 21.3zM592 448c-26.5 0-48-21.5-48-48 0-21 20.6-62.6 34.9-88.8 5.8-10.6 20.5-10.6 26.3 0C619.4 337.4 640 379 640 400c0 32-21.5 48-48 48"
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
                  d="M352 80c0 8.8-7.2 16-16 16h-64v64h96.9c9.9 0 19.7 2.3 28.6 6.8L448 192l167-35.8c18.1-3.9 30.7 17.6 18.4 31.5L451.1 394.3c-12.1 13.8-29.6 21.7-48 21.7H144c-26.5 0-48-21.5-48-48v-28l-64.9-24.3c-18.7-7-31.1-25-31.1-45V208c0-26.5 21.5-48 48-48h192V96h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h160c8.8 0 16 7.2 16 16m102.7 143.3c-7.1 1.5-14.5.6-21-2.7l-50.5-25.2c-4.4-2.2-9.3-3.4-14.3-3.4H128v176c0 8.8 7.2 16 16 16h259.1c9.2 0 17.9-3.9 24-10.8l156.7-177.6zM96 192H48c-8.8 0-16 7.2-16 16v62.7c0 6.7 4.1 12.6 10.4 15L96 305.8zm512 208v-.9q-.15-.75-.3-2.1c-.3-1.8-.9-4.2-1.7-7-1.7-5.7-4.2-12.5-7.4-20-2-4.7-4.2-9.5-6.5-14.3-2.3 4.8-4.4 9.6-6.5 14.3-7.1 16.6-9.5 26.7-9.5 29.9 0 8.8 7.2 16 16 16 7 0 10.7-2.1 12.3-3.5 1.2-1.1 3.7-4 3.7-12.5zm32 0c0 32-21.5 48-48 48s-48-21.5-48-48c0-21 20.6-62.6 34.9-88.8 5.8-10.6 20.5-10.6 26.3 0C619.4 337.4 640 379 640 400"
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
                  d="M352 72c0 4.4-3.6 8-8 8h-80v80h104.9c9.9 0 19.7 2.3 28.6 6.8L448 192l167-35.8c18.1-3.9 30.7 17.6 18.4 31.5L451.1 394.3c-12.1 13.8-29.6 21.7-48 21.7H144c-26.5 0-48-21.5-48-48v-22.9l-66.9-28.6C11.4 308.9 0 291.6 0 272.3V208c0-26.5 21.5-48 48-48h200V80h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8h176c4.4 0 8 3.6 8 8m99.4 135.6c-3.6.8-7.3.3-10.5-1.3l-50.5-25.2c-6.7-3.3-14-5.1-21.5-5.1H112v192c0 17.7 14.3 32 32 32h259.1c13.8 0 26.9-5.9 36-16.2l182.4-206.7c.7-.8.8-1.4.9-1.8 0-.5-.1-1.2-.5-1.9s-1-1.2-1.4-1.4-.9-.4-2-.1l-167 35.8zM96 176H48c-17.7 0-32 14.3-32 32v64.3c0 12.8 7.6 24.4 19.4 29.4l60.6 26zm528 224c0-6.8-3.8-19.7-10.8-36.2-6.4-15-14.4-30.7-21.2-43.3-6.8 12.6-14.8 28.3-21.2 43.3-7 16.5-10.8 29.3-10.8 36.2 0 17.7 14.3 32 32 32 10.1 0 18-3 23.1-7.8 4.9-4.5 8.9-12 8.9-24.2m16 0c0 32-21.5 48-48 48s-48-21.5-48-48c0-21 20.6-62.6 34.9-88.8 5.8-10.6 20.5-10.6 26.3 0C619.4 337.4 640 379 640 400"
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
                  d="M352 96c0 17.7-14.3 32-32 32h-32v32h-64v-32h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h128c17.7 0 32 14.3 32 32m240 352c-26.5 0-48-21.5-48-48 0-21 20.6-62.6 34.9-88.8 5.8-10.6 20.5-10.6 26.3 0C619.4 337.4 640 379 640 400c0 32-21.5 48-48 48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M368.9 160c9.9 0 19.7 2.3 28.6 6.8L448 192l167-35.8c18.1-3.9 30.7 17.6 18.4 31.5L451.1 394.3c-12.1 13.8-29.6 21.7-48 21.7H144c-26.5 0-48-21.5-48-48v-21.3l-67.5-30C11.2 309 0 291.8 0 272.8V208c0-26.5 21.5-48 48-48h320.9M96 208H48v64.8l48 21.3z"
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
