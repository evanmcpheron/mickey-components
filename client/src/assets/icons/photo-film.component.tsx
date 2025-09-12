import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PhotoFilmIcon: React.FC<
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
                  d="M256 0h320c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64m220 106.7C471.5 100 464 96 456 96s-15.5 4-20 10.7l-56 84-17.3-21.7c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S270.8 288 280 288h272c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6zM336 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0M64 128h96v288c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-32h160v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64m8 64c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm336 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16"
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
                  d="M256 48c-8.8 0-16 7.2-16 16v224c0 8.7 6.9 15.8 15.6 16l69.1-94.2c4.5-6.2 11.7-9.8 19.4-9.8s14.8 3.6 19.4 9.8l16.5 22.6 56-85.6c4.4-6.8 12-10.9 20.1-10.9s15.7 4.1 20.1 10.9l102.5 157c7.6-1.3 13.3-7.9 13.3-15.8V64c0-8.8-7.2-16-16-16zm-64 16c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64zm-56 64h24v336h192v-80h48v80h48c8.8 0 16-7.2 16-16v-64h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h72m-24 48H64c-8.8 0-16 7.2-16 16v48h64zm0 288v-64H48v48c0 8.8 7.2 16 16 16zM48 352h64v-64H48zM304 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M576 32H256c-17.7 0-32 14.3-32 32v169.4l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0l41.3 41.4L489.4 96c12.5-12.5 32.8-12.5 45.3 0l73.3 73.4V64c0-17.7-14.3-32-32-32m64 176v80.1c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-32 6.7-96-96-116.7 116.6-84.7 84.7H576c17.7 0 32-14.3 32-32v-73.4zM265.4 320l96-96-41.4-41.4-96 96v9.4c0 17.7 14.3 32 32 32zM296 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-168 80h32v32h-32v288h256v-96h32v96h32c17.7 0 32-14.3 32-32v-64h32v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64m-96 96h64v-64H64c-17.7 0-32 14.3-32 32zm0 160v32c0 17.7 14.3 32 32 32h32v-64zm64-32v-96H32v96z"
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
                  d="M256 16c-26.5 0-48 21.5-48 48v196.7l95-95c9.4-9.4 24.6-9.4 33.9 0l47 47 111-111c9.4-9.4 24.6-9.4 33.9 0l95 95V64c0-26.5-21.5-48-48-48zm-48 267.3v4.7c0 26.5 21.5 48 48 48h4.7l112-112-47-47c-3.1-3.1-8.2-3.1-11.3 0zm75.3 52.7H576c26.5 0 48-21.5 48-48v-68.7L517.7 113c-3.1-3.1-8.2-3.1-11.3 0L389.7 229.7zM192 64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64zm96 8a24 24 0 1 0 0 48 24 24 0 1 0 0-48m40 24a40 40 0 1 1-80 0 40 40 0 1 1 80 0m-200 64h32v16h-32v320h256V384h16v16h64v-16h16v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64m-16 240v-56H16v56zm0 16H16v32c0 26.5 21.5 48 48 48h48zm288 80h16c26.5 0 48-21.5 48-48v-32h-64zM112 176H64c-26.5 0-48 21.5-48 48v24h96zm-96 88v64h96v-64z"
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
                  d="M192 64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64zm264 32c-8 0-15.5 4-20 10.7l-56 84-17.3-21.7c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S270.8 288 280 288h272c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144C471.5 100 464 96 456 96m-152 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="m476 106.7 96 144c4.9 7.4 5.4 16.8 1.2 24.6S560.9 288 552 288H280c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84c4.5-6.6 12-10.6 20-10.6s15.5 4 20 10.7M64 128h128v64c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64h160v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64m8 64c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm0 104c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm336 16v16c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16"
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
