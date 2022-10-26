import { Message } from "../components/Chat"
import stations from "./stations.json"

const dart = {
  chatResponse(text: string): Message[] {
    if (text.toLowerCase() === "list stations") {
      const stationsList = stations.map(
        station => `${station.StationDesc} (${station.StationCode})`
      )

      return [{ text: ["List of stations", ...stationsList], bot: true }]
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
