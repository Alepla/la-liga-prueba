export const showResponseMessage = (status: number) => {
    let type = '';
    let message = '';

    switch (status) {
        case 200:
            type = 'alert-success';
            message = '';
            break;
        case 400:
            type = 'alert-danger';
            message = 'La solicitud no tiene el formato correcto';
            break;
        case 401:
        case 403:
            type = 'alert-danger';
            message = 'No tiene permisos para acceder al recurso solicitado';
            break;
        case 404:
            type = 'alert-danger';
            message = 'Recurso no encontrado';
            break;
        case 500:
            type = 'alert-danger';
            message = 'Se ha producido un error en el servidor';
            break;
    }
    return { type, message };
};
