import React, { Fragment, useEffect, useState } from 'react'

import { NotifyInitialProps, Options, Position } from '../../types'
import Notification from '../notification'
import '../../styles/notify.css'

const defaultNotify = {
  top: [] as NotifyInitialProps['notification'][],
  topRight: [] as NotifyInitialProps['notification'][],
  topLeft: [] as NotifyInitialProps['notification'][],
  bottom: [] as NotifyInitialProps['notification'][],
  bottomRight: [] as NotifyInitialProps['notification'][],
  bottomLeft: [] as NotifyInitialProps['notification'][],
}

export default function Notifications({ notification, container, openNotify }: NotifyInitialProps) {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState<typeof defaultNotify>(defaultNotify)

  useEffect(() => {
    if (openNotify) {
      setOpen(openNotify)
    }
  }, [openNotify])

  useEffect(() => {
    if (notification) {
      const position = (notification.options?.position as Options['position']) || 'top'
      setNotifications(prevState => {
        return {
          ...prevState,
          [position]: [...prevState[position], notification],
        }
      })
    }
  }, [notification])

  const groups: Array<Position> = [
    'top',
    'topRight',
    'topLeft',
    'bottom',
    'bottomRight',
    'bottomLeft',
  ]

  return (
    <>
      {groups.map(group => {
        return (
          <Fragment key={group}>
            {notifications[group].map(({ id, message, type, options }) => (
              <Notification
                key={id}
                id={id}
                open={open}
                type={type}
                options={options}
                message={message}
                container={container}
                setOpen={setOpen}
              />
            ))}
          </Fragment>
        )
      })}
    </>
  )
}
