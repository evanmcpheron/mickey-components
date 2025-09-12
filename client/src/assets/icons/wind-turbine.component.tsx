import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const WindTurbineIcon: React.FC<
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
                  d="M315.7 414.8c9.1 14.8 32 6.5 29.5-10.7L316.9 212c-.5-3.4.1-6.9 1.8-9.9L411 31.2c8.3-15.3-10.4-31-24-20.1L234.7 131.7c-2.7 2.1-6 3.4-9.5 3.5l-194.1 5.4c-17.4.4-21.6 24.4-5.4 30.8l180.6 71.5c3.2 1.3 5.9 3.5 7.7 6.5zm-91.7-88V464h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72v-33.2zM256 168a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M315.7 414.8c9.1 14.8 32 6.5 29.5-10.7L316.9 212c-.5-3.4.1-6.9 1.8-9.9L411 31.2c8.3-15.3-10.4-31-24-20.1L234.7 131.7c-2.7 2.1-6 3.4-9.5 3.5l-194.1 5.4c-17.4.4-21.6 24.4-5.4 30.8l180.6 71.5c3.2 1.3 5.9 3.5 7.7 6.5zm-83.7-75V464h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80v-46.2zM256 168a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M302.1 431.2c18.2 29.6 64 13 58.9-21.4l-28.3-192.2L425 46.8c16.5-30.6-20.8-61.9-48-40.3L224.8 127.1l-194.1 5.5c-34.8 1-43.2 48.9-10.9 61.7l180.6 71.5 39.6 64.5V480h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96v-97.7l30.1 49zM301 222.3l28.4 192.1L227.6 249c-3.6-5.9-9-10.4-15.5-13L31.6 164.5l194.1-5.4c6.9-.2 13.6-2.6 19-6.9L396.9 31.6l-92.4 170.8c-3.3 6.1-4.5 13.1-3.5 19.9M272 208a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M301 214.3c-1-6.8.2-13.8 3.5-19.9l92.4-170.8-152.2 120.6c-5.4 4.3-12.1 6.7-19 6.9l-194.1 5.4L212.2 228c6.4 2.5 11.9 7.1 15.5 13l101.7 165.5zm44.2 189.8c2.5 17.2-20.3 25.5-29.5 10.7L288 369.7l-16-26-32-52-16-26-10-16.3c-1.8-2.9-4.5-5.2-7.7-6.5L25.7 171.4c-16.2-6.4-12-30.4 5.4-30.8l194.1-5.4c3.5-.1 6.8-1.3 9.5-3.5L387 11c13.6-10.8 32.3 4.8 24 20.1L318.6 202c-1.6 3-2.3 6.5-1.8 9.9L345.2 404zM240 352.8V496h32v-91.2l16 26V496h88c4.4 0 8 3.6 8 8s-3.6 8-8 8H136c-4.4 0-8-3.6-8-8s3.6-8 8-8h88V326.8zM256 184a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M224 265.7V464h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72v-94.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M345.2 404.1c2.5 17.2-20.3 25.5-29.5 10.7L214 249.4c-1.8-2.9-4.5-5.2-7.7-6.5L25.7 171.4c-16.2-6.4-12-30.4 5.4-30.8l194.1-5.4c3.5-.1 6.8-1.3 9.5-3.5L387 11c13.6-10.8 32.3 4.8 24 20.1L318.6 202c-1.6 3-2.3 6.5-1.8 9.9L345.2 404zM256 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48"
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
