import styles from './sample-react-app-ui-shared.module.scss';

/* eslint-disable-next-line */
export interface SampleReactAppUiSharedProps {}

export function SampleReactAppUiShared(props: SampleReactAppUiSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SampleReactAppUiShared!</h1>
    </div>
  );
}

export default SampleReactAppUiShared;
