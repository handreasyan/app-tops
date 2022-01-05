import { PtagProps } from './Ptag.props'
import styles from './Ptag.module.css'
import cn from 'classnames'
export const Ptag = ({
  size = 'm',
  children,
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(className, styles.p, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  )
}
