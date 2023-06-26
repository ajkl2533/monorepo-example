import { MouseEventHandler, ReactNode } from "react"

export interface ButtonProps {
  children: ReactNode,
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default ({children, onClick}: ButtonProps) => (
  <button type="button" onClick={onClick}>{children}</button>
)