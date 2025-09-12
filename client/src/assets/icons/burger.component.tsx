import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BurgerIcon: React.FC<
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
                  d="M61.1 224C45 224 32 211 32 194.9c0-1.9.2-3.7.6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9.6 3.7.6 5.6 0 16.1-13 29.1-29.1 29.1zm82.9-96a16 16 0 1 0-32 0 16 16 0 1 0 32 0m240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32M272 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0M16 304c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48m16 96c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64z"
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
                  d="M396.5 134.9c-7.7-8.5-17-17.1-28.6-24.9.1.6.1 1.3.1 2 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-6.5 3.8-12 9.3-14.6-19.9-9.1-44.5-15.6-75.3-17.1 1.2 2.3 1.9 4.9 1.9 7.7 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-2.8.7-5.4 1.9-7.7-30.7 1.5-55.4 8-75.3 17.1 5.5 2.5 9.3 8.1 9.3 14.6 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-.7 0-1.3.1-2-11.6 7.8-21 16.4-28.6 24.9-12.8 14.2-21.5 29-27.1 41.1h335.4c-5.7-12.1-14.3-26.9-27.1-41.1m54.4 89.1H61.1C45 224 32 211 32 194.9c0-1.9.2-3.7.6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9.6 3.7.6 5.6 0 16.1-13 29.1-29.1 29.1M128 432h256c20.9 0 38.7-13.4 45.3-32H82.7c6.6 18.6 24.4 32 45.3 32m-96-48c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32 0 53-43 96-96 96H128c-53 0-96-43-96-96m-16-96c0-17.7 14.3-32 32-32h416c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32"
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
                  d="M256 64c94.4 0 172.9 68.1 189 157.8v.1q0 .15-.3.3c-.7.8-2.4 1.7-4.7 1.7H72c-2.4 0-4-1-4.7-1.7l-.3-.3v-.1C83.1 132.1 161.6 64 256 64m184 192c22.1 0 40.4-18.1 36.5-39.8C457.7 111.5 366.1 32 256 32S54.3 111.5 35.5 216.2C31.6 237.9 49.9 256 72 256zM128 448c-35.3 0-64-28.7-64-64h384c0 35.3-28.7 64-64 64zm-96-64c0 53 43 96 96 96h256c53 0 96-43 96-96 0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32m-16-80c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16s-7.2-16-16-16H32c-8.8 0-16 7.2-16 16m144-144a16 16 0 1 0 0-32 16 16 0 1 0 0 32m112-48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m80 48a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M450.9 208H61.1c-7.2 0-13.1-5.9-13.1-13.1 0-1 .1-1.4.2-1.7 2.3-9.2 13-45.7 43.6-79.7C121.9 80 172.1 48 256 48s134.1 32 164.3 65.5c30.6 34 41.3 70.5 43.6 79.7.1.3.2.7.2 1.7 0 7.2-5.9 13.1-13.1 13.1zM61.1 224h389.8c16.1 0 29.1-13 29.1-29.1 0-1.9-.2-3.7-.6-5.6C474.1 168.3 433.2 32 256 32S37.9 168.3 32.6 189.3c-.5 1.9-.6 3.7-.6 5.6C32 211 45 224 61.1 224M448 272c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32zM16 304c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48s-21.5-48-48-48H64c-26.5 0-48 21.5-48 48m436.6 96c6.3 0 11.4 5.1 11.4 11.4 0 29-23.5 52.6-52.6 52.6H100.6c-29 0-52.6-23.5-52.6-52.6 0-6.3 5.1-11.4 11.4-11.4zM32 411.4c0 37.9 30.7 68.6 68.6 68.6h310.8c37.9 0 68.6-30.7 68.6-68.6 0-15.1-12.3-27.4-27.4-27.4H59.4C44.3 384 32 396.3 32 411.4M144 144a16 16 0 1 0 0-32 16 16 0 1 0 0 32m240-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-128-16a16 16 0 1 0 0-32 16 16 0 1 0 0 32"
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
                  d="M61.1 224C45 224 32 211 32 194.9c0-1.9.2-3.7.6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9.6 3.7.6 5.6 0 16.1-13 29.1-29.1 29.1zm82.9-96a16 16 0 1 0-32 0 16 16 0 1 0 32 0m240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32M272 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0M48 384h416c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64v-16c0-8.8 7.2-16 16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M16 304c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48"
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
