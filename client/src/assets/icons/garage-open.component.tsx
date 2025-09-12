import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GarageOpenIcon: React.FC<
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
                  d="M0 171.3V488c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V224c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v264c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V171.3c0-26.2-15.9-49.7-40.2-59.4L331.9 4.8c-7.6-3.1-16.1-3.1-23.8 0L40.2 111.9C15.9 121.6 0 145.2 0 171.3M194.1 320l-5.2 15c-17.2 9.5-28.9 27.9-28.9 49v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h192v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-21.1-11.7-39.5-28.9-49l-5.2-15H395l2.8 8H242.2l2.8-8zm45.9 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m136 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m136-176H128v64h384z"
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
                  d="M323 51.1a7.8 7.8 0 0 0-6 0l-254 103c-9.1 3.7-15 12.5-15 22.2V488c0 13.3-10.7 24-24 24S0 501.3 0 488V176.3c0-29.3 17.8-55.7 44.9-66.7L299 6.6c13.5-5.5 28.6-5.5 42.1 0l254 103c27.2 11 45 37.4 45 66.7V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V176.3c0-9.8-5.9-18.6-15-22.2zM144 320v168c0 13.3-10.7 24-24 24s-24-10.7-24-24V232c0-22.1 17.9-40 40-40h368c22.1 0 40 17.9 40 40v256c0 13.3-10.7 24-24 24s-24-10.7-24-24V320zm0-48h352v-32H144zm88 144v16h176v-16c0-8.8-7.2-16-16-16H248c-8.8 0-16 7.2-16 16m0 64v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-72c0-35.3 28.7-64 64-64h144c35.3 0 64 28.7 64 64v72c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8z"
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
                  d="M313.8 36c4-1.7 8.4-1.7 12.4 0l262.2 110.4c11.9 5 19.6 16.6 19.6 29.5V496c0 8.8 7.2 16 16 16s16-7.2 16-16V175.9c0-25.8-15.4-49-39.2-59L338.6 6.5c-11.9-5-25.3-5-37.3 0L39.2 116.9c-23.8 10-39.2 33.2-39.2 59V496c0 8.8 7.2 16 16 16s16-7.2 16-16V175.9c0-12.9 7.7-24.5 19.6-29.5zM128 192c-17.7 0-32 14.3-32 32v272c0 8.8 7.2 16 16 16s16-7.2 16-16V288h384v208c0 8.8 7.2 16 16 16s16-7.2 16-16V224c0-17.7-14.3-32-32-32zm384 64H128v-32h384zm-299.5 64-10.6 32.8c-15.6 9.9-25.9 27.4-25.9 47.2v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h224v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-19.8-10.3-37.3-25.9-47.2L427.5 320h-33.7l7.8 24H238.4l7.8-24zM432 400v48H208v-48c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24m-184 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32m160-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M310.9 20.4c5.8-2.4 12.4-2.4 18.2 0l270.1 110.8c15 6.2 24.8 20.8 24.8 37V504c0 4.4 3.6 8 8 8s8-3.6 8-8V168.2c0-22.7-13.7-43.2-34.7-51.8L335.2 5.6c-9.7-4-20.6-4-30.4 0L34.7 116.4C13.7 125 0 145.5 0 168.2V504c0 4.4 3.6 8 8 8s8-3.6 8-8V168.2c0-16.2 9.8-30.8 24.8-37zM112 216c0-4.4 3.6-8 8-8h400c4.4 0 8 3.6 8 8v56H112zm0 72h416v216c0 4.4 3.6 8 8 8s8-3.6 8-8V216c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v288c0 4.4 3.6 8 8 8s8-3.6 8-8zm87.4 32-5.9 18.2c-19.4 6.2-33.5 24.4-33.5 45.8v120c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h288v40c0 4.4 3.6 8 8 8s8-3.6 8-8V384c0-21.4-14.1-39.6-33.5-45.8l-5.9-18.2h-16.8l5.2 16H211l5.2-16zM432 352c17.7 0 32 14.3 32 32v64H176v-64c0-17.7 14.3-32 32-32zm-208 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m208-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="m194.1 320-5.2 15c-17.2 9.5-28.9 27.9-28.9 49v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h192v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-21.1-11.7-39.5-28.9-49l-5.2-15H395l2.8 8H242.2l2.8-8zm45.9 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m136 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0l267.9 107.1c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v264c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m512-264v64H128v-64z"
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
