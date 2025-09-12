import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoxesPackingIcon: React.FC<
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
                  d="M256 48c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H381.3c1.8-5 2.7-10.4 2.7-16V253.3c18.6-6.6 32-24.4 32-45.3v-32c0-26.5-21.5-48-48-48H256zm315.3 299.3c6.2-6.2 6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7V432c0 8.8 7.2 16 16 16s16-7.2 16-16V310.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0M0 176c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zm352 80v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V256zm-208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M592 48H304v80h-48V48c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H381.3c1.8-5 2.7-10.4 2.7-16v-32h208zm-31 263c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23V392c0 13.3-10.7 24-24 24s-24-10.7-24-24v-70.1l-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l64-64c9.4-9.4 24.6-9.4 33.9 0l64 64zM48 208v48h288v-48zM0 272v-80c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v80c0 17.7-14.3 32-32 32v176c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V304c-17.7 0-32-14.3-32-32m80 32v160h224V304zm72 32h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M592 32H304c-8.8 0-16 7.2-16 16v80h-32V48c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H381.3c1.8-5 2.7-10.4 2.7-16v-16h208c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16m-36.7 284.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L496 302.6V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V302.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l64-64c6.2-6.2 16.4-6.2 22.6 0zM352 192H32v64h320zM0 256v-64c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32m64 32v192h256V288zm80 32h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M592 16H304c-17.7 0-32 14.3-32 32v80h-16V48c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H381.3c1.8-5 2.7-10.4 2.7-16h208c17.7 0 32-14.3 32-32V48c0-17.7-14.3-32-32-32m-42.3 306.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L488 283.3V440c0 4.4-3.6 8-8 8s-8-3.6-8-8V283.3l-50.3 50.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l64-64c3.1-3.1 8.2-3.1 11.3 0zM32 176c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm0 112c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm304 0h-64v24c0 13.3-10.7 24-24 24H136c-13.3 0-24-10.7-24-24v-24H48v192c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16zm-208 0v24c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-24z"
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
                  d="M304 0c-26.5 0-48 21.5-48 48v80h112c26.5 0 48 21.5 48 48v32c0 20.9-13.4 38.7-32 45.3V496c0 5.6-1 11-2.7 16H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm267.3 324.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L512 310.6V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V310.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l64-64c6.2-6.2 16.4-6.2 22.6 0z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M16 160h352c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16m16 96h320v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm96 80c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16"
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
