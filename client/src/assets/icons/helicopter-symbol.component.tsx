import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HelicopterSymbolIcon: React.FC<
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
                  d="M445.3 224H510C495.6 108.2 403.8 16.4 288 2v64.7c80.4 13.4 143.9 76.9 157.3 157.3m64.7 64h-64.7c-13.4 80.4-76.9 143.9-157.3 157.4V510c115.8-14.4 207.6-106.2 222-222M2 288c14.4 115.8 106.2 207.6 222 222v-64.6c-80.4-13.5-143.9-77-157.3-157.4zm0-64h64.7C80.1 143.6 143.6 80.1 224 66.7V2C108.2 16.4 16.4 108.2 2 224m206-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v192c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-17.7-14.3-32-32-32s-32 14.3-32 32v64h-96z"
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
                  d="M461.6 224H510C495.6 108.2 403.8 16.4 288 2v48.5c89.3 13.7 159.8 84.3 173.6 173.5m48.4 64h-48.4c-13.8 89.3-84.3 159.8-173.6 173.6V510c115.8-14.4 207.6-106.2 222-222M2 288c14.4 115.8 106.2 207.6 222 222v-48.4C134.7 447.8 64.2 377.3 50.4 288zm0-64h48.4C64.2 134.8 134.7 64.2 224 50.5V2C108.2 16.4 16.4 108.2 2 224m190-64c0-13.3-10.7-24-24-24s-24 10.7-24 24v192c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h128v72c0 13.3 10.7 24 24 24s24-10.7 24-24V160c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H192z"
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
                  d="M469.7 224H502C487.9 110.9 400 20.7 288 3.1v32.5c94.3 17 168.1 93 181.7 188.4m32.3 64h-32.3c-13.6 95.4-87.4 171.4-181.7 188.4v32.5C400 491.3 487.9 401.1 502 288m-508 0C8.7 406.5 104.4 499.8 224 510.9v-32.2C122.1 467.9 40.7 388.8 26.3 288zm0-64h32.3C40.7 123.2 122.1 44.1 224 33.3V1.1C104.5 12.2 8.8 105.5-6 224m182-80c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16v-96h160v96c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v96H176z"
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
                  d="M493.9 224H510C495.6 108.2 403.8 16.4 288 2v16.1c107 14.3 191.6 99 205.9 205.9m16.1 64h-16.1C479.6 395 395 479.6 288 493.9V510c115.8-14.4 207.6-106.2 222-222M2 288c14.4 115.8 106.2 207.6 222 222v-16.1C117 479.6 32.4 395 18.1 288zm0-64h16.1C32.4 117 117.1 32.4 224 18.1V2C108.2 16.4 16.4 108.2 2 224m166-80c0-4.4-3.6-8-8-8s-8 3.6-8 8v224c0 4.4 3.6 8 8 8s8-3.6 8-8V264h176v104c0 4.4 3.6 8 8 8s8-3.6 8-8V144c0-4.4-3.6-8-8-8s-8 3.6-8 8v104H168z"
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
                  d="M510 224C495.6 108.2 403.8 16.4 288 2v64.7c80.4 13.4 143.9 76.9 157.3 157.3zm-64.7 64c-13.4 80.4-76.9 143.9-157.3 157.4V510c115.8-14.4 207.6-106.2 222-222zm-378.6 0H2c14.4 115.8 106.2 207.6 222 222v-64.6c-80.4-13.5-143.9-77-157.3-157.4m0-64C80.1 143.6 143.6 80.1 224 66.7V2C108.2 16.4 16.4 108.2 2 224z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176 128c17.7 0 32 14.3 32 32v64h96v-64c0-17.7 14.3-32 32-32s32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64h-96v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32"
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
