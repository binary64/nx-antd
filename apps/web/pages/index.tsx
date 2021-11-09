import styles from './index.module.less';
import { Ui } from '@nx-antd/ui';
import { Button } from 'antd';

export function Index() {
  return (
    <div>
      <h2>nx-antd</h2>
      <Ui />
      <Button type='primary'>regular</Button>
      
    </div>
  );
}

export default Index;
