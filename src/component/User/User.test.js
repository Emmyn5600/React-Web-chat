import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import {
  act, render, fireEvent, screen,
} from '@testing-library/react';
import User from './User';

const mockStore = configureStore([]);

describe('My Connected React-Redux User component"', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
  });

  it('check if button add exist', () => {
    render(
      <Provider store={store}>
        <User />
      </Provider>,
    );
    screen.getByRole('button', { name: /add/i });
  });
  it('checks if the add button is disabled when the inputbox is empty', async () => {
    await act(async () => {
      const { getByRole } = render(
        <Provider store={store}>
          <User />
        </Provider>,
      );
      const add = getByRole('button', { name: /add/i });
      const input = getByRole('textbox', { name: /Enter New User/i });
      const inputWord = '';
      await fireEvent.change(input, { target: { value: inputWord } });
      expect(add).toBeDisabled();
    });
  });
  it('check if text field with label Enter New User exist', () => {
    render(
      <Provider store={store}>
        <User />
      </Provider>,
    );
    screen.getByRole('textbox', { name: /Enter New User/i });
  });
  it('on change of message inputfield add button is enabled', async () => {
    await act(async () => {
      const { getByRole } = render(
        <Provider store={store}>
          <User />
        </Provider>,
      );
      const add = getByRole('button', { name: /add/i });
      const input = getByRole('textbox', { name: /Enter New User/i });
      const inputWord = 'Smith';
      await fireEvent.change(input, { target: { value: inputWord } });
      expect(add).toBeEnabled();
    });
  });
});
