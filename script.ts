const onMessage = (room: string, message: string, sender: string, isGroupChat: boolean, profileImageBase64: string, isDebugMode: Boolean) => {
		const reply = (message: String) => {
				Bot.reply(room, message, isDebugMode);
		}
}