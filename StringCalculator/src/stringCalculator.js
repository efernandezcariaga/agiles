function Sumar(num) {
    //PRIMER TEST
    // return 0;
    //------------------------------------------------------------------
    //PRIMERA EVOLUCION
    // if (num === '') {
    //     return 0;
    // } else return 1;
    //------------------------------------------------------------------
    //SEGUNDA EVOLUCION
    // if (num === '') {
    //     return 0;
    // }
    // const numArr = num.split(',');
    // let suma = 0;
    // for (let i = 0; i < numArr.length; i++) {
    //     suma += parseInt(numArr[i], 10);
    // }
    // return suma;
    //------------------------------------------------------------------
    //TERCERA EVOLUCION
    // if (num === '') {
    //     return 0;
    // }
    // const numArr = num.replace(/\n/g, ',').split(',');
    // let suma = 0;
    // for (let i = 0; i < numArr.length; i++) {
    //     suma += parseInt(numArr[i], 10);
    // }
    // return suma;
    //------------------------------------------------------------------
    //CUARTA EVOLUCION
    // let delimiter = ',';
    // if (num.startsWith('//')) {
    //     delimiter = num[2];
    //     num = num.substring(num.indexOf('\n') + 1);
    // }
    // const numeros = num.replace(new RegExp(`[${delimiter}\\n]`, 'g'), ',');
    // return numeros.split(',').reduce((suma, numStr) => {
    //     const numInt = parseInt(numStr, 10);
    //     if (!isNaN(numInt)) {
    //         return suma + numInt;
    //     }
    //     return suma;
    // }, 0);
    //------------------------------------------------------------------
    //QUINTA EVOLUCION
    if (num === '') {
        return 0;
    }
    let delimiter = ',';
    if (num.startsWith('//')) {
        delimiter = num[2];
        num = num.substring(num.indexOf('\n') + 1);
    }
    const numeros = num.replace(new RegExp(`[${delimiter}\\n]`, 'g'), ',');
    const numArr = numeros.split(',').map(numStr => parseInt(numStr, 10));
    const negativos = numArr.filter(num => num < 0);
    if (negativos.length > 0) {
        throw new Error(`No se permiten negativos: ${negativos.join(', ')}`);
    }
    return numArr.reduce((suma, num) => suma + num, 0);
}

module.exports = Sumar;
