import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const OilWellIcon: React.FC<
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
                  d="M528.3 61.3c-11.4-42.7-55.3-68-98-56.6l-15.4 4.1C397.8 13.4 387.7 31 392.3 48l24.5 91.4-108.3 28.1-6.3-18.1c-4.5-12.8-16.6-21.4-30.2-21.4s-25.7 8.6-30.2 21.4l-13.6 39L96 222.6V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v264H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H406.7L340 257.5l-62.2 16.1 27.5 78.4h-66.6l26.3-75-74.6 19.3L137.3 448H96V288.8l337.4-87.5 25.2 94c4.6 17.1 22.1 27.2 39.2 22.6l15.5-4.1c42.7-11.4 68-55.3 56.6-98zM205.1 448l11.2-32h111.4l11.2 32z"
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
                  d="M482 73.7c-4.6-17.1-22.1-27.2-39.2-22.6l58 216.4c17.1-4.6 27.2-22.1 22.6-39.2zm-51.6-69c42.7-11.4 86.5 13.9 98 56.6l41.4 154.5c11.4 42.7-13.9 86.5-56.6 98l-15.5 4.1c-17.1 4.6-34.6-5.6-39.2-22.6l-27.2-101.7L96 280.5V464h44.1L198 294.3l55.6-14.4-24.5 72.1H315l-27.6-80.8 46.6-12.1L404 464h148c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h24V184c0-13.3 10.7-24 24-24s24 10.7 24 24v46.9l135.7-35.2 17.6-51.5c3.3-9.7 12.4-16.2 22.7-16.2s19.4 6.5 22.7 16.2l11 32.3 113.1-29.3L392.3 48c-4.6-17.1 5.6-34.6 22.6-39.2zM353.2 464l-21.9-64H212.7l-21.9 64z"
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
                  d="M497.4 69.6c-6.9-25.6-33.2-40.8-58.8-33.9l-15.5 4.1L489.4 287l15.5-4.1c25.6-6.9 40.8-33.2 33.9-58.8zm-67-64.9c42.7-11.4 86.5 13.9 98 56.6l41.4 154.5c11.4 42.7-13.9 86.5-56.6 98l-15.5 4.1c-17.1 4.6-34.6-5.6-39.2-22.6l-29.3-109.5L96 272.2V480h36.5L200 277.3l36.9-9.6-28 84.3h126.2l-33.6-101 31-8 79 237.1H560c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V176c0-8.8 7.2-16 16-16s16 7.2 16 16v63.2L223.8 206l33-99.1C259 100.4 265.1 96 272 96s13 4.4 15.2 10.9l25.3 76.1 108.4-28.1L392.3 48c-4.6-17.1 5.6-34.6 22.6-39.2zM281.5 191.1l-9.5-28.5-11.3 33.9zM377.8 480l-32-96H198.2l-32 96z"
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
                  d="M512.9 65.4c-9.1-34.1-44.2-54.4-78.4-45.3L419 24.3c-8.5 2.3-13.6 11.1-11.3 19.6L474 291.2c2.3 8.5 11.1 13.6 19.6 11.3l15.5-4.1c34.1-9.1 54.4-44.2 45.3-78.4zM430.4 4.7c42.7-11.4 86.5 13.9 98 56.6l41.4 154.5c11.4 42.7-13.9 86.5-56.6 98l-15.5 4.1c-17.1 4.6-34.6-5.6-39.2-22.6l-29.9-111.6L80 274v222h50.3L202 285l18.5-4.8-24.4 71.8h151.8l-32.7-96.3 15.5-4 83 244.3H568c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h56V168c0-4.4 3.6-8 8-8s8 3.6 8 8v89.5l144.1-37.3 40.4-118.7c1.1-3.2 4.1-5.4 7.6-5.4s6.5 2.2 7.6 5.4l32.6 95.9 112.3-29.1L392.3 48c-4.6-17.1 5.6-34.6 22.6-39.2zM296.6 201.3 272 128.9l-29.4 86.5 54.1-14zM396.8 496l-43.5-128H190.7l-43.5 128z"
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
                  d="m302.2 149.4 6.3 18.1-80.4 20.8 13.6-39c4.5-12.8 16.6-21.4 30.2-21.4s25.7 8.6 30.2 21.4zM137.3 448l53.1-151.7L265 277l-26.3 75h66.6l-27.4-78.4 62.1-16.1L406.7 448h-67.8l-11.2-32H216.3l-11.2 32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M528.3 61.3c-11.4-42.7-55.3-68-98-56.6l-15.4 4.1C397.8 13.4 387.7 31 392.3 48l24.5 91.4L96 222.6V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v264H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V288.8l337.4-87.5 25.2 94c4.6 17.1 22.1 27.2 39.2 22.6l15.5-4.1c42.7-11.4 68-55.3 56.6-98z"
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
