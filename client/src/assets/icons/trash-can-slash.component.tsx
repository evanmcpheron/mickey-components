import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TrashCanSlashIcon: React.FC<
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512 376V128H195.6l-40.8-32H512c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-7.2-14.3C403.4 6.8 392.3 0 380.2 0H259.8c-12.1 0-23.2 6.8-28.6 17.7L224 32h-96c-13.4 0-24.8 8.2-29.6 19.8zM304 213v-5c0-8.8 7.2-16 16-16s16 7.2 16 16v30zm96 75.2V208c0-8.8 7.2-16 16-16s16 7.2 16 16v105.3zm97.8 200L431.5 436c-1.8 6.9-8 12-15.5 12-8.8 0-16-7.2-16-16v-20.8l-64-50.4V432c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96.5l-64-50.4V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V259.9l-80-63V448c0 35.3 28.7 64 64 64h256c20.1 0 38.1-9.3 49.8-23.8"
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
                  d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512 376V128h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-69.8l-36.7-55.1C403.1 9.4 385.6 0 366.9 0h-93.8c-18.7 0-36.2 9.4-46.6 24.9L189.8 80h-55.4zM195.6 128H464v210.4l-48-37.6V192c0-8.8-7.2-16-16-16s-16 7.2-16 16v83.7L336 238v-46c0-8.8-7.2-16-16-16s-16 7.2-16 16v21zm259.3 326.4c-5.8 5.9-13.9 9.6-22.9 9.6H208c-17.7 0-32-14.3-32-32V234.7l-48-37.8V432c0 44.2 35.8 80 80 80h224c24.3 0 46-10.8 60.7-27.8zM336 360.7l-32-25.2V400c0 8.8 7.2 16 16 16s16-7.2 16-16zm-112-88.2V400c0 8.8 7.2 16 16 16s16-7.2 16-16V297.7zM273.1 48h93.7c2.7 0 5.2 1.3 6.7 3.6l19 28.4h-145l19-28.4c1.5-2.2 4-3.6 6.7-3.6z"
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
                  d="M512 96h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-95.1L407 22.6A47.98 47.98 0 0 0 366.3 0h-92.6c-16.5 0-31.9 8.5-40.7 22.6L207.1 64h-27l40.5 32H480v204.8l32 25.2zm-39.6 361.9C463.9 471.2 449 480 432 480H208c-26.5 0-48-21.5-48-48V211.2L128 186v246c0 44.2 35.8 80 80 80h224c27.2 0 51.2-13.5 65.6-34.2zM208 400c0 8.8 7.2 16 16 16s16-7.2 16-16V274.4l-32-25.3zm96 0c0 8.8 7.2 16 16 16s16-7.2 16-16v-49.8l-32-25.3zm96-162.4 32 25.3V176c0-8.8-7.2-16-16-16s-16 7.2-16 16zM260.2 39.5c2.9-4.7 8.1-7.5 13.6-7.5h92.5c5.5 0 10.6 2.8 13.6 7.5L395.1 64H244.9zM25.9 3.4C19-2 8.9-.8 3.4 6.1s-4.2 17 2.7 22.5l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5z"
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
                  d="M482.7 476.2A55.79 55.79 0 0 1 440 496H200c-30.9 0-56-25.1-56-56V208.8l-16-12.6V440c0 39.8 32.2 72 72 72h240c22.2 0 42.1-10.1 55.3-25.9zM211.6 64H193l20.3 16H536c4.4 0 8-3.6 8-8s-3.6-8-8-8H428.4l-28.2-45.2C392.9 7.1 380.1 0 366.3 0h-92.6c-13.8 0-26.6 7.1-33.9 18.8zM232 278.3l-16-12.6V416c0 4.4 3.6 8 8 8s8-3.6 8-8zM328 416v-62l-16-12.6V416c0 4.4 3.6 8 8 8s8-3.6 8-8m80-256v73.7l16 12.6V160c0-4.4-3.6-8-8-8s-8 3.6-8 8m88-40v183.2l16 12.6V120c0-4.4-3.6-8-8-8s-8 3.6-8 8M253.4 27.3c4.4-7 12.1-11.3 20.4-11.3h92.5c8.3 0 16 4.3 20.4 11.3L409.6 64H230.4zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2z"
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
                  d="m431.5 436 66.3 52.2C486.1 502.7 468.1 512 448 512H192c-35.3 0-64-28.7-64-64V196.8l80 63V432c0 8.8 7.2 16 16 16s16-7.2 16-16V285.1l64 50.4V432c0 8.8 7.2 16 16 16s16-7.2 16-16v-71.3l64 50.4V432c0 8.8 7.2 16 16 16 7.5 0 13.7-5.1 15.5-12M336 208c0-8.8-7.2-16-16-16s-16 7.2-16 16v5l-108.4-85H512v248l-80-62.7V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v80.2L336 238zM512 96H154.8L98.4 51.8C103.2 40.2 114.6 32 128 32h96l7.2-14.3C236.6 6.8 247.7 0 259.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L416 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32"
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
