import { Card, Stack, Typography } from "@mui/material"
import React from "react"
import { Message } from "./Chat"

type ChatMessagesProps = {
  messages: Message[]
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => (
  <Stack direction="column" spacing={1} sx={{ my: 3 }}>
    {messages.map((message, index) => (
      <Card
        key={index}
        sx={{ textAlign: message.bot ? "right" : "left", p: 1 }}
      >
        {Array.isArray(message.text)
          ? message.text.map((m, index) => (
              <Typography key={index}>{m}</Typography>
            ))
          : message.text}
      </Card>
    ))}
  </Stack>
)

export default ChatMessages
