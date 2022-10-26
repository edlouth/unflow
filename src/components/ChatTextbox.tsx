import React, { useState } from "react"
import Send from "@mui/icons-material/Send"
import { Box, Button, TextField } from "@mui/material"
import Form from "./Form"

type ChatTextboxProps = {
  onSubmit: (text: string) => void
}

const ChatTextbox: React.FC<ChatTextboxProps> = ({ onSubmit }) => {
  const [text, setText] = useState<string>("")

  const handleSubmit = () => {
    onSubmit(text)
    setText("")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex" }}>
        <TextField
          value={text}
          onChange={event => setText(event.target.value)}
          placeholder="Type message..."
          variant="outlined"
          size="small"
          fullWidth
          required
          sx={{ flexGrow: 1 }}
        />
        <Button variant="contained" sx={{ ml: 1 }} type="submit">
          <Send />
        </Button>
      </Box>
    </Form>
  )
}

export default ChatTextbox
