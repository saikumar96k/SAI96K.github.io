import React from 'react'

export const Login = () => {
    
    return (
        <div>
          <body style={{backgroundColor:'#C7F7ED'}}>
          <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">SAI96</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="Signup">Sign Up</a>
        </li>
      </ul>
    </nav>
          
              <center><div class="auth-wrapper">
				<div class="col-md-6">
					<div class="card-body">
         
            <br>
            </br>
						<h2>SAI96k</h2>
						<h4 class="mb-3 f-w-400">LOGIN TO SAI96K ACCOUNT</h4>
						<div class="input-group mb-2">
							<div class="input-group-prepend">
								<span class="input-group-text"></span>
							</div>
							<input type="email" class="form-control" placeholder="Email address"/>
						</div>
						<div class="input-group mb-3">
							<div class="input-group-prepend">
								<span class="input-group-text"></span>
							</div>
							<input type="password" class="form-control" placeholder="Password"/>
						</div>
						
						<div class="form-group text-left mt-2">
						</div>
						<a href="Dashboard" class="btn btn-primary mb-4 form-control login-btn">Login</a>
						<p class="mb-0 text-muted">Don't have an account? <a href="Signup" class="f-w-400">Signup</a></p>
					</div>
				</div>

<footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 2000–2022 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer></div>
</center>

</body>

        </div>
    )
}
