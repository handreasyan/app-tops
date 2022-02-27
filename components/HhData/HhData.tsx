import styles from './HhData.module.css'
import React from 'react'
import {IHhData} from "../../interfaces/page.interface";
import {Card} from "../Card/Card";
import RateIcon from './rate.svg'

export interface HhDataProps extends IHhData {
}


export const HhData = ({count, juniorSalary, middleSalary, seniorSalary}: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>All Jobs</div>
        <div className={styles.countValue}>{count}</div>
      </Card>

      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Junior</div>
          <div className={styles.salaryValue}>{juniorSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filed}/>
            <RateIcon/>
            <RateIcon/>
          </div>
        </div>

        <div>
          <div className={styles.title}>Middle</div>
          <div className={styles.salaryValue}>{middleSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filed}/>
            <RateIcon className={styles.filed}/>
            <RateIcon/>
          </div>
        </div>

        <div>
          <div className={styles.title}>Senior</div>
          <div className={styles.salaryValue}>{seniorSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filed}/>
            <RateIcon className={styles.filed}/>
            <RateIcon className={styles.filed}/>
          </div>
        </div>
      </Card>
    </div>
  )
}
