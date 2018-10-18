const rl = require('readline-sync');
class artcientificos {
    constructor(titulo, autor, paginas, añopub, menciones) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.añopub = añopub;
        this.menciones = menciones;
    }
}
class revista extends artcientificos {
    constructor(titulo, autor, paginas, añopub, menciones, titulo_revista, editorial, impacto) {
        super(titulo, autor, paginas, añopub, menciones);
        this.titulo_revista = titulo_revista;
        this.editorial = editorial;
        this.impacto = impacto;
    }
}
class conferencia extends artcientificos {
    constructor(titulo, autor, paginas, añopub, menciones, libro_conf, conferencias, lugar) {
        super(titulo, autor, paginas, añopub, menciones);
        this.libro_conf = libro_conf;
        this.conferencias = conferencias;
        this.lugar = lugar;
    }
}
class cientificas {
    constructor(titulo, autor2, año_pub, año_ven) {
        this.titulo = titulo;
        this.autor2 = autor2;
        this.año_pub = año_pub;
        this.año_ven = año_ven;
    }
}
class autor_clase {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
//Lista es la array donde se almacena todo y salir para salir del programa
let lista = [];
let salir = false;
// lista_autor almacena los autores
let lista_autor = [];

while (!salir) {
    let opcion = rl.question('Introduce la accion\n' +
        '1)Introducir articulo cientifico\n' +
        '2)Introducir patente cientifica\n' +
        '3)Buscar por autor\n' +
        '4)Modificar autor\n' +
        '5)Eliminar por titulo\n' +
        '6)Añadir autor\n' +
        '6)Factor impacto');

    if (opcion === '1') {
        //Introducir Articulo de revista o coferencia o una patente
        let opcion = rl.question('Introduce el tipo de articulo cientifico\n' +
            '1)Introducir Revista\n' +
            '2)Introducir Conferencia');
        //Introducir Revista
        if (opcion === '1') {
            let titulo = rl.question('Introduce el titulo:');
            let autor = rl.question('Introduce el autor:');
            let paginas = rl.question('Introduce el numero de paginas:');
            let añopub = rl.question('Introduce el año de publicacion:');
            let menciones = rl.question('Introduce las menciones:');
            let titulo_revista = rl.question('Introduce el titulo de la revista:');
            let editorial = rl.question('Introduce la editorial');
            let impacto = rl.question('Introduce el impacto:');
            let newrevista = new revista(titulo, autor, paginas, añopub, menciones, titulo_revista, editorial, impacto);
            lista.push(newrevista);
            console.log(lista);
            //Introducir Conferencia
        } else if (opcion === '2') {
            let titulo = rl.question('Introduce el titulo:');
            let autor = rl.question('Introduce el autor:');
            let paginas = rl.question('Introduce el numero de paginas:');
            let añopub = rl.question('Introduce el año de publicacion:');
            let menciones = rl.question('Introduce las menciones:');
            let conferencias = rl.question('Introduce conferencia');
            let libro_conf = rl.question('Introduce libro conf');
            let lugar = rl.question('Introdiuce el lugar');
            let newconferencia = new conferencia(titulo, autor, paginas, añopub, menciones, conferencias, libro_conf, lugar);
            let newautor = new autor(nombre, edad);
            lista.push(newconferencia);

        }
        //Introducir Patente
    } else if (opcion === '2') {
        let titulo = rl.question('Introduce el titulo:');
        let autor2 = rl.question('Introduce el autor:');
        let año_pub = rl.question('Introduce el año de publicacion:');
        let año_ven = rl.question('Introduce el año de vencimiento:');
        let newpatente = new cientificas(titulo, autor2, año_pub, año_ven);
        let newautor = new autor(nombre, edad);
        lista.push(newpatente);

        //Buscar articulos
    } else if (opcion === '3') {
        let opcion = rl.question('Introduce el tipo de articulo a buscar\n' +
            '1) Revista\n' +
            '2) Conferencia\n' +
            '3) Patente cientifica');
        //buscar Revista
        if (opcion === '1') {
            let autor_usuario = rl.question('Introduce el autor a buscar:');
            for (let autor of lista) {
                if (autor.autor === autor_usuario) {
                    console.log(autor);
                    break;
                }
            }
        }
        //Buscar Conferencia
        else if (opcion === '2') {
            let autor_usuario = rl.question('Introduce el autor a buscar:');
            for (let autor of lista) {
                if (autor.autor === autor_usuario) {
                    console.log(autor);
                    break;
                }
            }
        }
        //Buscar por Patente
        else if (opcion === '3') {
            let autor_usuario = rl.question('Introduce el autor a buscar:');
            for (let autor2 of lista) {
                if (autor2.autor2 === autor_usuario) {
                    console.log(autor2);
                    break;
                }
            }
        }
    }
    //Modificar un Autor
    else if (opcion === '4') {
        let opcion = rl.question('Introduce el tipo de articulo a modificar\n' +
            '1) Revista\n' +
            '2) Conferencia\n' +
            '3) Patente cientifica\n' +
            '3) Autor');
        //Modificar autor revista
        if (opcion === '1') {
            let autor_usuario = rl.question('Introduce el autor a modificar:');
            let autorModificado = undefined;
            for (let i = 0; i < lista.length; i++) {
                let autor = lista[i];
                if (autor.autor === autor_usuario) {
                    autorModificado = autor;
                    break;
                }
            }
            if (autorModificado) {
                let newautor = rl.question('Introduce el nuevo autor');
                autorModificado.autor = newautor;
                console.log('Valor Modificado');
            } else {
                console.log('Autor no encontrado')
            }
        }
        //Modificar autor conferencia
        else if (opcion === '2') {
            let autor_usuario = rl.question('Introduce el autor a modificar:');
            let autorModificado = undefined;
            for (let i = 0; i < lista.length; i++) {
                let autor = lista[i];
                if (autor.autor === autor_usuario) {
                    autorModificado = autor;
                    break;
                }
            }
            if (autorModificado) {
                let newautor = rl.question('Introduce el nuevo autor');
                autorModificado.autor = newautor;
                console.log('Valor Modificado');
            } else {
                console.log('Autor no encontrado')
            }
        }
        //Modificar autor patente
        else if (opcion === '3') {
            let autor_usuario = rl.question('Introduce el autor a modificar:');
            let autor2Modificado = undefined;
            for (let i = 0; i < lista.length; i++) {
                let autor2 = lista[i];
                if (autor2.autor2 === autor_usuario) {
                    autor2Modificado = autor2;
                    break;
                }
            }
            if (autor2Modificado) {
                let newautor = rl.question('Introduce el nuevo autor');
                autor2Modificado.autor2 = newautor;
                console.log('Valor Modificado');
            } else {
                console.log('Autor no encontrado')
            }
        }
        // Modificar autor clase autor(lista_autor)
        else if (opcion === '4') {
            let autor_usuario = rl.question('Introduce el autor a modificar:');
            let autorModificado = undefined;
            for (let i = 0; i < lista_autor.length; i++) {
                let nombre = lista_autor[i];
                if (nombre.nombre === autor_usuario) {
                    autorModificado = nombre;
                    break;
                }
            }
            if (autorModificado) {
                let newautor = rl.question('Introduce el nuevo autor');
                autorModificado.nombre = newautor;
                console.log('Valor Modificado');
            } else {
                console.log('Autor no encontrado')
            }
        }
    }
    //Dar de baja por titulo
    else if (opcion === '5') {
        let opcion = rl.question('Introduce el tipo de articulo a modificar\n' +
            '1) Revista\n' +
            '2) Conferencia\n' +
            '3) Patente cientifica');
        //Dar de baja una Revista
        if (opcion === '1') {
            let titulo_usuario = rl.question('Intrduce un titulo a eliminar');
            let encontrado = false;
            for (let i = 0; i < lista.length; i++) {
                let titulo = lista[i];
                if (titulo.titulo === titulo_usuario) {
                    lista.splice(i, 1);
                    encontrado = true;
                    break;
                }
            }

            if (encontrado) {
                console.log('Titulo encontrado y eliminado');
                console.log(lista);
            } else {
                console.log('Titulo no encontrado');
            }
        }
        //Eliminar conferencia
        else if (opcion === '2') {
            let titulo_usuario = rl.question('Intrduce un titulo a eliminar');
            let encontrado = false;
            for (let i = 0; i < lista.length; i++) {
                let titulo = lista[i];
                if (titulo.titulo === titulo_usuario) {
                    lista.splice(i, 1);
                    encontrado = true;
                    break;
                }
            }

            if (encontrado) {
                console.log('Titulo encontrado y eliminado');
                console.log(lista);
            } else {
                console.log('Titulo no encontrado');
            }
        }
        // Eliminar Patente
        else if (opcion === '3') {
            let titulo_usuario = rl.question('Intrduce un titulo a eliminar');
            let encontrado = false;
            for (let i = 0; i < lista.length; i++) {
                let titulo = lista[i];
                if (titulo.titulo === titulo_usuario) {
                    lista.splice(i, 1);
                    encontrado = true;
                    break;
                }
            }

            if (encontrado) {
                console.log('Titulo encontrado y eliminado');
                console.log(lista);
            } else {
                console.log('Titulo no encontrado');
            }
        }
    } else if (opcion === '6') {
        let nombre = rl.question('Introduce el nombre del autor');
        let edad = rl.question('Introduce la edad del autor');

        let newautor = new autor_clase(nombre, edad);
        lista_autor.push(newautor);
        console.log(lista_autor);
    }
    else if (opcion === '7') {
        let autor_usuario = rl.question('Introduce el nombre del autor');
        for (let autores_in of lista_autor){
          if(autores_in.nombre === autor_usuario)
          console.log(autores_in.lenght);
        }
    } else if (opcion === -1) {
        salir = true;
    }

}
