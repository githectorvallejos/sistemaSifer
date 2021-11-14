import React from 'react'

export const UserPage = () => {
  return (
    <><nav class="navbar navbar-expand-lg navbar-light blue fixed-top">
          <button id="sidebarCollapse" class="btn navbar-btn">
              <i class="fas fa-lg fa-bars"></i>
          </button>
          <a class="navbar-brand" href="">
              <h3 id="logo">SIFER</h3>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                      <a class="nav-link" id="link" href="#">
                          <i class="fas fa-sign-out-alt"></i>
                          LogOut<span class="sr-only">(current) </span></a>
                  </li>
              </ul>
          </div>
      </nav><div class="wrapper fixed-left">
              <nav id="sidebar">
                  <ul class="list-unstyled components">
                      <li>
                          <a href=""><i class="fas fa-home"></i>ESTADO PRODUCTO</a>
                      </li>
                      <li>
                          <a href=""><i class="fas fa-clipboard"></i>FUNCIONES DE PLAYA</a>
                      </li>
                      <li>
                          <a href=""><i class="fas fa-user-cog"></i>SURTIDORES</a>
                      </li>
                      <li>
                          <a href=""><i class="fas fa-hands-helping"></i>RENDICIONES</a>
                      </li>
                      
                  </ul>
              </nav>

              <div id="content">

              </div>

          </div></>
  )
}

