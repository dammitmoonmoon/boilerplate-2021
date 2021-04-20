import React from 'react';
import { App } from './App';
import { act, render, screen } from '@testing-library/react';

it('renders with or without a name', () => {
    act(() => {
        render(<App />);
        const home = screen.getByTestId('home');
        expect(home).toBeInTheDocument();
    });
});
