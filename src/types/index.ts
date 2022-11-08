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

export type NotifyProviderProps = {
  type: TypeName
  message: string
  options?: Options
  openNotify: boolean
  notifyWarn: (message: string, options?: Options) => void
  notifyInfo: (message: string, options?: Options) => void
  notifyError: (message: string, options?: Options) => void
  notifySuccess: (message: string, options?: Options) => void
}

export type NotifyProps = OnNotify & { openNotify: boolean }
