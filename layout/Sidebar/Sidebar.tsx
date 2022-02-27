import {Menu} from './../Menu/Menu'
import Logo from '../logo.svg'
import cn from "classnames";
import styles from './Sidebar.module.css'

interface IProps {
  className?: string
}

// next lesson 14.01

export const Sidebar: React.FunctionComponent<IProps> = ({
                                                           children,
                                                           className,
                                                         }) => {
  return (
    <div className={cn(className, styles.sidebar)}>
      <Logo className={styles.logo}/>
      <div>Seachr</div>
      <Menu/>
    </div>
  )
}
