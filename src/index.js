import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import GlobalStyles from '~/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderProducts } from '~/components';
import { Home } from '~/layout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="drinks" element={<HeaderProducts procduct="Drink" />} />
                    <Route path="foods" element={<HeaderProducts procduct="Food" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </GlobalStyles>,
);
