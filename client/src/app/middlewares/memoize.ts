export const memoize = (fn: any) => {
    let diccionario: any = {};

    return (...args: any) => {
        /**
         * Se genera la clave.
         */
        const clave = args.join('_');

        /**
         * Si la clave se encuentra en el diccionario, devuelve el valor
         * de una ejecución anterior.
         */
        if (diccionario.hasOwnProperty(clave)) {
            console.log('Devuelve resultado almacenado en el diccionario');
            return diccionario[clave];
        }

        /**
         * En caso contrario, se ejecuta la función fn pasándole los parámetros
         */
        const result = fn(...args);

        /**
         * Se almacena el resultado en el diccionario
         */
        diccionario[clave] = result;
        return result;
    };
};
