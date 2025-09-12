import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CrowIcon: React.FC<
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
                  d="M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9l74.6-57.4h133.1l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384h44.1l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192v-72l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32h-50.1C507.7 12.5 483.3 0 456 0m0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="m39.2 442.6 72-58.6h148l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384h44.1l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192v-72l96-24c-9.4-37.6-43.2-64-82-64h-43c-18.9-19.7-45.5-32-75-32-57.4 0-104 46.6-104 104v35.1L94.1 336l-13.2 10.8-72 58.6c-10.3 8.4-11.9 23.5-3.5 33.8s23.5 11.8 33.8 3.5zm156.2-127.2 137.7-112c-10.9 51.4-51 93.1-104 104.7l-33.7 7.4zM384 161.9V104c0-30.9 25.1-56 56-56s56 25.1 56 56v88c0 79.5-64.5 144-144 144h-62.5c57.1-31.8 94.5-92.7 94.5-160.8zm80-57.9a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M25.7 412.7 63.2 384h209.4l48.6 118.1c3.4 8.2 12.7 12.1 20.9 8.7s12.1-12.7 8.7-20.9L307.2 384H320c16 0 31.4-1.9 46.3-5.6l50.9 123.7c3.4 8.2 12.7 12.1 20.9 8.7s12.1-12.7 8.7-20.9l-50.2-121.8C464.5 338.5 512 270.8 512 192v-48l128-32c0-44.2-35.8-80-80-80h-72.4C470 12.4 444.4 0 416 0c-53 0-96 43-96 96v51L52.4 352l-8.6 6.6-37.5 28.7c-7 5.4-8.3 15.4-3 22.4s15.4 8.3 22.4 3M506.5 64H560c18 0 33.7 9.9 41.9 24.5L512 111V96c0-11.2-1.9-22-5.5-32M132.7 330.8l186.7-143C313.6 250 268 302.1 205.9 315.2l-73.2 15.5zM320 352H186.8l25.7-5.5c81.3-17.2 139.5-89 139.5-172.2V96c0-35.3 28.7-64 64-64s64 28.7 64 64v96c0 88.4-71.6 160-160 160M440 96a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M352 88c0-48.6 39.4-88 88-88 34.2 0 63.8 19.5 78.4 48H568c39.8 0 72 32.2 72 72l-112 28v44c0 85.3-55.6 157.6-132.6 182.6l52 126.3c1.7 4.1-.3 8.8-4.4 10.4s-8.8-.3-10.4-4.4L379.9 379c-14.1 3.3-28.8 5-43.9 5h-32.8l48.2 117c1.7 4.1-.3 8.8-4.4 10.4s-8.8-.3-10.4-4.3L285.9 384H137L10.1 415.7c-3.1.9-6.6-.2-8.6-3-2.6-3.6-1.8-8.6 1.8-11.2L352 147.9zm176 43.5 94.7-23.7C617.1 82.8 594.8 64 568 64h-43.3c2.2 7.6 3.3 15.7 3.3 24zM336 368c97.2 0 176-78.8 176-176V88c0-39.8-32.2-72-72-72s-72 32.2-72 72v88.1c0 88.3-60.1 165.3-145.8 186.7L201 368zM46 390.3l172.4-43.1C296.9 327.5 352 257 352 176v-8.3zM440 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M544 120V88c0-21.3-7.5-40.8-20.1-56H574c29.4 0 55 20 62.1 48.5L640 96zM355.2 384c16.9-.3 33.4-2.8 49-7.1l42 102c5 12.3-.8 26.3-13.1 31.3s-26.3-.8-31.3-13.1zm-96 0h51.9l39.1 94.9c5 12.3-.8 26.3-13.1 31.3s-26.3-.8-31.3-13.1z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9l74.6-57.4H352c106 0 192-86 192-192V88c0-48.6-39.4-88-88-88m0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
