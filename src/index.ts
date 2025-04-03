import { NitroModules } from 'react-native-nitro-modules'
import type { MyAwesomeModule as MyAwesomeModuleSpec } from './specs/my-awesome-module.nitro'

export const MyAwesomeModule =
  NitroModules.createHybridObject<MyAwesomeModuleSpec>('MyAwesomeModule')