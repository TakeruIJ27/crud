import Loadable from 'react-loadable';
import Loading from '../Loading';

// this will perform 'code-splitting'
// means that it will dynamically render component when the url and given path match.
const Loader = (imported, opts) => Loadable(
  Object.assign(
    {
      loading: Loading,
      loader: () => imported,
      delay: 200,
      timeout: 10000,
    },
    opts,
  ),
);

export default Loader;
