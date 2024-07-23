import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('pruebas en <AddCategory/>', () => {


    test('debe de cambiar el valor de la caja de texto ', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');
        // screen.debug();
    });


    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn(); // sirve para simular una funcion 

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();  //comprobamos que nuestra funcion sumulada se ejecute
        expect(onNewCategory).toHaveBeenCalledTimes(1); //comprobamos que nuestra funcion simulada se ejecute N veces
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);// evaula que mi funcion simulada se ejecute con el valor que yo esperaba 
    });

    test('no debe llamar el onNewCategory  si el input esta vacio', () => {
        const onNewCategory = jest.fn(); // sirve para simular una funcion 
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

    });



});

