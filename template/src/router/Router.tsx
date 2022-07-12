import { Routes, Route } from 'react-router-dom';
import { routerPaths } from './router-paths';
import PageWithNavBar from '../templates/page-with-nav-bar';
import RickyPage from '../pages/ricky-page';

const Router = () => (
    <Routes>
      <Route path="/" element={<PageWithNavBar />}>
        <Route path={routerPaths.home} element={<RickyPage />} />
      </Route>
    </Routes>
  );
  
  export default Router;
