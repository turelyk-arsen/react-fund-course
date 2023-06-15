import React from 'react';
import { Route, Routes } from "react-router-dom";
import { routers } from '../router/router';

const AppRouter = () => {
    return (
        <Routes>
        {/* <Route path="/about" element={<About />} />
        <Route exact path="/posts" element={<Posts />} /> */}
        {/* <Route path="/" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostIdPage />} />
        <Route path="*" element={<Error />} /> */}
        {routers.map(route => 
          <Route path={route.path} element={route.element} exact={route.exact}/>
        )}
      </Routes>
    );
};

export default AppRouter;