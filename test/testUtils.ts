import { render, RenderResult } from '@testing-library/react'
import { ReactElement } from 'react'

const Providers = ({ children }) => {
  return children
}

const customRender = (ui: ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }
