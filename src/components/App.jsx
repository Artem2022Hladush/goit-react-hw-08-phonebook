import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { refreshUser } from "redux/auth/operations";
import { selectIsRefreshing } from "redux/auth/selectors";

import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('../pages/Home'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));



const App= () => {
const dispatch = useDispatch();
const isRefreshing = useSelector(selectIsRefreshing)

useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);



  return (
    <>
   {!isRefreshing && (
     <Routes>
     <Route path="/" element={<SharedLayout/>}>

       <Route index element={<Home/>} />

       <Route path="/contacts" 
       element={
         <PrivateRoute redirectTo="/login" component={<ContactPage/>}/>
       } />

       <Route path="/register"
       element={
       <RestrictedRoute redirectTo="/contacts" component={<RegisterPage/>}/> 
     }/>

       <Route path="/login"
       element={
         <RestrictedRoute redirectTo="/contacts" component={<LoginPage/>}/>
       }/>
       
       <Route path="*" element={<Navigate to={'/'} />} />
     </Route>
   </Routes>
   )}
    </>
  )
};

export default App;