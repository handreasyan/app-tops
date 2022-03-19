import {Menu} from './../Menu/Menu'
import Logo from '../logo.svg'
import cn from "classnames";
import styles from './Sidebar.module.css'
import {Search} from "../../components";

interface IProps {
  className?: string
}

export const Sidebar: React.FunctionComponent<IProps> = ({
                                                           children,
                                                           className,
                                                         }) => {
  return (
    <div className={cn(className, styles.sidebar)}>
      <Logo className={styles.logo}/>
      <Search/>
      <Menu/>
    </div>
  )
}
