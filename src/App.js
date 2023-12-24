// Bootstrap CSS ve uygulama özel CSS dosyaları import edilir.
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// react-bootstrap modülünden gerekli bileşenler alınır.
import { Container, Navbar } from 'react-bootstrap';
// Search ve SearchResults bileşenleri import edilir.
import Search from "./search";
import SearchResults from './SearchResults';
// react modülünden useState ve useEffect hook'ları import edilir.
import { useState, useEffect } from "react";
// api modülünden search fonksiyonu import edilir.
import { search } from "./api";
// auth0-react modülünden useAuth0 hook'u import edilir.
import { useAuth0 } from "@auth0/auth0-react";

// Ana uygulama bileşeni (App) oluşturulur.
function App() {
  // State hook'ları kullanılarak query ve results değerleri oluşturulur.
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  // Auth0 kullanımı için useAuth0 hook'u kullanılır.
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0();

  // Kullanıcının bilgileri konsola yazdırılır.
  console.log(user);

  // useEffect hook'u, her render'dan sonra çalışır ve arama sonuçlarını günceller.
  useEffect(() => {
    // Eğer query boşsa veya uzunluğu 0 ise, results sıfırlanır ve fonksiyondan çıkılır.
    if (!(query || query.length)) {
      setResults(null);
      return;
    }

    // Eğer query'nin uzunluğu 3'ten küçükse, fonksiyondan çıkılır.
    if (query.length < 3) {
      return;
    }

    // search fonksiyonu kullanılarak arama yapılır ve sonuçlar güncellenir.
    search(query)
      .then(results => {
        if (results && results.data) {
          setResults(results.data);
        }
      })
      .catch(err => console.log(err));
  }, [query]);

  // Uygulama bileşeni oluşturulan JSX yapısı ile return edilir.
  return (
    <div className="App">
      <header>
        {/* Navbar bileşeni, uygulama başlığını ve kullanıcı giriş durumunu gösterir. */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="d-flex justify-content-between align-items-center">
            <h5>Art Institute of Chicago</h5>
            <div className="d-flex align-items-center" id="divloginall">
              {/* Kullanıcı giriş durumuna göre uygun içeriği gösteren butonlar oluşturulur. */}
              {isLoading ? (
                <p>Loading...</p>
              ) : isAuthenticated ? (
                <>
                  <button onClick={logout} className="button">
                    Logout
                  </button>
                  <div className="divlogin2">
                    <img src={user.picture} alt={user.name} width="35" className="img1" />
                    <h6 className="h61">{user.name}</h6>
                  </div>
                </>
              ) : (
                <button onClick={loginWithRedirect} className="button2">
                  Login
                </button>
              )}
            </div>
          </Navbar.Brand>
        </Navbar>
        {/* Başlık ve arama bileşenleri içeren bir div oluşturulur. */}
        <div className="painting-background">
          <h1>Find Art You Love</h1>
          <div className="search">
            {/* Search bileşeni, arama yapmak için kullanılır. */}
            <Search query={query} onChange={(e) => setQuery(e.target.value)}></Search>
          </div>
        </div>
      </header>
      <main>
        {/* SearchResults bileşeni, arama sonuçlarını gösterir. */}
        <Container fluid>
          <SearchResults results={results} className="card"></SearchResults>
        </Container>
      </main>
    </div>
  );
}

// App bileşeni, dışa aktarılır.
export default App;
