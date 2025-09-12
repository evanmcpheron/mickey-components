import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MailboxFlagUpIcon: React.FC<
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
                  d="M400 16c-29.8 0-54.9 20.4-62 48h-92.8c45.2 31.9 74.8 84.5 74.8 144v176c0 24.6-9.2 47-24.4 64H512c35.3 0 64-28.7 64-64V208c0-42.6-18.5-81-48-107.3V80c0-35.3-28.7-64-64-64zm0 208c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v80c0 8.8-7.2 16-16 16M0 208v176c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64V208c0-79.5-64.5-144-144-144S0 128.5 0 208m64 0c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16"
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
                  d="M376 224c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24h64c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-40v88c0 13.3-10.7 24-24 24M144 112c-53 0-96 43-96 96v176c0 8.8 7.2 16 16 16h176V208c0-53-43-96-96-96m107.3 0c22.8 25.5 36.7 59.1 36.7 96v192h224c8.8 0 16-7.2 16-16V208c0-34.9-18.7-65.5-46.6-82.3 9.1-9.9 14.6-23.2 14.6-37.7v-9c47.4 23.6 80 72.5 80 129v176c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V208C0 128.5 64.5 64 144 64h176v48zM104 192h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M352 208V56c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-72v80c0 8.8-7.2 16-16 16s-16-7.2-16-16m96-112V64h-64v32zM320 64v32h-85.5c32.6 26.4 53.5 66.8 53.5 112v176c0 11.7-3.1 22.6-8.6 32H512c17.7 0 32-14.3 32-32V208c0-32.7-14-62-36.3-82.5 2.7-6.6 4.3-13.9 4.3-21.5V88.2C550.6 114 576 158 576 208v176c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V208C0 128.5 64.5 64 144 64zm-96 352c17.7 0 32-14.3 32-32V208c0-61.9-50.1-112-112-112S32 146.1 32 208v176c0 17.7 14.3 32 32 32zM96 208c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16"
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
                  d="M352 200V56c0-13.3 10.7-24 24-24h64c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-72v88c0 4.4-3.6 8-8 8s-8-3.6-8-8m88-104c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v40zm120 112c0-47.7-26-89.2-64.7-111.3.4-2.8.7-5.8.7-8.7v-9c47.4 23.6 80 72.5 80 129v176c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V208C0 128.5 64.5 64 144 64h176v16H210c46.3 23.9 78 72.3 78 128v176c0 19.1-8.4 36.3-21.7 48H512c26.5 0 48-21.5 48-48zM224 432c26.5 0 48-21.5 48-48V208c0-70.7-57.3-128-128-128S16 137.3 16 208v176c0 26.5 21.5 48 48 48zM64 200c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8"
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
                  d="M400 224c-8.8 0-16-7.2-16-16V64H144c79.5 0 144 64.5 144 144v176c0 35.3-28.7 64-64 64h288c35.3 0 64-28.7 64-64V208c0-56.5-32.6-105.5-80-129v17c0 8.8-7.2 16-16 16h-64v96c0 8.8-7.2 16-16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M400 224c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16h-64v96c0 8.8-7.2 16-16 16M0 208C0 128.5 64.5 64 144 64s144 64.5 144 144v176c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 0c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-8.8 0-16 7.2-16 16"
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
