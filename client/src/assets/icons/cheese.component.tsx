import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CheeseIcon: React.FC<
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
                  d="M512 240.2V256H0c0-20 10-38.7 26.6-49.8L274.9 40.7c8.6-5.7 18.6-8.7 28.9-8.7 115 0 208.2 93.2 208.2 208.2m0 47.8v128c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V288z"
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
                  d="M464 240.2V256H48c0-3.9 2-7.6 5.3-9.8L301.5 80.7c.7-.4 1.5-.7 2.3-.7C392.3 80 464 151.7 464 240.2M48 304h416v112c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zm464-48v-15.8C512 125.2 418.8 32 303.8 32c-10.3 0-20.3 3-28.9 8.7L26.6 206.2C10 217.3 0 236 0 256v160c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64z"
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
                  d="M480 244v12H32c0-9.3 4.6-18 12.4-23.1L295.7 65.3c1.3-.8 2.8-1.3 4.3-1.3 99.4 0 180 80.6 180 180M32 288h448v128c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm480-32v-12c0-117.1-94.9-212-212-212-7.8 0-15.5 2.3-22 6.7L26.6 206.2C10 217.3 0 236 0 256v160c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64z"
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
                  d="M495.9 240H27.3l263-189.9c1.9-1.3 4.1-2.1 6.4-2.1 107.6 0 195.3 85.3 199.2 192M16 256.4v-.4h480v160c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm496-.4v-8.7C512 128.4 415.6 32 296.7 32c-5.7 0-11.2 1.8-15.8 5.1L13.3 230.4c-8.4 6-13.3 15.7-13.3 26V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64z"
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
                  d="M512 256v-15.8C512 125.2 418.8 32 303.8 32c-10.3 0-20.3 3-28.9 8.7L26.6 206.2C10 217.3 0 236 0 256z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 256h512v160c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
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
