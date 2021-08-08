import React from "react";
import { withRouter } from "react-router-dom";
import data from "../navigationData";

const Content = withRouter(({ match }) => {
  // Fetch data from the path params

  const pageContent = data.find((content: any) => {
    return content.title === match.params.page;
  });
  return (
    <div>
      <div>
        {match ? (
          <div>{JSON.stringify(match)}</div>
        ) : (
          <div>path not defined</div>
        )}
      </div>
      <div>
        {pageContent.tabs.map((tabs: any) => {
          return <div>{tabs.title}</div>;
        })}
      </div>
    </div>
  );
});
export default Content;
