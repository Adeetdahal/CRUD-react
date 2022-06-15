import React from 'react';
import Create from './create/Create';
import Read from './read/Read';
import { useEffect } from 'react';

function Layout() {
  useEffect(() => {
    <Read />;
  }, []);

  return (
    <>
      <Create />
      <Read />
    </>
  );
}

export default Layout;
