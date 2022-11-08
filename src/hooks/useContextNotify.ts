import { useContext } from 'react'
import { NotifyContext } from '../context/notifyContext'

export default function useContextNotify() {
  const notify = useContext(NotifyContext)
  return { ...notify }
}
