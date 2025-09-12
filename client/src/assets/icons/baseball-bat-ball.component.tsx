import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BaseballBatBallIcon: React.FC<
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
                  d="M424 0c-12.4 0-24.2 4.9-33 13.7L233.5 171.2c-10.5 10.5-19.8 22.1-27.7 34.6l-73.1 115.8c-7.3 11.5-15.8 22.2-25.5 31.9l-37.3 37.2 51.3 51.3 37.3-37.3c9.6-9.6 20.3-18.2 31.9-25.5l115.8-73.1c12.5-7.9 24.1-17.2 34.6-27.7L498.3 121c8.7-8.7 13.7-20.6 13.7-33s-4.9-24.2-13.7-33L457 13.7C448.2 4.9 436.4 0 424 0m88 432a80 80 0 1 0-160 0 80 80 0 1 0 160 0M15 399c-9.4 9.4-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L49 399c-9.4-9.4-24.6-9.4-33.9 0z"
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
                  d="M372 17.5C383.8 6.3 399.5 0 415.7 0c16.8 0 32.9 6.7 44.7 18.5l33 33c11.9 11.9 18.5 28 18.5 44.7 0 16.3-6.3 31.9-17.5 43.7L356.3 284.7c-14.1 14.8-30.3 27.5-48 37.8l-106.5 61.7c-12.6 7.3-24.3 16.3-34.6 26.6l-38.6 38.6c-.3-.3-.6-.7-1-1l-64-64c-.3-.3-.7-.6-1-1l38.6-38.6c10.3-10.3 19.3-22 26.6-34.6l61.6-106.5c10.3-17.7 23-33.9 37.8-48zM171.9 329.9l10.2 10.2L284.2 281c13.8-8 26.4-17.9 37.3-29.4l138.3-144.8c2.7-2.8 4.2-6.6 4.2-10.5 0-4-1.6-7.9-4.5-10.8l-33-33c-2.9-2.9-6.7-4.5-10.8-4.5-3.9 0-7.7 1.5-10.5 4.2L260.4 190.4c-11.5 11-21.4 23.6-29.4 37.3zM464 432a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-112 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0M15 399c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L15 433c-9.4-9.4-9.4-24.6 0-33.9z"
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
                  d="M416 0c-14.5 0-28.4 5.8-38.6 16L226.1 167.2c-9.7 9.7-18.4 20.3-26 31.7l-74.9 112.4c-6.4 9.6-13.8 18.6-22 26.8L32 409.4l-4.7-4.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l4.7 4.7 11.3 11.3 48 48L80 502.6l4.7 4.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-4.7-4.7 71.2-71.2c8.2-8.2 17.2-15.6 26.8-22L313 311.9c11.4-7.6 22-16.3 31.7-26L496 134.6c10.2-10.2 16-24.1 16-38.6s-5.8-28.4-16-38.6L454.6 16C444.4 5.8 430.5 0 416 0M80 457.4 54.6 432l71.2-71.2 2.1-2.1 25.5 25.3-2.1 2.1zm98.1-93.9-29.6-29.6 3.3-4.8 74.9-112.4c6.4-9.6 13.8-18.6 22-26.8L400 38.6c4.2-4.2 10-6.6 16-6.6s11.8 2.4 16 6.6L473.4 80c4.2 4.2 6.6 10 6.6 16s-2.4 11.8-6.6 16L322.1 263.2c-8.2 8.2-17.2 15.6-26.8 22l-112.4 74.9-4.8 3.3zM384 432a48 48 0 1 1 96 0 48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
                  d="M424 0c-12.4 0-24.2 4.9-33 13.7L233.5 171.2c-10.5 10.5-19.8 22.1-27.7 34.6l-73.1 115.8c-7.3 11.5-15.8 22.2-25.5 31.9L28 432.7l-14.3-14.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l80 80c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L79.3 484l79.2-79.2c9.6-9.6 20.3-18.2 31.9-25.5l115.8-73.1c12.5-7.9 24.1-17.2 34.6-27.7L498.3 121c8.7-8.7 13.7-20.6 13.7-33s-4.9-24.2-13.7-33L457 13.7C448.2 4.9 436.4 0 424 0M68 472.7 39.3 444l79.2-79.2c1.8-1.8 3.6-3.7 5.4-5.6l28.9 28.9c-1.9 1.8-3.8 3.5-5.6 5.4zm97-95L134.3 347c4.2-5.4 8.2-11 11.9-16.8l73.1-115.8c7.3-11.5 15.8-22.2 25.5-31.9L402.3 25c5.7-5.7 13.5-9 21.7-9s15.9 3.2 21.7 9L487 66.3c5.7 5.7 9 13.5 9 21.7s-3.2 15.9-9 21.7L329.5 267.2c-9.6 9.6-20.3 18.2-31.9 25.5l-115.8 73.1c-5.8 3.7-11.4 7.6-16.8 11.9M368 432a64 64 0 1 1 128 0 64 64 0 1 1-128 0m144 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"
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
                  d="M150.1 294.1 218 362l-27.6 17.4c-11.5 7.3-22.2 15.8-31.9 25.5l-51.9 51.9-51.3-51.4 51.9-51.9c9.6-9.6 18.2-20.3 25.5-31.9l17.4-27.6zM432 352a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M424 0c-12.4 0-24.2 4.9-33 13.7L233.5 171.2c-10.5 10.5-19.8 22.1-27.7 34.6L150.1 294l67.9 67.9 88.2-55.7c12.5-7.9 24.1-17.2 34.6-27.7L498.3 121c8.7-8.7 13.7-20.6 13.7-33s-4.9-24.2-13.7-33L457 13.7C448.2 4.9 436.4 0 424 0M49 399c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"
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
