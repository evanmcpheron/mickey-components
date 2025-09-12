import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckMovingIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v304c0 44.2 35.8 80 80 80 26.2 0 49.4-12.6 64-32 14.6 19.4 37.8 32 64 32 44.2 0 80-35.8 80-80 0-5.5-.6-10.8-1.6-16h163.2c-1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16h1.6c17.7 0 32-14.3 32-32v-90.3c0-9.2-3.2-18.2-9-25.3l-58.8-71.8c-10.6-13-26.5-20.5-43.3-20.5H480V96c0-35.3-28.7-64-64-64zm521 224H480v-64h48.8c2.4 0 4.7 1.1 6.2 2.9zm-57 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-352 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-96-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M72 80c-13.3 0-24 10.7-24 24v222.7c9.8-4.3 20.6-6.7 32-6.7 26.2 0 49.4 12.6 64 32 14.6-19.4 37.8-32 64-32s49.4 12.6 64 32h160V104c0-13.3-10.7-24-24-24zm136 400c-26.2 0-49.4-12.6-64-32-14.6 19.4-37.8 32-64 32-44.2 0-80-35.8-80-80V104c0-39.8 32.2-72 72-72h336c39.8 0 72 32.2 72 72v40h48.8c16.8 0 32.7 7.5 43.3 20.5l58.9 71.9c5.8 7.1 9 16.1 9 25.3V368c0 17.7-14.3 32-32 32 0 44.2-35.8 80-80 80s-80-35.8-80-80H288c0 44.2-35.8 80-80 80m327-285.1c-1.5-1.9-3.8-2.9-6.2-2.9H480v64h105zM528 432a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-288-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0M80 432a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M72 64c-22.1 0-40 17.9-40 40v232c13.4-10 30-16 48-16 26.2 0 49.4 12.6 64 32 14.6-19.4 37.8-32 64-32 32.8 0 61 19.7 73.3 48H448V104c0-22.1-17.9-40-40-40zm408 272c13.4-10 30-16 48-16 32.8 0 60.9 19.7 73.3 47.9 3.8-.6 6.7-3.9 6.7-7.9V256H480zm0-176v64h112l-43.2-57.6c-3-4-7.8-6.4-12.8-6.4zm160 90.7V360c0 19.4-13.7 35.5-32 39.2v.8c0 44.2-35.8 80-80 80s-80-35.8-80-80H288c0 44.2-35.8 80-80 80-26.2 0-49.4-12.6-64-32-14.6 19.4-37.8 32-64 32-44.2 0-80-35.8-80-80V104c0-39.8 32.2-72 72-72h336c39.8 0 72 32.2 72 72v24h56c15.1 0 29.3 7.1 38.4 19.2l56 74.7c6.2 8.3 9.6 18.4 9.6 28.8M528 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-272-48a48 48 0 1 0-96 0 48 48 0 1 0 96 0M80 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96"
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
                  d="M72 48c-30.9 0-56 25.1-56 56v248c14.6-19.4 37.8-32 64-32 31.7 0 59 18.4 72 45.1 13-26.7 40.3-45.1 72-45.1 38.7 0 71 27.5 78.4 64H448V104c0-30.9-25.1-56-56-56zm152 432c-31.7 0-59-18.4-72-45.1-13 26.7-40.3 45.1-72 45.1-44.2 0-80-35.8-80-80V104c0-39.8 32.2-72 72-72h320c39.8 0 72 32.2 72 72v32h80c12.6 0 24.4 5.9 32 16l56 74.7c5.2 6.9 8 15.3 8 24V376c0 17.7-14.3 32-32 32h-.4c-4 40.4-38.1 72-79.6 72s-75.6-31.6-79.6-72h-.4v-8H304c0 44.2-35.8 80-80 80m383.6-88h.4c8.8 0 16-7.2 16-16V256H464v96c14.6-19.4 37.8-32 64-32 41.5 0 75.6 31.6 79.6 72m11.6-155.7-56-74.7c-4.5-6-11.6-9.6-19.2-9.6h-80v88h157.5c-.6-1.3-1.4-2.6-2.3-3.7M528 464a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-240-64a64 64 0 1 0-128 0 64 64 0 1 0 128 0M80 464a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                  d="M96 352a64 64 0 1 0 0 128 64 64 0 1 0 0-128m160 0a64 64 0 1 0 0 128 64 64 0 1 0 0-128m288 0a64 64 0 1 0 0 128 64 64 0 1 0 0-128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 32C28.7 32 0 60.7 0 96v288h5.5c13.2-37.3 48.7-64 90.5-64 33.4 0 62.8 17 80 42.9 17.2-25.9 46.6-42.9 80-42.9 41.8 0 77.4 26.7 90.5 64h107c13.2-37.3 48.7-64 90.5-64 38.2 0 71.2 22.3 86.6 54.6 5.8-5.8 9.4-13.8 9.4-22.6v-90.3c0-9.2-3.2-18.2-9-25.3l-58.8-71.8c-10.6-13-26.5-20.5-43.3-20.5H480V96c0-35.3-28.7-64-64-64zm521 224H480v-64h48.8c2.4 0 4.7 1.1 6.2 2.9z"
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
