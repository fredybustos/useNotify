import { TypeName } from '../types'
import './notify.css'

export const TYPE: { [key in TypeName]: TypeName } = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  information: 'information'
}

export const DEFAULT_POSITION = {
  top: 'default-top',
  topRight: 'default-top_right',
  topLeft: 'default-top_left',
  bottom: 'default-bottom',
  bottomRight: 'default-bottom_right',
  bottomLeft: 'default-bottom_left'
}

export const POSITION = {
  top: 'position-top',
  topRight: 'position-top_right',
  topLeft: 'position-top_left',
  bottom: 'position-bottom',
  bottomRight: 'position-bottom_right',
  bottomLeft: 'position-bottom_left'
}
