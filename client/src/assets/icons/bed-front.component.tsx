import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BedFrontIcon: React.FC<
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
                  d="M32 80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v129.1c-14.5-8.4-30.7-14-48-16.1v-33c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32v32h-32v-32c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32v33c-17.3 2.2-33.6 7.8-48 16.1zM0 320c0-53 43-96 96-96h320c53 0 96 43 96 96v128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H64v32c0 17.7-14.3 32-32 32S0 465.7 0 448z"
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
                  d="M32 80v125.8c14.5-7.7 30.8-12.4 48-13.6V160c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v32h32v-32c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v32.3c17.2 1.1 33.5 5.9 48 13.6V80c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48m56 144c-48.6 0-88 39.4-88 88v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h416v40c0 13.3 10.7 24 24 24s24-10.7 24-24V312c0-48.6-39.4-88-88-88zm376 144H48v-56c0-22.1 17.9-40 40-40h336c22.1 0 40 17.9 40 40z"
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
                  d="M64 96v40.6c9.4-5.4 20.3-8.6 32-8.6h112c19.1 0 36.3 8.4 48 21.7 11.7-13.3 28.9-21.7 48-21.7h112c11.7 0 22.6 3.1 32 8.6V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32m416 96v48c19.4 14.6 32 37.8 32 64v160c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-26.2 12.6-49.4 32-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-32 33.6V192c0-17.7-14.3-32-32-32H304c-17.7 0-32 14.3-32 32v32h160c5.5 0 10.8.6 16 1.6M240 224v-32c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v33.6c5.2-1 10.5-1.6 16-1.6zm240 80c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48v80h448z"
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
                  d="M48 88c0-22.1 17.9-40 40-40h336c22.1 0 40 17.9 40 40v56.8c-10.2-10.4-24.3-16.8-40-16.8H304c-20.4 0-38.2 10.9-48 27.1-9.8-16.3-27.6-27.1-48-27.1H88c-15.7 0-29.8 6.4-40 16.8zm0 96c0-22.1 17.9-40 40-40h120c22.1 0 40 17.9 40 40v40H72c-8.4 0-16.5 1.4-24 4.1zm-16 52.1C12.7 249 0 271 0 296v176c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h480v56c0 4.4 3.6 8 8 8s8-3.6 8-8V296c0-25-12.7-47-32-59.9V88c0-30.9-25.1-56-56-56H88c-30.9 0-56 25.1-56 56v148.1M264 184c0-22.1 17.9-40 40-40h120c22.1 0 40 17.9 40 40v44.1c-7.5-2.7-15.6-4.1-24-4.1H264zm0 56h176c30.9 0 56 25.1 56 56v104H16V296c0-30.9 25.1-56 56-56h192"
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
                  d="M0 288c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v64H0v-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v152.6c-9.4-5.4-20.3-8.6-32-8.6h-16v-64c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32v64h-32v-64c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32v64H64c-11.7 0-22.6 3.1-32 8.6zm0 272h480v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H64v32c0 17.7-14.3 32-32 32S0 465.7 0 448v-96z"
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
