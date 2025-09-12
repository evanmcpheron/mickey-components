import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquarePersonConfinedIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm96 112a48 48 0 1 1 96 0 48 48 0 1 1-96 0m80 104c0-30.9 25.1-56 56-56s56 25.1 56 56v102.1c0 36.4-29.5 65.9-65.9 65.9-17.5 0-34.3-6.9-46.6-19.3L184.8 342l-28.1 56.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l48-96c4.6-9.2 13.3-15.6 23.5-17.3s20.5 1.7 27.8 9l41.2 41.3z"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm292 104c33.1 0 60 26.9 60 60v88c0 31.8-24.7 57.8-56 59.9v.1h-4c-5.7 0-11.1-.8-16.3-2.2-19.6-4.4-37.5-15.1-50.7-30.7l-44.6-52.7-39.3 73c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l56-104c3.8-7 10.7-11.7 18.6-12.5s15.7 2.3 20.8 8.4L232 309v-49c0-33.1 26.9-60 60-60m-4.2 159.2c1.8.3 3.7.6 5.6.7 6-.7 10.6-5.8 10.6-11.9v-88c0-6.6-5.4-12-12-12s-12 5.4-12 12v88c0 5.2 3.2 9.5 7.8 11.2M208 112a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm296 96c30.9 0 56 25.1 56 56v112c0 30.9-25.1 56-56 56-25.1 0-48.8-11.5-64.4-31.3l-53.5-68.2-52.2 91.4c-4.4 7.7-14.2 10.3-21.8 6s-10.3-14.2-6-21.8l64-112c2.6-4.6 7.4-7.6 12.7-8s10.5 1.9 13.8 6.1l51.4 65.4V248c0-30.9 25.1-56 56-56m24 168V248c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24m-88-208a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0"
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
                  d="M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm228.7 222.1-41.4-41.4c-3.6-3.6-8.8-5.3-13.9-4.5s-9.4 4-11.7 8.6l-48 96c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2l28.1-56.3c2.3-4.6 6.7-7.8 11.7-8.6s10.2.8 13.9 4.5l54.7 54.7c9.4 9.4 22.1 14.6 35.3 14.6 27.6 0 49.9-22.4 49.9-49.9V248c0-22.1-17.9-40-40-40s-40 17.9-40 40v58.7c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5zM240 144a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-.6 252.7L196.7 354l-11.9-12-7.5 15.1-20.6 41.2c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l48-96c4.6-9.2 13.3-15.6 23.5-17.3s20.5 1.7 27.8 9l25.2 25.3 16 16V248c0-30.9 25.1-56 56-56s56 25.1 56 56v102.1c0 36.4-29.5 65.9-65.9 65.9-17.5 0-34.3-6.9-46.6-19.3zM208 96a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm96 112a48 48 0 1 1 96 0 48 48 0 1 1-96 0m80 104c0-30.9 25.1-56 56-56s56 25.1 56 56v102.1c0 36.4-29.5 65.9-65.9 65.9-17.5 0-34.3-6.9-46.6-19.3L184.8 342l-28.1 56.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l48-96c4.6-9.2 13.3-15.6 23.5-17.3s20.5 1.7 27.8 9l41.2 41.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M208 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96m88 0c-30.9 0-56 25.1-56 56v58.7l-41.4-41.4c-7.3-7.3-17.6-10.6-27.8-9s-18.9 8.1-23.5 17.3l-48 96c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l28.3-56.2 54.7 54.7c12.4 12.4 29.1 19.3 46.6 19.3 36.4 0 65.9-29.5 65.9-65.9V248c0-30.9-25.1-56-56-56"
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
