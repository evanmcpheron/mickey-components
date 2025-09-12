import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonMilitaryPointingIcon: React.FC<
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
                  d="M246.9 14.1C234 15.2 224 26 224 39c0 13.8 11.2 25 25 25h151c8.8 0 16-7.2 16-16V17.4c0-9.4-8-16.7-17.3-16zM240 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H241.6c-1 5.2-1.6 10.5-1.6 16M72 224c-22.1 0-40 17.9-40 40s17.9 40 40 40h152v89.4l162.8-162.9c-13.3-4.3-27.3-6.5-41.6-6.5H72m345.7 20.9L246.6 416H416v-46.3l53.6 90.6c11.2 19 35.8 25.3 54.8 14.1s25.3-35.8 14.1-54.8l-76.2-128.8c-11.2-18.9-26.6-34.5-44.6-45.9M224 448v32c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-32z"
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
                  d="M224 39c0-13 10-23.8 22.9-24.9L398.7 1.4C408 .7 416 8 416 17.4V48c0 8.8-7.2 16-16 16H249c-13.8 0-25-11.2-25-25M32 248c0-13.3 10.7-24 24-24h288.6c42.9 0 82.5 22.9 103.9 60l92.3 160c6.6 11.5 2.7 26.2-8.8 32.8s-26.2 2.7-32.8-8.8L416 323.8V480c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32V272H56c-13.3 0-24-10.7-24-24m240 24v82.1l73.4-82.1H272m0 192h96v-32h-96zm96-145.2L309.7 384H368zM240 112c0-5.5.6-10.8 1.6-16h50.7c-2.7 4.7-4.3 10.2-4.3 16 0 17.7 14.3 32 32 32s32-14.3 32-32c0-5.8-1.6-11.3-4.3-16h50.7c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80"
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
                  d="M256 59.1V64h128V37.8zm142.2 36.1q1.8 8.1 1.8 16.8c0 44.2-35.8 80-80 80s-80-35.8-80-80q0-8.7 1.8-16.8C231.5 92.4 224 83.1 224 72V52.3c0-11.7 8.5-21.7 20.1-23.7l144-24c14.6-2.4 27.9 8.9 27.9 23.7V72c0 11.1-7.5 20.4-17.8 23.2m-33 .8h-90.5c-1.8 5-2.7 10.4-2.7 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16zM32 240c0-8.8 7.2-16 16-16h296.3c40.2 0 77.3 21.5 97.2 56.4l100.4 175.7c4.4 7.7 1.7 17.4-6 21.8s-17.4 1.7-21.8-6L416 300.2V464c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V256H48c-8.8 0-16-7.2-16-16m224 224c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-16H256zm128-168c0-4.3-.7-8.5-1.9-12.4L273.8 416H384zm-40-40h-88v131.2l104.4-127.7c-5-2.3-10.6-3.5-16.4-3.5"
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
                  d="M400 18.1V64H248c-4.4 0-8-3.6-8-8V45.2c0-4 3-7.4 7-7.9zm-155 3.3c-12 1.5-21 11.7-21 23.8V56c0 13.3 10.7 24 24 24h152c8.8 0 16-7.2 16-16V18.1c0-9.6-8.4-17.1-18-15.9zm144.1 226.9L240 418.7V304c0-8.8-7.2-16-16-16H72c-13.3 0-24-10.7-24-24s10.7-24 24-24h273.2c15.3 0 30.1 2.9 43.9 8.3M224 440.4V480c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V369.7l16 27.1 37.6 63.6c11.2 19 35.8 25.3 54.8 14.1s25.3-35.8 14.1-54.8l-76.2-128.9c-24.5-41.4-69-66.8-117.1-66.8H72c-22.1 0-40 17.9-40 40s17.9 40 40 40h152v136.3zm16 7.6h160v32c0 8.8-7.2 16-16 16H256c-8.8 0-16-7.2-16-16zm160-16H249.6l154.5-176.6c18.1 10.2 33.5 25 44.4 43.5l76.1 128.8c6.7 11.4 3 26.1-8.5 32.9s-26.1 3-32.9-8.5l-53.6-90.6c-3.7-6.2-11-9.2-18-7.3s-11.8 8.2-11.8 15.4V432zM240 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H382c1.3 5.1 2 10.5 2 16 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-5.5.7-10.9 2-16h-16.4c-1 5.2-1.6 10.5-1.6 16"
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
                  d="M240 112c0-11.4 2.4-22.2 6.7-32h146.6c4.3 9.8 6.7 20.6 6.7 32 0 44.2-35.8 80-80 80s-80-35.8-80-80m146.8 118.5q16.35 5.25 30.9 14.4L246.6 416H416v32H224v-54.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M237.8 28.5c-12.6 2-21.8 12.9-21.8 25.6 0 14.3 11.6 25.9 25.9 25.9H400c8.8 0 16-7.2 16-16V18.8C416 9 407.2 1.4 397.5 3zM345.2 224H72c-22.1 0-40 17.9-40 40s17.9 40 40 40h152v89.4l162.8-162.9c-13.3-4.3-27.3-6.5-41.6-6.5M224 480c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-32H224zm22.6-64H416v-46.3l53.6 90.7c11.2 19 35.8 25.3 54.8 14.1s25.3-35.8 14.1-54.8l-76.2-128.9c-11.2-18.9-26.6-34.5-44.6-45.9z"
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
