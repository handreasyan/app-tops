import React from 'react';
import {ITopPageModel, TopLevelCategory} from "../../interfaces/page.interface";
import {IProductModel} from "../../interfaces/product.interface";
import {Card, HhData, Htag, Tag} from "../../components";
import styles from './TopPageComponent.module.css'

interface TopPageComponentProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[]
}

const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={'h1'}> {page.title} </Htag>
        {products && <Tag color='grey' size='m'>{products.length}</Tag>}
        <span>Sort</span>
      </div>

      <div>
        {products && products.map(prod => {
          return (
            <div key={prod._id}>
              {prod.title}
            </div>
          )
        })}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag={'h2'}>Jobs - {page.category}</Htag>
        {products && <Tag color='red' size='m'>hh.ru</Tag>}
      </div>

      <HhData {...page.hh}/>
    </div>
  );
};

export default TopPageComponent;

