import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Library from 'pages/Library';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="library" element={<Library />} />
      </Route>
    </Routes>
  );
};
