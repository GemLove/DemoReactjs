import { useRouteError } from "react-router-dom";
import {Link} from "react-router-dom";

import React from 'react';
import { Button, Result } from 'antd';


export default function ErrorPage() {
  const error:any = useRouteError();
  console.log(error);

  return (
    <Result
    status={error.status}
    title={error.status}
    subTitle="{error.statusText || error.message}"
    extra={<Button type="primary"> <Link to="/home">Back to home</Link></Button>}
  />

     
  );
}