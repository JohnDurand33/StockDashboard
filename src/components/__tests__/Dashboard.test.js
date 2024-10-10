import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "../Dashboard";

describe("Dashboard Component", () => {
    test("renders stock table", () => {
        render(<Dashboard />);
        const stockTable = screen.getByRole("table");
        expect(stockTable).toBeInTheDocument();
    });

    test("filters stocks based on price range", () => {
        render(<Dashboard />);

        const [fromInput, toInput] = screen.getAllByPlaceholderText("0.00");
        fireEvent.change(fromInput, { target: { value: "100" } });
        fireEvent.change(toInput, { target: { value: "500" } }); 

        const stockNames = screen
            .getAllByRole("row")
            .map((row) => row.textContent);

        expect(stockNames).not.toContain("Google2800.00"); 
    });
});
