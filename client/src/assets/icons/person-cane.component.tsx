import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonCaneIcon: React.FC<
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
                  d="M272 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-8 187.3 47.4 57.1c11.3 13.6 31.5 15.5 45.1 4.2s15.5-31.5 4.2-45.1L287 162.6c-18.2-22-45.3-34.7-73.9-34.7h-36c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9l28.7-47.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352h16v128c0 17.7 14.3 32 32 32s32-14.3 32-32zM352 376c0-4.4 3.6-8 8-8s8 3.6 8 8v112c0 13.3 10.7 24 24 24s24-10.7 24-24V376c0-30.9-25.1-56-56-56s-56 25.1-56 56v8c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
                  d="M176 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m-48 161.5-51.1 90.3c-6.5 11.5-21.2 15.6-32.7 9.1s-15.6-21.2-9.1-32.7l58.6-103.5c15.6-27.6 44.9-44.7 76.6-44.7h35c26 0 50.6 11.5 67.3 31.4l81.7 97.2c8.5 10.1 7.2 25.3-2.9 33.8s-25.3 7.2-33.8-2.9L256 214.2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V352h-32v136c0 13.3-10.7 24-24 24s-24-10.7-24-24zm80-33.4c-.9-.1-1.8-.1-2.7-.1H176v128h32zM352 376v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c0-30.9 25.1-56 56-56s56 25.1 56 56v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V376c0-4.4-3.6-8-8-8s-8 3.6-8 8"
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
                  d="M248 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-24 108v156h64V161.2q-5.1-1.2-10.5-1.2h-34.2c-6.8 0-13.3 1.4-19.3 4m-32 38.1-49.9 93.4c-4.2 7.8-13.9 10.7-21.7 6.6s-10.7-13.9-6.6-21.7l58.9-110.1c13.9-26 41-42.3 70.6-42.3h34.2c23.5 0 45.7 10.3 60.9 28.2l89.8 105.5c5.7 6.7 4.9 16.8-1.8 22.6s-16.8 4.9-22.6-1.8L240 183.9V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V352h-64v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V202.2zM368 352c-8.8 0-16 7.2-16 16v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-26.5 21.5-48 48-48s48 21.5 48 48v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8-7.2-16-16-16"
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
                  d="M184 56a40 40 0 1 1 80 0 40 40 0 1 1-80 0m96 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0M136 248c0-4.4-3.6-8-8-8s-8 3.6-8 8v232c0 17.7 14.3 32 32 32s32-14.3 32-32V360c0-4.4 3.6-8 8-8s8 3.6 8 8v120c0 17.7 14.3 32 32 32s32-14.3 32-32V248c0-4.4-3.6-8-8-8s-8 3.6-8 8v232c0 8.8-7.2 16-16 16s-16-7.2-16-16V360c0-13.3-10.7-24-24-24s-24 10.7-24 24v120c0 8.8-7.2 16-16 16s-16-7.2-16-16zm224 88c13.3 0 24 10.7 24 24v144c0 4.4 3.6 8 8 8s8-3.6 8-8V360c0-22.1-17.9-40-40-40s-40 17.9-40 40v16c0 4.4 3.6 8 8 8s8-3.6 8-8v-16c0-13.3 10.7-24 24-24M122.7 175.7c9.3-19.4 28.9-31.7 50.4-31.7h43.6c18.8 0 36.3 9.4 46.7 25l81.9 123.4c2.4 3.7 7.4 4.7 11.1 2.2s4.7-7.4 2.2-11.1l-81.9-123.3c-13.3-20.1-35.9-32.2-60-32.2h-43.6c-27.6 0-52.8 15.8-64.8 40.7L40.8 308.5c-1.9 4-.3 8.8 3.7 10.7s8.8.3 10.7-3.7z"
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
                  d="M360 368c-4.4 0-8 3.6-8 8v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c0-30.9 25.1-56 56-56s56 25.1 56 56v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V376c0-4.4-3.6-8-8-8"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m-56 208.9-28.6 47.6c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6H213c28.6 0 55.6 12.7 73.9 34.7l73.7 88.9c11.3 13.6 9.4 33.8-4.2 45.1s-33.8 9.4-45.1-4.2L264 235.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16v128c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
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
