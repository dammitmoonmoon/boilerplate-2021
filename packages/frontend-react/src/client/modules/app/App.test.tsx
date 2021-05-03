import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { App } from './App';

it('renders with or without a name', () => {
    act(() => {
        render(<App />);
        const home = screen.getByTestId('home');
        expect(home).toBeInTheDocument();
    });
});
