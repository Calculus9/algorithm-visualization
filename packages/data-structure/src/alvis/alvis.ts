import { ISchemaProps } from '@alvis/schema/src'
import { AlvisArray } from './array'

export interface IInitConfigurationProps {
  data: object[]
  [key: string]: any
}
class Alvis {
  datastructureType: string
  schema: ISchemaProps

  constructor(type: string, specs: IInitConfigurationProps) {
    this.datastructureType = type
    this.schema = {
      specs: {
        type: '',
        data: [
          {
            id: '',
            values: []
          }
        ]
      },
      actions: []
    }

    return this.getInstance(specs)
  }

  getInstance(specs: IInitConfigurationProps) {
    switch (this.datastructureType) {
      case 'array':
        return new AlvisArray(specs)
      default:
        throw new Error(`Unknown type: ${this.datastructureType}`)
    }
  }
}

export { Alvis }
