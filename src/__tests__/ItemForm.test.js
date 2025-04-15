import { render, screen, fireEvent } from '@testing-library/react';
import ItemForm from '../components/ItemForm';  
import '@testing-library/jest-dom';

test('adds a new item to the list when the form is submitted', () => {
  const mockOnItemFormSubmit = jest.fn();

  render(<ItemForm onItemFormSubmit={mockOnItemFormSubmit} />);

  const nameInput = screen.getByLabelText(/Name/i);  
  const categorySelect = screen.getByLabelText(/Category/i);


  fireEvent.change(nameInput, { target: { value: "Ice Cream" } });
  fireEvent.change(categorySelect, { target: { value: "Dessert" } });

  const submitButton = screen.getByText(/Add to List/i);
  fireEvent.click(submitButton);

  expect(mockOnItemFormSubmit).toHaveBeenCalledWith({
    id: expect.any(String), 
    name: "Ice Cream",
    category: "Dessert",
  });
});

test('calls the onItemFormSubmit callback prop when the form is submitted', () => {
  const mockOnItemFormSubmit = jest.fn();

  
  render(<ItemForm onItemFormSubmit={mockOnItemFormSubmit} />);

  const nameInput = screen.getByLabelText(/Name/i);  
  const categorySelect = screen.getByLabelText(/Category/i);

  fireEvent.change(nameInput, { target: { value: "Pizza" } });
  fireEvent.change(categorySelect, { target: { value: "Main Course" } });

  const submitButton = screen.getByText(/Add to List/i);
  fireEvent.click(submitButton);

  expect(mockOnItemFormSubmit).toHaveBeenCalledWith({
    id: expect.any(String), 
    name: "Pizza",
    category: "Main Course",
  });
});

