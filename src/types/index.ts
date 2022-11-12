import React from 'react'

export type TypeName = 'success' | 'error' | 'warning' | 'information'
export type Position =
  | 'top'
  | 'topRight'
  | 'topLeft'
  | 'bottom'
  | 'bottomRight'
  | 'bottomLeft'

export type OnNotify = {
  message: string
  options?: Options
  type: TypeName
}

export type Options = {
  duration?: number
  position?: Position
  onClose?: (event: React.MouseEvent<SVGSVGElement>) => void
  component?: (arg: { message: string; type: TypeName }) => React.ReactNode
}

export type NotifyProps = OnNotify & { openNotify: boolean }
