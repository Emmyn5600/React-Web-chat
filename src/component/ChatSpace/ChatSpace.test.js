import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import {
  act, render, fireEvent, screen,
} from '@testing-library/react';
import ChatSpace from './ChatSpace';

const mockStore = configureStore([]);

describe('My Connected React-Redux Chatpa component"', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
  });
  it('check if button send exist', () => {
    render(
      <Provider store={store}>
        <ChatSpace />
      </Provider>,
    );
    screen.getByRole('button', { name: /send/i });
  });
  it('checks if the send button is disabled when the inputbox is empty', async () => {
    await act(async () => {
      const { getByRole } = render(
        <Provider store={store}>
          <ChatSpace />
        </Provider>,
      );
      const send = getByRole('button', { name: /send/i });
      const input = getByRole('textbox', { name: /Type Something/i });
      const inputWord = '';
      await fireEvent.change(input, { target: { value: inputWord } });
      expect(send).toBeDisabled();
    });
  });
  it('check if text field with label Type Something exist', () => {
    render(
      <Provider store={store}>
        <ChatSpace />
      </Provider>,
    );
    screen.getByRole('textbox', { name: /Type Something/i });
  });
  it('on change of message inputfield send button is enabled', async () => {
    await act(async () => {
      const { getByRole } = render(
        <Provider store={store}>
          <ChatSpace />
        </Provider>,
      );
      const send = getByRole('button', { name: /send/i });
      const input = getByRole('textbox', { name: /Type Something/i });
      const inputWord = 'Hello';
      await fireEvent.change(input, { target: { value: inputWord } });
      expect(send).toBeEnabled();
    });
  });
});
