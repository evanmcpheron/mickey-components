import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonHalfDressIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96m8 352V128h6.9c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32zM58.2 182.3c19.9-33.1 55.3-53.5 93.8-54.3v352c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96H70.2c-10.9 0-18.6-10.7-15.2-21.1l38.3-114.8-33.9 56.4c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M154 .4a48 48 0 1 1 12 95.2A48 48 0 1 1 154 .4M176 352V128c30.8.8 59.1 17.7 74.3 44.6l58.5 103.5c6.5 11.5 2.5 26.2-9.1 32.7s-26.2 2.5-32.7-9.1l-43-76.1V488c0 13.3-10.7 24-24 24s-24-10.7-24-24zM62.9 184.6C80 154.3 110.1 134 144 129.1v90.8L111.4 336H144v152c0 13.3-10.7 24-24 24s-24-10.7-24-24V384H69.1c-10.6 0-18.3-10.1-15.4-20.3l36.6-130-37.4 66.1c-6.5 11.5-21.2 15.6-32.7 9.1s-15.6-21.2-9.1-32.7l51.8-91.5z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160.5 80h-.5c-13.3 0-24-10.7-24-24 0-11.6 8.2-21.2 19.1-23.5.4-.1.7-.1 1.1-.2 1.2-.2 2.5-.3 3.8-.3 13.3 0 24 10.7 24 24 0 10.7-7 19.8-16.7 22.9-1.5.5-3 .8-4.6 1-.7.1-1.5.1-2.2.1m12.5 30.5c24.7-5.8 43-28 43-54.5 0-30.9-25.1-56-56-56-5.9 0-11.6.9-16.9 2.6C120.4 9.8 104 31 104 56c0 30.9 25.1 56 56 56 2.9 0 5.8-.2 8.6-.7 1.5-.2 2.9-.5 4.3-.8zM192 320v176c0 8.8 7.2 16 16 16 1 0 2-.1 2.9-.3 1.1-.2 2.2-.5 3.3-1 5.7-2.4 9.8-8.1 9.8-14.7V202.2l49.9 93.4c4.2 7.8 13.9 10.7 21.7 6.6s10.7-13.9 6.6-21.7l-58.9-110.2c-10.8-20.2-29.6-34.6-51.3-39.9V320m-65.7-56.8c4-7.9.7-17.5-7.2-21.5s-17.5-.7-21.5 7.2l-64 128c-2.5 5-2.2 10.9.7 15.6s8.1 7.6 13.6 7.6H96v96c0 8.8 7.2 16 16 16s16-7.2 16-16V400h32v-32H73.9zM160 128c-37.3 0-71.7 20.6-89.3 53.5l-52.8 99c-4.2 7.8-1.2 17.5 6.6 21.7s17.5 1.2 21.7-6.6l52.8-99c12-22.5 35.5-36.6 61-36.6z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 16a40 40 0 1 1 0 80 40 40 0 1 1 0-80m0 96a56 56 0 1 0 0-112 56 56 0 1 0 0 112m-69.3 63.7c9.3-19.4 28.9-31.7 50.4-31.7H152v224H67.1l52.5-157.5c1.4-4.2-.9-8.7-5.1-10.1s-8.7.9-10.1 5.1l-56 168c-.8 2.4-.4 5.1 1.1 7.2s3.9 3.3 6.5 3.3h32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h16v96c0 17.7 14.3 32 32 32s32-14.3 32-32V248c0-4.4-3.6-8-8-8s-8 3.6-8 8v232c0 8.8-7.2 16-16 16s-16-7.2-16-16V376c0-4.4-3.6-8-8-8h-8V144h10.9c21.5 0 41.1 12.3 50.4 31.7l67.5 139.8c1.9 4 6.7 5.6 10.7 3.7s5.6-6.7 3.7-10.7l-67.5-139.8c-12-24.9-37.2-40.7-64.8-40.7h-37.8c-27.6 0-52.8 15.8-64.8 40.7L8.8 308.5c-1.9 4-.3 8.8 3.7 10.7s8.8.3 10.7-3.7zM104 480v-96h32v96c0 8.8-7.2 16-16 16s-16-7.2-16-16"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M160 128v224h8v128c0 17.7 14.3 32 32 32s32-14.3 32-32V256.9l28.6 47.5c9.1 15.1 28.8 20 43.9 10.9s20-28.8 10.9-43.9l-58.3-97c-17.4-28.9-48.6-46.6-82.3-46.6H160zm0-32c26.5 0 48-21.5 48-48S186.5 0 160 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 96V0c-26.5 0-48 21.5-48 48s21.5 48 48 48m0 32h-5.8c-39.3 0-75.7 20.6-96 54.3L4.6 271.5c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9l33.9-56.3L55 362.9c-3.4 10.4 4.3 21.1 15.2 21.1H88v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h8z"
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
