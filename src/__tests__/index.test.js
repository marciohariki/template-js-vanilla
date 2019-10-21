import { main } from 'index'

describe('index', () => {
  it('should make sure that main exists', () => {
    expect(main).toBeDefined()
  })
  it('should return hello world', () => {
    expect(main()).toBe('hello world')
  })
})
