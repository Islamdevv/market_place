import React from "react";
import AdminPanel from "../components/admin/AdminPanel";
import ListProduct from "../components/products/ListProduct";
import { Route, Routes } from "react-router-dom";
import EditProduct from "../components/products/EditProduct";
import DetailsPage from "../pages/DetailsPage";

const MainRoutes = () => {
  const PUBLIC = [
    {
      link: "/admin",
      element: <AdminPanel />,
      id: 1,
    },
    {
      link: "/menu",
      element: <ListProduct />,
      id: 2,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 3,
    },
    {
      link: "/details/:id",
      element: <DetailsPage />,
      id: 4,
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
