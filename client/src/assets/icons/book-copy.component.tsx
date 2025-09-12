import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BookCopyIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 96H96c-53 0-96 43-96 96v224c0 53 43 96 96 96h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h81.1c-10.9-18.8-17.1-40.7-17.1-64zm160 320h224c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H288c-53 0-96 43-96 96v224c0 24.6 9.2 47 24.4 64 17.6 19.6 43.1 32 71.6 32zm-64-96c0-17.7 14.3-32 32-32h192v64H288c-17.7 0-32-14.3-32-32"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M192 88c0-48.6 39.4-88 88-88h248c26.5 0 48 21.5 48 48v208c0 20.9-13.4 38.7-32 45.3V368h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H272c-44.2 0-80-35.8-80-80zm336-40H280c-22.1 0-40 17.9-40 40v174.7c9.8-4.3 20.6-6.7 32-6.7h256V48M272 304c-17.7 0-32 14.3-32 32s14.3 32 32 32h224v-64zM160 96v48H88c-22.1 0-40 17.9-40 40v174.7c9.8-4.3 20.6-6.7 32-6.7h81.1c2.5 17.7 9.2 34 18.9 48H80c-17.7 0-32 14.3-32 32s14.3 32 32 32h224v-16h48v16h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80V184c0-48.6 39.4-88 88-88z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M224 64c0-17.7 14.3-32 32-32h272c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H256c-11.7 0-22.6 3.1-32 8.6zm-32 0v288c0 35.3 28.7 64 64 64h304c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-66.7c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H256c-35.3 0-64 28.7-64 64m64 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h256v64zm96 96v-32h-32v32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h120.4c-8.3-9.2-14.8-20.1-19-32H64c-11.7 0-22.6 3.1-32 8.6V160c0-17.7 14.3-32 32-32h96V96H64c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h304c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M208 56c0-22.1 17.9-40 40-40h296c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16H248c-15.7 0-29.8 6.4-40 16.8zm-16 303.6v.4c0 30.9 25.1 56 56 56h320c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-80c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H248c-30.9 0-56 25.1-56 56zM528 320v80H248c-22.1 0-40-17.9-40-40s17.9-40 40-40zM352 496v-48h-16v48H56c-22.1 0-40-17.9-40-40s17.9-40 40-40h124.1c-4.1-4.9-7.6-10.3-10.5-16H56c-15.7 0-29.8 6.4-40 16.8V152c0-22.1 17.9-40 40-40h104V96H56c-30.9 0-56 25.1-56 56v304c0 30.9 25.1 56 56 56h320c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M160 96H96c-53 0-96 43-96 96v224c0 53 43 96 96 96h256c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h74.8c-6.9-14.5-10.8-30.8-10.8-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M288 0c-53 0-96 43-96 96v224c0 53 43 96 96 96h256c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H288m0 288h192v64H288c-17.7 0-32-14.3-32-32s14.3-32 32-32"
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
