import { describe, it, expect } from 'bun:test'
import { User } from '../packages/user/user'

describe('User Package', () => {
  it('Should access user package', async () => {
    const user: User = new User('Marcel')
    expect(user.name).toBe('Marcel')
  })
})
