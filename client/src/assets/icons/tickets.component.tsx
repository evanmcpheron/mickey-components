import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TicketsIcon: React.FC<
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
                  d="M96 96v48c0 8.8 7.4 15.7 15.7 18.6C130.5 169.1 144 187 144 208s-13.5 38.9-32.3 45.4c-8.3 2.9-15.7 9.8-15.7 18.6v48c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64v-48c0-8.8-7.4-15.7-15.7-18.6C605.5 246.9 592 229 592 208s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64m416 32H224v160h288zM224 96h288c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v240c0 66.3 53.7 120 120 120h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72z"
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
                  d="M160 80c-8.8 0-16 7.2-16 16v38.2c24 15.7 40 42.8 40 73.8s-16 58.1-40 73.8V320c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-38.2c-24-15.7-40-42.8-40-73.8s16-58.1 40-73.8V96c0-8.8-7.2-16-16-16zm0-48h416c35.3 0 64 28.7 64 64v56c0 8.8-7.4 15.7-15.6 19.1-14.3 6.1-24.4 20.3-24.4 36.9s10.1 30.8 24.4 36.9c8.1 3.4 15.6 10.3 15.6 19.1v56c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64v-56c0-8.8 7.4-15.7 15.6-19.1C126 238.8 136 224.6 136 208s-10.1-30.8-24.4-36.9C103.4 167.7 96 160.8 96 152V96c0-35.3 28.7-64 64-64M24 96c13.3 0 24 10.7 24 24v240c0 39.8 32.2 72 72 72h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H120C53.7 480 0 426.3 0 360V120c0-13.3 10.7-24 24-24m440 144v-64H272v64zm-240-80c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32z"
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
                  d="M160 64c-17.7 0-32 14.3-32 32v47.5c23.7 11.8 40 36.2 40 64.5s-16.3 52.8-40 64.5V320c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32v-47.5c-23.7-11.8-40-36.2-40-64.5s16.3-52.8 40-64.5V96c0-17.7-14.3-32-32-32zm452.2 77.5h-.1zm0 132.9h-.1zm-488.4 0v-.1zm0-132.9v.1zM160 32h416c35.3 0 64 28.7 64 64v56c0 8.8-7.4 15.7-15.6 19.1-14.3 6.1-24.4 20.3-24.4 36.9s10.1 30.8 24.4 36.9c8.1 3.4 15.6 10.3 15.6 19.1v56c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64v-56c0-8.8 7.4-15.7 15.6-19.1C126 238.8 136 224.6 136 208s-10.1-30.8-24.4-36.9C103.4 167.7 96 160.8 96 152V96c0-35.3 28.7-64 64-64M16 96c8.8 0 16 7.2 16 16v256c0 44.2 35.8 80 80 80h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H112C50.1 480 0 429.9 0 368V112c0-8.8 7.2-16 16-16m240 64v96h224v-96zm-32 0c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32z"
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
                  d="M160 48c-26.5 0-48 21.5-48 48v49.9c.3.1.6.3.9.4C140 153.6 160 178.5 160 208s-20 54.4-47.1 61.8c-.3.1-.6.2-.9.4V320c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-49.9c-.3-.1-.6-.3-.9-.4C596 262.4 576 237.5 576 208s20-54.4 47.1-61.8c.3-.1.6-.2.9-.4V96c0-26.5-21.5-48-48-48zm0-16h416c35.3 0 64 28.7 64 64v51.2c0 7.1-5.8 12.6-12.7 14.5C607 167.2 592 185.9 592 208s15 40.8 35.3 46.3c6.8 1.9 12.7 7.4 12.7 14.5V320c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64v-51.2c0-7.1 5.8-12.6 12.7-14.5C129 248.8 144 230.1 144 208s-15-40.8-35.3-46.3c-6.8-1.9-12.7-7.4-12.7-14.5V96c0-35.3 28.7-64 64-64M8 88c4.4 0 8 3.6 8 8v280c0 48.6 39.4 88 88 88h448c4.4 0 8 3.6 8 8s-3.6 8-8 8H104C46.6 480 0 433.4 0 376V96c0-4.4 3.6-8 8-8m232 40c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16zm-32 16c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H240c-17.7 0-32-14.3-32-32z"
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
                  d="M160 32c-35.3 0-64 28.7-64 64v48c0 8.8 7.4 15.7 15.7 18.6C130.5 169.1 144 187 144 208s-13.5 38.9-32.3 45.4c-8.3 2.9-15.7 9.8-15.7 18.6v48c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64v-48c0-8.8-7.4-15.7-15.7-18.6C605.5 246.9 592 229 592 208s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V96c0-35.3-28.7-64-64-64zm64 96v160h288V128zm-32 0c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 120c0-13.3-10.7-24-24-24S0 106.7 0 120v240c0 66.3 53.7 120 120 120h400c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72zm176 8h288v160H224zm-32 0v160c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32"
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
