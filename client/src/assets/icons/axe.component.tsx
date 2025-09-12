import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AxeIcon: React.FC<
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
                  d="M374.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3L384 301.3V384c0 17.7 14.3 32 32 32 123.7 0 224-100.3 224-224 0-17.7-14.3-32-32-32h-82.7l-56-56 33.4-33.4c12.5-12.5 12.5-32.8 0-45.3l-16-16c-12.5-12.5-32.8-12.5-45.3 0L408 42.7zM448 316c45-11.6 80.4-47 92-92h32.8c-12.7 62.7-62.1 112.1-124.8 124.8zM244.1 206.6 9.4 441.4c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l234.7-234.8z"
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
                  d="M486.6 9.4c-12.5-12.5-32.8-12.5-45.3 0L408 42.7 374.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3L384 301.3V384c0 17.7 14.3 32 32 32 123.7 0 224-100.3 224-224 0-17.7-14.3-32-32-32h-82.7l-56-56 33.4-33.4c12.5-12.5 12.5-32.8 0-45.3l-16-16zM305.4 267.9l-61.3-61.3L9.4 441.4c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0zM491.3 194c9 9 21.2 14.1 33.9 14.1h66c-7.6 84.4-74.8 151.7-159.3 159.3v-66c0-12.7-5.1-24.9-14.1-33.9L278.6 128 352 54.6l139.3 139.3z"
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
                  d="M502.6 182.6 352 32l-96 96 150.6 150.6c6 6 9.4 14.1 9.4 22.6V384c106 0 192-86 192-192h-82.7c-8.5 0-16.6-3.4-22.6-9.4zM473.3 108l52 52H608c17.7 0 32 14.3 32 32 0 123.7-100.3 224-224 224-17.7 0-32-14.3-32-32v-82.7L233.4 150.6c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0L404 38.7l29.4-29.3c12.5-12.5 32.8-12.5 45.3 0l24 24c12.5 12.5 12.5 32.8 0 45.3zm-22.7-22.6L480 56l-24-24-29.4 29.4zM262.7 225.3 32 456l24 24 230.7-230.7 22.6 22.6L78.6 502.6c-12.5 12.5-32.8 12.5-45.3 0l-24-24c-12.5-12.5-12.5-32.8 0-45.3l230.8-230.7 22.6 22.6z"
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
                  d="m491.3 44.7-24-24c-6.2-6.2-16.4-6.2-22.6 0l-29.4 29.4 46.6 46.6 29.4-29.4c6.2-6.2 6.2-16.4 0-22.6l11.3-11.3c12.5 12.5 12.5 32.8 0 45.3L473.3 108l52 52H608c17.7 0 32 14.3 32 32 0 123.7-100.3 224-224 224-17.7 0-32-14.3-32-32v-82.7L233.4 150.6c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0L404 38.7l29.4-29.3c12.5-12.5 32.8-12.5 45.3 0l24 24zM240.1 202.6l11.3 11.3L20.7 444.7c-6.2 6.2-6.2 16.4 0 22.6l24 24-11.3 11.3-24-24c-12.5-12.5-12.5-32.8 0-45.3zm-206.7 300 11.3-11.3c6.2 6.2 16.4 6.2 22.6 0l230.8-230.7 11.3 11.3L78.6 502.6c-12.5 12.5-32.8 12.5-45.3 0zM525.3 176c-4.2 0-8.3-1.7-11.3-4.7L363.3 20.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6l150.6 150.6c3 3 4.7 7.1 4.7 11.3V384c0 8.8 7.2 16 16 16 114.9 0 208-93.1 208-208 0-8.8-7.2-16-16-16zm58.7 48.5c-4.8 72.7-62.7 130.6-135.4 135.4-4.4.3-8.2-3-8.5-7.4s3-8.2 7.4-8.5c64.7-4.3 116.2-55.8 120.6-120.6.3-4.4 4.1-7.7 8.5-7.5s7.7 4.1 7.4 8.5z"
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
                  d="m486.6 9.4 16 16c12.5 12.5 12.5 32.8 0 45.3L469.3 104 408 42.7l33.4-33.3c12.5-12.5 32.8-12.5 45.3 0zM266.7 184l61.3 61.3L70.6 502.6c-12.5 12.5-32.8 12.5-45.3 0l-16-16c-12.5-12.5-12.5-32.8 0-45.3zM576 160h32c17.7 0 32 14.3 32 32 0 123.7-100.3 224-224 224-17.7 0-32-14.3-32-32v-32h32c11 0 21.7-1.1 32-3.2 62.7-12.7 112.1-62.1 124.8-124.8 2.1-10.3 3.2-21 3.2-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M329.4 9.4c12.5-12.5 32.8-12.5 45.3 0L525.3 160H576v32c0 88.4-71.6 160-160 160h-32v-50.7L233.4 150.6c-12.5-12.5-12.5-32.8 0-45.3l96-96z"
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
