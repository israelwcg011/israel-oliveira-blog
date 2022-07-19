import React from 'react'
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'

const LaTeX =
  'We give illustrations for the three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.'

const PostDetail2 = ({ post }) => {
  console.log(post)
  return <Latex>{LaTeX}</Latex>
}

export default PostDetail2
