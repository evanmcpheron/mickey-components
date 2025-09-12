import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserMagnifyingGlassIcon: React.FC<
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
                  d="M224 256a128 128 0 1 0 0-256 128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7V480c-88.4 0-160-71.6-160-160 0-5.1.2-10.1.7-15-6.2-.7-12.6-1-19-1zM448 240.1a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 208c26.7 0 51.4-8.2 71.9-22.1l79.1 79.1c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-79.1-79.1c14-20.5 22.1-45.3 22.1-71.9 0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128z"
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
                  d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1-160 0m208 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M49.3 464c8.9-63.3 63.3-112 129-112h91.4q11.25 0 21.9 1.8c-2.3-10.9-3.6-22.2-3.6-33.8 0-5.1.2-10.1.7-15-6.2-.7-12.6-1-19-1h-91.4C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7V480c-25 0-48.7-5.8-69.8-16zM448 240.1a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 208c26.7 0 51.4-8.2 71.9-22.1l79.1 79.1c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-79.1-79.1c14-20.5 22.1-45.3 22.1-71.9 0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128z"
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
                  d="M224 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 224a128 128 0 1 0 0-256 128 128 0 1 0 0 256m-45.7 80h91.4q9.75 0 19.2 1.2c-.6-5.7-.9-11.4-.9-17.2 0-5.1.2-10.1.7-15-6.2-.7-12.6-1-19-1h-91.4C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7V480H32c1.2-79.7 66.2-144 146.3-144M448 224.1a96 96 0 1 1 0 192 96 96 0 1 1 0-192m0 224c29.6 0 56.8-10 78.5-26.9l86.2 86.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-86.2-86.2C566 377 576 349.7 576 320.2c0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128z"
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
                  d="M112 128a112 112 0 1 1 224 0 112 112 0 1 1-224 0m240 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M16 482.3C16 392.7 88.7 320 178.3 320h91.4c6.2 0 12.3.3 18.3 1v-1c0-5.1.2-10.1.7-15-6.2-.7-12.6-1-19-1h-91.4C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7V480c-5.4 0-10.7-.3-16-.8v3.1c0 7.6-6.1 13.7-13.7 13.7H29.7c-7.6 0-13.7-6.1-13.7-13.7m432-274.2a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 240c32.5 0 62.1-12.1 84.7-32l93.7 93.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L544 404.8c19.9-22.6 32-52.2 32-84.7 0-70.7-57.3-128-128-128s-128 57.3-128 128 57.3 128 128 128"
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
                  d="M96 128a128 128 0 1 1 256 0 128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c6.4 0 12.7.3 19 1-.5 4.9-.7 9.9-.7 15 0 88.4 71.6 160 160 160v2.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M528 320.2a80 80 0 1 0-160 0 80 80 0 1 0 160 0M519.9 426c-20.5 14-45.3 22.1-71.9 22.1-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9l79.1 79.2c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z"
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
