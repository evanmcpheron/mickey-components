import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GarageIcon: React.FC<
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
                  d="M0 171.3V488c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V224c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v264c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V171.3c0-26.2-15.9-49.7-40.2-59.4L331.9 4.8c-7.6-3.1-16.1-3.1-23.8 0L40.2 111.9C15.9 121.6 0 145.2 0 171.3M128 224v96h384v-96zm0 128v160h384V352zm128 80c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16"
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
                  d="M323 51.1a7.8 7.8 0 0 0-6 0l-254 103c-9.1 3.7-15 12.5-15 22.2V488c0 13.3-10.7 24-24 24S0 501.3 0 488V176.3c0-29.3 17.8-55.7 44.9-66.7L299 6.6c13.5-5.5 28.6-5.5 42.1 0l254 103c27.2 11 45 37.4 45 66.7V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V176.3c0-9.8-5.9-18.6-15-22.2zM144 368v120c0 13.3-10.7 24-24 24s-24-10.7-24-24V232c0-22.1 17.9-40 40-40h368c22.1 0 40 17.9 40 40v256c0 13.3-10.7 24-24 24s-24-10.7-24-24V368zm0-48h352v-80H144zm136 96h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
                  d="M326.2 36c-4-1.7-8.4-1.7-12.4 0L51.6 146.4C39.7 151.4 32 163 32 175.9V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V175.9c0-25.8 15.4-49 39.2-59L301.4 6.5c11.9-5 25.3-5 37.3 0l262.1 110.4c23.7 10 39.2 33.2 39.2 59V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V175.9c0-12.9-7.7-24.5-19.6-29.5zM96 224c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v272c0 8.8-7.2 16-16 16s-16-7.2-16-16V352H128v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm32 96h384v-96H128zm144 96h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M329.1 20.4c-5.8-2.4-12.4-2.4-18.2 0L40.8 131.2c-15 6.2-24.8 20.8-24.8 37V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V168.2c0-22.7 13.7-43.2 34.7-51.8L304.8 5.6c9.7-4 20.6-4 30.4 0l270.1 110.8c21 8.6 34.7 29.1 34.7 51.8V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V168.2c0-16.2-9.8-30.8-24.8-37zM120 208c-4.4 0-8 3.6-8 8v104h416V216c0-4.4-3.6-8-8-8zm408 128H112v168c0 4.4-3.6 8-8 8s-8-3.6-8-8V216c0-13.3 10.7-24 24-24h400c13.3 0 24 10.7 24 24v288c0 4.4-3.6 8-8 8s-8-3.6-8-8zm-264 80h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H264c-4.4 0-8-3.6-8-8s3.6-8 8-8"
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
                  d="M512 224v96H128v-96zM128 352h384v160H128zm128 80c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 171.3V488c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V224c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v264c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V171.3c0-26.2-15.9-49.7-40.2-59.4L331.9 4.8c-7.6-3.1-16.1-3.1-23.8 0L40.2 111.9C15.9 121.6 0 145.2 0 171.3"
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
