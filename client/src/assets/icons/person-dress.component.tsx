import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonDressIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96M88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1l38.3-114.8-33.9 56.4c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-16v96c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M208 48a48 48 0 1 0-96 0 48 48 0 1 0 96 0m21.7 185.7 37.4 66.1c6.5 11.5 21.2 15.6 32.7 9.1s15.6-21.2 9.1-32.7l-51.8-91.5c-19.8-35-56.9-56.6-97.1-56.6s-77.3 21.6-97.1 56.6l-51.8 91.5c-6.5 11.5-2.5 26.2 9.1 32.7s26.2 2.5 32.7-9.1l37.4-66.1-36.6 130c-2.9 10.2 4.8 20.3 15.4 20.3H96v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h32v104c0 13.3 10.7 24 24 24s24-10.7 24-24V384h26.9c10.6 0 18.3-10.1 15.4-20.3zM160 176c2.2 0 4 1.4 4.6 3.5l44 156.5h-97.2l44-156.5a4.8 4.8 0 0 1 4.6-3.5"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 80a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-40.8 241.7c7.9 4 11.1 13.6 7.2 21.5L73.9 368h172.2l-52.4-104.8c-4-7.9-.7-17.5 7.2-21.5s17.5-.7 21.5 7.2l64 128c2.5 5 2.2 10.9-.7 15.6s-8.1 7.6-13.6 7.6H224v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V400h-64v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96H48c-5.5 0-10.7-2.9-13.6-7.6s-3.2-10.6-.7-15.6l64-128c4-7.9 13.6-11.1 21.5-7.2zM99 196.6l-52.9 98.9c-4.2 7.8-13.9 10.7-21.7 6.6s-10.7-13.9-6.6-21.7l52.9-98.9c17.6-32.9 52-53.5 89.3-53.5s71.7 20.6 89.3 53.5l52.9 98.9c4.2 7.8 1.2 17.5-6.6 21.7s-17.5 1.2-21.7-6.6L221 196.6c-12-22.5-35.5-36.6-61-36.6s-49 14.1-61 36.6"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 96a40 40 0 1 0 0-80 40 40 0 1 0 0 80m0-96a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-45.5 200.4c4.2 1.4 6.5 5.9 5.1 10.1L67.1 368h185.8l-52.5-157.5c-1.4-4.2.9-8.7 5.1-10.1s8.7.9 10.1 5.1l56 168c.8 2.4.4 5.1-1.1 7.2s-3.9 3.3-6.5 3.3h-32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-16v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96H56c-2.6 0-5-1.2-6.5-3.3s-1.9-4.8-1.1-7.2l56-168c1.4-4.2 5.9-6.5 10.1-5.1M104 384v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96zm80 96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96h-32zM84.1 189.2 23.2 315.5c-1.9 4-6.7 5.6-10.7 3.7s-5.6-6.7-3.7-10.7l60.9-126.2c16-33.2 49.6-54.3 86.5-54.3h7.7c36.8 0 70.4 21.1 86.5 54.3l60.9 126.2c1.9 4 .3 8.8-3.7 10.7s-8.8.3-10.7-3.7l-61-126.3c-13.3-27.7-41.3-45.2-72.1-45.2h-7.7c-30.7 0-58.7 17.6-72.1 45.2z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1l38.3-114.8-33.9 56.4c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-16v96c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
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
