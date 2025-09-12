import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const IceCreamIcon: React.FC<
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
                  d="M367.1 160c.6-5.3.9-10.6.9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4.3 10.7.9 16H80c-26.5 0-48 21.5-48 48s21.5 48 48 48h288c26.5 0 48-21.5 48-48s-21.5-48-48-48zM96 288l104.8 209.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L352 288z"
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
                  d="M224 0C140.9 0 72.6 63.3 64.8 144.4 28.4 148 0 178.7 0 216c0 39.8 32.2 72 72 72h304c39.8 0 72-32.2 72-72 0-37.3-28.4-68-64.8-71.6C375.4 63.3 307.1 0 224 0M112 160c0-61.9 50.1-112 112-112s112 50.1 112 112c0 2.2-.1 4.4-.2 6.6-.4 6.6 2 13.1 6.5 17.9s10.8 7.5 17.5 7.5H376c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24s10.7-24 24-24h16.2c6.6 0 12.9-2.7 17.5-7.5s6.9-11.3 6.5-17.9c-.1-2.2-.2-4.4-.2-6.6m88.1 338.1c4.9 8.6 14 13.9 23.9 13.9s19-5.3 23.9-13.9L349.7 320H98.3z"
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
                  d="M224 0C139.7 0 70.6 65.2 64.4 147.9 36.2 157.7 16 184.5 16 216c0 39.8 32.2 72 72 72h272c39.8 0 72-32.2 72-72 0-31.5-20.2-58.3-48.4-68.1C377.4 65.2 308.3 0 224 0M96 160c0-70.7 57.3-128 128-128s128 57.3 128 128v.5c0 8 5.8 14.7 13.7 15.9 19.4 2.8 34.3 19.5 34.3 39.6 0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40 0-20.1 14.9-36.8 34.3-39.6 7.9-1.1 13.8-7.9 13.7-15.9zm104.1 338.1c4.9 8.6 14 13.9 23.9 13.9s19-5.3 23.9-13.9L349.7 320h-36.8L224 475.5 135.1 320H98.3z"
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
                  d="M224 0C135.6 0 64 71.6 64 160c0 5.6.3 11 .8 16.5C37.3 180 16 203.5 16 232c0 30.9 25.1 56 56 56h304c30.9 0 56-25.1 56-56 0-28.5-21.3-52-48.8-55.5.6-5.4.8-10.9.8-16.5C384 71.6 312.4 0 224 0M80 160c0-79.5 64.5-144 144-144s144 64.5 144 144c0 7.7-.6 15.3-1.8 22.7-.4 2.3.3 4.7 1.8 6.4s3.7 2.8 6.1 2.8h1.9c22.1 0 40 17.9 40 40s-17.9 40-40 40H72c-22.1 0-40-17.9-40-40s17.9-40 40-40h1.9c2.3 0 4.6-1 6.1-2.8s2.2-4.1 1.8-6.4c-1.2-7.4-1.8-15-1.8-22.7m120.1 338.1c4.9 8.6 14 13.9 23.9 13.9s19-5.3 23.9-13.9L349.7 320h-18.4L234 490.2c-2.1 3.6-5.9 5.8-10 5.8s-8-2.2-10-5.8L116.7 320H98.3z"
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
                  d="M368 144c0 5.4-.3 10.7-.9 16h.9c26.5 0 48 21.5 48 48s-21.5 48-48 48H80c-26.5 0-48-21.5-48-48s21.5-48 48-48h.9c-.6-5.3-.9-10.6-.9-16C80 64.5 144.5 0 224 0s144 64.5 144 144"
                />
                <path
                  className="aps-icon-foreground"
                  d="M199.8 495.6 80 256h292.6L252.7 495.6c-5 10-15.3 16.4-26.5 16.4s-21.5-6.3-26.5-16.4z"
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
