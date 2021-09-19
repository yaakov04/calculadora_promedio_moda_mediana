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

    const resultado = document.querySelector('.resultado');

    const textArea = document.querySelector('#lista');

    const getLista = textArea => textArea.value.split(',');

    const validarItemLista = (lista) => {
        let newLista = [];
        for (let i = 0; i < lista.length; i++) {
            if (isNaN(lista[i]) || lista[i] == '') {
                return false;
            }
            newLista.push(parseFloat(lista[i]));
        }
        return newLista
    }

    const calcular = (btn, lista) => {
        switch (btn.getAttribute('data-tipo')) {
            case 'promedio':
                const promedio = calcularPromedio(lista);
                return `El promedio es ${promedio}`;
                break;
            case 'mediana':
                const mediana = calcularMediana(lista);
                return `La mediana es ${mediana}`;
                break;
            case 'moda':
                const moda = calcularModa(lista);
                return `La moda es ${moda}`;
                break;
            default:
                break;
        }
    }

    const calculo = (btn, lista) => {
        const calculo = calcular(btn, lista);
        resultado.innerHTML = calculo;
    }

    document.body.onclick = (e) => {
        e.preventDefault();
        if (e.target.getAttribute('data-boton') === 'calcular') {
            const btn = e.target;
            const lista = validarItemLista(getLista(textArea));
            if (lista) {
                calculo(btn, lista);
            } else {
                alert('Error!! campo no valido');
            }
        }
    };

    const presionarEnter = (e) => {
        //const btn = e.querySelector('button')
        //event.key == 'Enter' ? calculo(btn) : '';
    };