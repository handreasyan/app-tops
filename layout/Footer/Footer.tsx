import styles from './Footer.module.css'
import cn from 'classnames'

interface IProps {
  className?: string
}

export const Footer: React.FunctionComponent<IProps> = ({
  children,
  className,
}) => {
  return (
    <footer className={cn(className, styles.footer)}>
      <div>OwlTop © 2022 - {new Date().getFullYear()} Все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  )
}
