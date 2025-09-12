import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowsRepeat1Icon: React.FC<
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
                  d="M21.9 254.4c-16.8-5.6-25.8-23.8-20.3-40.5C25.1 143.5 91 96 165.2 96h173.5l-41.3-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c9.2 9.2 11.9 22.9 6.9 34.9S429 160 416 160H165.2c-46.7 0-88.1 29.9-102.8 74.1-5.6 16.8-23.7 25.8-40.5 20.2zm468.2 3.3c16.8 5.6 25.8 23.7 20.2 40.5C486.9 368.5 421 416 346.8 416H173.3l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-9.2-9.2-11.9-22.9-6.9-34.9S83.1 352 96.1 352h250.7c46.7 0 88.1-29.9 102.8-74.1 5.6-16.8 23.7-25.8 40.5-20.2M288 216v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c-10 0-19.4-6.4-22.8-16.4-4.2-12.6 2.6-26.2 15.2-30.4l24-8c7.3-2.4 15.4-1.2 21.6 3.3s10 11.8 10 19.5"
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
                  d="M22.5 280C9.3 279.1-.8 267.7 0 254.5l.5-8C5.6 166.4 72 104 152.2 104h213.9L311 49c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l96 96c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H152.2c-54.9 0-100.4 42.7-103.8 97.5l-.5 8c-.8 13.2-12.2 23.3-25.5 22.5zm467-47.9c13.2.8 23.3 12.2 22.5 25.5l-.5 8C506.4 345.6 440 408 359.8 408H145.9l55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L71 401c-6.9-6.9-8.9-17.2-5.2-26.2S78.3 360 88 360h271.8c54.9 0 100.4-42.7 103.8-97.5l.5-8c.8-13.2 12.2-23.3 25.4-22.5zM288 216v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c-10 0-19.4-6.4-22.8-16.4-4.2-12.6 2.6-26.2 15.2-30.4l24-8c7.3-2.4 15.4-1.2 21.6 3.3s10 11.8 10 19.5"
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
                  d="M0 255.2c-.4 8.8 6.4 16.3 15.2 16.8s16.3-6.4 16.8-15.2l.4-8C36.2 172.2 99.5 112 176.2 112h214.4l-57.4 52.2c-6.5 5.9-7 16.1-1.1 22.6s16.1 7 22.6 1.1l88-80c3.3-3 5.2-7.3 5.2-11.8s-1.9-8.8-5.2-11.8l-88-80c-6.5-5.9-16.7-5.5-22.6 1.1s-5.5 16.7 1.1 22.6l57.4 52H176.2C82.4 80 5.1 153.5.4 247.2zm512 1.6c.4-8.8-6.4-16.3-15.2-16.8s-16.3 6.4-16.8 15.2l-.4 8C475.8 339.8 412.5 400 335.8 400H121.4l57.4-52.2c6.5-5.9 7-16.1 1.1-22.6s-16.1-7-22.6-1.1l-88 80c-3.3 3-5.2 7.3-5.2 11.8s1.9 8.8 5.2 11.8l88 80c6.5 5.9 16.7 5.5 22.6-1.1s5.5-16.7-1.1-22.6l-57.4-52h214.4c93.8 0 171.1-73.5 175.8-167.2zM288 208c0-6.1-3.4-11.6-8.8-14.3s-11.9-2.1-16.8 1.5l-32 24c-7.1 5.3-8.5 15.3-3.2 22.4s15.3 8.5 22.4 3.2l6.4-4.8v64c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
                  d="M8 272c-4.4 0-8-3.6-8-8v-8C0 163.2 75.2 88 168 88h251.4l-80.8-74.1c-3.3-3-3.5-8-.5-11.3s8-3.5 11.3-.5l96 88c1.7 1.5 2.6 3.7 2.6 5.9s-.9 4.4-2.6 5.9l-96 88c-3.3 3-8.3 2.8-11.3-.5s-2.8-8.3.5-11.3l80.8-74.1H168c-83.9 0-152 68.1-152 152v8c0 4.4-3.6 8-8 8m496-32c4.4 0 8 3.6 8 8v8c0 92.8-75.2 168-168 168H92.6l80.8 74.1c3.3 3 3.5 8 .5 11.3s-8 3.5-11.3.5l-96-88c-1.7-1.5-2.6-3.7-2.6-5.9s.9-4.4 2.6-5.9l96-88c3.3-3 8.3-2.8 11.3.5s2.8 8.3-.5 11.3L92.6 408H344c83.9 0 152-68.1 152-152v-8c0-4.4 3.6-8 8-8m-224-40v112c0 4.4-3.6 8-8 8s-8-3.6-8-8v-97.9l-27.9 16.7c-3.8 2.3-8.7 1-11-2.7s-1-8.7 2.7-11l40-24c2.5-1.5 5.5-1.5 8.1-.1s4.1 4.1 4.1 7"
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
                  d="M1.6 213.9c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2c14.8-44.3 56.2-74.2 102.9-74.2H416c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96H165.2C91 96 25.1 143.5 1.6 213.9m508.7 84.2c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2c-14.7 44.3-56.1 74.2-102.8 74.2H96c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L173.3 416h173.5c74.2 0 140.1-47.5 163.6-117.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M278 196.5c6.3 4.5 10 11.8 10 19.5v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c-10 0-19.4-6.4-22.8-16.4-4.2-12.6 2.6-26.2 15.2-30.4l24-8c7.3-2.4 15.4-1.2 21.6 3.3"
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
