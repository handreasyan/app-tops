import styles from './Search.module.css'
import cn from 'classnames'
import React, {DetailedHTMLProps, HTMLAttributes, KeyboardEventHandler, useState} from 'react'
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import GlassIcon from './glass.svg'
import {useRouter} from "next/router";

export interface SearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Search: React.FC<SearchProps> = ({className, ...props}) => {
  const [search, setSearch] = useState('')

  const router = useRouter()

  const goToSearch = () => router.push({pathname: '/search', query: {q: search}})
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') goToSearch()
  }

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        placeholder={'Search ...'}
        className={styles.input}
        value={search}
        onKeyPress={handleKeyDown}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button apperance={'primary'} className={styles.button} onClick={goToSearch}><GlassIcon/></Button>
    </div>
  )
}
