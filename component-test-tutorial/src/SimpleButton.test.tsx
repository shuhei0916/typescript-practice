import { render, screen } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event";
import { SimpleButton } from "./SimpleButton";
import userEvent from "@testing-library/user-event";

test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
    const user = userEvent.setup();
    render(<SimpleButton />);

    const simpleButton = screen.getByRole("button");
    expect(simpleButton).toHaveTextContent("OFF");
    await userEvent.click(simpleButton);
    expect(simpleButton).toHaveTextContent("ON"); 


});