const photos = [
    {
        src: "./images/afuera-de-labs.jpg",
        width: 3456,
        height: 4608,
        title: "Afuera de labs",
        description:
            "Aquí estabamos en laboratorios de electrónica esperando a que inicie la clase, creo que metrología con Cupul y Jhony. Era divertido tomar clases contigo aunque no supieramos nada de electrónica",
    },
    {
        src: "./images/amable.jpg",
        width: 960,
        height: 1280,
        title: "Karlita amable",
        description:
            "La famosa Karlita amable, si te la topas pídele unos hotcakes.",
    },
    {
        src: "./images/apretando-labios.jpg",
        width: 720,
        height: 1280,
        title: "Apretando labios",
        description:
            "No sé cómo se llama este tipo de labios, pero esto prueba que Karla no solo puede sacar su lengua y hacerla taquito.",
    },
    {
        src: "./images/aqui-con-didi.jpg",
        width: 1080,
        height: 1920,
        title: "Aquí con Didi",
        description:
            "Escuchando música con Didi en versión flaco. Mientras que Karlita está acechándote esperando a que te duermas 💀",
    },
    {
        src: "./images/audifonos.jpg",
        width: 720,
        height: 1280,
        title: "Audífonos",
        description:
            "Con tus audífonos chidos y tu cabello rojo yo me pregunto, ¿hay algo que no hagas bien?",
    },
    {
        src: "./images/bata.jpg",
        width: 1932,
        height: 1932,
        title: "Karlita 100cítifica",
        description:
            "La Karla científica tan hermosa como inteligente, dicen que pudo haber desubierto la cura del COVID-19 pero no le llegaron al precio.",
    },
    {
        src: "./images/bonita.jpg",
        width: 720,
        height: 1280,
        title: "Bonita",
        description:
            "En esta foto me recuerdas mucho a Emma Stone, tal vez por la pose, como sea tienes un buen delineado y me gusta mucho esta foto así que era obligatorio que esté en este album.",
    },
    {
        src: "./images/bonita-con-lentes.jpg",
        width: 720,
        height: 1280,
        title: "Bonta con lentes",
        description:
            "Me gusta mucho tu outfit y tu vibra en esta foto, es una combinación de tus versiones de Karla amable y Karla elegante.",
    },
    {
        src: "./images/botas.jpg",
        width: 3000,
        height: 4000,
        title: "Tenis",
        description:
            "Unos tenis bonitos que guardan unos lindos piesitos. Nada más que agregar.",
    },
    {
        src: "./images/buscando-a-evelyn.jpg",
        width: 3096,
        height: 4128,
        title: "Buscando a Evelyn",
        description:
            "Ese día fuimos al Tsunami y pasamos antes a buscar a Evelyn. Comimos unas quesadillas, tomamos horchata y estuvimos caminando buscando camión, fue agradable aunque cansado.",
    },
    {
        src: "./images/cachetitos.jpg",
        width: 720,
        height: 1280,
        title: "Cachetitos",
        description:
            "Karlita mostrando sus cachetitos apretables con un delineado, al parecer no le importa mandar imagenes extremadamente cute para que su befo muera de ternura 7n7",
    },
    {
        src: "./images/cafeteria-con-fleco.jpg",
        width: 3456,
        height: 4608,
        title: "Cafetería con fleco",
        description:
            "Esta foto me gusta mucho porque tienes fleco, te veías lindo con él, además de que las luces de fonto hace que tengas unas orejitas como de Micky Mouse que te hace ver doblemente tierna uwu.",
    },
    {
        src: "./images/camion-feliz.jpg",
        width: 1932,
        height: 1932,
        title: "Camión feliz",
        description:
            "No recuerdo el trasfondo de esta foto pero se nos ve feliz y tiene un buen filtro, no sé si se lo agregaste o es el efecto del sol pero se ve bien.",
    },
    {
        src: "./images/camion-triste.jpg",
        width: 3464,
        height: 4618,
        title: "Camión triste",
        description:
            "Te has encontrado a la Karlita triste, dale comida y amor para que vuelva a ser feliz c:",
    },
    {
        src: "./images/chonguitos.jpg",
        width: 960,
        height: 1280,
        title: "Chonguitos",
        description:
            "Karlita versión coreana, o mejor dicho 사랑해요. Pero es de corea del sur porque es amable y le gusta los doramas.",
    },
    {
        src: "./images/clase-de-maya.jpg",
        width: 3456,
        height: 4608,
        title: "Clase de maya",
        description:
            "Esta es mi foto de ti favorita de todos los tiempos, te ves tan cool con tu cabello y tus ligas en tu muñeca. No cabe duda que Karlita versión meca ha sido de las versiones más poderosas y bufeadas del Karlaverso.",
    },
    {
        src: "./images/comiendo-en-casa.jpg",
        width: 720,
        height: 1280,
        title: "Comiendo en casa",
        description:
            "Tal vez no sea la mejor foto de Karla, pero es ella en su hábitat natural, comiendo, siendo feliz y con eso me basta para quererla y admirarla.",
    },
    {
        src: "./images/comiendo-en-fiq.jpg",
        width: 3456,
        height: 4608,
        title: "Comiendo en fiq",
        description:
            "Hubo una temporada en la que íbamos mucho a FIQ ya que tomabas clases allí, en esta ocasión estas comiendo una bolita rosa de azucar que compramos en el OXXO mientras estás atenta a tus alrededores.",
    },
    {
        src: "./images/comiendo-helado.jpg",
        width: 1280,
        height: 960,
        title: "Comiendo helado",
        description:
            "Una de las varias ocasiones que fuimos al parque que está en frente de la catedral mientras comiamos un Blizzard, que buenos tiempo y que felices se nos ve, deberíamos salir más seguido 👀",
    },
    {
        src: "./images/concierto-1.jpg",
        width: 4000,
        height: 3000,
        title: "Concierto en el centro",
        description:
            "Karla yucatecan musician 🎻: Dicen que su música es capaz de conmover hasta la persona con el corazón más duro, yo tuve la dicha de escucharla tocar en un local del centro y fue tanta gente a escucharla que ni alcance lugar para sentarme.",
    },
    {
        src: "./images/concierto-2.jpg",
        width: 4000,
        height: 3000,
        title: "Concierto en el teatro",
        description:
            "Fui con Didier a escuchar tu concierto y me la pasé genial, las orquestas previas estuvieron pasables pero nada como escuchar a tu befa, un deleite músical 10/10. Y luego fuimos a comer en los trompos uwu",
    },
    {
        src: "./images/con-dinosaurio.jpg",
        width: 960,
        height: 1280,
        title: "Con un dinosaurio",
        description:
            "Aqui dos de mis seres vivos favoritos, espero que sigas inscribiendote a cursos para que sigas viviendo estas experiencias tan geniales.",
    },
    {
        src: "./images/con-el-pana.jpg",
        width: 3136,
        height: 4224,
        title: "Con el pana",
        description:
            "Aquí Karli como siempre invadiendo mi privacidad y tomándome fotos cuando estoy descuidado >:c",
    },
    {
        src: "./images/con-la-beba.jpg",
        width: 960,
        height: 1280,
        title: "Con la beba",
        description:
            "La famosa beba Natalia fake... No Karla no te la robes :'u",
    },
    {
        src: "./images/con-lentes.jpg",
        width: 720,
        height: 1280,
        title: "Karla con lentes",
        description:
            "Karla es muy bonita, esos lentes grandes le quedan bien y le hacen ver más intelectual, además mira ese delineado 7u7 esta chica solo le falta una batita para que sea perfecta",
    },
    {
        src: "./images/delineado-bonito.jpg",
        width: 720,
        height: 1280,
        title: "Delineado bonito",
        description:
            "Maquillaje: 9.5/10. Delineado: 10/10, Modelo: 11/10. Soy muy objetivo con estas calificaciones 🤠",
    },
    {
        src: "./images/despues-de-baño.jpg",
        width: 960,
        height: 1280,
        title: "Después de baño",
        description:
            "Esos ojos bonitos y gigantes que miran a través de mi, me siento débil y fuerte al mismo tiempo, siento que puedo hacer lo que me proponga.",
    },
    {
        src: "./images/diadema.jpg",
        width: 897,
        height: 1280,
        title: "Diadema",
        description:
            "No lo negaré, me gusta verte con diademas. Te ves muy bonita y sacada de una película de esas antiguas como orgullo y prejuicio.",
    },
    {
        src: "./images/en-casa-1.jpg",
        width: 3000,
        height: 4000,
        title: "En casa 1",
        description:
            "Esta es la foto que más caracteriza a Karla, sentada en su sillón comiendo mientras ve qué estoy haciendo, una foto dice más que mil palabras pero esta foto dice la autobiografía de Karla Figueroa.",
    },
    {
        src: "./images/en-casa-2.jpg",
        width: 3136,
        height: 4224,
        title: "En casa 2",
        description:
            "No me gusta como salgo pero esa lengüita hace que valga la pena la foto.",
    },
    {
        src: "./images/en-clases.jpg",
        width: 3456,
        height: 4224,
        title: "En clases",
        description:
            "Una de las versiones más poderosas de Karla: Karlita meca, esperando a su clase de Mecánica Vectorial con Zapata mientras resuelve ecuaciones diferenciales en su mente, tengan cuidado con ella.",
    },
    {
        src: "./images/en-el-camion.jpg",
        width: 1932,
        height: 1932,
        title: "En el camión",
        description:
            "Todo es risas, diversión y descando hasta que tu befa decide tomarte una foto.",
    },
    {
        src: "./images/en-el-espejo.jpg",
        width: 720,
        height: 1280,
        title: "En el espejo",
        description:
            "Que buen outfit, se te ve muy de otoño y ese cinturón se ve chido.",
    },
    {
        src: "./images/en-el-paradero.jpg",
        width: 3136,
        height: 4224,
        title: "En el paradero",
        description:
            "Me da mucha risa esta foto, un Axelito bien emocionado mostrandote la funda de su redmi note 7 mientras que Karla está tomando fotos en incógnito y se le ve su ojito, es tan cute.",
    },
    {
        src: "./images/en-parque-1.jpg",
        width: 3456,
        height: 4608,
        title: "En el parque 1",
        description:
            "Mi segunda foto favorita de Karla, se le ve tan elegante y hermosa con ese lunar en su frente, facilmente podria estar viniendo de una reunión de inversionistas, ella es demasiado buena para ser verdad, algo debe ocultar.",
    },
    {
        src: "./images/en-parque-2.jpg",
        width: 3456,
        height: 4608,
        title: "En el parque 2",
        description:
            "Karlita versión elegante, no le hables porque te va a juzgar en silencio e ignorar si cree que no eres lo suficientemente bueno para ella.",
    },
    {
        src: "./images/foto-de-samsung.jpg",
        width: 960,
        height: 1280,
        title: "Foto de samsung",
        description:
            "Esta fue la primera foto que tomaste con tu Samsung Galaxy que fuimos a comprar a la plaza Oriente, lamento que no haya salido bueno el celular :(",
    },
    {
        src: "./images/fresca.jpg",
        width: 720,
        height: 1280,
        title: "Fresca la pana",
        description:
            "Karla la pana fresca, muy amable y buena onda, puedes hablar con ella de lo que sea y las horas pasaran volando pero ten cuidado con consumir lo que te ofrezca.",
    },
    {
        src: "./images/gorra-pokemon.jpg",
        width: 3136,
        height: 4224,
        title: "Gorra pokémon",
        description:
            "Iba a poner que este ha sido el mejor regalo que me has dado, pero pensandolo bien me has dado muchas cosas buenas: Skin de Annie, pin de Umbreon, libro de Death Note, taza de San Luis Potosí y lo más importante: tu amistad.",
    },
    {
        src: "./images/graduacion.jpg",
        width: 960,
        height: 720,
        title: "Graduación",
        description:
            "Los panas graduandose de la preparatoria, uno de mis mejores momentos en mi vida y lo viví a tu lado.",
    },
    {
        src: "./images/highscore.jpg",
        width: 4000,
        height: 3000,
        title: "En highscore",
        description:
            "Esta salida fue muy genial, boneless, amigos, videojuegos, hubo de todo. Fue una pena que tuvieras que irte tan temprano :( hay que repetir pero quedarnos más tiempo",
    },
    {
        src: "./images/jugando-cartas.jpg",
        width: 2592,
        height: 4608,
        title: "Jugando cartas",
        description:
            "Aquí estabamos en la cafetería de la prepa jugando unas retas de Coup, la vida era buena y tú parecías estar sorprendida por algo, tal vez descubriste que el asesino en realidad era un embajador",
    },
    {
        src: "./images/karla-siendo-feliz.jpg",
        width: 720,
        height: 1280,
        title: "Karla siendo feliz",
        description:
            "Esta fotito me gusta, te vez tan feliz y tan bonita con tu cabello rojito, ojalá siempre estés así (me refiero a que siempre estés feliz... bueno también pelirroja)",
    },
    {
        src: "./images/karla-y-didi.jpg",
        width: 4128,
        height: 2322,
        title: "Karla y Didi",
        description:
            "Didier alguna vez fue flaco? :o digo, que chiquititos se veian, todo jóvenes y con esperanzas.",
    },
    {
        src: "./images/karlita-electronica.jpg",
        width: 4608,
        height: 3456,
        title: "Karla y Didi",
        description:
            "Me ayudaste con mi tarea de fotografía y fuiste mi modelo :3 fue muy genial, y luego tuve que exponer en frente de una audiencia porqué la mujer es importante en la ciencia, fue mi primer trauma en la facultad.",
    },
    {
        src: "./images/lengua-azul.jpg",
        width: 1080,
        height: 1150,
        title: "Con la lengua azul",
        description:
            "No hay mucho que decir, comiste una paleta y me mandaste una fotito por telegram uwu",
    },
    {
        src: "./images/miniso-spiderman.jpg",
        width: 3000,
        height: 4000,
        title: "Mi superheroina favorita",
        description:
            "Karlita eres mi superheroína favorita, siempre me alegras mis dias y me conoces mejor que nadie, que bueno que estás en mi vida.",
    },
    {
        src: "./images/miniso-rana.jpg",
        width: 3000,
        height: 4000,
        title: "Miniso y una rana",
        description:
            "La segunda foto tuya con un peluche en la cabeza en Miniso, ¿acaso es esta una nueva tradición?",
    },

    {
        src: "./images/misteriosa.jpg",
        width: 720,
        height: 1280,
        title: "Misteriosa",
        description:
            "Wow te ves genial, tal vez por tu diadema o por tu pose. Me gustó.",
    },
    {
        src: "./images/parque-facultad.jpg",
        width: 3456,
        height: 4608,
        title: "El parque cerca de la fac",
        description:
            "Que buenos tiempos, cuando íbamos a pasar el rato en el parque que estaba cerca de la facultad, había juegos, columpios y una piedra gigante. Siempre quise hacer un picnic allá pero no se pudo.",
    },
    {
        src: "./images/paseo-vayven.jpg",
        width: 1280,
        height: 960,
        title: "Paseo del va y ven",
        description:
            "Esta foto es de cuando fuimos a la plaza de City Center porque el camión de Va y Ven estaba gratis y nos dijo tu mamá que vayamos a dar un paseo, recuerdo que fuimos a miniso y luego a comer galletas de Subway.",
    },
    {
        src: "./images/pelirroja.jpg",
        width: 720,
        height: 1280,
        title: "Karlita cosplay Kurisu",
        description:
            "Karlita versión cosplay de Kurisu, no es muy fácil encontrarla en el ambiente natural, rápido traiganle una bata antes que se vaya.",
    },
    {
        src: "./images/platica-induccion.jpg",
        width: 1920,
        height: 1080,
        title: "Platica de inducción",
        description: "Tres pavos atendiendo a la plática de inducción <3",
    },
    {
        src: "./images/pokemon.jpg",
        width: 3000,
        height: 4000,
        title: "Karla pokefanática",
        description:
            "Karla maestra pokémon, le gusta entrenar a su Squirtle y retar a cualquier persona que se le ponga en frente, altamente otaku, si la ves... pateala.",
    },
    {
        src: "./images/primer-dia.jpg",
        width: 3264,
        height: 2488,
        title: "Primer día de clases",
        description:
            "Una bella chica posando a la cámara mientras su mejor amigo durmiendo en el fondo. Ya no hay respeto.",
    },
    {
        src: "./images/salida-con-axel.jpg",
        width: 960,
        height: 1280,
        title: "Una salida con el befo",
        description:
            "Una de las tantas veces que hemos salido al centro a vernos y comprar, nunca está de más.",
    },
    {
        src: "./images/santaolalla.jpg",
        width: 1080,
        height: 720,
        title: "Con Santaolalla",
        description: "Dos de las personas que más admiro... simplemente épico",
    },
    {
        src: "./images/sueter.jpg",
        width: 720,
        height: 1280,
        title: "Sueter",
        description:
            "Una Karlita cute con delineado saludando a la cámara. Abrígate bien y toma awita :3",
    },
    {
        src: "./images/tarea-biblio-1.jpg",
        width: 3000,
        height: 4000,
        title: "Tarea en biblio 1",
        description:
            "Karla concentrada haciendo su tarea en biblioteca, su IQ sobrepasa los 101 puntos.",
    },
    {
        src: "./images/tarea-biblio-2.jpg",
        width: 3000,
        height: 4000,
        title: "Tarea en biblio 2",
        description:
            "Mira, es el estuche de osito que tiene su propio sticker :o",
    },
    {
        src: "./images/tarea-en-cafe.jpg",
        width: 3456,
        height: 4608,
        title: "Tarea en biblio 3",
        description:
            "Al principio pensé que estabas haciendo tarea como en las fotos anteriores, pero luego viendolo bien... por qué harias tu tarea en mi laptop? eh?",
    },
    {
        src: "./images/tomando-foto.jpg",
        width: 3456,
        height: 4608,
        title: "Tomando foto",
        description:
            "Es como el sticker de Tomori tomando una fotito con su cámara uwu",
    },
    {
        src: "./images/tomando-malteada.jpg",
        width: 1280,
        height: 960,
        title: "Tomando malteada",
        description:
            "Yo no salí tan bien en esta foto, pero ese café se ve bueno.",
    },
    {
        src: "./images/tomori-1.jpg",
        width: 720,
        height: 1280,
        title: "Karla cosplay Tomori 1",
        description:
            "Karla cosplay de Tomori, no te dejes engañar, en cualquier momento se hará invisible y te golpeara diciendo que vio un bolchito amarillo invisible.",
    },
    {
        src: "./images/tomori-2.jpg",
        width: 720,
        height: 1280,
        title: "Karla cosplay tomori 2",
        description:
            "Karla cosplay de Tomori intelectual con un toque de morado, sólo diré que le queda bien.",
    },
    {
        src: "./images/vida-es-buena.jpg",
        width: 1080,
        height: 1440,
        title: "La vida es buena",
        description: "Cuando la vida era buena... ¿Qué le pasó a esa Karlita?",
    },
    {
        src: "./images/videollamada.jpg",
        width: 1080,
        height: 1920,
        title: "Videollamada",
        description:
            "Pues nada, dos amigos felices teniendo una llamada a punto de mimir, no hagas mucho ruido, hay que esperar a que alguno se duerma para pintarle la cara.",
    },
    {
        src: "./images/viendo-celular.jpg",
        width: 3000,
        height: 4000,
        title: "Viendo celular",
        description: "Aún estando mmolesta o seria se ve muy linda, tal vez es génetica.",
    },
    {
        src: "./images/zoom-biblioteca.jpg",
        width: 2250,
        height: 4000,
        title: "Llamada en la biblioteca",
        description: "Karlita tecnológica, por las tardes atiende a sus videollamadas del local y por las mañanas hackea empresas, toda una experta en programación 🤖",
    },
];

export default photos;
