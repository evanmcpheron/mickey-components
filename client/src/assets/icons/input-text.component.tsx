import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const InputTextIcon: React.FC<
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
                  d="M64 128v256h512V128zm-64 0c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm184 32c9.5 0 18.1 5.6 21.9 14.3l64 144c5.4 12.1-.1 26.3-12.2 31.7s-26.3-.1-31.7-12.2l-4.3-9.7h-75.4l-4.3 9.7c-5.4 12.1-19.6 17.6-31.7 12.2s-17.6-19.6-12.2-31.7l64-144c3.9-8.7 12.4-14.3 21.9-14.3m0 83.1L167.6 280h32.8zM304 184c0-13.3 10.7-24 24-24h52c33.1 0 60 26.9 60 60 0 9.2-2.1 17.9-5.8 25.7 13.3 11 21.8 27.6 21.8 46.3 0 33.1-26.9 60-60 60h-68c-13.3 0-24-10.7-24-24V184m48 24v24h28c6.6 0 12-5.4 12-12s-5.4-12-12-12zm0 96h44c6.6 0 12-5.4 12-12s-5.4-12-12-12h-44z"
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
                  d="M64 112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h512c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zM0 128c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm184 32c9.5 0 18.1 5.6 21.9 14.3l64 144c5.4 12.1-.1 26.3-12.2 31.7s-26.3-.1-31.7-12.2l-4.3-9.7h-75.4l-4.3 9.7c-5.4 12.1-19.6 17.6-31.7 12.2s-17.6-19.6-12.2-31.7l64-144c3.9-8.7 12.4-14.3 21.9-14.3m0 83.1L167.6 280h32.8zM304 184c0-13.3 10.7-24 24-24h52c33.1 0 60 26.9 60 60 0 9.2-2.1 17.9-5.8 25.7 13.3 11 21.8 27.6 21.8 46.3 0 33.1-26.9 60-60 60h-68c-13.3 0-24-10.7-24-24V184m48 24v24h28c6.6 0 12-5.4 12-12s-5.4-12-12-12zm0 96h44c6.6 0 12-5.4 12-12s-5.4-12-12-12h-44z"
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
                  d="M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zM0 128c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm176 32c6.5 0 12.4 4 14.9 10.1l64 160c3.3 8.2-.7 17.5-8.9 20.8s-17.5-.7-20.8-8.9l-8.8-22h-80.8l-8.8 21.9c-3.3 8.2-12.6 12.2-20.8 8.9s-12.2-12.6-8.9-20.8l64-160c2.4-6.1 8.3-10.1 14.9-10.1zm0 59.1L148.4 288h55.1zM288 176c0-8.8 7.2-16 16-16h56c30.9 0 56 25.1 56 56 0 12.1-3.8 23.3-10.4 32.5C421.5 258.4 432 276 432 296c0 30.9-25.1 56-56 56h-72c-8.8 0-16-7.2-16-16V176m72 96h-40v48h56c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0-32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40v48z"
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
                  d="M64 80c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h512c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zM0 128c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 32c3.2 0 6.2 2 7.4 5l72 176c1.7 4.1-.3 8.8-4.4 10.4s-8.8-.3-10.4-4.4l-14.3-35H109.7l-14.3 35c-1.7 4.1-6.3 6-10.4 4.4s-6-6.3-4.4-10.4l72-176c1.2-3 4.2-5 7.4-5m0 29.1L116.3 296h87.4zM272 168c0-4.4 3.6-8 8-8h52c28.7 0 52 23.3 52 52 0 15.7-6.9 29.7-17.9 39.2 19.8 7.4 33.9 26.4 33.9 48.8 0 28.7-23.3 52-52 52h-68c-4.4 0-8-3.6-8-8V168m16 24v56h44c19.9 0 36-16.1 36-36s-16.1-36-36-36h-44zm44 72h-44v72h60c19.9 0 36-16.1 36-36s-16.1-36-36-36z"
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
                  d="M576 128v256H64V128zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M205.9 174.3C202 165.6 193.5 160 184 160s-18.1 5.6-21.9 14.3l-64 144c-5.4 12.1.1 26.3 12.2 31.7s26.3-.1 31.7-12.2l4.3-9.7h75.5l4.3 9.7c5.4 12.1 19.6 17.6 31.7 12.2s17.6-19.6 12.2-31.7l-64-144zM200.4 280h-32.8l16.4-36.9zM304 184v144c0 13.3 10.7 24 24 24h68c33.1 0 60-26.9 60-60 0-18.6-8.5-35.3-21.8-46.3 3.7-7.8 5.8-16.5 5.8-25.7 0-33.1-26.9-60-60-60h-52c-13.3 0-24 10.7-24 24m48 24h28c6.6 0 12 5.4 12 12s-5.4 12-12 12h-28zm0 96v-24h44c6.6 0 12 5.4 12 12s-5.4 12-12 12z"
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
