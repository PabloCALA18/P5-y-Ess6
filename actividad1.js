
function setup() {
    createCanvas(600, 500);
    background(70);
    
    intentos = 0;
    pista = "?"
    mayomen = "";
  
    button = createButton("Intentar");
    button.position(275, 450);
    button.mousePressed(pregunta)

    Input = createInput("Ingrese aqui un numero");
    Input.position(215, 355);
    num = random(0, 1000);
    num = floor(num);

    texto()
    
    console.log(num);
  }
  
  function pregunta(){
    Input.value() == num ? verdadero() : falso();
  }
  function verdadero() {
    removeElements();
    createCanvas(600,500)
    background(0,255,0)
    
    //Texto de Victoria
    textAlign(CENTER)
    textSize(40)
    fill(0)
    text("Ganaste 😎 el numero era " + num,300,200)
    
    //Texto de Intentos
    textAlign(CENTER)
    textSize(20)
    fill(255,0,0)
    text("Intentos: " + intentos,300,300)
    ganaste()
     
  }
  
  function falso() {
    if (Input.value() > num) {
      pista = "<"
      mayomen = "El numero a encontrar es menor"
      intentos++;
      texto()
     
    } 
    if(Input.value() < num){
      pista = ">"
      mayomen = "El numero a encontrar es mayor"
      intentos++;
      texto()
    }
    if(intentos == 10){
      perdiste()
    }
  }
  
  function texto() {
    
    background(70)
    fill(255, 255, 0);
    square(200, 100, 200,30);
    
   // Texto de pregunta
    textAlign(CENTER)
    textSize(200);
    fill(0);
    text(pista, 300, 270);
  
    //Texto de instrucciones
    textAlign(LEFT)
    textSize(20);
    fill(0,255,0)
    text("Instrucciones:", 5, 20);
    
    textAlign(LEFT)
    textSize(14);
    fill(255);
    text("Ingrese un numero entre 0 y 1000 en la casilla", 10, 35);
    
    textAlign(LEFT)
    textSize(14)
    fill(255)
    text("OJO 👀!! SOLO TENES 10 INTENTOS",10,55)
    
    //Texto de intentos
    textAlign(LEFT)
    textSize(16)
    fill(255,0,0)
    text("Intentos: " + intentos,10,75)
    
    //Texto de indicar
    textAlign(CENTER)
    textSize(20);
    fill(0);
    text(mayomen, 300, 330);
  }
  function ganaste(){

    reset = createButton ("Probar de vuelta")
    reset.position(470,30)
    reset.mousePressed(reinicio)
  }
  function perdiste(){
   
    removeElements();
    createCanvas(600,500)
    background(255,0,0)
    
    //Texto de Derrota
    textAlign(CENTER)
    textSize(40)
    fill(0)
    text("Perdiste 😭 el numero era " + num,300,200)
    
    //Texto de animacion 
    textAlign(CENTER)
    textSize(20)
    fill(255)
    text("No te preocupes vuelve a intentarlo 👍",300,300)
    
     reset = createButton ("Probar de vuelta")
     reset.position(470,30)
     reset.mousePressed(reinicio)
    
  }
  function reinicio(){
    removeElements();
    setup()
  }
  let num;
  let Input;
  let button;
  let mayomen;
  let reset;
  let intentos = 0 ;
  let pista = "?";
