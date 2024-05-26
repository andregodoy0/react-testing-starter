import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from '../../src/entities'

describe('UserAccount', () => {
  it('should render the user name', () => {
    const user = {
      id: 1,
      name: 'TestUser',
    } as User
    render(<UserAccount user={user} />)

    expect(screen.getByText(user.name)).toBeInTheDocument()
  })
  it('should render Edit button if the user is admin', () => {
    const user = {
      id: 1,
      name: 'TestUser',
      isAdmin: true,
    } as User
    render(<UserAccount user={user} />)

    const name = screen.getByRole('button')
    expect(name).toBeInTheDocument()
    expect(name).toHaveTextContent(/edit/i)
  })

  it('should not render Edit button if the user is not admin', () => {
    const user = {
      id: 1,
      name: 'TestUser',
      isAdmin: false,
    } as User
    render(<UserAccount user={user} />)

    const name = screen.queryByRole('button')
    expect(name).not.toBeInTheDocument()
  })
})
