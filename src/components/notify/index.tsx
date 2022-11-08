import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { clsx } from 'clsx'

import CloseIcon from '../closeIcon'
import useUtils from '../../hooks/useUtils'
import { TYPE, DEFAULT_POSITION, POSITION } from '../../styles/utils'
import { NotifyProps } from '../../types'
import '../../styles/notify.css'

export const Notify = ({ message, type, openNotify, options }: NotifyProps) => {
  const [open, setOpen] = useState(false)

  const { container } = useUtils({ open, options, setOpen })

  useEffect(() => {
    setOpen(openNotify)
  }, [openNotify])

  const closeNotify = (event: React.MouseEvent<SVGSVGElement>) => {
    if (options?.onClose) {
      options.onClose(event)
      setOpen(false)
      return
    }
    setOpen(false)
  }

  return createPortal(
    <>
      {options?.component ? (
        <div className="notify-container" role="button">
          {options?.component({ message, type })}
        </div>
      ) : (
        <div
          role="button"
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
            <p className="notify-title">{message}</p>
            <CloseIcon onClick={closeNotify} />
          </div>
        </div>
      )}
    </>,
    container
  )
}
