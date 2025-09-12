import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RaygunIcon: React.FC<
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
                  d="M192 64h96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v240c0 13.3-10.7 24-24 24s-24-10.7-24-24v-.4l-99.4 198.7c-7.9 15.8-27.1 22.2-42.9 14.3l-80-40c-15.8-7.9-22.2-27.1-14.3-42.9L120.2 288H112C50.1 288 0 237.9 0 176c0-44.7 26.2-83.2 64-101.2V24.6C64 11 75 0 88.6 0c4.8 0 9.6 1.4 13.6 4.1zm200 0c13.3 0 24 10.7 24 24v56h60.9l77.1-30.9c4.9-2 10.5-1.4 14.9 1.6s7 7.9 7 13.2v96c0 5.3-2.6 10.3-7 13.2s-10 3.6-14.9 1.6L476.9 208H416v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-13.3 10.7-24 24-24M136 176a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M288 64h-96L102.2 4.1C98.2 1.4 93.4 0 88.6 0 75 0 64 11 64 24.6v50.2C26.2 92.8 0 131.3 0 176c0 59.3 46.1 107.8 104.4 111.7l-69 137.9c-7.9 15.8-1.5 35 14.3 42.9l80 40c15.8 7.9 35 1.5 42.9-14.3l103-206 .2-.3H288v8c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24s-24 10.7-24 24zm-176 48h176v128H112c-35.3 0-64-28.7-64-64s28.7-64 64-64m280-48c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24v-56h60.9l77.1 30.9c4.9 2 10.5 1.4 14.9-1.6s7-7.9 7-13.2V128c0-5.3-2.6-10.3-7-13.2s-10-3.6-14.9-1.6L476.9 144H416V88c0-13.3-10.7-24-24-24M112 200a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-10 112.3-85.2 170.2-51.3-25.7 72.3-144.5z"
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
                  d="M39.3 2.6c4.5-3 10.3-3.4 15.2-1.2L195.4 64H272c18 0 34.6 6 48 16V48c0-8.8 7.2-16 16-16s16 7.2 16 16v112h32V80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h32c0-6.1 3.4-11.6 8.8-14.3l96-48c5-2.5 10.9-2.2 15.6.7s7.6 8.1 7.6 13.6v128c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6.7l-96-48c-5.4-2.7-8.8-8.3-8.8-14.3h-32v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80h-32v112c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c-12.4 9.3-27.6 15.1-44.2 15.9v.1L172.6 494.3c-7.9 15.8-27.1 22.2-42.9 14.3l-80-40c-15.8-7.9-22.2-27.1-14.3-42.9l69-137.9C46.1 283.8 0 235.3 0 176c0-30.5 12.2-58.2 32-78.4V16c0-5.4 2.7-10.5 7.3-13.4M480 176v6.1l64 32v-76.2l-64 32zM192.3 96H112c-44.2 0-80 35.8-80 80s35.8 80 80 80h160c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48zM64 40.6v34.2C78.5 67.9 94.8 64 112 64h4.6zM140 288 64 440l80 40 96-192zm-28-128a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M51.6 1.3c2.3-1.5 5.1-1.7 7.6-.6L201.7 64H280c22.6 0 42.8 10.4 56 26.7V48c0-4.4 3.6-8 8-8s8 3.6 8 8v120h48V80c0-4.4 3.6-8 8-8s8 3.6 8 8v88h48v-16c0-3.2 1.9-6.1 4.9-7.4l96-40c2.5-1 5.3-.8 7.5.7s3.6 4 3.6 6.7v128c0 2.7-1.3 5.2-3.6 6.7s-5 1.8-7.5.7l-96-40c-3-1.2-4.9-4.2-4.9-7.4v-16h-48v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88h-48v120c0 4.4-3.6 8-8 8s-8-3.6-8-8v-42.7c-13.2 16.3-33.4 26.7-56 26.7h-4.2L172.6 494.3c-7.9 15.8-27.1 22.2-42.9 14.3l-80-40c-15.8-7.9-22.2-27.1-14.3-42.9l69-137.9C46.1 283.8 0 235.3 0 176c0-38.1 19-71.7 48-91.9V8c0-2.7 1.4-5.2 3.6-6.7M480 176v18.7l80 33.3V124l-80 33.3zM200.2 80H112c-53 0-96 43-96 96s43 96 96 96h168c30.9 0 56-25.1 56-56v-80c0-30.9-25.1-56-56-56zM64 20.3v54.5C78.5 67.9 94.8 64 112 64h50.3zM122.1 288 49.7 432.8c-4 7.9-.7 17.5 7.2 21.5l80 40c7.9 4 17.5.7 21.5-7.2L257.9 288zM112 160a16 16 0 1 1 0 32 16 16 0 1 1 0-32m48 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M64 24.6v50.2C78.5 67.9 94.8 64 112 64h80L102.2 4.1C98.2 1.4 93.4 0 88.6 0 75 0 64 11 64 24.6M336 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v240c0 13.3 10.7 24 24 24s24-10.7 24-24zm80 32c0-13.3-10.7-24-24-24s-24 10.7-24 24v176c0 13.3 10.7 24 24 24s24-10.7 24-24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 64H112C50.1 64 0 114.1 0 176s50.1 112 112 112h8.2L51.4 425.7c-7.9 15.8-1.5 35 14.3 42.9l80 40c15.8 7.9 35 1.5 42.9-14.3L288 295.6zm128 144h60.9l77.1 30.9c4.9 2 10.5 1.4 14.9-1.6s7-7.9 7-13.2V128c0-5.3-2.6-10.3-7-13.2s-10-3.6-14.9-1.6L476.9 144H416zm-304-56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
