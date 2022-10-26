import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ChatTextbox from "./ChatTextbox"
import userEvent from "@testing-library/user-event"

test("renders", () => {
  render(<ChatTextbox onSubmit={() => {}} />)
})

test("type and submit", () => {
  const handleSubmit = jest.fn(() => {
    /*do nothing*/
  })

  render(<ChatTextbox onSubmit={handleSubmit} />)

  userEvent.type(screen.getByRole("textbox"), "Test")
  userEvent.click(screen.getByRole("button"))

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith("Test")
})
