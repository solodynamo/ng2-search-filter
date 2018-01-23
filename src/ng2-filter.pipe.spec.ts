import { Ng2SearchPipe } from './ng2-filter.pipe';

describe('Pipe: Default', () => {
    let pipe: Ng2SearchPipe;

    beforeEach(() => {
        pipe = new Ng2SearchPipe();
    });

    it('Return the same list if the "term" is invalid', () => {
        const list = [{ a: 'b' }, { a: 'c' }];
        expect(pipe.transform(list, null)).toBe(list);
        expect(pipe.transform(list, undefined)).toBe(list);
        expect(pipe.transform(null, undefined)).toBe(null);
        expect(pipe.transform(undefined, undefined)).toBe(undefined);
    });

    it('Return the same list if the "list" is invalid', () => {
        expect(pipe.transform(null, 'hello')).toBe(null);
        expect(pipe.transform(undefined, 'hello')).toBe(undefined);
    });

    it('Filter the elements', () => {
        const list = [{ a: 'b' }, { a: 'c' }];
        expect(pipe.transform(list, 'b')).toEqual([{ a: 'b' }]);
    });
});