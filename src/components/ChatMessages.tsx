import { Card, Stack } from "@mui/material"
import React from "react"
import { Message } from "./Chat"

type ChatMessagesProps = {
  messages: Message[]
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => (
  <Stack direction="column" spacing={1} sx={{ my: 3 }}>
    {messages.map(message => (
      <Card sx={{ textAlign: message.bot ? "right" : "left", p: 1 }}>
        {message.text}
      </Card>
    ))}
  </Stack>
)

export default ChatMessages
