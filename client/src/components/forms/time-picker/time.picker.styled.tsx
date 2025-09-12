import { filterProps } from "@/helpers/types/style.types";
import type { TimePickerContainerProperties } from "./time.picker.types";

export const Container = filterProps<TimePickerContainerProperties>("div")`
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative; 

  &[data-disabled="true"] {
    opacity: 0.6;
    pointer-events: none;
  }
`;
