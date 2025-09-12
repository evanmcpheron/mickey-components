import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MugMarshmallowsIcon: React.FC<
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
                  d="M192 32c7.5 0 14.4 2.6 19.8 6.9L175 75.7c-9.6 9.6-15 22.7-15 36.3 0 5.5.9 10.9 2.6 16H32V64c0-17.7 14.3-32 32-32zm5.7 93.7c-3.7-3.7-5.7-8.6-5.7-13.7s2-10 5.7-13.7l60.7-60.7C262 34 266.9 32 272 32s10 2 13.7 5.7l60.7 60.7c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7L344 128H200zM0 192c0-17.7 14.3-32 32-32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h240c61.9 0 112 50.1 112 112s-50.1 112-112 112h-16c0 53-43 96-96 96H96c-53 0-96-43-96-96zm384 32v96h16c26.5 0 48-21.5 48-48s-21.5-48-48-48z"
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
                  d="M197.7 125.7c-3.7-3.7-5.7-8.6-5.7-13.7s2-10 5.7-13.7l60.7-60.7C262 34 266.9 32 272 32s10 2 13.7 5.7l60.7 60.7c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7L344 128H200zM32 64c0-17.7 14.3-32 32-32h128c7.5 0 14.4 2.6 19.8 6.9L175 75.7c-9.6 9.6-15 22.7-15 36.3 0 5.5.9 10.9 2.6 16H32zm16 320c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V208H152v56c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56H48zM0 192c0-17.7 14.3-32 32-32h368c61.9 0 112 50.1 112 112s-50.1 112-112 112h-16c0 53-43 96-96 96H96c-53 0-96-43-96-96zm384 144h16c35.3 0 64-28.7 64-64s-28.7-64-64-64h-16z"
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
                  d="M357.7 103c6.6 6.6 10.3 15.6 10.3 25h-32c0-.9-.3-1.7-1-2.3l-57.8-57.9c-2.4-2.4-5.7-3.8-9.2-3.8s-6.7 1.4-9.2 3.8L201 125.7c-.6.6-1 1.5-1 2.3h-32c0-9.4 3.7-18.3 10.3-25l57.9-57.9C244.6 36.7 256.1 32 268 32s23.4 4.7 31.8 13.2zM64 80v48H32V80c0-26.5 21.5-48 48-48h124.1l-32 32H80c-8.8 0-16 7.2-16 16M32 384c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V192H128v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80H32zm0-224h368c61.9 0 112 50.1 112 112s-50.1 112-112 112h-16c0 53-43 96-96 96H96c-53 0-96-43-96-96V192c0-17.7 14.3-32 32-32m352 192h16c44.2 0 80-35.8 80-80s-35.8-80-80-80h-16z"
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
                  d="m203.5 40.6-11.6 11.6c-4.7-2.7-10.1-4.2-15.9-4.2H80c-17.7 0-32 14.3-32 32v48H32V80c0-26.5 21.5-48 48-48h96c10.2 0 19.7 3.2 27.5 8.6M360 128h-16v-7.2c0-6.4-2.5-12.5-7-17l-49.5-49.4c-4.1-4.1-9.7-6.4-15.5-6.4s-11.4 2.3-15.5 6.4L207 103.9c-4.5 4.5-7 10.6-7 17v5.2c0 .6 0 1.3.1 1.9H184v-7.1c0-10.6 4.2-20.8 11.7-28.3l49.5-49.5C252.3 36 261.9 32 272 32s19.7 4 26.8 11.1l49.5 49.5c7.5 7.5 11.7 17.7 11.7 28.3v7.2zm-184 48v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72h-48v104c0 4.4-3.6 8-8 8s-8-3.6-8-8V176H32c-8.8 0-16 7.2-16 16v192c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80V176H176m208 0v176h24c48.6 0 88-39.4 88-88s-39.4-88-88-88zm0 192v16c0 53-43 96-96 96H96c-53 0-96-43-96-96V192c0-17.7 14.3-32 32-32h376c57.4 0 104 46.6 104 104s-46.6 104-104 104z"
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
                  d="m197.7 125.7 2.3 2.3h144l2.3-2.3c3.6-3.6 5.7-8.5 5.7-13.7s-2-10-5.7-13.7l-60.6-60.6C282 34 277.1 32 272 32s-10 2-13.7 5.7l-60.6 60.6c-3.7 3.7-5.7 8.6-5.7 13.7s2 10 5.7 13.7M32 64v64h130.6a50.6 50.6 0 0 1-2.6-16c0-13.6 5.4-26.7 15-36.3l36.8-36.8c-5.4-4.3-12.3-6.9-19.8-6.9H64c-17.7 0-32 14.3-32 32m128 96H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 160H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H160v64c0 17.7-14.3 32-32 32s-32-14.3-32-32zm288 160v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z"
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
