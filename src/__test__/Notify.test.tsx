import React from 'react'
import { render } from '@testing-library/react'

import { NotifyProps } from 'types'
import { Notify } from 'components/notify'

const props: NotifyProps = {
  type: 'success',
  message: 'Notification',
  options: {
    duration: 5000,
    position: 'top'
  }
}

describe('Notify', () => {
  test('It should render notify', () => {
    const { getByText } = render(<Notify {...props} />)
    expect(getByText('Notification')).toBeTruthy()
  })
})
