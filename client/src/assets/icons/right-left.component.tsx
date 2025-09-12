import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RightLeftIcon: React.FC<
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
                  d="M32 96h320V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9S352 236.8 352 223.8V160H32c-17.7 0-32-14.3-32-32s14.3-32 32-32m448 256c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6v64h320z"
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
                  d="M336 215c0 22.6 18.3 41 41 41 10.9 0 21.3-4.3 29-12l99-99c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17l-99-99c-7.7-7.7-18.1-12-29-12-22.6 0-41 18.3-41 41v63H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h312zm118.1-87L384 198.1V57.9zM135 256c-10.9 0-21.3 4.3-29 12L7 367c-4.5 4.5-7 10.6-7 17s2.5 12.5 7 17l99 99c7.7 7.7 18.1 12 29 12 22.6 0 41-18.3 41-41v-63h312c13.3 0 24-10.7 24-24s-10.7-24-24-24H176v-63c0-22.6-18.3-41-41-41m-7 198.1L57.9 384l70.1-70.1z"
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
                  d="M352 222.7c0 18.4 14.9 33.3 33.3 33.3 8.4 0 16.4-3.1 22.6-8.8l99-91.4c3.3-3 5.1-7.3 5.1-11.8s-1.9-8.7-5.1-11.8l-99-91.4c-6.1-5.7-14.2-8.8-22.6-8.8-18.4 0-33.3 14.9-33.3 33.3V128H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h336zm33.3 1.3c-.7 0-1.3-.6-1.3-1.3V65.3c0-.7.6-1.3 1.3-1.3q.45 0 .9.3l86.2 79.7-86.3 79.7q-.3.3-.9.3zM126.7 480c18.4 0 33.3-14.9 33.3-33.3V384h336c8.8 0 16-7.2 16-16s-7.2-16-16-16H160v-62.7c0-18.4-14.9-33.3-33.3-33.3-8.4 0-16.4 3.1-22.6 8.8l-99 91.4C1.9 359.3 0 363.5 0 368s1.9 8.7 5.1 11.8l99 91.4c6.1 5.7 14.2 8.8 22.6 8.8m1.3-33.3c0 .7-.6 1.3-1.3 1.3q-.45 0-.9-.3L39.6 368l86.3-79.7q.3-.3.9-.3c.7 0 1.3.6 1.3 1.3v157.4z"
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
                  d="m383.9 50.1 108.9 87.1c2.1 1.6 3.2 4.1 3.2 6.8s-1.2 5.1-3.2 6.8l-108.9 87.1c-1.7 1.4-3.9 2.1-6.1 2.1-5.4 0-9.8-4.4-9.8-9.8V57.8c0-5.4 4.4-9.8 9.8-9.8 2.2 0 4.4.8 6.1 2.1M352 152v78.2c0 14.2 11.5 25.8 25.8 25.8 5.9 0 11.5-2 16.1-5.6l108.9-87.1c5.8-4.7 9.2-11.8 9.2-19.2s-3.4-14.6-9.2-19.2L393.9 37.6c-4.6-3.6-10.3-5.6-16.1-5.6-14.3 0-25.8 11.5-25.8 25.8V136H8c-4.4 0-8 3.6-8 8s3.6 8 8 8zM144 281.8v172.4c0 5.4-4.4 9.8-9.8 9.8-2.2 0-4.4-.8-6.1-2.1L19.2 374.8c-2.1-1.6-3.2-4.1-3.2-6.8s1.2-5.1 3.2-6.8l108.9-87.1c1.7-1.4 3.9-2.1 6.1-2.1 5.4 0 9.8 4.4 9.8 9.8m16 78.2v-78.2c0-14.2-11.5-25.8-25.8-25.8-5.9 0-11.5 2-16.1 5.6L9.2 348.8C3.4 353.4 0 360.5 0 368s3.4 14.6 9.2 19.2l108.9 87.1c4.6 3.7 10.2 5.6 16.1 5.6 14.2 0 25.8-11.5 25.8-25.8V376h344c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
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
                  d="M512 384c0-17.7-14.3-32-32-32H160v-64c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-96 96c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6l96 96c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V416h320c17.7 0 32-14.3 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 128c0-17.7 14.3-32 32-32h320V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9S352 236.8 352 223.8V160H32c-17.7 0-32-14.3-32-32"
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
