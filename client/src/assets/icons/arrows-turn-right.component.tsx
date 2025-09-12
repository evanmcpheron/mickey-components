import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowsTurnRightIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M297.4 9.4c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l41.3-41.4H128c-35.3 0-64 28.7-64 64v32c0 17.7-14.3 32-32 32S0 273.7 0 256v-32C0 153.3 57.3 96 128 96h210.7l-41.3-41.4c-12.5-12.5-12.5-32.8 0-45.3zm-96 256c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l41.3-41.4H96c-17.7 0-32 14.3-32 32v32c0 17.7-14.3 32-32 32S0 497.7 0 480v-32c0-53 43-96 96-96h146.7l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M294.4 7.7c9-9.7 24.2-10.3 33.9-1.3l112 104c4.9 4.5 7.7 10.9 7.7 17.6s-2.8 13-7.7 17.6l-112 104c-9.7 9-24.9 8.5-33.9-1.3s-8.5-24.9 1.3-33.9l67.2-62.4H120c-39.8 0-72 32.2-72 72v40c0 13.3-10.7 24-24 24S0 277.3 0 264v-40c0-66.3 53.7-120 120-120h242.9l-67.2-62.4c-9.7-9-10.3-24.2-1.3-33.9m-96 256c9-9.7 24.2-10.3 33.9-1.3l112 104c4.9 4.5 7.7 10.9 7.7 17.6s-2.8 13-7.7 17.6l-112 104c-9.7 9-24.9 8.5-33.9-1.3s-8.5-24.9 1.3-33.9l67.2-62.4H88c-22.1 0-40 17.9-40 40v40c0 13.3-10.7 24-24 24S0 501.3 0 488v-40c0-48.6 39.4-88 88-88h178.9l-67.2-62.4c-9.7-9-10.3-24.2-1.3-33.9"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M292 5.5c5.8-6.7 15.9-7.3 22.6-1.5l128 112c3.5 3 5.5 7.4 5.5 12s-2 9-5.5 12l-128 112c-6.7 5.8-16.8 5.1-22.6-1.5s-5.1-16.8 1.5-22.6l96-84H112c-44.2 0-80 35.8-80 80v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V224c0-61.9 50.1-112 112-112h277.4l-96-84c-6.6-5.8-7.3-15.9-1.5-22.6zm-96 256c5.8-6.6 15.9-7.3 22.6-1.5l128 112c3.5 3 5.5 7.4 5.5 12s-2 9-5.5 12l-128 112c-6.7 5.8-16.8 5.1-22.6-1.5s-5.1-16.8 1.5-22.6l96-84H80c-26.5 0-48 21.5-48 48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V448c0-44.2 35.8-80 80-80h213.4l-96-84c-6.7-5.8-7.3-15.9-1.5-22.6z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M306 10.7c2.9-3.3 8-3.7 11.3-.8l128 112c1.7 1.5 2.7 3.7 2.7 6s-1 4.5-2.7 6l-128 112c-3.3 2.9-8.4 2.6-11.3-.8s-2.6-8.4.8-11.3l112-98H104c-48.6 0-88 39.4-88 88v56c0 4.4-3.6 8-8 8s-8-3.6-8-8V224c0-57.4 46.6-104 104-104h314.7l-112-98c-3.3-2.9-3.7-8-.8-11.3zm-96 256c2.9-3.3 8-3.7 11.3-.8l128 112c1.7 1.5 2.7 3.7 2.7 6s-1 4.5-2.7 6l-128 112c-3.3 2.9-8.4 2.6-11.3-.8s-2.6-8.4.8-11.3l112-98H72c-30.9 0-56 25.1-56 56v56c0 4.4-3.6 8-8 8s-8-3.6-8-8V448c0-39.8 32.2-72 72-72h250.7l-112-98c-3.3-2.9-3.7-8-.8-11.3z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M246.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l41.4 41.3H96c-53 0-96 43-96 96v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c0-17.7 14.3-32 32-32h146.7l-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96H128C57.3 96 0 153.3 0 224v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c0-35.3 28.7-64 64-64h210.7l-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3z"
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
