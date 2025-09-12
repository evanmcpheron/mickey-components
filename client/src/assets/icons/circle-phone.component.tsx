import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CirclePhoneIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-69.3-383.3c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L200 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C368.9 378 361 384 352 384c-123.7 0-224-100.3-224-224 0-9 6-16.9 14.7-19.3z"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-69.3-383.3-44 12C134 143.1 128 151 128 160c0 123.7 100.3 224 224 224 9 0 16.9-6 19.3-14.7l12-44c2.6-9.7-2.3-19.9-11.6-23.7l-48-20c-8.2-3.4-17.6-1-23.2 5.8L280.3 312c-35.2-16.6-63.7-45.1-80.3-80.3l24.7-20.2c6.8-5.6 9.2-15 5.8-23.2l-20-48c-3.9-9.3-14-14.2-23.7-11.6z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-52.8-367.9c1.9-.4 3.8.6 4.5 2.3l24 56c.7 1.6.2 3.5-1.1 4.7l-20.3 16.6c-6.1 5-7.6 13.6-3.7 20.4 14.7 25.4 35.9 46.6 61.4 61.4 6.8 3.9 15.4 2.4 20.4-3.7l16.6-20.3c1.1-1.4 3-1.8 4.7-1.1l56 24c1.8.8 2.7 2.6 2.3 4.5l-12 56c-.4 1.8-2 3.2-3.9 3.2-114.9 0-208-93.1-208-208 0-1.9 1.3-3.5 3.2-3.9l56-12zm33.9-10.3c-6.8-15.8-23.8-24.6-40.6-21l-56 12C123.9 128.4 112 143 112 160c0 132.5 107.4 240 240 240 17 0 31.6-11.9 35.2-28.5l12-56c3.6-16.8-5.2-33.9-21-40.6l-56-24c-14.7-6.3-31.9-2.1-42 10.3l-7.5 9.2c-11.9-8.6-22.4-19.1-31-31l9.2-7.5c12.4-10.2 16.6-27.3 10.3-42l-24-56z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-67.2-375.6c5.8-1.6 11.9 1.4 14.2 7l20 48c2 4.9.6 10.5-3.5 13.9l-24.7 20.2c-2.8 2.3-3.7 6.3-2.2 9.6 17.4 36.9 47.3 66.7 84.2 84.2 3.3 1.6 7.3.7 9.6-2.2l20.2-24.7c3.4-4.1 9-5.5 13.9-3.5l48 20c5.6 2.3 8.6 8.4 7 14.2l-12 44c-1.4 5.2-6.2 8.8-11.6 8.8-119.3 0-216-96.7-216-216 0-5.4 3.6-10.2 8.8-11.6l44-12zm29 .8c-5.4-13-19.6-19.9-33.2-16.2l-44 12c-12.2 3.3-20.6 14.4-20.6 27 0 128.1 103.9 232 232 232 12.6 0 23.7-8.5 27-20.6l12-44c3.7-13.6-3.3-27.8-16.2-33.2l-48-20c-11.4-4.8-24.6-1.5-32.4 8.1L278.2 302c-29.1-15.2-53-39.1-68.2-68.2l19.7-16.1c9.6-7.8 12.9-21 8.1-32.4l-20-48z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-69.3-383.3c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L200 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C368.9 378 361 384 352 384c-123.7 0-224-100.3-224-224 0-9 6-16.9 14.7-19.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M210.5 140.3c-3.9-9.3-14-14.2-23.7-11.6l-44 12C134 143.1 128 151 128 160c0 123.7 100.3 224 224 224 9 0 16.9-6 19.3-14.7l12-44c2.6-9.7-2.3-19.9-11.6-23.7l-48-20c-8.2-3.4-17.6-1-23.2 5.8L280.3 312c-35.2-16.6-63.7-45.1-80.3-80.3l24.7-20.2c6.8-5.6 9.2-15 5.8-23.2z"
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
