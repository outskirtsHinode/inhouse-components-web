import React, { FC, ReactNode } from 'react'
import { SemanticColor } from './types';

export interface Props {
  children: ReactNode;
  color?: Extract<SemanticColor, "negative">;
}

const ValidationMessage: FC<Props> = (props: Props) => {
  const wrapperClasses = ['in-validation-message']
  const {
    color = "negative",
    children
  } = props

  wrapperClasses.push(`-color-${color}`)

  return (
    <div className={wrapperClasses.join(' ')}>
      {children}
    </div>
  )
}

export default ValidationMessage
