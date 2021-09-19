const lista = [100, 500, 70, 200, 800, 4, 500, 500, 100, 70, 70, 70, 70, 70, 70]
    //calcular promedio
const calcularPromedio = lista => {
    let sum = lista.reduce((suma, elemento) => suma + elemento);
    return sum / lista.length;
}

//calcular mediana
const calcularMediana = (lista) => {
    lista = lista.sort((a, b) => a - b);
    const mitadLista = lista.length / 2;
    if (lista.length % 2 === 0) {
        const promedio = calcularPromedio([lista[mitadLista], lista[mitadLista - 1]])
        return promedio;
    } else {
        const mediana = lista[Math.floor(mitadLista)]
        return mediana;
    }
}

//calcular moda

const calcularModa = (lista) => {
    const listaCount = {};

    lista.map(
        (e) => {
            (listaCount[e]) ? listaCount[e] += 1: listaCount[e] = 1
        }
    );

    const arrayCount = Object.entries(listaCount).sort(
        (e, i) => e[1] - i[1]
    );
    const moda = arrayCount[arrayCount.length - 1][0];
    return moda;
}