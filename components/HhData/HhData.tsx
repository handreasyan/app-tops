import styles from './HhData.module.css'
import React from 'react'
import {IHhData} from "../../interfaces/page.interface";
import {Card} from "../Card/Card";
import RateIcon from './rate.svg'
import {priceRu} from "../../helpers/helpers";

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
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled}/>
            <RateIcon/>
            <RateIcon/>
          </div>
        </div>

        <div>
          <div className={styles.title}>Middle</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled}/>
            <RateIcon className={styles.filled}/>
            <RateIcon/>
          </div>
        </div>

        <div>
          <div className={styles.title}>Senior</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled}/>
            <RateIcon className={styles.filled}/>
            <RateIcon className={styles.filled}/>
          </div>
        </div>
      </Card>
    </div>
  )
}
