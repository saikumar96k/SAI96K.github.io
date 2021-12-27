import React from 'react'

export const PassengerTH = () => {
    return (
       <div>
           <body style={{backgroundColor:'#C7F7ED'}}>
         <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">SAI96K</a>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="/">Sign out</a>
        </li>
      </ul>
       </nav>

    <div class="container-fluid" style={{marginTop:'100px'}}>
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
                  Transaction History
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Allriders">
                  <span data-feather="shopping-cart"></span>
                  All Riders
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="AllPassengers">
                  <span data-feather="users"></span>
                  All Passengers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Dashboard">
                  <span data-feather="bar-chart-2"></span>
                  Home
                </a>
              </li>
            </ul>

           
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          
        <div style={{marginTop:'380px'}}>
          <h2>ALL PASSENGERS TRANSACTION HISTORY</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>UserName</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Lavkush</td>
                  <td>Goa</td>
                  <td>Belagavi</td>
                  <td>50$</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>KItzzz</td>
                  <td>Belagavi</td>
                  <td>Goa</td>
                  <td>90$</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sai</td>
                  <td>Dehali</td>
                  <td>Noida</td>
                  <td>200$</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jacob</td>
                  <td>Noida</td>
                  <td>Jammu</td>
                  <td>500$</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Ronit</td>
                  <td>Bangalore</td>
                  <td>Kerla</td>
                  <td>50$</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </main>
      </div>
    </div>
</body>
        </div>
    )
}
