import { MARGIN } from '../components/utils/contants'
import { TypeName } from '../types'
import './notify.css'

const position = (id: number, childRects: DOMRect) =>
  id !== 1 ? (MARGIN + childRects.height) * (id - 1) + MARGIN : MARGIN

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

export const INITIAL_STYLES = {
  top: () => ({ top: MARGIN * -1 }),
  topRight: (id: number, childRects: DOMRect) => ({
    right: MARGIN * -1,
    top: position(id, childRects)
  }),
  topLeft: (id: number, childRects: DOMRect) => ({
    left: MARGIN * -1,
    top: position(id, childRects)
  }),
  bottom: () => ({ bottom: MARGIN * -1 }),
  bottomRight: (id: number, childRects: DOMRect) => ({
    right: MARGIN * -1,
    bottom: position(id, childRects)
  }),
  bottomLeft: (id: number, childRects: DOMRect) => ({
    left: MARGIN * -1,
    bottom: position(id, childRects)
  })
}

export const POSITION_STYLES = {
  top: (id: number, childRects: DOMRect) => ({
    top: position(id, childRects)
  }),
  topRight: (id: number, childRects: DOMRect) => ({
    right: MARGIN,
    top: position(id, childRects)
  }),
  topLeft: (id: number, childRects: DOMRect) => ({
    left: MARGIN,
    top: position(id, childRects)
  }),
  bottom: (id: number, childRects: DOMRect) => ({
    bottom: position(id, childRects)
  }),
  bottomRight: (id: number, childRects: DOMRect) => ({
    right: MARGIN,
    bottom: position(id, childRects)
  }),
  bottomLeft: (id: number, childRects: DOMRect) => ({
    left: MARGIN,
    bottom: position(id, childRects)
  })
}
