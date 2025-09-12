import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PeapodIcon: React.FC<
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
                  d="M464 0h-48C186.2 0 0 186.2 0 416v48c0 26.5 21.5 48 48 48h48c229.8 0 416-186.2 416-416V48c0-26.5-21.5-48-48-48M256 200a56 56 0 1 1 0 112 56 56 0 1 1 0-112M88 368a56 56 0 1 1 112 0 56 56 0 1 1-112 0M368 88a56 56 0 1 1 0 112 56 56 0 1 1 0-112"
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
                  d="M416 48C212.8 48 48 212.8 48 416v48h48c203.2 0 368-164.8 368-368V48zm0-48h48c26.5 0 48 21.5 48 48v48c0 229.8-186.2 416-416 416H48c-26.5 0-48-21.5-48-48v-48C0 186.2 186.2 0 416 0M256 200a56 56 0 1 1 0 112 56 56 0 1 1 0-112M88 368a56 56 0 1 1 112 0 56 56 0 1 1-112 0M368 88a56 56 0 1 1 0 112 56 56 0 1 1 0-112"
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
                  d="M416 32C203.9 32 32 203.9 32 416v48c0 8.8 7.2 16 16 16h48c212.1 0 384-171.9 384-384V48c0-8.8-7.2-16-16-16zm0-32h48c26.5 0 48 21.5 48 48v48c0 229.8-186.2 416-416 416H48c-26.5 0-48-21.5-48-48v-48C0 186.2 186.2 0 416 0m-48 112a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64 32a64 64 0 1 1-128 0 64 64 0 1 1 128 0M224 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128m-144 48a32 32 0 1 0 64 0 32 32 0 1 0-64 0m32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128"
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
                  d="M416 16C195.1 16 16 195.1 16 416v48c0 17.7 14.3 32 32 32h48c220.9 0 400-179.1 400-400V48c0-17.7-14.3-32-32-32zm0-16h48c26.5 0 48 21.5 48 48v48c0 229.8-186.2 416-416 416H48c-26.5 0-48-21.5-48-48v-48C0 186.2 186.2 0 416 0M304 144a64 64 0 1 1 128 0 64 64 0 1 1-128 0m64 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-112 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128m48 64a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-160 48a64 64 0 1 1 0 128 64 64 0 1 1 0-128m48 64a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
                  d="M368 200a56 56 0 1 0 0-112 56 56 0 1 0 0 112m-56 56a56 56 0 1 0-112 0 56 56 0 1 0 112 0M200 368a56 56 0 1 0-112 0 56 56 0 1 0 112 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M464 0h-48C186.2 0 0 186.2 0 416v48c0 26.5 21.5 48 48 48h48c229.8 0 416-186.2 416-416V48c0-26.5-21.5-48-48-48M256 200a56 56 0 1 1 0 112 56 56 0 1 1 0-112M88 368a56 56 0 1 1 112 0 56 56 0 1 1-112 0M368 88a56 56 0 1 1 0 112 56 56 0 1 1 0-112"
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
