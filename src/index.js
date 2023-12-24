// React ve ReactDOM/client modülleri alınır.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// React uygulamasını oluşturmak ve render etmek için kullanılan root elementi belirlenir.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Root elementine, uygulama içeriğini render etmek için ReactDOM'un render fonksiyonu kullanılır.
root.render(
  // React.StrictMode bileşeni, uygulama içinde olası hataları belirlemek ve uyarıları görüntülemek için kullanılır.
  <React.StrictMode>
    {/* Auth0Provider bileşeni, Auth0 kimlik doğrulama sağlayıcısını entegre etmek için kullanılır.
        - domain: Auth0 hesap yöneticinizin alan adını içerir.
        - clientId: Auth0 uygulama ayarlarından alınan istemci kimliğini içerir.
        - redirectUri: Kimlik doğrulama başarılı olduğunda yönlendirilecek URI'yi içerir, genellikle mevcut sayfanın köküdür. */}
    <Auth0Provider domain={process.env.REACT_APP_AUTH0_DOMAIN} clientId={process.env.REACT_APP_AUTH0_CLIENT_ID} redirectUri={window.location.origin}>
      {/* Uygulama bileşeni, Auth0Provider bileşeni içinde bulunur. */}
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
