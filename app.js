
var newNav = document.createElement("nav");
var newContent = document.createTextNode("Hola!¿Qué tal?");
newNav.classList.add("navbar");
newNav.classList.add("navbar-expand-lg");
newNav.classList.add("navbar-light");
newNav.classList.add("bg-light");
newNav.appendChild(newContent);

document.body.appendChild(newNav);

newNav.innerHTML = `<a class="navbar-brand" href="#" style="color:green">Onefootball</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
   
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      España 
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">Brasil</a>
        <a class="dropdown-item" href="#">Argentina</a>
        <a class="dropdown-item" href="#">Chile</a>
        <a class="dropdown-item" href="#">Mexico</a>
        <a class="dropdown-item" href="#">Italia</a>
        <a class="dropdown-item" href="#">Francia</a>
    </li>
  </ul>
  <form class="form-inline my-2 my-col-lg-2">
    <input class="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>`;

// TITULO 
var titulo = document.createElement('h1');
var content = document.createTextNode("Páginas populares");
titulo.classList.add("h4");
titulo.appendChild(content);
document.body.appendChild(titulo);
// -----

//CAJAS CON EQUIPOS DE FOOTBALL
var newDiv = document.createElement("div");
newDiv.classList.add("container");
document.body.appendChild(newDiv);

newDiv.innerHTML = `<div class="d-flex flex-row">
<div class="card">
<div class="p-2"><img src="./img/10.png" alt=""></div>
  <div class="card-body p-0">
    <p class="card-text text-center">LaLiga</p>
  </div>
</div>

<div class="card">
<div class="p-2"><img src="./img/2.png" alt=""></div>
  <div class="card-body p-0">
    <p class="card-text text-center">Copa del Rey</p>
  </div>
</div>

<div class="card">
<div class="p-2"><img src="./img/3.png" alt=""></div>
  <div class="card-body p-0">
    <p class="card-text text-center">Champions League</p>
  </div>
</div>

<div class="card">
<div class="p-2"><img src="./img/4.png" alt=""></div>
  <div class="card-body p-0">
    <p class="card-text text-center">Premier League</p>
  </div>
</div>

<div class="card">
<div class="p-2"><img src="./img/5.png" alt=""></div>
  <div class="card-body p-0">
    <p class="card-text text-center">Real Madrid</p>
  </div>
</div>

<div class="card">
<div class="p-2" style="background:blue;"><img src="./img/6.png" alt=""></div>
  <div class="card-body p-0">
    <p class="card-text text-center">FC Barcelona</p>
  </div>
</div>

<div class="card">
<div class="p-2" style="background:red;"><img src="./img/7.png" alt=""></div>
  <div class="card-body p-0">
    <p class="card-text text-center">Atlético de Madrid</p>
  </div>
</div>

<div class="card">
<div class="p-2"><img src="./img/8.png" alt=""></div>
  <div class="card-body p-0">
    <p class="card-text text-center">Valencia</p>
  </div>
</div>

</div>`;
// -----------------------

var titulo = document.createElement('h1');
var content = document.createTextNode("Top News");
titulo.classList.add("h4");
titulo.appendChild(content);
document.body.appendChild(titulo);

