import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FontCaseIcon: React.FC<
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
                  d="M206 52.8C201.3 40.3 189.3 32 176 32s-25.3 8.3-30 20.8L2 436.8c-6.2 16.5 2.2 35 18.7 41.2s35-2.2 41.2-18.7L96.2 368h159.6l34.2 91.2c6.2 16.5 24.7 24.9 41.2 18.7s24.9-24.6 18.7-41.2zM231.8 304H120.2L176 155.1zM608 160c-13 0-24.1 7.7-29.2 18.8-19.4-11.9-42.3-18.8-66.8-18.8-70.7 0-128 57.3-128 128v64c0 70.7 57.3 128 128 128 24.5 0 47.4-6.9 66.8-18.8 5 11.1 16.2 18.8 29.2 18.8 17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32m-32 128v64c0 35.3-28.7 64-64 64s-64-28.7-64-64v-64c0-35.3 28.7-64 64-64s64 28.7 64 64"
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
                  d="M198.4 47.5C194.9 38.2 186 32 176 32s-18.9 6.2-22.4 15.5l-152 400c-4.7 12.4 1.5 26.3 13.9 31s26.3-1.5 31-13.9L83.1 368h185.8l36.7 96.5c4.7 12.4 18.6 18.6 31 13.9s18.6-18.6 13.9-31l-152-400zM250.7 320H101.4L176 123.6zM616 160c-13.3 0-24 10.7-24 24v8.8c-22.1-20.4-51.6-32.8-84-32.8-68.5 0-124 55.5-124 124v72c0 68.5 55.5 124 124 124 32.4 0 61.9-12.4 84-32.8v8.8c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24M432 284c0-42 34-76 76-76s76 34 76 76v72c0 42-34 76-76 76s-76-34-76-76z"
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
                  d="M190.9 42.3C188.6 36.1 182.6 32 176 32s-12.6 4.1-14.9 10.3l-160 416c-3.2 8.2.9 17.5 9.2 20.7s17.5-.9 20.7-9.2L76.2 352h199.6l45.3 117.7c3.2 8.2 12.4 12.4 20.7 9.2s12.4-12.4 9.2-20.7l-160-416zM263.5 320h-175L176 92.6zM624 160c-8.8 0-16 7.2-16 16v34.7c-22.6-30.8-59-50.7-100-50.7-68.5 0-124 55.5-124 124v72c0 68.5 55.5 124 124 124 41 0 77.4-19.9 100-50.7V464c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16M416 284c0-50.8 41.2-92 92-92s92 41.2 92 92v72c0 50.8-41.2 92-92 92s-92-41.2-92-92z"
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
                  d="M183.5 37.1c-1.2-3.1-4.2-5.1-7.5-5.1s-6.3 2-7.5 5.1L.6 469.1c-1.6 4.1.4 8.8 4.6 10.4s8.8-.4 10.4-4.6L63.3 352h225.4l47.8 122.9c1.6 4.1 6.2 6.2 10.4 4.6s6.2-6.2 4.6-10.4zm99 298.9h-213L176 62.1zM632 160c-4.4 0-8 3.6-8 8v49.2C603.8 183 566.6 160 524 160c-64.1 0-116 51.9-116 116v88c0 64.1 51.9 116 116 116 42.6 0 79.8-23 100-57.2V472c0 4.4 3.6 8 8 8s8-3.6 8-8V168c0-4.4-3.6-8-8-8m-8 116v88c0 55.2-44.8 100-100 100s-100-44.8-100-100v-88c0-55.2 44.8-100 100-100s100 44.8 100 100"
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
                  d="M512 160c-70.7 0-128 57.3-128 128v64c0 70.7 57.3 128 128 128 24.5 0 47.4-6.9 66.8-18.8 5 11.1 16.2 18.8 29.2 18.8 17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32-13 0-24.1 7.7-29.2 18.8-19.4-11.9-42.3-18.8-66.8-18.8m64 128v64c0 35.3-28.7 64-64 64s-64-28.7-64-64v-64c0-35.3 28.7-64 64-64s64 28.7 64 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M206 52.8C201.3 40.3 189.3 32 176 32s-25.3 8.3-30 20.8L2 436.8c-6.2 16.5 2.2 35 18.7 41.2s35-2.2 41.2-18.7L96.2 368h159.6l34.2 91.2c6.2 16.5 24.7 24.9 41.2 18.7s24.9-24.6 18.7-41.2zM231.8 304H120.2L176 155.1z"
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
