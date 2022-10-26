import { Message } from "../components/Chat"

const dart = {
  chatResponse(text: string): Message[] {
    if (text.toLowerCase() === "list stations") {
      return [{ text: "List of stations", bot: true }]
    }

    if (text === "Get train times from A") {
      return [{ text: "Train times", bot: true }]
    }

    return [
      { text: "Sorry, I don't know how to answer that", bot: true },
      { text: ["Try:", "List stations", "Get train times from A"], bot: true },
    ]
  },
}

export default dart
