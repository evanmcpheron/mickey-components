import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CashRegisterIcon: React.FC<
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
                  d="M64 0C46.3 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32h80v32H87c-31.6 0-58.5 23.1-63.3 54.4L1.1 364.1c-.7 4.7-1.1 9.5-1.1 14.3V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-69.6c0-4.8-.4-9.6-1.1-14.4l-22.7-149.6c-4.7-31.3-31.6-54.4-63.2-54.4H208v-32h80c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm32 48h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16M64 432c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16m48-168a24 24 0 1 1 0-48 24 24 0 1 1 0 48m120-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-72 104a24 24 0 1 1 0-48 24 24 0 1 1 0 48m168-104a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-72 104a24 24 0 1 1 0-48 24 24 0 1 1 0 48m168-104a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-72 104a24 24 0 1 1 0-48 24 24 0 1 1 0 48"
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
                  d="M64 0C46.3 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32h80v32H87.5c-31.8 0-58.9 23.4-63.4 54.9L.6 379.5q-.6 4.5-.6 9V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-59.5c0-3-.2-6.1-.6-9l-23.6-164.6c-4.5-31.5-31.5-54.9-63.4-54.9H208v-32h80c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm32 48h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16M48 448v-16h416v16c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16m392.3-226.3L463.5 384h-415l23.2-162.3c1.1-7.9 7.9-13.7 15.8-13.7h337c8 0 14.7 5.9 15.8 13.7M112 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48m72 24a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48m120-56a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48m120-56a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48"
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
                  d="M272 32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16zM80 0C53.5 0 32 21.5 32 48v32c0 26.5 21.5 48 48 48h80v32H87.5c-31.8 0-58.9 23.4-63.4 54.9L.6 379.5q-.6 4.5-.6 9V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-59.5c0-3-.2-6.1-.6-9l-23.6-164.6c-4.5-31.5-31.5-54.9-63.4-54.9H192v-32h80c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM32 448v-32h448v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32m424.2-228.5L479.7 384H32.3l23.5-164.5c2.3-15.8 15.8-27.5 31.7-27.5h337c15.9 0 29.4 11.7 31.7 27.5M112 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48m72 24a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48m120-56a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48m120-56a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48"
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
                  d="M80 16c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V48c0-17.7-14.3-32-32-32zm192 112h-88v32h240.5c31.8 0 58.9 23.4 63.4 54.9l23.5 164.5q.6 4.5.6 9V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-59.5c0-3 .2-6.1.6-9l23.6-164.6c4.5-31.5 31.5-54.9 63.3-54.9H168v-32H80c-26.5 0-48-21.5-48-48V48C32 21.5 53.5 0 80 0h192c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48m-104 48H87.5c-23.9 0-44.1 17.6-47.5 41.2L16.5 381.8c-.1.7-.2 1.5-.3 2.2h479.6c-.1-.7-.2-1.5-.3-2.2L472 217.2c-3.4-23.6-23.6-41.2-47.5-41.2H168M16 400v48c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48v-48zm112-160a16 16 0 1 1-32 0 16 16 0 1 1 32 0m80 16a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32 64a16 16 0 1 1-32 0 16 16 0 1 1 32 0m128-64a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32 64a16 16 0 1 1-32 0 16 16 0 1 1 32 0m128-64a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-32 64a16 16 0 1 1-32 0 16 16 0 1 1 32 0M96 56h160c4.4 0 8 3.6 8 8s-3.6 8-8 8H96c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M64 0C46.3 0 32 14.3 32 32v64c0 17.7 14.3 32 32 32h80v32h64v-32h80c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm32 48h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16m16 168a24 24 0 1 0 0 48 24 24 0 1 0 0-48m72 24a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48m120-56a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48m120-56a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 448v-69.6c0-4.8.4-9.6 1.1-14.4l22.7-149.6C28.5 183.1 55.4 160 87 160h338c31.6 0 58.5 23.1 63.3 54.4L511 364c.7 4.8 1.1 9.6 1.1 14.4V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64m64-16c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-8.8 0-16 7.2-16 16m48-216a24 24 0 1 0 0 48 24 24 0 1 0 0-48m72 24a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48m120-56a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48m120-56a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48"
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
