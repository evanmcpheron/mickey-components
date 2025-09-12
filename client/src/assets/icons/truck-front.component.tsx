import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckFrontIcon: React.FC<
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
                  d="M0 80C0 35.8 35.8 0 80 0h352c44.2 0 80 35.8 80 80v288c0 26.2-12.6 49.4-32 64v48c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-48c-19.4-14.6-32-37.8-32-64zm129.9 72.2L112 224h288l-17.9-71.8C378.5 138 365.7 128 351 128H161c-14.7 0-27.5 10-31 24.2zM128 320a32 32 0 1 0-64 0 32 32 0 1 0 64 0m288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M80 48c-17.7 0-32 14.3-32 32v152c4.2-3.2 8.7-6.1 13.3-8.7l40-85.8c11.9-25.3 37.3-41.5 65.3-41.5h178.8c28 0 53.4 16.2 65.2 41.6l40 85.8c4.6 2.6 9.1 5.5 13.3 8.7V80c0-17.7-14.3-32-32-32zM48 328v40c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32v-40c0-39.8-32.2-72-72-72H120c-39.8 0-72 32.2-72 72m-48 0V80C0 35.8 35.8 0 80 0h352c44.2 0 80 35.8 80 80v288c0 26.2-12.6 49.4-32 64v56c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40H80v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56c-19.4-14.6-32-37.8-32-64zm121.4-120h269.2l-23.4-50.1c-3.9-8.4-12.4-13.9-21.7-13.9H166.6c-9.3 0-17.8 5.4-21.7 13.9zM96 320a32 32 0 1 1 64 0 32 32 0 1 1-64 0m288-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M80 32c-26.5 0-48 21.5-48 48v168.4c10.8-9.7 23.9-17 38.3-21l31.3-88.8c9-25.6 33.2-42.7 60.4-42.7h188c27.1 0 51.3 17.1 60.4 42.7l31.3 88.8c14.4 4 27.4 11.3 38.3 21V80c0-26.5-21.5-48-48-48zM32 320v48c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-48c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64m-32 0V80C0 35.8 35.8 0 80 0h352c44.2 0 80 35.8 80 80v288c0 26.2-12.6 49.4-32 64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-49.6c-5.2 1-10.5 1.6-16 1.6H80c-5.5 0-10.8-.6-16-1.6V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c-19.4-14.6-32-37.8-32-64zm105.4-96h301.2l-26.3-74.7c-4.6-12.7-16.7-21.3-30.3-21.3H162c-13.6 0-25.7 8.6-30.2 21.3zM80 328a24 24 0 1 1 48 0 24 24 0 1 1-48 0m328-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M96 16c-35.3 0-64 28.7-64 64v181.4c10.2-14.4 24.5-25.6 41.3-31.9l-.8-.3 36.3-96.9C117 110.5 137.9 96 161.3 96h189.4c23.3 0 44.2 14.5 52.4 36.3l36.3 96.9-.8.3c16.8 6.2 31.2 17.5 41.3 31.9V80c0-35.3-28.7-64-64-64zM32 312v72c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-72c0-39.8-32.2-72-72-72H104c-39.8 0-72 32.2-72 72m-16 0V80C16 35.8 51.8 0 96 0h320c44.2 0 80 35.8 80 80v304c0 23.7-12.9 44.4-32 55.4V480c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H144v32c0 17.7-14.3 32-32 32H80c-17.7 0-32-14.3-32-32v-40.6c-19.1-11-32-31.7-32-55.4zm64 136H64v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32zm304 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32h-64M91.2 224.9c4.2-.6 8.5-.9 12.8-.9h304c4.3 0 8.6.3 12.8.9l-32.6-87c-5.9-15.6-20.8-26-37.5-26H161.3c-16.7 0-31.6 10.3-37.5 26zM112 320a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m240 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"
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
                  d="m112 224 17.9-71.8c3.6-14.2 16.4-24.2 31-24.2H351c14.7 0 27.5 10 31 24.2l18 71.8zM32 480v-48c13.4 10 30 16 48 16h48v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32m352 0v-32h48c18 0 34.6-6 48-16v48c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M80 0C35.8 0 0 35.8 0 80v288c0 44.2 35.8 80 80 80h352c44.2 0 80-35.8 80-80V80c0-44.2-35.8-80-80-80zm32 224 17.9-71.8c3.6-14.2 16.4-24.2 31-24.2H351c14.7 0 27.5 10 31 24.2l18 71.8zm-48 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0m352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
