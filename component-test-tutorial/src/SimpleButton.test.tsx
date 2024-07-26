import { render, screen } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";

test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {

    // ここにテストの内容をかいていきます
    render(<SimpleButton />);

    const simpleButton = screen.getByRole("button");
    expect(simpleButton).toHaveTextContent("OFF");


});