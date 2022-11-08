import React from 'react'
import useContextNotify from '../../hooks/useContextNotify'
import { Notify } from '../notify'

export default function Notification() {
  const { openNotify, options, message, type } = useContextNotify()
  return (
    <Notify
      message={message}
      type={type}
      openNotify={openNotify}
      options={options}
    />
  )
}
