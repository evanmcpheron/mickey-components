import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserNurseIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 128V70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V128h-.3c.2 2.6.3 5.3.3 8v40c0 70.7-57.3 128-128 128s-128-57.3-128-128v-40c0-2.7.1-5.4.3-8zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80v-16H144zm-32.1 151.7c10.5-3.4 21.8.4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5 65 20.9 112 81.7 112 153.6 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6M208 48v16h-16c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h16c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8h-16V48c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 128V70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V128h-.3c.2 2.6.3 5.3.3 8v40c0 70.7-57.3 128-128 128s-128-57.3-128-128v-40c0-2.7.1-5.4.3-8zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80v-16H144zm72-136c-4.4 0-8 3.6-8 8v16h-16c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h16c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8h-16V48c0-4.4-3.6-8-8-8zM49.3 461.9h349.4c-6-39.3-32.2-72-67.7-87.1l-61.7 61.7c-25 25-65.5 25-90.5 0l-61.7-61.7c-35.5 15.1-61.7 47.8-67.7 87.1zm65.1-137.1c10.1-3.1 20.9.4 28.4 7.9l69.8 69.8c6.2 6.2 16.4 6.2 22.6 0l69.8-69.8c7.5-7.5 18.3-11 28.4-7.9C399.8 344.9 448 406.4 448 479.2c0 17-13.8 30.7-30.7 30.7H30.7c-17 0-30.7-13.8-30.7-30.7 0-72.8 48.2-134.3 114.4-154.4"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 128v16h192V70.2l-96-36-96 36zm-32 32V70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V176c0 70.7-57.3 128-128 128s-128-57.3-128-128v-16zm224 16H128c0 53 43 96 96 96s96-43 96-96M119 359.1C68.7 376.5 32.5 424 32 480h384c-.5-56-36.7-103.5-86.9-120.9L259 433.6c-19 20.1-51 20.1-69.9 0zm22.4-22.9 71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6 10.5-3.4 21.8.4 29.4 8.5zM216 48h16c4.4 0 8 3.6 8 8v16h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-16v16c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16h-16c-4.4 0-8-3.6-8-8V80c0-4.4 3.6-8 8-8h16V56c0-4.4 3.6-8 8-8"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M112 76.9V144h224V76.9c0-6.4-3.8-12.1-9.6-14.7l-96-42c-4.1-1.8-8.7-1.8-12.8 0l-96 42c-5.8 2.5-9.6 8.3-9.6 14.7M96 144V76.9c0-12.7 7.5-24.2 19.2-29.3l96-42c8.2-3.6 17.5-3.6 25.7 0l96 42c11.6 5.1 19.1 16.6 19.1 29.3V176c0 70.7-57.3 128-128 128S96 246.7 96 176v-32m240 16H112v16c0 61.9 50.1 112 112 112s112-50.1 112-112zM131.5 344.1c-4-4-8.9-5-12.5-3.9-59.6 18-103 73.5-103 139 0 8.1 6.6 14.7 14.7 14.7h386.6c8.1 0 14.7-6.6 14.7-14.7 0-65.5-43.4-121-103.1-139.1-3.6-1.1-8.5-.1-12.5 3.9l-69.8 69.8c-12.5 12.5-32.8 12.5-45.3 0L131.5 344zm-17.1-19.2c10.1-3.1 20.9.4 28.4 7.9l69.8 69.8c6.2 6.2 16.4 6.2 22.6 0l69.8-69.8c7.5-7.5 18.3-11 28.4-7.9 66.4 20 114.6 81.5 114.6 154.3 0 17-13.8 30.7-30.7 30.7H30.7c-17 0-30.7-13.8-30.7-30.7 0-72.8 48.2-134.3 114.4-154.4zM224 40c4.4 0 8 3.6 8 8v24h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v24c0 4.4-3.6 8-8 8s-8-3.6-8-8V88h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V48c0-4.4 3.6-8 8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M96 160h256c0 70.7-57.3 128-128 128S96 230.7 96 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V160H96zm15.9 257.5c10.5-3.4 21.8.4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5 65 20.8 112 81.7 112 153.6 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6M208 48v16h-16c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h16c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8h-16V48c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8"
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
