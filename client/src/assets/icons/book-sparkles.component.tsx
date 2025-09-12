import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BookSparklesIcon: React.FC<
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
                  d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h320c17.7 0 32-14.3 32-32s-14.3-32-32-32v-64c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H96m0 384h256v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32m168-184 16.6-38.8c2.8-6.5 11.9-6.5 14.7 0L312 200l38.8 16.6c6.5 2.8 6.5 11.9 0 14.7L312 248l-16.6 38.8c-2.8 6.5-11.9 6.5-14.7 0L264 248l-38.8-16.6c-6.5-2.8-6.5-11.9 0-14.7zM168.8 78.3c2.9-5.9 11.4-5.9 14.3 0L192 96l17.7 8.8c5.9 2.9 5.9 11.4 0 14.3L192 128l-8.8 17.7c-2.9 5.9-11.4 5.9-14.3 0L160 128l-17.7-8.8c-5.9-2.9-5.9-11.4 0-14.3L160 96z"
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
                  d="M0 88C0 39.4 39.4 0 88 0h304c30.9 0 56 25.1 56 56v288c0 22.3-13.1 41.6-32 50.6V464h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80 0-2.7.1-5.4.4-8H0zm80 312c-17.7 0-32 14.3-32 32s14.3 32 32 32h288v-64zm-32-41.3c9.8-4.3 20.6-6.7 32-6.7h312c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8H88c-22.1 0-40 17.9-40 40zM160 112l8.8-17.7c2.9-5.9 11.4-5.9 14.3 0L192 112l17.7 8.8c5.9 2.9 5.9 11.4 0 14.3L192 144l-8.8 17.7c-2.9 5.9-11.4 5.9-14.3 0L160 144l-17.7-8.8c-5.9-2.9-5.9-11.4 0-14.3zm104 104 16.6-38.8c2.8-6.5 11.9-6.5 14.7 0L312 216l38.8 16.6c6.5 2.8 6.5 11.9 0 14.7L312 264l-16.6 38.8c-2.8 6.5-11.9 6.5-14.7 0L264 264l-38.8-16.6c-6.5-2.8-6.5-11.9 0-14.7z"
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
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h368c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-66.7c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48zm320 416v64H64c-17.7 0-32-14.3-32-32s14.3-32 32-32zM64 384c-11.7 0-22.6 3.1-32 8.6V64c0-17.7 14.3-32 32-32h336c8.8 0 16 7.2 16 16v320c0 8.8-7.2 16-16 16zm201.9-213.1-16.5 38.6-38.6 16.5c-19.4 8.3-19.4 35.8 0 44.1l38.6 16.5 16.5 38.6c8.3 19.4 35.8 19.4 44.1 0l16.5-38.6 38.6-16.5c19.4-8.3 19.4-35.8 0-44.1l-38.6-16.5-16.5-38.6c-8.3-19.4-35.8-19.4-44.1 0m22.1 29.7 11.7 27.3c1.6 3.8 4.6 6.8 8.4 8.4l27.3 11.7-27.3 11.7c-3.8 1.6-6.8 4.6-8.4 8.4L288 295.4l-11.7-27.3c-1.6-3.8-4.6-6.8-8.4-8.4L240.6 248l27.3-11.7c3.8-1.6 6.8-4.6 8.4-8.4zm-135-78.8 7-14 7 14c1.5 3.1 4.1 5.6 7.2 7.2l14 7-14 7c-3.1 1.5-5.6 4.1-7.2 7.2l-7 14-7-14c-1.5-3.1-4.1-5.6-7.2-7.2l-14-7 14-7c3.1-1.5 5.6-4.1 7.2-7.2m28.5-42.7c-8.8-17.7-34.1-17.7-42.9 0l-11.8 23.6-23.6 11.8c-17.7 8.8-17.7 34.1 0 42.9l23.6 11.8 11.8 23.6c8.8 17.7 34.1 17.7 42.9 0l11.8-23.6 23.6-11.8c17.7-8.8 17.7-34.1 0-42.9l-23.6-11.8-11.8-23.5z"
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
                  d="M56 0C25.1 0 0 25.1 0 56v400c0 30.9 25.1 56 56 56h384c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-80.8c18.3-3.7 32-19.8 32-39.2V40c0-22.1-17.9-40-40-40zm344 416v80H56c-22.1 0-40-17.9-40-40s17.9-40 40-40zM56 400c-15.7 0-29.8 6.4-40 16.8V56c0-22.1 17.9-40 40-40h352c13.3 0 24 10.7 24 24v336c0 13.3-10.7 24-24 24zm217.3-226-20.2 47.1-47.1 20.2c-12.9 5.5-12.9 23.9 0 29.4l47.1 20.2 20.2 47.1c5.5 12.9 23.9 12.9 29.4 0l20.2-47.1 47.1-20.2c12.9-5.5 12.9-23.9 0-29.4l-47.1-20.2-20.2-47.1c-5.5-12.9-23.9-12.9-29.4 0m14.7 6.3 21.4 50c.8 1.9 2.3 3.4 4.2 4.2l50 21.4-50 21.4c-1.9.8-3.4 2.3-4.2 4.2l-21.4 50-21.4-50c-.8-1.9-2.3-3.4-4.2-4.2l-50-21.4 50-21.4c1.9-.8 3.4-2.3 4.2-4.2zM182.3 82.7c-5.9-11.8-22.7-11.8-28.6 0l-13 26-26 13c-11.8 5.9-11.8 22.7 0 28.6l26 13 13 26c5.9 11.8 22.7 11.8 28.6 0l13-26 26-13c11.8-5.9 11.8-22.7 0-28.6l-26-13zm-28.5 35.5L168 89.9l14.2 28.4c.8 1.5 2 2.8 3.6 3.6l28.3 14.1-28.4 14.2c-1.5.8-2.8 2-3.6 3.6L168 182.1l-14.2-28.4c-.8-1.5-2-2.8-3.6-3.6L121.9 136l28.4-14.2c1.5-.8 2.8-2 3.6-3.6z"
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
                  d="M64 416c0-17.7 14.3-32 32-32h320v64H96c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 96C0 43 43 0 96 0h320c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-53 0-96-43-96-96zm264 104-38.8 16.6c-6.5 2.8-6.5 11.9 0 14.7L264 248l16.6 38.8c2.8 6.5 11.9 6.5 14.7 0L312 248l38.8-16.6c6.5-2.8 6.5-11.9 0-14.7L312 200l-16.6-38.8c-2.8-6.5-11.9-6.5-14.7 0zM168.8 78.3 160 96l-17.7 8.8c-5.9 2.9-5.9 11.4 0 14.3L160 128l8.8 17.7c2.9 5.9 11.4 5.9 14.3 0L192 128l17.7-8.8c5.9-2.9 5.9-11.4 0-14.3L192 96l-8.8-17.7c-2.9-5.9-11.4-5.9-14.3 0z"
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
