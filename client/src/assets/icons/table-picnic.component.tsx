import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TablePicnicIcon: React.FC<
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
                  d="M319.3 64H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h48.7l-38.4 96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32h-74.3l-38.4-96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96.8zm124.8 256h-69l43.2 107.9c6.6 16.4 25.2 24.4 41.6 17.8s24.4-25.2 17.8-41.6zm-307.2 0h-69l-33.6 84.1c-6.6 16.4 1.4 35 17.8 41.6s35-1.4 41.6-17.8zm38.4-96 38.4-96h84.7l38.4 96z"
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
                  d="M88 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h71.4l-53.1 128H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24h-82.3l-53.1-128H424c13.3 0 24-10.7 24-24s-10.7-24-24-24zm350.9 256h-52l46.9 113.2c5.1 12.2 19.1 18.1 31.4 13s18.1-19.1 13-31.4zm-313.8 0h-52l-39.3 94.8c-5.1 12.2.7 26.3 13 31.4s26.3-.7 31.4-13zm33.2-80 53.1-128h89.3l53.1 128z"
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
                  d="M191.6 64H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h88.2l-52.4 128H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16h-99.8L343.8 96H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.7zm117.7 32 52.4 128H150.4l52.3-128zM89.6 288 33.2 425.9c-3.3 8.2.6 17.5 8.8 20.9s17.5-.6 20.9-8.8l61.3-150zm332.8 0h-34.6l61.4 150.1c3.3 8.2 12.7 12.1 20.9 8.8s12.1-12.7 8.8-20.9z"
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
                  d="M64 72c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H328.7L403 256h101c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h101l74.3-176H72c-4.4 0-8-3.6-8-8m136 8c0 1-.2 2.1-.6 3.1l-73 172.9h259.2l-73-172.9c-.4-1-.6-2.1-.6-3.1zM88.7 304h17.4L47.4 443.1c-1.7 4.1-6.4 6-10.5 4.3s-6-6.4-4.3-10.5zm334.5 0 56.1 132.9c1.7 4.1-.2 8.8-4.3 10.5s-8.8-.2-10.5-4.3L405.9 304h17.4z"
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
                  d="M320.7 64h-1.5zm95.3 64H96c-14.5 0-26.7-9.6-30.7-22.9 4 13.3 16.2 22.9 30.7 22.9h48.7l-38.4 96h68.9l38.4-96h84.7l38.4 96h68.9l-38.4-96zM0 256c0 17.7 14.3 32 32 32h48.7L34.3 404.1c-6.6 16.4 1.4 35 17.8 41.6s35-1.4 41.6-17.8l56-139.9h212.6l56 139.9c6.6 16.4 25.2 24.4 41.6 17.8s24.4-25.2 17.8-41.6L431.3 288H480 32c-17.7 0-32-14.3-32-32M191.3 64h1.5zM64 96"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 64c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32-14.3 32-32s-14.3-32-32-32zM32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
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
