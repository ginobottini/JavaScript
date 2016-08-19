var num1;
var num2;
var calculo;

num1 = prompt("Ingresá un número:");
num2 = prompt("Ingresá otro número");

opciones = prompt("Deseo realizar una: \n1-Suma \n2-Resta \n3-Division \n4-Multiplicación");

switch (Number(opciones)) {
  case 1:
    calculo = (Number(num1) + Number(num2));
    break;
    case 2:
      calculo = (Number(num1) - Number(num2));
      break;
      case 3:
        calculo = (Number(num1) / Number(num2));
        break;
        case 4:
          calculo = (Number(num1) * Number(num2));
          break;
    default:
      alert("Opcion no valida");
}

alert("Su resultado es: " + calculo);
