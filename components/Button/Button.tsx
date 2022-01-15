import styles from './Button.module.css'
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
  apperance: 'primary' | 'ghost'
  arrow?: 'right' | 'down' | 'none'
}

export const Button = ({
  apperance,
  children,
  className,
  arrow = 'none',
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: apperance === 'primary',
        [styles.ghost]: apperance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  )
}
