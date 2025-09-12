import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceDisappointedIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m60.1-101.3c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7c-5.9 6.6-16 7.1-22.6 1.2s-7.1-16-1.2-22.6c16.1-17.9 44.2-37.3 83.9-37.3s67.8 19.4 83.9 37.3c5.9 6.6 5.4 16.7-1.2 22.6s-16.7 5.4-22.6-1.2M211.3 267.3l-7.4 7.4a159.96 159.96 0 0 1-86.8 44.7l-2.5.4c-8.7 1.5-17-4.4-18.4-13.2s4.4-17 13.2-18.4l2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm89.4 0c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5.4c8.7 1.5 14.6 9.7 13.2 18.4s-9.7 14.6-18.4 13.2l-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4z"
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
                  d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m294.5 152.4c-7.4-7.9-20-16.4-38.5-16.4s-31.1 8.5-38.5 16.4c-9 9.7-24.2 10.2-33.9 1.2s-10.2-24.2-1.2-33.9c14.3-15.4 39-31.7 73.6-31.7s59.3 16.3 73.5 31.6c9 9.7 8.5 24.9-1.2 33.9s-24.9 8.5-33.9-1.2zm-83.2-141.1-7.4 7.4a159.96 159.96 0 0 1-86.8 44.7l-2.5.4c-8.7 1.5-17-4.4-18.4-13.2s4.4-17 13.2-18.4l2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm89.4 0c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5.4c8.7 1.5 14.6 9.7 13.2 18.4s-9.7 14.6-18.4 13.2l-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4z"
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
                  d="M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m316.1 154.7c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7c-5.9 6.6-16 7.1-22.6 1.2s-7.1-16-1.2-22.6c16.1-17.9 44.2-37.3 83.9-37.3s67.8 19.4 83.9 37.3c5.9 6.6 5.4 16.7-1.2 22.6s-16.7 5.4-22.6-1.2M211.3 267.3l-7.4 7.4a159.96 159.96 0 0 1-86.8 44.7l-2.5.4c-8.7 1.5-17-4.4-18.4-13.2s4.4-17 13.2-18.4l2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm89.4 0c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5.4c8.7 1.5 14.6 9.7 13.2 18.4s-9.7 14.6-18.4 13.2l-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4z"
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
                  d="M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m322.1 157.4C309.3 399.1 287.3 384 256 384s-53.3 15.1-66.1 29.4c-3 3.3-8 3.6-11.3.6s-3.6-8-.6-11.3c15.1-16.7 41.1-34.7 78-34.7s62.9 18 77.9 34.6c3 3.3 2.7 8.3-.6 11.3s-8.3 2.7-11.3-.6zm-116.4-171c3.1 3.1 3.1 8.2 0 11.3l-7.4 7.4c-22.4 22.4-51.2 37.2-82.5 42.5l-2.5.4c-4.4.7-8.5-2.2-9.2-6.6s2.2-8.5 6.6-9.2l2.5-.4c28-4.7 53.8-17.9 73.8-38l7.4-7.4c3.1-3.1 8.2-3.1 11.3 0m100.7 11.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l7.4 7.4c20 20 45.8 33.3 73.8 38l2.5.4c4.4.7 7.3 4.8 6.6 9.2s-4.8 7.3-9.2 6.6l-2.5-.4c-31.3-5.2-60.1-20.1-82.5-42.5z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m60.1-101.3c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7c-5.9 6.6-16 7.1-22.6 1.2s-7.1-16-1.2-22.6c16.1-17.9 44.2-37.3 83.9-37.3s67.8 19.4 83.9 37.3c5.9 6.6 5.4 16.7-1.2 22.6s-16.7 5.4-22.6-1.2M211.3 267.3l-7.4 7.4a159.96 159.96 0 0 1-86.8 44.7l-2.5.4c-8.7 1.5-17-4.4-18.4-13.2s4.4-17 13.2-18.4l2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm89.4 0c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5.4c8.7 1.5 14.6 9.7 13.2 18.4s-9.7 14.6-18.4 13.2l-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m211.3 267.3-7.4 7.4a159.96 159.96 0 0 1-86.8 44.7l-2.5.4c-8.7 1.5-17-4.4-18.4-13.2s4.4-17 13.2-18.4l2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm89.4 0c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5.4c8.7 1.5 14.6 9.7 13.2 18.4s-9.7 14.6-18.4 13.2l-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4z"
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
