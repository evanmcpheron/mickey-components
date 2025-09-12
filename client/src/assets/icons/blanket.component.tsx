import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BlanketIcon: React.FC<
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
                  d="M0 128v224c0 70.7 57.3 128 128 128h288c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h240c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h240c44.2 0 80-35.8 80-80V128c0-53-43-96-96-96H96C43 32 0 75 0 128"
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
                  d="M48 144v132.1c18.1-12.7 40.2-20.1 64-20.1h268c7 0 13.7 1 20 3V144c0-35.3-28.7-64-64-64H112c-35.3 0-64 28.7-64 64M0 368V144C0 82.1 50.1 32 112 32h224c61.9 0 112 50.1 112 112v176h-.1c.1 1.3.1 2.7.1 4 0 37.6-30.4 68-68 68H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h260c11 0 20-9 20-20s-9-20-20-20H112c-35.3 0-64 28.7-64 64s28.7 64 64 64h312c13.3 0 24 10.7 24 24s-10.7 24-24 24H112C50.1 480 0 429.9 0 368"
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
                  d="M32 128v184.4C49 297.2 71.4 288 96 288h296c8.6 0 16.7 1.9 24 5.4V128c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64M0 384V128c0-53 43-96 96-96h256c53 0 96 43 96 96v216c0 30.9-25.1 56-56 56H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h296c13.3 0 24-10.7 24-24s-10.7-24-24-24H96c-35.3 0-64 28.7-64 64s28.7 64 64 64h336c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-53 0-96-43-96-96"
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
                  d="M16 120v221.4C31.9 318.8 58.2 304 88 304h312c12.3 0 23.5 4.6 32 12.2V120c0-39.8-32.2-72-72-72H88c-39.8 0-72 32.2-72 72M.4 384H0V120c0-48.6 39.4-88 88-88h272c48.6 0 88 39.4 88 88v232c0 26.5-21.5 48-48 48H88c-4.4 0-8-3.6-8-8s3.6-8 8-8h312c17.7 0 32-14.3 32-32s-14.3-32-32-32H88c-39.8 0-72 32.2-72 72s32.2 72 72 72h352c4.4 0 8 3.6 8 8s-3.6 8-8 8H88c-48.6 0-88-39.4-88-88 0-2.7.1-5.4.4-8"
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
                  d="M0 352V128c0-53 43-96 96-96h256c53 0 96 43 96 96v176c0-44.2-35.8-80-80-80H128C57.3 224 0 281.3 0 352"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 288c-35.3 0-64 28.7-64 64s28.7 64 64 64h288c17.7 0 32 14.3 32 32s-14.3 32-32 32H128C57.3 480 0 422.7 0 352s57.3-128 128-128h240c44.2 0 80 35.8 80 80s-35.8 80-80 80H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h240c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
