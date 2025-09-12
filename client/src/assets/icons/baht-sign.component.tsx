import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BahtSignIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 0c-17.7 0-32 14.3-32 32v32H37.6C16.8 64 0 80.8 0 101.6v304.7c0 23 18.7 41.7 41.7 41.7H112v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h32c61.9 0 112-50.1 112-112 0-40.1-21.1-75.3-52.7-95.1 13-18.3 20.7-40.7 20.7-64.9 0-61.9-50.1-112-112-112V32c0-17.7-14.3-32-32-32m-32 128v96H64v-96zm64 96v-96c26.5 0 48 21.5 48 48s-21.5 48-48 48m-64 64v96H64v-96zm64 96v-96h32c26.5 0 48 21.5 48 48s-21.5 48-48 48z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M136 0c-13.3 0-24 10.7-24 24v40H37.6C16.8 64 0 80.8 0 101.6v304.7c0 23 18.7 41.7 41.7 41.7H112v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h52c59.6 0 108-48.4 108-108 0-42.1-24.1-78.5-59.2-96.4 16.9-19 27.2-44.1 27.2-71.6 0-59.6-48.4-108-108-108h-20V24c0-13.3-10.7-24-24-24m-24 112v120H48V112zm48 120V112h20c33.1 0 60 26.9 60 60s-26.9 60-60 60zm-48 48v120H48V280zm48 120V280h52c33.1 0 60 26.9 60 60s-26.9 60-60 60z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M144 0c-8.8 0-16 7.2-16 16v48H37.6C16.8 64 0 80.8 0 101.6v304.7c0 23 18.7 41.7 41.7 41.7H128v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h56c57.4 0 104-46.6 104-104 0-44.7-28.2-82.8-67.8-97.5 21.9-19.1 35.8-47.2 35.8-78.5 0-57.4-46.6-104-104-104h-24V16c0-8.8-7.2-16-16-16m-16 96v144H32V101.6c0-3.1 2.5-5.6 5.6-5.6zm32 144V96h24c39.8 0 72 32.2 72 72s-32.2 72-72 72zm-32 32v144H41.7c-5.4 0-9.7-4.4-9.7-9.7V272zm32 144V272h56c39.8 0 72 32.2 72 72s-32.2 72-72 72z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M136 0c-4.4 0-8 3.6-8 8v56H49.4C30.9 64 16 78.9 16 97.4v313c0 20.8 16.8 37.6 37.6 37.6H128v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h60c55.2 0 100-44.8 100-100 0-48.6-34.7-89.1-80.7-98.1 29.2-17.5 48.7-49.4 48.7-85.9 0-55.2-44.8-100-100-100h-28V8c0-4.4-3.6-8-8-8m-8 80v168H32V97.4C32 87.8 39.8 80 49.4 80zm16 168V80h28c46.4 0 84 37.6 84 84s-37.6 84-84 84zm-16 16v168H53.6c-11.9 0-21.6-9.7-21.6-21.6V264zm16 168V264h60c46.4 0 84 37.6 84 84s-37.6 84-84 84z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M144 0c17.7 0 32 14.3 32 32v32h-64V32c0-17.7 14.3-32 32-32m32 288v96h-64v-96zm0-160v96h-64v-96zm-64 320h64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 224h112c26.5 0 48-21.5 48-48s-21.5-48-48-48H64zM0 265.7V101.6C0 80.8 16.8 64 37.6 64H176c61.9 0 112 50.1 112 112 0 24.2-7.7 46.6-20.7 64.9 31.7 19.8 52.7 55 52.7 95.1 0 61.9-50.1 112-112 112H41.7C18.7 448 0 429.3 0 406.3V265.7M176 288H64v96h144c26.5 0 48-21.5 48-48s-21.5-48-48-48z"
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
