        const body = document.querySelector('body');
       const tbody = document.querySelector('tbody');
    const btnaddup = document.querySelector('#btnaddup');
      const nombre = document.querySelector('#nombre');     // id's agregados a los inputs
    const apellido = document.querySelector('#apellido');   // id's agregados a los inputs
    const telefono = document.querySelector('#telefono');   // id's agregados a los inputs
      const correo = document.querySelector('#correo');     // id's agregados a los inputs
  const contrasena = document.querySelector('#contrasena'); // id's agregados a los inputs

body.onload = () => {
    let trs =[];
   
    users.forEach((u, i)=>{ // Con esto podemos hacer que nos regrese el indice del elemento
        const tr = createFila(u, i)  
        // Union con el tbody
        // tbody.appendChild(tr)
        tbody.append(...trs)
        /* Esta forma es la correcta por terminos de rendimiento dado que si el volumen de datos
           es grande nuestro sitio no se veria afectado, esto por que la pagina por dato no va cambiar
           va cambiar hasta que se finalice de recorrer todos los datos del arreglo*/
        trs.push(tr)
        // SpriteOperator
    })
    tbody.append(...trs)

}

function createFila(u, i){ // hasta ese punto se muestra el indice
    const tr = document.createElement('tr')

    // Constantes para borrar
    const tdborrar = document.createElement('td')
    const iborrar = document.createElement('i')
    iborrar.className = 'fas fa-trash-alt'

    // Constantes para actualizar
    const tdactualizar = document.createElement('td')
    const iactualizar = document.createElement('i')
    iactualizar.className = 'fas fa-sync'
    iactualizar.onclick = () => {
      alert("Se esta refrescando el contenido de fila   " + i)
    }

    // Constante para el nombre
    const tdnombre = document.createElement('td')
    tdnombre.textContent = u.nombre

    // Constante para el apellido
    const tdapellido = document.createElement('td') 
    tdapellido.textContent = u.apellido

    // Constante para el telefono
    const tdtelefono = document.createElement('td')
    tdtelefono.textContent = u.telefono

    // Constante para el correo
    const tdcorreo = document.createElement('td')
    tdcorreo.textContent = u.correo

    // Constante para el contrasena
    const tdcontrasena = document.createElement('td')
    tdcontrasena.textContent = u.contrasena // En este pudo el td no necesario

    // Union entre
    tdborrar.appendChild(iborrar)
    tdactualizar.appendChild(iactualizar)
    tr.append(tdborrar, tdactualizar, tdnombre, tdapellido, tdtelefono, tdcorreo, tdcontrasena)
    
    return tr;

    /*
    <tr>
        <td id="basurero"><i class="fas fa-trash-alt"></i></td>
        <td id="actualizar"><i class="fas fa-sync"></i></td>
        <td>Axl</td>
        <td>Carcamo</td>
        <td>+(504) 3352-4715</td>
        <td>carcamo@me.com</td>
        <td>F@ntasticM</td>
        </tr>
    */
}

// Escuchador de eventos
btnaddup.onclick = (e) => {
    /*
    Esta podri haber sido otra opcion.
      const nombre = innombre.value
    const apellido = inapellido.value
    const telefono = intelefono.value
      const correo = incorreo.value
  const contrasena = incontrasena.value
    */
    const i = getUsers().length // Obtener el indice del valor agregado  
    // Se hace de la siguiente manera para de este modo hacerlo en una sola linea.
    const newUser = createUser(nombre.value, apellido.value, telefono.value, correo.value, contrasena.value)
    // Tener cuidado con el nombre de los ID en este caso no requieren la propiedad IN previo al ID
    const tr = createFila(newUser, i) // Con esto se crearia una nueva linea para almacenar la nueva informacion
    tbody.appendChild(tr) // Con esto se posicionaria en la ultima fila que contiene datos para posterior agregar los datos
     // Este nos sirve para previsualizar los datos sin actualizar o recargar la pagina
     e.preventDefault()
} 