import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TowerControlIcon: React.FC<
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
                  d="M184 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h16v48h-40c-17.7 0-32 14.3-32 32H42.6C16 128-3.2 153.4 4.1 179l40.4 141.2C28.5 321.9 16 335.5 16 352c0 17.7 14.3 32 32 32h32v96c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32v-96h32c17.7 0 32-14.3 32-32 0-16.5-12.5-30.1-28.5-31.8L443.9 179c7.3-25.6-11.9-51-38.5-51H320c0-17.7-14.3-32-32-32h-40V48h16c13.3 0 24-10.7 24-24S277.3 0 264 0h-80m-56 192v128h-17c-.1-.3-.1-.5-.2-.8L74.4 192zm48 128V192h96v128zm144-128h53.6l-36.4 127.2-.1.3-.1.5h-17z"
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
                  d="M160 24c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v48h40c17.7 0 32 14.3 32 32h93.2c21.4 0 36.8 20.7 30.7 41.2l-41.2 137.3c7.9 3.9 13.3 12.1 13.3 21.5 0 13.3-10.7 24-24 24h-24v136c0 13.3-10.7 24-24 24s-24-10.7-24-24V352H128v136c0 13.3-10.7 24-24 24s-24-10.7-24-24V352H56c-13.3 0-24-10.7-24-24 0-9.4 5.4-17.6 13.3-21.5L4.1 169.2c-6.2-20.5 9.2-41.2 30.7-41.2H128c0-17.7 14.3-32 32-32h40V48h-16c-13.3 0-24-10.7-24-24M94.7 304H128V176H56.3zm81.3 0h96V176h-96zm144-128v128h33.3l38.4-128z"
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
                  d="M160 16c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32h48c17.7 0 32 14.3 32 32v32h80.9c26.2 0 45.3 24.8 38.7 50.1l-37 142.1c7.6 1.2 13.4 7.8 13.4 15.8 0 8.8-7.2 16-16 16h-48v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V352H128v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V352H48c-8.8 0-16-7.2-16-16 0-8 5.8-14.6 13.4-15.8l-37-142.1C1.8 152.8 20.9 128 47.1 128H128V96c0-17.7 14.3-32 32-32h48V32h-32c-8.8 0-16-7.2-16-16m-32 144.2v-.2H47.1c-5.2 0-9.1 5-7.7 10l39.1 150H128zM160 320h128V160H160zm160-160v160h49.6l39.1-150c1.3-5.1-2.5-10-7.7-10zm-32-32V96H160v32z"
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
                  d="M169 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h48v64h-56c-17.7 0-32 14.3-32 32v16H40c-21 0-36.3 19.8-31 40.1L49 321c-9.8 3-17 12.1-17 23v16c0 13.3 10.7 24 24 24h25v120c0 4.4 3.6 8 8 8s8-3.6 8-8V384h256v120c0 4.4 3.6 8 8 8s8-3.6 8-8V384h23c13.3 0 24-10.7 24-24v-16c0-10.2-6.3-18.8-15.2-22.3l40.1-153.6c5.3-20.3-10-40.1-31-40.1H321v-16c0-17.7-14.3-32-32-32h-56V16h48c4.4 0 8-3.6 8-8s-3.6-8-8-8H169m215.7 320H321V144h88.9c10.5 0 18.1 9.9 15.5 20l-40.2 154zm-79.7 0H145V144h160v176m-176 0H65.2l-.5-2-40.2-154c-2.6-10.1 5-20 15.5-20h89v176m232 48H56c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h336c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8zm-56-240H145v-16c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16z"
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
                  d="M74.4 192H128v128h-17c-.1-.3-.1-.5-.2-.8zm101.6 0h96v128h-96zm144 0h53.6l-36.4 127.2c-.1.3-.1.5-.2.8h-17zM4.1 179l40.4 141.2C28.5 321.9 16 335.5 16 352c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32 0-16.5-12.5-30.1-28.5-31.8L443.9 179c7.3-25.6-11.9-51-38.5-51H42.6C16 128-3.2 153.4 4.1 179"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 24c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-16v48h40c17.7 0 32 14.3 32 32H128c0-17.7 14.3-32 32-32h40V48h-16c-13.3 0-24-10.7-24-24m208 360v96c0 17.7-14.3 32-32 32H112c-17.7 0-32-14.3-32-32v-96z"
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
