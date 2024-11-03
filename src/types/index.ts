import React from 'react'

export type TypeName = 'success' | 'error' | 'warning' | 'information'
export type Position = 'top' | 'topRight' | 'topLeft' | 'bottom' | 'bottomRight' | 'bottomLeft'

export type OnNotify = {
  message: string
  options?: Options
  type: TypeName
  id: number
}

export type Options = {
  duration?: number
  bgcolor?: string
  color?: string
  rounded?: string
  position?: Position | 'topRight'
  onClose?: (event?: React.MouseEvent<SVGSVGElement>) => void
  component?: (arg: NotifyProps) => React.ReactNode
}

export type NotifyInitialProps = {
  notification: OnNotify
  container: HTMLElement
  openNotify: boolean
}

export interface NotificationProps extends OnNotify {
  open: boolean
  setOpen: (arg: boolean) => void
  container: HTMLElement
}

export type UseToastProps = {
  options?: Options
  id: number
  open: boolean
  setOpen: (arg: boolean) => void
  container: HTMLElement
}
export type NotifyProps = Omit<OnNotify, 'id'>
