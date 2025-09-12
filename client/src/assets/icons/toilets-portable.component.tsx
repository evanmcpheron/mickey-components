import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ToiletsPortableIcon: React.FC<
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
                  d="M32 0h192c17.7 0 32 14.3 32 32v32H0V32C0 14.3 14.3 0 32 0M0 96h256v392c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48v8c0 13.3-10.7 24-24 24S0 501.3 0 488V96m192 128c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16M352 0h192c17.7 0 32 14.3 32 32v32H320V32c0-17.7 14.3-32 32-32m-32 96h256v392c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H368v8c0 13.3-10.7 24-24 24s-24-10.7-24-24V96m192 128c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16"
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
                  d="M72 48h112c13.3 0 24 10.7 24 24v24H48V72c0-13.3 10.7-24 24-24M48 432V144h160v80h-24c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h24v112zm0 56v-8h160v8c0 13.3 10.7 24 24 24s24-10.7 24-24V72c0-39.8-32.2-72-72-72H72C32.2 0 0 32.2 0 72v416c0 13.3 10.7 24 24 24s24-10.7 24-24M392 48h112c13.3 0 24 10.7 24 24v24H368V72c0-13.3 10.7-24 24-24m-24 384V144h160v80h-24c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h24v112zm0 56v-8h160v8c0 13.3 10.7 24 24 24s24-10.7 24-24V72c0-39.8-32.2-72-72-72H392c-39.8 0-72 32.2-72 72v416c0 13.3 10.7 24 24 24s24-10.7 24-24"
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
                  d="M64 32h128c17.7 0 32 14.3 32 32v32H32V64c0-17.7 14.3-32 32-32M32 448V128h192v80h-24c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h24v112zm224-240V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v432c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h192v16c0 8.8 7.2 16 16 16s16-7.2 16-16V208m-32 32v64h-24c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8zM384 32h128c17.7 0 32 14.3 32 32v32H352V64c0-17.7 14.3-32 32-32m-32 416V128h192v80h-24c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h24v112zm224-240V64c0-35.3-28.7-64-64-64H384c-35.3 0-64 28.7-64 64v432c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h192v16c0 8.8 7.2 16 16 16s16-7.2 16-16V208m-32 32v64h-24c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8z"
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
                  d="M56 16h144c22.1 0 40 17.9 40 40v40H16V56c0-22.1 17.9-40 40-40m184 96v336H16V112zM16 504v-40h224v40c0 4.4 3.6 8 8 8s8-3.6 8-8V56c0-30.9-25.1-56-56-56H56C25.1 0 0 25.1 0 56v448c0 4.4 3.6 8 8 8s8-3.6 8-8m160-264v64c0 13.3 10.7 24 24 24h16c4.4 0 8-3.6 8-8s-3.6-8-8-8h-16c-4.4 0-8-3.6-8-8v-64c0-4.4 3.6-8 8-8h16c4.4 0 8-3.6 8-8s-3.6-8-8-8h-16c-13.3 0-24 10.7-24 24M376 16h144c22.1 0 40 17.9 40 40v40H336V56c0-22.1 17.9-40 40-40m184 96v336H336V112zM336 504v-40h224v40c0 4.4 3.6 8 8 8s8-3.6 8-8V56c0-30.9-25.1-56-56-56H376c-30.9 0-56 25.1-56 56v448c0 4.4 3.6 8 8 8s8-3.6 8-8m160-264v64c0 13.3 10.7 24 24 24h16c4.4 0 8-3.6 8-8s-3.6-8-8-8h-16c-4.4 0-8-3.6-8-8v-64c0-4.4 3.6-8 8-8h16c4.4 0 8-3.6 8-8s-3.6-8-8-8h-16c-13.3 0-24 10.7-24 24"
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
                  d="M24 64H0v424c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h160v8c0 13.3 10.7 24 24 24s24-10.7 24-24V64H24m168 160c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16M344 64h-24v424c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h160v8c0 13.3 10.7 24 24 24s24-10.7 24-24V64H344m168 160c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M32 0C14.3 0 0 14.3 0 32v32h256V32c0-17.7-14.3-32-32-32zm320 0c-17.7 0-32 14.3-32 32v32h256V32c0-17.7-14.3-32-32-32zM192 224c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16m336 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16z"
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
