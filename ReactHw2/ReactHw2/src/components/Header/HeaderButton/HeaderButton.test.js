import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HeaderButton from "./HeaderButton.jsx";

describe('Header Button Test', () => {

    it("should render the button", () => {
        render(<HeaderButton label="Click me" type="button" onClick={() => {}} />);
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        expect(buttonElement).toBeInTheDocument(); 
    });

    it("should call onClick when clicked", () => {
        const handleClick = jest.fn();  
        render(<HeaderButton label="Click me" type="button" onClick={handleClick} />);
        const buttonElement = screen.getByRole('button', { name: /click me/i });

        fireEvent.click(buttonElement);  
        expect(handleClick).toHaveBeenCalledTimes(1);  
    });

})