import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Circle3Icon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384h128c9.9 0 18.8 6.1 22.4 15.3s1.1 19.7-6.2 26.4l-50.8 46.5c41.9 4.8 74.6 40.4 74.6 83.6 0 46.5-37.7 84.2-84.2 84.2H240c-30.1 0-58.1-15.6-73.9-41.2l-2.6-4.2c-7-11.3-3.5-26.1 7.8-33s26.1-3.5 33 7.8l2.6 4.2a38.75 38.75 0 0 0 33 18.4h27.8c20 0 36.2-16.2 36.2-36.2 0-20.1-16.3-36.3-36.4-36.2l-51.5.3c-9.9.1-18.9-6-22.5-15.2s-1.2-19.8 6.1-26.5l50.7-46.2H184c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384c-13.3 0-24 10.7-24 24s10.7 24 24 24h66.3l-50.5 46.3c-7.3 6.7-9.7 17.2-6.1 26.5s12.6 15.3 22.5 15.2l51.5-.3c20.1-.1 36.4 16.1 36.4 36.2 0 20-16.2 36.2-36.2 36.2H240c-13.5 0-26-7-33-18.4l-2.6-4.2c-7-11.3-21.8-14.8-33-7.8s-14.8 21.8-7.8 33l2.6 4.2C182 368.4 209.9 384 240 384h27.8c46.5 0 84.2-37.7 84.2-84.2 0-43.3-32.6-78.9-74.6-83.6l50.8-46.5c7.3-6.7 9.7-17.2 6.2-26.4S321.9 128 312 128z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-384c-8.8 0-16 7.2-16 16s7.2 16 16 16h100.7l-79.2 67.9c-5.1 4.4-6.9 11.5-4.6 17.7S201.3 256 208 256l63.5-.3c26.7-.1 48.4 21.5 48.4 48.2 0 26.6-21.6 48.2-48.2 48.2h-36c-17.5 0-34-8.2-44.5-22.2l-2.5-3.4c-5.3-7.1-15.3-8.5-22.4-3.2s-8.5 15.3-3.2 22.4l2.5 3.4c16.5 22.1 42.5 35 70.1 35h36c44.3 0 80.2-35.9 80.2-80.2 0-44.4-36.1-80.4-80.6-80.2l-19.9.1 78.9-67.6c5.1-4.4 6.9-11.4 4.6-17.7s-8.3-10.4-15-10.4H176z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-88-384c-4.4 0-8 3.6-8 8s3.6 8 8 8h138.7l-112 98c-2.5 2.2-3.4 5.7-2.2 8.9s4.2 5.2 7.5 5.2l79.5-.4c31.1-.1 56.4 25.1 56.4 56.2 0 31-25.2 56.2-56.2 56.2h-71c-12.1 0-23.2-6.8-28.6-17.7l-4.9-9.9c-2-4-6.8-5.6-10.7-3.6s-5.6 6.8-3.6 10.7l4.9 9.9c8.1 16.3 24.8 26.5 42.9 26.5h71.1c39.9 0 72.2-32.3 72.2-72.2 0-40-32.5-72.4-72.5-72.2l-58.1.3L333.3 142c2.5-2.2 3.4-5.7 2.2-8.8s-4.2-5.2-7.5-5.2z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-384h128c9.9 0 18.8 6.1 22.4 15.3s1.1 19.7-6.2 26.4l-50.8 46.5c41.9 4.8 74.6 40.4 74.6 83.6 0 46.5-37.7 84.2-84.2 84.2H240c-30.1 0-58.1-15.6-73.9-41.2l-2.6-4.2c-7-11.3-3.5-26.1 7.8-33s26.1-3.5 33 7.8l2.6 4.2a38.75 38.75 0 0 0 33 18.4h27.8c20 0 36.2-16.2 36.2-36.2 0-20.1-16.3-36.3-36.4-36.2l-51.5.3c-9.9.1-18.9-6-22.5-15.2s-1.2-19.8 6.1-26.5l50.7-46.2H184c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 152c0-13.3 10.7-24 24-24h128c9.9 0 18.8 6.1 22.4 15.3s1.1 19.7-6.2 26.4l-50.8 46.5c41.9 4.8 74.6 40.4 74.6 83.6 0 46.5-37.7 84.2-84.2 84.2H240c-30.1 0-58.1-15.6-73.9-41.2l-2.6-4.2c-7-11.3-3.5-26.1 7.8-33s26.1-3.5 33 7.8l2.6 4.2a38.75 38.75 0 0 0 33 18.4h27.8c20 0 36.2-16.2 36.2-36.2 0-20.1-16.3-36.3-36.4-36.2l-51.5.3c-9.9.1-18.9-6-22.5-15.2s-1.2-19.8 6.1-26.5l50.7-46.2H184c-13.3 0-24-10.7-24-24"
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
