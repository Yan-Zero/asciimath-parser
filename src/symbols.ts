enum TokenTypes {
  NumberLiteral = 'NumberLiteral',
  StringLiteral = 'StringLiteral',
  Text = 'Text',
  Const = 'Const',
  OperatorA = 'OperatorA',
  OperatorOAB = 'OperatorOAB',
  OperatorAOB = 'OperatorAOB',
  OperatorAO = 'OperatorAO',
  LParen = 'LParen',
  RParen = 'RParen',
  Paren = 'Paren',
  Align = 'Align',
  Split = 'Split',
  None = 'None',
}

const SYMBOLMAP: Map<string, {
  type: TokenTypes
  tex: string
}> = new Map([
  ['alpha', { type: TokenTypes.Const, tex: '\\alpha' }],
  ['beta', { type: TokenTypes.Const, tex: '\\beta' }],
  ['gamma', { type: TokenTypes.Const, tex: '\\gamma' }],
  ['Gamma', { type: TokenTypes.Const, tex: '\\Gamma' }],
  ['delta', { type: TokenTypes.Const, tex: '\\delta' }],
  ['Delta', { type: TokenTypes.Const, tex: '\\Delta' }],
  ['epsi', { type: TokenTypes.Const, tex: '\\epsi' }],
  ['epsilon', { type: TokenTypes.Const, tex: '\\epsilon' }],
  ['varepsilon', { type: TokenTypes.Const, tex: '\\varepsilon' }],
  ['zeta', { type: TokenTypes.Const, tex: '\\zeta' }],
  ['eta', { type: TokenTypes.Const, tex: '\\eta' }],
  ['theta', { type: TokenTypes.Const, tex: '\\theta' }],
  ['Theta', { type: TokenTypes.Const, tex: '\\Theta' }],
  ['vartheta', { type: TokenTypes.Const, tex: '\\vartheta' }],
  ['iota', { type: TokenTypes.Const, tex: '\\iota' }],
  ['kappa', { type: TokenTypes.Const, tex: '\\kappa' }],
  ['lambda', { type: TokenTypes.Const, tex: '\\lambda' }],
  ['Lambda', { type: TokenTypes.Const, tex: '\\Lambda' }],
  ['mu', { type: TokenTypes.Const, tex: '\\mu' }],
  ['nu', { type: TokenTypes.Const, tex: '\\nu' }],
  ['xi', { type: TokenTypes.Const, tex: '\\xi' }],
  ['Xi', { type: TokenTypes.Const, tex: '\\Xi' }],
  ['pi', { type: TokenTypes.Const, tex: '\\pi' }],
  ['Pi', { type: TokenTypes.Const, tex: '\\Pi' }],
  ['rho', { type: TokenTypes.Const, tex: '\\rho' }],
  ['sigma', { type: TokenTypes.Const, tex: '\\sigma' }],
  ['Sigma', { type: TokenTypes.Const, tex: '\\Sigma' }],
  ['tau', { type: TokenTypes.Const, tex: '\\tau' }],
  ['upsilon', { type: TokenTypes.Const, tex: '\\upsilon' }],
  ['phi', { type: TokenTypes.Const, tex: '\\phi' }],
  ['varphi', { type: TokenTypes.Const, tex: '\\varphi' }],
  ['Phi', { type: TokenTypes.Const, tex: '\\Phi' }],
  ['chi', { type: TokenTypes.Const, tex: '\\chi' }],
  ['psi', { type: TokenTypes.Const, tex: '\\psi' }],
  ['Psi', { type: TokenTypes.Const, tex: '\\Psi' }],
  ['omega', { type: TokenTypes.Const, tex: '\\omega' }],
  ['Omega', { type: TokenTypes.Const, tex: '\\Omega' }],
  ['***', { type: TokenTypes.Const, tex: '\\star' }],
  ['**', { type: TokenTypes.Const, tex: '\\ast' }],
  ['*', { type: TokenTypes.Const, tex: '\\cdot' }],
  ['//', { type: TokenTypes.Const, tex: '{/}' }],
  ['\\\\', { type: TokenTypes.Const, tex: '\\backslash' }],
  ['setminus', { type: TokenTypes.Const, tex: '\\setminus' }],
  ['xx', { type: TokenTypes.Const, tex: '\\times' }],
  ['|><', { type: TokenTypes.Const, tex: '\\ltimes' }],
  ['><|', { type: TokenTypes.Const, tex: '\\rtimes' }],
  ['|><|', { type: TokenTypes.Const, tex: '\\bowtie' }],
  ['-:', { type: TokenTypes.Const, tex: '\\div' }],
  ['@', { type: TokenTypes.Const, tex: '\\circ' }],
  ['o+', { type: TokenTypes.Const, tex: '\\oplus' }],
  ['ox', { type: TokenTypes.Const, tex: '\\otimes' }],
  ['o.', { type: TokenTypes.Const, tex: '\\odot' }],
  ['sum', { type: TokenTypes.Const, tex: '\\sum' }],
  ['prod', { type: TokenTypes.Const, tex: '\\prod' }],
  ['^^', { type: TokenTypes.Const, tex: '\\wedge' }],
  ['^^^', { type: TokenTypes.Const, tex: '\\bigwedge' }],
  ['vv', { type: TokenTypes.Const, tex: '\\vee' }],
  ['vvv', { type: TokenTypes.Const, tex: '\\bigvee' }],
  ['nn', { type: TokenTypes.Const, tex: '\\cap' }],
  ['nnn', { type: TokenTypes.Const, tex: '\\bigcap' }],
  ['uu', { type: TokenTypes.Const, tex: '\\cup' }],
  ['uuu', { type: TokenTypes.Const, tex: '\\bigcup' }],
  ['!=', { type: TokenTypes.Const, tex: '\\ne' }],
  ['lt', { type: TokenTypes.Const, tex: '<' }],
  ['<=', { type: TokenTypes.Const, tex: '\\leqslant' }],
  ['lt=', { type: TokenTypes.Const, tex: '\\le' }],
  ['gt', { type: TokenTypes.Const, tex: '>' }],
  ['>=', { type: TokenTypes.Const, tex: '\\geqslant' }],
  ['gt=', { type: TokenTypes.Const, tex: '\\ge' }],
  ['-<', { type: TokenTypes.Const, tex: '\\prec' }],
  ['>-', { type: TokenTypes.Const, tex: '\\succ' }],
  ['-<=', { type: TokenTypes.Const, tex: '\\preceq' }],
  ['>-=', { type: TokenTypes.Const, tex: '\\succeq' }],
  ['in', { type: TokenTypes.Const, tex: '\\in' }],
  ['!in', { type: TokenTypes.Const, tex: '\\notin' }],
  ['sub', { type: TokenTypes.Const, tex: '\\subset' }],
  ['sup', { type: TokenTypes.Const, tex: '\\supset' }],
  ['sube', { type: TokenTypes.Const, tex: '\\subseteq' }],
  ['supe', { type: TokenTypes.Const, tex: '\\supseteq' }],
  ['-=', { type: TokenTypes.Const, tex: '\\equiv' }],
  ['~=', { type: TokenTypes.Const, tex: '\\cong' }],
  ['~', { type: TokenTypes.Const, tex: '\\sim' }],
  ['~~', { type: TokenTypes.Const, tex: '\\approx' }],
  ['prop', { type: TokenTypes.Const, tex: '\\propto' }],
  ['complement', { type: TokenTypes.Const, tex: '\\complement' }],

  ['if', { type: TokenTypes.Text, tex: 'if' }],
  ['otherwise', { type: TokenTypes.Text, tex: 'otherwise' }],
  ['and', { type: TokenTypes.Text, tex: 'and' }],
  ['or', { type: TokenTypes.Text, tex: 'or' }],
  ['not', { type: TokenTypes.Const, tex: '\\neg' }],
  ['=>', { type: TokenTypes.Const, tex: '\\implies' }],
  ['<=>', { type: TokenTypes.Const, tex: '\\iff' }],
  ['AA', { type: TokenTypes.Const, tex: '\\forall' }],
  ['EE', { type: TokenTypes.Const, tex: '\\exists' }],
  ['_|_', { type: TokenTypes.Const, tex: '\\bot' }],
  ['TT', { type: TokenTypes.Const, tex: '\\top' }],
  ['|--', { type: TokenTypes.Const, tex: '\\vdash' }],
  ['|==', { type: TokenTypes.Const, tex: '\\models' }],

  ['int', { type: TokenTypes.Const, tex: '\\int' }],
  ['oint', { type: TokenTypes.Const, tex: '\\oint' }],
  ['del', { type: TokenTypes.Const, tex: '\\partial' }],
  ['grad', { type: TokenTypes.Const, tex: '\\nabla' }],
  ['+-', { type: TokenTypes.Const, tex: '\\pm' }],
  ['O/', { type: TokenTypes.Const, tex: '\\varnothing' }],
  ['oo', { type: TokenTypes.Const, tex: '\\infty' }],
  ['aleph', { type: TokenTypes.Const, tex: '\\aleph' }],
  ['...', { type: TokenTypes.Const, tex: '\\ldots' }],
  [':.', { type: TokenTypes.Const, tex: '\\therefore' }],
  [':\'', { type: TokenTypes.Const, tex: '\\because' }],
  ['/_', { type: TokenTypes.Const, tex: '\\angle' }],
  ['/_\\', { type: TokenTypes.Const, tex: '\\triangle' }],
  ['quad', { type: TokenTypes.Const, tex: '\\quad' }],
  ['qquad', { type: TokenTypes.Const, tex: '\\qquad' }],
  ['cdots', { type: TokenTypes.Const, tex: '\\cdots' }],
  ['vdots', { type: TokenTypes.Const, tex: '\\vdots' }],
  ['ddots', { type: TokenTypes.Const, tex: '\\ddots' }],
  ['diamond', { type: TokenTypes.Const, tex: '\\diamond' }],
  ['Lap', { type: TokenTypes.Const, tex: '\\mathscr{L}' }],
  ['square', { type: TokenTypes.Const, tex: '\\square' }],
  ['|__', { type: TokenTypes.Const, tex: '\\lfloor' }],
  ['__|', { type: TokenTypes.Const, tex: '\\rfloor' }],
  ['|~', { type: TokenTypes.Const, tex: '\\lceil' }],
  ['~|', { type: TokenTypes.Const, tex: '\\rceil' }],
  ['CC', { type: TokenTypes.Const, tex: '\\mathbb{C}' }],
  ['NN', { type: TokenTypes.Const, tex: '\\mathbb{N}' }],
  ['QQ', { type: TokenTypes.Const, tex: '\\mathbb{QQ}' }],
  ['RR', { type: TokenTypes.Const, tex: '\\mathbb{R}' }],
  ['ZZ', { type: TokenTypes.Const, tex: '\\mathbb{Z}' }],
  ['\'', { type: TokenTypes.Const, tex: '^{\\prime}' }],
  ['\'\'', { type: TokenTypes.Const, tex: '^{\\prime\\prime}' }],
  ['\'\'\'', { type: TokenTypes.Const, tex: '^{\\prime\\prime\\prime}' }],
  ['lim', { type: TokenTypes.Const, tex: '\\lim' }],
  ['sin', { type: TokenTypes.Const, tex: '\\sin' }],
  ['cos', { type: TokenTypes.Const, tex: '\\cos' }],
  ['tan', { type: TokenTypes.Const, tex: '\\tan' }],
  ['sinh', { type: TokenTypes.Const, tex: '\\sinh' }],
  ['cosh', { type: TokenTypes.Const, tex: '\\cosh' }],
  ['tanh', { type: TokenTypes.Const, tex: '\\tanh' }],
  ['cot', { type: TokenTypes.Const, tex: '\\cot' }],
  ['sec', { type: TokenTypes.Const, tex: '\\sec' }],
  ['csc', { type: TokenTypes.Const, tex: '\\csc' }],
  ['arcsin', { type: TokenTypes.Const, tex: '\\arcsin' }],
  ['arccos', { type: TokenTypes.Const, tex: '\\arccos' }],
  ['arctan', { type: TokenTypes.Const, tex: '\\arctan' }],
  ['coth', { type: TokenTypes.Const, tex: '\\coth' }],
  ['sech', { type: TokenTypes.Const, tex: '\\sech' }],
  ['csch', { type: TokenTypes.Const, tex: '\\csch' }],
  ['exp', { type: TokenTypes.Const, tex: '\\exp' }],
  ['log', { type: TokenTypes.Const, tex: '\\log' }],
  ['ln', { type: TokenTypes.Const, tex: '\\ln' }],
  ['det', { type: TokenTypes.Const, tex: '\\det' }],
  ['dim', { type: TokenTypes.Const, tex: '\\dim' }],
  ['gcd', { type: TokenTypes.Const, tex: '\\gcd' }],
  ['lcm', { type: TokenTypes.Text, tex: 'lcm' }],
  ['min', { type: TokenTypes.Const, tex: '\\min' }],
  ['max', { type: TokenTypes.Const, tex: '\\max' }],
  ['Sup', { type: TokenTypes.Text, tex: 'sup' }],
  ['inf', { type: TokenTypes.Const, tex: '\\inf' }],
  ['mod', { type: TokenTypes.Text, tex: 'mod' }],
  ['sgn', { type: TokenTypes.Text, tex: 'sgn' }],
  ['abs', { type: TokenTypes.OperatorA, tex: '\\left|$1\\right|' }],
  ['norm', { type: TokenTypes.OperatorA, tex: '\\left\\|$1\\right\\|' }],
  ['floor', { type: TokenTypes.OperatorA, tex: '\\left\\lfloor$1\\right\\rfloor' }],
  ['ceil', { type: TokenTypes.OperatorA, tex: '\\left\\lceil$1\\right\\rceil' }],
  ['uarr', { type: TokenTypes.Const, tex: '\\uparrow' }],
  ['uparrow', { type: TokenTypes.Const, tex: '\\uparrow' }],
  ['darr', { type: TokenTypes.Const, tex: '\\downarrow' }],
  ['downarrow', { type: TokenTypes.Const, tex: '\\downarrow' }],
  ['rarr', { type: TokenTypes.Const, tex: '\\rightarrow' }],
  ['rightarrow', { type: TokenTypes.Const, tex: '\\rightarrow' }],
  ['to', { type: TokenTypes.Const, tex: '\\to' }],
  ['->', { type: TokenTypes.Const, tex: '\\to' }],
  ['>->', { type: TokenTypes.Const, tex: '\\rightarrowtail' }],
  ['->>', { type: TokenTypes.Const, tex: '\\twoheadrightarrow' }],
  ['>->>', { type: TokenTypes.Const, tex: '\\twoheadrightarrowtail' }],
  ['|->', { type: TokenTypes.Const, tex: '\\mapsto' }],
  ['larr', { type: TokenTypes.Const, tex: '\\leftarrow' }],
  ['leftarrow', { type: TokenTypes.Const, tex: '\\leftarrow' }],
  ['harr', { type: TokenTypes.Const, tex: '\\leftrightarrow' }],
  ['rArr', { type: TokenTypes.Const, tex: '\\Rightarrow' }],
  ['lArr', { type: TokenTypes.Const, tex: '\\Leftarrow' }],
  ['hArr', { type: TokenTypes.Const, tex: '\\Leftrightarrow' }],
  ['curvArrLt', { type: TokenTypes.Const, tex: '\\curvearrowleft' }],
  ['curvArrRt', { type: TokenTypes.Const, tex: '\\curvearrowright' }],
  ['circArrLt', { type: TokenTypes.Const, tex: '\\circlearrowleft' }],
  ['circArrRt', { type: TokenTypes.Const, tex: '\\circlearrowright' }],

  ['sqrt', { type: TokenTypes.OperatorA, tex: '\\sqrt{ $1 }' }],
  ['root', { type: TokenTypes.OperatorOAB, tex: '\\sqrt[ $1 ]{ $2 }' }],
  ['frac', { type: TokenTypes.OperatorOAB, tex: '\\frac{ $1 }{ $2 }' }],
  ['/', { type: TokenTypes.OperatorAOB, tex: '\\frac{ $1 }{ $2 }' }],
  ['_', { type: TokenTypes.OperatorA, tex: '_{ $1 }' }],
  ['^', { type: TokenTypes.OperatorA, tex: '^{ $1 }' }],
  ['stackrel', { type: TokenTypes.OperatorOAB, tex: '\\stackrel{ $1 }{ $2 }' }],
  ['overset', { type: TokenTypes.OperatorOAB, tex: '\\overset{ $1 }{ $2 }' }],
  ['underset', { type: TokenTypes.OperatorOAB, tex: '\\underset{ $1 }{ $2 }' }],
  ['hat', { type: TokenTypes.OperatorA, tex: '\\hat{ $1 }' }],
  ['widehat', { type: TokenTypes.OperatorA, tex: '\\widehat{ $1 }' }],
  ['arc', { type: TokenTypes.OperatorA, tex: '\\arc{ $1 }' }],
  ['bar', { type: TokenTypes.OperatorA, tex: '\\bar{ $1 }' }],
  ['vec', { type: TokenTypes.OperatorA, tex: '\\vec{ $1 }' }],
  ['tilde', { type: TokenTypes.OperatorA, tex: '\\tilde{ $1 }' }],
  ['dot', { type: TokenTypes.OperatorA, tex: '\\dot{ $1 }' }],
  ['ddot', { type: TokenTypes.OperatorA, tex: '\\ddot{ $1 }' }],
  ['ul', { type: TokenTypes.OperatorA, tex: '\\underline{ $1 }' }],
  ['underbrace', { type: TokenTypes.OperatorA, tex: '\\underbrace{ $1 }' }],
  ['overbrace', { type: TokenTypes.OperatorA, tex: '\\overbrace{ $1 }' }],
  ['color', { type: TokenTypes.OperatorOAB, tex: '\\color{ $1 }{ $2 }' }],
  ['phantom', { type: TokenTypes.OperatorA, tex: '\\phantom{ $1 }' }],
  ['text', { type: TokenTypes.OperatorA, tex: '\\text{ $1 }' }],
  ['mbox', { type: TokenTypes.OperatorA, tex: '\\mbox{ $1 }' }],
  ['op', { type: TokenTypes.OperatorA, tex: '\\operatorname{ $1 }' }],
  ['cancel', { type: TokenTypes.OperatorA, tex: '\\cancel{ $1 }' }],
  ['bb', { type: TokenTypes.OperatorA, tex: '\\mathbf{ $1 }' }],
  ['mathbf', { type: TokenTypes.OperatorA, tex: '\\mathbf{ $1 }' }],
  ['sf', { type: TokenTypes.OperatorA, tex: '\\mathsf{ $1 }' }],
  ['mathsf', { type: TokenTypes.OperatorA, tex: '\\mathsf{ $1 }' }],
  ['bbb', { type: TokenTypes.OperatorA, tex: '\\mathbb{ $1 }' }],
  ['mathbb', { type: TokenTypes.OperatorA, tex: '\\mathbb{ $1 }' }],
  ['cc', { type: TokenTypes.OperatorA, tex: '\\mathcal{ $1 }' }],
  ['mathcal', { type: TokenTypes.OperatorA, tex: '\\mathcal{ $1 }' }],
  ['tt', { type: TokenTypes.OperatorA, tex: '\\mathtt{ $1 }' }],
  ['mathtt', { type: TokenTypes.OperatorA, tex: '\\mathtt{ $1 }' }],
  ['fr', { type: TokenTypes.OperatorA, tex: '\\mathfrak{ $1 }' }],
  ['bm', { type: TokenTypes.OperatorA, tex: '\\boldsymbol{ $1 }' }],
  ['rm', { type: TokenTypes.OperatorA, tex: '\\mathrm{ $1 }' }],

  ['iint', { type: TokenTypes.Const, tex: '\\iint' }],
  ['iiint', { type: TokenTypes.Const, tex: '\\iiint' }],
  ['oiint', { type: TokenTypes.Const, tex: '\u222F' }],
  ['oiiint', { type: TokenTypes.Const, tex: '\u2230' }],
  ['laplace', { type: TokenTypes.Const, tex: '\\Delta' }],
  ['===', { type: TokenTypes.OperatorA, tex: '\\xlongequal{ $1 }' }],
  ['||', { type: TokenTypes.Const, tex: '\\Vert' }],
  ['!||', { type: TokenTypes.Const, tex: '\u2226' }],
  ['S=', { type: TokenTypes.Const, tex: '\u224C' }],
  ['S~', { type: TokenTypes.Const, tex: '\u223D' }],
  ['!-=', { type: TokenTypes.Const, tex: '\\not\\equiv' }],
  ['!|', { type: TokenTypes.Const, tex: '\u2224' }],
  ['!', { type: TokenTypes.OperatorAO, tex: '!' }],
  ['!!', { type: TokenTypes.OperatorAO, tex: '!!' }],
  ['!sube', { type: TokenTypes.Const, tex: '\\not\\sube' }],
  ['!supe', { type: TokenTypes.Const, tex: '\\not\\supe' }],
  ['subne', { type: TokenTypes.Const, tex: '\u228A' }],
  ['supne', { type: TokenTypes.Const, tex: '\u228B' }],
  ['lhd', { type: TokenTypes.Const, tex: '\\lhd' }],
  ['rhd', { type: TokenTypes.Const, tex: '\\rhd' }],
  ['normal', { type: TokenTypes.Const, tex: '\\unlhd' }],
  ['rnormal', { type: TokenTypes.Const, tex: '\\unrhd' }],

  ['(', { type: TokenTypes.LParen, tex: '(' }],
  [')', { type: TokenTypes.RParen, tex: ')' }],
  ['[', { type: TokenTypes.LParen, tex: '[' }],
  [']', { type: TokenTypes.RParen, tex: ']' }],
  ['{', { type: TokenTypes.LParen, tex: '\\lbrace' }],
  ['}', { type: TokenTypes.RParen, tex: '\\rbrace' }],
  ['(:', { type: TokenTypes.LParen, tex: '\\langle' }],
  [':)', { type: TokenTypes.RParen, tex: '\\rangle' }],
  ['{:', { type: TokenTypes.LParen, tex: '.' }],
  [':}', { type: TokenTypes.RParen, tex: '.' }],
  // 可以作为单独使用，也可作为配对使用
  ['|', { type: TokenTypes.Paren, tex: '|' }],
  // 需要配对使用
  // ['"', { type: TokenTypes.Paren, tex: '\\text{ $1 }' }],

  ['&', { type: TokenTypes.Align, tex: '&' }],
  [',', { type: TokenTypes.Split, tex: ',' }],
  [';', { type: TokenTypes.Split, tex: ';' }],

])

export {
  TokenTypes,
  SYMBOLMAP,
}