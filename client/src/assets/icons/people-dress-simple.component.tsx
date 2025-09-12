import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PeopleDressSimpleIcon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 128a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-15.7 32c-28.6 0-53.7 18.9-61.5 46.4L11.7 343.2C5.8 363.7 21.2 384 42.4 384H64v80c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-80h21.6c21.3 0 36.6-20.3 30.8-40.8l-39.1-136.8c-7.9-27.5-33-46.4-61.5-46.4zM384 128a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-15.7 32c-28.6 0-53.7 18.9-61.5 46.4l-39.1 136.8c-5.8 20.4 9.5 40.8 30.8 40.8H320v80c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-80h21.6c21.3 0 36.6-20.3 30.8-40.8l-39.1-136.8c-7.8-27.5-33-46.4-61.5-46.4z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 64a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-79.7 144h31.4c7.1 0 13.4 4.7 15.4 11.6L192.4 336H63.6l33.3-116.4c2-6.9 8.2-11.6 15.4-11.6m0-48c-28.6 0-53.7 18.9-61.5 46.4L11.7 343.2C5.8 363.7 21.2 384 42.4 384H64v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h21.6c21.3 0 36.6-20.3 30.8-40.8l-39.1-136.8c-7.9-27.5-33-46.4-61.5-46.4zM448 64a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-79.7 144h31.4c7.1 0 13.4 4.7 15.4 11.6L448.4 336H319.6l33.3-116.4c2-6.9 8.2-11.6 15.4-11.6m0-48c-28.6 0-53.7 18.9-61.5 46.4l-39.1 136.8c-5.8 20.4 9.5 40.8 30.8 40.8H320v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h21.6c21.3 0 36.6-20.3 30.8-40.8l-39.1-136.8c-7.8-27.5-33-46.4-61.5-46.4z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-15.7 64h31.4c14.3 0 26.8 9.5 30.8 23.2L213.6 352H42.4l39.1-136.8C85.4 201.5 98 192 112.3 192m0-32c-28.6 0-53.7 18.9-61.5 46.4L11.7 343.2C5.8 363.7 21.2 384 42.4 384H64v112c0 8.8 7.2 16 16 16s16-7.2 16-16V384h64v112c0 8.8 7.2 16 16 16s16-7.2 16-16V384h21.6c21.3 0 36.6-20.3 30.8-40.8l-39.1-136.8c-7.9-27.5-33-46.4-61.5-46.4zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-15.7 64h31.4c14.3 0 26.8 9.5 30.8 23.2L469.6 352H298.4l39.1-136.8c3.9-13.7 16.5-23.2 30.8-23.2m0-32c-28.6 0-53.7 18.9-61.5 46.4l-39.1 136.8c-5.8 20.4 9.5 40.8 30.8 40.8H320v112c0 8.8 7.2 16 16 16s16-7.2 16-16V384h64v112c0 8.8 7.2 16 16 16s16-7.2 16-16V384h21.6c21.3 0 36.6-20.3 30.8-40.8l-39.1-136.8c-7.8-27.5-33-46.4-61.5-46.4z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M128 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-15.7 48h31.4c21.4 0 40.3 14.2 46.2 34.8L229 347.6c2.9 10.2-4.8 20.4-15.4 20.4H42.4c-10.6 0-18.3-10.2-15.4-20.4l39.1-136.8C72 190.2 90.8 176 112.3 176m7.7 208h16v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h13.6c21.3 0 36.6-20.3 30.8-40.8l-39.1-136.8c-7.9-27.5-33-46.4-61.5-46.4h-31.5c-28.6 0-53.7 18.9-61.5 46.4L11.7 343.2C5.8 363.7 21.2 384 42.4 384H56v96c0 17.7 14.3 32 32 32s32-14.3 32-32zm64 96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96h32zm-80-96v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96zM384 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-15.7 48h31.4c21.4 0 40.3 14.2 46.2 34.8L485 347.6c2.9 10.2-4.8 20.4-15.4 20.4H298.4c-10.6 0-18.3-10.2-15.4-20.4l39.1-136.8c5.9-20.6 24.7-34.8 46.2-34.8m7.7 208h16v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h13.6c21.3 0 36.6-20.3 30.8-40.8l-39.1-136.8c-7.8-27.5-33-46.4-61.5-46.4h-31.5c-28.6 0-53.7 18.9-61.5 46.4l-39.1 136.8c-5.8 20.4 9.5 40.8 30.8 40.8H312v96c0 17.7 14.3 32 32 32s32-14.3 32-32zm64 96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96h32zm-80-96v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M128 128a64 64 0 1 0 0-128 64 64 0 1 0 0 128m256 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M50.7 206.4c7.8-27.5 33-46.4 61.5-46.4h31.4c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8H192v80c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48v-80H42.4c-21.3 0-36.6-20.3-30.8-40.8zm256 0c7.8-27.5 33-46.4 61.5-46.4h31.4c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8H448v80c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48v-80h-21.6c-21.3 0-36.6-20.3-30.8-40.8z"
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
