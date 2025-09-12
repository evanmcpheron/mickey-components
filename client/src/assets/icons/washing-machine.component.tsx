import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WashingMachineIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm368 240a144 144 0 1 0-288 0 144 144 0 1 0 288 0M88 112a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m16 328c-61.9 0-112-50.1-112-112 0-16.5 3.6-32.2 10-46.3 7.4-1.1 14.8-1.7 22-1.7 32 0 56 16 80 32s48 32 80 32c10.9 0 21.4-.9 31.2-2.5C328.5 373 281.3 416 224 416"
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
                  d="M384 48c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm64 104a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m130.6 191.7c-3.5.2-7 .3-10.6.3-32 0-56-16-80-32s-48-32-80-32c-3.5 0-7.1.2-10.7.4C146.4 218.9 182 192 224 192c53 0 96 43 96 96 0 11.1-1.9 21.8-5.4 31.7M368 288a144 144 0 1 0-288 0 144 144 0 1 0 288 0"
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
                  d="M64 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm104 8a24 24 0 1 1 0 48 24 24 0 1 1 0-48m56 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m165.7 255c-7 .7-14.3 1-21.7 1-41.8 0-72.9-20.8-95.7-36l-2.1-1.4c-25-16.7-41.3-26.6-62.2-26.6-9.8 0-20.6 1.6-31.4 4q-.6 5.85-.6 12c0 61.9 50.1 112 112 112 45.1 0 84-26.6 101.7-65m9.5-33.4c.5-4.4.8-8.9.8-13.5 0-61.9-50.1-112-112-112-45.3 0-84.4 27-102 65.7 7.4-1.1 14.8-1.7 22-1.7 32 0 56 16 80 32s48 32 80 32c10.9 0 21.4-.9 31.2-2.5M80 304a144 144 0 1 1 288 0 144 144 0 1 1-288 0"
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
                  d="M384 16c26.5 0 48 21.5 48 48v384c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m80-32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m127.6 218.3c-14.3 3.4-30.4 5.7-47.6 5.7-32 0-56-16-80-32s-48-32-80-32c-13.4 0-27.4 2.2-40.7 5.4 17.6-49.7 65-85.4 120.7-85.4 70.7 0 128 57.3 128 128 0 3.5-.1 6.9-.4 10.3m-2.5 16.9C336.6 388.8 285.3 432 224 432c-70.7 0-128-57.3-128-128q0-12.75 2.4-24.9c15-4.2 30.9-7.1 45.6-7.1 26.5 0 46.6 13 71.1 29.3l1.2.8c23.3 15.5 50.8 33.9 87.7 33.9 16.2 0 31.3-1.9 45.1-4.8M224 448a144 144 0 1 0 0-288 144 144 0 1 0 0 288"
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
                  d="M184 112a24 24 0 1 0 0-48 24 24 0 1 0 0 48m40 336c77.6 0 140.9-61.4 143.9-138.2C350 315.4 328.1 320 304 320c-32 0-56-16-80-32s-48-32-80-32c-19.7 0-40.6 4.7-59 10.4-3.2 12-5 24.6-5 37.6 0 79.5 64.5 144 144 144"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm160 160a144 144 0 1 1 0 288 144 144 0 1 1 0-288M64 88a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
