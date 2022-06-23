
import MessageProps from '.';

type message = string;

const showMessage: MessageProps.MessageFunction = () => {
	const objMessage: MessageProps.Message = {
		titulo: 'Hola',
		descripcion: 'Hola Mundo',
		items: ['uno', 'dos', 'tres']
	};
	const message2: message = 'HOLA 2';
	console.log(objMessage);
	return objMessage.descripcion + ' ' + message2;
};


export default showMessage