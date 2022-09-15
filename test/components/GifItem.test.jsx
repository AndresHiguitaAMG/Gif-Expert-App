import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Prubeas en <GifItem', () => {
    test('debe hacer match con el snapshot', () => {
        const url = url;
        const title = title;
        const { container } = render(<GifItem url={url} title={title} />);

        expect(container).toMatchSnapshot();
    });
});