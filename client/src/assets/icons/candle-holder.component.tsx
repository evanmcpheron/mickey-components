import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CandleHolderIcon: React.FC<
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
                  d="M160 192c-44.2 0-80-35.8-80-80 0-39.6 49.1-90.1 66.2-106.6C149.9 1.9 154.8 0 160 0s10.1 1.9 13.8 5.4C190.9 21.9 240 72.4 240 112c0 44.2-35.8 80-80 80m-32 32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64c17.7 0 32 14.3 32 32v208h52.1c-2.7-7.5-4.1-15.6-4.1-24 0-39.8 32.2-72 72-72s72 32.2 72 72-32.2 72-72 72H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40V256c0-17.7 14.3-32 32-32zm272 216a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M128 112c0 17.7 14.3 32 32 32s32-14.3 32-32c0-3.2-3.6-14.8-17.4-33.6-4.7-6.4-9.8-12.5-14.6-18.1-4.9 5.5-9.9 11.7-14.6 18.1C131.6 97.2 128 108.8 128 112m32 80c-44.2 0-80-35.8-80-80 0-39.6 49.1-90.1 66.2-106.6C149.9 1.9 154.8 0 160 0s10.1 1.9 13.8 5.4C190.9 21.9 240 72.4 240 112c0 44.2-35.8 80-80 80m-32 80H96v192h128V272h-48v56c0 13.3-10.7 24-24 24s-24-10.7-24-24zM48 464V272c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48v192h36.1c-2.7-7.5-4.1-15.6-4.1-24 0-39.8 32.2-72 72-72s72 32.2 72 72c0 39.7-32.2 71.9-71.8 72H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zm352-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M112 112c0 26.5 21.5 48 48 48s48-21.5 48-48c0-8.8-6.5-24-20.5-43.1-9.1-12.5-19.5-23.8-27.5-32.1-8 8.3-18.4 19.6-27.5 32.1C118.5 88 112 103.2 112 112m48 80c-44.2 0-80-35.8-80-80 0-39.6 49.1-90.1 66.2-106.6C149.9 1.9 154.8 0 160 0s10.1 1.9 13.8 5.4C190.9 21.9 240 72.4 240 112c0 44.2-35.8 80-80 80M0 496c0-8.8 7.2-16 16-16h48V272c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v208h72.6c-5.4-9.4-8.6-20.3-8.6-32 0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64H16c-8.8 0-16-7.2-16-16m128-240h-16c-8.8 0-16 7.2-16 16v208h128V272c0-8.8-7.2-16-16-16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16zm256 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M96 112c0-14.3 9.4-33.2 23.6-52.5C133.2 40.9 149 24.9 157.3 17c.5-.5 1.4-1 2.7-1s2.2.5 2.7 1c8.3 7.9 24.1 23.9 37.7 42.5C214.6 78.8 224 97.7 224 112c0 35.3-28.7 64-64 64s-64-28.7-64-64m64 80c44.2 0 80-35.8 80-80 0-39.6-49.1-90.1-66.2-106.6C170.1 1.9 165.2 0 160 0s-10.1 1.9-13.8 5.4C129.1 21.9 80 72.4 80 112c0 44.2 35.8 80 80 80m-48 48h16v48c0 4.4 3.6 8 8 8s8-3.6 8-8v-48h64c17.7 0 32 14.3 32 32v224H80V272c0-17.7 14.3-32 32-32m144 256V272c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v224H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h376c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64c0 19.1 8.4 36.3 21.7 48zm80-48a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
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
                  d="M80 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-39.6-49.1-90.1-66.2-106.6C170.1 1.9 165.2 0 160 0s-10.1 1.9-13.8 5.4C129.1 21.9 80 72.4 80 112m296 304a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 96c39.8 0 72-32.2 72-72s-32.2-72-72-72-72 32.2-72 72c0 8.4 1.4 16.5 4.1 24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M128 224v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64c17.7 0 32 14.3 32 32v208H64V256c0-17.7 14.3-32 32-32z"
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
