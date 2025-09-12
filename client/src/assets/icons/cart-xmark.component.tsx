import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CartXmarkIcon: React.FC<
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
                  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h45.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5l-5.4-28.5h288.5c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32h-411C111 12.8 91.6 0 69.5 0zm152 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96m336-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M395.4 128.9 364.3 160l31.1 31.1c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0L336 188.3l-31.1 31.1c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3l31.1-31.1-31.1-31.1c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l31.1 31.1 31.1-31.1c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3"
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
                  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h45.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5l-5.4-28.5h288.5c32.6 0 61.1-21.8 69.5-53.3l46.5-172.5c3.4-12.8-4.1-26-16.9-29.4s-26 4.1-29.4 16.9l-46.5 172.5c-2.8 10.5-12.3 17.8-23.2 17.8H161.6l-37-194.5C119.5 19.1 96.4 0 69.5 0zm152 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96m336-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M257.8 65.8c-9.4 9.4-9.4 24.6 0 33.9l28.3 28.3-28.3 28.3c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l28.3-28.3 28.3 28.3c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L353.9 128l28.3-28.3c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L320 94.1l-28.3-28.3c-9.4-9.4-24.6-9.4-33.9 0"
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
                  d="M0 16C0 7.2 7.2 0 16 0h37.9c22.8 0 42.5 16 47 38.4L145.4 256h321.1c14.7 0 27.5-10 31-24.2l47-187.7c2.1-8.6 10.8-13.8 19.4-11.6s13.8 10.8 11.6 19.4l-46.9 187.6c-7.1 28.5-32.7 48.5-62.1 48.5H152l7.9 38.4c3 14.9 16.1 25.6 31.4 25.6H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H191.2c-30.4 0-56.6-21.4-62.7-51.2l-58.9-288C68 37.3 61.5 32 53.9 32H16C7.2 32 0 24.8 0 16m192 464a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112m280 56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0M379.3 91.3 342.6 128l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L320 150.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l36.7-36.7-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l36.7 36.7 36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"
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
                  d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8h37.7c11.4 0 21.3 8.1 23.5 19.4l59.4 303.4c5.1 26.3 28.2 45.2 55 45.2H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H183.5c-19.1 0-35.6-13.5-39.3-32.3l-9.3-47.7h339c26 0 48.6-17.9 54.5-43.3l47.4-202.9c1-4.3-1.7-8.6-6-9.6s-8.6 1.7-9.6 6l-47.3 202.9c-4.2 18.1-20.4 30.9-39 30.9H131.8L84.9 32.3C81.2 13.5 64.8 0 45.7 0zm136 464a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m240-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96M257.8 81.8c-3.1 3.1-3.1 8.2 0 11.3l50.9 50.9-50.9 50.9c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l50.9-50.9 50.9 50.9c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L331.3 144l50.9-50.9c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L320 132.7l-50.9-50.9c-3.1-3.1-8.2-3.1-11.3 0"
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
                  d="M459.2 288H170.7L124.5 45.5c-.9-4.8-2.4-9.3-4.4-13.5h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3m-63.8-159.1c7.8-7.8 7.8-20.5 0-28.3s-20.5-7.8-28.3 0L336 131.7l-31.1-31.1c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3l31.1 31.1-31.1 31.1c-7.8 7.8-7.8 20.5 0 28.3s20.5 7.8 28.3 0l31.1-31.1 31.1 31.1c7.8 7.8 20.5 7.8 28.3 0s7.8-20.5 0-28.3L364.3 160z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h45.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5l-51.6-271C119.5 19.1 96.4 0 69.5 0zm152 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96m336-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M395.4 128.9c7.8-7.8 7.8-20.5 0-28.3s-20.5-7.8-28.3 0L336 131.7l-31.1-31.1c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3l31.1 31.1-31.1 31.1c-7.8 7.8-7.8 20.5 0 28.3s20.5 7.8 28.3 0l31.1-31.1 31.1 31.1c7.8 7.8 20.5 7.8 28.3 0s7.8-20.5 0-28.3L364.3 160z"
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
