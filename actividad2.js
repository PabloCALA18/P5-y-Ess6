
function setup() {
  createCanvas(1000, 600);
  background(0);
  muestraPalabra()
}

function draw() {
  interfaz()
  posLetras()
  
  
}
function interfaz(){
  stroke(255,255,0)
  strokeWeight(5);
  line(0, 460, 1000, 460)
  
  stroke(255,255,0)
  strokeWeight(5);
  line(600, 0, 600, 460)
  
}
function posLetras (){
  for( x = 0,  y = 500; x < words.length; x += 50){
  fill(255)
  stroke(10)
  square(x ,y,50,10) 
}

}
function muestraPalabra(){
  let p = random(0,500)
  p = floor(p)
  let palabra = words[p]
  textSize(20)
  fill(255)
  text (words[p],700,300)
  
}
let words = [
  "casa", "árbol", "carro", "sol", "luna", "estrella", "mar", "río", "montaña", "viento",
  "flor", "animal", "libro", "mesa", "silla", "puerta", "ventana", "teléfono", "computadora", "televisor",
  "camisa", "pantalón", "zapato", "sombrero", "bufanda", "guante", "chaqueta", "falda", "abrigo", "pañuelo",
  "pelota", "raqueta", "bicicleta", "patín", "balón", "trampolín", "esquí", "kayak", "patinete", "tabla",
  "coche", "camión", "autobús", "moto", "bici", "tren", "avión", "barco", "helicóptero", "cohete",
  "ciudad", "pueblo", "aldea", "metrópoli", "lago", "playa", "desierto", "selva", "bosque", "campo",
  "nube", "lluvia", "nieve", "granizo", "viento", "tormenta", "relámpago", "trueno", "clima", "tempestad",
  "agua", "leche", "pan", "queso", "mantequilla", "huevo", "yogur", "cereal", "azúcar", "sal",
  "carne", "pollo", "pescado", "verdura", "fruta", "tomate", "zanahoria", "manzana", "plátano", "naranja",
  "arroz", "pasta", "sopa", "ensalada", "tarta", "pastel", "helado", "chocolate", "café", "té",
  "música", "película", "obra", "libro", "novela", "poema", "canción", "danza", "teatro", "espectáculo",
  "arte", "pintura", "escultura", "fotografía", "cine", "literatura", "música", "teatro", "dibujo", "creación",
  "ciencia", "matemáticas", "física", "química", "biología", "geografía", "astronomía", "historia", "filosofía", "sociología",
  "medicina", "psicología", "sociología", "antropología", "economía", "política", "derecho", "educación", "trabajo", "empresa",
  "salud", "enfermedad", "vacuna", "medicamento", "consulta", "hospital", "clínica", "doctor", "enfermero", "farmacia",
  "deporte", "fútbol", "baloncesto", "voleibol", "tenis", "natación", "gimnasia", "ciclismo", "atletismo", "yoga",
  "carrera", "maratón", "entrenamiento", "competencia", "campeonato", "medalla", "trofeo", "copa", "victoria", "derrota",
  "fiesta", "celebración", "cumpleaños", "aniversario", "boda", "evento", "reunión", "ceremonia", "festividad", "conferencia",
  "viaje", "vacaciones", "excursión", "paseo", "tour", "aventura", "ruta", "destino", "guía", "itinerario",
  "red", "internet", "página", "sitio", "enlace", "correo", "mensaje", "chat", "foros", "blog",
  "juego", "videojuego", "tablero", "cartas", "rompecabezas", "adivinanza", "reto", "estrategia", "diversión", "competencia",
  "cuento", "historia", "relato", "anécdota", "narrativa", "crónica", "reportaje", "entrevista", "periodismo", "noticia",
  "diseño", "moda", "tendencia", "estilo", "estética", "colección", "traje", "ropa", "accesorio", "vestido",
  "tecnología", "innovación", "dispositivo", "software", "hardware", "programa", "aplicación", "sistema", "red", "electrónica",
  "edificio", "estructura", "fachada", "interior", "exterior", "techo", "pared", "suelo", "puerta", "ventana",
  "jardín", "parque", "área", "zona", "terreno", "espacio", "vereda", "calle", "avenida", "bulevar",
  "animal", "mamífero", "ave", "reptil", "anfibio", "pez", "insecto", "animalito", "mascota", "bestia",
  "mujer", "hombre", "niño", "niña", "adulto", "anciano", "persona", "individuo", "ser", "ciudadano",
  "familia", "madre", "padre", "hermano", "hermana", "hijo", "hija", "tío", "tía", "primo",
  "profesor", "estudiante", "alumno", "maestro", "docente", "mentor", "tutor", "instructor", "entrenador", "educador",
  "sociedad", "comunidad", "grupo", "colectivo", "asociación", "organización", "entidad", "institución", "fundación", "agencia",
  "creativo", "imaginación", "inspiración", "idea", "proyecto", "plan", "estrategia", "concepto", "innovación", "propuesta",
  "moral", "ética", "principio", "valor", "norma", "regla", "ley", "deber", "derecho", "responsabilidad",
  "estudio", "investigación", "análisis", "examen", "evaluación", "diagnóstico", "propuesta", "hipótesis", "conclusión", "hallazgo",
  "traducción", "interpretación", "lengua", "idioma", "dialecto", "palabra", "frase", "texto", "documento", "escrito",
  "esquema", "diagrama", "gráfico", "tabla", "cuadro", "métrica", "modelo", "prototipo", "simulación", "representación",
  "espiritualidad", "religión", "creencia", "culto", "ritual", "oración", "meditación", "contemplación", "devoción", "fe",
  "tradición", "costumbre", "ceremonia", "ritual", "herencia", "legado", "patrimonio", "cultura", "evento", "congreso",
  "lenguaje", "comunicación", "expresión", "gesto", "signo", "señal", "mensaje", "oratoria", "diálogo", "discusión",
  "salón", "auditorio", "escenario", "plataforma", "recinto", "espacio", "local", "instalación", "lugar", "área",
  "cuerpo", "mente", "alma", "espíritu", "sentimiento", "pensamiento", "emociones", "sensaciones", "estado", "conciencia",
  "crecimiento", "desarrollo", "progreso", "avance", "mejora", "cambio", "evolución", "transformación", "adaptación", "innovación",
  "país", "nación", "estado", "región", "provincia", "ciudad", "municipio", "distrito", "localidad", "barrio",
  "globalización", "economía", "comercio", "industria", "mercado", "finanzas", "negocios", "empresa", "mercancía", "productos",
  "política", "gobierno", "administración", "leyes", "regulación", "legislación", "orden", "justicia", "derechos", "deberes",
  "educación", "conocimiento", "aprendizaje", "enseñanza", "formación", "capacitación", "habilidad", "competencia", "habilidad", "experiencia",
  "cultura", "arte", "música", "teatro", "danza", "pintura", "escultura", "literatura", "fotografía", "cine",
  "economía", "finanzas", "industria", "comercio", "mercado", "empresa", "negocio", "producción", "consumo", "export"]