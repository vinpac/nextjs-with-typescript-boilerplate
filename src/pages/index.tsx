import React from 'react'
import cx from 'classnames'

interface Props {
  className?: string
}

const Index: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cx(
        'container my-10 rounded-lg p-32 bg-gray-200 text-6xl font-bold text-center',
        className,
      )}
    >
      BLANK
    </div>
  )
}

export type IndexProps = Props
export default Index
