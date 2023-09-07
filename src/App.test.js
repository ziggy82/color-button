import { render, screen } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import App from './App';

test('button has correct initial color', () => {
  //const {container} = render(<App />);
  render(<App />)
  //logRoles(container);

  //finding an element with the role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name : 'Change to blue' });

  expect(colorButton).toHaveStyle({backgroundColor : 'red'});
});
test('button has correct initial text', () => {
  
});

test('button has clicked turns blue', () => {
  
});



