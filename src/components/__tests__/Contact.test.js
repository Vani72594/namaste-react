import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("Should load Contact compontent",()=>{
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})
test("Should load Contact compontent",()=>{
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})