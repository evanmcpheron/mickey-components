import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SquareEnvelopeIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm154 239.7L64.2 172.4C66 156.4 79.5 144 96 144h256c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8m29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9"
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
                  d="M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm216.7 159.6L96.1 189.3c1.4-16.4 15.2-29.3 31.9-29.3h192c16.7 0 30.5 12.9 31.9 29.3l-120.6 66.3c-2.2 1.2-4.7 1.9-7.3 1.9s-5.1-.6-7.3-1.9m30 28L352 225.7V320c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-94.3l105.3 57.9c7 3.8 14.8 5.8 22.7 5.8s15.8-2 22.7-5.8"
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
                  d="M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm288 128v29.2l-120.7 66.4c-2.2 1.2-4.7 1.9-7.3 1.9s-5.1-.6-7.3-1.9L96 189.2V160zm0 65.7V352H96V225.7l105.3 57.9c7 3.8 14.8 5.8 22.7 5.8s15.8-2 22.7-5.8zM96 128c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32z"
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
                  d="M384 48c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm288 128c8.8 0 16 7.2 16 16v6.7l-4 2.6-129.6 83.6c-3.1 2-6.7 3.1-10.4 3.1s-7.3-1.1-10.4-3.1L84 185.3l-4-2.6V176c0-8.8 7.2-16 16-16zm16 41.7V336c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V201.7l124.9 80.6c5.7 3.7 12.3 5.6 19.1 5.6s13.4-2 19.1-5.6zM96 144c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32z"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm154 239.7L64.2 172.4C66 156.4 79.5 144 96 144h256c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8m29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64.2 172.4 218 271.7c1.8 1.2 3.9 1.8 6 1.8s4.2-.6 6-1.8l153.8-99.3c-1.8-16-15.3-28.4-31.8-28.4H96c-16.5 0-30 12.4-31.8 28.4m319.8 38-136.6 88.2c-7 4.5-15.1 6.9-23.4 6.9s-16.4-2.4-23.4-6.9L64 210.4V336c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32z"
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
