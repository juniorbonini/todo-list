import { NavLink, Outlet } from "react-router";

import Text from "../components/Text";

export default function LayoutMain() {
  return (
    <>
     
      <main className='mt-4 md:mt-8'>
        <Outlet />
      </main>
      <footer className='my-5 md:mt-10'>
        <nav className="flex items-center justify-center gap-4">
          <NavLink to="/">
            <Text variant="body-sm-bold">Tarefas</Text>
          </NavLink>
          <NavLink to="/components">
            <Text variant="body-sm-bold">Componentes</Text>
          </NavLink>
        </nav>
      </footer>
    </>
  );
}
