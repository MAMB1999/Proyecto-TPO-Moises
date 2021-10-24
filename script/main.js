const campeones = [
    {
        name:"Ahri",
        description:"Ahri es una misteriosa raposa vastaya que está estrechamente vinculada a la magia del mundo espiritual y busca su lugar en el mundo. Desde que se introdujo en la sociedad mortal, se ha convertido en una depredadora reacia y empática; tanto que prefiere manipular las emociones de su presa antes de absorber su esencial vital, que le otorga recuerdos de cada alma que consume.",
        imagen:"3"

    },
    {
        name:"Akali",
        description:"Tras abandonar la orden de los Kinkou y su título de Puño de la Sombra, Akali actúa ahora en solitario y está lista para convertirse en el arma mortal que necesita su gente. Aunque no renuncia a las enseñanzas de Shen, su maestro, ha jurado defender Jonia de sus enemigos, asesinándolos uno a uno. Los ataques de Akali son silenciosos, pero su mensaje se escucha con toda claridad: temed a la asesina sin maestro",
        imagen:"",
        rol:"2"

    },
    {
        name:"Akshan",
        description:"Tras abandonar la orden de los Kinkou y su título de Puño de la Sombra, Akali actúa ahora en solitario y está lista para convertirse en el arma mortal que necesita su gente. Aunque no renuncia a las enseñanzas de Shen, su maestro, ha jurado defender Jonia de sus enemigos, asesinándolos uno a uno. Los ataques de Akali son silenciosos, pero su mensaje se escucha con toda claridad: temed a la asesina sin maestro",
        imagen:"",
        rol:"5"

    },
    {
        name:"Alistar",
        description:"Alistar, un poderoso guerrero con una reputación temible, busca venganza por la muerte de su clan a manos del imperio noxiano. Aunque fue esclavizado y forzado a vivir como gladiador, fue su voluntad inquebrantable lo que le impidió convertirse en una verdadera bestia. Ahora, libre de las cadenas de sus antiguos amos, lucha en nombre de los oprimidos y los desfavorecidos, y empuña su furia como un arma, igual de peligrosa que sus cuernos, puños y pezuñas",
        imagen:"",
        rol:"4"

    },
    {
        name:"Amumu",
        description:"Cuenta la leyenda que Amumu es un alma solitaria y melancólica de la vieja Shurima que vaga por el mundo en busca de un amigo. Condenado por una maldición ancestral, su destino es permanecer solo para siempre, pues su tacto es muerte y su cariño, la perdición. Aquellos que afirman haberlo visto lo describen como un cadáver viviente, menudo y cubierto de vendajes. Amumu ha suscitado mitos, canciones y folclore transmitidos de generación en generación, hasta tal punto que ya es imposible separar la realidad de la ficción.",
        imagen:"",
        rol:"1"

    },
    {
        name:"Annie",
        description:"Peligrosa pero encantadoramente precoz, Annie es una pequeña maga con un inmenso poder piromántico. Incluso en las sombras de las montañas al norte de Noxus, es una maga sin precedentes. Su afinidad natural por el fuego se manifestó a temprana edad con arrebatos emocionales e impredecibles, aunque finalmente aprendió a controlar esos \"trucos traviesos\". Uno de sus favoritos es invocar a su adorado oso de peluche Tibbers; una bestia de fuego protectora. Atrapada en la perpetua inocencia de la infancia, Annie vaga por bosques oscuros, siempre buscando a alguien con quien jugar.",
        imagen:"",
        rol:"3"

    },
    {
        name:"Ashe",
        description:"Ashe, comandante hija del hielo de la tribu de Avarosa, lidera a la horda más poblada del norte. Estoica, inteligente e idealista, pero incómoda en su papel de líder, aprovecha las magias ancestrales de su linaje para empuñar un arco de Hielo Puro. Su gente cree que Ashe es la heroína mitológica Avarosa reencarnada, y ella espera unificar Freljord una vez más al recuperar sus antiguas tierras tribales.",
        imagen:"",
        rol:"5"

    },
    {
        name:"Aurelion Sol",
        description:"Aurelion Sol solía decorar el vasto vacío del reino celestial con maravillas de su propia creación, pero los Aspectos de Targon lo engañaron para que desvelara los secretos de un sol que él mismo había creado. Su increíble poder se vio canalizado para crear dioses guerreros inmortales que protegieran el aparentemente insignificante mundo de Runaterra. Ahora Aurelion Sol desea recuperar su libertad y regresar a su lugar como maestro del cosmos, para lo que no dudará en hacer caer las mismísimas estrellas del firmamento",
        imagen:"",
        rol:"3"

    },
    {
        name:"Bliztcrank",
        description:"Blitzcrank, una mole de metal bruñido, vapor y electricidad crepitante, recorre las calles de Zaun con el objetivo incansable de mejorar la ciudad subterránea y ayudar a aquellos que lo necesiten. Pese a que fue creado para descender hasta los entornos más cáusticos y peligrosos de Zaun para deshacerse de los residuos nocivos, ha superado los límites de su programación original gracias al ingenio de su inventor y al misterioso poder del hextech.",
        imagen:"",
        rol:"4"

    },
    {
        name:"Brand",
        description:"Brand, antes llamado Kegan Rodhe y antiguo miembro de una tribu del helado Freljord, es una lección sobre la tentación de un poder mayor. En busca de una de las legendarias Runas Geogénicas, Kegan traicionó a sus compañeros y se quedó con la Runa. En un instante, el hombre había desaparecido. Su alma se consumió y su cuerpo pasó a ser un recipiente de llamas vivas. Ahora, Brand recorre Valoran en busca de otras Runas Geogénicas, jurando vengarse por calamidades que jamás habría podido sufrir en una docena de vidas mortales.",
        imagen:"",
        rol:"3"

    },
    {
        name:"Braum",
        description:"Bendecido con enormes músculos y un corazón aún más grande, Braum es un héroe e Hijo del Hielo muy querido en Freljord. En todas las tabernas al norte del Fuerte Helado se brinda por su fuerza legendaria y se narra cómo taló un bosque de robles en una sola noche y convirtió una montaña entera en escombros. Provisto de una eterna sonrisa y de su escudo, la puerta mágica de una cámara secreta forjada hace siglos, Braum protege el gélido norte. Se dedica a ayudar a los desfavorecidos con el fin de alcanzar su sueño: un Freljord pacífico.",
        imagen:"",
        rol:"4"

    },
    {
        name:"Camille",
        description:"Convertida en un arma viviente diseñada para operar fuera de la ley, Camille es la jefa de espías del clan Ferros, una elegante agente de élite que se asegura de que nada amenace el funcionamiento de Piltover ni de Zaun. Su adaptabilidad y minuciosidad hacen que considere una técnica descuidada como una humillación con la que hay que terminar. Dotada de una mente tan aguda como las hojas que posee, ha emprendido una búsqueda de la perfección a través de las mejoras hextech a las que se ha sometido, las cuales han llevado a muchos a preguntarse si no será más máquina que humana.",
        imagen:"",
        rol:"2"

    },
    {
        name:"Corki",
        description:"El piloto yordle Corki adora dos cosas por encima de todas las demás: volar y su glamuroso bigote. Aunque no necesariamente en ese orden. Tras abandonar la Ciudad de Bandle, se estableció en Piltover y se enamoró de las máquinas maravillosas que allí encontró. Se dedicó al desarrollo de artilugios voladores, liderando una fuerza de defensa aérea de veteranos experimentados conocidos como las Serpientes Aulladoras. Manteniendo la calma bajo presión, Corki patrulla los cielos de su hogar adoptivo, y nunca ha encontrado un problema que una buena andanada de proyectiles no pudiese resolver.",
        imagen:"",
        rol:"5"

    },
    {
        name:"Darius",
        description:"No hay mayor símbolo del poder de Noxus que Darius, el guerrero más temido y más curtido en batallas de toda la nación. Pasando de orígenes humildes a convertirse en la Mano de Noxus, se escinde a través de los enemigos del imperio, muchos de ellos noxianos. Sabiendo que él nunca duda que su causa sea justa ni tampoco duda cuando levanta su hacha, aquellos que se oponen al comandante de la legión trifariana no encontrarán piedad.",
        imagen:"",
        rol:"1"

    },
    {
        name:"Dr. Mundo",
        description:"Loco de remate, trágicamente homicida, terriblemente morado: el Dr. Mundo es lo que mantiene en sus casas a muchos habitantes de Zaun en las noches especialmente oscuras. Este autoproclamado doctor fue un paciente del psiquiátrico más infame de Zaun. Tras \"curar\" a todo el personal, Dr. Mundo estableció su consulta en las salas vacías en las que solían tratarlo y comenzó a imitar los inmorales procedimientos que estaba tan acostumbrado a vivir en sus carnes. Ahora que cuenta con un armario repleto de medicinas y ningún tipo de conocimiento médico, se vuelve más monstruoso tras cada inyección y aterroriza a los desgraciados \"pacientes\ que deambulan demasiado cerca de ",
        imagen:"",
        rol:"1"

    },
    {
        name:"Draven",
        description:"En Noxus, los guerreros conocidos como justicieros se enfrentan en arenas donde se derrama sangre y se prueba la fortaleza, pero ninguno ha sido tan famoso como Draven. Antiguo soldado, descubrió que las multitudes apreciaban únicamente su predilección por lo dramático, sin mencionar los baños de sangre que causaban sus hachas giratorias. Adicto al espectáculo de su propia impetuosa perfección, Draven ha jurado derrotar a quien sea para asegurarse de que su nombre se coree por todo el imperio para siempre.",
        imagen:"",
        rol:"4"

    },
    {
        name:"Diana",
        description:"Armada con un filo en forma de luna creciente y ataviada con una armadura reluciente del color de la nieve una noche de invierno, Diana es la personificación del poder de la luna. Imbuida de la esencia de un Aspecto de más allá de la elevada cima de Targon, Diana ya no es humana en su totalidad y lucha por entender su poder y propósito en este mundo.",
        imagen:"",
        rol:"2"

    },
    {
        name:"Evelynn",
        description:"En los oscuros adentros de Runaterra, el súcubo Evelynn deambula en busca de su siguiente víctima. Acecha a sus presas con una voluptuosa fachada femenina, pero cuando alguien sucumbe a sus encantos, Evelynn libera su auténtica forma. Después somete a su víctima a un tormento atroz, deleitándose con su dolor. Para el súcubo, estos 'ligues' son aventuras amorosas inocentes. Para el resto de Runaterra, son historias macabras de lujuria retorcida y dantescos recordatorios del precio del deseo lascivo.",
        imagen:"",
        rol:"2"

    },
    {
        name:"Ezreal",
        description:"Ezreal, un aventurero aficionado a deslizarse y dotado de artes mágicas sin saberlo, saquea catacumbas perdidas, lidia con maldiciones ancestrales y supera con facilidad adversidades imposibles. De valor y chulería sin límites, prefiere improvisar para salir de cualquier situación peliaguda, confiando en parte en su ingenio, pero sobre todo en su guantelete místico de Shurima, que utiliza para desatar devastadoras ondas explosivas arcanas. Una cosa sí es segura: cuando Ezreal se deja ver, los problemas no andan muy por detrás. Ni muy por delante. Seguramente estén por todas partes.",
        imagen:"",
        rol:"5"

    },
    {
        name:"Fiora",
        description:"Fiora, la duelista más temida de Valoran, es tan famosa por su estilo brusco y su astucia en asuntos políticos como por la velocidad de su estoque. Nació en el seno de la noble familia Laurent de Demacia, y tomó el control de la familia de manos de su padre a raíz de un escándalo que casi acaba con ellos. Ahora su misión es recuperar el lugar de los Laurent como una de las familias más nobles e importantes del reino",
        imagen:"",
        rol:"0"

    },
    {
        name:"Fizz",
        description:"Fizz es un yordle anfibio que habita entre los arrecifes de alrededor de Aguas Estancadas. Suele recuperar y devolver los diezmos arrojados al mar por capitanes supersticiosos, pero incluso los marineros más agudos saben que no hay que plantarle cara, puesto que muchas historias hablan sobre aquellos que han subestimado a esta resbaladiza criatura. A menudo lo confunden con algún tipo de espíritu caprichoso del océano. Parece ser capaz de dominar a las bestias de las profundidades y se deleita en confundir a sus aliados y a sus enemigos por igual.",
        imagen:"",
        rol:"2"

    },
    {
        name:"Galio",
        description:"Fuera de la gran ciudad de Demacia, el coloso de piedra Galio se mantiene vigilante. Construido como un baluarte contra los magos enemigos, a veces permanece inmóvil durante décadas hasta que la presencia de la magia poderosa lo vuelve a traer a la vida. Una vez activado, Galio aprovecha al máximo su tiempo, y saborea el placer del combate y el raro honor de defender a sus compatriotas. Pero estos triunfos siempre son agridulces, ya que la magia que destruye también es su fuente de vida, y cada victoria lo vuelve a dormir.",
        imagen:"",
        rol:"1"

    },
    {
        name:"Garen",
        description:"Garen, un orgulloso y noble soldado, lucha a la cabeza de la Vanguardia Impertérrita. Es querido entre sus compañeros y respetado por sus enemigos en su papel de vástago de la prestigiosa familia Crownguard, encargada de defender Demacia y sus ideales. Vestido con una armadura resistente a la magia y con una poderosa espada",
        imagen:"",
        rol:"1"

    },
    {
        name:"Gragas",
        description:"Alegre e imponente por partes iguales, Gragas es un cervecero enorme y provocador en su propia búsqueda de la pinta de cerveza perfecta. Proveniente de lugares desconocidos, ahora busca ingredientes raros entre los intactos páramos de Freljord, probando cada receta a medida que avanza. Suele estar ebrio y es extremadamente impulsivo. Es famoso por las peleas que inicia, que a menudo terminan en fiestas que duran toda la noche y en grandes daños materiales. Cuando Gragas aparece trae consigo la bebida y la destrucción, en ese orden.",
        imagen:"",
        rol:"3"

    },
    {
        name:"Graves",
        description:"Malcolm Graves es un famoso mercenario, jugador y ladrón. Un hombre buscado en todas las ciudades e imperios que ha visitado. A pesar de su temperamento explosivo, posee un sentido del honor criminal, que a menudo ejecuta con su escopeta de doble cañón Destiny. En los últimos años, ha reconducido su problemática colaboración con Twisted Fate, y juntos han prosperado una vez más en la hostilidad del submundo criminal de Aguas Estancadas.",
        imagen:"",
        rol:"5"

    },{
        name:"Irelia",
        description:"La ocupación noxiana de Jonia produjo muchos héroes, pero ninguno más improbable que la joven Irelia de Navori. Se entrenó en las antiguas danzas de su gente y adaptó su arte para la guerra, usando los movimientos elegantes y diligentemente practicados para hacer levitar una variedad de cuchillas letales. Tras demostrar su valía como luchadora, la empujaron al papel de líder y representante de la resistencia y, hasta el día de hoy, sigue dedicada a la preservación de su tierra natal.",
        imagen:"",
        rol:"0"
    },
    {
        name:"Janna",
        description:"Janna es un antiguo y misterioso espíritu del viento que ha aparecido para proteger a los desfavorecidos de Zaun. Aunque su presencia a menudo se revela en forma de una ráfaga refrescante o una furiosa tempestad, también puede manifestarse en su etérea figura material para alentar a los desamparados. Durante eones, Janna ha sido testigo del alzamiento y la caída de incontables civilizaciones. En todo ese tiempo, se ha mantenido fiel a su propósito de ofrecer ayuda a todo el que la necesite.",
        imagen:"",
        rol:"4"

    },
    {
        name:"Jarvan IV",
        description:"Janna es un antiguo y misterioso espíritu del viento que ha aparecido para proteger a los desfavorecidos de Zaun. Aunque su presencia a menudo se revela en forma de una ráfaga refrescante o una furiosa tempestad, también puede manifestarse en su etérea figura material para alentar a los desamparados. Durante eones, Janna ha sido testigo del alzamiento y la caída de incontables civilizaciones. En todo ese tiempo, se ha mantenido fiel a su propósito de ofrecer ayuda a todo el que la necesite.",
        imagen:"",
        rol:"1"

    },
    {
        name:"Jax",
        description:"Jax es uno de los maestros de armas más diestros de toda Runaterra, así como el único superviviente de los kohari, una orden de guerreros que juró defender Icathia. Sin embargo, cuando los hechiceros icathianos decidieron liberar al Vacío para hacer frente a la Hueste Ascendida shurimana, Icathia acabó en ruinas, y Jax se quedó sin hogar ni propósito. Fue entonces cuando recogió la última luz de Icathia, un símbolo de la esperanza que alberga de derrotar al Vacío algún día. Ahora viaja por el mundo en busca de guerreros lo suficientemente poderosos como para unirse a sus filas y frenar la oscuridad del abismo.",
        imagen:"",
        rol:"0"

    },
];

window.onload = iniciar_campeones();
const contenedor_pag = document.getElementById("contenedor_campeones");
function iniciar_campeones(){
    
}
