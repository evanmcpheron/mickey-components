import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CompassDraftingIcon: React.FC<
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
                  d="M352 96c0 14.3-3.1 27.9-8.8 40.2l52.8 91.2c-23.7 25.3-54.2 44.1-88.5 53.6L256 192l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5 70.7 0 133.8-32.7 174.9-84 11.1-13.8 31.2-16 45-5s16 31.2 5 45c-52.9 65.8-134 108-225 108-35.4 0-69.4-6.4-100.7-18.1l-56.6 97.8c-4.7 8.1-11.7 14.7-20.1 18.9l-55.4 27.7c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496v-55.4c0-8.4 2.2-16.7 6.5-24.1l60-103.7c-12.8-11.2-24.7-23.5-35.3-36.8-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9C163.2 124 160 110.4 160 96c0-53 43-96 96-96s96 43 96 96m21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1V496c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6.7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9zM256 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M304 96a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-19.6 91.7c-9 2.8-18.5 4.3-28.4 4.3s-19.4-1.5-28.4-4.3l-69.5 118.7C187.9 320.3 221 328 256 328c85.8 0 160.8-46.6 201-116 6.6-11.5 21.3-15.4 32.8-8.8s15.4 21.3 8.8 32.8C450.2 319.6 359.7 376 256 376c-43.8 0-85.3-10.1-122.2-28L44.7 500.1c-6.7 11.4-21.4 15.3-32.8 8.6s-15.3-21.4-8.6-32.8l89.3-152.5c-32.2-23.2-59.2-53-79.1-87.4-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8c15.8 27.2 36.9 51 61.9 69.7l69.8-119.2C170.2 145.2 160 121.8 160 96c0-53 43-96 96-96s96 43 96 96c0 25.8-10.2 49.2-26.7 66.5l53.5 91.4c-12.6 9.8-26.4 18.1-41.1 24.7l-53.2-90.9zm224.3 288.2c6.7 11.4 2.9 26.1-8.6 32.8s-26.1 2.9-32.8-8.6l-72.9-124.4c14.4-7.1 28.2-15.4 41.2-24.6l73 124.8z"
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
                  d="M320 96a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-21.7 86.2c-12.8 6.3-27.1 9.8-42.3 9.8s-29.5-3.5-42.3-9.8l-71.5 125.2C176.1 325.6 214.8 336 256 336c88.8 0 166.4-48.2 207.9-120 4.4-7.6 14.2-10.3 21.9-5.8s10.3 14.2 5.8 21.9c-47 81.3-134.9 136-235.6 136-47 0-91.1-11.9-129.7-32.8L29.9 503.9c-4.4 7.7-14.2 10.3-21.8 6s-10.3-14.2-6-21.8l97-169.8c-32.1-22.7-59-52.1-78.7-86.2-4.4-7.6-1.8-17.4 5.8-21.9s17.4-1.8 21.9 5.8c16.9 29.2 39.8 54.6 67 74.3l72.5-126.9C170.5 146.1 160 122.3 160 96c0-53 43-96 96-96s96 43 96 96c0 26.3-10.5 50.1-27.6 67.4l48.4 84.7c4.4 7.7 1.7 17.4-6 21.8s-17.4 1.7-21.8-6zM409 375.9c-4.4-7.7-1.7-17.4 6-21.8s17.4-1.7 21.8 6l73.1 128c4.4 7.7 1.7 17.4-6 21.8s-17.4 1.7-21.8-6z"
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
                  d="M320 80a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-22.7 68.5c-12 7.3-26.2 11.5-41.3 11.5s-29.3-4.2-41.3-11.5l-88.9 160c37.4 22.6 81.2 35.5 128 35.5 91.8 0 171.9-49.9 214.8-124 2.2-3.8 7.1-5.1 10.9-2.9s5.1 7.1 2.9 10.9c-45.6 78.9-130.9 132-228.7 132-49.6 0-96.1-13.7-135.8-37.5L15 507.9c-2.1 3.9-7 5.3-10.9 3.1s-5.3-7-3.1-10.9l103.5-186.3c-32.4-22.3-59.7-51.6-79.4-85.8-2.2-3.8-.9-8.7 2.9-10.9s8.7-.9 10.9 2.9c18.3 31.7 43.5 58.9 73.4 79.8L201 140.1l.7-1.3C185.9 124.2 176 103.2 176 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 23.2-9.9 44.2-25.7 58.8l.7 1.3 62.2 112c2.1 3.9.8 8.7-3.1 10.9s-8.7.8-10.9-3.1l-61.8-111.4zm124.2 223.4c-2.1-3.9-.8-8.7 3.1-10.9s8.7-.8 10.9 3.1l75.6 136c2.1 3.9.8 8.7-3.1 10.9s-8.7.8-10.9-3.1z"
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
                  d="m99.3 256.1-32.8 56.8c-12.8-11.3-24.7-23.6-35.3-36.9-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1zm55.9 109.8 32.7-56.4c21.5 6.8 44.3 10.5 68.1 10.5 70.7 0 133.8-32.7 174.9-84 11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M343.2 136.2c5.6-12.2 8.8-25.8 8.8-40.2 0-53-43-96-96-96s-96 43-96 96c0 14.3 3.1 27.9 8.8 40.2L6.5 416.5C2.2 423.9 0 432.2 0 440.6V496c0 5.5 2.9 10.7 7.6 13.6s10.6 3.2 15.6.7l55.4-27.7c8.4-4.2 15.4-10.8 20.1-18.9L256 192l68 117.5c33.7-10.7 63.9-29.2 88.6-53.4zM224 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m132.7 269.9 56.6 97.8c4.7 8.1 11.7 14.7 20.1 18.9l55.4 27.7c5 2.5 10.9 2.2 15.6-.7s7.6-8.1 7.6-13.6v-55.4c0-8.4-2.2-16.7-6.5-24.1l-60-103.7c-25.9 22.7-55.9 40.8-88.8 53z"
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
