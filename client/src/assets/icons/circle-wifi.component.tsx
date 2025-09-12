import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleWifiIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M127.5 241.3c-9.8 8.9-25 8.1-33.9-1.8s-8.1-25 1.8-33.9C137.9 167.3 194.3 144 256 144s118.1 23.3 160.6 61.6c9.8 8.9 10.6 24 1.8 33.9s-24 10.6-33.9 1.8c-34-30.7-79-49.3-128.5-49.3s-94.4 18.6-128.5 49.3M256 336a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-48c-22.7 0-43.4 8.6-59 22.7-9.8 8.9-25 8.1-33.9-1.7s-8.1-25 1.7-33.9c24.1-21.8 56.1-35.1 91.2-35.1s67.1 13.3 91.2 35.1c9.8 8.9 10.6 24.1 1.7 33.9s-24.1 10.6-33.9 1.7c-15.6-14.1-36.3-22.7-59-22.7"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m127.5-14.7c-9.8 8.9-25 8.1-33.9-1.8s-8.1-25 1.8-33.9C137.9 167.3 194.3 144 256 144s118.1 23.3 160.6 61.6c9.8 8.9 10.6 24 1.8 33.9s-24 10.6-33.9 1.8c-34-30.7-79-49.3-128.5-49.3s-94.4 18.6-128.5 49.3M256 336a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-48c-22.7 0-43.4 8.6-59 22.7-9.8 8.9-25 8.1-33.9-1.7s-8.1-25 1.7-33.9c24.1-21.8 56.1-35.1 91.2-35.1s67.1 13.3 91.2 35.1c9.8 8.9 10.6 24.1 1.7 33.9s-24.1 10.6-33.9 1.7c-15.6-14.1-36.3-22.7-59-22.7"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m122.2-28.7c-6.6 5.9-16.7 5.4-22.6-1.2s-5.4-16.7 1.2-22.6c41.1-37 95.6-59.6 155.2-59.6s114.1 22.6 155.2 59.6c6.6 5.9 7.1 16 1.2 22.6s-16 7.1-22.6 1.2C354.4 195.4 307.5 176 256 176s-98.4 19.4-133.8 51.4zM256 344a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0-72c-24.8 0-47.3 9.4-64.4 24.8-6.6 5.9-16.7 5.4-22.6-1.1s-5.4-16.7 1.1-22.6c22.7-20.5 52.8-33 85.8-33s63.1 12.5 85.8 33c6.6 5.9 7.1 16 1.1 22.6s-16 7.1-22.6 1.1c-17-15.4-39.6-24.8-64.4-24.8z"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m116.8-42.6c-3.3 3-8.3 2.7-11.3-.6s-2.7-8.3.6-11.3C145.8 165.8 198.4 144 256 144s110.2 21.8 149.9 57.5c3.3 3 3.5 8 .6 11.3s-8 3.5-11.3.6C358.3 180.2 309.5 160 256 160s-102.3 20.2-139.2 53.4M272 352a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32-96c-26.8 0-51.3 10.2-69.7 26.8-3.3 3-8.3 2.7-11.3-.6s-2.7-8.3.6-11.3c21.3-19.2 49.5-31 80.5-31s59.2 11.7 80.5 31c3.3 3 3.5 8 .6 11.3s-8 3.5-11.3.6C307.3 266.1 282.8 256 256 256"
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
                  d="M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m87.5-32.5c0-6.6 2.7-13.1 7.9-17.8C137.9 167.3 194.3 144 256 144s118.1 23.3 160.6 61.6c5.3 4.7 7.9 11.3 7.9 17.8 0 5.7-2 11.5-6.2 16.1-8.9 9.8-24 10.6-33.9 1.8-34-30.7-79-49.3-128.5-49.3s-94.4 18.6-128.5 49.3c-9.8 8.9-25 8.1-33.9-1.8-4.1-4.6-6.2-10.3-6.2-16.1zm75.6 85.5c-8.9-9.8-8.1-25 1.7-33.9 24.1-21.8 56.1-35.1 91.2-35.1s67.1 13.3 91.2 35.1c9.8 8.9 10.6 24.1 1.7 33.9s-24.1 10.6-33.9 1.7c-15.6-14.1-36.3-22.7-59-22.7s-43.4 8.6-59 22.7c-9.8 8.9-25 8.1-33.9-1.7M288 368a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 192c-49.4 0-94.4 18.6-128.5 49.3-9.8 8.9-25 8.1-33.9-1.8s-8.1-25 1.8-33.9C137.9 167.3 194.3 144 256 144s118.1 23.3 160.6 61.6c9.8 8.9 10.6 24 1.8 33.9s-24 10.6-33.9 1.8c-34-30.7-79-49.3-128.5-49.3m-32 176a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-27-57.3c-9.8 8.9-25 8.1-33.9-1.7s-8.1-25 1.7-33.9c24.1-21.8 56.1-35.1 91.2-35.1s67.1 13.3 91.2 35.1c9.8 8.9 10.6 24.1 1.7 33.9s-24.1 10.6-33.9 1.7c-15.6-14.1-36.3-22.7-59-22.7s-43.4 8.6-59 22.7"
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
