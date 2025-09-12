import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RepeatIcon: React.FC<
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
                  d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96h160v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32v32H160C71.6 64 0 135.6 0 224m512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192v-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448h160c88.4 0 160-71.6 160-160"
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
                  d="M22.8 280C9.6 279.3-.6 268 0 254.8l.4-8C5.3 148.9 86.2 72 184.2 72H304V35.6C304 15.9 319.9 0 339.6 0c8.8 0 17.3 3.3 23.8 9.1l76.7 69c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-76.7 69c-6.5 5.9-15 9.1-23.8 9.1-19.6 0-35.6-15.9-35.6-35.6V120H184.2C111.7 120 52 176.8 48.4 249.2l-.4 8c-.7 13.2-12 23.4-25.2 22.8M352 128.5 388.1 96 352 63.5zM489.2 232c13.2.7 23.4 11.9 22.8 25.2l-.4 8C506.7 363.1 425.8 440 327.8 440H208v36.4c0 19.6-15.9 35.6-35.6 35.6-8.8 0-17.3-3.3-23.8-9.1l-76.7-69c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l76.7-69c6.5-5.9 15-9.1 23.8-9.1 19.6 0 35.6 15.9 35.6 35.6V392h119.8c72.5 0 132.2-56.8 135.8-129.2l.4-8c.7-13.2 11.9-23.4 25.2-22.8M160 383.5 123.9 416l36.1 32.5z"
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
                  d="M15.2 272c-8.8-.5-15.6-8-15.2-16.8l.4-8C5.1 153.5 82.4 80 176.2 80H320V35.6C320 20.3 332.3 8 347.6 8c6.8 0 13.4 2.5 18.4 7.1l76.7 69c3.4 3 5.3 7.4 5.3 11.9s-1.9 8.9-5.3 11.9l-76.7 69c-5.1 4.6-11.6 7.1-18.4 7.1-15.2 0-27.6-12.3-27.6-27.6V112H176.2c-76.7 0-140 60.2-143.8 136.8l-.4 8c-.4 8.8-8 15.6-16.8 15.2M352 146.5 408.1 96 352 45.5v100.9zM496.8 240c8.8.4 15.6 8 15.2 16.8l-.4 8c-4.7 93.7-82 167.2-175.8 167.2H192v44.4c0 15.2-12.3 27.6-27.6 27.6-6.8 0-13.4-2.5-18.4-7.1l-76.7-69c-3.4-3-5.3-7.4-5.3-11.9s1.9-8.9 5.3-11.9l76.7-69c5.1-4.6 11.6-7.1 18.4-7.1 15.2 0 27.6 12.3 27.6 27.6V400h143.8c76.7 0 140-60.2 143.8-136.8l.4-8c.4-8.8 8-15.6 16.8-15.2M160 365.5 103.9 416l56.1 50.5V365.6z"
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
                  d="M347.3 176c3 0 5.9-1.2 8-3.3L432 96l-76.7-76.7c-2.1-2.1-5-3.3-8-3.3-6.2 0-11.3 5.1-11.3 11.3v137.4c0 6.2 5.1 11.3 11.3 11.3M320 164.7V104H168c-83.9 0-152 68.1-152 152v8c0 4.4-3.6 8-8 8s-8-3.6-8-8v-8C0 163.2 75.2 88 168 88h152V27.3C320 12.2 332.2 0 347.3 0c7.2 0 14.2 2.9 19.3 8l76.7 76.7c3 3 4.7 7.1 4.7 11.3s-1.7 8.3-4.7 11.3L366.6 184c-5.1 5.1-12.1 8-19.3 8-15.1 0-27.3-12.2-27.3-27.3M164.7 336c-3 0-5.9 1.2-8 3.3L80 416l76.7 76.7c2.1 2.1 5 3.3 8 3.3 6.2 0 11.3-5.1 11.3-11.3V347.3c0-6.2-5.1-11.3-11.3-11.3m27.3 11.3V408h152c83.9 0 152-68.1 152-152v-8c0-4.4 3.6-8 8-8s8 3.6 8 8v8c0 92.8-75.2 168-168 168H192v60.7c0 15.1-12.2 27.3-27.3 27.3-7.2 0-14.2-2.9-19.3-8l-76.7-76.7c-3-3-4.7-7.1-4.7-11.3s1.7-8.3 4.7-11.3l76.7-76.7c5.1-5.1 12.1-8 19.3-8 15.1 0 27.3 12.2 27.3 27.3"
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
                  d="M480 256c17.7 0 32 14.3 32 32 0 88.4-71.6 160-160 160H192v32c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3l64-64c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v32h160c53 0 96-43 96-96 0-17.7 14.3-32 32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 256c-17.7 0-32-14.3-32-32C0 135.6 71.6 64 160 64h160V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c12.5 12.5 12.5 32.8 0 45.3l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9S320 172.9 320 159.9V128H160c-53 0-96 43-96 96 0 17.7-14.3 32-32 32"
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
