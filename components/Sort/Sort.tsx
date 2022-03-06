import styles from './Sort.module.css'
import cn from 'classnames'
import SortIcon from './sort.svg'

export enum SortEnum {
  Rating = 'Rating',
  Price = 'Price',
}

export interface SortProps {
  sort: SortEnum
  setSort: (sort: SortEnum) => void
}

export const Sort = ({sort, setSort}: SortProps): JSX.Element => {

  return (
    <div className={styles.sort}>
      <span onClick={() => setSort(SortEnum.Rating)} className={cn({[styles.active]: sort === SortEnum.Rating})}>
        <SortIcon className={styles.sortIcon}/>
        By Rating
      </span>
      <span onClick={() => setSort(SortEnum.Price)} className={cn({[styles.active]: sort === SortEnum.Price})}>
        <SortIcon className={styles.sortIcon}/>
        By Price
      </span>
    </div>
  )
}
