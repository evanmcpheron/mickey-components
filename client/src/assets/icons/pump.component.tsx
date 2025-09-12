import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PumpIcon: React.FC<
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
                  d="M128 32c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32S337.7 0 320 0H160c-17.7 0-32 14.3-32 32M32 176c-17.7 0-32 14.3-32 32v176c0 17.7 14.3 32 32 32s32-14.3 32-32V208c0-17.7-14.3-32-32-32m128 48H96v160h224V96H160zm271.9-117.3L380.5 141c-17.8 11.9-28.5 31.9-28.5 53.3v219.4c0 21.4 10.7 41.4 28.5 53.3l51.4 34.3c10.5 7 22.9 10.7 35.5 10.7H576c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H467.4c-12.6 0-25 3.7-35.5 10.7M448 208c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16m0 96c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16m0 96c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16"
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
                  d="M88 0C74.7 0 64 10.7 64 24s10.7 24 24 24h8v160H48v-8c0-13.3-10.7-24-24-24S0 186.7 0 200v208c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h272v-48H48v-96h72c13.3 0 24-10.7 24-24V48h96v184c0 13.3 10.7 24 24 24h56v-48h-32V48h8c13.3 0 24-10.7 24-24S309.3 0 296 0H88m370.5 146.7c2.6-1.8 5.7-2.7 8.9-2.7H576c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H467.4c-3.2 0-6.2-.9-8.9-2.7l-51.4-34.2c-4.4-3-7.1-8-7.1-13.3V194.3c0-5.3 2.7-10.3 7.1-13.3zm-26.6 354.6c10.5 7 22.9 10.7 35.5 10.7H576c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H467.4c-12.6 0-25 3.7-35.5 10.7L380.5 141c-17.8 11.9-28.5 31.9-28.5 53.3v219.4c0 21.4 10.7 41.4 28.5 53.3zM448 224c0 8.8 7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16m0 80c0 8.8 7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16m0 80c0 8.8 7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16"
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
                  d="M76.9 0c-8.8 0-16 7.2-16 16s7.2 16 16 16H96v176H32v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h288v-32H32V240h80c8.8 0 16-7.2 16-16V32h128v192c0 8.8 7.2 16 16 16h48v-32h-32V32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H76.9m372.7 133.4c5.3-3.5 11.4-5.4 17.8-5.4H576c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H467.4c-6.3 0-12.5-1.9-17.8-5.4l-51.4-34.3c-8.9-5.9-14.2-15.9-14.2-26.6V194.3c0-10.7 5.3-20.7 14.2-26.6zm-17.7 367.9c10.5 7 22.9 10.7 35.5 10.7H576c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H467.4c-12.6 0-25 3.7-35.5 10.7L380.5 141c-17.8 11.9-28.5 31.9-28.5 53.3v219.4c0 21.4 10.7 41.4 28.5 53.3zM448 224c0 8.8 7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16m0 80c0 8.8 7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16m0 80c0 8.8 7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16"
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
                  d="M128 48c-8.8 0-16-7.2-16-16s7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16zm192-16c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32v160H64c0-17.7-14.3-32-32-32S0 206.3 0 224v160c0 17.7 14.3 32 32 32s32-14.3 32-32h256v-16H64V240h72c4.4 0 8-3.6 8-8V64h128v168c0 4.4 3.6 8 8 8h40v-16h-32V64c17.7 0 32-14.3 32-32m120.8 88.1c7.9-5.3 17.1-8.1 26.6-8.1H576c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H467.4c-9.5 0-18.7-2.8-26.6-8.1l-51.4-34.3c-13.4-8.8-21.4-23.8-21.4-39.9V194.3c0-16 8-31 21.4-39.9zM380.5 141c-17.8 11.9-28.5 31.9-28.5 53.3v219.4c0 21.4 10.7 41.4 28.5 53.3l51.4 34.3c10.5 7 22.9 10.7 35.5 10.7H576c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H467.4c-12.6 0-25 3.7-35.5 10.7zm67.5 91c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H456c-4.4 0-8 3.6-8 8m0 72c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H456c-4.4 0-8 3.6-8 8m0 72c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H456c-4.4 0-8 3.6-8 8M48 224v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V224c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M64 224h96V64h160v160h32v160H64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32S337.7 0 320 0zM64 208c0-17.7-14.3-32-32-32S0 190.3 0 208v176c0 17.7 14.3 32 32 32s32-14.3 32-32zm367.9-101.3L380.5 141c-17.8 11.9-28.5 31.9-28.5 53.3v219.4c0 21.4 10.7 41.4 28.5 53.3l51.4 34.3c10.5 7 22.9 10.7 35.5 10.7H576c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H467.4c-12.6 0-25 3.7-35.5 10.7M448 208c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16m0 96c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16m0 96c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16"
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
