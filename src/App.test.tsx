import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"
import "@testing-library/jest-dom"

test("renders", () => {
  render(<App />)

  expect(screen.getByText(/DART Train Times Bot/i)).toBeInTheDocument()
})
