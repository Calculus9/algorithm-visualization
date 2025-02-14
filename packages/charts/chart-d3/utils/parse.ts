import { IChartProps } from '../../utils/types'

export const parseSpec2Data = (spec: IChartProps) => {
  return spec?.data?.[0]?.values || []
}

export const getField = (spec: IChartProps, field: string) => {
  return spec?.[field]
}
