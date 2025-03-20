import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders counter at 0', () => {
  render(<Counter/>);
  const paragraph = screen.getByText('Contador: 0');
  expect(paragraph).toBeInTheDocument();
});
test('renders button', () => {
    render(<Counter/>);
    const botonIncrementar = screen.getByRole('button');

    expect(botonIncrementar).toHaveTextContent('Incrementar')
  });

  test('Button increments counter',()=>{
    render(<Counter/>);
    const boton = screen.getByRole('button',{name: /Incrementar/i});
    fireEvent.click(boton);
    expect(screen.getByText('Contador: 1')).toBeInTheDocument();
    fireEvent.click(boton);
    expect(screen.getByText('Contador: 2')).toBeInTheDocument();
  })