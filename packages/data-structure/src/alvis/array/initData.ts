import { IInitConfigurationProps } from '..'

const handleInitData = (data: IInitConfigurationProps['data']) => {
  return data.map((d, index) => {
    return {
      id: `${d}-${index}`,
      key: index,
      value: d
    }
  })
}
export { handleInitData }
