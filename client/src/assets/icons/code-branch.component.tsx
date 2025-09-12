import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CodeBranchIcon: React.FC<
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
                  d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48m80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7c-28.3-12.3-48-40.5-48-73.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3v6.7c0 70.7-57.3 128-128 128h-96c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3 0 44.2-35.8 80-80 80S0 476.2 0 432c0-32.8 19.7-61 48-73.3V153.3C19.7 141 0 112.8 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80m232 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0M80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
                  d="M80 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64m80-32c0 35.8-23.5 66.1-56 76.3V256c20.1-15.1 45-24 72-24h96c39.8 0 72-32.2 72-72v-3.7c-32.5-10.2-56-40.5-56-76.3 0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3v3.7c0 66.3-53.7 120-120 120h-96c-39.8 0-72 32.2-72 72v3.7c32.5 10.2 56 40.5 56 76.3 0 44.2-35.8 80-80 80S0 476.2 0 432c0-35.8 23.5-66.1 56-76.3V156.3C23.5 146.1 0 115.8 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80m240 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M80 464a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M80 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96m80-48c0 38.7-27.5 71-64 78.4v115.2c20.3-20.7 48.7-33.6 80-33.6h96c44.2 0 80-35.8 80-80v-1.6c-36.5-7.4-64-39.7-64-78.4 0-44.2 35.8-80 80-80s80 35.8 80 80c0 38.7-27.5 71-64 78.4v1.6c0 61.9-50.1 112-112 112h-96c-44.2 0-80 35.8-80 80v1.6c36.5 7.4 64 39.7 64 78.4 0 44.2-35.8 80-80 80S0 476.2 0 432c0-38.7 27.5-71 64-78.4V158.4C27.5 151 0 118.7 0 80 0 35.8 35.8 0 80 0s80 35.8 80 80m208 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96M80 480a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M80 112a48 48 0 1 0 0-96 48 48 0 1 0 0 96m64-48c0 32.6-24.4 59.6-56 63.5v169c18.4-29.2 50.9-48.5 88-48.5h96c48.6 0 88-39.4 88-88v-32.5c-31.6-3.9-56-30.9-56-63.5 0-35.3 28.7-64 64-64s64 28.7 64 64c0 32.6-24.4 59.6-56 63.5V160c0 57.4-46.6 104-104 104h-96c-48.6 0-88 39.4-88 88v32.5c31.6 3.9 56 30.9 56 63.5 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-32.6 24.4-59.6 56-63.5v-257C40.4 123.6 16 96.6 16 64 16 28.7 44.7 0 80 0s64 28.7 64 64m272 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0M80 496a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M112 153.3c-9.8 4.3-20.6 6.7-32 6.7s-22.2-2.4-32-6.7v205.4c9.8-4.3 20.6-6.7 32-6.7s22.2 2.4 32 6.7V352c0-35.3 28.7-64 64-64h96c70.7 0 128-57.3 128-128v-6.7c-9.8 4.3-20.6 6.7-32 6.7s-22.2-2.4-32-6.7v6.7c0 35.3-28.7 64-64 64h-96c-23.3 0-45.2 6.2-64 17.1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104A80 80 0 1 0 80 0a80 80 0 1 0 0 160M368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160M56 432a24 24 0 1 1 48 0 24 24 0 1 1-48 0m104 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
