/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import Info from "../Info/Info";
import "./List.scss";

export default function List({ groups, paths }) {
  return (
    <section className="list-wrapper flex">
      {groups.map((group, index) => (
          <div className="inner" key={index}>
              <Link to={`/${paths[index].path}`}>
                <div className="hero">
                    <img src={group.hero.href} alt={group.hero.alt} />
                </div>
              </Link>
              <Info
                link={group.links.www}
                name={group.name}
                priceRange={group.priceRange}
              />
          </div>
      ))}
    </section>
  );
}
