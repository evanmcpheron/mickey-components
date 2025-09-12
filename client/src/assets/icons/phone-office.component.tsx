import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PhoneOfficeIcon: React.FC<
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
                  d="M128 0c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zM64 32C28.7 32 0 60.7 0 96v352c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H256v352c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64zm256 96c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32zm32 192a32 32 0 1 1 0-64 32 32 0 1 1 0 64m160-32a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32 160a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-96-32a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
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
                  d="M160 48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zm-55.4-16c11-19.1 31.7-32 55.4-32h48c23.7 0 44.4 12.9 55.4 32H512c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM96 80H64c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V192H360c-22.1 0-40-17.9-40-40V80h-48v272c0 35.3-28.7 64-64 64h-48c-35.3 0-64-28.7-64-64zm272 0v64h160V96c0-8.8-7.2-16-16-16zm16 192a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128-128a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="M176 32c17.7 0 32 14.3 32 32v304c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM144 0c-23.7 0-44.4 12.9-55.4 32H64C28.7 32 0 60.7 0 96v352c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H231.4c-11-19.1-31.7-32-55.4-32zm144 64v64c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V64c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h16v304c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64V64zm192 0v64H320V64zM352 240a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-48a48 48 0 1 0 0 96 48 48 0 1 0 0-96m0 160a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-48 16a48 48 0 1 0 96 0 48 48 0 1 0-96 0m192-128a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-48a48 48 0 1 0 0 96 48 48 0 1 0 0-96m0 160a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-48 16a48 48 0 1 0 96 0 48 48 0 1 0-96 0"
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
                  d="M176 16c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM144 0c-23.7 0-44.4 12.9-55.4 32H64C28.7 32 0 60.7 0 96v352c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H231.4c-11-19.1-31.7-32-55.4-32zM64 48h18c-1.3 5.1-2 10.5-2 16v320c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64V64c0-5.5-.7-10.9-2-16h274c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48m272 64h128c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16m-32 16v48c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32H336c-17.7 0-32 14.3-32 32m0 168a40 40 0 1 0 80 0 40 40 0 1 0-80 0m40 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48m112-64a40 40 0 1 0 0 80 40 40 0 1 0 0-80m24 40a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-64 112a40 40 0 1 0 80 0 40 40 0 1 0-80 0m40 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-112-64a40 40 0 1 0 0 80 40 40 0 1 0 0-80m24 40a24 24 0 1 1-48 0 24 24 0 1 1 48 0"
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
                  d="M128 0c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm192 288a32 32 0 1 0 64 0 32 32 0 1 0-64 0m128 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0m32 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-160 32a32 32 0 1 0 64 0 32 32 0 1 0-64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 32h32v352c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V32h288c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64m288 64c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm-32 192a32 32 0 1 0 64 0 32 32 0 1 0-64 0m160-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-32 160a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-96-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64"
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
