import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const EngineIcon: React.FC<
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
                  d="M400 112c13.3 0 24-10.7 24-24s-10.7-24-24-24H208c-13.3 0-24 10.7-24 24s10.7 24 24 24h72v32H128c-17.7 0-32 14.3-32 32v56H48v-72c0-13.3-10.7-24-24-24S0 146.7 0 160v192c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h48v72c0 17.7 14.3 32 32 32h44.8l32 40c12.1 15.2 30.5 24 50 24H448c35.3 0 64-28.7 64-64V238.8c0-19.4-8.8-37.8-24-50L449.5 158c-11.3-9.1-25.4-14-40-14H328v-32zm144 112v192c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32m-256 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M424 88c0 13.3-10.7 24-24 24h-72v32h68.6c12.6 0 25 3.7 35.5 10.7l51.4 34.3c17.8 11.9 28.5 31.9 28.5 53.3V384c0 35.3-28.7 64-64 64H254.8c-19.4 0-37.8-8.8-50-24l-32-40H144c-35.3 0-64-28.7-64-64v-40H48v72c0 13.3-10.7 24-24 24S0 365.3 0 352V160c0-13.3 10.7-24 24-24s24 10.7 24 24v72h32v-24c0-35.3 28.7-64 64-64h136v-32h-72c-13.3 0-24-10.7-24-24s10.7-24 24-24h192c13.3 0 24 10.7 24 24M288 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-128 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M172.8 336c14.6 0 28.4 6.6 37.5 18l32 40c3 3.8 7.6 6 12.5 6H448c8.8 0 16-7.2 16-16V242.3c0-5.3-2.7-10.3-7.1-13.3l-51.4-34.3c-2.6-1.8-5.7-2.7-8.9-2.7H144c-8.8 0-16 7.2-16 16v112c0 8.8 7.2 16 16 16zM576 192h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32"
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
                  d="M416 80c0 8.8-7.2 16-16 16h-80v32h76.6c12.6 0 25 3.7 35.5 10.7l51.4 34.3c17.8 11.9 28.5 31.9 28.5 53.3V384c0 35.3-28.7 64-64 64H254.8c-19.4 0-37.8-8.8-50-24l-32-40H144c-26.5 0-48-21.5-48-48v-64H32v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V160c0-8.8 7.2-16 16-16s16 7.2 16 16v80h64v-64c0-26.5 21.5-48 48-48h144V96h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h192c8.8 0 16 7.2 16 16m-112 80H144c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h28.8c9.7 0 18.9 4.4 25 12l32 40c6.1 7.6 15.3 12 25 12H448c17.7 0 32-14.3 32-32V226.3c0-10.7-5.3-20.7-14.2-26.6l-51.4-34.3c-5.3-3.5-11.4-5.4-17.8-5.4H304m-136 96a24 24 0 1 1 48 0 24 24 0 1 1-48 0m120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m216-32v192h32V224zm-32 0c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32z"
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
                  d="M416 72c0 4.4-3.6 8-8 8h-96v48h84.6c12.6 0 25 3.7 35.5 10.7l51.4 34.3c17.8 11.9 28.5 31.9 28.5 53.3V384c0 35.3-28.7 64-64 64H279.2c-15 0-29.5-5.2-41-14.8l-59-49.2H112c-26.5 0-48-21.5-48-48v-72H16v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8s8 3.6 8 8v80h48v-72c0-26.5 21.5-48 48-48h184V80h-96c-4.4 0-8-3.6-8-8s3.6-8 8-8h208c4.4 0 8 3.6 8 8M80 248v88c0 17.7 14.3 32 32 32h67.2c3.7 0 7.4 1.3 10.2 3.7l59 49.2c8.6 7.2 19.5 11.1 30.7 11.1H448c26.5 0 48-21.5 48-48V226.3c0-16-8-31-21.4-39.9l-51.4-34.3c-7.9-5.3-17.1-8.1-26.6-8.1H112c-17.7 0-32 14.3-32 32zm176 8a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m96-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m16 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-240 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m384-64c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32z"
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
                  d="M424 88c0-13.3-10.7-24-24-24H208c-13.3 0-24 10.7-24 24s10.7 24 24 24h72v32h48v-32h72c13.3 0 24-10.7 24-24M24 136c-13.3 0-24 10.7-24 24v192c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h48v-48H48v-72c0-13.3-10.7-24-24-24m552 56c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 176c0-17.7 14.3-32 32-32h281.5c14.5 0 28.6 4.9 40 14l38.5 30.8c15.2 12.1 24 30.5 24 50V384c0 35.3-28.7 64-64 64H254.8c-19.4 0-37.8-8.8-50-24l-32-40H128c-17.7 0-32-14.3-32-32zm192 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-64-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
