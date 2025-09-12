import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DiceD10Icon: React.FC<
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
                  d="M209.7 16.3C212.4 8.3 206.4 0 198 0c-3.8 0-7.3 1.7-9.7 4.6L2.4 237c-1.6 1.9-2.4 4.3-2.4 6.8 0 7 6.4 12.1 13.2 10.6l117.6-26.1c5.5-1.2 9.9-5.2 11.7-10.6zM8.7 288.2c-5.1 1.2-8.7 5.7-8.7 10.9 0 3.1 1.3 6.1 3.6 8.2l217.1 201.6c2.1 2 4.9 3.1 7.8 3.1 6.3 0 11.5-5.1 11.5-11.5V328.8c0-5.3-2.6-10.2-6.9-13.2l-78.7-54.5c-3.7-2.5-8.2-3.4-12.6-2.5zM272 500.5c0 6.3 5.1 11.5 11.5 11.5 2.9 0 5.7-1.1 7.8-3.1l217.1-201.6c2.3-2.1 3.6-5.1 3.6-8.2 0-5.2-3.6-9.8-8.7-10.9l-133.1-29.5c-4.4-1-8.9-.1-12.6 2.5l-78.7 54.5c-4.3 3-6.9 7.9-6.9 13.2zm226.8-246.1c6.8 1.5 13.2-3.7 13.2-10.6 0-2.5-.8-4.9-2.4-6.8L323.7 4.6C321.4 1.7 317.8 0 314 0c-8.5 0-14.4 8.3-11.7 16.3l67.2 201.5c1.8 5.3 6.2 9.3 11.7 10.6l117.6 26.1zM246.6 6.8l-71.8 215.5c-2.2 6.7.2 14.2 6.1 18.2l66.1 45.7c5.5 3.8 12.7 3.8 18.2 0l66.1-45.7c5.8-4 8.3-11.5 6.1-18.2l-72-215.5C264 2.7 260.3 0 256 0s-8 2.7-9.4 6.8"
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
                  d="M256 0c6.9 0 13.5 3 18 8.2l232 264c4.2 4.8 6.4 11.1 5.9 17.5s-3.4 12.3-8.3 16.5l-232 200c-9 7.8-22.3 7.8-31.3 0l-232-200C3.5 302 .5 296 .1 289.7S1.7 277 6 272.2l232-264C242.5 3 249.1 0 256 0M91.6 247.4l50.9-12 36-86.9zM256 86.8 189.7 247l66.3 44.2 66.3-44.2zm100.6 195-76.6 51v102.8l156.7-135-80-18.8zm63.8-34.3-86.9-98.9 36 86.9zM232 435.6V332.8l-76.6-51.1-80 18.8z"
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
                  d="m213.8 84.1-158.2 180 92.7-21.8zM48.6 298.6l191.4 165v-135l-83.1-55.4zm223.4 165 191.4-165-108.3-25.4-83.1 55.4zm184.4-199.5-158.2-180 65.4 158.2 92.7 21.8zM256 0c6.9 0 13.5 3 18 8.2l232 264c4.2 4.8 6.4 11.1 5.9 17.5s-3.4 12.3-8.3 16.5l-232 200c-9 7.8-22.3 7.8-31.3 0l-232-200C3.5 302 .5 296 .1 289.7S1.7 277 6 272.2l232-264C242.5 3 249.1 0 256 0m0 300.8 76.2-50.8L256 65.8 179.8 250z"
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
                  d="M243.2 26.4 21.7 278.5l132.5-29.4zm-223 268.9L248 491.7V324.3l-89.6-59.7zM264 491.7l227.8-196.4-138.2-30.7-89.6 59.7zm226.3-213.2L268.8 26.4l89.1 222.7 132.5 29.4zM256 0c6.9 0 13.5 3 18 8.2l232 264c4.2 4.8 6.4 11.1 5.9 17.5s-3.4 12.3-8.3 16.5l-232 200c-9 7.8-22.3 7.8-31.3 0l-232-200C3.5 302 .5 296 .1 289.7S1.7 277 6 272.2l232-264C242.5 3 249.1 0 256 0m0 310.4 86.2-57.4L256 37.5l-86.2 215.4z"
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
                  d="M198 0c8.5 0 14.4 8.3 11.7 16.3l-67.1 201.5c-1.8 5.3-6.2 9.3-11.7 10.6l-117.7 26C6.4 256 0 250.8 0 243.8c0-2.5.8-4.9 2.4-6.8L188.3 4.6c2.3-2.9 5.9-4.6 9.7-4.6m314 243.8c0 7-6.4 12.1-13.2 10.6l-117.6-26.1c-5.5-1.2-9.9-5.2-11.7-10.6L302.3 16.3C299.6 8.3 305.6 0 314 0c3.8 0 7.3 1.7 9.7 4.6L509.6 237c1.5 1.9 2.4 4.3 2.4 6.8M256 0c4.3 0 8 2.7 9.4 6.8l71.8 215.5c2.2 6.7-.2 14.2-6.1 18.2L265 286.2c-5.5 3.8-12.7 3.8-18.2 0l-66.1-45.7c-5.8-4-8.3-11.5-6.1-18.2l72-215.5C248 2.7 251.7 0 256 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 299.1c0-5.2 3.6-9.8 8.7-10.9l133.1-29.6c4.4-1 8.9-.1 12.6 2.5l78.7 54.5c4.3 3 6.9 7.9 6.9 13.2v171.7c0 6.3-5.1 11.5-11.5 11.5-2.9 0-5.7-1.1-7.8-3.1L3.6 307.3c-2.3-2.1-3.6-5.1-3.6-8.2M283.5 512c-6.3 0-11.5-5.1-11.5-11.5V328.8c0-5.3 2.6-10.2 6.9-13.2l78.7-54.5c3.7-2.5 8.2-3.4 12.6-2.5l133.1 29.6c5.1 1.1 8.7 5.7 8.7 10.9 0 3.1-1.3 6.1-3.6 8.2L291.3 508.9c-2.1 2-4.9 3.1-7.8 3.1"
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
