import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../App';

describe('Pruebas sobre el componente Calculadora', () => {

    test('Debe realizar la suma correctamente', () => {
        render(<Calculator />);

        const twoBtn = screen.getByRole('button', { name: '2' });
        fireEvent.click(twoBtn);

        const plusBtn = screen.getByRole('button', { name: '+' });
        fireEvent.click(plusBtn);

        const threeBtn = screen.getByRole('button', { name: '3' });
        fireEvent.click(threeBtn);

        const equalBtn = screen.getByRole('button', { name: '=' });
        fireEvent.click(equalBtn);

        const inputElement = screen.getByRole('textbox');
        expect(inputElement.value).toBe('5'); // 2 + 3 = 5

    });

});
