import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandPointRightIcon: React.FC<
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
                  d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32H272V96zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32zm64-64c0 17.7-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32s14.3-32 32-32h48c17.7 0 32 14.3 32 32m-96 160c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32zm-88-96h.6c-5.4 9.4-8.6 20.3-8.6 32 0 13.2 4 25.4 10.8 35.6-24.9 8.7-42.8 32.5-42.8 60.4 0 11.7 3.1 22.6 8.6 32H160C71.6 448 0 376.4 0 288v-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64h27c35.3 0 64 28.7 64 64v88c0 22.1-17.9 40-40 40s-40-17.9-40-40v-56c0-8.8-7.2-16-16-16s-16 7.2-16 16v56c0 39.8 32.2 72 72 72"
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
                  d="M448 128H270.4c1 5.2 1.6 10.5 1.6 16v16h176c8.8 0 16-7.2 16-16s-7.2-16-16-16m-224 16c0-17.7-14.3-32-32-32h-24c-66.3 0-120 53.7-120 120v48c0 52.5 33.7 97.1 80.7 113.4-.5-3.1-.7-6.2-.7-9.4 0-20 9.2-37.9 23.6-49.7-4.9-9-7.6-19.4-7.6-30.3 0-15.1 5.3-29 14-40-8.8-11-14-24.9-14-40v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v40c0 8.8 7.2 16 16 16s16-7.2 16-16v-80m-32-80c18 0 34.6 6 48 16h208c35.3 0 64 28.7 64 64s-28.7 64-64 64h-82c1.3 5.1 2 10.5 2 16 0 25.3-14.7 47.2-36 57.6 2.6 7 4 14.5 4 22.4 0 20-9.2 37.9-23.6 49.7 4.9 9 7.6 19.4 7.6 30.3 0 35.3-28.7 64-64 64h-88C75.2 448 0 372.8 0 280v-48C0 139.2 75.2 64 168 64zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16zm16-176c0 5.5-.7 10.9-2 16h34c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32zm-24 64h-40c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M456 128c13.3 0 24 10.7 24 24s-10.7 24-24 24H272v-32c0-5.5-.6-10.8-1.6-16zm-216 48v56c0 13.2-10.7 24-24 24s-24-10.7-24-24v-56c0-8.8-7.2-16-16-16s-16 7.2-16 16v56c0 15.7 6.4 29.8 16.8 40-10.4 10.2-16.8 24.3-16.8 40 0 13.8 5 26.4 13.2 36.1-12.9 10.3-21.2 26.1-21.2 43.9 0 8.6 1.9 16.7 5.4 24C87.9 414.6 32 357.8 32 288v-64c0-70.7 57.3-128 128-128h32c26.5 0 48 21.5 48 48zm32 32h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-45.4c3.5-7.3 5.4-15.4 5.4-24zm90.6 0H456c30.9 0 56-25.1 56-56s-25.1-56-56-56H256c-14.6-19.4-37.8-32-64-32h-32C71.6 64 0 135.6 0 224v64c0 88.4 71.6 160 160 160h104c30.9 0 56-25.1 56-56 0-12.1-3.8-23.3-10.4-32.5C325.5 349.6 336 332 336 312c0-9.7-2.5-18.8-6.8-26.7C351.7 278 368 256.9 368 232c0-8.6-1.9-16.7-5.4-24M240 288h40c13.2 0 24 10.8 24 24 0 13.3-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h56c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
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
                  d="M464 128c17.7 0 32 14.3 32 32s-14.3 32-32 32H256v-56c0-2.7-.1-5.4-.4-8zm-224 64v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-72c0-4.4-3.6-8-8-8s-8 3.6-8 8v72c0 18.5 10.5 34.6 25.9 42.6C175 291.4 168 304.9 168 320s7 28.6 17.9 37.4c-15.4 8-25.9 24.1-25.9 42.6 0 12.3 4.6 23.5 12.2 32H152c-75.1 0-136-60.9-136-136v-80c0-75.1 60.9-136 136-136h32c30.9 0 56 25.1 56 56zm16 16h56c17.7 0 32 14.3 32 32s-14.3 32-32 32h-68.2c7.6-8.5 12.2-19.7 12.2-32zm91.8 0H464c26.5 0 48-21.5 48-48s-21.5-48-48-48H251.9C242 84 215.3 64 184 64h-32C68.1 64 0 132.1 0 216v80c0 83.9 68.1 152 152 152h112c26.5 0 48-21.5 48-48 0-13.8-5.8-26.3-15.2-35 18.2-6.8 31.2-24.4 31.2-45 0-12.4-4.7-23.6-12.3-32.1C340.5 286 360 265.3 360 240c0-12.3-4.6-23.5-12.2-32M240 288h40c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32zm-8 144h-24c-17.7 0-32-14.3-32-32s14.3-32 32-32h56c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
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
                  d="M512 128c0 17.7-14.3 32-32 32H272V96h208c17.7 0 32 14.3 32 32M200 288h.6c-5.4 9.4-8.6 20.3-8.6 32 0 13.2 4 25.4 10.8 35.6-24.9 8.7-42.8 32.5-42.8 60.4 0 11.7 3.1 22.6 8.6 32H160C71.6 448 0 376.4 0 288v-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64h27c35.3 0 64 28.7 64 64v88c0 22.1-17.9 40-40 40s-40-17.9-40-40v-56c0-8.8-7.2-16-16-16s-16 7.2-16 16v56c0 39.8 32.2 72 72 72"
                />
                <path
                  className="aps-icon-foreground"
                  d="M352 192c17.7 0 32 14.3 32 32s-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32s14.3-32 32-32zm-32 96c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c17.7 0 32 14.3 32 32"
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
