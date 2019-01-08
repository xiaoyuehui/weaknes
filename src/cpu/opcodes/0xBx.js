/* 0xb0 - 0xbF */
export default [
  /* 0xb0: BCS implied */
  { instruction: 'BCS', addressing: 'relative', cycle: 2 },
  /* 0xb1: LDA indirectIndex */
  { instruction: 'LDA', addressing: 'indirectIndex', cycle: 5 },
  /* TODO This is not implemented */
  { instruction: 'STP', addressing: 'implied', cycle: 3 },
  /* TODO This is not implemented */
  { instruction: 'LAX', addressing: 'indirectIndex', cycle: 5 },
  /* 0xb4: LDY zeropageX */
  { instruction: 'LDY', addressing: 'zeropageX', cycle: 4 },
  /* 0xb5: LDA zeropageX */
  { instruction: 'LDA', addressing: 'zeropageX', cycle: 4 },
  /* 0xb6: LDX zeropageY */
  { instruction: 'LDX', addressing: 'zeropageY', cycle: 4 },
  /* TODO This is not implemented */
  { instruction: 'LAX', addressing: 'zeropageY', cycle: 4 },
  /* 0xb8: CLV implied */
  { instruction: 'CLV', addressing: 'implied', cycle: 2 },
  /* 0xb9: LDA absoluteY */
  { instruction: 'LDA', addressing: 'absoluteY', cycle: 4 },
  /* 0xba: TSX implied */
  { instruction: 'TSX', addressing: 'implied', cycle: 4 },
  /* TODO This is not implemented */
  { instruction: 'LAS', addressing: 'absoluteY', cycle: 4 },
  /* 0xbc: LDY absoluteX*/
  { instruction: 'LDY', addressing: 'absoluteX', cycle: 4 },
  /* 0xbd: LDA bsoluteX */
  { instruction: 'LDA', addressing: 'absoluteX', cycle: 4 },
  /* 0xbe: LDX absoluteY*/
  { instruction: 'LDX', addressing: 'absoluteY', cycle: 4 },
  /* TODO This is not implemented */
  { instruction: 'LAX', addressing: 'absoluteY', cycle: 4 }
]
