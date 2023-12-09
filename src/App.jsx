import React, { Suspense, useEffect, useState } from "react";
import Loader from "./components/Loader";
const Layout = React.lazy(() => import("./Layout"));

function App() {

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Layout />
      </Suspense>
    </>
  );
}

export default App;
