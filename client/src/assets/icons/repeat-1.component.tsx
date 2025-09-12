import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Repeat1Icon: React.FC<
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
                  d="M32 256c-17.7 0-32-14.3-32-32C0 135.6 71.6 64 160 64h160V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c12.5 12.5 12.5 32.8 0 45.3l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9S320 172.9 320 159.9V128H160c-53 0-96 43-96 96 0 17.7-14.3 32-32 32m448 0c17.7 0 32 14.3 32 32 0 88.4-71.6 160-160 160H192v32c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3l64-64c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v32h160c53 0 96-43 96-96 0-17.7 14.3-32 32-32zm-192-40v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c-10 0-19.4-6.4-22.8-16.4-4.2-12.6 2.6-26.2 15.2-30.4l24-8c7.3-2.4 15.4-1.2 21.6 3.3s10 11.8 10 19.5"
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
                  d="M0 254.8C-.6 268 9.6 279.3 22.8 280s24.5-9.5 25.2-22.8l.4-8C52 176.8 111.7 120 184.2 120H304v36.4c0 19.6 15.9 35.6 35.6 35.6 8.8 0 17.3-3.3 23.8-9.1l76.7-69c5.1-4.6 7.9-11 7.9-17.8s-2.9-13.3-7.9-17.8l-76.7-69c-6.5-5.9-15-9.1-23.8-9.1C319.9 0 304 15.9 304 35.6V72H184.2C86.2 72 5.3 148.9.4 246.8zM388.1 96 352 128.5v-65zM512 257.2c.7-13.2-9.5-24.5-22.8-25.2s-24.5 9.5-25.2 22.8l-.4 8C460 335.2 400.3 392 327.8 392H208v-36.4c0-19.6-15.9-35.6-35.6-35.6-8.8 0-17.3 3.3-23.8 9.1l-76.7 69c-5.1 4.6-7.9 11-7.9 17.8s2.9 13.3 7.9 17.8l76.7 69c6.5 5.9 15 9.1 23.8 9.1 19.6 0 35.6-15.9 35.6-35.6V440h119.8c98 0 178.9-76.9 183.8-174.8zM123.9 416l36.1-32.5v65zM288 208c0-9.1-5.1-17.4-13.3-21.5s-17.9-3.2-25.1 2.3l-32 24c-10.6 8-12.8 23-4.8 33.6 6.5 8.6 17.6 11.6 27.2 8.2V304c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
                  d="M0 255.2c-.4 8.8 6.4 16.3 15.2 16.8s16.3-6.4 16.8-15.2l.4-8C36.2 172.2 99.5 112 176.2 112H320v44.4c0 15.2 12.3 27.6 27.6 27.6 6.8 0 13.4-2.5 18.4-7.1l76.7-69c3.4-3 5.3-7.4 5.3-11.9s-1.9-8.9-5.3-11.9l-76.7-69c-5.1-4.6-11.6-7.1-18.4-7.1C332.3 8 320 20.3 320 35.6V80H176.2C82.4 80 5.1 153.5.4 247.2zM408.1 96 352 146.5V45.6zM512 256.8c.4-8.8-6.4-16.3-15.2-16.8s-16.3 6.4-16.8 15.2l-.4 8C475.8 339.8 412.5 400 335.8 400H192v-44.4c0-15.2-12.3-27.6-27.6-27.6-6.8 0-13.4 2.5-18.4 7.1l-76.7 69c-3.4 3-5.3 7.4-5.3 11.9s1.9 8.9 5.3 11.9l76.7 69c5.1 4.6 11.6 7.1 18.4 7.1 15.2 0 27.6-12.3 27.6-27.6V432h143.8c93.8 0 171.1-73.5 175.8-167.2zM103.9 416l56.1-50.5v100.9zM288 208c0-6.1-3.4-11.6-8.8-14.3s-11.9-2.1-16.8 1.5l-32 24c-7.1 5.3-8.5 15.3-3.2 22.4s15.3 8.5 22.4 3.2l6.4-4.8v64c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
                  d="M355.3 172.7c-2.1 2.1-5 3.3-8 3.3-6.2 0-11.3-5.1-11.3-11.3V27.3c0-6.2 5.1-11.3 11.3-11.3 3 0 5.9 1.2 8 3.3L432 96zM320 104v60.7c0 15.1 12.2 27.3 27.3 27.3 7.2 0 14.2-2.9 19.3-8l76.7-76.7c3-3 4.7-7.1 4.7-11.3s-1.7-8.3-4.7-11.3L366.6 8c-5.1-5.1-12.1-8-19.3-8C332.2 0 320 12.2 320 27.3V88H168C75.2 88 0 163.2 0 256v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-83.9 68.1-152 152-152zM156.7 339.3c2.1-2.1 5-3.3 8-3.3 6.2 0 11.3 5.1 11.3 11.3v137.4c0 6.2-5.1 11.3-11.3 11.3-3 0-5.9-1.2-8-3.3L80 416zM192 408v-60.7c0-15.1-12.2-27.3-27.3-27.3-7.2 0-14.2 2.9-19.3 8l-76.7 76.7c-3 3-4.7 7.1-4.7 11.3s1.7 8.3 4.7 11.3l76.7 76.7c5.1 5.1 12.1 8 19.3 8 15.1 0 27.3-12.2 27.3-27.3V424h152c92.8 0 168-75.2 168-168v-8c0-4.4-3.6-8-8-8s-8 3.6-8 8v8c0 83.9-68.1 152-152 152zm88-208c0-2.9-1.6-5.5-4.1-7s-5.6-1.4-8.1.1l-40 24c-3.8 2.3-5 7.2-2.7 11s7.2 5 11 2.7l27.9-16.7V312c0 4.4 3.6 8 8 8s8-3.6 8-8z"
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
                <path className="aps-icon-background" d="" />
                <path
                  className="aps-icon-foreground"
                  d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96h160v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32v32H160C71.6 64 0 135.6 0 224m512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192v-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448h160c88.4 0 160-71.6 160-160m-234-91.5c6.3 4.5 10 11.8 10 19.5v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48c-10 0-19.4-6.4-22.8-16.4-4.2-12.6 2.6-26.2 15.2-30.4l24-8c7.3-2.4 15.4-1.2 21.6 3.3"
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
