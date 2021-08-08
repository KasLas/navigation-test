import React from "react";
import data from "../navigationData";
import { Link } from "react-router-dom";
import Content from "./Content";

const Navigation = () => {
  return (
    <div style={{ display: " flex", flexDirection: "row" }}>
      <div style={{ width: " 200px", backgroundColor: "green" }}>
        <div>Navigation!</div>
        {data.map((page: any) => {
          return (
            <>
              <div>
                <Link to={`/${page.title}`}>{page.title}</Link>
              </div>
              {page.tabs &&
                page.tabs.map((tab: any) => {
                  return (
                    <>
                      <div style={{ paddingLeft: "20px " }}>
                        <Link to={`/${page.title}/${tab.title}`}>
                          {tab.title}
                        </Link>
                      </div>
                      {tab.content.child &&
                        tab.content.child.map((childItem: any) => {
                          return (
                            <div style={{ paddingLeft: "40px " }}>
                              <Link
                                to={`/${page.title}/${tab.title}/${childItem.title}`}
                              >
                                {childItem.title}
                              </Link>
                            </div>
                          );
                        })}
                    </>
                  );
                })}
            </>
          );
        })}
      </div>
      <Content />
    </div>
  );
};

export default Navigation;
