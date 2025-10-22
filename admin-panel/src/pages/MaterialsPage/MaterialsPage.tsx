import Materials from '../../modules/Materials/Materials';
import Search from '../../modules/Search/Search';

import classes from './MaterialsPage.module.css';

const MaterialsPage = () => {
  return (
    <main className={classes.materials}>
      <Search />
      <Materials />
    </main>
  );
};

export default MaterialsPage;
