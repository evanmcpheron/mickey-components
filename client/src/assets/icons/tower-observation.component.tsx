import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TowerObservationIcon: React.FC<
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
                  d="M241.7 3.4c9-4.5 19.6-4.5 28.6 0l160 80c15.8 7.9 22.2 27.1 14.3 42.9C439 137.5 427.7 144 416 144v80c0 17.7-14.3 32-32 32h-4.9l32 192H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l32-192H128c-17.7 0-32-14.3-32-32v-80c-11.7 0-23-6.5-28.6-17.7-7.9-15.8-1.5-35 14.3-42.9zM314.5 448 256 399.2 197.5 448zM197.8 256l-4.7 28.3 62.9 52.5 62.9-52.5-4.7-28.3zm-13.9 83.2-11.2 67 45.8-38.2zM293.5 368l45.8 38.1-11.2-67zM176 128c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
                  d="M245.7 2.3c6.5-3.1 14.1-3.1 20.6 0l168 80c12 5.7 17 20 11.3 32-5.3 11.2-18.2 16.4-29.7 12.3V200c0 27.2-19.4 49.9-45.2 55l34.8 209H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h82.3l34.8-209c-25.7-5-45.2-27.7-45.2-55v-73.4c-11.4 4.1-24.3-1.1-29.7-12.3-5.7-12-.6-26.3 11.4-32l168-80zM256 50.6l-112 53.3V128h224v-24.1zM144 176v24c0 4.4 3.6 8 8 8h208c4.4 0 8-3.6 8-8v-24zm186.8 288L256 400.7 181.2 464zM189.7 256l-3.7 22.5 70 59.3 70.1-59.3-3.8-22.5zm-12.9 77.6-13.8 83 55.9-47.3-42.1-35.6zm116.4 35.6 55.9 47.3-13.8-83-42.1 35.6z"
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
                  d="M248.8 1.7c4.5-2.3 9.8-2.3 14.3 0l176 88c7.9 4 11.1 13.6 7.2 21.5s-13.6 11.1-21.5 7.2L416 114v78c0 26.5-21.5 48-48 48h-7.8l39.6 237.4c.1.9.2 1.8.2 2.6h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c0-.9.1-1.7.2-2.6L151.8 240H144c-26.5 0-48-21.5-48-48v-78.1l-8.8 4.4c-7.9 4-17.5.7-21.5-7.2s-.7-17.5 7.2-21.5l176-88zm7.2 32.2-128 64V128h256V97.9zM128 160v32c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-32zm231.4 320L256 391.4 152.6 480zM184 240c0 .9-.1 1.7-.2 2.6l-6.5 39.1 78.7 67.5 78.7-67.5-6.5-39.1c-.1-.9-.2-1.8-.2-2.6zm-12.9 78.6L151 439.2l80.4-68.9zm109.5 51.7 80.4 68.9-20.1-120.6z"
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
                  d="M252.3.9c2.3-1.2 5.1-1.2 7.4 0l184 96c3.9 2 5.4 6.9 3.4 10.8s-6.9 5.4-10.8 3.4L416 100.5V184c0 22.1-17.9 40-40 40h-30.3l52.9 272H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h105.4l52.9-272H136c-22.1 0-40-17.9-40-40v-83.5l-20.3 10.6c-3.9 2-8.7.5-10.8-3.4s-.5-8.7 3.4-10.8zM256 17 112 92.2V184c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24V92.2zm126.3 479-5.3-27.3-121-95.1-121 95.1-5.3 27.3zM170.5 286.1l85.5 67.2 85.5-67.2-12.1-62.1H182.6zm-3.4 17.7-27.4 140.8 103.4-81.2-76-59.7zM269 363.5l103.4 81.2-27.5-141-76 59.7zM168 112c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8zm-24 8c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H168c-13.3 0-24-10.7-24-24z"
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
                  d="m100.9 448 32-192h64.9l-4.7 28.3 62.9 52.5 62.9-52.5-4.7-28.3h64.9l32 192h-96.6L256 399.2 197.5 448zm26.6 64h1.1zm255.9 0h1.1zM183.9 339.2l-11.2 67 45.8-38.2zM293.5 368l45.8 38.1-11.2-67z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M270.3 3.4c-9-4.5-19.6-4.5-28.6 0l-160 80c-15.8 7.9-22.2 27.1-14.3 42.9C73 137.5 84.3 144 96 144v80c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-80c11.7 0 23-6.5 28.6-17.7 7.9-15.8 1.5-35-14.3-42.9zM480 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32M160 144c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16"
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
