import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BinaryIcon: React.FC<
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
                  d="M336 32v128h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V76.4l-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16c9.8-3.3 20.6-1.7 28.9 4.3S336 21.7 336 32M112 320v128h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h16v-83.6l-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16c9.8-3.3 20.5-1.6 28.8 4.4s13.3 15.7 13.3 26zM0 64C0 28.7 28.7 0 64 0h64c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 0H64v96h64zm128 224h64c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64v-96c0-35.3 28.7-64 64-64m0 64v96h64v-96z"
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
                  d="M328 24v152h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V57.3l-16.4 5.5c-12.6 4.2-26.2-2.6-30.4-15.2s2.6-26.2 15.2-30.4l48-16c7.3-2.4 15.4-1.2 21.6 3.3s10 11.8 10 19.5M104 312v152h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V345.3l-16.4 5.5C27 355 13.4 348.2 9.2 335.6s2.6-26.2 15.2-30.4l48-16c7.3-2.4 15.4-1.2 21.6 3.3s10 11.8 10 19.5M0 72C0 32.2 32.2 0 72 0h48c39.8 0 72 32.2 72 72v80c0 39.8-32.2 72-72 72H72c-39.8 0-72-32.2-72-72zm72-24c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24zm192 240h48c39.8 0 72 32.2 72 72v80c0 39.8-32.2 72-72 72h-48c-39.8 0-72-32.2-72-72v-80c0-39.8 32.2-72 72-72m-24 72v80c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24"
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
                  d="M320 16c0-5.1-2.5-10-6.6-13S303.9-.8 299 .8l-48 16c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l26.9-9V192h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48zM96 304c0-5.1-2.5-10-6.6-13s-9.5-3.8-14.4-2.2l-48 16c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l26.9-9V480H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM0 80v64c0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80V80c0-44.2-35.8-80-80-80H80C35.8 0 0 35.8 0 80m80-48h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48m192 256c-44.2 0-80 35.8-80 80v64c0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80v-64c0-44.2-35.8-80-80-80zm-48 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48z"
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
                  d="M312 8c0-2.6-1.3-5.1-3.4-6.6s-4.9-1.8-7.4-.9l-64 24c-4.1 1.6-6.2 6.2-4.7 10.3s6.2 6.2 10.3 4.7l53.2-20V208h-64c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64zM88 296c0-2.6-1.3-5.1-3.4-6.6s-4.9-1.8-7.4-.9l-64 24c-4.1 1.6-6.2 6.2-4.7 10.3s6.2 6.2 10.3 4.7l53.2-20V496H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H88zM16 64v96c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80C44.7 0 16 28.7 16 64m64-48h32c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48m192 272c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64v-96c0-35.3-28.7-64-64-64zm-48 64c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48z"
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
                  d="M64 0C28.7 0 0 28.7 0 64v96c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm0 64h64v96H64zm192 224c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64v-96c0-35.3-28.7-64-64-64zm0 64h64v96h-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M336 32c0-10.3-4.9-19.9-13.3-26s-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2V160H256c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16zM112 320c0-10.3-4.9-19.9-13.3-26s-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.8-20.3 40.5s23.7 25.8 40.5 20.2l5.9-2V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16z"
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
