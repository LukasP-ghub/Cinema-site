import React from 'react'

interface movieLabelType {
  addStyles: string,
  label: 'premiere' | 'dream' | string,
}

type variantsType = {
  [prop: string]: {
    styles: string,
    content: string,
  }
}

const MovieLabel: React.FC<movieLabelType> = ({ label, addStyles }) => {

  const variants: variantsType = {
    premiere: { styles: 'text-white bg-red-600 uppercase', content: 'premiera' },
    dream: { styles: 'text-white bg-cyan', content: 'Dream' },
    normal: { styles: 'text-white bg-blue-600', content: label },
  }

  const variant = variants[label] || variants.normal;

  return (
    <p className={`${variant.styles} ${addStyles} rounded-sm text-center p-0.5 text-xs`}>
      {variant.content}
    </p>
  )
}

export default MovieLabel;
