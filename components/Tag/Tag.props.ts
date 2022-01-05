import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm'
  children: ReactNode
  className?: string
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary'
  href?: string
}
