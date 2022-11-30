import './loading.scss';
import { ReactComponent as IconLoading } from 'src/assets/images/icon/sprinner.svg';
import { useAxiosLoader } from 'src/app/core/http';

export type LoadingProps = {};

export const Loading = () => {
  const [active] = useAxiosLoader();

  return (
    <div className={`loading ${active ? 'active' : ''}`}>
      <IconLoading />
    </div>
  );
};
