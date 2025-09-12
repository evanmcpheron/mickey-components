import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BowlChopsticksNoodlesIcon: React.FC<
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
                  d="M13.1 93.6 128 72V56c0-13.3 10.7-24 24-24s24 10.7 24 24v168h32V40c0-13.3 10.7-24 24-24s24 10.7 24 24v184h222.4c18.2 0 32.7 15.3 31.6 33.5-5.4 91.7-59.7 169.7-136.4 209.7l-1.2 9.7c-2.5 20-19.5 35-39.7 35H179.3c-20.2 0-37.2-15-39.7-35l-1.2-9.7C61.6 427.2 7.4 349.3 2 257.5.9 239.3 15.4 224 33.6 224H128v-48H16.2C7.3 176 0 168.7 0 159.7c0-8.8 7-16 15.7-16.2L128 140v-32L18.5 125.1c-9.7 1.5-18.5-6-18.5-15.8 0-7.7 5.5-14.3 13.1-15.7M488.4 176H288v-41l199.6-6.2c13.4-.5 24.4 10.2 24.4 23.6 0 13-10.6 23.6-23.6 23.6m3.9-124.9L288 83V42L484.4 5.2c14.3-2.7 27.6 8.3 27.6 22.9 0 11.5-8.4 21.2-19.7 23"
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
                  d="M13.1 93.6 128 72V56c0-13.3 10.7-24 24-24s24 10.7 24 24v168h32V40c0-13.3 10.7-24 24-24s24 10.7 24 24v184h208c26.5 0 48 21.5 48 48 0 90.8-54.1 169-131.7 204.2-8.1 21-28.4 35.8-52.3 35.8H184c-23.8 0-44.2-14.9-52.3-35.8C54.1 441 0 362.8 0 272c0-26.5 21.5-48 48-48h80v-48H16.2C7.3 176 0 168.7 0 159.7c0-8.8 7-16 15.7-16.2L128 140v-32L18.5 125.1c-9.7 1.5-18.5-6-18.5-15.8 0-7.7 5.5-14.3 13.1-15.7M488.4 176H288v-41l199.6-6.2c13.4-.5 24.4 10.2 24.4 23.6 0 13-10.6 23.6-23.6 23.6m3.9-124.9L288 83V42L484.4 5.2c14.3-2.7 27.6 8.3 27.6 22.9 0 11.5-8.4 21.2-19.7 23M151.5 432.5c11.5 5.2 20.4 14.7 25 26.4 1.2 3.1 4.2 5.1 7.5 5.1h144c3.3 0 6.3-2 7.5-5.1 4.5-11.7 13.5-21.2 25-26.4C421.6 404.8 464 343.3 464 272H48c0 71.3 42.4 132.8 103.5 160.5"
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
                  d="M160 32c0-8.8-7.2-16-16-16s-16 7.2-16 16v192H96V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v38.1L12.9 96.3C4.2 98-1.4 106.5.3 115.1s10.2 14.3 18.8 12.6l44.9-9v38L14.9 160c-8.8.6-15.5 8.2-14.9 17s8.2 15.5 17 14.9l47-3.1V224H50.9C23.3 224 1.4 247.3 3 274.8l.6 10.3c4.9 84.1 55.9 155.1 127.5 189.2 7.6 21.9 28.4 37.6 52.9 37.6h144c24.5 0 45.3-15.7 52.9-37.6 71.6-34.1 122.5-105.1 127.5-189.2l.6-10.3c1.6-27.6-20.3-50.8-47.9-50.8H160V32m32 28.5v32.6l307.1-61.4c8.7-1.7 14.3-10.2 12.6-18.8S501.5-1.4 492.9.3zm0 87.7v32.1L497.1 160c8.8-.6 15.5-8.2 14.9-17s-8.2-15.5-17-14.9zm-30.7 315.7c-2.8-8.1-8.7-14.7-16.5-18.4-61.4-29.2-105-90.1-109.3-162.2l-.6-10.3c-.5-9.2 6.8-16.9 16-16.9h410.2c9.2 0 16.5 7.7 16 16.9l-.6 10.3c-4.2 72.1-47.8 133-109.3 162.2-7.7 3.7-13.7 10.3-16.5 18.4-3.3 9.4-12.2 16.1-22.7 16.1H184c-10.4 0-19.4-6.7-22.7-16.1"
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
                  d="M160 32c0-4.4-3.6-8-8-8s-8 3.6-8 8v192h-32V48c0-4.4-3.6-8-8-8s-8 3.6-8 8v37.4L6.4 104.2c-4.3.9-7.1 5.1-6.2 9.5s5.1 7.1 9.5 6.2L96 101.7v44.6L7.5 152c-4.4.3-7.8 4.1-7.5 8.5s4.1 7.8 8.5 7.5l87.5-5.7V224H33.9c-18.4 0-33 15.5-31.9 33.9l1.6 27.3c4.9 83.3 54.8 153.7 125.3 188.2 4.3 22 23.8 38.7 47.1 38.7h160c23.3 0 42.8-16.6 47.1-38.7 70.5-34.5 120.4-104.9 125.3-188.2l1.6-27.3c1.1-18.4-13.5-33.9-31.9-33.9H160V32m32 33.2v16.4l313.6-65.8c4.3-.9 7.1-5.1 6.2-9.5s-5.1-7.1-9.5-6.2zm0 74.9v16L504.5 136c4.4-.3 7.8-4.1 7.5-8.5s-4.1-7.8-8.5-7.5zM104 240h374.1c9.2 0 16.5 7.7 16 16.9l-1.6 27.3c-4.5 77.3-50.9 142.7-116.4 174.7-4.5 2.2-7.7 6.4-8.7 11.3-2.9 14.7-15.9 25.8-31.4 25.8H176c-15.5 0-28.5-11.1-31.4-25.8-1-4.9-4.2-9.1-8.7-11.3-65.5-32-111.8-97.4-116.4-174.7L18 256.9c-.5-9.2 6.8-16.9 16-16.9z"
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
                  d="M64 84v34l-45.5 7.1c-9.7 1.5-18.5-6-18.5-15.8 0-7.7 5.5-14.3 13.1-15.7zm0 58v34H16.2C7.3 176 0 168.7 0 159.7c0-8.8 7-16 15.7-16.2zm160 34v-39l263.6-8.2c13.4-.5 24.4 10.2 24.4 23.6 0 13-10.6 23.6-23.6 23.6zm0-83V54L484.4 5.2c14.3-2.7 27.6 8.3 27.6 22.9 0 11.5-8.4 21.2-19.7 23z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 40c0-13.3-10.7-24-24-24s-24 10.7-24 24v184h-32V56c0-13.3-10.7-24-24-24S64 42.7 64 56v168H33.6C15.4 224 .9 239.3 2 257.5c5.4 91.7 59.7 169.7 136.4 209.7l1.2 9.7c2.5 20 19.5 35 39.7 35h153.4c20.2 0 37.2-15 39.7-35l1.2-9.7c76.8-40 131-118 136.4-209.7 1.1-18.2-13.4-33.5-31.6-33.5H192z"
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
