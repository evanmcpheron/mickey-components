import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TruckLadderIcon: React.FC<
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
                  d="M0 24c0 13.3 10.7 24 24 24h8v96h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V48h8c13.3 0 24-10.7 24-24S341.3 0 328 0H24C10.7 0 0 10.7 0 24m272 120h-32V48h32zM160 48h32v96h-32zm-48 96H80V48h32zm304-48c-17.7 0-32 14.3-32 32v96H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h16c26.5 0 48-21.5 48-48V237.3c0-17-6.7-33.3-18.7-45.3L544 114.7c-12-12-28.3-18.7-45.3-18.7zm160 160H448v-96h50.7l77.3 77.3zM112 416a48 48 0 1 1 96 0 48 48 0 1 1-96 0m368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M0 24c0 13.3 10.7 24 24 24h8v96h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V48h8c13.3 0 24-10.7 24-24S341.3 0 328 0H24C10.7 0 0 10.7 0 24m272 120h-32V48h32zM160 48h32v96h-32zm-48 96H80V48h32zm296-48c-13.3 0-24 10.7-24 24v104H56c-30.9 0-56 25.1-56 56v80c0 30.9 25.1 56 56 56h8c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h8c30.9 0 56-25.1 56-56V251.2c0-12.7-4.3-25.1-12.3-35L548.3 117c-10.6-13.3-26.7-21-43.7-21zM76.8 368H56c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8h536v88c0 4.4-3.6 8-8 8h-20.8c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48H243.2c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48M432 224v-80h72.6c2.4 0 4.7 1.1 6.2 3l61.6 77zM112 416a48 48 0 1 1 96 0 48 48 0 1 1-96 0m368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"
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
                  d="M16 32h320c8.8 0 16 7.2 16 16s-7.2 16-16 16v96c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16V64C7.2 64 0 56.8 0 48s7.2-16 16-16m288 32h-64v96h64zm-96 0h-64v96h64zm-96 0H48v96h64zm272 72c0-22.1 17.9-40 40-40h58.7c12.7 0 24.9 5.1 33.9 14.1l109.3 109.2c9 9 14.1 21.2 14.1 33.9V368c0 26.5-21.5 48-48 48h-16c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h336zm32 88h169.4l-91.3-91.3c-3-3-7.1-4.7-11.3-4.7H424c-4.4 0-8 3.6-8 8zm192 32H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h21.5c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64h139c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H592c8.8 0 16-7.2 16-16zM224 416a64 64 0 1 0-128 0 64 64 0 1 0 128 0m256 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128"
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
                  d="M8 32h336c4.4 0 8 3.6 8 8s-3.6 8-8 8h-16v112h16c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h16V48H8c-4.4 0-8-3.6-8-8s3.6-8 8-8m304 16h-80v112h80zm-96 0h-80v112h80zm-96 0H40v112h80zm264 80c0-17.7 14.3-32 32-32h74.7c10.6 0 20.8 4.2 28.3 11.7l114 114c4.5 4.5 7 10.6 7 17V376c0 22.1-17.9 40-40 40h-24.4c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8H239.6c.2 2.6.4 5.3.4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7.1-5.4.4-8H40c-22.1 0-40-17.9-40-40V264c0-22.1 17.9-40 40-40h344zm16 112H40c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24h27.3c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64h166.6c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64H600c13.3 0 24-10.7 24-24V240zm212.7-16-105-105c-4.5-4.5-10.6-7-17-7H416c-8.8 0-16 7.2-16 16v96zM224 424a72 72 0 1 0-144 0 72 72 0 1 0 144 0m264 72a72 72 0 1 0 0-144 72 72 0 1 0 0 144"
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
                  d="M0 24C0 10.7 10.7 0 24 0h304c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v96h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V48h-8C10.7 48 0 37.3 0 24m80 120h32V48H80zm80 0h32V48h-32zm80 0h32V48h-32zm-80 208a80 80 0 1 1 0 160 80 80 0 1 1 0-160m320 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M416 96c-17.7 0-32 14.3-32 32v96H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h1.1c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96h98.3c7.8-54.3 54.4-96 110.9-96s103.1 41.7 110.9 96h1c26.5 0 48-21.5 48-48V237.3c0-17-6.7-33.3-18.7-45.3L544 114.7c-12-12-28.3-18.7-45.3-18.7zm160 160H448v-96h50.7l77.3 77.3z"
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
