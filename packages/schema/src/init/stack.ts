import { IInitConfigurationProps } from '@alvis/data-structure/src/index'

const initStackConfigs: IInitConfigurationProps = {
  dataStructureType: 'stack',
  data: [],
  options: {
    type: 'bar',
    visual: {},
    fields: {
      category: 'key',
      value: 'value'
    }
  },
  actions: []
}

export { initStackConfigs }
