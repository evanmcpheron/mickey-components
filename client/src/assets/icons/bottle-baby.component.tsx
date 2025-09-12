import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BottleBabyIcon: React.FC<
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
                  d="M220.6 49.7 224 48V32c0-17.7 14.3-32 32-32s32 14.3 32 32v16l3.4 1.7C308.9 58.5 320 76.4 320 96c17.7 0 32 14.3 32 32v32H160v-32c0-17.7 14.3-32 32-32 0-19.6 11.1-37.5 28.6-46.3M200 272h-84.4c4.5-19.6 13-38.1 25.2-54.4L160 192h192l19.2 25.6c18.7 24.9 28.8 55.2 28.8 86.4v144c0 35.3-28.7 64-64 64H176c-35.3 0-64-28.7-64-64v-16h88c13.3 0 24-10.7 24-24s-10.7-24-24-24h-88v-64h88c13.3 0 24-10.7 24-24s-10.7-24-24-24"
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
                  d="M220.6 49.7 224 48V32c0-17.7 14.3-32 32-32s32 14.3 32 32v16l3.4 1.7C308.9 58.5 320 76.4 320 96c17.7 0 32 14.3 32 32v16l21.8 21.8c27 27 42.2 63.6 42.2 101.8V448c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V267.6c0-38.2 15.2-74.8 42.2-101.8L160 144v-16c0-17.7 14.3-32 32-32 0-19.6 11.1-37.5 28.6-46.3M368 448V267.6c0-25.5-10.1-49.9-28.1-67.9l-7.8-7.8H179.9l-7.8 7.8c-18 18-28.1 42.4-28.1 67.9v4.4h88c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88v48h88c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88v32c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16"
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
                  d="M256 0c26.5 0 48 21.5 48 48 18.5 9.2 30.5 27.6 31.9 48 .1 1.3.1 2.5.1 3.8v8.4c9.8 8.8 16 21.6 16 35.8v16l21.8 21.8c27 27 42.2 63.6 42.2 101.8V448c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V283.6c0-38.2 15.2-74.8 42.2-101.8L160 160v-16c0-14.2 6.2-27 16-35.8v-8.4c0-1.3 0-2.5.1-3.8 1.3-20.4 13.4-38.8 31.9-48 0-26.5 21.5-48 48-48M128 416v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V283.6c0-29.7-11.8-58.2-32.8-79.2L338.7 192H173.3l-12.5 12.5c-21 21-32.8 49.5-32.8 79.2v4.4h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H128v64h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H128zM303.7 96c-1.2-8.3-6.4-15.6-14-19.4C278.8 71.2 272 60.1 272 48c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 12.1-6.8 23.2-17.7 28.6-7.6 3.8-12.8 11.1-14 19.4zM208 128c-8.8 0-16 7.2-16 16v16h128v-16c0-8.8-7.2-16-16-16z"
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
                  d="M204.5 61 224 48V32c0-17.7 14.3-32 32-32s32 14.3 32 32v16l19.5 13c17.2 11.5 27.7 30.5 28.5 51v4.3c9.6 5.5 16 15.9 16 27.7v16l21.8 21.8c27 27 42.2 63.6 42.2 101.8V448c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V283.6c0-38.2 15.2-74.8 42.2-101.8L160 160v-16c0-11.8 6.4-22.2 16-27.7V112c.7-20.5 11.3-39.5 28.5-51M112 416v32c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V283.6c0-33.9-13.5-66.5-37.5-90.5L345.4 176H166.6l-17.1 17.1c-24 24-37.5 56.6-37.5 90.5V304h136c4.4 0 8 3.6 8 8s-3.6 8-8 8H112v80h136c4.4 0 8 3.6 8 8s-3.6 8-8 8zm207.9-304c-.7-15.2-8.6-29.2-21.3-37.7l-19.5-13c-4.5-3-7.1-8-7.1-13.3V32c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c0 5.3-2.7 10.3-7.1 13.3l-19.5 13c-12.7 8.5-20.6 22.5-21.3 37.7H320zM192 128c-8.8 0-16 7.2-16 16v16h160v-16c0-8.8-7.2-16-16-16z"
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
                  d="M112 272h88c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88v64h88c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88v16c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64V272c0-31.2-10.1-61.5-28.8-86.4L352 160H160l-19.2 25.6C122.1 210.5 112 240.8 112 272m80-176h128c0-19.6-11.1-37.5-28.6-46.3L288 48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v16l-3.4 1.7C203.1 58.5 192 76.4 192 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 96c-17.7 0-32 14.3-32 32v32h192v-32c0-17.7-14.3-32-32-32zm-80 176v48h88c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 112v48h88c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
