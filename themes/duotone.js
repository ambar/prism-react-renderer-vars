exports.light = {
  plain: {
    backgroundColor: 'var(--xPrism-backgroundColor, #faf8f5)',
    color: 'var(--xPrism-color, #728fcb)',
  },
  styles: [
    {
      types: [
        'comment',
        'prolog',
        'doctype',
        'cdata',
        'punctuation',
      ],
      style: {
        color: 'var(--xPrism-comment-color, #b6ad9a)',
      },
    },
    {
      types: [
        'namespace',
      ],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: [
        'tag',
        'operator',
        'number',
      ],
      style: {
        color: 'var(--xPrism-tag-color, #063289)',
      },
    },
    {
      types: [
        'property',
        'function',
      ],
      style: {
        color: 'var(--xPrism-property-color, #b29762)',
      },
    },
    {
      types: [
        'tag-id',
        'selector',
        'atrule-id',
      ],
      style: {
        color: 'var(--xPrism-tag-id-color, #2d2006)',
      },
    },
    {
      types: [
        'attr-name',
      ],
      style: {
        color: 'var(--xPrism-attr-name-color, #896724)',
      },
    },
    {
      types: [
        'boolean',
        'string',
        'entity',
        'url',
        'attr-value',
        'keyword',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'atrule',
      ],
      style: {
        color: 'var(--xPrism-boolean-color, #728fcb)',
      },
    },
    {
      types: [
        'placeholder',
        'variable',
      ],
      style: {
        color: 'var(--xPrism-placeholder-color, #93abdc)',
      },
    },
    {
      types: [
        'deleted',
      ],
      style: {
        textDecorationLine: 'line-through',
      },
    },
    {
      types: [
        'inserted',
      ],
      style: {
        textDecorationLine: 'underline',
      },
    },
    {
      types: [
        'italic',
      ],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'important',
        'bold',
      ],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: [
        'important',
      ],
      style: {
        color: 'var(--xPrism-important-color, #896724)',
      },
    },
  ],
}

exports.dark = {
  plain: {
    backgroundColor: 'var(--xPrism-backgroundColor, #2a2734)',
    color: 'var(--xPrism-color, #9a86fd)',
  },
  styles: [
    {
      types: [
        'comment',
        'prolog',
        'doctype',
        'cdata',
        'punctuation',
      ],
      style: {
        color: 'var(--xPrism-comment-color, #6c6783)',
      },
    },
    {
      types: [
        'namespace',
      ],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: [
        'tag',
        'operator',
        'number',
      ],
      style: {
        color: 'var(--xPrism-tag-color, #e09142)',
      },
    },
    {
      types: [
        'property',
        'function',
      ],
      style: {
        color: 'var(--xPrism-property-color, #9a86fd)',
      },
    },
    {
      types: [
        'tag-id',
        'selector',
        'atrule-id',
      ],
      style: {
        color: 'var(--xPrism-tag-id-color, #eeebff)',
      },
    },
    {
      types: [
        'attr-name',
      ],
      style: {
        color: 'var(--xPrism-attr-name-color, #c4b9fe)',
      },
    },
    {
      types: [
        'boolean',
        'string',
        'entity',
        'url',
        'attr-value',
        'keyword',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'atrule',
        'placeholder',
        'variable',
      ],
      style: {
        color: 'var(--xPrism-boolean-color, #ffcc99)',
      },
    },
    {
      types: [
        'deleted',
      ],
      style: {
        textDecorationLine: 'line-through',
      },
    },
    {
      types: [
        'inserted',
      ],
      style: {
        textDecorationLine: 'underline',
      },
    },
    {
      types: [
        'italic',
      ],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'important',
        'bold',
      ],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: [
        'important',
      ],
      style: {
        color: 'var(--xPrism-important-color, #c4b9fe)',
      },
    },
  ],
}