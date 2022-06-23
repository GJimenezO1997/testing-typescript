var showMessage = function () {
    var objMessage = {
        titulo: 'Hola',
        descripcion: 'Hola Mundo',
        items: ['uno', 'dos', 'tres'],
    };
    var message2 = 'HOLA 2';
    console.log(objMessage);
    return objMessage.descripcion + ' ' + message2;
};
export { showMessage };
