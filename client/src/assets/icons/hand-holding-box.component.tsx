import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HandHoldingBoxIcon: React.FC<
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
                  d="M224 121.7c0 3.5 2.8 6.3 6.3 6.3 1.1 0 2.2-.3 3.1-.8l46.6-26.6c4.9-2.8 11-2.8 15.9 0l46.6 26.6c1 .5 2 .8 3.1.8 3.5 0 6.3-2.8 6.3-6.3V0h80c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48h80zm344.2 214.6c13.1 17.8 9.3 42.8-8.5 55.9l-126.6 93.3c-23.4 17.2-51.6 26.5-80.7 26.5H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h36.8l44.9-36c22.7-18.2 50.9-28 80-28H352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h120.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5M193.6 384h-.9z"
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
                  d="M432 48h-80v73.7c0 3.5-2.8 6.3-6.3 6.3-1.1 0-2.2-.3-3.1-.8L296 100.6c-4.9-2.8-11-2.8-15.9 0l-46.6 26.6c-1 .5-2 .8-3.1.8-3.5 0-6.3-2.8-6.3-6.3V48H144v160h288zm0-48c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48h288M187.4 352c-7.9 0-15.6 2.3-22.2 6.7L85.3 412c-3.9 2.6-8.6 4-13.3 4H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40.7l73.8-49.2C153 309.1 170 304 187.4 304H344c35.3 0 64 28.7 64 64v2l64.9-40c10.7-6.6 22.9-10 35.5-10h7.4c33.3 0 60.3 27 60.3 60.3 0 20.4-10.4 39.5-27.5 50.6L453 492.8c-19.4 12.6-42.1 19.3-65.2 19.3H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h363.7c13.9 0 27.5-4 39.1-11.6l95.6-61.9c3.5-2.3 5.6-6.1 5.6-10.3 0-6.8-5.5-12.3-12.3-12.3h-7.4c-3.6 0-7.2 1-10.3 2.9l-93.5 57.5c-3.8 2.3-8.1 3.6-12.6 3.6H256c-13.3 0-24-10.7-24-24s10.7-24 24-24h88c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M208 32v96c0 5.5 2.9 10.7 7.6 13.6s10.6 3.2 15.6.7l56.8-28.4 56.8 28.4c5 2.5 10.9 2.2 15.6-.7s7.6-8.1 7.6-13.6V32h64c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16zm16-32h-80c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H224m16 32h96v70.1l-40.8-20.4c-4.5-2.3-9.8-2.3-14.3 0L240 102.1zm-44.6 272c-15.8 0-31.2 4.7-44.4 13.4L75.2 368H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c3.2 0 6.2-.9 8.9-2.7l79.9-53.3c7.9-5.3 17.1-8.1 26.6-8.1H344c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88c-8.8 0-16 7.2-16 16s7.2 16 16 16h148.6c2.9 0 5.7-.8 8.2-2.3l98.5-58.6c3.4-2 7.2-3 11.1-3h1.3c11.2 0 20.3 9.1 20.3 20.3 0 6.9-3.5 13.3-9.2 17l-119.7 77.8c-13 8.4-28.1 12.9-43.6 12.9H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h355.5c21.7 0 42.9-6.3 61-18.1l119.6-77.8C567 406.5 576 390 576 372.3c0-28.9-23.4-52.3-52.3-52.3h-1.3c-9.7 0-19.1 2.6-27.5 7.6L400.2 384h-5.6c3.5-7.3 5.4-15.4 5.4-24 0-30.9-25.1-56-56-56z"
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
                  d="M224 16h-80c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V48c0-17.7-14.3-32-32-32h-80v120c0 2.9-1.5 5.5-4 6.9s-5.5 1.4-8 0l-52-29.7-52 29.7c-2.5 1.4-5.5 1.4-8 0s-4-4.1-4-6.9zm8-16h200c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zm8 16v106.2L284 97c2.5-1.4 5.5-1.4 7.9 0l44 25.2V16zm315.3 329.8c-7.9-10.7-22.9-12.9-33.6-5.1l-117.5 86.6c-4.1 3-9.1 4.7-14.2 4.7H268c-15.5 0-28-12.5-28-28s12.5-28 28-28h80c11 0 20-9 20-20s-9-20-20-20H193.7c-25.4 0-50.1 8.7-70 24.5L81 394.7c-4.3 3.4-9.5 5.3-15 5.3H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h58c1.8 0 3.6-.6 5-1.8l42.7-34.2c22.7-18.2 50.9-28 80-28H348c19.9 0 36 16.1 36 36s-16.1 36-36 36h-80c-6.6 0-12 5.4-12 12s5.4 12 12 12h121.9c1.7 0 3.4-.5 4.7-1.6l117.6-86.6c17.8-13.1 42.8-9.3 55.9 8.5s9.3 42.8-8.5 55.9l-126.5 93.3c-23.4 17.2-51.6 26.5-80.7 26.5H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h344.5c25.6 0 50.6-8.2 71.2-23.4l126.6-93.3c10.7-7.9 12.9-22.9 5.1-33.6z"
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
                  d="M559.7 392.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H193.7c-29.1 0-57.3 9.9-80 28l-44.9 36H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h320.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-366.1-8.3a.5.5 0 1 1-.9.2.5.5 0 1 1 .9-.2"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 0v121.7c0 3.5 2.8 6.3 6.3 6.3 1.1 0 2.2-.3 3.1-.8l46.6-26.6c4.9-2.8 11-2.8 15.9 0l46.6 26.6c1 .5 2 .8 3.1.8 3.5 0 6.3-2.8 6.3-6.3V0h80c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48z"
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
