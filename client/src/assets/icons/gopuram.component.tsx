import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GopuramIcon: React.FC<
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
                  d="M120 0c13.3 0 24 10.7 24 24v8h40v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h48v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h40v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v104c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64V352h-32V224h-32v-96h-32v96h32v128h32v160h-80v-48c0-26.5-21.5-48-48-48s-48 21.5-48 48v48h-80V352h32V224h32v-96h-32v96h-32v128H96v160H32c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32v-96c0-17.7 14.3-32 32-32v-64c0-17.7 14.3-32 32-32V24c0-13.3 10.7-24 24-24m136 272c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-32-80v32h64v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32"
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
                  d="M120 0c13.3 0 24 10.7 24 24v8h48v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h48v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v106.7c18.6 6.6 32 24.4 32 45.3v48c0 .9 0 1.8-.1 2.7 18.7 6.6 32.1 24.4 32.1 45.3v64c0 .9 0 1.8-.1 2.7 18.7 6.6 32.1 24.4 32.1 45.3v80c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-80c0-20.9 13.4-38.7 32.1-45.3 0-.9-.1-1.8-.1-2.7v-64c0-20.9 13.4-38.7 32.1-45.3 0-.9-.1-1.8-.1-2.7v-48c0-20.9 13.4-38.7 32-45.3V24c0-13.3 10.7-24 24-24m24 80v48h224V80zm-32 96v48h48v-48h-48m208 48v-48H192v48h32c0-17.7 14.3-32 32-32s32 14.3 32 32zm32-48v48h48v-48h-48m0 96H160v64h64v-16c0-17.7 14.3-32 32-32s32 14.3 32 32v16h64zm32 64h48v-64h-48zM128 464h80v-16c0-26.5 21.5-48 48-48s48 21.5 48 48v16h80v-80H128zm288 0h48v-80h-48zM128 272H80v64h48zM96 384H48v80h48z"
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
                  d="M112 0c8.8 0 16 7.2 16 16v16h64V16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h64V16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h64V16c0-8.8 7.2-16 16-16s16 7.2 16 16v114.7c18.6 6.6 32 24.4 32 45.3v48c0 .9 0 1.8-.1 2.7 18.7 6.6 32.1 24.4 32.1 45.3v80c0 .9 0 1.8-.1 2.7 18.7 6.6 32.1 24.4 32.1 45.3v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-64c0-20.9 13.4-38.7 32.1-45.3-.1-.9-.1-1.8-.1-2.7v-80c0-20.9 13.4-38.8 32.1-45.3-.1-.9-.1-1.8-.1-2.7v-48c0-20.9 13.4-38.7 32-45.3V16c0-8.8 7.2-16 16-16m112 480h64c0-17.7-14.3-32-32-32s-32 14.3-32 32m96 0h64v-96H128v96h64c0-35.3 28.7-64 64-64s64 28.7 64 64M128 80v48h256V64H128zm-16 80c-8.8 0-16 7.2-16 16v48h64v-64h-48m48 96v96h48v-16c0-26.5 21.5-48 48-48s48 21.5 48 48v16h48v-96H160m112-48v16h48v-64H192v64h48v-16c0-8.8 7.2-16 16-16s16 7.2 16 16m0 144v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16zm144-128v-48c0-8.8-7.2-16-16-16h-48v64zm0 32h-32v96h64v-80c0-8.8-7.2-16-16-16zm0 224h48c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-48zM128 256H80c-8.8 0-16 7.2-16 16v80h64zM96 384H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h48z"
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
                  d="M104 0c4.4 0 8 3.6 8 8v24h80V8c0-4.4 3.6-8 8-8s8 3.6 8 8v24h96V8c0-4.4 3.6-8 8-8s8 3.6 8 8v24h80V8c0-4.4 3.6-8 8-8s8 3.6 8 8v104.8c18.3 3.7 32 19.8 32 39.2v72.8c18.3 3.7 32 19.8 32 39.2v88.8c18.3 3.7 32 19.8 32 39.2v80c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40v-80c0-19.4 13.7-35.5 32-39.2V264c0-19.4 13.7-35.5 32-39.2V152c0-19.4 13.7-35.5 32-39.2V8c0-4.4 3.6-8 8-8m104 496h96v-32c0-26.5-21.5-48-48-48s-48 21.5-48 48zm112 0h80V368H112v128h80v-32c0-35.3 28.7-64 64-64s64 28.7 64 64zM112 80v32h288V48H112zm-8 48c-13.3 0-24 10.7-24 24v72h80v-96h-56m72 0v96h48v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h48v-96zm96 64c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h32zM128 352h80v-32c0-26.5 21.5-48 48-48s48 21.5 48 48v32h80V240H128zm256-128h48v-72c0-13.3-10.7-24-24-24h-56v96zm-96 128v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32zm112-112v112h64v-88c0-13.3-10.7-24-24-24h-40m-320 0h-8c-13.3 0-24 10.7-24 24v88h64V240zM40 368c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h56V368H40m432 128c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24h-56v128z"
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
                  d="M320 128v96h32v-96zm64 224V224h-32v128zm0 0v160h32V352zM160 224h-32v128H96v160h32V352h32zm0 0h32v-96h-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M120 0c13.3 0 24 10.7 24 24v8h40v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h48v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h40v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v104c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-64V352h-32V224h-32v-96h-32v96h32v128h32v160h-80v-48c0-26.5-21.5-48-48-48s-48 21.5-48 48v48h-80V352h32V224h32v-96h-32v96h-32v128H96v160H32c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32v-96c0-17.7 14.3-32 32-32v-64c0-17.7 14.3-32 32-32V24c0-13.3 10.7-24 24-24m136 272c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32m-32-80v32h64v-32c0-17.7-14.3-32-32-32s-32 14.3-32 32"
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
