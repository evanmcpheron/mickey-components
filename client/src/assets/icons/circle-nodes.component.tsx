import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleNodesIcon: React.FC<
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
                  d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9 0-44.2-35.8-80-80-80-43.4 0-78.7 34.5-80 77.5l-183.8 73.6C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6l145.6 127.4c-2.4 7.6-3.7 15.8-3.7 24.2 0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4zm-262.1 74.3c2.2-6.9 3.5-14.2 3.7-21.7L343.8 137c3.6 3.5 7.4 6.7 11.6 9.5l-37.8 207.6c-5.5 1.3-10.8 3.1-15.8 5.5z"
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
                  d="M368 80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-29.9 50.6c6.8 8.3 15.2 15.2 24.7 20.2L326 352.6c-11.5 1.4-22.2 5.3-31.7 11.1l-141-123.5c4.3-9.9 6.7-20.7 6.7-32.2 0-2-.1-4.1-.2-6.1zm71.9 28.8c39.5-4.9 70-38.6 70-79.4 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 2 .1 4.1.2 6.1l-178.3 71.3C127.3 139.4 105 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c15.3 0 29.5-4.3 41.6-11.7l141.1 123.5c-4.3 9.9-6.7 20.7-6.7 32.2 0 44.2 35.8 80 80 80s80-35.8 80-80c0-30.7-17.3-57.4-42.7-70.8zM304 432a32 32 0 1 1 64 0 32 32 0 1 1-64 0M80 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M376.2 121.7c7 4 15.2 6.3 23.8 6.3 2.6 0 5.2-.2 7.6-.6 22.9-3.7 40.4-23.5 40.4-47.4 0-26.5-21.5-48-48-48s-48 21.5-48 48v2c.5 11.4 4.9 21.7 11.9 29.7 3.5 4 7.6 7.4 12.2 10zm-5.9 32.6c-15.2-6.1-28.2-16.8-37.1-30.3l-174.5 69.7c.8 4.6 1.3 9.4 1.3 14.3 0 14.4-3.8 27.9-10.5 39.6l138 120.8c13-9.9 29.2-16 46.7-16.3l36-197.7zm-4.5 203.4c29.4 11.8 50.2 40.6 50.2 74.3 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-14.4 3.8-27.9 10.5-39.6l-138-120.8C115 281.9 98.2 288 80 288c-44.2 0-80-35.8-80-80s35.8-80 80-80c27.9 0 52.5 14.3 66.8 36l174.5-69.7c-.8-4.6-1.3-9.4-1.3-14.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 43.6-34.9 79.1-78.3 80l-36 197.7zm-246-122.9c.7-1 1.3-2 1.9-3.1 4-7 6.3-15.1 6.3-23.8 0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48c8.5 0 16.6-2.2 23.5-6.2 6.5-3.7 12.1-8.8 16.3-15zm171.6 179.4c-2.2 5.5-3.4 11.5-3.4 17.8 0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48c-14 0-26.6 6-35.3 15.5q-4.05 4.35-6.9 9.6c-.9 1.6-1.7 3.4-2.4 5.1"
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
                  d="M464 80a64 64 0 1 0-128 0 64 64 0 1 0 128 0m16 0c0 44.2-35.8 80-80 80-2.1 0-4.3-.1-6.4-.2l-35.5 195.3c33.4 9.6 57.9 40.4 57.9 76.9 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-17.3 5.5-33.3 14.8-46.4L134.6 266.4C120.3 279.8 101.1 288 80 288c-44.2 0-80-35.8-80-80s35.8-80 80-80c30.8 0 57.6 17.4 70.9 43l172.2-68.9c-2-7-3.1-14.5-3.1-22.1 0-44.2 35.8-80 80-80s80 35.8 80 80m-151 37-172.1 68.9c2 7 3.1 14.5 3.1 22.1 0 17.3-5.5 33.3-14.8 46.4l136.2 119.2c14.3-13.4 33.5-21.6 54.6-21.6 2.1 0 4.3.1 6.4.2l35.5-195.3c-21.2-6.1-38.8-20.7-48.8-39.9zm71 315a64 64 0 1 0-128 0 64 64 0 1 0 128 0M80 272a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                  d="M418.4 157.9c-5.9 1.4-12 2.1-18.4 2.1-16.5 0-31.9-5-44.6-13.6l-37.8 207.7c5.9-1.4 12-2.1 18.4-2.1 16.5 0 31.9 5 44.6 13.6zM114.1 280.4l145.6 127.4c6.8-21.3 22.2-38.7 42.1-48.2L156.3 232.2c-6.8 21.3-22.2 38.7-42.1 48.2zm45.9-69.9L343.8 137c-14.7-14.6-23.8-34.7-23.8-57v-2.5l-183.8 73.6c14.7 14.5 23.8 34.6 23.8 56.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 80a80 80 0 1 1 160 0 80 80 0 1 1-160 0m-64 352a80 80 0 1 1 160 0 80 80 0 1 1-160 0M80 128a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
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
