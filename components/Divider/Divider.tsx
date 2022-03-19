import styles from './Divider.module.css'
import cn from 'classnames'
import {IProductModel} from "../../interfaces/product.interface";
import React from "react";


export interface DividerProps {
  className?: string
}


export const Divider: React.FC<DividerProps> = ({className}) => {
  return <hr className={cn(className, styles.hr)}/>
}
