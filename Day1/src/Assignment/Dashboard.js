import React from 'react'

export const Dashboard = () => {
    return (
        <div>
           <body style={{backgroundColor:'#C7F7ED'}}>
               <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">SAI96</a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="/">Sign out</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="Dashboard">
                  <span data-feather="home"></span>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  
                </a>
              </li>
              <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Transaction History
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="PassengerTH">Rider transaction</a>
          <a class="dropdown-item" href="PassengerTH">passenger transactin</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Wallet Payment</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="AllPassengers">All Passengers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="Allriders">All Riders</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="Contact">Contact</a>
      </li>
      
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button class="btn btn-sm btn-outline-secondary">Share</button>
                <button class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
<br></br>
          <div class="row" >
  <div class="col-sm-6" >
    <div class="card" >
      <div class="card-body1"style={{backgroundColor:'#00E5FF'}}>
        <h5 class="card-title">Total Users</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Click me</a>
      </div>
    </div>
  </div>
  <br></br>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body1"style={{backgroundColor:'#00E5FF'}}>
        <h5 class="card-title">Total Coins</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Click ME</a>
      </div>
    </div>
  </div>
</div>
<br></br>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body1"style={{backgroundColor:'#00E5FF'}}>
        <h5 class="card-title">Total Sales</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Click Me</a>
      </div>
    </div>
  </div>
  <br></br>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body1"style={{backgroundColor:'#00E5FF'}}>
        <h5 class="card-title">Total Earning</h5>
        <p class="card-text"></p>
        <a href="#" class="btn btn-primary">Click Me</a>
      </div>
    </div>
  </div>
</div>

          <canvas class="my-4" id="myChart" width="900" height="380"></canvas>
          <h2 style={{backgroundColor:'#00E5FF'}}>ALL RIDERS</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead class="thead-dark">
                <tr>
                  <th>#</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>Verify</th>
                  <th>KYC Selfie</th>
                </tr>
              </thead>
              <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Lavkush</td>
      <td>lav@gmail.com</td>
      <td><button type="button" class="btn btn-outline-info">Verify</button></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Jacob84@gmail.com</td>
      <td><button type="button" class="btn btn-outline-info">Verify</button></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Susan</td>
      <td>susan5656@gmail.com</td>
      <td><button type="button" class="btn btn-outline-info">Verify</button></td>
      <td></td>
    </tr>
  </tbody>
</table>



<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Verify</th>
      <th scope="col">KYC Selfie</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>saku</td>
      <td>sak@gmail.com</td>
      <td><button type="button" class="btn btn-outline-info">Verify</button></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Rohit</td>
      <td>rohit96k@gmail.com</td>
      <td><button type="button" class="btn btn-outline-info">Verify</button></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>priyansh</td>
      <td>priyansh@gmail.com</td>
      <td><button type="button" class="btn btn-outline-info">Verify</button></td>
      <td></td>
    </tr>
  </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
    </body>
            
        </div>
    )
}
