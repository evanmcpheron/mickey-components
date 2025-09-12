import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AlbumCircleUserIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v96.7c-5.3-.5-10.6-.7-16-.7-20.1 0-39.5 3.4-57.5 9.6C352.3 140 293.3 96 224 96c-88.4 0-160 71.6-160 160s71.6 160 160 160c12.9 0 25.4-1.5 37.4-4.4 6.5 25.5 18.5 48.7 34.8 68.4H64c-35.3 0-64-28.7-64-64zm224 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64m64 144a144 144 0 1 1 288 0 144 144 0 1 1-288 0m221.7 80.7c-6.2-19-24-32.7-45.1-32.7h-65.2c-21 0-38.9 13.7-45.1 32.7 20.2 19.4 47.5 31.3 77.7 31.3s57.5-11.9 77.7-31.3M480 336a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 80h320c8.8 0 16 7.2 16 16v98.9c10.4-1.9 21.1-2.9 32-2.9 5.4 0 10.7.2 16 .7V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h232.2c-11.8-14.3-21.4-30.5-28.2-48H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16m160 32c-79.5 0-144 64.5-144 144s64.5 144 144 144c11.8 0 23.2-1.4 34.2-4.1-1.4-9.1-2.2-18.4-2.2-27.9 0-71.4 42.5-132.9 103.6-160.5C339.7 151.8 286.5 112 224 112m-32 144a32 32 0 1 1 64 0 32 32 0 1 1-64 0m384 112a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-66.3 80.7C489.5 468.1 462.2 480 432 480s-57.5-11.9-77.7-31.3c6.2-19 24-32.7 45.1-32.7h65.2c21 0 38.9 13.7 45.1 32.7M384 336a48 48 0 1 1 96 0 48 48 0 1 1-96 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 64H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h211.2c5.9 11.4 12.9 22.2 21 32H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v96.7c-5.3-.5-10.6-.7-16-.7s-10.7.2-16 .7V96c0-17.7-14.3-32-32-32M224 96c69.3 0 128.3 44 150.5 105.6-10.2 3.5-20 8-29.3 13.2C328.1 164.3 280.3 128 224 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c11.2 0 22-1.4 32.4-4.1.7 10.9 2.4 21.5 5 31.7-12 2.9-24.5 4.4-37.4 4.4-88.4 0-160-71.6-160-160S135.6 96 224 96m0 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48m268 230.6c-7.8-9.1-19.4-14.6-31.8-14.6h-56.4c-12.4 0-23.9 5.5-31.8 14.6 17.3 11 37.9 17.4 60 17.4s42.7-6.4 60-17.4m24.3-20.8c17.2-19.7 27.7-45.6 27.7-73.8 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 28.2 10.5 54.1 27.7 73.8 13.8-16.1 34.2-25.8 56.1-25.8h56.4c21.8 0 42.2 9.6 56.1 25.8M288 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M384 48H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h220.5c3.6 5.6 7.6 10.9 11.8 16H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v96.7c-5.3-.5-10.6-.7-16-.7V96c0-26.5-21.5-48-48-48M224 96c69.3 0 128.3 44 150.5 105.6-5.1 1.8-10 3.7-14.9 5.9C339.7 151.8 286.5 112 224 112c-79.5 0-144 64.5-144 144s64.5 144 144 144c11.8 0 23.2-1.4 34.2-4.1.8 5.3 1.9 10.5 3.2 15.7-12 2.9-24.5 4.4-37.4 4.4-88.4 0-160-71.6-160-160S135.6 96 224 96m16 160a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m317.9 213.6-3.3-6.6c-9.5-19-28.9-31-50.1-31h-48.9c-21.2 0-40.6 12-50.1 31l-3.3 6.6c21.5 16.6 48.5 26.4 77.8 26.4s56.3-9.8 77.9-26.4m12.4-10.9c23.3-23.2 37.7-55.2 37.7-90.7 0-70.7-57.3-128-128-128s-128 57.3-128 128c0 35.5 14.4 67.5 37.7 90.7l1.5-2.9a71.96 71.96 0 0 1 64.4-39.8h48.9c27.3 0 52.2 15.4 64.4 39.8l1.5 2.9zM288 368a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h232.2c-16.2-19.7-28.3-42.9-34.8-68.4-12 2.9-24.5 4.4-37.4 4.4-88.4 0-160-71.6-160-160S135.6 96 224 96c69.3 0 128.3 44 150.5 105.6 18-6.2 37.4-9.6 57.5-9.6 5.4 0 10.7.2 16 .7V96c0-35.3-28.7-64-64-64zm192 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-32c-30.2 0-57.5-11.9-77.7-31.3 6.2-19 24-32.7 45.1-32.7h65.2c21 0 38.9 13.7 45.1 32.7-20.2 19.4-47.5 31.3-77.7 31.3m0-192a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
