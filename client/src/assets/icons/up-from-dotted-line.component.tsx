import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UpFromDottedLineIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M73.9 166.1 196.7 43.3C203.9 36.1 213.8 32 224 32s20.1 4.1 27.3 11.3l122.8 122.8c6.4 6.4 9.9 15 9.9 24 0 18.7-15.2 33.9-33.9 33.9H288v128c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V224H97.9C79.2 224 64 208.8 64 190.1c0-9 3.6-17.6 9.9-24M32 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64m96 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M114.2 192 224 82l109.8 110H280c-13.3 0-24 10.7-24 24v120h-64V216c0-13.3-10.7-24-24-24zM224 32c-11.5 0-22.5 4.6-30.6 12.7L77.6 160.8c-8.7 8.7-13.6 20.5-13.6 32.8 0 25.6 20.8 46.4 46.4 46.4H144v96c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-96h33.6c25.6 0 46.4-20.8 46.4-46.4 0-12.3-4.9-24.1-13.6-32.8L254.6 44.7C246.5 36.6 235.5 32 224 32M32 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M222.2 64.8c.5-.5 1.1-.8 1.8-.8s1.4.3 1.8.8l124.4 131.9c1.2 1.2 1.8 2.9 1.8 4.6 0 3.7-3 6.7-6.7 6.7H288c-8.8 0-16 7.2-16 16v120c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V224c0-8.8-7.2-16-16-16h-57.3c-3.7 0-6.7-3-6.7-6.7 0-1.7.7-3.3 1.8-4.6zM224 32c-9.5 0-18.6 3.9-25.1 10.8l-124.4 132C67.8 182 64 191.5 64 201.3c0 21.4 17.3 38.7 38.7 38.7H144v104c0 22.1 17.9 40 40 40h80c22.1 0 40-17.9 40-40V240h41.3c21.4 0 38.7-17.3 38.7-38.7 0-9.9-3.8-19.3-10.5-26.5l-124.4-132C242.6 35.9 233.5 32 224 32M32 472a24 24 0 1 0 0-48 24 24 0 1 0 0 48m384 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-264-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m120-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M216 51.3c2.1-2.1 5-3.3 8-3.3s5.9 1.2 8 3.3l131.8 132.1c2.7 2.7 4.2 6.4 4.2 10.2 0 8-6.5 14.4-14.4 14.4H280c-4.4 0-8 3.6-8 8v136c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16V216c0-4.4-3.6-8-8-8H94.4c-8 0-14.4-6.5-14.4-14.4 0-3.8 1.5-7.5 4.2-10.2zm8-19.3c-7.2 0-14.2 2.9-19.3 8L72.9 172.1c-5.7 5.7-8.9 13.4-8.9 21.5 0 16.8 13.6 30.4 30.4 30.4H160v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V224h65.6c16.8 0 30.4-13.6 30.4-30.4 0-8.1-3.2-15.8-8.9-21.5L243.3 40c-5.1-5.1-12.1-8-19.3-8M32 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32m96 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32m112-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0m80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m112-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 448a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M196.7 43.3 73.9 166.1c-6.4 6.4-9.9 15-9.9 24 0 18.7 15.2 33.9 33.9 33.9H160v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V224h62.1c18.7 0 33.9-15.2 33.9-33.9 0-9-3.6-17.6-9.9-24L251.3 43.3C244.1 36.1 234.2 32 224 32s-20.1 4.1-27.3 11.3"
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
