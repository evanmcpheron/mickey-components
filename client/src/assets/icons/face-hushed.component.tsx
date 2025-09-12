import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceHushedIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-79.6-288a32 32 0 1 1 0 64 32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0M179 160.9c-21.2 2.8-40.6 12.4-56.1 26.8-6.5 6-16.6 5.7-22.6-.8s-5.7-16.6.8-22.6c20.1-18.7 45.5-31.5 73.7-35.2 5.6-.7 11.4-1.1 17.2-1.1 8.8 0 16 7.2 16 16s-7.2 16-16 16c-4.4 0-8.8.3-13 .9m141-.9c-8.8 0-16-7.2-16-16s7.2-16 16-16c5.8 0 11.6.4 17.2 1.1 28.2 3.7 53.7 16.4 73.7 35.2 6.5 6 6.8 16.2.8 22.6s-16.2 6.8-22.6.8c-15.5-14.5-34.8-24-56.1-26.8-4.3-.6-8.6-.9-13-.9m-64 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176.4-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0M179 160.9c-21.2 2.8-40.6 12.4-56.1 26.8-6.5 6-16.6 5.7-22.6-.8s-5.7-16.6.8-22.6c20.1-18.7 45.5-31.5 73.7-35.2 5.6-.7 11.4-1.1 17.2-1.1 8.8 0 16 7.2 16 16s-7.2 16-16 16c-4.4 0-8.8.3-13 .9m141-.9c-8.8 0-16-7.2-16-16s7.2-16 16-16c5.8 0 11.6.4 17.2 1.1 28.2 3.7 53.7 16.4 73.7 35.2 6.5 6 6.8 16.2.8 22.6s-16.2 6.8-22.6.8c-15.5-14.5-34.8-24-56.1-26.8-4.3-.6-8.6-.9-13-.9m-64 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176.4-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m136 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0M179 160.9c-21.2 2.8-40.6 12.4-56.1 26.8-6.5 6-16.6 5.7-22.6-.8s-5.7-16.6.8-22.6c20.1-18.7 45.5-31.5 73.7-35.2 5.6-.7 11.4-1.1 17.2-1.1 8.8 0 16 7.2 16 16s-7.2 16-16 16c-4.4 0-8.8.3-13 .9m141-.9c-8.8 0-16-7.2-16-16s7.2-16 16-16c5.8 0 11.6.4 17.2 1.1 28.2 3.7 53.7 16.4 73.7 35.2 6.5 6 6.8 16.2.8 22.6s-16.2 6.8-22.6.8c-15.5-14.5-34.8-24-56.1-26.8-4.3-.6-8.6-.9-13-.9m-32 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m176.4-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m144 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0M192.5 144c-32.5 2-61.6 16.5-82.7 38.7-3 3.2-8.1 3.3-11.3.3s-3.3-8.1-.3-11.3c23.7-25.1 56.6-41.4 93.3-43.7 4.4-.3 8.2 3.1 8.5 7.5s-3.1 8.2-7.5 8.5m119.5-8.5c.3-4.4 4.1-7.8 8.5-7.5 36.7 2.3 69.6 18.6 93.3 43.7 3 3.2 2.9 8.3-.3 11.3s-8.3 2.9-11.3-.3C381.1 160.5 352 146 319.5 144c-4.4-.3-7.8-4.1-7.5-8.5M304 384a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-112 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-79.6-288a32 32 0 1 1 0 64 32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0M179 160.9c-21.2 2.8-40.6 12.4-56.1 26.8-6.5 6-16.6 5.7-22.6-.8s-5.7-16.6.8-22.6c20.1-18.7 45.5-31.5 73.7-35.2 5.6-.7 11.4-1.1 17.2-1.1 8.8 0 16 7.2 16 16s-7.2 16-16 16c-4.4 0-8.8.3-13 .9m141-.9c-8.8 0-16-7.2-16-16s7.2-16 16-16c5.8 0 11.6.4 17.2 1.1 28.2 3.7 53.7 16.4 73.7 35.2 6.5 6 6.8 16.2.8 22.6s-16.2 6.8-22.6.8c-15.5-14.5-34.8-24-56.1-26.8-4.3-.6-8.6-.9-13-.9m-64 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 160c-4.4 0-8.8.3-13 .9-21.2 2.8-40.6 12.4-56.1 26.8-6.5 6-16.6 5.7-22.6-.8s-5.7-16.6.8-22.6c20.1-18.7 45.5-31.5 73.7-35.2 5.6-.7 11.4-1.1 17.2-1.1 8.8 0 16 7.2 16 16s-7.2 16-16 16m-15.6 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m160 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-3.4-63.1c-4.3-.6-8.6-.9-13-.9-8.8 0-16-7.2-16-16s7.2-16 16-16c5.8 0 11.6.4 17.2 1.1 28.2 3.7 53.7 16.4 73.7 35.2 6.5 6 6.8 16.2.8 22.6s-16.2 6.8-22.6.8c-15.5-14.5-34.8-24-56.1-26.8"
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
