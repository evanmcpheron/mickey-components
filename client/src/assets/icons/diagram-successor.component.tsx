import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DiagramSuccessorIcon: React.FC<
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
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 416v-64c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64M64 160V96h160v64zm224 0V96h80c8.8 0 16 7.2 16 16v16h-38.1c-21.4 0-32.1 25.9-17 41l70.1 70c9.4 9.4 24.6 9.4 33.9 0l70.1-70c15.1-15.1 4.4-41-17-41h-38v-16c0-44.2-35.8-80-80-80H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 416v-64c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64M240 160c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16zm48-64c0-5.5-.7-10.9-2-16h82c13.3 0 24 10.7 24 24v38.1l-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23V104c0-39.8-32.2-72-72-72H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M480 352c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32zm32 64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64zM256 96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32zm23.4-32c5.4 9.4 8.6 20.3 8.6 32v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h304c35.3 0 64 28.7 64 64v89.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-64 64c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l36.7 36.7V96c0-17.7-14.3-32-32-32zM96 368h320c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M496 352c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48zm16 64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64zM272 96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48zm-5.7-48C279.6 59.7 288 76.9 288 96v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h304c30.9 0 56 25.1 56 56v116.7l50.3-50.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-64 64c-3.1 3.1-8.2 3.1-11.3 0l-64-64c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l50.4 50.3V88c0-22.1-17.9-40-40-40zM80 376h352c4.4 0 8 3.6 8 8s-3.6 8-8 8H80c-4.4 0-8-3.6-8-8s3.6-8 8-8"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M224 224c35.3 0 64-28.7 64-64V96h80c8.8 0 16 7.2 16 16v16h-38.1c-21.4 0-32.1 25.9-17 41l70.1 70c9.4 9.4 24.6 9.4 33.9 0l70.1-70c15.1-15.1 4.4-41-17-41h-38v-16c0-44.2-35.8-80-80-80H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 480c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64z"
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
