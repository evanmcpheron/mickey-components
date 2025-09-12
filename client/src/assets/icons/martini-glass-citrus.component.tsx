import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MartiniGlassCitrusIcon: React.FC<
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
                  d="M432 240c53 0 96-43 96-96s-43-96-96-96c-35.5 0-66.6 19.3-83.2 48h-52.6C316 40.1 369.3 0 432 0c79.5 0 144 64.5 144 144s-64.5 144-144 144c-27.7 0-53.5-7.8-75.5-21.3l35.4-35.4c12.2 5.6 25.8 8.7 40.1 8.7M1.8 142.8c3.7-9 12.5-14.8 22.2-14.8h368c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2L232 346v118h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V345.9L7 169c-6.9-6.9-8.9-17.2-5.2-26.2"
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
                  d="M432 240c-14.3 0-27.9-3.1-40.1-8.7l-35.4 35.4c22 13.5 47.8 21.3 75.5 21.3 79.5 0 144-64.5 144-144S511.5 0 432 0c-62.7 0-116 40.1-135.8 96h52.6c16.6-28.7 47.6-48 83.2-48 53 0 96 43 96 96s-43 96-96 96M24 128c-9.7 0-18.5 5.8-22.2 14.8S.1 162.1 7 169l177 177v118h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64V345.9L409 169c6.9-6.9 8.9-17.2 5.2-26.2S401.7 128 392 128zm310.1 48L208 302.1 81.9 176z"
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
                  d="M432 256c-21.7 0-42-6.2-59.2-16.9l-23.1 23.1C373 278.5 401.4 288 432 288c79.5 0 144-64.5 144-144S511.5 0 432 0c-62.7 0-116 40.1-135.8 96h34.6c18-37.8 56.5-64 101.2-64 61.9 0 112 50.1 112 112s-50.1 112-112 112M16 128c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4L192 342.6V480h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80V342.6l187.3-187.3c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9zm345.4 32L208 313.4 54.6 160z"
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
                  d="M432 272c-27.6 0-53.2-8.8-74.1-23.6l-11.5 11.5c23.9 17.6 53.5 28.1 85.6 28.1 79.5 0 144-64.5 144-144S511.5 0 432 0c-64.2 0-118.6 42-137.2 100h16.9c17.9-49 65-84 120.2-84 70.7 0 128 57.3 128 128s-57.3 128-128 128zM8 128c-3.2 0-6.2 1.9-7.4 4.9s-.6 6.4 1.7 8.7L200 339.3V496h-96c-4.4 0-8 3.6-8 8s3.6 8 8 8h208c4.4 0 8-3.6 8-8s-3.6-8-8-8h-96V339.3l197.7-197.6c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9H8zm380.7 16L208 324.7 27.3 144z"
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
                  d="M24 128c-9.7 0-18.5 5.8-22.2 14.8S.1 162.1 7 169l177 177v118h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64V345.9L409 169c6.9-6.9 8.9-17.2 5.2-26.2S401.7 128 392 128z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M432 240c53 0 96-43 96-96s-43-96-96-96c-47.6 0-87.1 34.6-94.7 80h-48.4c8-72 69-128 143.1-128 79.5 0 144 64.5 144 144s-64.5 144-144 144c-39.3 0-74.9-15.7-100.8-41.2l33.9-33.9C382.4 229.7 406 240 432 240"
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
