exports.light = {
  plain: {
    color: 'var(--xPrism-color, #000000)',
    backgroundColor: 'var(--xPrism-backgroundColor, #ffffff)',
  },
  styles: [
    {
      types: [
        'comment',
      ],
      style: {
        color: 'var(--xPrism-comment-color, rgb(0, 128, 0))',
      },
    },
    {
      types: [
        'builtin',
      ],
      style: {
        color: 'var(--xPrism-builtin-color, rgb(0, 112, 193))',
      },
    },
    {
      types: [
        'number',
        'variable',
        'inserted',
      ],
      style: {
        color: 'var(--xPrism-number-color, rgb(9, 134, 88))',
      },
    },
    {
      types: [
        'operator',
      ],
      style: {
        color: 'var(--xPrism-operator-color, rgb(0, 0, 0))',
      },
    },
    {
      types: [
        'constant',
        'char',
      ],
      style: {
        color: 'var(--xPrism-constant-color, rgb(129, 31, 63))',
      },
    },
    {
      types: [
        'tag',
      ],
      style: {
        color: 'var(--xPrism-tag-color, rgb(128, 0, 0))',
      },
    },
    {
      types: [
        'attr-name',
      ],
      style: {
        color: 'var(--xPrism-attr-name-color, rgb(255, 0, 0))',
      },
    },
    {
      types: [
        'deleted',
        'string',
      ],
      style: {
        color: 'var(--xPrism-deleted-color, rgb(163, 21, 21))',
      },
    },
    {
      types: [
        'changed',
        'punctuation',
      ],
      style: {
        color: 'var(--xPrism-changed-color, rgb(4, 81, 165))',
      },
    },
    {
      types: [
        'function',
        'keyword',
      ],
      style: {
        color: 'var(--xPrism-function-color, rgb(0, 0, 255))',
      },
    },
    {
      types: [
        'class-name',
      ],
      style: {
        color: 'var(--xPrism-class-name-color, rgb(38, 127, 153))',
      },
    },
  ],
}

exports.dark = {
  plain: {
    color: 'var(--xPrism-color, #9CDCFE)',
    backgroundColor: 'var(--xPrism-backgroundColor, #1E1E1E)',
  },
  styles: [
    {
      types: [
        'prolog',
      ],
      style: {
        color: 'var(--xPrism-prolog-color, rgb(0, 0, 128))',
      },
    },
    {
      types: [
        'comment',
      ],
      style: {
        color: 'var(--xPrism-comment-color, rgb(106, 153, 85))',
      },
    },
    {
      types: [
        'builtin',
        'changed',
        'keyword',
        'interpolation-punctuation',
      ],
      style: {
        color: 'var(--xPrism-builtin-color, rgb(86, 156, 214))',
      },
    },
    {
      types: [
        'number',
        'inserted',
      ],
      style: {
        color: 'var(--xPrism-number-color, rgb(181, 206, 168))',
      },
    },
    {
      types: [
        'constant',
      ],
      style: {
        color: 'var(--xPrism-constant-color, rgb(100, 102, 149))',
      },
    },
    {
      types: [
        'attr-name',
        'variable',
      ],
      style: {
        color: 'var(--xPrism-attr-name-color, rgb(156, 220, 254))',
      },
    },
    {
      types: [
        'deleted',
        'string',
        'attr-value',
        'template-punctuation',
      ],
      style: {
        color: 'var(--xPrism-deleted-color, rgb(206, 145, 120))',
      },
    },
    {
      types: [
        'selector',
      ],
      style: {
        color: 'var(--xPrism-selector-color, rgb(215, 186, 125))',
      },
    },
    {
      types: [
        'tag',
      ],
      style: {
        color: 'var(--xPrism-tag-color, rgb(78, 201, 176))',
      },
    },
    {
      types: [
        'tag',
      ],
      languages: [
        'markup',
      ],
      style: {
        color: 'var(--xPrism-tag-markup-color, rgb(86, 156, 214))',
      },
    },
    {
      types: [
        'punctuation',
        'operator',
      ],
      style: {
        color: 'var(--xPrism-punctuation-color, rgb(212, 212, 212))',
      },
    },
    {
      types: [
        'punctuation',
      ],
      languages: [
        'markup',
      ],
      style: {
        color: 'var(--xPrism-punctuation-markup-color, #808080)',
      },
    },
    {
      types: [
        'function',
      ],
      style: {
        color: 'var(--xPrism-function-color, rgb(220, 220, 170))',
      },
    },
    {
      types: [
        'class-name',
      ],
      style: {
        color: 'var(--xPrism-class-name-color, rgb(78, 201, 176))',
      },
    },
    {
      types: [
        'char',
      ],
      style: {
        color: 'var(--xPrism-char-color, rgb(209, 105, 105))',
      },
    },
  ],
}