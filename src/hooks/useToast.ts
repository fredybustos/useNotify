import { CSSProperties, useEffect, useState } from 'react'

import { Position, UseToastProps } from 'types'
import { POSITION_STYLES, INITIAL_STYLES } from 'styles/utils'
import {
  MARGIN,
  ANIMATION_TIMER,
  DEAFAULT_DURATION
} from 'components/utils/contants'

export default function useToast({
  setOpen,
  options,
  container,
  id,
  open
}: UseToastProps) {
  const [animatedStyles, setAnimatedStyles] = useState<CSSProperties>({
    opacity: 0,
    [options?.position as string]: MARGIN * -1
  })

  const duration = options?.duration ? options?.duration : DEAFAULT_DURATION
  const position = (options?.position as Position) || 'top'

  useEffect(() => {
    const animTimeout = setTimeout(() => {
      const childRects = container?.children[0]?.getBoundingClientRect()
      const styles = POSITION_STYLES[position](id, childRects)
      setAnimatedStyles({ opacity: 1, ...styles })
    }, ANIMATION_TIMER)

    return () => {
      clearTimeout(animTimeout)
    }
  }, [])

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        closeNotify()
      }, duration)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [open])

  const closeNotify = () => {
    setOpen(false)
    const childRects = container?.children[0]?.getBoundingClientRect()
    const styles = INITIAL_STYLES[position](id, childRects)
    setAnimatedStyles({
      opacity: 0,
      ...styles
    })
  }

  return { animatedStyles, closeNotify }
}
