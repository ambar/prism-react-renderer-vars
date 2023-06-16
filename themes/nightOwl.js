export const light = {
  plain: {
    color: 'var(--xPrism-color, #403f53)',
    backgroundColor: 'var(--xPrism-backgroundColor, #FBFBFB)',
  },
  styles: [
    {
      types: [
        'changed',
      ],
      style: {
        color: 'var(--xPrism-changed-color, rgb(162, 191, 252))',
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'deleted',
      ],
      style: {
        color: 'var(--xPrism-deleted-color, rgba(239, 83, 80, 0.56))',
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'inserted',
        'attr-name',
      ],
      style: {
        color: 'var(--xPrism-inserted-color, rgb(72, 118, 214))',
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'comment',
      ],
      style: {
        color: 'var(--xPrism-comment-color, rgb(152, 159, 177))',
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'string',
        'builtin',
        'char',
        'constant',
        'url',
      ],
      style: {
        color: 'var(--xPrism-string-color, rgb(72, 118, 214))',
      },
    },
    {
      types: [
        'variable',
      ],
      style: {
        color: 'var(--xPrism-variable-color, rgb(201, 103, 101))',
      },
    },
    {
      types: [
        'number',
      ],
      style: {
        color: 'var(--xPrism-number-color, rgb(170, 9, 130))',
      },
    },
    {
      types: [
        'punctuation',
      ],
      style: {
        color: 'var(--xPrism-punctuation-color, rgb(153, 76, 195))',
      },
    },
    {
      types: [
        'function',
        'selector',
        'doctype',
      ],
      style: {
        color: 'var(--xPrism-function-color, rgb(153, 76, 195))',
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'class-name',
      ],
      style: {
        color: 'var(--xPrism-class-name-color, rgb(17, 17, 17))',
      },
    },
    {
      types: [
        'tag',
      ],
      style: {
        color: 'var(--xPrism-tag-color, rgb(153, 76, 195))',
      },
    },
    {
      types: [
        'operator',
        'property',
        'keyword',
        'namespace',
      ],
      style: {
        color: 'var(--xPrism-operator-color, rgb(12, 150, 155))',
      },
    },
    {
      types: [
        'boolean',
      ],
      style: {
        color: 'var(--xPrism-boolean-color, rgb(188, 84, 84))',
      },
    },
  ],
}

export const dark = {
  plain: {
    color: 'var(--xPrism-color, #d6deeb)',
    backgroundColor: 'var(--xPrism-backgroundColor, #011627)',
  },
  styles: [
    {
      types: [
        'changed',
      ],
      style: {
        color: 'var(--xPrism-changed-color, rgb(162, 191, 252))',
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'deleted',
      ],
      style: {
        color: 'var(--xPrism-deleted-color, rgba(239, 83, 80, 0.56))',
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'inserted',
        'attr-name',
      ],
      style: {
        color: 'var(--xPrism-inserted-color, rgb(173, 219, 103))',
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'comment',
      ],
      style: {
        color: 'var(--xPrism-comment-color, rgb(99, 119, 119))',
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'string',
        'url',
      ],
      style: {
        color: 'var(--xPrism-string-color, rgb(173, 219, 103))',
      },
    },
    {
      types: [
        'variable',
      ],
      style: {
        color: 'var(--xPrism-variable-color, rgb(214, 222, 235))',
      },
    },
    {
      types: [
        'number',
      ],
      style: {
        color: 'var(--xPrism-number-color, rgb(247, 140, 108))',
      },
    },
    {
      types: [
        'builtin',
        'char',
        'constant',
        'function',
      ],
      style: {
        color: 'var(--xPrism-builtin-color, rgb(130, 170, 255))',
      },
    },
    {
      types: [
        'punctuation',
      ],
      style: {
        color: 'var(--xPrism-punctuation-color, rgb(199, 146, 234))',
      },
    },
    {
      types: [
        'selector',
        'doctype',
      ],
      style: {
        color: 'var(--xPrism-selector-color, rgb(199, 146, 234))',
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'class-name',
      ],
      style: {
        color: 'var(--xPrism-class-name-color, rgb(255, 203, 139))',
      },
    },
    {
      types: [
        'tag',
        'operator',
        'keyword',
      ],
      style: {
        color: 'var(--xPrism-tag-color, rgb(127, 219, 202))',
      },
    },
    {
      types: [
        'boolean',
      ],
      style: {
        color: 'var(--xPrism-boolean-color, rgb(255, 88, 116))',
      },
    },
    {
      types: [
        'property',
      ],
      style: {
        color: 'var(--xPrism-property-color, rgb(128, 203, 196))',
      },
    },
    {
      types: [
        'namespace',
      ],
      style: {
        color: 'var(--xPrism-namespace-color, rgb(178, 204, 214))',
      },
    },
  ],
}