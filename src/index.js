import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import GlobalStyles from '~/GlobalStyles';
import { AuthProvider, AuthContext } from '~/components/Context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderProducts, Login, AddProducts, AllProducts,ProductsInformation } from '~/components';
import { Home, HandleProductsHome ,HandleEmployeeHome } from '~/layout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />}>
                        <Route path="allproducts" element={<AllProducts />} />
                        <Route path="coffees" element={<HeaderProducts product="Coffees" />} />
                        <Route path="foods" element={<HeaderProducts product="Foods" />} />
                    </Route>
                    <Route path="/handleproductshome" element={<HandleProductsHome />}>
                        <Route path="coffees" element={<ProductsInformation product="Coffees" />} />
                        <Route path="foods" element={<ProductsInformation product="Foods" />} />
                    </Route>
                    <Route path="/handleemployeehome" element={<HandleEmployeeHome />}>
                        
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </GlobalStyles>,
);
