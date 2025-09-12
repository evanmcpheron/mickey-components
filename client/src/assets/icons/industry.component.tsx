import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const IndustryIcon: React.FC<
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
                  d="M64 32c-17.7 0-32 14.3-32 32v368c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4v-63.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32z"
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
                  d="M88 80c-4.4 0-8 3.6-8 8v320c0 13.3 10.7 24 24 24h368c13.3 0 24-10.7 24-24V155.9l-139.1 89c-7.4 4.7-16.8 5-24.5.8s-12.5-12.3-12.5-21.1v-70.9l-139.8 81.7c-7.4 4.3-16.6 4.4-24 .1s-12-12.2-12-20.8V88c0-4.4-3.6-8-8-8zm-56 8c0-30.9 25.1-56 56-56h48c30.9 0 56 25.1 56 56v84.9l103.8-60.6c32-18.7 72.2 4.4 72.2 41.5v27l102.1-65.4c32-20.4 73.9 2.5 73.9 40.5V408c0 39.8-32.2 72-72 72H104c-39.8 0-72-32.2-72-72V88"
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
                  d="M80 64c-8.8 0-16 7.2-16 16v336c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V158.9c0-6.5-7.4-10.3-12.7-6.5l-138 99.3c-4.9 3.5-11.3 4-16.6 1.3s-8.7-8.2-8.7-14.2v-82c0-6.4-7.1-10.2-12.4-6.7l-138.7 92.5c-4.9 3.3-11.2 3.6-16.4.8s-8.5-8.2-8.5-14.1V80c0-8.8-7.2-16-16-16zM32 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v119.4l113.8-75.9c26.6-17.7 62.2 1.3 62.2 33.3v50.6l112.6-81.1c26.5-19.1 63.4-.1 63.4 32.5V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V80"
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
                  d="M72 48c-13.3 0-24 10.7-24 24v352c0 22.1 17.9 40 40 40h400c22.1 0 40-17.9 40-40V152.9c0-12.2-13.2-19.9-23.8-14l-140.3 78.6c-2.5 1.4-5.5 1.4-8-.1s-4-4.1-4-6.9v-56.7c0-12.3-13.4-20-24.1-13.8L188 221.6c-2.5 1.4-5.5 1.5-8 0s-4-4.1-4-6.9V72c0-13.3-10.7-24-24-24zM32 72c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40v128.7l127.9-74.6c21.3-12.4 48.1 2.9 48.1 27.6v43.1L496.4 125c21.3-11.9 47.6 3.5 47.6 27.9V424c0 30.9-25.1 56-56 56H88c-30.9 0-56-25.1-56-56V72"
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
                  d="M64 32c-17.7 0-32 14.3-32 32v368c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V155.6L352 265.4V155.6L160 265.4V64c0-17.7-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M372.8 116.1c6.6 11.5 2.6 26.2-8.9 32.7L160 265.4v-55.3l180.1-102.9c11.5-6.6 26.2-2.6 32.7 8.9m192 0c6.6 11.5 2.6 26.2-8.9 32.7L352 265.4v-55.3l180.1-102.9c11.5-6.6 26.2-2.6 32.7 8.9"
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
