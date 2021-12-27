import React from 'react'

export const Contact = () => {
    return (
       <div>
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
          
        <div style={{marginTop:'20px'}}>
          <h2>Contact</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>UserName</th>
                  <th>Email</th>
                  <th>ContactNo</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Lavkush</td>
                  <td>lav67@Gmail.com</td>
                  <td>8956236589</td>
                  <td>Goa</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>KItzzz</td>
                  <td>kiti56@gmail.com</td>
                  <td>8745969652</td>
                  <td>TN</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sai</td>
                  <td>sai96@gamil.com</td>
                  <td>8880462528</td>
                  <td>KA</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jacob</td>
                  <td>jackob@gmail.com</td>
                  <td>7895641236</td>
                  <td>Goa</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Ronit</td>
                  <td>Ron@gmail.com</td>
                  <td>9568965896</td>
                  <td>MH</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </main>
      </div>
    </div>

        </div>
    )
}
