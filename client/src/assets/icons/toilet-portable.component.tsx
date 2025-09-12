import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ToiletPortableIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 32v32h320V32c0-17.7-14.3-32-32-32H32C14.3 0 0 14.3 0 32m24 64H0v392c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h224v8c0 13.3 10.7 24 24 24s24-10.7 24-24V96H24m232 144v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 72v24h224V72c0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24m0 72v288h224V320h-24c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h24v-80zm0 336v8c0 13.3-10.7 24-24 24S0 501.3 0 488V72C0 32.2 32.2 0 72 0h176c39.8 0 72 32.2 72 72v416c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 64v32h256V64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32m0 64v320h256V336h-24c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h24v-80zm288-64v432c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H32v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V64C0 28.7 28.7 0 64 0h192c35.3 0 64 28.7 64 64m-56 176c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v-64z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 56c0-22.1 17.9-40 40-40h176c22.1 0 40 17.9 40 40v40H32zm272 56V56c0-30.9-25.1-56-56-56H72C41.1 0 16 25.1 16 56v448c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h256v40c0 4.4 3.6 8 8 8s8-3.6 8-8V112M32 448V112h256v336zm216-232c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24h16c4.4 0 8-3.6 8-8s-3.6-8-8-8h-16c-4.4 0-8-3.6-8-8v-64c0-4.4 3.6-8 8-8h16c4.4 0 8-3.6 8-8s-3.6-8-8-8z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 64h320v424c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48v8c0 13.3-10.7 24-24 24S0 501.3 0 488V64m256 176c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 0C14.3 0 0 14.3 0 32v32h320V32c0-17.7-14.3-32-32-32zm224 240c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
