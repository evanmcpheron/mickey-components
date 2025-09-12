import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CabinetFilingIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v176H0zm0 208h448v176c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128-144v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h128v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32m0 256v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h128v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32"
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
                  d="M400 232H48V64c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16zM0 256v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v192m400 192c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V280h352zM160 152v-8h128v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-16c0-22.1-17.9-40-40-40H152c-22.1 0-40 17.9-40 40v16c0 13.3 10.7 24 24 24s24-10.7 24-24m-8 184c-22.1 0-40 17.9-40 40v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h128v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-16c0-22.1-17.9-40-40-40z"
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
                  d="M416 240H32V64c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32zM0 256v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v192m416 192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V272h384zM160 96c-17.7 0-32 14.3-32 32v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h128v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-17.7-14.3-32-32-32zm0 256c-17.7 0-32 14.3-32 32v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h128v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-17.7-14.3-32-32-32z"
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
                  d="M432 248H16V64c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48zM0 256v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v192m432 192c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V264h416zM144 120c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4 3.6 8 8 8s8-3.6 8-8v-16c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v16c0 4.4 3.6 8 8 8s8-3.6 8-8zm8 232c-13.3 0-24 10.7-24 24v16c0 4.4 3.6 8 8 8s8-3.6 8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4 3.6 8 8 8s8-3.6 8-8v-16c0-13.3-10.7-24-24-24z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v176H0zm0 208h448v176c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128-144v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h128v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32m0 256v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h128v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 96c-17.7 0-32 14.3-32 32v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h128v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-17.7-14.3-32-32-32zm0 256c-17.7 0-32 14.3-32 32v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h128v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-17.7-14.3-32-32-32zM0 272h448v-32H0z"
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
