
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

const category = 'One Punch';


describe('Pruebas en <GifGrid/>', () => {
    test('debe de mostrar el loading incialmente', () => {
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        // screen.debug();
    });

    test('debe de mostrar items cuando se cargan las imágenes  useFetchGif', () => { 

     });
});