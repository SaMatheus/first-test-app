import App from './App'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('App component', () => {
  test('O contador deve inciar com o valor 0', () => {
    render(<App />)
  
    const counter = screen.getByText('0') // caso não encontre ele para por aqui e não chega no expect

    expect(counter).toBeInTheDocument()
  })

  test('Não deve iniciar com classe alguma', () => {
    render(<App />)
  
    const counter = screen.getByText('0') // caso não encontre ele para por aqui e não chega no expect

    expect(counter).not.toHaveClass('positive')
    expect(counter).not.toHaveClass('negative')
  })

  test('Deve conter a classe counter', () => {
    render(<App />)
  
    const counter = screen.getByText('0') // caso não encontre ele para por aqui e não chega no expect

    expect(counter).toHaveClass('counter')
  })

  test('Deve conter um botão Incrementar', () => {
    render(<App />)

    const buttonIncrement = screen.getByRole('button', { name: /incrementar/i})

    expect(buttonIncrement).toBeInTheDocument()
  })

  test('Deve conter um botão Decrementar', () => {
    render(<App />)

    const buttonDecrement = screen.getByRole('button', { name: /decrementar/i})

    expect(buttonDecrement).toBeInTheDocument()
  })

  test('Deve incrementar + 1 ao clicar no botão incrementar', () => {
    render(<App />)

    const buttonIncrement = screen.getByRole('button', { name: /incrementar/i})

    expect(screen.queryByText('1')).toBeNull()
    userEvent.click(buttonIncrement)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  test('Deve decrementar - 1 ao clicar no botão decrementar', () => {
    render(<App />)

    const buttonDecrement = screen.getByRole('button', { name: /decrementar/i})

    expect(screen.queryByText('-1')).toBeNull()
    userEvent.click(buttonDecrement)
    expect(screen.getByText('-1')).toBeInTheDocument()
  })

  test('Deve adicionar a classe positive quando o valor for maior do que 0', () => {
    render(<App />)

    const buttonIncrement = screen.getByRole('button', { name: /incrementar/i})

    expect(screen.queryByText('0')).not.toHaveClass('positive')
    userEvent.click(buttonIncrement)
    expect(screen.getByText('1')).toHaveClass('positive')
  })
  
  test('Deve adicionar a classe negative quando o valor for menor do que 0', () => {
    render(<App />)

    const buttonDecrement = screen.getByRole('button', { name: /decrementar/i})

    expect(screen.queryByText('0')).not.toHaveClass('negative')
    userEvent.click(buttonDecrement)
    expect(screen.getByText('-1')).toHaveClass('negative')
  })
})