import React from 'react'

const CodePen = ({ hash, label, github, height = 600, width = '100%' }) => (
  <iframe
    height={height}
    scrolling="no"
    title={label}
    src={`//codepen.io/dentemple/embed/${hash}/?height=${height}&theme-id=0&default-tab=result&embed-version=2`}
    frameBorder="no"
    allowTransparency="true"
    allowFullScreen="true"
    style={{ width: width }}>
    See the Pen{' '}
    <a href={`https://codepen.io/dentemple/pen/${hash}/`}>{label}</a> by Den
    Temple (<a href="https://codepen.io/dentemple">@dentemple</a>) on{' '}
    <a href="https://codepen.io">CodePen</a>.
  </iframe>
)

export default CodePen
