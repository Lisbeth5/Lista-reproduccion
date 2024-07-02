if (!localStorage.getItem('isLogged')) {
    window.location.href = '../LOGIN/login.html';
}

class Cancion {
    constructor({ artista, nombre, duracion, anio, genero, imagen1 }) {
        this.artista = artista
        this.nombre = nombre
        this.duracion = duracion
        this.anio = anio
        this.genero = genero
        this.imagen1 = imagen1
    }
}

class ListaCanciones {
    constructor(herramientasInterfazGrafica) {
        this.catalogoDeCanciones = [
            new Cancion(1, 'Taylor Swift', 'Cardigan','3:59', 2020, 'Chamber pop, Indie folk','.\\portada_imagenes\\cardigan.jpg'),
            new Cancion(2, 'Ariana Grande', '7 rings','2:58', 2019, 'pop','..\\portada_imagenes\\7_rings.jpg'),
            new Cancion(3, 'calle 13', 'Atreve te te','3:58', 2005, '','.\\portada_imagenes\\atrevete_te.jpg'),
            new Cancion(4, 'Anitta', 'Downtown','3:13', 2017, 'Pop latino, reguetón','.\\portada_imagenes\\downtown.jpg'),
            new Cancion(5, 'Tito el Bambino', 'Flow natural','2:59', 2006, 'regueton','.\\portada_imagenes\\flow-natural.jpg'),
            new Cancion(6, 'Maroon', 'Girls like you','3:35', 2018, 'Pop, pop rock','.\\portada_imagenes\\girls like you.jpg'),
            new Cancion(7, 'Ariana Grande', 'God is woman','3:17', 2018, 'R&B, pop','.\\portada_imagenes\\cardigan.jpg'),
            new Cancion(8, 'Bad Bunny, Cardi B Y J balvin', 'I like it','4:13', 2018, 'Trap latino','.\\portada_imagenes\\i like it.jpg'),
            new Cancion(9, 'Daddy yankee', 'Limbo','3:44', 2012, 'EDM','.\\portada_imagenes\\Limbo.jpg'),
            new Cancion(10, 'Trinidad Cardona', 'Love me back','3:44', 2022, 'R&B, pop','.\\portada_imagenes\\love me back.jpg'),
            new Cancion(11, 'LP', 'Lost on you','4:26', 2015, 'folk pop','.\\portada_imagenes\\lost_on_you.jpg'),
            new Cancion(12, 'Demi Lovato y Luis Fons', 'Echame la culpa','2:53', 2017, 'Pop, Reguetón','.\\portada_imagenes\\echame_la_culpa.jpg'),
            new Cancion(13, 'Marshmello x Bastille', 'Happier','3:34', 2018, 'Pop','.\\portada_imagenes\\happier.jpg'),
            new Cancion(14, 'Alan Walker, sabrina Carpenter y Farruko', 'On my way','3:13', 2019, 'EDM','.\\portada_imagenes\\on my way.jpg'),
            new Cancion(15, 'Karol G', 'Provenza','3:30', 2022, 'Pop letino, Afrobeats, Urban, R&B','.\\portada_imagenes\\provenza.jpg'),
            new Cancion(16, 'Aurora', 'Runaway','4:13', 2015, 'Folktrónica, synth pop, electrónica','.\\portada_imagenes\\runuway.jpg'),
            new Cancion(17, 'Don Omar', 'Salio el sol','5:15', 2006, 'Reguetón','.\\portada_imagenes\\salio el sol.jpg'),
            new Cancion(18, 'Ed sheeran', 'Shape of you','3:55', 2017, 'Dance-pop, dancehall, House tropical','.\\portada_imagenes\\shape of you.jpg'),
            new Cancion(19, 'Ben E.King', 'Stand by me','2:17', 1961, 'Rhythm and Blues, Soul','..\\portada_imagenes\\stand-by-me.jpg'),
            new Cancion(20, 'Jose Manuel', 'Spanish girl','5:00', 1998, 'Bachata','.\\portada_imagenes\\spanish girl.jpg'),
            new Cancion(21, 'TINI, Morat', 'Consejo de amor','3:26', 2018, 'balada-pop','.\\portada_imagenes\\consejo_de_amor.jpg'),
            new Cancion(22, 'Karol G', 'Tusa','3:20', 2019, 'Reguetón','.\\portada_imagenes\\tusa.jpg'),
        ]

        this.lista_filtrada = this.catalogoDeCanciones
        this.herramientasInterfazGrafica = herramientasInterfazGrafica
        this.herramientasInterfazGrafica.establecerEventosFiltrado()
        this.cargar()
    }

    cargar(){
        this.herramientasInterfazGrafica.cargarListaCanciones(this.lista_filtrada)
    }
    restablecerCanciones(){
        this.lista_filtrada = this.catalogoDeCanciones
        this.cargar()
    }
    filtrarCanciones(textofiltro){
        let texto = textofiltro.tolowerCase()
        this.lista_filtrada = this.catalogoDeCanciones.filter((cancion) => {
            return cancion.nombre.tolowerCase().indexOf(texto)!=-1 || cancion.artista.tolowerCase().
            indexOf(texto) !=-1 || cancion.genero.tolowerCase().indexOf(texto) != -1
        })
        this.cargar()
    }
}

class ListaFavoritos{
    constructor(herramientasInterfazGrafica){
        this.ListaCanciones = new Array()
        this.herramientasInterfazGrafica = herramientasInterfazGrafica
    }
    agregarCancion(cancion){
        if (this.ListaCanciones.indexOf(cancion) == -1){
            this.herramientasInterfazGrafica.agregarEnListaDeFavoritos(cancion)
            this.ListaCanciones.push(cancion)
        }
    }
}

class ListaReproduccion {
    constructor(herramientasInterfazGrafica){
        this.ListaCanciones = new Array()
        this.herramientasInterfazGrafica = herramientasInterfazGrafica
    }
    agregarCancion(cancion){
        if (this.ListaCanciones.indexOf(cancion) == -1){
            this.herramientasInterfazGrafica.agregarEnListaReproduccion(cancion)
            this.ListaCanciones.push(cancion)
        }
    }


    removerCancion(cancion){
        if(this.ListaCanciones.indexOf(cancion) !=-1){
            this.herramientasInterfazGrafica.removerCancion(cancion)

            let indice = this.ListaCanciones.indexOf(cancion)
            if(indice!=1){
                this.ListaCanciones.splice(indice,1)
            }
        }
        this.herramientasInterfazGrafica.reproducirLista(this.ListaCanciones)
    }  
    reproducirLista(lista, cancion){
        this.ListaCanciones = new Array()
        let indice_Cancion_Seleccionada = lista.indexOf(cancion)
        if(indice_Cancion_Seleccionada != -1){
            for (let indiceCancionActual = indice_Cancion_Seleccionada; indiceCancionActual< lista.length;
                indiceCancionActual++){
                    this.ListaCanciones.push(lista[indiceCancionActual])
            }
            for (let indiceCancionActual =0 ; indiceCancionActual<indice_Cancion_Seleccionada;
                indiceCancionActual++){
                    this.ListaCanciones.push(lista[indiceCancionActual])
            }
        }
        this.herramientasInterfazGrafica.reproducirLista(this.ListaCanciones)
    }

}

class herramientasInterfazGrafica{
    constructor(reproductor){
        this.domListaCanciones = document.getElementById("listcanciones")
        this.domListaFavoritos = document.getElementById("favoritos")
        this.domListaReproduccion = document.getElementById('playist')
        this.domListaInformacion = document.getElementById('contenedor_info_portada')
        this.reproductor = reproductor
    }

    establecerEventosFiltrado(){
        this.domCatalogoBotonFiltrarCanciones = document.getElementById('buscador_filtro')
        this.domCatalogoBotonRestablecerCanciones = document.getElementById('repetidor_cancion')
        this.domCatalogoBotonFiltrarCanciones.addEventListener("click", function (){
            this.domCatalogoBotonFiltrarCanciones = document.getElementById('buscador')
            reproductor.listaCanciones.filtrarCanciones(this.domCatalogoBotonFiltrarCanciones.value)
        })
        this.domCatalogoBotonRestablecerCanciones.addEventListener("click", function(){
            this.domCatalogoTextoFiltroCanciones = document.getElementById('buscador')
            this.domCatalogoTextoFiltroCanciones = ""
            reproductor.listaCanciones.restablecerCanciones()
        })
    }

    cargarListaCanciones(listaFiltrada){
        this.limpiarListaDeCanciones()
        listaFiltrada.forEach((cancion) =>{
            this.agregarEnListaDeCanciones(cancion)
        })
    }

    limpiarListaDeCanciones(){
        while (this.domListaCanciones.firstChild){
            this.domListaCanciones.removeChild(this.domListaCanciones.firstChild)
        }
    }

    agregarEnListaDeCanciones(cancion){
        let elementoCancion = this.crearElementoListaDeCanciones(cancion)
        this.domListaCanciones.appendChild(elementoCancion)
    }

    crearElementoListaDeCanciones(cancion){
        let botonReproducir = document.createElement("i")
        botonReproducir.className ="bi bi-play-circle"
        botonReproducir.addEventListener("click", function(){
            reproductor.ListaReproduccion.reproducirLista(reproductor.listaCanciones.listaFiltrada,
            cancion)
        })

        let botonFavorito = document.createElement("i")
        botonFavorito.className = "bi bi-heart-fill"
        botonFavoritootonFavorito.addEventListener("click", function (){
            reproductor.listaFavoritos.agregarCancion(cancion)
        })

        let botonAgregar = document.createElement("i")
        botonAgregar.className = "bi bi-plus-circle"
        botonAgregar.addEventListener("click", function (){
            reproductor.ListaReproduccion.agregarCancion(cancion)
        })

        let spanNombreCancion = document.createElement("span")
        spanNombreCancion.innerText = cancion.nombre

        let elementoCancion = document.createElement("div")
        elementoCancion.appendChild(spanNombreCancion)
        elementoCancion.appendChild(botonReproducir)
        elementoCancion.appendChild(botonFavorito)
        elementoCancion.appendChild(botonAgregar)
        return elementoCancion

    }

    agregarEnListaDeFavoritos(cancion){
        let elementoCancion = this.crearElementoListaDeFavoritos(cancion)
        this.domListaFavoritos.appendChild(elementoCancion)
    }

    removerDeListaDeFavoritos(cancion){
        let elementoCancion = document.getElementById("elementoFavorito_" + cancion.codigo)
        if(elementoCancion){
            while (elementoCancion.firstChild){
                elementoCancion.removeChild(elementoCancion.firstChild)
            }
            elementoCancion.parentElement.removeChild(elementoCancion)
        }
    }

    crearElementoListaDeFavoritos(cancion){
        let botonFavorito = document.createElement("i")
        botonFavorito.className = "bi bi-heart"
        botonFavorito.addEventListener("click", function(){
            reproductor.listaFavoritos.removerCancion(cancion)
        })

        let botonReproducir = document.createElement("i")
        botonReproducir.className = " bi bi-play-circle"
        botonReproducir.addEventListener("click", function(){
            reproductor.ListaReproduccion.reproducirLista(reproductor.listaFavoritos.listaCanciones,
                cancion)
        })

        let botonAgregar = document.createElement("i")
        botonAgregar.className = "bi bi-plus-circle"
        botonAgregar.addEventListener("click", function(){
            reproductor.ListaReproduccion.agregarCancion(cancion)
        })

        let spanNombreCancion = document.createElement("span")
        spanNombreCancion.innerText = cancion.nombre


        let elementoCancion = document.createElement("div")
        elementoCancion.id = "elementoFavorito_" + cancion.codigo
        elementoCancion.appendChild(spanNombreCancion)
        elementoCancion.appendChild(botonReproducir)
        elementoCancion.appendChild(botonFavorito)
        elementoCancion.appendChild(botonAgregar)
        return elementoCancion
    }

    agregarEnListaReproduccion(cancion){
        let elementoCancion = this.crearElementoListaDeReproduccion(cancion)
        this.domListaReproduccion.appendChild(elementoCancion)
    }

    limpiarListaDeReproduccion(){
        while(this.domListaReproduccion.firstChild){
            this.domListaReproduccion.removeChild(this.domListaReproduccion.firstChild)
        }
    }

    removerDeListaDeReproduccion(cancion){
        let elementoCancion = document.getElementById("elementoReproduccion_" + cancion.codigo)
        if (elementoCancion){
            while(elementoCancion.firstChild){
                elementoCancion.removeChild(elementoCancion.firstChild)
            }
            elementoCancion.parentElement.removeChild(elementoCancion)
        }
    }

    reproducir(cancion){
        this.limpiarListaDeReproduccion()
        this.agregarEnListaReproduccion(cancion)
    }

    reproducirLista(lista){
        this.limpiarListaDeReproduccion()
        lista.forEach(cancion => {
            this.agregarEnListaReproduccion(cancion)
        })
        this.limpiarListaInformacion()
        reproductor.empezarReproduccion()
    }

    crearElementoListaDeReproduccion(cancion){
        let botonReproducir = document.createElement("i")
        botonReproducir.className = "bi bi-play-circle"
        botonReproducir.addEventListener("click", function(){
            reproductor.reproducir(cancion)
        })

        let botonFavorito = document.createElement("i")
        botonFavorito.className = "bi bi-heart-fill"
        botonFavorito.addEventListener("click", function(){
            reproductor.listaFavoritos(cancion)
        })

        let botonRemover = document.createElement("i")
        botonRemover.className = "bi bi-dash-circle"
        botonRemover.addEventListener("click", function(){
            reproductor.removerCancion(cancion)
        })

        let spanNombreCancion = document.createElement("span")
        spanNombreCancion.innerText = cancion.nombre

        let elementoCancion = document.createElement("div")
        elementoCancion.id = "elementoReproduccion_" + cancion.codigo
        elementoCancion.appendChild(spanNombreCancion)
        elementoCancion.appendChild(botonReproducir)
        elementoCancion.appendChild(botonFavorito)
        elementoCancion.appendChild(botonRemover)
        return elementoCancion
    }

    crearListaInformacion(cancion){
        this.limpiarListaInformacion()
        let elementoCancion = document.getElementById("listaInformacionNombreCancion")
        elementoCancion.innerText = "Nombre:" + cancion.nombre

        let elementoNombreArtista = document.getElementById("listaInformacionNombreArtista")
        elementoNombreArtista.innerText = "Artista:" + cancion.artista

        let elementoImagenCancion = dicynebt.getElementById("listaInformacionImagen")
        elementoImagenCancion.src = "../portada_imagenes/" + cancion.nombre + ".jpg"

        let elementoGenero = document.getElementById("listaInformacionGenero")
        elementoGenero.innerText = "Genero:" + cancion.genero

        let elementoAnio = document.getElementById("listaInformacionNombreAnio")
        elementoAnio.innerText = "Año:" + cancion.anio

        let elementoDuracion = document.getElementById("listaInformacionDuracion")
        elementoDuracion.innerText = "Duracion:" + cancion.duracion
    }

    limpiarListaInformacion(){
        let elementoCancion = document.getElementById("listaInformacionNombreCancion")
        elementoCancion.innerText = "Nombre:"

        let elementoNombreArtista = document.getElementById("listaInformacionNombreArtista")
        elementoNombreArtista.innerText = "Artista:" 

        let elementoImagenCancion = dicynebt.getElementById("listaInformacionImagen")
        elementoImagenCancion.src = "../portada_imagenes/degradado.jpg" 

        let elementoGenero = document.getElementById("listaInformacionGenero")
        elementoGenero.innerText = "Genero:" 

        let elementoAnio = document.getElementById("listaInformacionNombreAnio")
        elementoAnio.innerText = "Año:"

        let elementoDuracion = document.getElementById("listaInformacionDuracion")
        elementoDuracion.innerText = "Duracion:" 
    }

    establecerEventosReproductor(){
        this.domReproductorBotonAnterior = document.getElementById("reproductorBotonAnterior")
        this.domReproductorBotonAnterior.addEventListener("click", function(){
            reproductor.reproducirAnterior()
        })

        this.domReproductorBotonSiguiente = document.getElementById("reproductorBotonSiguiente")
        this.domReproductorBotonSiguiente.addEventListener("click", function(){
            reproductor.reproducirSiguiente()
        })

        this.domReproductorBotonPausa = document.getElementById("reproductorBotonPausa")
        this.domReproductorBotonPausa.addEventListener("click", function(){
            reproductor.pausarReproduccion()
        })

        this.domReproductorBotonReproducir = document.getElementById("reproductorBotonReproducir")
        this.domReproductorBotonReproducir.addEventListener("click", function(){
            reproductor.continuarReproduccion()
        })

        this.domReproductorBotonSilenciar = document.getElementById("reproductorBotonSilenciar")
        this.domReproductorBotonSilenciar.addEventListener("click", function(){
            reproductor.silenciar()
        })
    }
}

class Reproductor{
    constructor(){
        this.indiceCancionPorReproducir = 0
        this.herramientas = new herramientasInterfazGrafica(this)
        this.listaCanciones = new ListaCanciones(this.herramientas)
        this.listaFavoritos = new ListaFavoritos(this.herramientas)
        this.ListaReproduccion = new ListaReproduccion(this.herramientas)
        this.reproductorDeAudio = new Audio()
        this.reproductorDeAudio.volume = 0.2
        this.reproductorDeAudio.addEventListener("ended", function(){
            reproductor.reproducirSiguiente()
        })
        this.herramientas.establecerEventosReproductor()
    }

    empezarReproduccion(){
        reproductor.reproductorDeAudio.pause()
        this.reproducir()
    }

    reproducir(cancion){
        if (reproductor.ListaReproduccion.listaCanciones.length>0){
            if(!cancion){
                reproductor.indiceCancionPorReproducir = 0
                cancion = reproductor.ListaReproduccion.listaCanciones[this.indiceCancionPorReproducir]
            }
            else{
                reproductor.indiceCancionPorReproducir = reproductor.ListaReproduccion.listaCanciones.indexOf(cancion)
            }
            if(reproductor.indiceCancionPorReproducir != -1){
                reproductor.herramientas.crearListaInformacion(cancion)
                let rutaArhivoCancion = "../Canciones/" + cancion.nombre + ".mp3"
                reproductor.reproductorDeAudio.src =  rutaArhivoCancion
                reproductor.reproductorDeAudio.autoplay = true
            }
        }    
    }

    reproducirAnterior(){
        if(reproductor.ListaReproduccion.listaCanciones.length>0){
            if(reproductor.indiceCancionPorReproducir == 0){
                const cancion = reproductor.ListaReproduccion.listaCanciones[reproductor.
                ListaReproduccion.listaCanciones.length-1]
                reproductor.reproducir(cancion)
            } else{
                const cancion = reproductor.ListaReproduccion.listaCanciones[reproductor.
                indiceCancionPorReproducir-1]
                reproductor.reproducir(cancion)
            }
        }
    }

    reproducirSiguiente(){
        if (reproductor.ListaReproduccion.listaCanciones.length>0){
            if(reproductor.indiceCancionPorReproducir == reproductor.ListaReproduccion.listaCanciones.
                length -1){
                    const cancion = reproductor.ListaReproduccion.listaCanciones[0]
                    reproductor.reproducir(cancion)
            }
            else{
                const cancion = reproductor.ListaReproduccion.listaCanciones[reproductor.
                    indiceCancionPorReproducir + 1]
                    reproductor.reproducir(cancion)
            }
        }
    }

    pausarReproduccion(){
        reproductor.reproductorDeAudio.pause()
    }

    continuarReproduccion(){
        reproductor.reproductorDeAudio.play()
    }

    silenciar(){
        reproductor.reproductorDeAudio.muted = !reproductor.reproductorDeAudio,muted
    }
}

const reproductor = new Reproductor();


