import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FiltersIcon: React.FC<
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
                  d="M232 32c-15.9 0-30.2 9.4-36.6 23.9s-3.6 31.5 7.2 43.2L352 261.5V368c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3S480 428.1 480 416V261.5L629.4 99.1c10.7-11.7 13.6-28.6 7.2-43.2S615.9 32 600 32zM40 96c-15.9 0-30.2 9.4-36.6 23.9s-3.6 31.5 7.2 43.2L160 325.5V400c0 10.1 4.7 19.6 12.8 25.6l64 48c9.7 7.3 22.7 8.4 33.5 3S288 460.1 288 448V325.5l32-34.8V274L179 120.7c-6.7-7.3-11.7-15.7-14.9-24.7z"
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
                  d="M233.8 32C210.7 32 192 50.7 192 73.8c0 9.3 3.1 18.4 8.9 25.8L336 272.3v63.9c0 12.3 5.6 23.9 15.3 31.5l92.9 73c21 16.5 51.8 1.5 51.8-25.2V272.3L631.1 99.6c5.8-7.4 8.9-16.4 8.9-25.8 0-23.1-18.7-41.8-41.8-41.8zm145.1 217.2L246.5 80h339L453.1 249.2c-3.3 4.2-5.1 9.4-5.1 14.8v118.6l-64-50.3V264c0-5.4-1.8-10.6-5.1-14.8M163.4 96H41.8C18.7 96 0 114.7 0 137.8c0 9.3 3.1 18.4 8.9 25.8L144 336.3v31.9c0 12.3 5.6 23.9 15.3 31.5l92.9 73c21 16.5 51.8 1.5 51.8-25.2V283.3l-9.7-12.5-33.2 42.4c-3.3 4.2-5.1 9.4-5.1 14.8v86.6l-64-50.3V328c0-5.4-1.8-10.6-5.1-14.8L54.5 144H195l-19.3-24.6c-5.5-7-9.6-15-12.3-23.4"
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
                  d="M231.1 32C209.5 32 192 49.5 192 71.1c0 9.7 3.6 19.1 10.2 26.3L352 262.2v97.7c0 10.2 4.9 19.9 13.2 25.9l79.8 58c3.8 2.7 8.3 4.2 13 4.2 12.2 0 22-9.9 22-22V262.2L629.8 97.4c6.5-7.2 10.2-16.6 10.2-26.3 0-21.6-17.5-39.1-39.1-39.1zM224 71.1c0-3.9 3.2-7.1 7.1-7.1h369.8c3.9 0 7.1 3.2 7.1 7.1 0 1.8-.7 3.5-1.8 4.8l-154 169.4c-2.7 2.9-4.2 6.8-4.2 10.8v150.3l-64-46.5V256c0-4-1.5-7.8-4.2-10.8l-154-169.4c-1.2-1.3-1.8-3-1.8-4.8zM164.5 96H39.1C17.5 96 0 113.5 0 135.1c0 9.7 3.6 19.1 10.2 26.3L160 326.2v65.7c0 10.2 4.9 19.9 13.2 25.9l79.8 58c3.8 2.7 8.3 4.2 13 4.2 12.2 0 22-9.9 22-22V326.2l32-35.2v-16.4L305.8 259l-45.7 50.3c-2.7 2.9-4.2 6.8-4.2 10.8v118.3l-64-46.5V320c0-4-1.5-7.8-4.2-10.8L33.8 139.8c-1.2-1.3-1.8-3-1.8-4.8 0-3.9 3.2-7.1 7.1-7.1h147.7l-8.3-9.1c-6.1-6.7-10.8-14.5-14-22.9z"
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
                  d="M223.3 32C206 32 192 46 192 63.3c0 7.5 2.7 14.8 7.7 20.5L352 259v108.9c0 7.7 3.7 14.9 9.9 19.4l76.6 55.7c4.5 3.2 9.8 5 15.4 5 14.4 0 26.1-11.7 26.1-26.1V259L632.3 83.8c5-5.7 7.7-13 7.7-20.5C640 46 626 32 608.7 32zM208 63.3c0-8.4 6.8-15.3 15.3-15.3h385.4c8.4 0 15.3 6.8 15.3 15.3 0 3.7-1.3 7.3-3.8 10L466 250.8c-1.3 1.5-2 3.3-2 5.2v165.9c0 5.6-4.5 10.1-10.1 10.1-2.1 0-4.2-.7-5.9-1.9l-76.6-55.7c-2.1-1.5-3.3-3.9-3.3-6.5V256c0-1.9-.7-3.8-2-5.2L211.8 73.3c-2.4-2.8-3.8-6.3-3.8-10M31.3 96C14 96 0 110 0 127.3c0 7.5 2.7 14.8 7.7 20.5L160 323v76.9c0 7.7 3.7 14.9 9.9 19.4l76.6 55.7c4.5 3.2 9.8 5 15.4 5 14.4 0 26.1-11.7 26.1-26.1V323l32-36.6V271l-3.8-4.4-42.2 48.1c-1.3 1.5-2 3.3-2 5.3v133.9c0 5.6-4.5 10.1-10.1 10.1-2.1 0-4.2-.7-5.9-1.9l-76.6-55.7c-2.1-1.5-3.3-3.9-3.3-6.5V320c0-1.9-.7-3.8-2-5.2L19.8 137.3c-2.4-2.8-3.8-6.3-3.8-10 0-8.4 6.8-15.3 15.3-15.3h150.5l-6.2-7.2c-2.4-2.8-4.6-5.7-6.4-8.8z"
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
                  d="M40 96h124.1c3.2 9 8.2 17.4 14.9 24.7L320 274v16.7l-32 34.8V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6v-74.5L10.6 163.1C-.2 151.4-3 134.5 3.4 119.9S24.1 96 40 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M195.4 55.9C201.7 41.4 216.1 32 232 32h368c15.9 0 30.2 9.4 36.6 23.9s3.6 31.5-7.2 43.2L480 261.5V416c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V261.5L202.6 99.1c-10.7-11.7-13.6-28.6-7.2-43.2"
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
