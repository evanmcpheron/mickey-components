import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FilePrescriptionIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zM104 196h72c33.1 0 60 26.9 60 60 0 25.5-15.9 47.2-38.3 55.9l43 40.3 33.8-31c8.1-7.5 20.8-6.9 28.3 1.2s6.9 20.8-1.2 28.3l-31.6 29 31.7 29.7c8.1 7.6 8.5 20.2.9 28.3s-20.2 8.5-28.3.9l-33.9-31.8-34.9 32c-8.1 7.5-20.8 6.9-28.3-1.2s-6.9-20.8 1.2-28.3l32.6-29.9-64.8-60.8c-.9-.8-1.6-1.7-2.3-2.6H124v44c0 11-9 20-20 20s-20-9-20-20V216c0-11 9-20 20-20m72 80c11 0 20-9 20-20s-9-20-20-20h-52v40z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 448V64c0-8.8 7.2-16 16-16h160v80c0 17.7 14.3 32 32 32h80v288c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3l-90.6-90.5C262.7 6.7 246.5 0 229.5 0zm40 192c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h22.1c.3.3.6.7.9 1l55 55-23 23c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-23-23 23-23c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23-31.1-31.1c18.7-11.3 31.2-31.7 31.2-55 0-35.3-28.7-64-64-64zm72 80h-48v-32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M320 480H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256c0 17.7-14.3 32-32 32m-80-320c-8.8 0-16-7.2-16-16V32.5c2.8.7 5.4 2.1 7.4 4.2l115.9 115.9c2.1 2.1 3.5 4.6 4.2 7.4zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1zm48 224c-8.8 0-16 7.2-16 16v144c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h41.4l48 48-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L262.6 384l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L240 361.4l-31.2-31.2C227.3 321.1 240 302 240 280c0-30.9-25.1-56-56-56zm72 80h-56v-48h56c13.3 0 24 10.7 24 24s-10.7 24-24 24"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 496c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48h140.1c1.3 0 2.6.1 3.9.2V136c0 22.1 17.9 40 40 40h119.8c.2 1.3.2 2.6.2 3.9V448c0 26.5-21.5 48-48 48zm294.6-338.7q1.35 1.35 2.4 2.7H248c-13.3 0-24-10.7-24-24V22.9q1.5 1.2 2.7 2.4zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V179.9c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1zm40 224c-4.4 0-8 3.6-8 8v160c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h52.7l64 64-42.3 42.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l42.3-42.3 42.3 42.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L251.3 384l42.3-42.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L240 372.7l-53.8-53.8C207.8 314.2 224 295 224 272c0-26.5-21.5-48-48-48zm64 80h-56v-64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm104 132c-11 0-20 9-20 20v144c0 11 9 20 20 20s20-9 20-20v-44h20c.7.9 1.5 1.8 2.3 2.6l64.8 60.8-32.6 29.9c-8.1 7.5-8.7 20.1-1.2 28.3s20.1 8.7 28.3 1.2l34.9-32 33.9 31.8c8.1 7.6 20.7 7.1 28.3-.9s7.1-20.7-.9-28.3L270 379.7l31.6-28.9c8.1-7.5 8.7-20.1 1.2-28.3s-20.1-8.7-28.3-1.2l-33.8 31-43-40.3c22.4-8.7 38.3-30.5 38.3-55.9 0-33.1-26.9-60-60-60h-72zm72 80h-52v-40h52c11 0 20 9 20 20s-9 20-20 20"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160 224 0v128c0 17.7 14.3 32 32 32zm-280 36c-11 0-20 9-20 20v144c0 11 9 20 20 20s20-9 20-20v-44h20c.7.9 1.5 1.8 2.3 2.6l64.8 60.8-32.6 29.9c-8.1 7.5-8.7 20.1-1.2 28.3s20.1 8.7 28.3 1.2l34.9-32 33.9 31.8c8.1 7.6 20.7 7.1 28.3-.9s7.1-20.7-.9-28.3L270 379.7l31.6-28.9c8.1-7.5 8.7-20.1 1.2-28.3s-20.1-8.7-28.3-1.2l-33.8 31-43-40.3c22.4-8.7 38.3-30.5 38.3-55.9 0-33.1-26.9-60-60-60h-72zm72 80h-52v-40h52c11 0 20 9 20 20s-9 20-20 20"
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
