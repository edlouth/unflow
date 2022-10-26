import { Box } from "@mui/material"
import React, { useState } from "react"
import dart from "../connections/dart"
import ChatMessages from "./ChatMessages"
import ChatTextbox from "./ChatTextbox"

export type Message = {
  text: string | string[]
  bot: boolean
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])

  const addMessage = (message: Message) => setMessages([...messages, message])

  const handleSubmit = (text: string) => {
    // addMessage({ text, bot: false })
    const response = dart.chatResponse(text)
    // addMessage({ text: response, bot: true })
    setMessages([...messages, { text, bot: false }, ...response])
  }

  return (
    <Box>
      <ChatMessages messages={messages} />
      <ChatTextbox onSubmit={handleSubmit} />
    </Box>
  )
}

export default Chat
