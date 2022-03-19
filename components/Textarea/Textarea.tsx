import styles from './Textarea.module.css'
import cn from 'classnames'

import {DetailedHTMLProps, TextareaHTMLAttributes} from 'react'

export interface TextareaProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement> {

}

export const Textarea = ({className, ...props}: TextareaProps): JSX.Element => {
  return (
    <textarea className={cn(className, styles.textarea)} {...props}/>
  )
}
