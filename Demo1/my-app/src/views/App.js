import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (

    <div className="App">
      {/* <div className="container-fluid">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div> */}
      <div className="App-header">

        <div className="container">
          <div class="col-md-6 col-sm-10 col-lg-5 m-auto">
            <form class="border p-4 border-info rounded border-2">
              <div class="mb-3 text-center">

                <h4 for="exampleInputEmail1" class="form-label h">Đăng nhập<img src={logo} className="App-logo" alt="logo" /></h4>
              </div>
              <div class="mb-3">
                <label for="txtUsername" class="form-label">Tên đăng nhập</label>
                <input type="text" class="form-control" id="txtUsername" aria-describedby="txtUsername" />
              </div>
              <div class="mb-3">
                <label for="txtPassword" class="form-label">Mật khẩu</label>
                <input type="password" class="form-control" id="txtPassword" />
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="chckForget" />
                <label class="form-check-label" for="chckForget">Ghi nhớ đăng nhập</label>
              </div>
              <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
