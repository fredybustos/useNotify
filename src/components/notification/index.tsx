import React from 'react'
import { createPortal } from 'react-dom'
import { clsx } from 'clsx'

import CloseIcon from 'components/closeIcon'
import { DEFAULT_POSITION, POSITION, TYPE } from 'styles/utils'
import { NotificationProps } from 'types'
import useToast from 'hooks/useToast'
import '../../styles/notify.css'

export default function Notification({
  id,
  open,
  type,
  options,
  message,
  container,
  setOpen
}: NotificationProps) {
  const { animatedStyles, closeNotify } = useToast({
    setOpen,
    options,
    container,
    id,
    open
  })

  return createPortal(
    <>
      {options?.component ? (
        <div
          style={{ ...animatedStyles, background: options?.bgcolor }}
          className={clsx([
            'notify-container',
            { [POSITION[options?.position || 'top']]: open },
            {
              [DEFAULT_POSITION[options?.position || 'top']]: !open
            }
          ])}
        >
          {options?.component({ message, type, options })}
        </div>
      ) : (
        <div
          style={{ ...animatedStyles, background: options?.bgcolor }}
          className={clsx([
            'notify-container',
            `${TYPE[type]}`,
            { [POSITION[options?.position || 'top']]: open },
            {
              [DEFAULT_POSITION[options?.position || 'top']]: !open
            }
          ])}
        >
          <div className="notify-body">
            <p className="notify-title" style={{ color: options?.color }}>
              {message}
            </p>
            <CloseIcon onClick={closeNotify} />
          </div>
        </div>
      )}
    </>,
    container
  )
}
