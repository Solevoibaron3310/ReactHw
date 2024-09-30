// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { FavoriteProvider } from './FavContext/FavContext.jsx';
// import './index.module.scss'
// import { BrowserRouter } from 'react-router-dom';
// import { BuyProvider } from './BuyContext/BuyContext.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <FavoriteProvider>
//         <BuyProvider>
//               <BrowserRouter>
//                   <App />  
//               </BrowserRouter>
//         </BuyProvider>
//     </FavoriteProvider>
//   </StrictMode>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { FavoriteProvider } from './FavContext/FavContext.jsx';
import { BuyProvider } from './BuyContext/BuyContext.jsx';
import './index.module.scss';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <FavoriteProvider>
            <BuyProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </BuyProvider>
        </FavoriteProvider>
    </StrictMode>
);