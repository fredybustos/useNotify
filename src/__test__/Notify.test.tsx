import React from 'react'
import { render } from '@testing-library/react'

import { NotifyProps } from '../types'
import Notifications from '../components/notifications'

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (node: HTMLElement | null) => node,
}))
const props: NotifyProps = {
  type: 'success',
  message: 'Notification',
  options: {
    duration: 5000,
    position: 'top',
  },
}

describe('Notify', () => {
  test('It should render notify', () => {
    const { getAllByTestId } = render(
      <Notifications
        notification={{
          message: '',
          options: undefined,
          type: 'success',
          id: 0,
        }}
        container={(<div>Notification</div>) as unknown as HTMLElement}
        openNotify={false}
        {...props}
      />
    )
    expect(getAllByTestId('close-icon')).toBeTruthy()
  })
})
