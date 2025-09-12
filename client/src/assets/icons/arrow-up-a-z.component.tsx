import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowUpAZIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2l32.4-35.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-50.7l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9S493 288 480 288H352c-17.7 0-32 14.3-32 32m96-288c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32m-20.2 144 20.2-40.4 20.2 40.4z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M416 32c9.1 0 17.4 5.1 21.5 13.3l80 160c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7L461 199.6c-1.6.3-3.2.5-4.9.5h-85.3l-13.4 26.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l80-160C398.6 37.1 406.9 32 416 32m-21.2 120h42.3L416 109.7zM143 39c9.4-9.4 24.6-9.4 33.9 0l96 96c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55V456c0 13.3-10.7 24-24 24s-24-10.7-24-24V113.9L81 169c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l96-96zm209 249h128c9.4 0 18 5.5 21.9 14.2s2.3 18.7-4 25.8l-92.5 104H480c13.3 0 24 10.7 24 24s-10.7 24-24 24H352c-9.4 0-18-5.5-21.9-14.2s-2.3-18.7 4-25.8l92.5-104H352c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M171.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L144 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zM352 288c-8.8 0-16 7.2-16 16s7.2 16 16 16h94.7L339.5 454c-3.8 4.8-4.6 11.4-1.9 16.9s8.3 9.1 14.4 9.1h128c8.8 0 16-7.2 16-16s-7.2-16-16-16h-94.7l107.2-134c3.8-4.8 4.6-11.4 1.9-16.9s-8.3-9.1-14.4-9.1zm64-256c-6.1 0-11.6 3.4-14.3 8.8l-63.9 127.8-.3.6-15.8 31.7c-4 7.9-.7 17.5 7.2 21.5s17.5.7 21.5-7.2l11.5-23.2h108.2l11.6 23.2c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5l-15.8-31.7-.3-.6-64-127.8c-2.7-5.4-8.2-8.8-14.3-8.8m-38.1 128L416 83.8l38.1 76.2z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M154.3 34.3c3.1-3.1 8.2-3.1 11.3 0l112 112c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L168 59.3V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V59.3l-98.3 98.4c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l112-112zM336 296c0-4.4 3.6-8 8-8h144c3.1 0 5.9 1.8 7.2 4.6s.9 6.1-1 8.5L360.9 464H488c4.4 0 8 3.6 8 8s-3.6 8-8 8H344c-3.1 0-5.9-1.8-7.2-4.6s-.9-6.1 1-8.5L471.1 304H344c-4.4 0-8-3.6-8-8m80-264c3 0 5.8 1.7 7.2 4.4l63.9 127.9.1.3 23.9 47.8c2 4 .4 8.8-3.6 10.7s-8.8.4-10.7-3.6L475.1 176H356.9l-21.8 43.6c-2 4-6.8 5.6-10.7 3.6s-5.6-6.8-3.6-10.7l23.9-47.8.1-.3 64-128c1.4-2.7 4.1-4.4 7.2-4.4m0 25.9L364.9 160h102.2z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M416 32c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3l-7.2-14.3h-88.4l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128C392.8 38.8 403.9 32 416 32m-20.2 144h40.4L416 135.6zM352 352c-17.7 0-32-14.3-32-32s14.3-32 32-32h128c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 416H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l73.4-73.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 32c9 0 17.5 3.8 23.6 10.4l88 96c11.9 13 11.1 33.3-2 45.2s-33.3 11.1-45.2-2L192 146.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V146.3l-32.4 35.3c-11.9 13-32.2 13.9-45.2 2s-13.9-32.2-2-45.2l88-96C142.5 35.8 151 32 160 32"
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
