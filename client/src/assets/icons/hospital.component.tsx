import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HospitalIcon: React.FC<
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
                  d="M192 48c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v464h-80v-80c0-26.5-21.5-48-48-48s-48 21.5-48 48v80h-80zM48 96h112v416H48c-26.5 0-48-21.5-48-48V320h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0v-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0v-48c0-26.5 21.5-48 48-48m544 0c26.5 0 48 21.5 48 48v48h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v144c0 26.5-21.5 48-48 48H480V96zM312 64c-8.8 0-16 7.2-16 16v24h-24c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-24h24c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-24V80c0-8.8-7.2-16-16-16z"
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
                  d="M232 0c-39.8 0-72 32.2-72 72v8H72c-39.8 0-72 32.2-72 72v288c0 39.8 32.2 72 72 72h496c39.8 0 72-32.2 72-72V152c0-39.8-32.2-72-72-72h-88v-8c0-39.8-32.2-72-72-72zm248 128h88c13.3 0 24 10.7 24 24v40h-56c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v48h-56c-13.3 0-24 10.7-24 24s10.7 24 24 24h56v104c0 13.3-10.7 24-24 24h-88V128m-408 0h88v336H72c-13.2 0-24-10.7-24-24V336h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H48v-48h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H48v-40c0-13.3 10.7-24 24-24m136-56c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24v392h-64v-64c0-26.5-21.5-48-48-48s-48 21.5-48 48v64h-64zm88 24v24h-24c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-24h24c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-24V96c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16"
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
                  d="M160 64c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v32h96c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h96zm320 272v144h96c17.7 0 32-14.3 32-32V320h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-64h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-32c0-17.7-14.3-32-32-32h-96zM160 128H64c-17.7 0-32 14.3-32 32v32h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v64h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v128c0 17.7 14.3 32 32 32h96zm288 208V64c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32v416h64v-64c0-35.3 28.7-64 64-64s64 28.7 64 64v64h64zm-96 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v64h64zM304 64h32c13.3 0 24 10.7 24 24v16h16c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24h-16v16c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-16h-16c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h16V88c0-13.3 10.7-24 24-24m8 56c0 8.8-7.2 16-16 16h-24v16h24c8.8 0 16 7.2 16 16v24h16v-24c0-8.8 7.2-16 16-16h24v-16h-24c-8.8 0-16-7.2-16-16V96h-16z"
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
                  d="M160 64c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v32h104c30.9 0 56 25.1 56 56v304c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V152c0-30.9 25.1-56 56-56h104zm304 0c0-26.5-21.5-48-48-48H224c-26.5 0-48 21.5-48 48v432h80v-80c0-35.3 28.7-64 64-64s64 28.7 64 64v80h80V64m120 48H480v384h104c22.1 0 40-17.9 40-40V304H520c-4.4 0-8-3.6-8-8s3.6-8 8-8h104v-80H520c-4.4 0-8-3.6-8-8s3.6-8 8-8h104v-40c0-22.1-17.9-40-40-40m-424 0H56c-22.1 0-40 17.9-40 40v40h104c4.4 0 8 3.6 8 8s-3.6 8-8 8H16v80h104c4.4 0 8 3.6 8 8s-3.6 8-8 8H16v152c0 22.1 17.9 40 40 40h104zm208 304c0-26.5-21.5-48-48-48s-48 21.5-48 48v80h96zM312 56h16c13.3 0 24 10.7 24 24v16h16c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24h-16v16c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-16h-16c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h16V80c0-13.3 10.7-24 24-24m-8 24v24c0 4.4-3.6 8-8 8h-24c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h24c4.4 0 8 3.6 8 8v24c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-24c0-4.4 3.6-8 8-8h24c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-24c-4.4 0-8-3.6-8-8V80c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8"
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
                  d="M48 96c-26.5 0-48 21.5-48 48v48h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v64h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v144c0 26.5 21.5 48 48 48h112V96zm544 0H480v416h112c26.5 0 48-21.5 48-48V320h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-64h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-48c0-26.5-21.5-48-48-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M208 0c-26.5 0-48 21.5-48 48v464h112v-80c0-26.5 21.5-48 48-48s48 21.5 48 48v80h112V48c0-26.5-21.5-48-48-48zm432 224v-32h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16zm0 96v-32h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16zM80 224c8.8 0 16-7.2 16-16s-7.2-16-16-16H0v32zm0 96c8.8 0 16-7.2 16-16s-7.2-16-16-16H0v32zM312 64h16c8.8 0 16 7.2 16 16v24h24c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-24v24c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-24h-24c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h24V80c0-8.8 7.2-16 16-16"
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
