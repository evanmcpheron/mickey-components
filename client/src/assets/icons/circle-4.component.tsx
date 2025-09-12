import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Circle4Icon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m223.6-126.8c-12.6-4.2-26.2 2.6-30.4 15.2l-48 144c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10h104v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-70.7l37.5-112.4c4.2-12.6-2.6-26.2-15.2-30.4"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m223.6-126.8c12.6 4.2 19.4 17.8 15.2 30.4L201.3 272H272v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40H168c-7.7 0-15-3.7-19.5-10s-5.7-14.3-3.3-21.6l48-144c4.2-12.6 17.8-19.4 30.4-15.2"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m229.9-126.9c8.2 3.3 12.2 12.6 8.9 20.8L183.6 288H288v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H160c-5.3 0-10.3-2.6-13.2-7s-3.6-10-1.6-14.9l64-160c3.3-8.2 12.6-12.2 20.8-8.9z"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m235-127.4c4.1 1.7 6 6.3 4.4 10.4l-67.5 165H304V200c0-4.4 3.6-8 8-8s8 3.6 8 8v104h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56H160c-2.7 0-5.2-1.3-6.6-3.5s-1.8-5-.8-7.5l72-176c1.7-4.1 6.3-6 10.4-4.4"
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m223.6-126.8c-12.6-4.2-26.2 2.6-30.4 15.2l-48 144c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10h104v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-70.7l37.5-112.4c4.2-12.6-2.6-26.2-15.2-30.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M238.8 159.6c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-48 144c-2.4 7.3-1.2 15.4 3.3 21.6s11.8 10 19.5 10h104v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-70.7z"
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
