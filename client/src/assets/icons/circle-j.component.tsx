import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CircleJIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m80-360v136c0 53-43 96-96 96s-96-43-96-96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c0 26.5 21.5 48 48 48s48-21.5 48-48V152c0-13.3 10.7-24 24-24s24 10.7 24 24"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m80-360c0-13.3-10.7-24-24-24s-24 10.7-24 24v136c0 26.5-21.5 48-48 48s-48-21.5-48-48v-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v8c0 53 43 96 96 96s96-43 96-96z"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m80-368c0-8.8-7.2-16-16-16s-16 7.2-16 16v144c0 35.3-28.7 64-64 64s-64-28.7-64-64v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c0 53 43 96 96 96s96-43 96-96z"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m80-376c0-4.4-3.6-8-8-8s-8 3.6-8 8v160c0 39.8-32.2 72-72 72s-72-32.2-72-72v-16c0-4.4-3.6-8-8-8s-8 3.6-8 8v16c0 48.6 39.4 88 88 88s88-39.4 88-88z"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m80-360v136c0 53-43 96-96 96s-96-43-96-96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c0 26.5 21.5 48 48 48s48-21.5 48-48V152c0-13.3 10.7-24 24-24s24 10.7 24 24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M312 128c13.3 0 24 10.7 24 24v136c0 53-43 96-96 96s-96-43-96-96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c0 26.5 21.5 48 48 48s48-21.5 48-48V152c0-13.3 10.7-24 24-24"
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
