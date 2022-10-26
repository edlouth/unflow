import { Box } from "@mui/material"
import React, { useEffect, useState } from "react"
import dart from "../connections/dart"
import ChatMessages from "./ChatMessages"
import ChatTextbox from "./ChatTextbox"

export type Message = {
  text: string | string[]
  bot: boolean
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [query, setQuery] = useState<string>()

  useEffect(() => {
    const getData = async () => {
      if (!query) return

      const response = await dart.chatResponse(query)

      setMessages([...messages, ...response])
      setSubmitting(false)
    }

    if (submitting) {
      getData()
    }
  }, [submitting, query, messages])

  const addMessage = (message: Message) => setMessages([...messages, message])

  const handleSubmit = (text: string) => {
    addMessage({ text, bot: false })
    setQuery(text)
    setSubmitting(true)
  }

  return (
    <Box>
      <ChatMessages messages={messages} submitting={submitting} />
      <ChatTextbox onSubmit={handleSubmit} />
    </Box>
  )
}

export default Chat
