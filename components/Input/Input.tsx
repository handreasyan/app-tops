import cn from 'classnames'
import styles from './Input.module.css'

import {DetailedHTMLProps, InputHTMLAttributes} from 'react'

export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement> {

}

export const Input = ({className, ...props}: InputProps): JSX.Element => {
  return (
    <input className={cn(className, styles.input)} {...props}/>
  )
}
