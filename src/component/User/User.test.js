import { act, render, fireEvent, screen } from '@testing-library/react';
import User from './User';
describe("Input component", () => {
    it('check if button add exist', () => {
        render(<User />);
        screen.getByRole('button', { name: /add/i });
    });
    it('checks if the add button is disabled when the inputbox is empty', async () => {
        await act(async () => {
            const { getByRole } = render(<User />);
            const add = getByRole('button', { name: /add/i });
            const input = getByRole('textbox', { name: /Enter New User/i })
            const inputWord = ""
            await fireEvent.change(input, { target: { value: inputWord } })
            expect(add).toBeDisabled();
        })
    });
    it('check if text field with label Enter New User exist', () => {
        render(<User />);
        screen.getByRole('textbox', { name: /Enter New User/i });
    });
    it("on change of message inputfield add button is enabled", async () => {
        await act(async () => {
            const { getByRole } = render(<User />);
            const add = getByRole('button', { name: /add/i });
            const input = getByRole('textbox', { name: /Enter New User/i })
            const inputWord = "Smith"
            await fireEvent.change(input, { target: { value: inputWord } })
            expect(add).toBeEnabled();
        })
    })
})