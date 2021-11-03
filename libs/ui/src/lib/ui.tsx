import { Button } from 'antd';
import styles from './ui.module.less'

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return <>
    <div className={styles.camelCase}>local camelcase</div>
    <div className={styles.kebabCase}>local kebabcase but jsx camel</div>
    <div className={styles['kebab-case']}>local kebabcase but jsx square brackets</div>
    <Button type={'primary'} className={styles.bigAntButton}>antd button</Button>
    <div className={styles.bigAntButton2}><Button type={'primary'}>antd button</Button></div>
  </>
}

export default Ui;
