import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import type { DialogProps } from "./dialog.types";
import {
  Background,
  Container,
  DialogBody,
  DialogContainer,
  DialogFooter,
  DialogHeader,
} from "./dialog.styled";
import type { MickeyObject } from "@/helpers/types/base.types";
import { useZIndex } from "@/components/actions";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import { getClassName } from "@/helpers/style/style.helpers";
// import { useScrollToTop } from '../../hooks/useScrollTop.hook'

export const Dialog: React.FC<DialogProps> = ({
  className,
  style,
  width = "95vw",
  height = "95vh",
  children,
  isDismissible,
  headerLabel,
  footerButtons,
  showDialog,
  onDialogOpen,
  onDialogClose,
  scrollable,
  headerContent,
  radius,
  disablePadding,
  bodyClassName,
  mdWidth,
}) => {
  const domRef: MickeyObject = useRef(null);
  const backgroundRef: MickeyObject = useRef(null);
  const containerRef: MickeyObject = useRef(null);
  const dialogBodyRef: MickeyObject = useRef(null);

  useZIndex(backgroundRef, showDialog);
  useZIndex(containerRef, showDialog);

  usePointerEvent({
    element: backgroundRef,
    active: false,
    onPress: () => {
      if (isDismissible && onDialogClose) {
        onDialogClose();
      }
    },
  });

  useEffect(() => {
    if (showDialog) {
      onDialogOpen?.();
    } else {
      onDialogClose?.();
    }
  }, [showDialog]);

  const internalProperties = removeUndefined({
    className: getClassName("aps-dialog", className),
    style: { ...(style || {}) },
    scrollable: !scrollable,
  });
  const dialogElement = (
    <Container
      ref={domRef}
      {...internalProperties}
      style={{ display: showDialog ? "block" : "none" }}
    >
      <Background ref={backgroundRef} />
      <DialogContainer
        ref={containerRef}
        width={width}
        mdWidth={mdWidth}
        height={height}
        radius={radius}
      >
        {(headerLabel || headerContent) && (
          <DialogHeader disablePadding={disablePadding}>
            {headerLabel || headerContent}
          </DialogHeader>
        )}
        <DialogBody
          ref={dialogBodyRef}
          scrollable={!scrollable}
          disablePadding={disablePadding}
          className={bodyClassName ? bodyClassName : ""}
        >
          {children}
        </DialogBody>
        {footerButtons && <DialogFooter>{footerButtons}</DialogFooter>}
      </DialogContainer>
    </Container>
  );

  return showDialog
    ? ReactDOM.createPortal(dialogElement, document.body)
    : null;
};
