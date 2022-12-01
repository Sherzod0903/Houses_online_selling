import React from 'react';
import  useId  from '../hook/useId';
import Signin from '../pages/Signin';

const HomePage=React.lazy(()=>import('../pages/Home'))
const PropertiesPage=React.lazy(()=>import('../pages/Properties'))

const HouseItemPage=React.lazy(()=>import('../pages/Homeitem'))

export const navbar =[
    {
        id:useId,
        element:(
            <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>          
        <HomePage/>
        </React.Suspense>),
        title:'Home',
        path:'/home',
        private:false,
        hidden:false,
    },
    {
        id:useId,
        element:(
            <React.Suspense>          
      <PropertiesPage/>
        </React.Suspense>),
        title:'Properties',
        path:'/Properties',
        private:false,
        hidden:false,
    },
    {
        id:useId,
        element:(
            <React.Suspense>          
        <HouseItemPage/>
        </React.Suspense>),
        title:'Single House',
        path:'/properties/:id',
        private:false,
        hidden:true,
    },
    {
        id:useId,
        element:<Signin/>,
        title:'signin',
        path:'/signin',
        private:false,
        hidden:true,
    },
    {
        id:useId,
        element:<h1>Sign up</h1>,
        title:'sign up',
        path:'/signup',
        private:false,
        hidden:true,
    }
];