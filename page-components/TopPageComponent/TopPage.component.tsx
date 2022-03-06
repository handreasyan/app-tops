import React, {useReducer} from 'react';
import {ITopPageModel, TopLevelCategory} from "../../interfaces/page.interface";
import {IProductModel} from "../../interfaces/product.interface";
import {Advantages, HhData, Htag, Sort, SortEnum, Tag} from "../../components";
import styles from './TopPageComponent.module.css'
import {sortReducer} from "./sort.reducer";

interface TopPageComponentProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[]
}

const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps) => {
  const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating})

  const setSort = (type: SortEnum) => dispatchSort({type})

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={'h1'}> {page.title} </Htag>
        {products && <Tag color='grey' size='m'>{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort}/>
      </div>

      <div>
        {sortedProducts && sortedProducts.map(prod => <div key={prod._id}> {prod.title}</div>)}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag={'h2'}>Jobs - {page.category}</Htag>
        {products && <Tag color='red' size='m'>hh.ru</Tag>}
      </div>

      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag='h2'>Advantages</Htag>
          <Advantages advantages={page.advantages}/>
        </>
      )}
      {page.seoText && (
        <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>
      )}
      <Htag tag='h2'>Skills</Htag>
      {page.tags.map(tag => <Tag key={tag} color='primary'>{tag}</Tag>)}

    </div>
  );
};

export default TopPageComponent;

