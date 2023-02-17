import { describe, expect, it } from 'vitest'
import { AsciiMath } from '../src'

describe('special cases', () => {
  const am = new AsciiMath({ display: false })
  it('should not cause infinite loop in color', () => {
    expect(am.toTex('color(😀\''))
      .toMatchInlineSnapshot('"{ \\\\color{} 😀 } ^{\\\\prime}"')
    expect(am.toTex('color (pink) (123)'))
      .toMatchInlineSnapshot('"{ \\\\color{pink} 123 }"')
  })
  it('should parse e to the 3.14159', () => {
    expect(am.toTex('"e"^3.1415'))
      .toMatchInlineSnapshot('"\\\\text{e} ^{ 3.1415 }"')
  })
  it('should parse minus', () => {
    expect(am.toTex('a-b-c/d'))
      .toMatchInlineSnapshot('"a {-b} {-\\\\frac{ c }{ d }}"')
  })
  it('should parse pink color', () => {
    expect(am.toTex('color(pink)(abc)'))
      .toMatchInlineSnapshot('"{ \\\\color{pink} ab c }"')
  })
  it('should generate dd f x', () => {
    expect(am.toTex('dd f x'))
      .toMatchInlineSnapshot('"\\\\frac{ \\\\text{d} f }{ \\\\text{d} x }"')
    expect(am.toTex('dd^3 f x'))
      .toMatchInlineSnapshot('"\\\\frac{ \\\\text{d} ^{ 3 } f }{ \\\\text{d} x ^{ 3 } }"')
  })
})

describe('matrix', () => {
  const am = new AsciiMath({ display: false })
  it('should parse matrix without right paren', () => {
    expect(am.toTex('[[a,b;c,d]')).toMatchSnapshot()
  })
})
