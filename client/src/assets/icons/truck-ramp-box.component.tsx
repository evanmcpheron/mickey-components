import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckRampBoxIcon: React.FC<
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
                  d="M640 0v400c0 61.9-50.1 112-112 112-61 0-110.5-48.7-112-109.3L48.4 502.9c-17.1 4.6-34.6-5.4-39.3-22.5s5.4-34.6 22.5-39.3L352 353.8V64c0-35.3 28.7-64 64-64zm-64 400a48 48 0 1 0-96 0 48 48 0 1 0 96 0M23.1 207.7c-4.6-17.1 5.6-34.6 22.6-39.2l46.4-12.4 20.7 77.3c2.3 8.5 11.1 13.6 19.6 11.3l30.9-8.3c8.5-2.3 13.6-11.1 11.3-19.6l-20.7-77.3 46.4-12.4c17.1-4.6 34.6 5.6 39.2 22.6l41.4 154.5c4.6 17.1-5.6 34.6-22.6 39.2l-154.6 41.5c-17.1 4.6-34.6-5.6-39.2-22.6z"
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
                  d="M352 88c0-48.6 39.4-88 88-88h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-22.1 0-40 17.9-40 40v272.7l25.7-7 .4-.1c17.6-38.7 56.7-65.6 102-65.6 61.9 0 112 50.1 112 112s-50.1 112-112 112c-59.8 0-108.7-46.9-111.8-106l-386 105.2c-12.8 3.5-26-4.1-29.5-16.8s4.1-26 16.8-29.5L352 373.8zm240 312a64 64 0 1 0-128 0 64 64 0 1 0 128 0M23.1 207.7c-4.6-17.1 5.6-34.6 22.6-39.2l46.4-12.4 20.7 77.3c2.3 8.5 11.1 13.6 19.6 11.3l30.9-8.3c8.5-2.3 13.6-11.1 11.3-19.6l-20.7-77.3 46.4-12.4c17.1-4.6 34.6 5.6 39.2 22.6l41.4 154.5c4.6 17.1-5.6 34.6-22.6 39.2l-154.6 41.5c-17.1 4.6-34.6-5.6-39.2-22.6z"
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
                  d="M432 0c-44.2 0-80 35.8-80 80v304c0 1.3.2 2.5.4 3.7L11.8 480.6C3.3 482.9-1.8 491.7.6 500.2s11.1 13.6 19.6 11.2l395.9-107.8C417.9 463.8 467.3 512 528 512c61.9 0 112-50.1 112-112s-50.1-112-112-112c-51.2 0-94.4 34.4-107.7 81.3l-.5.1-35.8 9.7V80c0-26.5 21.5-48 48-48h192c8.8 0 16-7.2 16-16s-7.2-16-16-16zm96 320a80 80 0 1 1 0 160 80 80 0 1 1 0-160M84.9 191.2l14.5 54.1c3.4 12.8 16.6 20.4 29.4 17l46.4-12.4c12.8-3.4 20.4-16.6 17-29.4l-14.5-54.1 30.9-8.3L250 312.6 95.4 354 54 199.4l30.9-8.3zm30.9-8.3 30.9-8.3 12.5 46.4-30.9 8.3-12.4-46.4zm-70.1-14.4c-17.1 4.6-27.2 22.1-22.6 39.2l41.4 154.6c4.6 17.1 22.1 27.2 39.2 22.6l154.5-41.4c17.1-4.6 27.2-22.1 22.6-39.2l-41.3-154.6c-4.6-17.1-22.1-27.2-39.2-22.6z"
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
                  d="M352 72c0-39.8 32.2-72 72-72h208c4.4 0 8 3.6 8 8s-3.6 8-8 8H424c-30.9 0-56 25.1-56 56v320.5l50.1-14.4C428.3 326.8 473.6 288 528 288c61.9 0 112 50.1 112 112s-50.1 112-112 112-112-50.1-112-112c0-1.5 0-3.1.1-4.6L10.2 511.7c-4.2 1.2-8.7-1.2-9.9-5.5s1.2-8.7 5.5-9.9L352 397.1zm272 328a96 96 0 1 0-192 0 96 96 0 1 0 192 0M204.4 142.6 165.8 153l18.6 69.5c2.3 8.5-2.8 17.3-11.3 19.6l-46.4 12.4c-8.5 2.3-17.3-2.8-19.6-11.3l-18.6-69.6L49.9 184c-8.5 2.3-13.6 11.1-11.3 19.6L80 358.1c2.3 8.5 11.1 13.6 19.6 11.3L254.1 328c8.5-2.3 13.6-11.1 11.3-19.6L224 153.9c-2.3-8.5-11.1-13.6-19.6-11.3M104 169.5l18.6 69.5 46.4-12.4-18.6-69.5zm-58.2-1 154.5-41.4c17.1-4.6 34.6 5.6 39.2 22.6l41.4 154.5c4.6 17.1-5.6 34.6-22.6 39.2l-154.6 41.5c-17.1 4.6-34.6-5.6-39.2-22.6L23.1 207.7c-4.6-17.1 5.6-34.6 22.6-39.2z"
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
                  d="m92.1 156.1-46.4 12.4c-17.1 4.6-27.2 22.1-22.6 39.2l41.4 154.6c4.6 17.1 22.1 27.2 39.2 22.6l154.5-41.4c17.1-4.6 27.2-22.1 22.6-39.2l-41.3-154.6c-4.6-17.1-22.1-27.2-39.2-22.6l-46.4 12.4 20.7 77.3c2.3 8.5-2.8 17.3-11.3 19.6l-30.9 8.3c-8.5 2.3-17.3-2.8-19.6-11.3zM544 512a96 96 0 1 0 0-192 96 96 0 1 0 0 192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M544 288c-66.1 0-120.6 50.2-127.3 114.5L48.4 502.9c-17.1 4.6-34.6-5.4-39.3-22.5s5.4-34.6 22.5-39.3L352 353.8V64c0-35.3 28.7-64 64-64h224v331.3c-23.5-26.6-57.8-43.3-96-43.3M153.9 139.5l-61.8 16.6 20.7 77.3c2.3 8.5 11.1 13.6 19.6 11.3l30.9-8.3c8.5-2.3 13.6-11.1 11.3-19.6z"
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
