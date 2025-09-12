import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChessRookPieceIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M67.4 384 80 264l-30.6-30.6c-6-6-9.4-14.1-9.4-22.6V112c0-8.8 7.2-16 16-16h24c8.8 0 16 7.2 16 16v24c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-24c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v24c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-24c0-8.8 7.2-16 16-16h24c8.8 0 16 7.2 16 16v98.7c0 8.5-3.4 16.6-9.4 22.6L240 264l12.6 120zM136 280.9c0 3.9 3.2 7.1 7.1 7.1h33.8c3.9 0 7.1-3.2 7.1-7.1V248c0-13.3-10.7-24-24-24s-24 10.7-24 24zM20.8 473.6 64 416h192l43.2 57.6c3.1 4.2 4.8 9.2 4.8 14.4 0 13.3-10.7 24-24 24H40c-13.3 0-24-10.7-24-24 0-5.2 1.7-10.2 4.8-14.4"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 120c0-13.3 10.7-24 24-24h240c13.3 0 24 10.7 24 24v104c0 5.6-2 11.1-5.6 15.4l-33.9 40.7 4.2 71.9h-48l-4.7-78.6c-.4-6.1 1.6-12.1 5.5-16.8l34.5-41.3V144h-40v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-48v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H64v71.3l34.4 41.3c3.9 4.7 5.9 10.7 5.5 16.8L99.3 352h-48l4.2-71.9-33.9-40.7C18 235.1 16 229.6 16 224zm120 160.9V248c0-13.3 10.7-24 24-24s24 10.7 24 24v32.9c0 3.9-3.2 7.1-7.1 7.1h-33.8c-3.9 0-7.1-3.2-7.1-7.1M52.7 464h214.6l-16.6-32H69.2zm207.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7 0 22.5-18.2 40.8-40.8 40.8H40.8C18.2 512 0 493.8 0 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2c5.4-10.6 16.4-17.3 28.4-17.3h201z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 112c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16v112c0 3.7-1.3 7.4-3.7 10.2l-35.9 43.1 4.4 74.6h-32.1l-4.7-79c-.2-4.1 1.1-8.1 3.7-11.2l36.3-43.5V128h-48v24c0 8.8-7.2 16-16 16s-16-7.2-16-16v-24h-64v24c0 8.8-7.2 16-16 16s-16-7.2-16-16v-24H48v90.2l36.3 43.6c2.6 3.1 3.9 7.1 3.7 11.2l-4.7 79h-32l4.4-74.6-36-43.2c-2.4-2.9-3.7-6.5-3.7-10.2zm144 96c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c0-8.8 7.2-16 16-16M33.1 468.7c-.7 1.2-1.1 2.5-1.1 3.9 0 4.1 3.3 7.4 7.4 7.4h241.2c4.1 0 7.4-3.3 7.4-7.4 0-1.4-.4-2.7-1.1-3.9L254.2 416H65.8zM254.2 384c11.1 0 21.4 5.7 27.2 15.1l32.7 52.7c3.9 6.2 5.9 13.4 5.9 20.8 0 21.8-17.7 39.4-39.4 39.4H39.4C17.7 512 0 494.3 0 472.6c0-7.3 2.1-14.5 5.9-20.8l32.7-52.7c5.8-9.4 16.1-15.1 27.2-15.1z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 120c0-4.4 3.6-8 8-8h24c4.4 0 8 3.6 8 8v16c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-16c0-4.4 3.6-8 8-8h31.5c4.4 0 8 3.6 8 8v16c0 13.3 10.7 24 24 24H224c13.3 0 24-10.7 24-24v-16c0-4.4 3.6-8 8-8h24c4.4 0 8 3.6 8 8v106.2c0 1.9-.7 3.7-1.9 5.1l-36.3 43.5c-1.3 1.6-2 3.6-1.8 5.6l6.5 103.6h16l-6.3-101.3 34.3-41.1c3.6-4.3 5.6-9.7 5.6-15.4V120c0-13.3-10.7-24-24-24H256c-13.3 0-24 10.7-24 24v16c0 4.4-3.6 8-8 8h-16.5c-4.4 0-8-3.6-8-8v-16c0-13.3-10.7-24-24-24H144c-13.3 0-24 10.7-24 24v16c0 4.4-3.6 8-8 8H96c-4.4 0-8-3.6-8-8v-16c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24v106.2c0 5.6 2 11.1 5.6 15.4l34.3 41.1L49.5 384h16L72 280.5c.1-2-.5-4.1-1.8-5.6l-36.3-43.6c-1.2-1.4-1.9-3.2-1.9-5.1zm4.7 306.1L4.5 471.2c-2.9 4-4.5 8.9-4.5 13.9v2.9c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24v-2.9c0-5-1.6-9.9-4.5-13.9l-32.2-45.1c-4.5-6.3-11.8-10.1-19.5-10.1H56.2c-7.8 0-15 3.7-19.5 10.1m19.5 5.9h207.6c2.6 0 5 1.2 6.5 3.4l32.2 45.1c1 1.4 1.5 3 1.5 4.6v2.9c0 4.4-3.6 8-8 8H24c-4.4 0-8-3.6-8-8v-2.9c0-1.7.5-3.3 1.5-4.6l32.2-45.1c1.5-2.1 3.9-3.4 6.5-3.4M160 224c-17.7 0-32 14.3-32 32v40c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-40c0-17.7-14.3-32-32-32m-16 32c0-8.8 7.2-16 16-16s16 7.2 16 16v32h-32z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M272 416H48L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24 0-5.2-1.7-10.2-4.8-14.4z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m48 416 24-152-25-31.2c-4.5-5.7-7-12.7-7-20V112c0-8.8 7.2-16 16-16h24c8.8 0 16 7.2 16 16v24c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-24c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v24c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-24c0-8.8 7.2-16 16-16h24c8.8 0 16 7.2 16 16v100.8c0 7.3-2.5 14.3-7 20L248 264l24 152zm88-135.1c0 3.9 3.2 7.1 7.1 7.1h33.8c3.9 0 7.1-3.2 7.1-7.1V248c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
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
