import {ITopPageAdvantage} from "../../interfaces/page.interface";
import React from 'react'
import {Htag} from "../Htag/Htag";
import styles from './Advantages.module.css'
import CheckIcon from './checked.svg'

export interface AdvantagesProps {
  advantages: ITopPageAdvantage[]
}


export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map(a => {
        return (
          <div key={a._id} className={styles.advantage}>
            <CheckIcon/>
            <div className={styles.title}>{a.title}</div>
            <hr className={styles.vLine}/>
            <div className={styles.vLine}>{a.description}</div>
          </div>
        )
      })}
    </>
  )
}
