import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChairIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M248 48v208h48V58.7c23.9 13.8 40 39.7 40 69.3v128h48V128C384 57.3 326.7 0 256 0h-64C121.3 0 64 57.3 64 128v128h48V128c0-29.6 16.1-55.5 40-69.3V256h48V48zM48 288c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S20.9 384 32 384v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96h256v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-16-32c-5.4-10.9-16.5-17.7-28.6-17.7z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M248 48h-48v176h-48V58.7c-23.9 13.8-40 39.7-40 69.3v96H64v-96C64 57.3 121.3 0 192 0h64c70.7 0 128 57.3 128 128v96h-48v-96c0-29.6-16.1-55.5-40-69.3V224h-48zM67.1 304l-18 48h349.8l-18-48zm-45-16.9C29.1 268.4 47 256 67 256h313.9c20 0 37.9 12.4 44.9 31.1l19.2 51.3c1.9 5.1 2.9 10.5 2.9 16 0 20.4-13.5 37.7-32 43.5v90c0 13.3-10.7 24-24 24s-24-10.7-24-24V400H80v88c0 13.3-10.7 24-24 24s-24-10.7-24-24v-90c-18.5-5.8-32-23.1-32-43.5 0-5.5 1-10.9 2.9-16l19.2-51.3z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 32v192h-32V37.5C122.7 50.6 96 86.2 96 128v96H64v-96C64 57.3 121.3 0 192 0h64c70.7 0 128 57.3 128 128v96h-32v-96c0-41.8-26.7-77.4-64-90.5V224h-32V32zM64 288l-32 64h384l-32-64zm-28.6-14.3C40.8 262.8 51.9 256 64 256h320c12.1 0 23.2 6.8 28.6 17.7l32 64c5 9.9 4.4 21.7-1.4 31.1S427.1 384 416 384v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H64v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V384c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M232 16v240h-16V16h-24c-11.1 0-21.9 1.6-32 4.6V256h-16V26.8c-37.8 18-64 56.5-64 101.2v128H64V128C64 57.3 121.3 0 192 0h64c70.7 0 128 57.3 128 128v128h-16V128c0-44.7-26.2-83.2-64-101.2V256h-16V20.6c-10.1-3-20.9-4.6-32-4.6zM33.7 312.8l-16 32c-2.5 5-2.2 10.9.7 15.6S26.5 368 32 368h384c5.5 0 10.7-2.9 13.6-7.6s3.2-10.6.7-15.6l-16-32c-2.7-5.4-8.2-8.8-14.3-8.8H48c-6.1 0-11.6 3.4-14.3 8.8m-14.3-7.2C24.8 294.8 35.9 288 48 288h352c12.1 0 23.2 6.8 28.6 17.7l16 32c5 9.9 4.4 21.7-1.4 31.1S427.1 384 416 384h-16v120c0 4.4-3.6 8-8 8s-8-3.6-8-8V384H64v120c0 4.4-3.6 8-8 8s-8-3.6-8-8V384H32c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M248 48h-48v240h-48V58.7c-23.9 13.8-40 39.7-40 69.3v160H64V128C64 57.3 121.3 0 192 0h64c70.7 0 128 57.3 128 128v160h-48V128c0-29.6-16.1-55.5-40-69.3V288h-48zM32 480v-96h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32m384-96v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M19.4 305.7C24.8 294.8 35.9 288 48 288h352c12.1 0 23.2 6.8 28.6 17.7l16 32c5 9.9 4.4 21.7-1.4 31.1S427.1 384 416 384H32c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1z"
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
