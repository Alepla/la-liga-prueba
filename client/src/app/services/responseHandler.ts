export const showResponseMessage = (status: number) => {
    let type = 'alert-danger';
    let message = 'Se ha producido un error en la petición' + status;

    switch (status) {
        case 200:
            type = 'alert-success';
            message = '';
            break;
        case 400:
            message = 'La solicitud no tiene el formato correcto';
            break;
        case 401:
        case 403:
            message = 'No tiene permisos para acceder al recurso solicitado';
            break;
        case 404:
            message = 'Recurso no encontrado';
            break;
        case 500:
            message = 'Se ha producido un error en el servidor';
            break;
    }
    return { type, message };
};
