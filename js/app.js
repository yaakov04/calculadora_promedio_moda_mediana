//calcular promedio
const calcularPromedio = lista => {
    let sum = lista.reduce((suma, elemento) => suma + elemento);
    return sum / lista.length;
}