import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList'
import { User } from '../../src/entities'

describe('USerList', () => {
  it('should render no user if array is empty', () => {
    const users: User[] = []
    render(<UserList users={users} />)

    expect(screen.getByText(/no users/i)).toBeInTheDocument()
  })
  it('should render no user if array is empty', () => {
    const users: User[] = [
      { id: 1, name: 'Test1' },
      { id: 2, name: 'Test2' },
    ]
    render(<UserList users={users} />)

    users.forEach((user) => {
      const link = screen.getByRole('link', { name: user.name })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', `/users/${user.id}`)
    })
  })
})
