var json = '{"nombre":"Manuel","edad":23,"nacionalidad":"Mexicana","hobbies":["ajedrez","video juegos","comics"],"mascota":{"especie":"perro","nombre":"dui","edad":1}}';
var obj = JSON.parse(json);
console.log(obj.mascota.nombre);