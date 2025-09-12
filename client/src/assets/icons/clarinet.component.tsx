import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ClarinetIcon: React.FC<
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
                  d="M224 144c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v32h76.6c9.5 0 18.7-2.8 26.6-8.1l31.9-21.3c4.9-3.3 11.2-3.6 16.4-.8s8.5 8.2 8.5 14.1V368c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L583.2 360c-7.9-5.3-17.1-8.1-26.6-8.1H108.3c-10.2 0-20.3-1.9-29.7-5.7l-68.5-27.3C4 316.4 0 310.5 0 304v-64c0-6.5 4-12.4 10.1-14.9l68.6-27.4c9.4-3.8 19.5-5.7 29.7-5.7H256v-32h-16c-8.8 0-16-7.2-16-16m224 16h-64v32h64zm-96 0h-64v32h64zm-80 136a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M224 112c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v32h44.6c7.9 0 15.6-2.3 22.2-6.7l55.9-37.3c7.4-4.9 16.8-5.4 24.6-1.2S640 127.1 640 136v240c0 8.9-4.9 17-12.7 21.2s-17.3 3.7-24.6-1.2l-55.9-37.3c-6.6-4.4-14.3-6.7-22.2-6.7H113.4c-8.6 0-17.1-1.3-25.3-3.7l-71-21.3C7 323.9 0 314.6 0 304v-96c0-10.6 7-19.9 17.1-23l71-21.3c8.2-2.5 16.7-3.7 25.3-3.7H256v-32h-16c-8.8 0-16-7.2-16-16m64 48h64v-32h-64zm96 0h64v-32h-64zm-136 96a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m133.4-62.8C559 202.9 542 208 524.6 208H113.4c-3.9 0-7.8.6-11.5 1.7L48 225.9v60.3l53.9 16.2c3.7 1.1 7.6 1.7 11.5 1.7h411.2c17.4 0 34.4 5.1 48.8 14.8l18.6 12.3V180.8z"
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
                  d="M224 112c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v32h44.6c7.9 0 15.6-2.3 22.2-6.7l55.9-37.3c7.4-4.9 16.8-5.4 24.6-1.2S640 127.1 640 136v240c0 8.9-4.9 17-12.7 21.2s-17.3 3.7-24.6-1.2l-55.9-37.3c-6.6-4.4-14.3-6.7-22.2-6.7H113.4c-8.6 0-17.1-1.3-25.3-3.7l-71-21.3C7 323.9 0 314.6 0 304v-96c0-10.6 7-19.9 17.1-23l71-21.3c8.2-2.5 16.7-3.7 25.3-3.7H256v-32h-16c-8.8 0-16-7.2-16-16m224 16h-64v32h64zm-96 0h-64v32h64zm256 22.9-43.4 29c-11.8 7.9-25.7 12.1-39.9 12.1H113.4c-5.5 0-10.9.8-16.1 2.4L32 214v84l65.3 19.6a54.6 54.6 0 0 0 16.1 2.4h411.2c14.2 0 28.1 4.2 39.9 12.1l43.4 29V150.9zM272 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M224 136c0-4.4 3.6-8 8-8h272c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v48h79.5c4.2 0 8.3-1.1 11.9-3.2l47.2-27c2.2-1.2 4.6-1.9 7.1-1.9 7.9 0 14.3 6.4 14.3 14.3v195.5c0 7.9-6.4 14.3-14.3 14.3-2.5 0-4.9-.6-7.1-1.9l-47.2-27c-3.6-2.1-7.7-3.2-11.9-3.2H101.6c-4.7 0-9.3-.8-13.7-2.4l-82.6-30C2.1 318.4 0 315.4 0 312v-80c0-3.4 2.1-6.4 5.3-7.5L88 194.4c4.4-1.6 9-2.4 13.7-2.4H256v-48h-24c-4.4 0-8-3.6-8-8m240 8h-88v48h88zm-104 0h-88v48h88zm-258.4 64c-2.8 0-5.6.5-8.2 1.4L16 237.6v68.8l77.4 28.2c2.6 1 5.4 1.4 8.2 1.4h457.9c7 0 13.8 1.8 19.8 5.3l44.7 25.5V177.2l-44.7 25.5c-6 3.5-12.9 5.3-19.8 5.3H101.6M272 256a16 16 0 1 1 0 32 16 16 0 1 1 0-32m80 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M631.5 161.9c5.2 2.8 8.5 8.2 8.5 14.1v192c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L583.2 360c-7.9-5.3-17.1-8.1-26.6-8.1H108.3c-10.2 0-20.3-1.9-29.7-5.7l-68.5-27.3C4 316.4 0 310.5 0 304v-64c0-6.5 4-12.4 10.1-14.9l68.6-27.4c9.4-3.8 19.5-5.7 29.7-5.7h448.2c9.5 0 18.7-2.8 26.6-8.1l31.9-21.3c4.9-3.3 11.2-3.6 16.4-.8zM272 296a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M240 128c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v32h32v-32h64v32h32v-32h64v32h32v-32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H240m32 168a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
