import { useContext } from 'react'
import { NotifyContext } from '../context/notifyContext'

export const useNotify = () => {
  const { notifyWarn, notifyInfo, notifyError, notifySuccess } =
    useContext(NotifyContext)

  return {
    notifyWarn,
    notifyInfo,
    notifyError,
    notifySuccess
  }
}
