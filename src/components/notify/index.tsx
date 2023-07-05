import React from 'react'
import ReactDOM from 'react-dom/client'

import { NotifyProps, Options, NotifyInitialProps } from '../../types'
import Notifications from '../notifications'
import { createContainer } from '../utils'
import { DEAFAULT_DURATION } from '../utils/contants'

let notifyId = 0

const notify = ({ type, message, options }: NotifyProps) => {
  notifyId += 1
  const container = createContainer(notifyId)
  const notification: NotifyInitialProps['notification'] = {
    type,
    message,
    id: notifyId,
    options
  }
  const duration = options?.duration ? options?.duration : DEAFAULT_DURATION

  ReactDOM.createRoot(container).render(
    <Notifications
      openNotify
      notification={notification}
      container={container}
    />
  )

  setTimeout(() => {
    notifyId -= 1
    container.remove()
  }, duration * 1.2)
}

const Notify = ({ type, message, options }: NotifyProps) =>
  notify({ type, message, options })

const success = (message: string, options: Options) =>
  notify({ type: 'success', message, options })

const warn = (message: string, options: Options) =>
  notify({ type: 'warning', message, options })

const error = (message: string, options: Options) =>
  notify({ type: 'error', message, options })

const info = (message: string, options: Options) =>
  notify({ type: 'information', message, options })

export { success, warn, error, info, Notify }
