import { classNames } from './classNames';

describe('classNames', () => {
    test('with first argument', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with mods', () => {
        expect(classNames('someClass', { hovered: true, collapsed: true }))
            .toBe('someClass hovered collapsed');
    });

    test('with mods false', () => {
        expect(classNames('someClass', { hovered: false, collapsed: true }))
            .toBe('someClass collapsed');
    });

    test('with mods undefined', () => {
        expect(classNames('someClass', { hovered: undefined, collapsed: true }))
            .toBe('someClass collapsed');
    });

    test('with additional classes', () => {
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe('someClass class1 class2');
    });
});
