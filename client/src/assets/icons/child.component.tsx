import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChildIcon: React.FC<
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
                  d="M96 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0m48 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V287.8L59.1 321c-9.4 15-29.2 19.4-44.1 10s-19.5-29.1-10.1-44l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6l39.9 63.4c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10l-21-33.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z"
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
                  d="M160 96a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-96a72 72 0 1 1 0 144 72 72 0 1 1 0-144m-32 214v122h64V214.4c-10.2-4.2-21.2-6.4-32.4-6.4-11 0-21.6 2.1-31.6 6m0 170v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V257.9l-36.3 51.9c-7.6 10.9-22.6 13.5-33.4 5.9s-13.6-22.6-6-33.5L50.1 217c25-35.7 65.9-57 109.5-57 43.2 0 83.7 20.8 108.8 56l47.1 66c7.7 10.8 5.2 25.8-5.6 33.5s-25.8 5.2-33.5-5.6l-36.4-51V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V384z"
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
                  d="M128 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M73.9 240.2c1.9-3.1 3.9-6 6.1-8.9V496c0 8.8 7.2 16 16 16s16-7.2 16-16V384h96v112c0 8.8 7.2 16 16 16s16-7.2 16-16V231.3c2.2 2.8 4.2 5.8 6.1 8.9l44.3 72.2c4.6 7.5 14.5 9.9 22 5.3s9.9-14.5 5.3-22l-44.3-72.2C249.2 184 206.3 160 160 160s-89.2 24-113.4 63.5L2.4 295.6c-4.6 7.5-2.3 17.4 5.3 22s17.4 2.3 22-5.3L74 240.1zM208 352h-96V204.1c14.5-7.8 31-12.1 48-12.1s33.5 4.3 48 12.1z"
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
                  d="M160 112a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128m-1.5 176c-32.5 0-62.3 17.9-77.6 46.5l-49.8 93.3c-2.1 3.9-6.9 5.4-10.8 3.3s-5.4-6.9-3.3-10.8L66.7 215c18.1-33.9 53.3-55 91.7-55h3c38.4 0 73.6 21.1 91.7 55l49.8 93.2c2.1 3.9.6 8.7-3.3 10.8s-8.7.6-10.8-3.3L239 222.5c-15.2-28.6-45-46.5-77.5-46.5zM96 288v192c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-17.7 14.3-32 32-32s32 14.3 32 32v80c0 8.8 7.2 16 16 16s16-7.2 16-16V288c0-4.4 3.6-8 8-8s8 3.6 8 8v192c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80c0-8.8-7.2-16-16-16s-16 7.2-16 16v80c0 17.7-14.3 32-32 32s-32-14.3-32-32V288c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M96 64a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M144 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V287.8L59.1 321c-9.4 15-29.2 19.4-44.1 10s-19.5-29.1-10.1-44l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6l39.9 63.4c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10l-21-33.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z"
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
