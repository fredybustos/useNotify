import React from 'react'
import { render } from '@testing-library/react'

import { NotifyProps } from '../types'
import { Notify } from '../components/notify'

const props: NotifyProps = {
  message: 'Notification',
  type: 'success',
  openNotify: true,
  options: {
    duration: 5000
  }
}

describe('Notify', () => {
  test('It should render notify', () => {
    const { getByText } = render(<Notify {...props} />)
    expect(getByText('Notification')).toBeTruthy()
  })
})
