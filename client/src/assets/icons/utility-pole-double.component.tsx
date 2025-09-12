import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UtilityPoleDoubleIcon: React.FC<
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
                  d="M256 0c17.7 0 32 14.3 32 32v32h96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v40c0 17.7-14.3 32-32 32h-51.2L288 221.9V256h96v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v40c0 17.7-14.3 32-32 32h-51.2L288 413.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-66.1L83.2 320H32c-17.7 0-32-14.3-32-32v-40c0-13.3 10.7-24 24-24s24 10.7 24 24v8h32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h96v-34.1L83.2 128H32c-17.7 0-32-14.3-32-32V56c0-13.3 10.7-24 24-24s24 10.7 24 24v8h32v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8h96V32c0-17.7 14.3-32 32-32M140.8 128l83.2 55.4V128zM288 183.4l83.2-55.4H288zM140.8 320l83.2 55.4V320zM288 375.4l83.2-55.4H288z"
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
                  d="M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v56H128V56c0-13.3-10.7-24-24-24S80 42.7 80 56v24H48V56c0-13.3-10.7-24-24-24S0 42.7 0 56v32c0 22.1 17.9 40 40 40h43.2L232 227.2V272H128v-24c0-13.3-10.7-24-24-24s-24 10.7-24 24v24H48v-24c0-13.3-10.7-24-24-24S0 234.7 0 248v32c0 22.1 17.9 40 40 40h43.2L232 419.2V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-68.8L428.8 320H472c22.1 0 40-17.9 40-40v-32c0-13.3-10.7-24-24-24s-24 10.7-24 24v24h-32v-24c0-13.3-10.7-24-24-24s-24 10.7-24 24v24H280v-44.8L428.8 128H472c22.1 0 40-17.9 40-40V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v24h-32V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v24H280zm91.2 104L280 188.8V128zM232 188.8 140.8 128H232zM371.2 320 280 380.8V320zM232 380.8 140.8 320H232z"
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
                  d="M208 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v64h80V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 17.7-14.3 32-32 32h-42.5L304 231.8V288h80v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 17.7-14.3 32-32 32h-42.5L304 423.8V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V320h-32v176c0 8.8-7.2 16-16 16s-16-7.2-16-16v-72.2L74.5 320H32c-17.7 0-32-14.3-32-32v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h80v-56.2L74.5 128H32c-17.7 0-32-14.3-32-32V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h80zm-81.4 96 81.4 63.3V128zM240 224.2V288h32V128h-32v96.2m64-32.9 81.4-63.3H304zM126.6 320l81.4 63.3V320zM304 383.3l81.4-63.3H304zM272 32h-32v64h32z"
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
                  d="M264 16c4.4 0 8 3.6 8 8v56h-32V24c0-4.4 3.6-8 8-8zm-40 8v56H80V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v40H16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v72c0 17.7 14.3 32 32 32h69.5L224 228.2V272H80v-40c0-4.4-3.6-8-8-8s-8 3.6-8 8v40H16v-40c0-4.4-3.6-8-8-8s-8 3.6-8 8v72c0 17.7 14.3 32 32 32h69.5L224 420.2V504c0 4.4 3.6 8 8 8s8-3.6 8-8V336h32v168c0 4.4 3.6 8 8 8s8-3.6 8-8v-83.8L410.5 336H480c17.7 0 32-14.3 32-32v-72c0-4.4-3.6-8-8-8s-8 3.6-8 8v40h-48v-40c0-4.4-3.6-8-8-8s-8 3.6-8 8v40H288v-43.8L410.5 144H480c17.7 0 32-14.3 32-32V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v40h-48V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v40H288V24c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24m184.1 104H32c-8.8 0-16-7.2-16-16V96h480v16c0 8.8-7.2 16-16 16zm-278.3 16H224v64.8zM240 224.1V144h32v128h-32zm48-15.3V144h94.2zM408.1 320H32c-8.8 0-16-7.2-16-16v-16h480v16c0 8.8-7.2 16-16 16zm-278.3 16H224v64.8zm252.5 0L288 400.8V336h94.2z"
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
                  d="M128 64H80v-8c0-13.3 10.7-24 24-24s24 10.7 24 24zm-80 0H0v-8c0-13.3 10.7-24 24-24s24 10.7 24 24zm35.2 64h57.7l83.1 55.4v38.5zM288 183.4l83.2-55.4h57.7L288 221.9zM384 64v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8zm80 0v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8zM288 375.4l83.2-55.4h57.7L288 413.9zM140.8 320l83.2 55.4v38.5L83.2 320h57.7zM128 256H80v-8c0-13.3 10.7-24 24-24s24 10.7 24 24zm-80 0H0v-8c0-13.3 10.7-24 24-24s24 10.7 24 24zm464 0h-48v-8c0-13.3 10.7-24 24-24s24 10.7 24 24zm-80 0h-48v-8c0-13.3 10.7-24 24-24s24 10.7 24 24z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 0c17.7 0 32 14.3 32 32v32h224v32c0 17.7-14.3 32-32 32H288v128h224v32c0 17.7-14.3 32-32 32H288v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V320H32c-17.7 0-32-14.3-32-32v-32h224V128H32c-17.7 0-32-14.3-32-32V64h224V32c0-17.7 14.3-32 32-32"
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
