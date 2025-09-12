import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MegaphoneIcon: React.FC<
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
                  d="M544 32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.7 14.3-32 32-32M64 190.3 480 64v384l-131.1-39.8C338.2 449.5 300.7 480 256 480c-53 0-96-43-96-96 0-11 1.9-21.7 5.3-31.5L64 321.7c-.9 16.9-14.9 30.3-32 30.3-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32 17.1 0 31.1 13.4 32 30.3m239 203.9-91.6-27.8c-2.1 5.4-3.3 11.4-3.3 17.6 0 26.5 21.5 48 48 48 23 0 42.2-16.2 46.9-37.8"
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
                  d="M552 32c-13.3 0-24 10.7-24 24v5.7L48 192.6V184c0-13.3-10.7-24-24-24S0 170.7 0 184v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-8.6l117.6 32.1c-3.6 10.2-5.6 21.1-5.6 32.5 0 53 43 96 96 96 46.9 0 86-33.6 94.3-78.1L528 450.3v5.7c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24m-24 368.6L48 269.7v-27.4l480-130.9zM208 384c0-7.1 1.5-13.8 4.3-19.8l91.5 24.9c-2.6 24.1-23 42.8-47.7 42.8-26.5 0-48-21.5-48-48z"
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
                  d="M560 32c-8.8 0-16 7.2-16 16v11.5l-512 128V176c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16v-11.5l131.7 32.9c-2.4 8.4-3.7 17.4-3.7 26.6 0 53 43 96 96 96 46.2 0 84.7-32.6 93.9-76L544 452.5V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16m-16 387.5-512-128v-71l512-128zM192 384c0-6.5 1-12.9 2.8-18.8l124 31c-5.7 29.5-31.6 51.8-62.8 51.8-35.3 0-64-28.7-64-64"
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
                  d="M560 64v384c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-8.8 7.2-16 16-16s16 7.2 16 16m-48 0v384c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32m-32 1.8-464 116V168c0-4.4-3.6-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8v-13.8l145.6 36.4c-1 5.6-1.6 11.4-1.6 17.4 0 53 43 96 96 96 42.9 0 79.1-28.1 91.5-66.8l-1.7-.5L480 446.2v-16.4l-464-116V198.2l464-116zM176 384c0-4.6.4-9.1 1.1-13.5l154.8 38.7C321.4 441 291.4 464 256 464c-44.2 0-80-35.8-80-80m80-96h-.4.7-.4z"
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
                  d="M64 190.9 512 64v384L64 321.1c-.6 17.1-14.7 30.9-32 30.9-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32 17.3 0 31.4 13.8 32 30.9"
                />
                <path
                  className="aps-icon-foreground"
                  d="M544 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32M160 384c0 53 43 96 96 96 46.8 0 85.8-33.5 94.3-77.8L303.7 389c-2.5 24.2-22.9 43-47.7 43-26.5 0-48-21.5-48-48 0-7.4 1.7-14.5 4.7-20.8L166.2 350c-4 10.6-6.2 22-6.2 34"
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
