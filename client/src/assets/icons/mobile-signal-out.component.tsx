import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MobileSignalOutIcon: React.FC<
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
                  d="M64 64h160V0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V288h-64v160H64zm80 320c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zM280 0c-13.3 0-24 10.7-24 24s10.7 24 24 24c101.6 0 184 82.4 184 184 0 13.3 10.7 24 24 24s24-10.7 24-24C512 103.9 408.1 0 280 0m8 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-32-136c0 13.3 10.7 24 24 24 48.6 0 88 39.4 88 88 0 13.3 10.7 24 24 24s24-10.7 24-24c0-75.1-60.9-136-136-136-13.3 0-24 10.7-24 24"
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
                  d="M64 48h160V0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V288h-48v160c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m80 352c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zM280 0c-13.3 0-24 10.7-24 24s10.7 24 24 24c101.6 0 184 82.4 184 184 0 13.3 10.7 24 24 24s24-10.7 24-24C512 103.9 408.1 0 280 0m8 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-32-136c0 13.3 10.7 24 24 24 48.6 0 88 39.4 88 88 0 13.3 10.7 24 24 24s24-10.7 24-24c0-75.1-60.9-136-136-136-13.3 0-24 10.7-24 24"
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
                  d="M96 32h128V0H96C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V288h-32v160c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m64 368c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zM272 0c-8.8 0-16 7.2-16 16s7.2 16 16 16c114.9 0 208 93.1 208 208 0 8.8 7.2 16 16 16s16-7.2 16-16C512 107.5 404.5 0 272 0m16 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-32-144c0 8.8 7.2 16 16 16 61.9 0 112 50.1 112 112 0 8.8 7.2 16 16 16s16-7.2 16-16c0-79.5-64.5-144-144-144-8.8 0-16 7.2-16 16"
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
                  d="M96 16h128V0H96C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V288h-16v160c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48m48 416c-4.4 0-8 3.6-8 8s3.6 8 8 8h96c4.4 0 8-3.6 8-8s-3.6-8-8-8zM264 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c128.1 0 232 103.9 232 232 0 4.4 3.6 8 8 8s8-3.6 8-8C512 111 401 0 264 0m8 224a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-64-120c0 4.4 3.6 8 8 8 75.1 0 136 60.9 136 136 0 4.4 3.6 8 8 8s8-3.6 8-8c0-83.9-68.1-152-152-152-4.4 0-8 3.6-8 8"
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
                  d="M224 64H64v384h224V288h64v160c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h160zm-96 336c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16"
                />
                <path
                  className="aps-icon-foreground"
                  d="M256 24c0-13.3 10.7-24 24-24 128.1 0 232 103.9 232 232 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184-13.3 0-24-10.7-24-24m0 200a32 32 0 1 1 64 0 32 32 0 1 1-64 0m24-128c75.1 0 136 60.9 136 136 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88-13.3 0-24-10.7-24-24s10.7-24 24-24"
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
