import { Box } from "@mui/material"
import React, { useState } from "react"
import ChatMessages from "./ChatMessages"
import ChatTextbox from "./ChatTextbox"

export type Message = {
  text: string
  bot: boolean
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])

  const handleSubmit = (text: string) =>
    setMessages([...messages, { text, bot: false }])

  return (
    <Box>
      <ChatMessages messages={messages} />
      <ChatTextbox onSubmit={handleSubmit} />
    </Box>
  )
}

export default Chat
