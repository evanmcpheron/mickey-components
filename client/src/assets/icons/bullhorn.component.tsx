import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BullhornIcon: React.FC<
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
                  d="M480 32c0-12.9-7.8-24.6-19.8-29.6S434.5.2 425.3 9.3L381.7 53c-48 48-113.1 75-181 75H64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64v128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352h8.7c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4zm-64 76.7v262.6C357.2 317.8 280.5 288 200.7 288H192v-96h8.7c79.8 0 156.5-29.8 215.3-83.3"
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
                  d="m432 73.9-10.7 10.7C364.5 141.4 288.1 174 208 175.9v128.2c80.1 1.9 156.5 34.5 213.3 91.3l10.7 10.7zM160 128h40.7c70 0 137.2-27.8 186.7-77.3l38-38C445.5-7.5 480 6.8 480 35.3v144.3c18.6 8.8 32 32.5 32 60.4s-13.4 51.6-32 60.4v144.3c0 28.5-34.5 42.8-54.6 22.6l-38-38c-47.8-47.8-112-75.4-179.4-77.2V456c0 30.9-25.1 56-56 56h-32c-30.9 0-56-25.1-56-56V352c-35.3 0-64-28.7-64-64v-96c0-35.3 28.7-64 64-64zm-48 224v104c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V352zM64 176c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96V176z"
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
                  d="M416 44.2c0-7.2-8.8-10.8-13.8-5.5l-23.8 25.2c-41.9 44.1-95.7 74.5-154.4 87.6v177c58.7 13.1 112.5 43.4 154.4 87.6l23.8 25.1c5 5.3 13.8 1.7 13.8-5.5zM192 323.1V156.9c-5.8.7-11.6 1.1-17.5 1.5l-29.6 1.6H64c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h80.8l29.7 1.6c5.8.3 11.7.8 17.5 1.5M379 16.7c24.9-26.3 69-8.7 69 27.5v391.6c0 36.2-44.2 53.8-69 27.5l-23.8-25.1c-43.3-45.7-101-74.9-163.1-82.8V456c0 30.9-25.1 56-56 56H120c-30.9 0-56-25.1-56-56V352c-35.3 0-64-28.7-64-64v-96c0-35.3 28.7-64 64-64h79.6l29.2-1.6c69.4-3.9 134.6-34.1 182.4-84.5zM96 352v104c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V352.9l-16.4-.9zm400-160c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16"
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
                  d="M464 32c0-28.1-33.7-42.6-54.1-23.2l-44 41.9C326.4 88.4 277 113.4 224 123.3v16.3c57.1-10 110.4-36.7 152.9-77.2l44-41.9c10.2-9.7 27-2.5 27 11.6V448c0 14.1-16.8 21.3-27 11.6l-44-41.9c-42.5-40.5-95.8-67.2-152.9-77.2v16.3c53 9.9 102.4 34.9 141.9 72.5l44 41.9c20.4 19.4 54.1 5 54.1-23.2V313.3c28.3-12.3 48-40.5 48-73.3s-19.7-61-48-73.3zM192 416V127.4c-6.4.4-12.8.7-19.2.7H64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64v120c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40zm272-120.6V184.6c19.1 11.1 32 31.7 32 55.4s-12.9 44.4-32 55.4M176 352v120c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24V352h96m-3.2-16H64c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h112v192z"
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
                  d="M480 32c0-12.9-7.8-24.6-19.8-29.6S434.5.2 425.3 9.3L381.7 53c-48 48-113.1 75-181 75H192v224h8.7c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 192c0-35.3 28.7-64 64-64h128v352c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352c-35.3 0-64-28.7-64-64zm512 48c0 27.9-13.4 51.6-32 60.4V179.6c18.6 8.8 32 32.5 32 60.4"
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
