"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const router = useRouter();

  const pathname = usePathname();

  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Education",
      path: "/education",
    },
    {
      id: 4,
      name: "Skills",
      path: "/skills",
    },
    {
      id: 5,
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 6,
      name: "Contact",
      path: "/contact",
    },
    /*     {
      id: 7,
      name: "Users",
      path: "/users",
    }, */
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed menu menuSideBar">
        <div className="container-fluid justify-content-end">
          <div
            className="menu-activador "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <input type="checkbox" id="lanzador" />
            <label htmlFor="lanzador">
              <span className="menu-activador-linea"></span>
              <span className="menu-activador-linea"></span>
              <span className="menu-activador-linea"></span>
            </label>
          </div>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="nav-item d-flex justify-content-center menuitem-0 "
                >
                  <Link
                    className={
                      pathname === link.path ? "nav-link activo" : "nav-link "
                    }
                    aria-current="page"
                    href={link.path}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
