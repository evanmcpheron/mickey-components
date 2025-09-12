import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BowlHotIcon: React.FC<
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
                  d="M152 0c-13.3 0-24 10.7-24 24v8c0 32.7 15.4 63.6 41.6 83.2 14.1 10.6 22.4 27.2 22.4 44.8v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-32.7-15.4-63.6-41.6-83.2C184.3 66.2 176 49.6 176 32v-8c0-13.3-10.7-24-24-24M33.6 224C15.4 224 .9 239.3 2 257.5c5.4 91.7 59.7 169.7 136.4 209.7l1.2 9.7c2.5 20 19.5 35 39.7 35h153.4c20.2 0 37.2-15 39.7-35l1.2-9.7c76.8-40 131-118 136.4-209.7 1.1-18.2-13.4-33.5-31.6-33.5zM304 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v8c0 32.7 15.4 63.6 41.6 83.2 14.1 10.6 22.4 27.2 22.4 44.8v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-32.7-15.4-63.6-41.6-83.2C312.3 66.2 304 49.6 304 32z"
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
                  d="M152 0c13.3 0 24 10.7 24 24v8c0 17.6 8.3 34.2 22.4 44.8C224.6 96.4 240 127.3 240 160v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c0-17.6-8.3-34.2-22.4-44.8C143.4 95.6 128 64.7 128 32v-8c0-13.3 10.7-24 24-24m-.5 432.5c11.5 5.2 20.4 14.7 25 26.4 1.2 3.1 4.2 5.1 7.5 5.1h144c3.3 0 6.3-2 7.5-5.1 4.5-11.7 13.5-21.2 25-26.4C421.6 404.8 464 343.3 464 272H48c0 71.3 42.4 132.8 103.5 160.5M0 272c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48 0 90.8-54.1 169-131.7 204.2-8.1 21-28.4 35.8-52.3 35.8H184c-23.8 0-44.2-14.9-52.3-35.8C54.1 441 0 362.8 0 272M304 24v8c0 17.6 8.3 34.2 22.4 44.8C352.6 96.4 368 127.3 368 160v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c0-17.6-8.3-34.2-22.4-44.8C271.4 95.6 256 64.7 256 32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M144 0c8.8 0 16 7.2 16 16v16c0 20.1 9.5 39.1 25.6 51.2 24.2 18.1 38.4 46.6 38.4 76.8v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-20.1-9.5-39.1-25.6-51.2C142.2 90.7 128 62.2 128 32V16c0-8.8 7.2-16 16-16m.8 445.5c7.7 3.7 13.7 10.3 16.5 18.4 3.3 9.4 12.2 16.1 22.7 16.1h144c10.4 0 19.4-6.7 22.7-16.1 2.8-8.1 8.7-14.7 16.5-18.4 61.4-29.2 105-90.1 109.3-162.2l.6-10.3c.5-9.2-6.8-16.9-16-16.9H50.9c-9.2 0-16.5 7.7-16 16.9l.6 10.3c4.2 72.1 47.8 133 109.3 162.2M3 274.8C1.4 247.2 23.3 224 50.9 224h410.2c27.6 0 49.5 23.2 47.9 50.8l-.6 10.3c-4.9 84.1-55.9 155.1-127.5 189.2-7.6 22-28.4 37.7-52.9 37.7H184c-24.5 0-45.3-15.7-52.9-37.6C59.5 440.3 8.5 369.3 3.6 285.2zM288 16v16c0 20.1 9.5 39.1 25.6 51.2 24.2 18.1 38.4 46.6 38.4 76.8v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-20.1-9.5-39.1-25.6-51.2C270.2 90.7 256 62.2 256 32V16c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M136 0c4.4 0 8 3.6 8 8v17.4c0 26.1 13.7 50.3 36.1 63.8 27.2 16.3 43.9 45.8 43.9 77.5V184c0 4.4-3.6 8-8 8s-8-3.6-8-8v-17.4c0-26.1-13.7-50.3-36.1-63.8C144.7 86.5 128 57.1 128 25.4V8c0-4.4 3.6-8 8-8m-.1 458.9c4.5 2.2 7.7 6.4 8.7 11.3 2.9 14.7 15.9 25.8 31.4 25.8h160c15.5 0 28.5-11.1 31.4-25.8 1-4.9 4.2-9.1 8.7-11.3 65.5-32 111.8-97.4 116.4-174.7l1.6-27.3c.5-9.2-6.8-16.9-16-16.9H33.9c-9.2 0-16.5 7.7-16 16.9l1.6 27.3c4.5 77.3 50.9 142.7 116.4 174.7M2 257.9C.9 239.5 15.5 224 33.9 224h444.2c18.4 0 33 15.5 31.9 33.9l-1.6 27.3c-4.9 83.3-54.8 153.7-125.3 188.2-4.3 22-23.8 38.7-47.1 38.7H176c-23.3 0-42.8-16.6-47.1-38.7C58.4 438.9 8.5 368.4 3.6 285.2zM272 8v17.4c0 26.1 13.7 50.3 36.1 63.8 27.2 16.3 43.9 45.8 43.9 77.5V184c0 4.4-3.6 8-8 8s-8-3.6-8-8v-17.4c0-26.1-13.7-50.3-36.1-63.8C272.7 86.5 256 57.1 256 25.4V8c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v8c0 32.7 15.4 63.6 41.6 83.2 14.1 10.6 22.4 27.2 22.4 44.8v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-32.7-15.4-63.6-41.6-83.2C184.3 66.2 176 49.6 176 32zm128 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v8c0 32.7 15.4 63.6 41.6 83.2 14.1 10.6 22.4 27.2 22.4 44.8v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-32.7-15.4-63.6-41.6-83.2C312.3 66.2 304 49.6 304 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M33.6 224C15.4 224 .9 239.3 2 257.5c5.4 91.7 59.7 169.7 136.4 209.7l1.2 9.7c2.5 20 19.5 35 39.7 35h153.4c20.2 0 37.2-15 39.7-35l1.2-9.7c76.8-40 131-118 136.4-209.7 1.1-18.2-13.4-33.5-31.6-33.5z"
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
