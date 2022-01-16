import styles from './Sidebar.module.css'

interface IProps {
  className?: string
}
export const Sidebar: React.FunctionComponent<IProps> = ({
  children,
  className,
}) => {
  return <div className={className}>Sidebar</div>
}
