import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CodeCompareIcon: React.FC<
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
                  d="M320 488c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1S320 334.5 320 344v40h16c35.3 0 64-28.7 64-64V153.3c-28.3-12.3-48-40.5-48-73.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V320c0 70.7-57.3 128-128 128h-16zM456 80a24 24 0 1 0-48 0 24 24 0 1 0 48 0M192 24c0-9.5 5.6-18.1 14.2-21.9S225-.2 232 6.2l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1S192 177.5 192 168v-40h-16c-35.3 0-64 28.7-64 64v166.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80S0 476.2 0 432c0-32.8 19.7-61 48-73.3V192c0-70.7 57.3-128 128-128h16zM56 432a24 24 0 1 0 48 0 24 24 0 1 0-48 0"
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
                  d="M320 488c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1S320 334.5 320 344v48h16c39.8 0 72-32.2 72-72V156.3c-32.5-10.2-56-40.5-56-76.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3V320c0 66.3-53.7 120-120 120h-16zM464 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0M192 24c0-9.5 5.6-18.1 14.2-21.9S225-.2 232 6.2l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1S192 177.5 192 168v-48h-16c-39.8 0-72 32.2-72 72v163.7c32.5 10.2 56 40.5 56 76.3 0 44.2-35.8 80-80 80S0 476.2 0 432c0-35.8 23.5-66.1 56-76.3V192c0-66.3 53.7-120 120-120h16zM48 432a32 32 0 1 0 64 0 32 32 0 1 0-64 0"
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
                  d="M322.8 484.2c6.5 5.9 7 16.1 1.1 22.6s-16.1 7-22.6 1.1l-88-80c-3.3-3-5.2-7.3-5.2-11.8s1.9-8.8 5.2-11.8l88-80c6.5-5.9 16.7-5.5 22.6 1.1s5.5 16.7-1.1 22.6l-57.4 52H336c44.2 0 80-35.8 80-80V158.4c-36.5-7.4-64-39.7-64-78.4 0-44.2 35.8-80 80-80s80 35.8 80 80c0 38.7-27.5 71-64 78.4V320c0 61.9-50.1 112-112 112h-70.6zM384 80a48 48 0 1 0 96 0 48 48 0 1 0-96 0M189.2 27.8c-6.5-5.9-7-16.1-1.1-22.6s16.1-7 22.6-1.1l88 80c3.3 3 5.2 7.3 5.2 11.8s-1.9 8.8-5.2 11.8l-88 80c-6.5 5.9-16.7 5.5-22.6-1.1s-5.5-16.7 1.1-22.6l57.4-52H176c-44.2 0-80 35.8-80 80v161.6c36.5 7.4 64 39.7 64 78.4 0 44.2-35.8 80-80 80S0 476.2 0 432c0-38.7 27.5-71 64-78.4V192c0-61.9 50.1-112 112-112h70.6zM128 432a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M194.1 10.6c-3 3.3-2.7 8.3.5 11.3L267.3 88H176c-57.4 0-104 46.6-104 104v192.5c-31.6 3.9-56 30.9-56 63.5 0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5V192c0-48.6 39.4-88 88-88h91.3l-72.7 66.1c-3.3 3-3.5 8-.5 11.3s8 3.5 11.3.5l88-80c1.7-1.5 2.6-3.7 2.6-5.9s-1-4.4-2.6-5.9l-88-80c-3.3-3-8.3-2.7-11.3.5M80 400a48 48 0 1 1 0 96 48 48 0 1 1 0-96m237.9 101.4c3-3.3 2.7-8.3-.5-11.3L244.7 424H336c57.4 0 104-46.6 104-104V127.5c31.6-3.9 56-30.9 56-63.5 0-35.3-28.7-64-64-64s-64 28.7-64 64c0 32.6 24.4 59.6 56 63.5V320c0 48.6-39.4 88-88 88h-91.3l72.7-66.1c3.3-3 3.5-8 .5-11.3s-8-3.5-11.3-.5l-88 80c-1.7 1.5-2.6 3.7-2.6 5.9s1 4.4 2.6 5.9l88 80c3.3 3 8.3 2.7 11.3-.5M432 112a48 48 0 1 1 0-96 48 48 0 1 1 0 96"
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
                  d="M400 153.3c9.8 4.3 20.6 6.7 32 6.7s22.2-2.4 32-6.7V320c0 70.7-57.3 128-128 128h-16v40c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1S320 334.5 320 344v40h16c35.3 0 64-28.7 64-64zM112 358.7c-9.8-4.3-20.6-6.7-32-6.7s-22.2 2.4-32 6.7V192c0-70.7 57.3-128 128-128h16V24c0-9.5 5.6-18.1 14.2-21.9S225-.2 232 6.2l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1S192 177.5 192 168v-40h-16c-35.3 0-64 28.7-64 64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M408 80a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0M104 432a24 24 0 1 1-48 0 24 24 0 1 1 48 0M0 432a80 80 0 1 0 160 0 80 80 0 1 0-160 0"
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
