import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FileMp4Icon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v144H144c-35.3 0-64 28.7-64 64v144H64c-35.3 0-64-28.7-64-64zm384 64H256V0zM157.7 359.8l34.3 57.1 34.3-57.1c3.7-6.2 11.1-9.1 18-7.2S256 360.8 256 368v128c0 8.8-7.2 16-16 16s-16-7.2-16-16v-70.2l-18.3 30.5c-2.9 4.8-8.1 7.8-13.7 7.8s-10.8-3-13.7-7.8L160 425.8V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-7.2 4.8-13.5 11.7-15.4s14.3 1 18 7.2M304 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56h-16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v48zm84.7 11.3c-3-3-4.7-7.1-4.7-11.3v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v48h32v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-4.2 0-8.3-1.7-11.3-4.7"
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
                  d="M48 448c0 8.8 7.2 16 16 16v48c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h165.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V288h-48V160h-80c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16zm109.7-88.2 34.3 57.1 34.3-57.1c3.7-6.2 11.1-9.1 18-7.2S256 360.8 256 368v128c0 8.8-7.2 16-16 16s-16-7.2-16-16v-70.2l-18.3 30.5c-2.9 4.8-8.1 7.8-13.7 7.8s-10.8-3-13.7-7.8L160 425.8V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-7.2 4.8-13.5 11.7-15.4s14.3 1 18 7.2M304 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56h-16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v48zm84.7 11.3c-3-3-4.7-7.1-4.7-11.3v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v48h32v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-4.2 0-8.3-1.7-11.3-4.7"
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
                  d="M32 448c0 17.7 14.3 32 32 32v32c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h156.1C232.8 0 245 5.1 254 14.1l115.9 115.8c9 9 14.1 21.2 14.1 33.9V288h-32v-96H240c-26.5 0-48-21.5-48-48V32H64c-17.7 0-32 14.3-32 32zm319.5-288c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2V144c0 8.8 7.2 16 16 16zM157.7 359.8l34.3 57.1 34.3-57.1c3.7-6.2 11.1-9.1 18-7.2S256 360.8 256 368v128c0 8.8-7.2 16-16 16s-16-7.2-16-16v-70.2l-18.3 30.5c-2.9 4.8-8.1 7.8-13.7 7.8s-10.8-3-13.7-7.8L160 425.8V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-7.2 4.8-13.5 11.7-15.4s14.3 1 18 7.2M304 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56h-16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v48zm84.7 11.3c-3-3-4.7-7.1-4.7-11.3v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v48h32v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-4.2 0-8.3-1.7-11.3-4.7"
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
                  d="M64 496h16v16H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h140.1C216.8 0 229 5.1 238 14.1l131.9 131.8c9 9 14.1 21.2 14.1 33.9V304h-16V179.9c0-1.3-.1-2.6-.2-3.9H248c-22.1 0-40-17.9-40-40V16.2c-1.3-.2-2.6-.2-3.9-.2H64c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48m297.1-336q-1.2-1.5-2.4-2.7l-132-131.9q-1.35-1.35-2.7-2.4v113c0 13.3 10.7 24 24 24zM150.7 371.6l41.3 62 41.3-62c2-2.9 5.6-4.2 9-3.2s5.7 4.1 5.7 7.7V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V402.4l-33.3 50c-1.5 2.2-4 3.6-6.7 3.6s-5.2-1.3-6.7-3.6l-33.3-50V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V376c0-3.5 2.3-6.6 5.7-7.7s7 .3 9 3.2zM304 368h32c26.5 0 48 21.5 48 48s-21.5 48-48 48h-24v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V376c0-4.4 3.6-8 8-8m32 80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-24v64zm90.3-2.3c-1.5-1.5-2.3-3.5-2.3-5.7v-64c0-4.4 3.6-8 8-8s8 3.6 8 8v56h48v-56c0-4.4 3.6-8 8-8s8 3.6 8 8v128c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-56c-2.1 0-4.2-.8-5.7-2.3"
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v144H144c-35.3 0-64 28.7-64 64v144H64c-35.3 0-64-28.7-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160 224 0v128c0 17.7 14.3 32 32 32zM157.7 359.8c-3.7-6.2-11.1-9.1-18-7.2S128 360.8 128 368v128c0 8.8 7.2 16 16 16s16-7.2 16-16v-70.2l18.3 30.5c2.9 4.8 8.1 7.8 13.7 7.8s10.8-3 13.7-7.8l18.3-30.5V496c0 8.8 7.2 16 16 16s16-7.2 16-16V368c0-7.2-4.8-13.5-11.7-15.4s-14.3 1-18 7.2L192 416.9zM304 352c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h16c30.9 0 56-25.1 56-56s-25.1-56-56-56zm32 80h-16v-48h16c13.3 0 24 10.7 24 24s-10.7 24-24 24m84.7 11.3c3 3 7.1 4.7 11.3 4.7h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V368c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-32v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 4.2 1.7 8.3 4.7 11.3"
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
