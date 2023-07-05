import { success, warn, error, info } from '../components/notify'
import { Options } from '../types'

export const useNotify = () => {
  const notifyWarn = (message: string, options: Options) =>
    warn(message, options)
  const notifyInfo = (message: string, options: Options) =>
    info(message, options)
  const notifyError = (message: string, options: Options) =>
    error(message, options)
  const notifySuccess = (message: string, options: Options) =>
    success(message, options)

  return {
    notifyWarn,
    notifyInfo,
    notifyError,
    notifySuccess
  }
}
