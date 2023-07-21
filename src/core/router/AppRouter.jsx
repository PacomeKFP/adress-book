import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AdressBook from "../../screens/AdressBook";
import AuthComponent from "../../screens/Auth";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";

export default function AppRouter() {
  const [currentUser, setCurrentUser] = useState("pacome");
  const JSXRoutes = (
    <Route path="/" element={<Outlet />}>
      <Route index path="/" element={<AdressBook />} />
      <Route path="/auth/:authMode" element={<AuthComponent />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  );
  const routes = createRoutesFromElements(JSXRoutes);
  const router = createBrowserRouter(routes);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <RouterProvider router={router}></RouterProvider>
    </UserContext.Provider>
  );
}

function NotFound() {
  return <main>404 | Page Not Found</main>;
}
