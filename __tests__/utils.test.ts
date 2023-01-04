import { describe, test, expect } from '@jest/globals'

import { pxToNumber, testAsync } from '../src/utils/index'

describe('convert px to number', () => {
  test('if entry is null, return 0', () => {
    expect(pxToNumber(null)).toBe(0)
  })
  test('if entry is number, return a number', () => {
    expect(pxToNumber('33.5px')).toBe(33.5)
  })
})

describe('test async functions', () => {
  test('test async result', async () => {
    let res = await testAsync()
    expect(res).toEqual(1)
  })
})
