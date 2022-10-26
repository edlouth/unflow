import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ChatMessages from "./ChatMessages"
import { Message } from "./Chat"

test("renders no messages", () => {
  render(<ChatMessages messages={[]} />)
})

test("renders messages", () => {
  const messages: Message[] = [
    {
      text: "Test text",
      bot: false,
    },
    {
      text: ["Line 1", "Line 2"],
      bot: false,
    },
    {
      text: "Bot Text",
      bot: true,
    },
  ]

  render(<ChatMessages messages={messages} />)

  expect(screen.getByText(/Test text/i)).toBeInTheDocument()
  expect(screen.getByText(/Line 1/i)).toBeInTheDocument()
  expect(screen.getByText(/Line 2/i)).toBeInTheDocument()
  expect(screen.getByText(/Bot Text/i)).toBeInTheDocument()
})

test("renders submitting", () => {
  render(<ChatMessages messages={[]} submitting />)

  expect(screen.getByRole("progressbar")).toBeInTheDocument()
})
