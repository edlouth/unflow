import { Card, CardContent, Container, Typography } from "@mui/material"
import React from "react"
import Chat from "./components/Chat"

const App: React.FC = () => (
  <Container maxWidth="sm" sx={{ pt: 3 }}>
    <Card>
      <CardContent>
        <Typography variant="h5">DART Train Times Bot</Typography>
        <Chat />
      </CardContent>
    </Card>
  </Container>
)

export default App
