import { css, styled } from 'styled-components'

export const CheckboxContainer = styled.div<{ direction: 'row' | 'column'; columns?: number }>`
	${({ direction, columns }) =>
		Number(columns) > 0
			? css`
					display: grid;
					grid-template-columns: repeat(${Number(columns)}, minmax(0, 1fr));
					gap: 8px;
				`
			: css`
					display: flex;
					flex-direction: ${direction};
					flex-wrap: nowrap;
					gap: ${direction === 'row' ? '20px' : '6px'};
				`}
`

export const CheckboxItem = styled.div``
