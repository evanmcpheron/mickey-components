import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MercuryIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M72.1 7C85.8-4 106-1.8 117 12c17.6 22 44.7 36 75 36s57.3-14 75-36c11.1-13.8 31.2-16 45-5s16 31.2 5 45q-11.7 14.55-26.4 26.1C337.3 109.7 368 163.3 368 224c0 89.1-66.2 162.7-152 174.4V424h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h32v-25.6C82.2 386.7 16 313.1 16 224c0-60.7 30.7-114.3 77.5-145.9-9.8-7.6-18.6-16.4-26.4-26.1-11.1-13.8-8.8-33.9 5-45M80 224a112 112 0 1 0 224 0 112 112 0 1 0-224 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M73 5.3C83.3-3 98.4-1.4 106.7 9c18.5 23.1 51.4 38.9 84.9 39h.6c33.5-.1 66.4-15.9 84.9-39 8.5-10.4 23.6-12 33.9-3.7s12 23.4 3.7 33.7c-9.9 12.4-22.2 23.1-36 31.8C332 101.1 368 158.3 368 224c0 89.1-66.2 162.7-152 174.4V424h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h32v-25.6C82.2 386.7 16 313.1 16 224c0-65.7 36-122.9 89.3-153.2-13.8-8.7-26.1-19.4-36-31.8C61 28.7 62.6 13.6 73 5.3M192 96h-.3C121.1 96.2 64 153.4 64 224c0 70.7 57.3 128 128 128s128-57.3 128-128c0-70.6-57.1-127.8-127.7-128z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M89.2 4.8C83-1.5 72.8-1.6 66.5 4.6s-6.4 16.3-.2 22.6C81.2 42.4 98.9 55 118.6 64 58 91.8 16 153 16 224c0 91.8 70.3 167.2 160 175.3V432h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-32.7c89.7-8.1 160-83.5 160-175.3 0-71-42-132.2-102.6-160 19.6-9 37.3-21.6 52.3-36.8 6.2-6.3 6.1-16.4-.2-22.6s-16.4-6.1-22.6.2C268.7 31.5 232.3 48 192 48S115.3 31.5 89.2 4.8M192 80a144 144 0 1 1 0 288 144 144 0 1 1 0-288"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M83.5 2.4c-3.1-3.2-8.2-3.2-11.4-.1s-3.2 8.1-.1 11.3c18.7 19.1 42 33.7 68 42.2C68.2 78 16 144.9 16 224c0 94.5 74.5 171.6 168 175.8V448h-56c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56v-48.2c93.5-4.2 168-81.3 168-175.8 0-79.1-52.2-146-124-168.2 26-8.5 49.3-23.1 68-42.2 3.1-3.2 3-8.2-.1-11.3s-8.2-3-11.3.1C273 30.5 234.5 48 192 48S111 30.5 83.5 2.4M192 64a160 160 0 1 1 0 320 160 160 0 1 1 0-320"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M112 224a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M72.1 7C85.8-4 106-1.8 117 12c17.6 22 44.7 36 75 36s57.3-14 75-36c11.1-13.8 31.2-16 45-5s16 31.2 5 45q-11.7 14.55-26.4 26.1C337.3 109.7 368 163.3 368 224c0 89.1-66.2 162.7-152 174.4V424h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h32v-25.6C82.2 386.7 16 313.1 16 224c0-60.7 30.7-114.3 77.5-145.9-9.8-7.6-18.6-16.4-26.4-26.1-11.1-13.8-8.8-33.9 5-45M80 224a112 112 0 1 0 224 0 112 112 0 1 0-224 0"
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
