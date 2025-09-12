import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonIcon: React.FC<
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
                  d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m40 304v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.6 47.6c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352z"
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
                  d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m32 128.1V304h32V176.1c-.7 0-1.5-.1-2.3-.1h-27.4c-.8 0-1.5 0-2.3.1m0 175.9v136c0 13.3-10.7 24-24 24s-24-10.7-24-24V223.6l-43.1 76.2c-6.5 11.5-21.2 15.6-32.7 9.1s-15.6-21.2-9.1-32.7l58.6-103.5c15.6-27.6 44.9-44.7 76.6-44.7h27.5c31.7 0 61 17.1 76.6 44.7l58.5 103.5c6.5 11.5 2.5 26.2-9.1 32.7s-26.2 2.5-32.7-9.1L224 223.6V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V352z"
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
                  d="M160 80a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-32 164v156h64V164c-6-2.6-12.5-4-19.3-4h-25.4c-6.8 0-13.3 1.4-19.3 4m0 188v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V202.1l-49.9 93.4c-4.2 7.8-13.9 10.7-21.7 6.6s-10.7-13.9-6.6-21.7l58.9-110.1c13.9-26 41-42.3 70.6-42.3h25.4c29.5 0 56.7 16.3 70.6 42.3l58.8 110.2c4.2 7.8 1.2 17.5-6.6 21.7s-17.5 1.2-21.7-6.6L224 202.2V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V352z"
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
                  d="M160 96a40 40 0 1 0 0-80 40 40 0 1 0 0 80m0-96a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-18.9 144c-21.5 0-41.1 12.3-50.4 31.7L23.2 315.5c-1.9 4-6.7 5.6-10.7 3.7s-5.6-6.7-3.7-10.7l67.5-139.8c12-24.9 37.2-40.7 64.8-40.7h37.8c27.6 0 52.8 15.8 64.8 40.7l67.5 139.8c1.9 4 .3 8.8-3.7 10.7s-8.8.3-10.7-3.7l-67.5-139.8c-9.3-19.4-28.9-31.7-50.4-31.7zM104 248v232c0 8.8 7.2 16 16 16s16-7.2 16-16V360c0-13.3 10.7-24 24-24s24 10.7 24 24v120c0 8.8 7.2 16 16 16s16-7.2 16-16V248c0-4.4 3.6-8 8-8s8 3.6 8 8v232c0 17.7-14.3 32-32 32s-32-14.3-32-32V360c0-4.4-3.6-8-8-8s-8 3.6-8 8v120c0 17.7-14.3 32-32 32s-32-14.3-32-32V248c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="m88 256.9-28.6 47.6c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16v128c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
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
