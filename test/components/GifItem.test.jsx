import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Prubeas en <GifItem', () => {
    test('debe hacer match con el snapshot', () => {
        const url = 'https://giphy.com/clips/cameronpaulsmith-bH03afFirwWm0Qn6wo';
        const title = "Pikachu";
        const { container } = render(<GifItem url={url} title={title} />);

        expect(container).toMatchSnapshot();
    });
});