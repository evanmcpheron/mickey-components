import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BackpackIcon: React.FC<
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
                  d="M192 48h64c4.4 0 8 3.6 8 8v40h-80V56c0-4.4 3.6-8 8-8m-56 8v40h-8C57.3 96 0 153.3 0 224v224c0 35.3 28.7 64 64 64V352c0-35.3 28.7-64 64-64h192c35.3 0 64 28.7 64 64v160c35.3 0 64-28.7 64-64V224c0-70.7-57.3-128-128-128h-8V56c0-30.9-25.1-56-56-56h-64c-30.9 0-56 25.1-56 56m216 456v-96H96v96zM144 176h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16m208 208v-32c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v32z"
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
                  d="M192 48h64c4.4 0 8 3.6 8 8v24h-80V56c0-4.4 3.6-8 8-8m-56 8v24h-8C57.3 80 0 137.3 0 208v240c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V208c0-70.7-57.3-128-128-128h-8V56c0-30.9-25.1-56-56-56h-64c-30.9 0-56 25.1-56 56m232 408V312c0-39.8-32.2-72-72-72H152c-39.8 0-72 32.2-72 72v152H64c-8.8 0-16-7.2-16-16V208c0-44.2 35.8-80 80-80h192c44.2 0 80 35.8 80 80v240c0 8.8-7.2 16-16 16zm-240 0v-64h192v64zm16-304c-13.3 0-24 10.7-24 24s10.7 24 24 24h160c13.3 0 24-10.7 24-24s-10.7-24-24-24zm176 192H128v-40c0-13.3 10.7-24 24-24h144c13.3 0 24 10.7 24 24z"
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
                  d="M192 32h64c8.8 0 16 7.2 16 16v16h-96V48c0-8.8 7.2-16 16-16m-48 16v16h-16C57.3 64 0 121.3 0 192v256c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V192c0-70.7-57.3-128-128-128h-16V48c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48m16 48h160c53 0 96 43 96 96v256c0 17.7-14.3 32-32 32h-16V320c0-35.3-28.7-64-64-64H144c-35.3 0-64 28.7-64 64v160H64c-17.7 0-32-14.3-32-32V192c0-53 43-96 96-96zm-48 384v-96h224v96zm32-320c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zm192 192H112v-32c0-17.7 14.3-32 32-32h160c17.7 0 32 14.3 32 32z"
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
                  d="M184 16h80c13.3 0 24 10.7 24 24v40H160V40c0-13.3 10.7-24 24-24m-40 24v40h-16C57.3 80 0 137.3 0 208v240c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V208c0-70.7-57.3-128-128-128h-16V40c0-22.1-17.9-40-40-40h-80c-22.1 0-40 17.9-40 40m224 456V344c0-30.9-25.1-56-56-56H136c-30.9 0-56 25.1-56 56v152H64c-26.5 0-48-21.5-48-48V208c0-61.9 50.1-112 112-112h192c61.9 0 112 50.1 112 112v240c0 26.5-21.5 48-48 48zm-272 0V392h256v104zm40-304c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8zm216 184H96v-32c0-22.1 17.9-40 40-40h176c22.1 0 40 17.9 40 40z"
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
                  d="M184 56c0-4.4 3.6-8 8-8h64c4.4 0 8 3.6 8 8v40h48V56c0-30.9-25.1-56-56-56h-64c-30.9 0-56 25.1-56 56v40h48zm168 328H96v128h256z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 224C0 153.3 57.3 96 128 96h192c70.7 0 128 57.3 128 128v224c0 35.3-28.7 64-64 64h-32V336c0-26.5-21.5-48-48-48H144c-26.5 0-48 21.5-48 48v176H64c-35.3 0-64-28.7-64-64zm144-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
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
