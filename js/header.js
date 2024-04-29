
    // JavaScript code to create the header component
    function createHeader() {
      const header = document.getElementById('header');
      header.innerHTML = `
      <div class="container-xxl">
      <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
              <a class="navbar-brand" href="#">
                  <img src="image/idsprime-logo.png" alt="logo">
              </a>

           
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <span class="navbar-toggler-icon"></span>
              </button>

            
              <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                      <ul class="navbar-nav mx-xl-auto ms-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="about.html">About Us</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Why Us</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Services</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Benefits</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Data Security</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Partner</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">How it Works</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">FAQ</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>

             
              <button class="btn hdr-btn rounded-pill" type="submit">Book a Demo</button>

          </div>
      </nav>
  </div>
      `;

       // Call the function to create the header component
    createHeader();
    }