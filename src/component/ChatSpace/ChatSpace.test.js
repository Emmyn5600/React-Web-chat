import { act, render, fireEvent, screen } from '@testing-library/react';
import ChatSpace from './ChatSpace';
describe("Input component", () => {
    it('check if button send exist', () => {
        render(<ChatSpace />);
        screen.getByRole('button', { name: /send/i });
    });
    it('checks if the send button is disabled when the inputbox is empty', async () => {
        await act(async () => {
            const { getByRole } = render(<ChatSpace />);
            const send = getByRole('button', { name: /send/i });
            const input = getByRole('textbox', { name: /Type Something/i })
            const inputWord = ""
            await fireEvent.change(input, { target: { value: inputWord } })
            expect(send).toBeDisabled();
        })
    });
    it('check if text field with label Type Something exist', () => {
        render(<ChatSpace />);
        screen.getByRole('textbox', { name: /Type Something/i });
    });
    it("on change of message inputfield send button is enabled", async () => {
        await act(async () => {
            const { getByRole } = render(<ChatSpace />);
            const send = getByRole('button', { name: /send/i });
            const input = getByRole('textbox', { name: /Type Something/i })
            const inputWord = "Hello"
            await fireEvent.change(input, { target: { value: inputWord } })
            expect(send).toBeEnabled();
        })
    })
})