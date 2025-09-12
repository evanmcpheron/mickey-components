import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AlignSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L481.4 352H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H399.7L318 224h194c17.7 0 32-14.3 32-32s-14.3-32-32-32H236.4l-81.6-64H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-13.4 0-24.8 8.2-29.6 19.8zM487.4 480l-81.2-64H128c-17.7 0-32 14.3-32 32s14.3 32 32 32zM324.9 352l-81.2-64H128c-17.7 0-32 14.3-32 32s14.3 32 32 32zM162.5 224l-61.8-48.7c-3 4.9-4.7 10.6-4.7 16.7 0 17.7 14.3 32 32 32z"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L471.2 344H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H409.9l-102-80H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H246.6l-102-80H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-9 0-16.9 5-21 12.3zM477.2 472l-60.9-48H120c-13.3 0-24 10.7-24 24s10.7 24 24 24zM314.8 344l-60.9-48H120c-13.3 0-24 10.7-24 24s10.7 24 24 24zM152.3 216l-50.4-39.7C98.2 180.5 96 186 96 192c0 13.3 10.7 24 24 24z"
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
                  d="M25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5zM528 336c8.8 0 16-7.2 16-16s-7.2-16-16-16h-43.9l40.5 32zm0-128c8.8 0 16-7.2 16-16s-7.2-16-16-16H322l40.5 32zm-372.1 0-40.5-32H112c-8.8 0-16 7.2-16 16s7.2 16 16 16zM528 48H159.8l40.5 32H528c8.8 0 16-7.2 16-16s-7.2-16-16-16M318 336l-40.5-32H112c-8.8 0-16 7.2-16 16s7.2 16 16 16zm121.6 96H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h368.2l-40.5-32z"
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
                  d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2zM274.7 312H104c-4.4 0-8 3.6-8 8s3.6 8 8 8h191zm252.7 16h8.6c4.4 0 8-3.6 8-8s-3.6-8-8-8h-28.9zm8.6-128c4.4 0 8-3.6 8-8s-3.6-8-8-8H345l20.3 16zm-403.1 0-20.3-16H104c-4.4 0-8 3.6-8 8s3.6 8 8 8zM536 56H182.9l20.3 16H536c4.4 0 8-3.6 8-8s-3.6-8-8-8m-78.9 400-20.3-16H104c-4.4 0-8 3.6-8 8s3.6 8 8 8z"
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
                  d="m406.2 416 81.2 64H128c-17.7 0-32-14.3-32-32s14.3-32 32-32zM243.7 288l81.2 64H128c-17.7 0-32-14.3-32-32s14.3-32 32-32zm-143-112.7 61.8 48.7H128c-17.7 0-32-14.3-32-32 0-6.1 1.7-11.8 4.7-16.7m299 112.7H512c17.7 0 32 14.3 32 32s-14.3 32-32 32h-30.6zM236.4 160H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H318.1zM512 96H154.8L98.4 51.8C103.2 40.2 114.6 32 128 32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1l-592-464C-1.2 34.7-3.1 19.6 5.1 9.2"
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
