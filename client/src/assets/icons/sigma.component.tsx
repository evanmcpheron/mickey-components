import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SigmaIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M2.4 51.8C7.4 39.8 19.1 32 32 32h288c35.3 0 64 28.7 64 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V96H109.3l137.3 137.4c12.5 12.5 12.5 32.8 0 45.3L109.3 416H320v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 35.3-28.7 64-64 64H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L178.7 256 9.4 86.6c-9.2-9.1-11.9-22.9-7-34.8"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M1.8 46.8C5.5 37.8 14.3 32 24 32h304c30.9 0 56 25.1 56 56v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88c0-4.4-3.6-8-8-8H81.9L241 239c9.4 9.4 9.4 24.6 0 33.9L81.9 432H328c4.4 0 8-3.6 8-8v-48c0-13.3 10.7-24 24-24s24 10.7 24 24v48c0 30.9-25.1 56-56 56H24c-9.7 0-18.5-5.8-22.2-14.8S.1 445.9 7 439l183-183L7 73C.2 66.1-1.9 55.8 1.8 46.8"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M1.3 41.6C3.9 35.8 9.6 32 16 32h328c22.1 0 40 17.9 40 40v72c0 8.8-7.2 16-16 16s-16-7.2-16-16V72c0-4.4-3.6-8-8-8H52.5l167.3 181.1c5.7 6.1 5.7 15.6 0 21.7L52.5 448H344c4.4 0 8-3.6 8-8v-72c0-8.8 7.2-16 16-16s16 7.2 16 16v72c0 22.1-17.9 40-40 40H16c-6.4 0-12.1-3.8-14.7-9.6s-1.4-12.6 2.9-17.3l182-197.1L4.2 58.9c-4.3-4.7-5.4-11.5-2.9-17.3"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M.7 36.7C2 33.8 4.8 32 8 32h344c17.7 0 32 14.3 32 32v64c0 4.4-3.6 8-8 8s-8-3.6-8-8V64c0-8.8-7.2-16-16-16H25.8L206 250.7c2.7 3 2.7 7.6 0 10.6L25.8 464H352c8.8 0 16-7.2 16-16v-64c0-4.4 3.6-8 8-8s8 3.6 8 8v64c0 17.7-14.3 32-32 32H8c-3.2 0-6-1.8-7.3-4.7s-.8-6.2 1.3-8.6L189.3 256 2 45.3C-.1 43-.6 39.6.7 36.7"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M2.4 51.8C7.4 39.8 19.1 32 32 32h288c35.3 0 64 28.7 64 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V96H109.3l137.3 137.4c12.5 12.5 12.5 32.8 0 45.3L109.3 416H320v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 35.3-28.7 64-64 64H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L178.7 256 9.4 86.6c-9.2-9.1-11.9-22.9-7-34.8"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
