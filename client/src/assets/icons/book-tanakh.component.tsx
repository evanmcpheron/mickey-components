import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BookTanakhIcon: React.FC<
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
                  d="M352 0c53 0 96 43 96 96v320c0 53-43 96-96 96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32v-64c-17.7 0-32-14.3-32-32V32C0 14.3 14.3 0 32 0h320m0 384H96v64h256c17.7 0 32-14.3 32-32s-14.3-32-32-32M138.7 208l13.9 24h-27.7l13.9-24zm-13.9-24-27.7 48c-6.2 10.7 1.5 24 13.9 24h55.4l27.7 48c6.2 10.7 21.6 10.7 27.7 0l27.7-48H305c12.3 0 20-13.3 13.9-24l-27.7-48 27.7-48c6.2-10.7-1.5-24-13.9-24h-55.4l-27.7-48c-6.2-10.7-21.6-10.7-27.7 0l-27.7 48H111c-12.3 0-20 13.3-13.9 24zm27.7 0 27.7-48h55.4l27.7 48-27.7 48h-55.3l-27.7-48zm0-48-13.9 24-13.9-24h27.7zm41.6-24L208 88l13.9 24zm69.3 24h27.7l-13.9 24-13.9-24zm13.9 72 13.9 24h-27.8zm-55.4 48L208 280l-13.9-24h27.7z"
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
                  d="M448 88c0-48.6-39.4-88-88-88H56C25.1 0 0 25.1 0 56v288c0 22.3 13.1 41.6 32 50.6V464h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h344c44.2 0 80-35.8 80-80 0-2.7-.1-5.4-.4-8h.4zm-80 312c17.7 0 32 14.3 32 32s-14.3 32-32 32H80v-64zm32-41.3c-9.8-4.3-20.6-6.7-32-6.7H56c-4.4 0-8-3.6-8-8V56c0-4.4 3.6-8 8-8h304c22.1 0 40 17.9 40 40zM216 104l13.9 24h-27.8zm-13.9-24-27.7 48H119c-12.3 0-20 13.3-13.9 24l27.7 48-27.7 48c-6.2 10.7 1.5 24 13.9 24h55.4l27.7 48c6.2 10.7 21.6 10.7 27.7 0l27.7-48H313c12.3 0 20-13.3 13.9-24l-27.7-48 27.7-48c6.2-10.7-1.5-24-13.9-24h-55.4l-27.7-48c-6.2-10.7-21.6-10.7-27.7 0zm-69.3 72h27.7l-13.9 24-13.9-24zm55.4 0h55.4l27.7 48-27.7 48h-55.3l-27.7-48 27.7-48zm-55.4 96 13.9-24 13.9 24h-27.7zm83.2 48-13.9-24h27.7zm83.1-48h-27.7l13.9-24 13.9 24zm0-96-13.9 24-13.9-24H299z"
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
                  d="M384 0c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-66.7C13.4 406.7 0 388.9 0 368V48C0 21.5 21.5 0 48 0zM64 416v64h320c17.7 0 32-14.3 32-32s-14.3-32-32-32zm320-32c11.7 0 22.6 3.1 32 8.6V64c0-17.7-14.3-32-32-32H48c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16zM146.7 232l-13.9 24h27.7l-13.9-24zm-13.9-24-27.7-48c-6.2-10.7 1.5-24 13.9-24h55.4l27.7-48c6.2-10.7 21.6-10.7 27.7 0l27.7 48H313c12.3 0 20 13.3 13.9 24l-27.7 48 27.7 48c6.2 10.7-1.5 24-13.9 24h-55.4l-27.7 48c-6.2 10.7-21.6 10.7-27.7 0l-27.7-48H119c-12.3 0-20-13.3-13.9-24zm27.7 0 27.7 48h55.4l27.7-48-27.7-48h-55.3l-27.7 48zm0-48h-27.6l13.9 24 13.9-24zm41.6-24h27.7L216 112zm69.3 24 13.9 24 13.9-24zm13.9 72-13.9 24h27.7l-13.9-24zm-55.4 48h-27.8l13.9 24z"
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
                  d="M392 0c30.9 0 56 25.1 56 56v400c0 30.9-25.1 56-56 56H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24v-80.8C13.7 411.5 0 395.4 0 376V40C0 17.9 17.9 0 40 0zM48 416v80h344c22.1 0 40-17.9 40-40s-17.9-40-40-40zm344-16c15.7 0 29.8 6.4 40 16.8V56c0-22.1-17.9-40-40-40H40c-13.3 0-24 10.7-24 24v336c0 13.3 10.7 24 24 24zM239.1 136 216 96l-23.1 40zm18.5 0H313c12.3 0 20 13.3 13.9 24l-27.7 48 27.7 48c6.2 10.7-1.5 24-13.9 24h-55.4l-27.7 48c-6.2 10.7-21.6 10.7-27.7 0l-27.7-48H119c-12.3 0-20-13.3-13.9-24l27.7-48-27.7-48c-6.2-10.7 1.5-24 13.9-24h55.4l27.7-48c6.2-10.7 21.6-10.7 27.7 0l27.7 48zm-9.2 16h-64.7l-32.3 56 32.3 56h64.7l32.3-56zm41.6 40 23-40h-46.2l23.1 40zm0 32-23.1 40H313l-23.1-40zm-50.8 56h-46.3l23.1 40 23.1-40zm-73.9-16-23.1-40-23.2 40h46.2zm-23.1-72 23.1-40H119l23.1 40z"
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
                  d="M384 416c0-17.7-14.3-32-32-32H32v64h320c17.7 0 32-14.3 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M448 96c0-53-43-96-96-96H32C14.3 0 0 14.3 0 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h320c53 0 96-43 96-96zM138.7 208l-13.9 24h27.7l-13.9-24zm13.9-24 27.7 48h55.4l27.7-48-27.7-48h-55.4zm-27.7 0-27.8-48c-6.2-10.7 1.5-24 13.9-24h55.4l27.7-48c6.2-10.7 21.6-10.7 27.7 0l27.7 48H305c12.3 0 20 13.3 13.9 24l-27.7 48 27.7 48c6.2 10.7-1.5 24-13.9 24h-55.4l-27.7 48c-6.2 10.7-21.6 10.7-27.7 0l-27.7-48H111c-12.3 0-20-13.3-13.9-24l27.7-48zm27.7-48h-27.7l13.9 24 13.9-24zm41.6-24h27.7L208 88l-13.9 24zm69.3 24 13.9 24 13.9-24h-27.9zm13.9 72-13.9 24h27.7l-13.9-24zM222 256h-27.9l13.9 24 13.9-24z"
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
