
class Numeros{
    vuelto(){
      let precio = parseInt(document.getElementById("precio").value);
      let cantidad = parseInt(document.getElementById("Cantidad").value);
      let pago = parseInt(document.getElementById("pago").value);
      let costoInput = document.getElementById("costo");
      let resp = document.getElementById("resp");
    
      let costo = precio * cantidad;
      let costoT = 0;
    
      let ivaCheckbox = document.getElementById("iva");
      let iva = 0;
      if (ivaCheckbox.checked) {
        iva = costo * 0.12;
        costoT = costo + iva;
      } else {
        costoT = costo;
      }
    
      let vuelto = pago - costoT;
      resp.textContent = "Vuelto: " + vuelto.toFixed(2);
    
      costoInput.value = costoT.toFixed(2);
    }
    multiplo(){
    let num = parseInt(document.getElementById("num").value);
    let multi = parseInt(document.getElementById("multi").value);
    let resp = document.getElementById("resp")
    //console.log(resp.textContent)
    if (num % multi == 0 ){
        resp.textContent = `${multi} Es multipo de ${num}`
    } else  {
        resp.textContent = `${multi} No es multipo de ${num}`
    }
    }
    divisores(){
        let num = parseInt(document.getElementById("num").value);
        let resp = document.getElementById("resp");
        let divisores = "";
        for (let i = 1; i < num; i++) {
          if (num % i === 0) {
            divisores += i + " ";
          }
        }
        resp.textContent = `${divisores}`
    }
    ObtenerSumaD(num){
      let sumaDivisores=0
      for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
          sumaDivisores = sumaDivisores + i
        }
      }
      return sumaDivisores;
    }
    sumaDivisores(){
        let num = parseInt(document.getElementById("num").value);
        let resp = document.getElementById("resp");
        let sumaD = this.ObtenerSumaD(num);
        resp.textContent = `La suma de los divisores de ${num} es : ${sumaD}`
    }
    cantidadDivisores(){
        let num = parseInt(document.getElementById("num").value);
        let resp = document.getElementById("resp");
        let c = 0
      
        for (let i = 1; i <= num; i++) {
          if (num % i === 0) {
            c = c + 1;
          }
        }
        resp.textContent = `La cantidad de divisores de ${num} es : ${c}`
    }
    perfecto(){
        let num = parseInt(document.getElementById("num").value);
        let resp = document.getElementById("resp");
        let suma = 0;
        
        for (let i = 1; i < num; i++) {
          if (num % i === 0) {
            suma += i;
          }
        }
        
        if (suma === num) {
          resp.textContent = `El número ${num} es perfecto.`;
        } else {
          resp.textContent = `El número ${num} no es perfecto.`;
        }
    }
    invertido(){
        let num = parseInt(document.getElementById("num").value);
        let resp = document.getElementById("resp");
        resp.textContent = ""
        let numeroInvertido = 0;
      
        while (num > 0) {
          numeroInvertido = numeroInvertido * 10 + (num % 10);
          num = Math.trunc(num / 10);
        }
        resp.textContent = `El numero invertido es: ${numeroInvertido}`;
    }
    amigos(){
      let num1 = parseInt(document.getElementById("num1").value);
      let num2 = parseInt(document.getElementById("num2").value);
      let resp = document.getElementById("resp");
      let sumaDivisores1 = this.ObtenerSumaD (num1);
      let sumaDivisores2 = this.ObtenerSumaD (num2);

      if (sumaDivisores1 === sumaDivisores2) {
        resp.textContent = `El numero ${num1} y el numero ${num2} son amigos`;
      } else{
        resp.textContent = `El numero ${num1} y el numero ${num2} no son amigos`;

      }
    }
    cantidadD(){
      let num = parseInt(document.getElementById("num").value);
      let resp = document.getElementById("resp");
      let contador = 0;
      let numAbs = Math.abs(num); // Tomamos el valor absoluto del número para asegurarnos de contar los dígitos correctamente
    
      while (numAbs >= 1) {
        contador++;
        numAbs = Math.floor(numAbs / 10);
      }
    
      resp.textContent = `El número ${num} tiene ${contador} dígitos`;
    }
    exponente(){
      let num = parseInt(document.getElementById("num").value);
      let exp = parseInt(document.getElementById("exp").value);
      let resp = document.getElementById("resp");
      let resultado = 1;

      for (let i = 0; i < exp; i++) {
        resultado *= num;
      }
      resp.textContent = `El numero ${num} elevado a ${exp} es igual a :  ${resultado}`;
    }
    factorial(){
      let num = parseInt(document.getElementById("num").value);
      let resp = document.getElementById("resp");

      let factorial = 1;

      for(let i = 1 ; i <= num ; i++){
        factorial *= i;
      }
      resp.textContent = `El factorial de ${num} es : ${factorial}`;
    }
    fibonaci(){
      let a = 0;
      let b = 1;
      let c = 0;
      let num = parseInt(document.getElementById('num').value);
      let resp = document.getElementById('resp');
      let serie = '';
    
      for (let i = 0; i < num; i++) {
        serie += a + ' ';
        c = a + b;
        a = b;
        b = c;
      }
      resp.textContent = "La serie de Fibonacci para el número " + num + " es: " + serie;
    }
    ObtenerP(num1){
      let c = 0;
      for (let i = 1; i <= num1; i++){
        if (num1 % i === 0){
          c++;
        }
      }
      return c;
    }
    primo(){
      let num = parseInt(document.getElementById("num").value);
      let resp = document.getElementById("resp");
      let c1 = this.ObtenerP(num);
      if(c1 === 2){
        resp.textContent = `El numero ${num} es primo`;
      } else{
        resp.textContent = `El numero ${num} no es primo`;
      }
    }
    primoG(){
      let num1 = parseInt(document.getElementById("num1").value);
      let num2 = parseInt(document.getElementById("num2").value);
      let resp = document.getElementById("resp");
      let c1 = this.ObtenerP (num1);
      let c2 = this.ObtenerP (num2);

      if (c1 && c2 && Math.abs(num1-num2)===2){
        resp.textContent = `El numero ${num1} y El numero ${num2} son primo gemelos`;
      } else{
        resp.textContent = `El numero ${num1} y El numero ${num2} no son primo gemelos`;
      }
    }
    tablaM(){
      let num1 = parseInt(document.getElementById("num").value);
      let resp = document.getElementById("resp");
      resp.textContent = "";
    
      let c1 = 1;
      while (c1 <= 12) {
        let resultado = num1 * c1;
        resp.textContent += `${num1} x ${c1} = ${resultado}\n`;
        c1++;
      }
    }
}
const numero = new Numeros();
numero.multiplo();
numero.vuelto();
numero.divisores();
numero.sumaDivisores();
numero.cantidadDivisores();
numero.perfecto();
numero.invertido();
numero.amigos();
numero.cantidadD();
numero.exponente();
numero.factorial();
numero.fibonaci();
numero.primo();
numero.primoG();
numero.tablaM();

