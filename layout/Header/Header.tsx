import styles from './Header.module.css'

interface IProps {
  className?: string
}

export const Header: React.FunctionComponent<IProps> = ({
  children,
  className,
}) => {
  return <div className={className}>Header</div>
}
