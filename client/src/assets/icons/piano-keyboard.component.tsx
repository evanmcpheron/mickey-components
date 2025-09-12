import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PianoKeyboardIcon: React.FC<
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
                  d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm448 160v160h-80v-68.3c9.6-5.5 16-15.9 16-27.7v-64zM400 384h-96v-68.3c9.6-5.5 16-15.9 16-27.7v-64h64v64c0 11.8 6.4 22.2 16 27.7zm-128 0h-96v-68.3c9.6-5.5 16-15.9 16-27.7v-64h64v64c0 11.8 6.4 22.2 16 27.7zm-128 0H64V224h64v64c0 11.8 6.4 22.2 16 27.7z"
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
                  d="M528 224v160c0 8.8-7.2 16-16 16h-80v-84.3c9.6-5.5 16-15.9 16-27.7v-64zM400 400h-96v-84.3c9.6-5.5 16-15.9 16-27.7v-64h64v64c0 11.8 6.4 22.2 16 27.7zm-128 0h-96v-84.3c9.6-5.5 16-15.9 16-27.7v-64h64v64c0 11.8 6.4 22.2 16 27.7zm-128 0H64c-8.8 0-16-7.2-16-16V224h80v64c0 11.8 6.4 22.2 16 27.7zm384-224H48v-48c0-8.8 7.2-16 16-16h448c8.8 0 16 7.2 16 16zm48 0v-48c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V176"
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
                  d="M448 224v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64zm-32 109.3V416H304v-82.7c18.6-6.6 32-24.4 32-45.3v-64h48v64c0 20.9 13.4 38.7 32 45.3m32 82.7v-82.7c18.6-6.6 32-24.4 32-45.3v-64h64v160c0 17.7-14.3 32-32 32zm-16 32h80c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h368m-160-32H160v-82.7c18.6-6.6 32-24.4 32-45.3v-64h48v64c0 20.9 13.4 38.7 32 45.3zm-144 0H64c-17.7 0-32-14.3-32-32V224h64v64c0 20.9 13.4 38.7 32 45.3zm16-112c-8.8 0-16-7.2-16-16v-64h32v64c0 8.8-7.2 16-16 16m144 0c-8.8 0-16-7.2-16-16v-64h32v64c0 8.8-7.2 16-16 16m176-112H32v-64c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v64z"
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
                  d="M448 224v72c0 13.3-10.7 24-24 24s-24-10.7-24-24v-72zm-32 111.2V432H296v-96.8c18.3-3.7 32-19.8 32-39.2v-72h56v72c0 19.4 13.7 35.5 32 39.2m16 96.8v-96.8c18.3-3.7 32-19.8 32-39.2v-72h96v160c0 26.5-21.5 48-48 48zm-152 0H160v-96.8c18.3-3.7 32-19.8 32-39.2v-72h56v72c0 19.4 13.7 35.5 32 39.2zm-136 0H64c-26.5 0-48-21.5-48-48V224h96v72c0 19.4 13.7 35.5 32 39.2zm8-112c-13.3 0-24-10.7-24-24v-72h48v72c0 13.3-10.7 24-24 24m136 0c-13.3 0-24-10.7-24-24v-72h48v72c0 13.3-10.7 24-24 24m168-112H16v-80c0-26.5 21.5-48 48-48h448c26.5 0 48 21.5 48 48v80zm120 0v-80c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V208"
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
                  d="M0 224v160c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V224h-64v160h-80v-68.3c-4.7 2.7-10.2 4.3-16 4.3s-11.3-1.6-16-4.3V384h-96v-68.3c-4.7 2.7-10.2 4.3-16 4.3s-11.3-1.6-16-4.3V384h-96v-68.3c-4.7 2.7-10.2 4.3-16 4.3s-11.3-1.6-16-4.3V384H64V224z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 64C28.7 64 0 92.7 0 128v96h128v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h128v-96c0-35.3-28.7-64-64-64z"
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
