import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button.jsx";

describe('Button Component', () => {
    it('should render the button with the correct text', () => {
      const buttonText = "Click Me"; // Текст для кнопки
  
      render(<Button>{buttonText}</Button>); // Рендерим компонент с текстом
  
      // Находим кнопку по тексту и проверяем ее наличие
      const buttonElement = screen.getByRole('button', { name: buttonText });
      expect(buttonElement).toBeInTheDocument(); // Проверяем, что кнопка есть в документе
      expect(buttonElement).toHaveTextContent(buttonText); // Проверяем, что текст кнопки соответствует ожиданиям
    });
  
    it('should have correct class name', () => {
      const buttonText = "Submit";
  
      render(<Button>{buttonText}</Button>);
  
      const buttonElement = screen.getByRole('button', { name: buttonText });
      expect(buttonElement).toHaveClass('submit'); // Проверяем, что у кнопки есть нужный класс
    });
  });