import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import Chat from "./Chat"
import userEvent from "@testing-library/user-event"

test("renders", () => {
  render(<Chat />)
})

test("type unknown", async () => {
  render(<Chat />)

  userEvent.type(screen.getByRole("textbox"), "Test")
  userEvent.click(screen.getByRole("button"))

  await waitFor(() => {
    expect(screen.getByText("Test"))
  })

  await waitFor(() => {
    expect(screen.getByText("Sorry, I don't know how to answer that"))
  })
})

test("type list stations", async () => {
  render(<Chat />)

  userEvent.type(screen.getByRole("textbox"), "List stations")
  userEvent.click(screen.getByRole("button"))

  await waitFor(() => {
    expect(screen.getByText("List stations"))
  })

  await waitFor(() => {
    expect(screen.getByText("Malahide (MHIDE)"))
  })

  await waitFor(() => {
    expect(screen.getByText("Kilcoole (KCOOL)"))
  })
})

test("type get times", async () => {
  render(<Chat />)

  userEvent.type(screen.getByRole("textbox"), "Get train times from Bayside")
  userEvent.click(screen.getByRole("button"))

  await waitFor(() => {
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
  })

  await waitFor(() => {
    expect(screen.getByText("Train times"))
  })

  await waitFor(() => {
    expect(screen.getAllByText(/Destination/i))
  })
})
