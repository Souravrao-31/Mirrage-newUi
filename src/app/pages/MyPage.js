import React from "react";
import {useSubheader} from "../../_mirrag/layout";


export const MyPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("My Custom title");

};
