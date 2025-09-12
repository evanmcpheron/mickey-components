import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SocksIcon: React.FC<
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
                  d="M175.2 476.6c-9.7-18-15.2-38.7-15.2-60.6 0-40.3 19-78.2 51.2-102.4l64-48c8.1-6 12.8-15.5 12.8-25.6V96H128v144c0 20.1-9.5 39.1-25.6 51.2l-64 48C14.2 357.3 0 385.8 0 416c0 53 43 96 96 96 20.8 0 41-6.7 57.6-19.2zM128 64h160V48c0-14.5 3.9-28.2 10.7-39.9C291 3 281.9 0 272 0h-96c-26.5 0-48 21.5-48 48zm192 32v144c0 20.1-9.5 39.1-25.6 51.2l-64 48C206.2 357.3 192 385.8 192 416c0 53 43 96 96 96 20.8 0 41-6.7 57.6-19.2l115.2-86.4C493 382.2 512 344.3 512 304V96zm192-32V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v16z"
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
                  d="M288 48c0-17 5.3-32.8 14.4-45.8C297.9.8 293 0 288 0H176c-26.5 0-48 21.5-48 48v186.3c0 21.7-9.8 42.2-26.6 55.9l-66.5 54C12.8 362.2 0 389.1 0 417.5 0 469.7 42.3 512 94.5 512h6.9c22.6 0 44.6-7.6 62.5-21.5l12.9-10.1c-8.4-14.6-13.9-31-15.9-48.5l-26.6 20.8c-9.4 7.3-21 11.3-32.9 11.3h-6.9C68.8 464 48 443.2 48 417.5c0-14 6.3-27.2 17.2-36.1l66.5-54c28-22.8 44.3-57 44.3-93.1V144h112V96H176V48zm80-48c-26.5 0-48 21.5-48 48v186.3c0 21.7-9.8 42.2-26.6 55.9l-66.5 54c-22.1 17.9-34.9 44.9-34.9 73.3 0 52.2 42.3 94.5 94.5 94.5h6.3c23.1 0 45.5-7.9 63.4-22.5l111.3-90.1c28.1-22.8 44.5-57.1 44.5-93.3V48c0-26.5-21.5-48-48-48zm0 48h96v48h-96zm0 96h96v162.2c0 21.7-9.8 42.3-26.7 56l-111.3 90c-9.4 7.6-21.1 11.8-33.2 11.8h-6.3c-25.7 0-46.5-20.8-46.5-46.5 0-14 6.3-27.2 17.2-36.1l66.5-54c28-22.8 44.3-57 44.3-93.1z"
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
                  d="M140.8 465.9C129 475 114.4 480 99.5 480H96c-35.3 0-64-28.7-64-64 0-20.1 9.5-39.1 25.6-51.2l57.6-43.2c28.2-21.2 44.8-54.3 44.8-89.6V128h128V96H160V48c0-8.8 7.2-16 16-16h113.6C292 20.2 297 9.4 303.9.1c-1-.1-2-.1-3-.1H176c-26.5 0-48 21.5-48 48v184c0 25.2-11.9 48.9-32 64l-57.6 43.2C14.2 357.3 0 385.8 0 416c0 53 43 96 96 96h3.5c22 0 43.4-7.3 60.8-20.8l16.1-12.4c-5.4-9.6-9.6-19.9-12.4-30.8zM368 0c-26.5 0-48 21.5-48 48v184c0 25.2-11.9 48.9-32 64l-57.6 43.2C206.2 357.3 192 385.8 192 416c0 53 43 96 96 96h3.5c22 0 43.4-7.3 60.8-20.8l116.1-89.7c27.4-21.2 43.5-53.9 43.5-88.6V48c0-26.5-21.5-48-48-48zm-16 48c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v48H352zm0 80h128v184.9c0 24.8-11.5 48.2-31.1 63.3l-116.1 89.7C321 475 306.4 480 291.5 480H288c-35.3 0-64-28.7-64-64 0-20.1 9.5-39.1 25.6-51.2l57.6-43.2c28.2-21.2 44.8-54.3 44.8-89.6z"
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
                  d="M168.4 461.7c2 5.1 4.2 10.1 6.8 14.9l-21.6 16.2C137 505.3 116.8 512 96 512c-53 0-96-43-96-96 0-30.2 14.2-58.7 38.4-76.8l64-48c16.1-12.1 25.6-31.1 25.6-51.2V48c0-26.5 21.5-48 48-48h96c9.9 0 19 3 26.7 8.1-2.7 4.7-5 9.7-6.7 14.9-5.5-4.4-12.4-7-20-7h-96c-17.7 0-32 14.3-32 32v48h144v16H144v128c0 25.2-11.9 48.9-32 64l-64 48c-20.1 15.1-32 38.8-32 64 0 44.2 35.8 80 80 80 17.3 0 34.2-5.6 48-16zM336 112v128c0 25.2-11.9 48.9-32 64l-64 48c-20.1 15.1-32 38.8-32 64 0 44.2 35.8 80 80 80 17.3 0 34.2-5.6 48-16l115.2-86.4c28.2-21.2 44.8-54.3 44.8-89.6V112zm0-16h160V48c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32zm176-48v256c0 40.3-19 78.2-51.2 102.4l-115.2 86.4C329 505.3 308.8 512 288 512c-53 0-96-43-96-96 0-30.2 14.2-58.7 38.4-76.8l64-48c16.1-12.1 25.6-31.1 25.6-51.2V48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48"
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
                  d="M298.7 8.1C291 3 281.9 0 272 0h-96c-26.5 0-48 21.5-48 48v16h160V48c0-14.5 3.9-28.2 10.7-39.9M128 96v32h160V96zm0 64v80c0 20.1-9.5 39.1-25.6 51.2l-64 48C14.2 357.3 0 385.8 0 416c0 53 43 96 96 96 20.8 0 41-6.7 57.6-19.2l21.6-16.2c-9.7-18-15.2-38.7-15.2-60.6 0-40.3 19-78.2 51.2-102.4l64-48c8.1-6 12.8-15.5 12.8-25.6v-80zm192-96v32h192V64zm192 64H320v32h192z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M320 128h192V96H320zm0 32v80c0 20.1-9.5 39.1-25.6 51.2l-64 48C206.2 357.3 192 385.8 192 416c0 53 43 96 96 96 20.8 0 41-6.7 57.6-19.2l115.2-86.4C493 382.2 512 344.3 512 304V160zm192-96V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v16zm-384 0v32h160V64zm160 64H128v32h160z"
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
