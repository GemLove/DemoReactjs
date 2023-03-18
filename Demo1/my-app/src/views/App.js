import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div class="container">
          <div class="col-md-6 col-sm-10 col-lg-5 m-auto">
            <form class="border p-4 border-info rounded border-2">
              <div class="mb-3 text-center">
              
                <h4 for="exampleInputEmail1" class="form-label ">Form đăng nhập<img src={logo} className="App-logo" alt="logo" /></h4>
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

      </header>
    </div>
  );
}

export default App;
