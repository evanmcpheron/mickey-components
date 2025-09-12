import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareParkingSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.8-68V96c0-35.3-28.7-64-64-64H160c-21.6 0-40.7 10.7-52.3 27.1zM227 152.7c6-14.5 20.3-24.7 37-24.7h72c53 0 96 43 96 96 0 26.3-10.6 50.2-27.8 67.5l-51.4-40.3c9.1-5.6 15.2-15.7 15.2-27.2 0-17.7-14.3-32-32-32h-48v8.4l-61-47.8zm259.9 327L288 322.9V352c0 17.7-14.3 32-32 32s-32-14.3-32-32v-79.5L96 171.6V416c0 35.3 28.7 64 64 64h320c2.3 0 4.6-.1 6.9-.4z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.8-68V96c0-35.3-28.7-64-64-64H160c-21.6 0-40.7 10.7-52.3 27.1zm106.9 83.8c2.6-5.3 8.1-8.9 14.3-8.9h320c8.8 0 16 7.2 16 16v267.5L408.6 295c19.3-17.6 31.4-42.9 31.4-71 0-53-43-96-96-96h-80c-16.5 0-30.2 12.6-31.8 28.7zm224.1 175.6L280 194.2V176h64c26.5 0 48 21.5 48 48 0 17-8.9 32-22.2 40.5M426.5 432H160c-8.8 0-16-7.2-16-16V209.5l-48-37.9V416c0 35.3 28.7 64 64 64h320c2.3 0 4.6-.1 6.9-.4zM232 278.8V360c0 13.3 10.7 24 24 24s24-10.7 24-24v-43.4z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zm471.5 474.2L459.9 448H160c-17.7 0-32-14.3-32-32V186l-32-25.3V416c0 35.3 28.7 64 64 64h320c6 0 11.9-.8 17.4-2.4M142.6 34.4 180.1 64H480c17.7 0 32 14.3 32 32v230l32 25.3V96c0-35.3-28.7-64-64-64H160c-6 0-11.9.8-17.4 2.4m97.4 240V368c0 8.8 7.2 16 16 16s16-7.2 16-16v-68.4l-32-25.3zm197.7-7c6.6-13 10.3-27.8 10.3-43.4 0-53-43-96-96-96h-88c-.9 0-1.8 0-2.7.1l40.4 31.9H352c35.3 0 64 28.7 64 64 0 8.1-1.5 15.8-4.2 22.9l25.9 20.4z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zm474.1 477.9L467.3 464H160c-26.5 0-48-21.5-48-48V183.5l-16-12.6V416c0 35.3 28.7 64 64 64h320c2.4 0 4.7-.1 7.1-.4M152.9 32.4 172.7 48H480c26.5 0 48 21.5 48 48v232.5l16 12.6V96c0-35.3-28.7-64-64-64H160c-2.4 0-4.7.1-7.1.4M240 284.6V376c0 4.4 3.6 8 8 8s8-3.6 8-8v-78.8zm192-31.9c5.1-11.2 8-23.6 8-36.7 0-48.6-39.4-88-88-88h-77.9l20.3 16h57.7c39.8 0 72 32.2 72 72 0 9.3-1.8 18.2-5 26.4l13 10.3z"
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
                  d="M544 401.1V96c0-35.3-28.7-64-64-64H160c-21.6 0-40.7 10.7-52.3 27.1L227 152.7c6-14.5 20.3-24.7 37-24.7h72c53 0 96 43 96 96 0 26.3-10.6 50.2-27.8 67.5zM352.8 251.2c9.1-5.6 15.2-15.7 15.2-27.2 0-17.7-14.3-32-32-32h-48v8.4zm134.1 228.4L288 322.9V352c0 17.7-14.3 32-32 32s-32-14.3-32-32v-79.5L96 171.6V416c0 35.3 28.7 64 64 64h320c2.3 0 4.6-.1 6.9-.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
