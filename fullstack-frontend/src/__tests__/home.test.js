import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

jest.mock('next/router', () => require('next-router-mock'));
 
describe('Home page', () => {
  it('renders a heading', () => {
    render(<Home name="Guen Gamino" />);
 
    const heading = screen.getByRole('heading', {
      name: "Guen Gamino",
    });
 
    expect(heading).toBeInTheDocument();
  });

  it('renders a description', () => {
    render(<Home summary="My Summary" />);
 
    const summary = screen.getByText("My Summary");
 
    expect(summary).toBeInTheDocument();
  });


});