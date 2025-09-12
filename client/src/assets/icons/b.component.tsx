import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h128c70.7 0 128-57.3 128-128 0-46.5-24.8-87.3-62-109.7 18.7-22.3 30-51 30-82.3 0-70.7-57.3-128-128-128zm96 192H64V96h96c35.3 0 64 28.7 64 64s-28.7 64-64 64m-96 64h128c35.3 0 64 28.7 64 64s-28.7 64-64 64H64z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M56 32C25.1 32 0 57.1 0 88v336c0 30.9 25.1 56 56 56h140c68.5 0 124-55.5 124-124 0-48.9-28.3-91.1-69.3-111.3 23-22.5 37.3-53.9 37.3-88.7 0-68.5-55.5-124-124-124zm108 200H48V88c0-4.4 3.6-8 8-8h108c42 0 76 34 76 76s-34 76-76 76M48 280h148c42 0 76 34 76 76s-34 76-76 76H56c-4.4 0-8-3.6-8-8z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h144c70.7 0 128-57.3 128-128 0-52.8-32-98.2-77.7-117.7C270 213.9 288 181 288 144c0-61.9-50.1-112-112-112zm144 224c53 0 96 43 96 96s-43 96-96 96H48c-8.8 0-16-7.2-16-16V256h160m-16-32H32V80c0-8.8 7.2-16 16-16h128c44.2 0 80 35.8 80 80s-35.8 80-80 80"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h168c66.3 0 120-53.7 120-120 0-56.7-39.3-104.2-92.1-116.7 35.7-18.8 60.1-56.2 60.1-99.3 0-61.9-50.1-112-112-112zm144 208H16V64c0-8.8 7.2-16 16-16h144c53 0 96 43 96 96s-43 96-96 96M16 256h184c57.4 0 104 46.6 104 104s-46.6 104-104 104H32c-8.8 0-16-7.2-16-16z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h128c70.7 0 128-57.3 128-128 0-46.5-24.8-87.3-62-109.7 18.7-22.3 30-51 30-82.3 0-70.7-57.3-128-128-128zm96 192H64V96h96c35.3 0 64 28.7 64 64s-28.7 64-64 64m-96 64h128c35.3 0 64 28.7 64 64s-28.7 64-64 64H64z"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
