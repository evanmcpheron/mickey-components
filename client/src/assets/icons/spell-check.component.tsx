import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SpellCheckIcon: React.FC<
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
                  d="M112 0C99.1 0 87.4 7.8 82.5 19.7l-66.7 160-13.3 32c-6.8 16.3.9 35 17.2 41.8s35-.9 41.8-17.2l5.2-12.3h90.7l5.1 12.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-13.3-32-66.7-160C136.6 7.8 124.9 0 112 0m18.7 160H93.3l18.7-44.8zM256 32v192c0 17.7 14.3 32 32 32h80c44.2 0 80-35.8 80-80 0-23.1-9.8-43.8-25.4-58.4 6-11.2 9.4-24 9.4-37.6 0-44.2-35.8-80-80-80h-64c-17.7 0-32 14.3-32 32m96 64h-32V64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16m-32 64h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48zm246.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L352 434.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0z"
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
                  d="M134.1 14.6C130.4 5.8 121.6 0 112 0S93.7 5.8 89.9 14.6l-88 208c-5.2 12.2.5 26.3 12.8 31.5s26.3-.5 31.5-12.8L56.8 216h110.4l10.7 25.4c5.2 12.2 19.2 17.9 31.5 12.8s17.9-19.2 12.8-31.5l-88-208zM146.9 168H77.1L112 85.6zM256 24v208c0 13.3 10.7 24 24 24h92c42 0 76-34 76-76 0-24.6-11.7-46.4-29.8-60.3C426.9 107.3 432 92.2 432 76c0-42-34-76-76-76h-76c-13.3 0-24 10.7-24 24m100 80h-52V48h52c15.5 0 28 12.5 28 28s-12.5 28-28 28m-52 48h68c15.5 0 28 12.5 28 28s-12.5 28-28 28h-68zm264.6 161.3c9.6-9.2 9.9-24.4.7-33.9s-24.4-9.9-33.9-.7l-183 175.7L265 367c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L335 505c9.2 9.2 24.2 9.4 33.6.3z"
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
                  d="M126.7 9.7C124.2 3.8 118.4 0 112 0S99.8 3.8 97.3 9.7l-96 224c-3.5 8.1.3 17.5 8.4 21s17.5-.3 21-8.4L54 192h116l23.3 54.3c3.5 8.1 12.9 11.9 21 8.4s11.9-12.9 8.4-21zM156.3 160H67.7L112 56.6zM256 16v224c0 8.8 7.2 16 16 16h104c39.8 0 72-32.2 72-72 0-31.1-19.7-57.6-47.3-67.6C410.3 104.1 416 88.7 416 72c0-39.8-32.2-72-72-72h-72c-8.8 0-16 7.2-16 16m88 96h-56V32h56c22.1 0 40 17.9 40 40s-17.9 40-40 40m-56 32h88c22.1 0 40 17.9 40 40s-17.9 40-40 40h-88zm283.3 155.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L352 473.4 251.3 372.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0z"
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
                  d="M119.3 4.8C118.1 1.9 115.2 0 112 0s-6.1 1.9-7.3 4.8l-104 240c-1.8 4.1.1 8.8 4.2 10.5s8.8-.1 10.5-4.2L48 175.8v.2h128v-.2l32.7 75.4c1.8 4.1 6.5 5.9 10.5 4.2s5.9-6.5 4.2-10.5l-104-240zM169.1 160H54.9L112 28.1zM256 16v224c0 8.8 7.2 16 16 16h104c39.8 0 72-32.2 72-72 0-34.2-23.8-62.8-55.8-70.2C406.7 102.1 416 84.1 416 64c0-35.3-28.7-64-64-64h-80c-8.8 0-16 7.2-16 16m96 96h-80V16h80c26.5 0 48 21.5 48 48s-21.5 48-48 48m-80 16h104c30.9 0 56 25.1 56 56s-25.1 56-56 56H272zm293.7 173.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L351.8 492.9 237.5 386.2c-3.2-3-8.3-2.8-11.3.4s-2.8 8.3.4 11.3l120 112c3.2 2.9 8.1 2.9 11.1-.2z"
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
                  d="M141.5 19.7C136.6 7.8 124.9 0 112 0S87.4 7.8 82.5 19.7l-66.7 160-13.3 32c-6.8 16.3.9 35 17.2 41.8s35-.9 41.8-17.2l5.2-12.3h90.7l5.1 12.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-13.3-32zM112 115.2l18.7 44.8H93.3zM288 0c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h80c44.2 0 80-35.8 80-80 0-23.1-9.8-43.8-25.4-58.4 6-11.2 9.4-24 9.4-37.6 0-44.2-35.8-80-80-80zm80 80c0 8.8-7.2 16-16 16h-32V64h32c8.8 0 16 7.2 16 16m-48 112v-32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M566.6 265.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l73.4 73.3 169.4-169.3c12.5-12.5 32.8-12.5 45.3 0z"
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
