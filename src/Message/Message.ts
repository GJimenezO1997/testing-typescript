interface Message {
	titulo: string;
	descripcion: string;
	items: Array<string>;
}
type ShowMessage = () => string;

type message = string;
const showMessage: ShowMessage = () => {
	const objMessage: Message = {
		titulo: 'Hola',
		descripcion: 'Hola Mundo',
		items: ['uno', 'dos', 'tres'],
	};
	const message2: message = 'HOLA 2';
	console.log(objMessage);
	return objMessage.descripcion + ' ' + message2;
};

export { showMessage };
