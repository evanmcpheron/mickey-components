import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ForwardFastIcon: React.FC<
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
                  d="M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4L224 297.7V416c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4L448 297.7V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v118.3L276.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S224 83.6 224 96v118.3L52.5 71.4C43 63.5 29.7 61.7 18.4 67S0 83.6 0 96v320c0 12.4 7.2 23.7 18.4 29"
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
                  d="M496 424c0 13.3-10.7 24-24 24s-24-10.7-24-24V287.9L273.4 440.6c-5.4 4.8-12.4 7.4-19.6 7.4-16.5 0-29.8-13.3-29.8-29.8V287.9L49.4 440.6C44 445.4 37 448 29.8 448 13.3 448 0 434.7 0 418.2V93.8C0 77.3 13.3 64 29.8 64c7.2 0 14.2 2.6 19.6 7.4L224 224.1V93.8c0-16.5 13.3-29.8 29.8-29.8 7.2 0 14.2 2.6 19.6 7.4L448 224.1V88c0-13.3 10.7-24 24-24s24 10.7 24 24zM48 133.9v244.2L187.6 256zm224 244.2L411.6 256 272 133.9z"
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
                  d="M496 64c-8.8 0-16 7.2-16 16v135.8L301.4 70.2c-5-4-11.2-6.2-17.6-6.2-15.4 0-27.8 12.4-27.8 27.8v150.1L45.4 70.2c-5-4-11.2-6.2-17.6-6.2C12.4 64 0 76.4 0 91.8v328.4C0 435.6 12.4 448 27.8 448c6.4 0 12.6-2.2 17.6-6.2L256 270.1v150.1c0 15.4 12.4 27.8 27.8 27.8 6.4 0 12.6-2.2 17.6-6.2L480 296.2V432c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16m-17.3 192L288 411.4V100.6zM32 100.6 222.7 256 32 411.4z"
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
                  d="M504 64c-4.4 0-8 3.6-8 8v162.4L304.2 71c-5.3-4.5-12-7-19-7-16.1 0-29.2 13.1-29.2 29.2V248L48.2 71c-5.3-4.5-12-7-19-7C13.1 64 0 77.1 0 93.2v325.6C0 434.9 13.1 448 29.2 448c6.9 0 13.7-2.5 19-7L256 264v154.8c0 16.1 13.1 29.2 29.2 29.2 6.9 0 13.7-2.5 19-7L496 277.6V440c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8m-8 192c0 .4-.2.8-.5 1L293.8 428.8c-2.4 2-5.4 3.2-8.6 3.2-7.3 0-13.2-5.9-13.2-13.2V93.2c0-7.3 5.9-13.2 13.2-13.2 3.1 0 6.2 1.1 8.6 3.2L495.5 255c.3.3.5.6.5 1m-256 .6L37.8 428.8c-2.4 2-5.4 3.2-8.6 3.2-7.3 0-13.2-5.9-13.2-13.2V93.2C16 85.9 21.9 80 29.2 80c3.1 0 6.2 1.1 8.6 3.2L240 255.4z"
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
                  d="M480 448c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v320c0 17.7 14.3 32 32 32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4L224 214.3V96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4L448 214.3v83.3l-171.5 143c-9.5 7.9-22.8 9.7-34.1 4.4S224 428.4 224 416V297.7z"
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
