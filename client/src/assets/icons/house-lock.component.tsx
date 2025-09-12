import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HouseLockIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 480c0 11.7 3.1 22.6 8.6 32h-.6c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.6H32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l181.3 159.3C447.2 181.7 416 223.2 416 272v24.6c-19.1 11.1-32 31.7-32 55.4zm144-240c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M272.5 5.7c9-7.6 22.1-7.6 31.1 0l188.6 160.1c-16.3 5.5-31 14.7-43 26.5L288 55.5 112 204.8V432c0 17.7 14.3 32 32 32h48V312c0-22.1 17.9-40 40-40h112c22.1 0 40 17.9 40 40v168c0 11.7 3.1 22.6 8.6 32H144c-44.2 0-80-35.8-80-80V245.5l-24.5 20.8c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8zM240 464h96V320h-96zm288-224c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235v197c0 44.2 35.8 80 80 80h248.6c-5.4-9.4-8.6-20.3-8.6-32h-16V320c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32v160h-64c-26.5 0-48-21.5-48-48V206.7L288 37.3l168.4 148.6c8.6-7.1 18.2-13 28.7-17.4zM336 480h-96V320h96zm192-256c26.5 0 48 21.5 48 48v48h-96v-48c0-26.5 21.5-48 48-48m-80 48v48c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80m0 80h160v128H448z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M293.3 2c-3-2.7-7.6-2.7-10.6 0L2.7 250c-3.3 2.9-3.6 8-.7 11.3s8 3.6 11.3.7L64 217.1V448c0 35.3 28.7 64 64 64h264.6c-2.9-5-5.1-10.3-6.5-16H368V328c0-13.3-10.7-24-24-24H232c-13.3 0-24 10.7-24 24v168h-80c-26.5 0-48-21.5-48-48V202.9L288 18.7l181.8 161c4.4-3.4 9.1-6.4 14.1-8.9zM224 496V328c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v168zm304-288c26.5 0 48 21.5 48 48v64h-96v-64c0-26.5 21.5-48 48-48m-64 48v64h-16c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32h-16v-64c0-35.3-28.7-64-64-64s-64 28.7-64 64m-16 80h160c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H448c-8.8 0-16-7.2-16-16V352c0-8.8 7.2-16 16-16"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M392.6 512c-5.4-9.4-8.6-20.3-8.6-32V352c0-23.7 12.9-44.4 32-55.4V272c0-48.8 31.2-90.3 74.7-105.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24 0 18 14 32.1 32 32.1h32v69.7c-.1.9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2 1.5.1 3 .2 4.5.2h56c22.1 0 40-17.9 40-40v-88c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v88c0 22.1 17.9 40 40 40z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 272v48h64v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32m-48 48v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32"
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
