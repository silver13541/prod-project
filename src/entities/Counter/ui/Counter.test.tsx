import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { renderComponent } from 'shared/lib/tests/renderComponent';

import { Counter } from './Counter';

beforeEach(() => {
    const state: DeepPartial<StateSchema> = {
        counter: {
            value: 10,
        },
    };

    renderComponent(<Counter />, {
        initialState: state,
    });
});

describe('Counter', () => {
    test('render counter value', () => {
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });

    test('increment', async () => {
        const incrementBtn = await screen.findByTestId('increment-btn');

        userEvent.click(incrementBtn);

        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });

    test('decrement', async () => {
        const decrementBtn = await screen.findByTestId('decrement-btn');

        userEvent.click(decrementBtn);

        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});
