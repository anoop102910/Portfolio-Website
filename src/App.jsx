import React, { Suspense, useEffect, useState } from "react";
import Loader from "./components/Loader";
const Layout = React.lazy(() => import("./Layout"));
import {Toaster} from "react-hot-toast"

function App() {

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Layout />
      </Suspense>
      <Toaster/>
    </>
  );
}

export default App;
