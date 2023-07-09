import React from 'react'
import { NavLink } from 'react-router-dom';
import routes from 'src/router';
import useBreadcrumbs from "use-react-router-breadcrumbs";

const excludePaths = ["dashboards","management","components"]

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes,{excludePaths});

  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <span key={match.pathname}>
          <NavLink  to={match.pathname}>
            {breadcrumb}  
          </NavLink>
          {index < breadcrumbs.length - 1 && ' / '}
        </span>
      ))}
    </>
  );
};
export default Breadcrumbs;
