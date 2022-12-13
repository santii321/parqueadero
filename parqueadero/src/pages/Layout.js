import { Outlet, Link } from "react-router-dom";
import logoChamos from "../assets/images/logoChamos.png"

const Layout = () => {
  return (
    <section className="container-fluid">
      <section className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
          <img src={logoChamos} className="logo"/>
          <section className="position-sticky pt-3 sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home align-text-bottom" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Informes">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file align-text-bottom" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                  Informes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Productos">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart align-text-bottom" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NuevoCliente">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users align-text-bottom" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  Nuevo Cliente
                </Link>
              </li>
            </ul>
          </section>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><section className="chartjs-size-monitor"><section className="chartjs-size-monitor-expand"><section className=""></section></section><section className="chartjs-size-monitor-shrink"><section className=""></section></section></section>
          <section className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">


            <Outlet />

          </section>
        </main>
      </section>
    </section>

  )
};

export default Layout;