import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FilePngIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v144H176c-35.3 0-64 28.7-64 64v144H64c-35.3 0-64-28.7-64-64zm384 64H256V0zm-65.7 232.8 33.7 67.4V368c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 7.4-5.1 13.9-12.3 15.6s-14.7-1.8-18-8.4L320 435.8V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-7.4 5.1-13.9 12.3-15.6s14.7 1.8 18 8.4M176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56h-16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v48zm208-40c0-22.1 17.9-40 40-40h16c22.1 0 40 17.9 40 40v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-8c-8.8 0-16-7.2-16-16s7.2-16 16-16h16c8.8 0 16 7.2 16 16v24c0 22.1-17.9 40-40 40h-16c-22.1 0-40-17.9-40-40z"
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
                  d="M64 464h48v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h165.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V304h-48V160h-80c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16m254.3-103.2 33.7 67.4V368c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 7.4-5.1 13.9-12.3 15.6s-14.7-1.8-18-8.4L320 435.8V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-7.4 5.1-13.9 12.3-15.6s14.7 1.8 18 8.4M176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56h-16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v48zm208-40c0-22.1 17.9-40 40-40h16c22.1 0 40 17.9 40 40v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-8c-8.8 0-16-7.2-16-16s7.2-16 16-16h16c8.8 0 16 7.2 16 16v24c0 22.1-17.9 40-40 40h-16c-22.1 0-40-17.9-40-40z"
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
                  d="M64 480h48v32H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h156.1C232.8 0 245 5.1 254 14.1l115.9 115.8c9 9 14.1 21.2 14.1 33.9V304h-32V192H240c-26.5 0-48-21.5-48-48V32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32m287.5-320c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2V144c0 8.8 7.2 16 16 16zm-33.2 200.8 33.7 67.4V368c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 7.4-5.1 13.9-12.3 15.6s-14.7-1.8-18-8.4L320 435.8V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-7.4 5.1-13.9 12.3-15.6s14.7 1.8 18 8.4M176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56h-16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v48zm208-40c0-22.1 17.9-40 40-40h16c22.1 0 40 17.9 40 40v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-8c-8.8 0-16-7.2-16-16s7.2-16 16-16h16c8.8 0 16 7.2 16 16v24c0 22.1-17.9 40-40 40h-16c-22.1 0-40-17.9-40-40z"
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
                  d="M64 496h48v16H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h140.1C216.8 0 229 5.1 238 14.1l131.9 131.8c9 9 14.1 21.2 14.1 33.9V304h-16V179.9c0-1.3-.1-2.6-.2-3.9H248c-22.1 0-40-17.9-40-40V16.2c-1.3-.2-2.6-.2-3.9-.2H64c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48m297.1-336q-1.2-1.5-2.4-2.7l-132-131.9q-1.35-1.35-2.7-2.4v113c0 13.3 10.7 24 24 24zm-49.9 212.4 48.8 97.7V376c0-4.4 3.6-8 8-8s8 3.6 8 8v128c0 3.7-2.6 6.9-6.2 7.8s-7.3-.9-9-4.2L312 409.9V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V376c0-3.7 2.6-6.9 6.2-7.8s7.3.9 9 4.2M176 368h32c26.5 0 48 21.5 48 48s-21.5 48-48 48h-24v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V376c0-4.4 3.6-8 8-8m32 80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-24v64zm216-48c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16h-8c-4.4 0-8-3.6-8-8s3.6-8 8-8h16c4.4 0 8 3.6 8 8v24c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v144H176c-35.3 0-64 28.7-64 64v144H64c-35.3 0-64-28.7-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160 224 0v128c0 17.7 14.3 32 32 32zm-65.7 200.8c-3.3-6.6-10.8-10.1-18-8.4S288 360.6 288 368v128c0 8.8 7.2 16 16 16s16-7.2 16-16v-60.2l33.7 67.4c3.3 6.6 10.8 10.1 18 8.4S384 503.4 384 496V368c0-8.8-7.2-16-16-16s-16 7.2-16 16v60.2zM176 352c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h16c30.9 0 56-25.1 56-56s-25.1-56-56-56zm32 80h-16v-48h16c13.3 0 24 10.7 24 24s-10.7 24-24 24m208-40v80c0 22.1 17.9 40 40 40h16c22.1 0 40-17.9 40-40v-24c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16v8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v8c0 8.8 7.2 16 16 16s16-7.2 16-16v-8c0-22.1-17.9-40-40-40h-16c-22.1 0-40 17.9-40 40"
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
