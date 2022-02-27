import styles from './Card.module.css'
import cn from 'classnames'

import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react'

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,
    HTMLDivElement> {
  color?: 'white' | 'blue'
  children: ReactNode
}

export const Card = ({
                       color = 'white',
                       children,
                       className,
                       ...props
                     }: CardProps): JSX.Element => {
  return (
    <div {...props} className={cn(className, styles.card, {[styles.blue]: color == 'blue'})}>
      {children}
    </div>
  )
}
