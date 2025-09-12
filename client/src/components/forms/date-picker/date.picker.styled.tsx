import type { DomProperties } from "@/helpers/types/base.types";
import { filterProps } from "@/helpers/types/style.types";
import type { DateDropDownProperties } from "./date.picker.types";
import { styles } from "@/helpers";

export const DatePickerContainer = filterProps<
  DomProperties & { disabled?: boolean }
>("div")`
    position: relative;
    display: inline-block;
    background-color: ${styles.color.primary.contrast};
    border: ${styles.surface.border.default.solidLightThin};
    border-radius: 10px;
    padding: 5px; 
    

    
     
    &[data-visible="true"] {
      border-color: ${styles.color.primary.main};
      background: ${styles.color.primary.contrast};
      box-shadow: 0 0 4px ${styles.color.primary.light}, 0 0 8px ${styles.color.primary.light} ;
    }
      
 
    & .mickey-date-year-container > div{
        border-radius: 8px;
    }
    
    & .mickey-date-year-select {
        text-align: center;
        padding: 4px;
        font-size: 13px;
    }

    & button:hover {
        & svg {
            fill: ${styles.color.primary.contrast};
        }
    }

    
   &[data-disabled] {
			background-color: ${styles.color.disabled.background}  !important;
			border-color: ${styles.color.disabled.border}  !important;
			color: ${styles.color.disabled.text} !important;
			cursor: not-allowed !important;
			pointer-events: none !important;
			touch-action: none !important;

			&::selection,
			& *::selection {
				background-color: ${styles.color.disabled.background} !important;
				color: ${styles.color.disabled.text} !important;
			}

			&::placeholder,
			& *::placeholder {
				color: ${styles.color.disabled.text} !important;
				font-size: 14px;
			}

			&:-webkit-autofill,
			& *:-webkit-autofill {
				-webkit-box-shadow: 0 0 0 30px white inset !important;
				-webkit-text-fill-color: ${styles.color.disabled.icon} !important;
			}
			& *,
      & .mickey-date-container {
				background-color: ${styles.color.disabled.background} !important;
				border-color: ${styles.color.disabled.border} !important;
				color: ${styles.color.disabled.text} !important;
				fill: ${styles.color.disabled.icon} !important;
				cursor: not-allowed !important;
				pointer-events: none !important;
				touch-action: none !important;

				&::selection,
				& *::selection {
					background-color: ${styles.color.disabled.text} !important;
					color: ${styles.color.disabled.text} !important;
				}

				&::placeholder,
				& *::placeholder {
					color: ${styles.color.disabled.text} !important;
				}

				&:-webkit-autofill,
				& *:-webkit-autofill {
					-webkit-box-shadow: 0 0 0 30px white red !important;
					-webkit-text-fill-color: ${styles.color.disabled.icon} !important;
				}
			}

      & * {
       cursor: not-allowed !important;
        pointer-events: none !important;
        touch-action: none !important;
      }
		}
`;

export const DateDropdown = filterProps<DateDropDownProperties>("div", [
  "isUp",
])`
  position: absolute; 
  left: 0;
  background: ${styles.color.primary.contrast};
  border: ${styles.surface.border.default.solidLightThin} ;
  border-radius: 10px; 
  z-index: 1000;
  width: 246px;
  height: 268px;
  overflow: hidden;
  margin-top: 6px;
  
    & .mickey-date-year-select {
      text-align:center;
    }

`;

export const CalendarContainer = filterProps("div")`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0px;
  padding: 4px;
`;

export const CalendarDay = filterProps("div")`
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;

    &[data-selected="true"]{
        background-color: ${styles.color.primary.main} !important;
        color: ${styles.color.primary.contrast} !important;
    }

    &.mickey-hover {
        background-color: ${styles.color.primary.main};
        color: ${styles.color.primary.contrast};
    }
`;
