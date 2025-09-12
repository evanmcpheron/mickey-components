import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonSkiLiftIcon: React.FC<
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
                  d="M240 0c8.8 0 16 7.2 16 16v182.3l-32 8.5V16c0-8.8 7.2-16 16-16M64 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m36.4 138c-14.2-30.8 8.3-66 42.2-66 18.2 0 34.8 10.7 42.3 27.3l28.8 63.4 55.9-14.9c25.4-6.8 50.3 12.4 50.3 38.6v122.1L443.1 343c12.6-4.6 20.9-16.6 20.9-30v-1c0-13.3 10.7-24 24-24s24 10.7 24 24v1c0 33.5-20.9 63.4-52.3 75L128.3 510.5c-12.4 4.6-26.2-1.8-30.8-14.2s1.8-26.2 14.2-30.8L256 412.2V297.7l-66.7 17.8c-22.6 6-46.2-5.1-56-26.3zm-54.7-28.4 65 135.8c8.3 17.4 28 26.4 46.6 21.3l36.5-9.9c12.8-3.5 26 4.1 29.5 16.8s-4.1 26-16.8 29.5L170 393c-41 11.2-84.2-8.6-102.5-46.9L2.3 210.4c-5.7-12-.7-26.3 11.3-32s26.3-.7 32 11.3z"
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
                  d="M240 0c8.8 0 16 7.2 16 16v191.9l-32 7.5V16c0-8.8 7.2-16 16-16M112 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96M13.6 178.3c12-5.7 26.3-.7 32 11.3l65 135.8c8.3 17.4 28 26.4 46.6 21.3l36.5-9.9c12.8-3.5 26 4.1 29.5 16.8s-4.1 26-16.8 29.5l-36.5 9.9c-41 11.2-84.2-8.6-102.5-46.9L2.3 210.4c-5.7-12-.7-26.3 11.3-32zM488 288c13.3 0 24 10.7 24 24v1c0 33.5-20.9 63.4-52.3 75L128.3 510.5c-12.4 4.6-26.2-1.8-30.8-14.2s1.8-26.2 14.2-30.8L272 406.2V286.3l-94.2 22.2c-18 4.2-36.6-4.5-44.9-21l-42.6-85.2c-11.5-23.1 5.2-50.3 31.1-50.3 13.2 0 25.2 7.4 31.1 19.2l42 84 86.2-20.2c20.1-4.7 39.3 10.5 39.3 31.1v122.4L443.1 343c12.6-4.6 20.9-16.6 20.9-30v-1c0-13.3 10.7-24 24-24"
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
                  d="M256 0c8.8 0 16 7.2 16 16v194.8c-1.9.3-3.7.6-5.6 1.1l-26.4 6.6V16c0-8.8 7.2-16 16-16M104.8 177.7c7.9-4 17.5-.7 21.5 7.2l42.3 84.5L274.2 243c15.1-3.8 29.8 7.7 29.8 23.3v136.5l150.7-59.7c15.3-6 25.3-20.8 25.3-37.2V304c0-8.8 7.2-16 16-16s16 7.2 16 16v1.9c0 29.5-18 56.1-45.5 66.9l-348.6 138c-8.2 3.3-17.5-.8-20.8-9s.8-17.5 9-20.8L272 415.5v-139l-95.7 23.9c-14.6 3.6-29.7-3.3-36.4-16.7l-42.2-84.5c-4-7.9-.7-17.5 7.2-21.5zM9.1 161.6c8-3.8 17.5-.5 21.3 7.5L103.3 321c10 20.9 33.5 31.6 55.9 25.5l36.5-10c8.5-2.3 17.3 2.7 19.6 11.2s-2.7 17.3-11.2 19.6l-36.5 10c-37.3 10.2-76.5-7.7-93.2-42.6L1.6 182.9c-3.8-8-.5-17.5 7.5-21.3M128 88a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0"
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
                  d="M248 0c4.4 0 8 3.6 8 8v190.3l-16 4.3V8c0-4.4 3.6-8 8-8m24 297.7v134l32-12.2v-153c0-15.8-14.9-27.3-30.2-23.2l-55.9 14.9c-7.6 2-15.5-1.7-18.7-8.8L170.4 186c-4.9-11-15.8-18-27.7-18-22.3 0-37 23.1-27.7 43.3l32.9 71.2c6.5 14.1 22.3 21.5 37.3 17.5l66.7-17.8c4.8-1.3 9.9-.3 13.9 2.8s6.3 7.7 6.3 12.7zm48-31.2v147l145-55.1c18.6-7.1 31-24.9 31-44.9V296c0-4.4 3.6-8 8-8s8 3.6 8 8v17.4c0 26.6-16.4 50.4-41.3 59.8L106.8 511.5c-4.1 1.6-8.8-.5-10.3-4.6s.5-8.8 4.6-10.3L256 437.7v-140l-16 4.3-50.7 13.5c-22.6 6-46.2-5.1-55.9-26.3l-33-71.2c-14.2-30.8 8.3-66 42.2-66 18.2 0 34.8 10.7 42.3 27.3l28.8 63.4 55.9-14.9c25.4-6.8 50.3 12.4 50.3 38.6zM144 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96M15.4 164.8l71.7 167.4c11.9 27.7 43.5 41 71.6 30.2l46.5-17.9c4.1-1.6 8.8.5 10.3 4.6s-.5 8.8-4.6 10.3l-46.5 17.9c-36.1 13.9-76.8-3.3-92-38.8L.6 171.2c-1.7-4.1.1-8.8 4.2-10.5s8.8.1 10.5 4.2z"
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
                  d="M240 0c8.8 0 16 7.2 16 16v182.3l-32 8.5V16c0-8.8 7.2-16 16-16M13.6 178.3c12-5.7 26.3-.7 32 11.3l65 135.8c8.3 17.4 28 26.4 46.6 21.3l36.5-9.9c12.8-3.5 26 4.1 29.5 16.8s-4.1 26-16.8 29.5l-36.5 9.9c-41 11.2-84.2-8.6-102.5-46.9L2.3 210.4c-5.7-12-.7-26.3 11.3-32zM488 288c13.3 0 24 10.7 24 24v1c0 33.5-20.9 63.4-52.3 75L128.3 510.5c-12.4 4.6-26.2-1.8-30.8-14.2s1.8-26.2 14.2-30.8L443.1 343c12.6-4.6 20.9-16.6 20.9-30v-1c0-13.3 10.7-24 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m36.4 138c-14.2-30.8 8.3-66 42.2-66 18.2 0 34.8 10.7 42.3 27.3l28.8 63.4 55.9-14.9c25.4-6.8 50.3 12.4 50.3 38.6v122.1l-64 23.7V297.7l-66.7 17.8c-22.6 6-46.2-5.1-55.9-26.3z"
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
