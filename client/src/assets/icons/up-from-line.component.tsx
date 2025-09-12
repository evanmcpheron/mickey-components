import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UpFromLineIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M37.9 185.4 166.5 42.6c6.1-6.7 14.7-10.6 23.8-10.6h3.5c9.1 0 17.7 3.9 23.8 10.6l128.5 142.8c3.8 4.2 5.9 9.8 5.9 15.5 0 12.8-10.4 23.1-23.1 23.1H256v128c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V224H55.1C42.4 224 32 213.6 32 200.9c0-5.7 2.1-11.2 5.9-15.5M32 416h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M82.2 192 192 82l109.8 110H248c-13.3 0-24 10.7-24 24v120h-64V216c0-13.3-10.7-24-24-24zM192 32c-11.5 0-22.5 4.6-30.6 12.7L45.6 160.8c-8.7 8.7-13.6 20.5-13.6 32.8 0 25.6 20.8 46.4 46.4 46.4H112v96c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-96h33.6c25.6 0 46.4-20.8 46.4-46.4 0-12.3-4.9-24.1-13.6-32.8L222.6 44.7C214.5 36.6 203.5 32 192 32M24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M190.2 64.8c.5-.5 1.1-.8 1.8-.8s1.4.3 1.8.8l124.4 131.9c1.2 1.2 1.8 2.9 1.8 4.6 0 3.7-3 6.7-6.7 6.7H256c-8.8 0-16 7.2-16 16v120c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V224c0-8.8-7.2-16-16-16H70.7c-3.7 0-6.7-3-6.7-6.7 0-1.7.7-3.3 1.8-4.6zM192 32c-9.5 0-18.6 3.9-25.1 10.8l-124.4 132C35.8 182 32 191.5 32 201.3c0 21.4 17.3 38.7 38.7 38.7H112v104c0 22.1 17.9 40 40 40h80c22.1 0 40-17.9 40-40V240h41.3c21.4 0 38.7-17.3 38.7-38.7 0-9.9-3.8-19.3-10.5-26.5l-124.4-132C210.6 35.9 201.5 32 192 32M16 480h352c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M184 51.3c2.1-2.1 5-3.3 8-3.3s5.9 1.2 8 3.3l131.8 132.1c2.7 2.7 4.2 6.4 4.2 10.2 0 8-6.5 14.4-14.4 14.4H248c-4.4 0-8 3.6-8 8v136c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V216c0-4.4-3.6-8-8-8H62.4c-8 0-14.4-6.5-14.4-14.4 0-3.8 1.5-7.5 4.2-10.2zm8-19.3c-7.2 0-14.2 2.9-19.3 8L40.9 172.1c-5.7 5.7-8.9 13.4-8.9 21.5 0 16.8 13.6 30.4 30.4 30.4H128v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V224h65.6c16.8 0 30.4-13.6 30.4-30.4 0-8.1-3.2-15.8-8.9-21.5L211.3 40c-5.1-5.1-12.1-8-19.3-8M8 480h368c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 448c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M164.7 43.3 41.9 166.1c-6.4 6.4-9.9 15-9.9 24 0 18.7 15.2 33.9 33.9 33.9H128v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V224h62.1c18.7 0 33.9-15.2 33.9-33.9 0-9-3.6-17.6-9.9-24L219.3 43.3C212.1 36.1 202.2 32 192 32s-20.1 4.1-27.3 11.3"
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
