/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useRef } from "react";
import type { ClickActions, MickeyObject } from "../types/base.types";
import {
  addClass,
  removeClass,
  find,
  getDomFromPointer,
  attr,
  removeAttr,
} from "../dom.helper";

const getEventDetails = (ev: MickeyObject) => ({
  elem: ev.target,
  button: ev.button,
  clientX: ev.clientX,
  clientY: ev.clientY,
  ctrlKey: ev.ctrlKey,
  layerX: ev.layerX,
  layerY: ev.layerY,
  movementX: ev.movementX,
  movementY: ev.movementY,
  offsetX: ev.offsetX,
  offsetY: ev.offsetY,
  pageX: ev.pageX,
  pageY: ev.pageY,
  type: ev.pointerType,
  pressure: ev.pressure,
  screenX: ev.screenX,
  screenY: ev.screenY,
  shiftKey: ev.shiftKey,
  eventType: ev.type,
  x: ev.x,
  y: ev.y,
});

export interface ClickProperties extends ClickActions {
  element: MickeyObject;
}

export const usePointerEvent = (props: ClickProperties) => {
  const hasActions = Object.values(props).some(
    (value) => typeof value === "function" && props.element !== undefined
  );

  if (!hasActions) {
    return;
  }

  const {
    element,
    active,
    onPress,
    onOut,
    onMove,
    onUp,
    onDown,
    onOver,
    groupId,
    selected,
  } = props;

  const elemHelper = useRef(null);
  const clickingRef = useRef({ isClicking: false });
  const handlersRef = useRef<ClickProperties>({
    element,
    active: selected ? false : active,
    onPress,
    onOut,
    onMove,
    onUp,
    onDown,
    onOver,
    groupId,
    selected,
  });
  const onActionOver = useCallback((ev: MickeyObject) => {
    if (elemHelper.current) {
      addClass(elemHelper.current, "mickey-hover");
    }
    handlersRef.current?.onOver?.(ev);
  }, []);

  const onActionMove = useCallback((ev: MickeyObject) => {
    if (elemHelper.current) {
      addClass(elemHelper.current, "mickey-hover");
    }
    handlersRef.current?.onMove?.(ev);
  }, []);

  const onActionLeave = useCallback((ev: MickeyObject) => {
    if (elemHelper.current) {
      removeClass(elemHelper.current, "mickey-hover");
    }
    handlersRef.current?.onOut?.(ev);
  }, []);

  const onActionStart = useCallback((ev: MickeyObject) => {
    if (clickingRef.current?.isClicking || ev.button > 0) {
      return;
    }
    if (elemHelper.current) {
      if (!handlersRef.current?.selected) {
        addClass(elemHelper.current, "mickey-active");
      }
    }
    onDown?.(ev);
    clickingRef.current.isClicking = true;
  }, []);

  const onActionEnd = useCallback((ev: MickeyObject) => {
    if (clickingRef.current?.isClicking) {
      onUp?.(ev);

      if (elemHelper.current) {
        removeClass(elemHelper.current, "mickey-active");
        removeClass(elemHelper.current, "mickey-hover");
      }

      if (groupId) {
        const items = find(
          document.documentElement,
          `[mickey-gid="${groupId}"]`
        );
        items.forEach((item: MickeyObject) => {
          try {
            item.classList.remove("mickey-group-active");
          } catch {
            /** */
          }
        });

        if (elemHelper.current) {
          if (!handlersRef.current?.selected) {
            addClass(elemHelper.current, "mickey-group-active");
          }
        }
      }

      clickingRef.current.isClicking = false;
    }
  }, []);

  const onActionClick = useCallback((ev: MickeyObject) => {
    handlersRef.current?.onPress?.(getEventDetails(ev));

    if (elemHelper.current) {
      removeClass(elemHelper.current, "mickey-active");
      removeClass(elemHelper.current, "mickey-hover");
    }

    if (groupId) {
      const items = find(document.documentElement, `[mickey-gid="${groupId}"]`);
      items.forEach((item: MickeyObject) => {
        try {
          item.classList.remove("mickey-group-active");
        } catch {
          /** */
        }
      });

      if (elemHelper.current) {
        if (!handlersRef.current?.selected) {
          addClass(elemHelper.current, "mickey-group-active");
        }
      }
    }
  }, []);

  useEffect(() => {
    if (element) {
      const elemCurrent = getDomFromPointer(element);
      if (elemCurrent) {
        if (groupId) {
          if (active) {
            if (!handlersRef.current?.selected) {
              addClass(elemCurrent, "mickey-group-active");
            }
          }
        }

        elemHelper.current = elemCurrent;
        addClass(elemCurrent, "mickey-click");

        if (handlersRef.current?.onPress) {
          addClass(elemCurrent, "mickey-click");
          if (
            handlersRef.current.onMove ||
            handlersRef.current.onOver ||
            handlersRef.current.onOut
          ) {
            addClass(elemCurrent, "mickey-interaction");
          }

          if (active) {
            if (!handlersRef.current?.selected) {
              addClass(elemCurrent, "mickey-group-active");
            }
          }

          if (groupId) {
            attr(elemCurrent, "mickey-gid", groupId);
          }

          elemCurrent.removeEventListener("pointerdown", onActionStart, false);
          elemCurrent.addEventListener("pointerdown", onActionStart, {
            capture: true,
            passive: true,
          });

          elemCurrent.removeEventListener("pointerup", onActionEnd, false);
          elemCurrent.addEventListener("pointerup", onActionEnd, {
            capture: true,
            passive: true,
          });

          elemCurrent.removeEventListener("click", onActionClick, false);
          elemCurrent.addEventListener("click", onActionClick, {
            capture: true,
            passive: true,
          });

          elemCurrent.removeEventListener("pointerover", onActionOver, false);
          elemCurrent.addEventListener("pointerover", onActionOver, {
            capture: true,
            passive: true,
          });

          elemCurrent.removeEventListener("pointermove", onActionMove, false);
          elemCurrent.addEventListener("pointermove", onActionMove, {
            capture: true,
            passive: true,
          });

          elemCurrent.removeEventListener("pointerleave", onActionLeave, false);
          elemCurrent.addEventListener("pointerleave", onActionLeave, {
            capture: true,
            passive: true,
          });
        }
      }
    }

    return () => {
      if (hasActions) {
        const elemCurrent = getDomFromPointer(element);
        if (elemCurrent) {
          removeClass(elemCurrent, "mickey-click");
          removeClass(elemCurrent, "mickey-hover");
          if (groupId) {
            removeAttr(elemCurrent, "mickey-gid");
          }

          elemCurrent.removeEventListener("pointerdown", onActionStart, false);
          elemCurrent.removeEventListener("pointerup", onActionEnd, false);
          elemCurrent.removeEventListener("click", onActionClick, false);
          elemCurrent.removeEventListener("pointerover", onActionOver, false);
          elemCurrent.removeEventListener("pointerleave", onActionLeave, false);
          elemCurrent.removeEventListener("pointermove", onActionMove, false);
        }
      }
    };
  }, []);
};
