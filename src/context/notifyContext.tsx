import React, { createContext, useState } from 'react'
import { OnNotify, Options, TypeName, NotifyProviderProps } from '../types'

export const NotifyContext = createContext<NotifyProviderProps>(
  {} as NotifyProviderProps
)

export const NotifyProvider = ({ children }: { children: React.ReactNode }) => {
  const [openNotify, setOpenNotify] = useState(false)
  const [options, setOptions] = useState<Options | undefined>({} as Options)
  const [type, setType] = useState<TypeName>('' as TypeName)
  const [message, setMessage] = useState('')

  const toggleModal = () => setOpenNotify(!openNotify)

  const onNotify = ({
    message: notifyMessage,
    options: notifyOptions,
    type: notifyType
  }: OnNotify) => {
    toggleModal()
    setOptions(notifyOptions)
    setMessage(notifyMessage)
    setType(notifyType)
  }

  const notifySuccess = (message: string, options?: Options) =>
    onNotify({ message, options, type: 'success' })

  const notifyError = (message: string, options?: Options) =>
    onNotify({ message, options, type: 'error' })

  const notifyWarn = (message: string, options?: Options) =>
    onNotify({ message, options, type: 'warning' })

  const notifyInfo = (message: string, options?: Options) =>
    onNotify({ message, options, type: 'information' })

  return (
    <NotifyContext.Provider
      value={{
        type,
        message,
        options,
        openNotify,
        notifyInfo,
        notifyWarn,
        notifyError,
        notifySuccess
      }}
    >
      {children}
    </NotifyContext.Provider>
  )
}
