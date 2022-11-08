import { useEffect } from 'react'
import { Options } from '../types'

type UseUtils = {
  open: boolean
  options?: Options
  setOpen: (arg: boolean) => void
}
export default function useUtils({ open, options, setOpen }: UseUtils) {
  const container = createContainer()
  const duration = options?.duration ? options?.duration : 5000

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false)
      }, duration)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [open])

  useEffect(() => {
    const remove = setTimeout(() => {
      container.remove()
    }, duration * 1.2)
    return () => {
      clearTimeout(remove)
    }
  }, [container])

  return { container }
}

const createContainer = () => {
  const portalId = 'notifyContainer'
  let element = document.getElementById(portalId)

  if (element) {
    return element
  }

  element = document.createElement('div')
  element.setAttribute('id', portalId)
  document.body.appendChild(element)
  return element
}
