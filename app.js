let articulosEnCarrito = 0;
let articulosDIV;
let articulos=[ `<div class="card cardCarta rounded-0 imgCard" >
<img class="card-img-top" src="img/cafecito.jpg" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Cafe Chico</h5>
  <p class="card-text">Un pequeño cafe para continuar con tu trabajo!</p>
</div>
<div class="card-body">
    <button onClick="aumentoCarrito()" type="button" class="btn btn-warning">Agregar Al Carrito!</button>
</div>
</div>`,`<div class="card cardCarta rounded-0 imgCard" >
<img class="card-img-top" src="img/cafecito.jpg" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Cafe Mediano</h5>
  <p class="card-text">Perfecto para un break, no se te olvide acompañarlo de una porcion de torta!</p>
</div>
<div class="card-body">
<button onClick="aumentoCarrito()" type="button" class="btn btn-warning">Agregar Al Carrito!</button>
</div>
</div>`,`<div class="card cardCarta rounded-0 imgCard" >
<img class="card-img-top" src="img/cafecito.jpg" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Cafe Grande</h5>
  <p class="card-text">Tienes mucho sueño? Esto podria despertarte!</p>
</div>
<div class="card-body">
<button onClick="aumentoCarrito()" type="button" class="btn btn-warning">Agregar Al Carrito!</button>
</div>
</div>`,`<div class="card cardCarta rounded-0" >
<img class="card-img-top " src="img/325356-Red_Velvet_3_web.jpg" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Torta</h5>
  <p class="card-text">Perfecto para acompañar un exquisito cafe! </p>
</div>
<div class="card-body">
  <button onClick="aumentoCarrito()" type="button" class="btn btn-warning">Agregar Al Carrito!</button>
</div>
</div>`];

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

function aumentoCarrito(){

    articulosEnCarrito ++;
    document.getElementById('cantidad').innerHTML = `<p>${articulosEnCarrito}</p>`;
}