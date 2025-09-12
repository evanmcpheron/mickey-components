import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BellSlashIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-90.2-70.7c.2-.4.4-.9.6-1.3 5.2-11.5 3.1-25-5.3-34.4l-7.4-8.3c-31.2-35.2-48.5-80.5-48.5-127.6V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v19.2c-42.6 8.6-79 34.2-102 69.3zM406.2 416 160 222.1v4.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S115.4 416 128 416zm-40.9 77.3c12-12 18.7-28.3 18.7-45.3H256c0 17 6.7 33.3 18.7 45.3S303 512 320 512s33.3-6.7 45.3-18.7"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L542.6 400c2.7-7.8 1.3-16.5-3.9-23l-14.9-18.6c-28.3-35.5-43.8-79.6-43.8-125V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v19.2c-42.6 8.6-79 34.2-102 69.3zM224 150.3c19.6-32.6 55.3-54.3 96-54.3 61.9 0 112 50.1 112 112v25.4c0 32.7 6.4 64.8 18.7 94.5zM406.2 416l-60.9-48h-177c21.2-32.8 34.4-70.3 38.4-109.1L160 222.1v11.4c0 45.4-15.5 89.5-43.8 124.9L101.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S110.8 416 120 416zM384 448H256c0 17 6.7 33.3 18.7 45.3S303 512 320 512s33.3-6.7 45.3-18.7S384 465 384 448"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M378.8 384H140.3c-6.8 0-12.3-5.5-12.3-12.3 0-3.3 1.3-6.4 3.6-8.7l2.8-2.8c33.4-33.4 53.5-77.5 57.1-124.2L160 211.2v9.9c0 43.7-17.4 85.6-48.3 116.6l-2.8 2.8c-8.3 8.3-13 19.6-13 31.3 0 24.5 19.8 44.3 44.3 44.3h279.2l-40.5-32zM304 32.8c-39.5 3.9-74.8 22.2-100.6 49.6l25.2 19.9C251.9 78.7 284.2 64 320 64c70.7 0 128 57.3 128 128v29.1c0 21.4 3.5 42.5 10.2 62.4l75.1 59.3c-.7-.8-1.5-1.7-2.3-2.5l-2.8-2.8c-30.8-30.8-48.2-72.7-48.2-116.4V192c0-83-63.1-151.2-144-159.2V16c0-8.8-7.2-16-16-16s-16 7.2-16 16zm-14.2 425.9c-2.9-8.3-12.1-12.7-20.4-9.8s-12.7 12.1-9.8 20.4c8.8 24.8 32.5 42.7 60.4 42.7s51.6-17.8 60.4-42.7c2.9-8.3-1.4-17.5-9.8-20.4s-17.5 1.4-20.4 9.8c-4.4 12.4-16.3 21.3-30.2 21.3s-25.8-8.9-30.2-21.3M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M386.2 400H127.7c-8.7 0-15.7-7-15.7-15.7 0-3.6 1.2-7 3.4-9.8l16.7-20.9c27.3-34.1 42.6-76.1 43.8-119.6L160 221.4v7.2c0 41.8-14.2 82.3-40.3 114.9L103 364.4c-4.5 5.6-6.9 12.6-6.9 19.8 0 17.5 14.2 31.7 31.7 31.7h278.7l-20.3-16zM312 32.2c-39.9 2-76 18.5-102.9 44.5l12.7 10C247.5 62.7 282 48 320 48c79.5 0 144 64.5 144 144v36.6c0 18.9 2.7 37.6 7.9 55.5l23.8 18.9c-10.3-23.3-15.7-48.5-15.7-74.3V192c0-85.7-67.4-155.6-152-159.8V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v24.2M272 448c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 17 6.7 33.3 18.7 45.3S303 512 320 512s33.3-6.7 45.3-18.7S384 465 384 448c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 12.7-5.1 24.9-14.1 33.9S332.7 496 320 496s-24.9-5.1-33.9-14.1S272 460.7 272 448M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M540.6 398.4c.2-.4.4-.9.6-1.3 5.2-11.5 3.1-25-5.3-34.4l-7.4-8.3c-31.2-35.2-48.5-80.5-48.5-127.6V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v19.2c-42.6 8.6-79 34.2-102 69.3zM406.2 416 160 222.1v4.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S115.4 416 128 416zm-40.9 77.3c12-12 18.7-28.3 18.7-45.3H256c0 17 6.7 33.3 18.7 45.3S303 512 320 512s33.3-6.7 45.3-18.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
