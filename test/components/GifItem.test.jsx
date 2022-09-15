import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Prubeas en <GifItem', () => {
    const url = 'https://giphy.com/clips/cameronpaulsmith-bH03afFirwWm0Qn6wo';
    const title = "Pikachu";
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem url={url} title={title} />);

        expect(container).toMatchSnapshot();
    });
});