import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ImageLandscapeIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm328 64c-8 0-15.5 4-20 10.7l-56 84-17.3-21.7c-4.6-5.7-11.4-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S142.8 384 152 384h272c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144c-4.5-6.7-12-10.7-20-10.7m-168 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h19.8l80.8-110.2c4.5-6.2 11.7-9.8 19.4-9.8s14.8 3.6 19.4 9.8l29.4 40.2 83.1-127.1c4.4-6.8 12-10.9 20.1-10.9s15.7 4.1 20.1 10.9L485 400h27c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zm32 336H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H96m64-288a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 96c17.7 0 32 14.3 32 32v256c0 6.1-1.7 11.8-4.6 16.6L377 197.6c-12.8-16-37.2-16-50 0l-82.6 103.3-27.3-37.5c-12.3-17-37.4-17.7-50.6-1.4L45.3 410c-8-5.8-13.3-15.3-13.3-26V128c0-17.7 14.3-32 32-32zm-1.3 320H193.3l63-78.8L352 217.6zm-350.6 32H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h96.2zm-7.8-32H81.8l109.5-133.8 32.4 44.6zM144 160a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 80c-26.5 0-48 21.5-48 48v256c0 18.6 10.6 34.7 26 42.7L172.7 267c10-12.2 28.7-11.6 38 1.1l33.4 46 89.1-111.4c9.6-12 27.9-12 37.5 0l173.6 216.8c9.7-8.8 15.7-21.4 15.7-35.5V128c0-26.5-21.5-48-48-48zm-5.4 351.7q2.7.3 5.4.3h85.8l4-5 80-100-36-49.5c-3.1-4.2-9.3-4.4-12.7-.4zm111.7.3H512c6.6 0 13-1.4 18.7-3.8L358.2 212.6c-3.2-4-9.3-4-12.5 0l-95.6 119.6-79.9 99.8zM0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm328 64c-8 0-15.5 4-20 10.7l-56 84-17.3-21.7c-4.6-5.7-11.4-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S142.8 384 152 384h272c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144c-4.5-6.7-12-10.7-20-10.7m-168 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M328 192c8 0 15.5 4 20 10.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S432.9 384 424 384H152c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84c4.5-6.6 12-10.6 20-10.6"
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
