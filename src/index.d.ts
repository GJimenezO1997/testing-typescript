declare namespace MessageProps {
	interface Message {
		titulo: string;
		descripcion: string;
		items: Array<string>
	}
	type MessageFunction = () => string;
}

export default MessageProps;
