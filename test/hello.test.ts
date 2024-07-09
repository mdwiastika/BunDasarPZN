import { describe, it, expect } from 'bun:test'
import { sayHello } from '../src/hello'

describe('Testing Name', () => {
  it('Should suppot unit test', async () => {
    const response: String = sayHello('Marcel')
    expect(response).toBe('Hello Marcel')
  })
})
