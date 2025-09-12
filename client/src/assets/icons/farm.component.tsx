import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FarmIcon: React.FC<
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
                  d="M0 96C0 43 43 0 96 0s96 43 96 96zm181.4 32-48.6 118c-3.2 7.7-4.8 16-4.8 24.4V480c0 11.7 3.1 22.6 8.6 32H48c-26.5 0-48-21.5-48-48V128zM160 480V270.3c0-4.2.8-8.3 2.4-12.2l48.9-118.7c3-7.4 8.7-13.3 15.9-16.7l127.1-60.2c8.7-4.1 18.7-4.1 27.4 0l127.1 60.2c7.2 3.4 12.9 9.4 15.9 16.7l48.9 118.7c1.6 3.9 2.4 8 2.4 12.2V480c0 17.7-14.3 32-32 32H432v-64c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v64H192c-17.7 0-32-14.3-32-32m160-232v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24"
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
                  d="M48 464V176h115.3l23.4-50.2c7.2-15.5 19.8-27.9 35.3-35C212.1 39.1 166.6 0 112 0 50.1 0 0 50.1 0 112v352c0 26.5 21.5 48 48 48h100.1c-11-13.3-18.1-29.8-19.8-48zm128-336H48v-16c0-35.3 28.7-64 64-64s64 28.7 64 64zm81.9 34.4L368 114.2l110.1 48.2 49.9 107V456c0 4.4-3.6 8-8 8h-88v-56c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40v56h-88c-4.4 0-8-3.6-8-8V269.3l49.9-107zM384 68.8c-10.2-4.5-21.8-4.5-32.1 0l-116 50.8c-8.9 3.9-16.1 10.9-20.2 19.7l-51.9 111.3c-2.5 5.3-3.8 11.1-3.8 16.9V456c0 30.9 25.1 56 56 56h304c30.9 0 56-25.1 56-56V267.5c0-5.8-1.3-11.6-3.8-16.9l-51.9-111.3c-4.1-8.8-11.3-15.8-20.2-19.7zM320 248v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24"
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
                  d="M48 480c-8.8 0-16-7.2-16-16V192h123.7l17.1-32H32v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v12l3-5.7c6.1-11.5 15.6-20.8 27.1-26.7C212.5 39.5 166.9 0 112 0 50.1 0 0 50.1 0 112v352c0 26.5 21.5 48 48 48h96c-7-9.3-12-20.2-14.4-32zM380.8 68.1c-8.2-3.6-17.5-3.6-25.7 0l-116.5 51c-6.6 2.9-12 7.9-15.4 14.3l-59.4 111.5c-2.5 4.6-3.8 9.8-3.8 15.1v204c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V260c0-5.3-1.3-10.4-3.8-15.1l-59.5-111.5c-3.4-6.4-8.8-11.4-15.4-14.3zM368 97.5l116.5 51L544 260v204c0 8.8-7.2 16-16 16h-80v-64c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v64h-80c-8.8 0-16-7.2-16-16V260l59.5-111.6zM416 480h-96v-64c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16zm-80-256h64v64h-64zm0-32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"
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
                  d="M0 104v352c0 30.9 25.1 56 56 56h72c4.4 0 8-3.6 8-8s-3.6-8-8-8H56c-22.1 0-40-17.9-40-40V192h128c4.4 0 8-3.6 8-8s-3.6-8-8-8H16v-72c0-48.6 39.4-88 88-88s88 39.4 88 88v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8C208 46.6 161.4 0 104 0S0 46.6 0 104m365.1-22.3c1.9-.7 3.9-.7 5.8 0l132 51.3c2 .8 3.6 2.3 4.4 4.2l52 118.8c.4 1 .7 2.1.7 3.2V472c0 13.3-10.7 24-24 24h-88v-72c0-22.1-17.9-40-40-40h-80c-22.1 0-40 17.9-40 40v72h-88c-13.3 0-24-10.7-24-24V259.3c0-1.1.2-2.2.7-3.2l52-118.8c.9-1.9 2.4-3.5 4.4-4.2l132-51.3zM304 496v-72c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v72zm72.7-429.2c-5.6-2.2-11.8-2.2-17.4 0l-132 51.3c-5.9 2.3-10.7 6.9-13.3 12.7l-52 118.9c-1.3 3-2 6.3-2 9.6V472c0 22.1 17.9 40 40 40h336c22.1 0 40-17.9 40-40V259.3c0-3.3-.7-6.6-2-9.6l-52-118.8c-2.6-5.8-7.3-10.4-13.3-12.7l-132-51.3zM400 208c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16zm-64-16c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32z"
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
                  d="M160 270.3V480c0 17.7 14.3 32 32 32h112v-64c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v64h112c17.7 0 32-14.3 32-32V270.3c0-4.2-.8-8.3-2.4-12.2l-48.9-118.7c-3-7.4-8.7-13.3-15.9-16.7L381.7 62.5c-8.7-4.1-18.7-4.1-27.4 0l-127.1 60.2c-7.2 3.4-12.9 9.4-15.9 16.7l-48.9 118.7c-1.6 3.9-2.4 8-2.4 12.2M344 224h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 96h192c0-53-43-96-96-96S0 43 0 96m181.4 32H0v336c0 26.5 21.5 48 48 48h88.6c-5.4-9.4-8.6-20.3-8.6-32V270.3c0-8.4 1.6-16.6 4.8-24.4l48.6-118zM344 224c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24z"
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
