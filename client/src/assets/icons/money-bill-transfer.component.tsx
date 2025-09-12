import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MoneyBillTransferIcon: React.FC<
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
                  d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23-174-.2c-13.3 0-24-10.7-24-24s10.7-24 24-24h174.1zM105 377l-23 23h174c13.3 0 24 10.7 24 24s-10.7 24-24 24H81.9l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64h241.9c-3.7 7.2-5.9 15.3-5.9 24 0 28.7 23.3 52 52 52h117.4c-4 17 .6 35.5 13.8 48.8 20.3 20.3 53.2 20.3 73.5 0l19.3-19.3V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24 0-28.7-23.3-52-52-52H138.6c4-17-.6-35.5-13.8-48.8-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64m64 64H96v64c35.3 0 64-28.7 64-64m384 192c-35.3 0-64 28.7-64 64h64zm-224 32a96 96 0 1 0 0-192 96 96 0 1 0 0 192"
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
                  d="M558.1 64 535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23H160v16c0 35.3-28.7 64-64 64H80v93.5l-29.3 29L32 333.5V128c0-35.3 28.7-64 64-64h462.1m1.9 256v-93.5l29.3-29.3 18.7-18.7V384c0 35.3-28.7 64-64 64H81.9l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-23 23 174.1.1h224v-16c0-35.3 28.7-64 64-64zM320 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
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
                  d="M548.7 27.3 585.4 64H96c-35.3 0-64 28.7-64 64v220.1L46.1 334 64 316.1V192c53 0 96-43 96-96h425.4l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c3-3 4.7-7.1 4.7-11.3s-1.7-8.3-4.7-11.3l-64-64c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6M128 96c0 35.3-28.7 64-64 64v-32c0-17.7 14.3-32 32-32zM54.6 448H544c35.3 0 64-28.7 64-64V163.9L593.9 178 576 195.9V320c-53 0-96 43-96 96H54.6l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-64 64c-3 3-4.7 7.1-4.7 11.3s1.7 8.3 4.7 11.3l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM576 352v32c0 17.7-14.3 32-32 32h-32c0-35.3 28.7-64 64-64m-320-96a64 64 0 1 1 128 0 64 64 0 1 1-128 0m160 0a96 96 0 1 0-192 0 96 96 0 1 0 192 0"
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
                  d="M562.3 13.7 612.7 64H80c-26.5 0-48 21.5-48 48v236.1l6.1-6.1 9.9-9.9V112c0-17.7 14.3-32 32-32h532.7l-50.3 50.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l64-64c1.5-1.5 2.3-3.5 2.3-5.7s-.8-4.2-2.3-5.7l-64-64c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3zM27.3 448H560c26.5 0 48-21.5 48-48V163.9l-6.1 6.1-9.9 9.9V400c0 17.7-14.3 32-32 32H27.3l50.3-50.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-64 64C.8 435.8 0 437.9 0 440s.8 4.2 2.3 5.7l64 64c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3zM480 408c0 4.4 3.6 8 8 8s8-3.6 8-8v-16c0-30.9 25.1-56 56-56h8c4.4 0 8-3.6 8-8s-3.6-8-8-8h-8c-39.8 0-72 32.2-72 72zM152 96c-4.4 0-8 3.6-8 8v16c0 30.9-25.1 56-56 56h-8c-4.4 0-8 3.6-8 8s3.6 8 8 8h8c39.8 0 72-32.2 72-72v-16c0-4.4-3.6-8-8-8m88 160a80 80 0 1 1 160 0 80 80 0 1 1-160 0m176 0a96 96 0 1 0-192 0 96 96 0 1 0 192 0"
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
                  d="M337.9 64H96c-35.3 0-64 28.7-64 64v214.5l19.2-19.2c20.3-20.3 53.2-20.3 73.5 0 13.3 13.2 17.9 31.7 13.9 48.7H256c28.7 0 52 23.3 52 52 0 8.7-2.1 16.8-5.9 24H544c35.3 0 64-28.7 64-64V169.5l-19.2 19.2c-20.3 20.3-53.2 20.3-73.5 0-13.3-13.2-17.9-31.7-13.9-48.7H384c-28.7 0-52-23.3-52-52 0-8.7 2.1-16.8 5.9-24M96 192v-64h64c0 35.3-28.7 64-64 64m384 192c0-35.3 28.7-64 64-64v64zM224 256a96 96 0 1 1 192 0 96 96 0 1 1-192 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M558.1 64H384c-13.3 0-24 10.7-24 24s10.7 24 24 24h174.1l-23 23c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l64-64c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17L569 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l23 23zM81.9 400l23-23c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 407c-4.5 4.5-7 10.6-7 17s2.5 12.5 7 17l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-23-23L256 448c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
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
