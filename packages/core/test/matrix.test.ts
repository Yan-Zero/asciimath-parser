import { describe, expect, it } from 'vitest'
import { AsciiMath } from '../src'
import { codegen } from '../src/codegen'
import { parser } from '../src/parser'
import { createTrie } from '../src/trie'

const code = `
[1, 0, cdots, 0;
s_1, b_11, cdots, b_(1n);
vdots, vdots, , vdots;
s_n, b_(n1), cdots, b_(n n)]`

describe('matrix with empty el', () => {
//   const am = new AsciiMath({ display: false })
  it('should generate ast', () => {
    const trie = createTrie()
    const tokens = trie.tryParsingAll(code)
    const ast = parser(tokens)
    expect(tokens).toMatchSnapshot()
    expect(ast).toMatchSnapshot()
    expect(codegen(ast)).toMatchInlineSnapshot('"\\\\left[ \\\\begin{array}{cccc} 1 & 0 & \\\\cdots & 0\\\\\\\\s _{ 1 } & b _{ 11 } & \\\\cdots & b _{ 1 n }\\\\\\\\\\\\vdots & \\\\vdots &  & \\\\vdots\\\\\\\\s _{ n } & b _{ n 1 } & \\\\cdots & b _{ n n } \\\\\\\\ \\\\end{array} \\\\right]"')
  })
})

describe('centered matrix with no braces', () => {
  it('should generate centered matrix', () => {
    const trie = createTrie()
    const tokens = trie.tryParsingAll('{: a, b; c, d :}')
    const ast = parser(tokens)
    expect(tokens).toMatchSnapshot()
    expect(ast).toMatchSnapshot()
    expect(codegen(ast)).toMatchInlineSnapshot('"\\\\left. \\\\begin{array}{cc} a & b\\\\\\\\c & d \\\\\\\\ \\\\end{array} \\\\right."')
  })

  it('should remove () of matrix in superscript', () => {
    const am = new AsciiMath({ display: false })
    expect(am.toTex('sum_(a;b)')).toMatchInlineSnapshot('"\\\\sum _{  \\\\begin{array}{c} a\\\\\\\\b \\\\\\\\ \\\\end{array}  }"')
  })
})