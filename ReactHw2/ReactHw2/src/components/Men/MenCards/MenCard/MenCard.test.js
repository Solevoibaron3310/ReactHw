import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./MenCard.jsx"; 

describe("Card Component", () => {
  const mockOnFavClick = jest.fn(); 

  const props = {
    img: "somepath/to/image.jpg",
    alt: "Product image",
    name: "Test Product",
    cost: "$10.00",
    brand: "Test Brand",
    srcFav: "somepath/to/favorite/icon.png",
    onFavClick: mockOnFavClick,
    item: { id: 1 }, 
  };

  beforeEach(() => {
    render(<Card {...props} />);
  });

  it("should render the product image, name, brand, and cost", () => {

    const imgElement = screen.getByAltText(props.alt);
    expect(imgElement).toBeInTheDocument();


    const nameElement = screen.getByText(props.name);
    expect(nameElement).toBeInTheDocument();


    const brandElement = screen.getByText(props.brand);
    expect(brandElement).toBeInTheDocument();

    const costElement = screen.getByText(props.cost);
    expect(costElement).toBeInTheDocument();
  });

  it("should toggle favorite state on icon click", () => {
    const favIcon = screen.getByAltText("Add to favorites");


    expect(favIcon).not.toHaveClass(props.srcFav); 


    fireEvent.click(favIcon);
    expect(mockOnFavClick).toHaveBeenCalledWith(props.item); 
    expect(favIcon).toHaveClass('favorite'); 

    
    fireEvent.click(favIcon);
    expect(favIcon).not.toHaveClass('favorite'); 
  });
});
