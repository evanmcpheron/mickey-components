import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EnvelopesBulkIcon: React.FC<
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
                  d="M128 0c-17.7 0-32 14.3-32 32v192h96v-32c0-35.3 28.7-64 64-64h224V32c0-17.7-14.3-32-32-32zm128 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64v128h192c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16M64 256c-17.7 0-32 14.3-32 32v13l155.1 114.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301v-13c0-17.7-14.3-32-32-32zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32z"
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
                  d="M112 48h320v48h48V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v144h48zM48 272h288v6.9L192.1 385.4h-.2L48 278.9zm0 66.6L163.3 424c8.3 6.2 18.4 9.5 28.7 9.5s20.4-3.3 28.7-9.5L336 338.6V464H48zM0 272v192c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48m272-80v-16h320v192H416v48h176c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H272c-26.5 0-48 21.5-48 48v16zm240 16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"
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
                  d="M112 32h288c8.8 0 16 7.2 16 16v16h32V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v144h32V48c0-8.8 7.2-16 16-16m112 112c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16H416v32h176c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H240c-26.5 0-48 21.5-48 48v48h32zM48 256h288c8.8 0 16 7.2 16 16v5L196.9 391.9c-1.4 1-3.1 1.6-4.9 1.6s-3.5-.6-4.9-1.6L32 277v-5c0-8.8 7.2-16 16-16M32 464V316.8l136 100.8c6.9 5.1 15.3 7.9 24 7.9s17-2.8 24-7.9l136-100.8V464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16m16-240c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm448-64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm16 64v-32h32v32z"
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
                  d="M432 16c17.7 0 32 14.3 32 32v32h16V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v144h16V48c0-17.7 14.3-32 32-32zM240 128h352c17.7 0 32 14.3 32 32v208c0 17.7-14.3 32-32 32H416v16h176c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48H240c-26.5 0-48 21.5-48 48v32h16v-32c0-17.7 14.3-32 32-32M16 272c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v19.1l-4.8 3.5-161.5 119.7c-2.8 2.1-6.2 3.2-9.7 3.2s-6.9-1.1-9.7-3.2L20.8 294.6l-4.8-3.5zm195.2 155.1L368 311v153c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V311l156.8 116.1c5.6 4.1 12.3 6.3 19.2 6.3s13.6-2.2 19.2-6.3M0 272v192c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48m528-96c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-32c0-13.3-10.7-24-24-24zm-8 24c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8z"
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
                  d="M96 32v192h96v-32c0-35.3 28.7-64 64-64h224V32c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32m160 128c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64v128h192c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16M32 301v39.8l136 100.8c6.9 5.1 15.3 7.9 24 7.9s17-2.8 24-7.9l136-100.8V301L196.9 415.9c-1.4 1-3.1 1.6-4.9 1.6s-3.5-.6-4.9-1.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M496 224h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16M32 288c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v13L196.9 415.9c-1.4 1-3.1 1.6-4.9 1.6s-3.5-.6-4.9-1.6L32 301zm184 153.6 136-100.8V480c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V340.8l136 100.8c6.9 5.1 15.3 7.9 24 7.9s17-2.8 24-7.9"
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
