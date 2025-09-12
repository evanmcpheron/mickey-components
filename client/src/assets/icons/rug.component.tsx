import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RugIcon: React.FC<
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
                  d="M24 64h56v384H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-40h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-32h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-32h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-40h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24m88 0h416v384H112zm528 24c0 13.3-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56V64h56c13.3 0 24 10.7 24 24"
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
                  d="M24 64C10.7 64 0 74.7 0 88s10.7 24 24 24h8v40h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v32h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v32h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v40h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h592c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-32h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-32h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24H24m56 48h48v288H80V112m384 288H176V112h288zm48 0V112h48v288z"
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
                  d="M16 64C7.2 64 0 71.2 0 80s7.2 16 16 16h16v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v64H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h608c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-48h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-48h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V96h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H16m48 32h64v320H64V96m448 0h64v320h-64zm-32 0v320H160V96z"
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
                  d="M0 72c0-4.4 3.6-8 8-8h624c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v80h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v72h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v72h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v80h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-80H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-72H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-72H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V80H8c-4.4 0-8-3.6-8-8m48 96v264h80V80H48zm96 264h352V80H144zM512 80v352h80V80z"
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
                  d="M80 64v384h80V64zm400 0v384h80V64zm-32 0H192v384h256z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M24 64C10.7 64 0 74.7 0 88s10.7 24 24 24h8v40h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v32h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v32h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v40h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h56V64H24m592 0h-56v384h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-32h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-32h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-40h8c13.3 0 24-10.7 24-24s-10.7-24-24-24m-456 0v384h32V64zm320 0h-32v384h32z"
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
