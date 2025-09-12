import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Icon00: React.FC<
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
                  d="M144 32C64.5 32 0 96.5 0 176v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144M64 176c0-44.2 35.8-80 80-80s80 35.8 80 80v160c0 44.2-35.8 80-80 80s-80-35.8-80-80zM496 32c-79.5 0-144 64.5-144 144v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144m-80 144c0-44.2 35.8-80 80-80s80 35.8 80 80v160c0 44.2-35.8 80-80 80s-80-35.8-80-80z"
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
                  d="M144 32C64.5 32 0 96.5 0 176v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144M48 176c0-53 43-96 96-96s96 43 96 96v160c0 53-43 96-96 96s-96-43-96-96zM496 32c-79.5 0-144 64.5-144 144v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144m-96 144c0-53 43-96 96-96s96 43 96 96v160c0 53-43 96-96 96s-96-43-96-96z"
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
                  d="M144 32C64.5 32 0 96.5 0 176v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144M32 176c0-61.9 50.1-112 112-112s112 50.1 112 112v160c0 61.9-50.1 112-112 112S32 397.9 32 336zM496 32c-79.5 0-144 64.5-144 144v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144M384 176c0-61.9 50.1-112 112-112s112 50.1 112 112v160c0 61.9-50.1 112-112 112s-112-50.1-112-112z"
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
                  d="M144 32C64.5 32 0 96.5 0 176v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144M16 176c0-70.7 57.3-128 128-128s128 57.3 128 128v160c0 70.7-57.3 128-128 128S16 406.7 16 336zM496 32c-79.5 0-144 64.5-144 144v160c0 79.5 64.5 144 144 144s144-64.5 144-144V176c0-79.5-64.5-144-144-144M368 176c0-70.7 57.3-128 128-128s128 57.3 128 128v160c0 70.7-57.3 128-128 128s-128-57.3-128-128z"
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
                  d="M352 176c0-79.5 64.5-144 144-144s144 64.5 144 144v160c0 79.5-64.5 144-144 144s-144-64.5-144-144zm144-80c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80s80-35.8 80-80V176c0-44.2-35.8-80-80-80"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 176C0 96.5 64.5 32 144 32s144 64.5 144 144v160c0 79.5-64.5 144-144 144S0 415.5 0 336zm144-80c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80s80-35.8 80-80V176c0-44.2-35.8-80-80-80"
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
