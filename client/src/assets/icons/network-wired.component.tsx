import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const NetworkWiredIcon: React.FC<
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
                  d="M256 64h128v64H256zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-48v-32h256v32h-48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-48v-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352v-32h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM96 448v-64h128v64zm320-64h128v64H416z"
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
                  d="M400 48v96H240V48zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h56v40H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h112v40H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-56v-40h272v40h-56c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-56v-40h112c13.3 0 24-10.7 24-24s-10.7-24-24-24H344v-40h56c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM80 368h160v96H80zm480 0v96H400v-96z"
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
                  d="M400 32c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16zm-64 160h64c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h64v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h128v48H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-64v-48h288v48h-64c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-64v-48h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H336zm160 160h64c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H400c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h96m-320 0h64c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h96"
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
                  d="M400 16c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H240c-17.7 0-32-14.3-32-32V48c0-17.7 14.3-32 32-32zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h72v56H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h144v56H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-72v-56h304v56h-72c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-72v-56h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H328v-56h72c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM80 336h160c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32m480 0c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H400c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32z"
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
                  d="M352 224h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v32h-64v-32H192v32h-64v-32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h256v-32h64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 64h128v64H256zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM96 384h128v64H96zm-16-64c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48zm336 128v-64h128v64zm-64-80v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48H400c-26.5 0-48 21.5-48 48"
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
