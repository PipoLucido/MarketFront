let articulosEnCarrito = 0;
let articulosDIV;
let articulos=[ `<div class="card cardCarta rounded-0 imgCard" >
<img class="card-img-top" src="img/cafecito.jpg" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Cafe Chico</h5>
  <p class="card-text">Un pequeño cafe para continuar con tu trabajo!</p>
</div>
<div class="card-body">
    <button onClick="aumentoCarrito(0)" type="button" class="btn btn-warning">Agregar Al Carrito!</button>
</div>
</div>`,`<div class="card cardCarta rounded-0 imgCard" >
<img class="card-img-top" src="img/cafecito.jpg" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Cafe Mediano</h5>
  <p class="card-text">Perfecto para un break, no se te olvide acompañarlo de una porcion de torta!</p>
</div>
<div class="card-body">
<button onClick="aumentoCarrito(1)" type="button" class="btn btn-warning">Agregar Al Carrito!</button>
</div>
</div>`,`<div class="card cardCarta rounded-0 imgCard" >
<img class="card-img-top" src="img/cafecito.jpg" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Cafe Grande</h5>
  <p class="card-text">Tienes mucho sueño? Esto podria despertarte!</p>
</div>
<div class="card-body">
<button onClick="aumentoCarrito(2)" type="button" class="btn btn-warning">Agregar Al Carrito!</button>
</div>
</div>`,`<div class="card cardCarta rounded-0" >
<img class="card-img-top " src="img/325356-Red_Velvet_3_web.jpg" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Torta</h5>
  <p class="card-text">Perfecto para acompañar un exquisito cafe! </p>
</div>
<div class="card-body">
  <button onClick="aumentoCarrito(3)" type="button" class="btn btn-warning">Agregar Al Carrito!</button>
</div>
</div>`];

let verificadorDeCarrito = [0,0,0,0];

let articulosEnCarrito2=[ `
  <p class="card-title" id="verificadorDeCafeChico">Cafe Chico x${verificadorDeCarrito[0]+1}</p>
`,`
  <p class="card-title" id="verificadorDeCafeMediano">Cafe Mediano x${verificadorDeCarrito[1]+1}</p>
`,`
  <p class="card-title" id="verificadorDeCafeGrande" >Cafe Grande x${verificadorDeCarrito[2]+1}</p>
`,`
  <p class="card-title" id="verificadorDeTorta" >Torta x${verificadorDeCarrito[3]+1}</p>
`];

articulosDIV = `    
<div class="container">
<div class="row">
  <div class="col-md-4 col-sm-6">
    ${articulos[0]}
  </div>
  <div class="col-md-4 col-sm-6">
    ${articulos[1]}
  </div>
</div>
</div>
<div class="container">
<div class="row">
  <div class="col-md-4 col-sm-6">
    ${articulos[2]}
  </div>
  <div class="col-md-4 col-sm-6">
    ${articulos[3]}
  </div>
</div>
</div>
`;



document.getElementById('contenidos').innerHTML = articulosDIV;
document.getElementById('cantidad').innerHTML = `<p>${articulosEnCarrito}</p>`;

function aumentoCarrito(val){
    switch(val){
      case 0 : 
        if(verificadorDeCarrito[0] === 0 ){
          verificadorDeCarrito[0] = +1;
      document.getElementById('articulosEnCarrito').innerHTML += `<div class="dropdown-divider"></div>
        <a class="dropdown-item">${articulosEnCarrito2[0]}</a>`;  }else{
          verificadorDeCarrito[0] ++; 
          document.getElementById('verificadorDeCafeChico').innerHTML = `Cafe Chico x${verificadorDeCarrito[0]}`;
        }

          break;

      case 1 :  
      if(verificadorDeCarrito[1] === 0 ){
        verificadorDeCarrito[1] = +1;
    document.getElementById('articulosEnCarrito').innerHTML += `<div class="dropdown-divider"></div>
      <a class="dropdown-item">${articulosEnCarrito2[1]}</a>`;  }else{
        verificadorDeCarrito[1] ++; console.log("llega");
      document.getElementById('verificadorDeCafeMediano').innerHTML = `Cafe Mediano x${verificadorDeCarrito[1]}`;
      }
          break;

      case 2 : 
      if(verificadorDeCarrito[2] === 0 ){
        verificadorDeCarrito[2] = +1;
    document.getElementById('articulosEnCarrito').innerHTML += `<div class="dropdown-divider"></div>
      <a class="dropdown-item">${articulosEnCarrito2[2]}</a>`;  }else{
        verificadorDeCarrito[2] ++;
        document.getElementById('verificadorDeCafeGrande').innerHTML = `Cafe Grande x${verificadorDeCarrito[2]}`;
      }
          break;

      case 3 :  
      if(verificadorDeCarrito[3] === 0 ){
        verificadorDeCarrito[3] = +1;
    document.getElementById('articulosEnCarrito').innerHTML += `<div class="dropdown-divider"></div>
      <a class="dropdown-item">${articulosEnCarrito2[3]}</a>`;  }else{
        verificadorDeCarrito[3] ++;
        document.getElementById('verificadorDeTorta').innerHTML = `Torta x${verificadorDeCarrito[3]}`;
      }
          break;

    }
    articulosEnCarrito++;
    document.getElementById('cantidad').innerHTML = `<p>${articulosEnCarrito}</p>`;
}

function buscarCafe(){
document.getElementById('contenidos').innerHTML = `<div class="container">
<div class="row">
  <div class="col-md-4 col-sm-6">
    ${articulos[0]}
  </div>
  <div class="col-md-4 col-sm-6">
    ${articulos[1]}
  </div>
</div>
<div class="col-md-4 col-sm-6">
    ${articulos[2]}
  </div>
</div>
</div>`;
}

function buscarPostres(){
  document.getElementById('contenidos').innerHTML = `<div class="container">
  <div class="row">
  <div class="col-md-4 col-sm-6">
      ${articulos[3]}
    </div>
  </div>
  </div>`;
}

function mostrarTodo(){
  document.getElementById('contenidos').innerHTML = articulosDIV;
}
