import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"
import Image from "./index";

afterEach(cleanup);

describe("Image Component Unit Testing", () => {
  it("Should render component when mounted", () => {
    const { getByTestId} = render(
      <Image className="bg-gray-500" src='test' alt="test"/>
    );

    expect(getByTestId("image-component")).toHaveAttribute('alt', 'test') 
  });
}); 