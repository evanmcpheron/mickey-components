import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BucketIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 152v8H48v-8C48 68.1 116.1 0 200 0h48c83.9 0 152 68.1 152 152v8h-48v-8c0-57.4-46.6-104-104-104h-48C142.6 48 96 94.6 96 152M0 224c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32h-5.1l-22.4 213c-2.6 24.4-23.2 43-47.7 43H107.2c-24.6 0-45.2-18.5-47.7-43L37.1 256H32c-17.7 0-32-14.3-32-32"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 152v8H48v-8C48 68.1 116.1 0 200 0h48c83.9 0 152 68.1 152 152v8h-48v-8c0-57.4-46.6-104-104-104h-48C142.6 48 96 94.6 96 152M0 216c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24h-6l-28.7 230c-3 24-23.4 42-47.6 42H106.4c-24.2 0-44.6-18-47.6-42L30 240h-6c-13.3 0-24-10.7-24-24m78.4 24 28 224h235.2l28-224z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 144c0 8.8-7.2 16-16 16s-16-7.2-16-16C64 64.5 128.5 0 208 0h32c79.5 0 144 64.5 144 144 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9-50.1-112-112-112h-32C146.1 32 96 82.1 96 144M0 208c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16h-12l-30.7 246c-3 24-23.4 42-47.6 42H106.4c-24.2 0-44.6-18-47.6-42L28 224H16c-8.8 0-16-7.2-16-16m60.2 16 30.3 242c1 8 7.8 14 15.9 14h235.2c8.1 0 14.9-6 15.9-14l30.2-242z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 136v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24C64 60.9 124.9 0 200 0h48c75.1 0 136 60.9 136 136v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-66.3-53.7-120-120-120h-48C133.7 16 80 69.7 80 136M0 200c0-4.4 3.6-8 8-8h432c4.4 0 8 3.6 8 8s-3.6 8-8 8h-18l-32.7 262c-3 24-23.4 42-47.6 42H106.4c-24.2 0-44.6-18-47.6-42L26 208H8c-4.4 0-8-3.6-8-8m42.1 8 32.5 260c2 16 15.6 28 31.8 28h235.2c16.1 0 29.8-12 31.8-28l32.5-260z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M200 48C142.6 48 96 94.6 96 152v40H48v-40C48 68.1 116.1 0 200 0h48c83.9 0 152 68.1 152 152v40h-48v-40c0-57.4-46.6-104-104-104z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32h5.1l22.4 213c2.6 24.4 23.2 43 47.7 43h233.6c24.6 0 45.2-18.5 47.7-43l22.4-213h5.1c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
