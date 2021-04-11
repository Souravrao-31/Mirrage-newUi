import React from "react";
import {
  MixedWidget1,
  MixedWidget14,
  ListsWidget9,
  StatsWidget11,
  StatsWidget12,
  ListsWidget1,

} from "../../_mirrag/_partials/widgets";
export function DashboardPage() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-xxl-4">
          <MixedWidget1 className="card-stretch gutter-b" />
        </div>

        <div className="col-lg-6 col-xxl-4">
          <StatsWidget11
            className="card-stretch card-stretch-half gutter-b"
            symbolShape="circle"
            baseColor="success"
          />
          <StatsWidget12 className="card-stretch card-stretch-half gutter-b" />
        </div>
      <div className="col-lg-6 col-xxl-4">
          <MixedWidget14 className="card-stretch gutter-b" />
        </div>
        </div>
        <div className="row">
       
      </div>
    </>
  );
}
