import { render, screen } from './test-utils';
//import { render, screen } from "@testing-library/react";

import { Creador } from './components/Creador/Creador';

test('renders learn react link', () => {
  render(<Creador />);
  const linkElement = screen.getByText(/Crea a tu Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});