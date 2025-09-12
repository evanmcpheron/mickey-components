import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PencilMechanicalIcon: React.FC<
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
                  d="M475.3 11.3C468.1 4.1 458.2 0 448 0s-20.1 4.1-27.3 11.3l-30.1 30.1 80 80 30.1-30.1C507.9 84.1 512 74.2 512 64s-4.1-20.1-11.3-27.3zm-233 76.3c3.1-3.1 8.2-3.1 11.3 0L283 117 72.8 327.2c-5.8 5.8-10 12.9-12.2 20.8l-27.8 97.3L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l25.7-25.7 97.4-27.8c7.8-2.2 15-6.4 20.8-12.2l251.9-251.9c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3l-57.4-57.4C372.1 68.1 362.2 64 352 64s-20.1 4.1-27.3 11.3L317 83l-29.4-29.3c-21.9-21.9-57.3-21.9-79.2 0L103 159c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zM89.1 422.9l17.3-60.5 43.2 43.2z"
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
                  d="m500.7 36.7-25.4-25.4C468.1 4.1 458.2 0 448 0s-20.1 4.1-27.3 11.3l-31.2 31.2c-4.3-1.6-8.9-2.5-13.5-2.5-10.2 0-20.1 4.1-27.3 11.3L317 83l-29.4-29.3c-21.9-21.9-57.3-21.9-79.2 0L103 159c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L242.3 87.6c3.1-3.1 8.2-3.1 11.3 0L283 117 72.8 327.2c-5.8 5.8-10 12.9-12.2 20.8l-27.8 97.3L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l25.7-25.7 97.4-27.8c7.8-2.2 15-6.4 20.8-12.2l275.9-275.9c7.2-7.2 11.3-17.1 11.3-27.3 0-4.7-.8-9.3-2.5-13.5l31.1-31.1C507.9 84.1 512 74.2 512 64s-4.1-20.1-11.3-27.3M376 91.9l44.1 44.1L183 373.1 138.9 329zm-286.9 331 16.9-59 42.2 42.2-59 16.9z"
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
                  d="M440 0c-9.4 0-18.3 3.7-25 10.3l-38.6 38.6c-2.7-.6-5.6-.9-8.4-.9-10.2 0-20.1 4.1-27.3 11.3l-29.4 29.4-29.4-29.4c-18.7-18.7-49.1-18.7-67.9 0L108.7 164.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L236.7 81.9c6.2-6.2 16.4-6.2 22.6 0l29.4 29.4L80.4 319.7c-5.5 5.5-9.6 12.2-11.9 19.6L32 456l.7.7-28 28c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l28-28 .7.7 116.7-36.5c7.4-2.3 14.1-6.4 19.6-11.9l260.4-260.3c7.2-7.2 11.3-17.1 11.3-27.3q0-4.35-.9-8.4L501.7 97c6.6-6.6 10.3-15.6 10.3-25s-3.7-18.3-10.3-25L465 10.3C458.3 3.7 449.4 0 440 0m4.7 108.7-41.4-41.4L437.7 33c.6-.6 1.5-1 2.3-1s1.7.3 2.3 1L479 69.7c.6.6 1 1.5 1 2.3s-.3 1.7-1 2.3l-34.3 34.3zm-14.6 30.6c1.2 1.2 1.9 2.9 1.9 4.7s-.7 3.4-1.9 4.7L188.7 390.1 122 323.4 363.3 81.9c1.2-1.2 2.9-1.9 4.7-1.9s3.4.7 4.7 1.9zM99 348.8c.2-.8.5-1.5.9-2.3l65.5 65.5c-.7.4-1.5.7-2.3.9l-93.2 29.2z"
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
                  d="M448 0c-7.2 0-14.2 2.9-19.3 8l-43.9 43.9c-5.2-2.6-10.9-3.9-16.8-3.9-10.2 0-20.1 4.1-27.3 11.3l-35 35L276.3 65c-15.6-15.6-40.9-15.6-56.6 0L114.3 170.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L231 76.3c9.4-9.4 24.6-9.4 33.9 0l29.4 29.4L80.9 319.1c-5.9 5.9-10.1 13.1-12.3 21.1L33.3 467.4l-31 30.9c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l30.9-30.9 127.2-35.3c8-2.2 15.2-6.5 21.1-12.3l259.9-259.8c7.2-7.2 11.3-17.1 11.3-27.3 0-5.9-1.3-11.6-3.9-16.8L504 83.3c5.1-5.1 8-12.1 8-19.3s-2.9-14.2-8-19.3L467.3 8c-5.1-5.1-12.1-8-19.3-8m2.3 114.3-52.6-52.6L440 19.3c2.1-2.1 5-3.3 8-3.3s5.9 1.2 8 3.3L492.7 56c2.1 2.1 3.3 5 3.3 8s-1.2 5.9-3.3 8l-42.3 42.3zm-9 13.7c4.2 4.2 6.6 10 6.6 16s-2.4 11.8-6.6 16l-247 247-89.3-89.3 247-247c4.2-4.2 10-6.6 16-6.6s11.8 2.4 16 6.6l57.4 57.3zM92.2 330.4l1.4-1.4 89.4 89.3-1.4 1.4c-3.9 3.9-8.7 6.7-14.1 8.2L51.9 460.1 84 344.5c1.5-5.3 4.3-10.2 8.2-14.1"
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
                  d="m500.7 36.7-25.4-25.4C468.1 4.1 458.2 0 448 0s-20.1 4.1-27.3 11.3l-55.2 55.2c5.1 1.9 9.8 4.9 13.8 8.9l57.4 57.4c3.9 3.9 6.9 8.6 8.9 13.8l55.1-55.1C507.9 84.1 512 74.2 512 64s-4.1-20.1-11.3-27.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M253.7 87.6c-3.1-3.1-8.2-3.1-11.3 0L137 193c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L208.4 53.7c21.9-21.9 57.3-21.9 79.2 0L317 83l7.7-7.7C331.9 68.1 341.8 64 352 64s20.1 4.1 27.3 11.3l57.4 57.4c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L184.8 439.2c-5.8 5.8-12.9 10-20.8 12.2l-97.3 27.8L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l25.7-25.7L60.6 348c2.2-7.8 6.4-15 12.2-20.8L283 117zM106.4 362.4l-17.3 60.5 60.5-17.3z"
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
