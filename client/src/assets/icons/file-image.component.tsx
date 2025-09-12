import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FileImageIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zM64 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m152 32c5.3 0 10.2 2.6 13.2 6.9l88 128c3.4 4.9 3.7 11.3 1 16.5S310 448 304 448H80c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2.2-16.1l48-80c2.9-4.8 8.1-7.8 13.7-7.8s10.8 2.9 13.7 7.8l12.8 21.4 48.3-70.2c3-4.3 7.9-6.9 13.2-6.9z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h160v80c0 17.7 14.3 32 32 32h80v288c0 8.8-7.2 16-16 16zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3l-90.6-90.5C262.7 6.7 246.5 0 229.5 0zm96 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0m69.2 46.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-41.3 59.7-11.9-19.1c-2.9-4.7-8.1-7.5-13.6-7.5s-10.6 2.8-13.6 7.5l-40 64c-3.1 4.9-3.2 11.1-.4 16.2s8.2 8.2 14 8.2h192c6 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-72-104z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M352 448V192H240c-26.5 0-48-21.5-48-48V32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32m-.5-288c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2V144c0 8.8 7.2 16 16 16zM0 64C0 28.7 28.7 0 64 0h156.1C232.8 0 245 5.1 254 14.1l115.9 115.8c9 9 14.1 21.2 14.1 33.9V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm72 192a24 24 0 1 1 48 0 24 24 0 1 1-48 0m109.3 112.9c-2.9 4.3-7.7 7-12.9 7.1s-10.1-2.2-13.2-6.4l-14.4-19.3L99 416h186.1l-65.4-104.7zm38.6-96.9c8 0 15.5 4.1 19.8 11l76 121.5c2.8 4.5 4.3 9.7 4.3 15.1 0 15.7-12.7 28.4-28.4 28.4H92.4C76.7 448 64 435.3 64 419.6c0-5.4 1.5-10.7 4.4-15.2l51.8-81.4c4.3-6.8 11.9-10.9 19.9-10.9 7.4 0 14.4 3.5 18.9 9.4l8.1 10.9 33.3-49.9c4.3-6.5 11.6-10.4 19.4-10.4z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M320 496c26.5 0 48-21.5 48-48V179.9c0-1.3-.1-2.6-.2-3.9H248c-22.1 0-40-17.9-40-40V16.2c-1.3-.2-2.6-.2-3.9-.2H64c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48zm41.1-336q-1.2-1.5-2.4-2.7l-132-131.9q-1.35-1.35-2.7-2.4v113c0 13.3 10.7 24 24 24zM0 64C0 28.7 28.7 0 64 0h140.1C216.8 0 229 5.1 238 14.1l131.9 131.8c9 9 14.1 21.2 14.1 33.9V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm56 160a40 40 0 1 1 80 0 40 40 0 1 1-80 0m40 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m78.6 116.6c-1.4 2.1-3.8 3.3-6.3 3.4s-4.9-1-6.5-3l-29.6-36.9-.1-.1s-.1 0-.1.1L66 416c-1.3 1.7-2 3.8-2 6 0 5.5 4.5 10 10 10h235.8c5.6 0 10.2-4.6 10.2-10.2 0-2.1-.7-4.2-1.9-5.9L228 288.2l-53.5 76.4zM228 272c5.1 0 9.9 2.5 12.8 6.6l90.4 128c3.1 4.4 4.8 9.7 4.8 15.1 0 14.5-11.7 26.2-26.2 26.2H74c-14.4 0-26-11.6-26-26 0-5.6 1.8-11.1 5.2-15.6l66-87.9c3.1-4.1 7.8-6.5 12.9-6.5 4.9 0 9.6 2.2 12.6 6.1l22.9 28.6 47.6-68c2.9-4.2 7.7-6.7 12.9-6.7z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m88 32c-5.3 0-10.2 2.6-13.2 6.9l-48.3 70.2-12.8-21.4c-2.9-4.8-8.1-7.8-13.7-7.8s-10.8 2.9-13.7 7.8l-48 80c-3 4.9-3 11.1-.2 16.1s8.2 8.1 13.9 8.1h224c5.9 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-88-128c-3-4.3-7.9-6.9-13.2-6.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160 224 0v128c0 17.7 14.3 32 32 32zM229.2 294.9c-3-4.3-7.9-6.9-13.2-6.9s-10.2 2.6-13.2 6.9l-48.3 70.2-12.8-21.4c-2.9-4.8-8.1-7.8-13.7-7.8s-10.8 2.9-13.7 7.8l-48 80c-3 4.9-3 11.1-.2 16.1s8.2 8.1 13.9 8.1h224c5.9 0 11.4-3.3 14.2-8.6s2.4-11.6-1-16.5l-88-128z"
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
