import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrowelIcon: React.FC<
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
                  d="M343.9 213.4 245.3 312l65.4 65.4c7.9 7.9 11.1 19.4 8.4 30.3s-10.8 19.6-21.5 22.9l-256 80c-11.4 3.5-23.8.5-32.2-7.9s-11.5-20.9-7.9-32.2l80-256c3.3-10.7 12-18.9 22.9-21.5s22.4.5 30.3 8.4l65.3 65.3 98.6-98.6c-14.3-14.6-14.2-38 .3-52.5l95.4-95.4c26.9-26.9 70.5-26.9 97.5 0s26.9 70.5 0 97.5l-95.4 95.4c-14.5 14.5-37.9 14.6-52.5.3"
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
                  d="m340.4 142 29.6 29.6 87.9-87.9c8.2-8.2 8.2-21.4 0-29.6s-21.4-8.2-29.6 0zM491.8 20.2c26.9 26.9 26.9 70.5 0 97.5l-95.4 95.4c-14.6 14.6-38.2 14.6-52.8 0l-5.4-5.4L237.9 308l75 75c5.9 5.9 8.3 14.5 6.4 22.6s-8 14.6-15.9 17.2l-272 88c-8.6 2.8-18 .5-24.4-5.9s-8.6-15.8-5.9-24.4l88-272c2.6-7.9 9.1-14 17.2-15.9s16.7.5 22.6 6.4l75 75 100.4-100.2-5.4-5.4c-14.6-14.6-14.6-38.2 0-52.8l95.4-95.4c26.9-26.9 70.5-26.9 97.5 0m-240.5 369L122.8 260.7l-61.5 190z"
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
                  d="M491.8 20.2c26.9 26.9 26.9 70.5 0 97.5l-95.4 95.4c-14.6 14.6-38.2 14.6-52.8 0l-11-11-102 102 75.5 75.5c12.6 12.6 7.5 34.1-9.4 39.7L36.2 506.1c-18.7 6.3-36.6-11.6-30.3-30.3l86.8-260.6c5.6-16.9 27.1-22 39.7-9.4l75.6 75.6 102-102-11-11c-14.6-14.6-14.6-38.2 0-52.8l95.4-95.4c26.9-26.9 70.5-26.9 97.5 0zm-170.2 118c-2.1 2.1-2.1 5.5 0 7.5l44.7 44.7c2.1 2.1 5.5 2.1 7.5 0L469.2 95c14.4-14.4 14.4-37.8 0-52.2s-37.8-14.4-52.2 0zM41.3 470.7 274.4 393 119 237.6z"
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
                  d="M310.2 126.9c-8.3 8.3-8.3 21.8 0 30.2l44.7 44.7c8.3 8.3 21.8 8.3 30.2 0l95.4-95.4c20.7-20.7 20.7-54.2 0-74.8s-54.2-20.7-74.8 0L310.3 127zm-11.3 41.5c-14.6-14.6-14.6-38.2 0-52.8l95.4-95.4c26.9-26.9 70.5-26.9 97.5 0s26.9 70.5 0 97.5l-95.4 95.4c-14.6 14.6-38.2 14.6-52.8 0l-16.7-16.7-99.6 99.6 71.3 71.3c16.7 16.7 10.2 45-12.1 52.8l-236.8 83C24.4 511.9.1 487.6 8.9 462.3l82.9-236.9c7.8-22.3 36.2-28.7 52.8-12.1l71.4 71.4 99.6-99.6zm-192 62.3L24 467.6c-4.4 12.7 7.7 24.8 20.4 20.4l236.9-82.9c11.1-3.9 14.4-18.1 6-26.4l-154-154c-8.3-8.3-22.5-5.1-26.4 6"
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
                  d="m298.6 168.1.3.3 44.7 44.7.3.3-98.6 98.6 65.4 65.4c7.9 7.9 11.1 19.4 8.4 30.3s-10.8 19.6-21.5 22.9l-256 80c-11.4 3.5-23.8.5-32.2-7.9s-11.5-20.9-7.9-32.2l80-256c3.3-10.7 12-18.9 22.9-21.5s22.4.5 30.3 8.4l65.3 65.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M298.9 115.6c-14.6 14.6-14.6 38.2 0 52.8l44.7 44.7c14.6 14.6 38.2 14.6 52.8 0l95.4-95.4c26.9-26.9 26.9-70.5 0-97.5s-70.5-26.9-97.5 0z"
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
