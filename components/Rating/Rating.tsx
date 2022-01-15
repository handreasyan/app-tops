import { useState, useEffect, KeyboardEvent } from 'react'
import styles from './Rating.module.css'
import StarIcon from './star.svg'
import cn from 'classnames'

interface IProps {
  rating: number
  isEditable?: boolean
  setRating?: (rating: number) => void
}

export const Rating: React.FunctionComponent<IProps> = ({
  rating,
  isEditable = false,
  setRating,
}) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  )

  const changeDisplay = (i: number) => {
    if (!isEditable) return

    constructRating(i)
  }

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return
    setRating(i)
  }

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) return
    setRating(i)
  }

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r, i) => {
      return (
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      )
    })
    setRatingArray(updatedArray)
  }

  useEffect(() => {
    constructRating(rating)
  }, [rating])

  return (
    <div>
      {ratingArray.map((rating, i) => {
        return <span key={i}>{rating}</span>
      })}
    </div>
  )
}
