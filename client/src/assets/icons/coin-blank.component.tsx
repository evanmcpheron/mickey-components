import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CoinBlankIcon: React.FC<
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
                  d="M0 208c0 79.5 114.6 144 256 144s256-64.5 256-144S397.4 64 256 64 0 128.5 0 208m0 82.1V320c0 27.9 17.8 53.6 48 74.6V331c-18.3-11.5-34.8-25.2-48-40.9M80 413c27.1 12.8 59.8 22.7 96 28.7v-64.3c-35.1-6-67.6-15.9-96-29zm128 32.8c15.5 1.5 31.6 2.2 48 2.2s32.5-.8 48-2.2v-64.1q-23.55 2.4-48 2.4c-24.45 0-32.3-.8-48-2.4zm128-4.1c36.2-6 68.9-15.9 96-28.7v-64.7c-28.4 13.2-60.9 23-96 29v64.3zm128-47c30.2-21 48-46.8 48-74.6v-29.9c-13.2 15.6-29.7 29.3-48 40.9v63.7z"
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
                  d="M256 304c64 0 119.6-14.7 157.5-36 39.4-22.2 50.5-45.3 50.5-60s-11.1-37.8-50.5-60c-37.9-21.3-93.5-36-157.5-36s-119.6 14.7-157.5 36C59.1 170.2 48 193.3 48 208s11.1 37.8 50.5 60c37.9 21.3 93.5 36 157.5 36M0 208C0 128.5 114.6 64 256 64s256 64.5 256 144v112c0 70.7-114.6 128-256 128S0 390.7 0 320V208m256 144c-13.6 0-27-.6-40-1.7v48a471.7 471.7 0 0 0 80 0v-48c-13 1.1-26.4 1.7-40 1.7m-136-22v47.7c18.7 7 40.3 12.7 64 16.6v-48.1c-22.8-3.8-44.3-9.2-64-16.2m-32-13.3C73 309.3 59.6 301 48 292v28c0 6.8 6.2 24.2 40 43.1v-46.5zm240 29.6v48.1c23.7-3.9 45.3-9.6 64-16.6v-47.7c-19.7 7-41.2 12.5-64 16.2M464 320v-28c-11.6 9.1-25 17.4-40 24.7v46.5c33.8-18.9 40-36.3 40-43.1z"
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
                  d="M90.7 281.9C49 258.5 32 231.1 32 208s17-50.5 58.7-73.9C131.4 111.2 189.8 96 256 96s124.6 15.2 165.3 38.1C463 157.5 480 184.9 480 208s-17 50.5-58.7 73.9C380.6 304.8 322.2 320 256 320s-124.6-15.2-165.3-38.1M240 351.7v64c-22.5-.7-44-3-64-6.6v-64.3c20.3 3.8 41.8 6.1 64 6.9M96 320.4q22.2 10.05 48 17.1v64.6c-17.7-4.7-33.8-10.5-48-17zm-32-17.2v63.6c-23.5-16.9-32-34-32-46.8v-42.2c9 9.2 19.8 17.7 32 25.5zm208 112.5v-64c22.2-.8 43.7-3.1 64-6.9v64.3c-20 3.6-41.5 5.8-64 6.6m176-112.5c12.2-7.8 23-16.3 32-25.5v42.2c0 12.9-8.5 29.9-32 46.8v-63.6zm-32 17.2v64.7c-14.2 6.5-30.3 12.3-48 17v-64.6c17.2-4.7 33.2-10.5 48-17.1M256 64C114.6 64 0 128.5 0 208v112c0 70.7 114.6 128 256 128s256-57.3 256-128V208c0-79.5-114.6-144-256-144"
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
                  d="M82.8 295.9C38.8 271.1 16 239.4 16 208s22.8-63.1 66.8-87.9C126.3 95.6 187.5 80 256 80s129.7 15.6 173.2 40.1c44 24.8 66.8 56.5 66.8 87.9s-22.8 63.1-66.8 87.9C385.7 320.4 324.5 336 256 336s-129.7-15.6-173.2-40.1M256 64C114.6 64 0 128.5 0 208v112c0 70.7 114.6 128 256 128s256-57.3 256-128V208c0-79.5-114.6-144-256-144m-8 287.9v80c-28.2-.4-55.2-3.2-80-8v-80.7c25.1 5.2 52 8.2 80 8.7M88 316.7c19.1 9.3 40.6 17.1 64 23v81c-23.8-5.5-45.4-12.8-64-21.6zm-16-8.5v82.7C34.2 369.5 16 344 16 320v-61.8C28.4 277 47.7 294 72 308.1zm192 123.7v-80c28-.5 54.9-3.5 80-8.7v80.7c-24.8 4.7-51.8 7.5-80 8m96-11.3v-81c23.4-5.9 44.9-13.6 64-23V399c-18.6 8.7-40.2 16-64 21.6m80-29.8v-82.7c24.3-14.1 43.6-31.1 56-49.9V320c0 24-18.2 49.5-56 70.8"
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
                  d="M256 352C114.6 352 0 287.5 0 208S114.6 64 256 64s256 64.5 256 144-114.6 144-256 144"
                />
                <path
                  className="aps-icon-foreground"
                  d="M48 331c-18.3-11.5-34.8-25.2-48-40.9V320c0 27.9 17.8 53.6 48 74.6zm32 17.3V413c27.1 12.8 59.8 22.7 96 28.7v-64.3c-35.1-6-67.6-15.9-96-29zM256 448c-16.4 0-32.5-.8-48-2.2v-64.1q23.55 2.4 48 2.4c24.45 0 32.3-.8 48-2.4v64.1c-15.5 1.5-31.6 2.2-48 2.2m80-70.7v64.3c36.2-6 68.9-15.9 96-28.7v-64.7c-28.4 13.1-60.9 23-96 29zM512 320c0 27.9-17.8 53.6-48 74.6v-63.7c18.3-11.5 34.8-25.2 48-40.9v29.9z"
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
