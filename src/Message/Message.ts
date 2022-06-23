interface Message {
	titulo: string;
	descripcion: string;
	items: Array<string>;
}
type MessageFunction = () => string;

type message = string;
const showMessage: MessageFunction = () => {
	const objMessage: Message = {
		titulo: 'Hola',
		descripcion: 'Hola Mundo',
		items: ['uno', 'dos', 'tres'],
	};
	const message2: message = 'HOLA 2';
	console.log(objMessage);
	return objMessage.descripcion + ' ' + message2;
};

export default showMessage;
