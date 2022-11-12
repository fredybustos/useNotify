import React from 'react'
import ReactDOM from 'react-dom/client'
import { OnNotify, Options } from 'types'

import Notification from 'components/notification'
import { createContainer } from 'hooks/useUtils'

export const notify = ({ type, message, options }: OnNotify) => {
  const container = createContainer()
  ReactDOM.createRoot(container).render(
    <Notification
      type={type}
      openNotify={true}
      message={message}
      options={options}
    />
  )

  return container
}

const success = (message: string, options: Options) =>
  notify({ type: 'success', message, options })

const warn = (message: string, options: Options) =>
  notify({ type: 'warning', message, options })

const error = (message: string, options: Options) =>
  notify({ type: 'error', message, options })

const info = (message: string, options: Options) =>
  notify({ type: 'information', message, options })

export { success, warn, error, info }
