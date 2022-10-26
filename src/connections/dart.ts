import { Message } from "../components/Chat"
import stations from "./stations.json"
import axios from "axios"

type Train = {
  date: string
  destination: string
  late: string
  time: string
}

const XMLParser = require("react-xml-parser")

const dart = {
  async chatResponse(text: string): Promise<Message[]> {
    if (text.toLowerCase() === "list stations") {
      const stationsList = stations.map(
        station => `${station.StationDesc} (${station.StationCode})`
      )

      return [{ text: ["List of stations", ...stationsList], bot: true }]
    }

    const regex = new RegExp("Get train times from (.*)", "gmi")
    const match = regex.exec(text)

    if (match) {
      const station = match[1]

      const res = await axios.get(
        `https://api.irishrail.ie/realtime/realtime.asmx/getStationDataByNameXML?StationDesc=${station}`
      )

      var xml = new XMLParser().parseFromString(res.data)

      const childToTrain = (child: any): Train => {
        const getProp = (name: string) =>
          child.children.find((c: any) => c.name === name)?.value

        return {
          date: getProp("Traindate"),
          destination: getProp("Destination"),
          late: getProp("Late"),
          time: getProp("Schdepart"),
        }
      }

      const trains: Train[] = xml.children
        .slice(0, 2)
        .map((child: any) => childToTrain(child))

      return [
        {
          text: [
            "Train times",
            ...trains.map(
              train =>
                `Destination: ${train.destination}, Departure ${train.date} ${train.time}, Late: ${train.late} minutes`
            ),
          ],
          bot: true,
        },
      ]
    }

    return [
      { text: "Sorry, I don't know how to answer that", bot: true },
      {
        text: ["Try:", "List stations", "Get train times from Bayside"],
        bot: true,
      },
    ]
  },
}

export default dart
