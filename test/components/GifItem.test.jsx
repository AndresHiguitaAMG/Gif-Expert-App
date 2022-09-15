import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Prubeas en <GifItem', () => {
    const url = 'https://giphy.com/clips/cameronpaulsmith-bH03afFirwWm0Qn6wo';
    const title = "Pikachu";
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem url={url} title={title} />);

        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem url={url} title={title} />);
        screen.debug();

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem url={url} title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});