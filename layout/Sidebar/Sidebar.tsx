import styles from './Sidebar.module.css'
import { Menu } from './../Menu/Menu'

interface IProps {
  className?: string
}
export const Sidebar: React.FunctionComponent<IProps> = ({
  children,
  className,
}) => {
  return (
    <div className={className}>
      <Menu />
    </div>
  )
}
