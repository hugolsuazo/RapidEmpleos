// Tiene el mismo nombre pero son razones distintas y como no es una clase
// el nombre esta en minuscula
// Este archivo contendra todas las funciones crear, editar, borrar estara.
const users = [
    new User('Axel','Carcamo','33524715','carcamo@me.com','12345'),
    new User('Ralf','Carcamo','33522225','ralf@me.com','12390'),
    new User('Raul','Carcamo','33524518','raul@me.com','12320'),
    new User('Hannah','Carcamo','33522567','hannah@me.com','12390'),
    new User('Juliet','Carcamo','33522567','hanna@me.com','12390'),
    new User('Alselmo','Carcamo','33522567','ha@me.com','12390'),
    new User('Fernando','Carcamo','33522567','han@me.com','12390'),
    new User('Lucas','Carcamo','33522567','@me.com','12390')

]

function getUsers(){
    return users
}

//Funcion para crear un usuario
/* 1L Los datos que nos pasen aqui. 
   2L Va construir un nuevo objeto
   3L Lo va aggregar al arreglo
   4l Lo va retornar
 */
function createUser(nombre, apellido, telefono, correo, contrasena){
    const newUser = new User(nombre,apellido, telefono, correo, contrasena)
    users.push(newUser)
    return newUser
}


// Funcion para actualizar datos del usuario
function actualizarUser(i, newnombre, newapellido, newtelefono, newcorreo, newcontrasena){
    users[i].nombre = newnombre
    users[i].apellido = newapellido
    users[i].telefono = newtelefono
    users[i].correo = newcorreo
    users[i].contrasena = newcontrasena
}

 