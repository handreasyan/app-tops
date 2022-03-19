import styles from './Product.module.css'
import cn from 'classnames'
import React from 'react'
import {IProductModel} from "../../interfaces/product.interface";
import {Card} from "../Card/Card";
import {Rating} from "../Rating/Rating";
import {Tag} from "../Tag/Tag";
import {Button} from "../Button/Button";
import {declOfNum, priceRu} from "../../helpers/helpers";
import {Divider} from "../Divider/Divider";

export interface ProductProps {
  product: IProductModel
}

// next lesson => 15-08
// figma => https://www.figma.com/file/eHIyKZXUUtMf1BQiuv6tTA/%D0%9A%D1%83%D1%80%D1%81-2---NextJS?node-id=0%3A1

export const Product: React.FC<ProductProps> = ({product}) => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}/>
      </div>

      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice && (
          <Tag className={styles.oldPrice} color={'green'}>
            {priceRu(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}
        <span className={styles.month}>/Mth</span>
      </div>

      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating}/>
      </div>

      <div className={styles.tags}>
        {product.categories.map(category => {
          return <Tag color={'ghost'} className={styles.category} key={category}>{category}</Tag>
        })}
      </div>

      <div className={styles.priceTitle}>Price</div>
      <div className={styles.creditTitle}>Credit</div>
      <div className={styles.rateTitle}>
        {product.reviewCount} {declOfNum(product.reviewCount, ['rate', 'rates', 'rates'])}
      </div>

      <Divider className={styles.hr}/>

      <div className={styles.description}>{product.description}</div>

      <div className={styles.feature}>
        {product.characteristics.map(c => (
          <div className={styles.characteristics} key={c.name}>
            <span className={styles.characteristicsName}>{c.name}</span>
            <span className={styles.characteristicsDots}/>
            <span className={styles.characteristicsValue}>{c.value}</span>
          </div>
        ))}
      </div>

      <div className={styles.advBlock}>
        {product.advantages && (
          <div className={styles.advantages}>
            <div className={styles.advTitle}>Advantages</div>
            <div>{product.advantages}</div>
          </div>
        )}
        {product.disadvantages && (
          <div className={styles.disadvantages}>
            <div className={styles.dAdvTitle}>Disadvantages</div>
            <div>{product.disadvantages}</div>
          </div>
        )}
      </div>

      <Divider className={styles.hr}/>

      <div className={styles.actions}>
        <Button apperance={'primary'}>Learn More</Button>
        <Button apperance={'ghost'} arrow={'right'} className={styles.reviewBtn}>Read reviews</Button>
      </div>

    </Card>
  )
}
