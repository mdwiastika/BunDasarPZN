import { describe, it, expect } from 'bun:test'

describe('Connect Fetch API', () => {
  it('Should compatible using fetch', async () => {
    const response = await fetch('https://example.com')
    expect(response.status).toBe(200)
    expect(response.headers.get('Content-Type')).toContain('text/html')
    expect(await response.text()).toContain('Example Domain')
  })
})
