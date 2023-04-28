export type Mods = Record<string, string | boolean | undefined>;

export const classNames = (
    cls: string,
    mods: Mods = {},
    additional: (string | undefined)[] = [],
): string => [
    cls,
    ...additional.filter(Boolean),
    ...Object.keys(mods).filter((key) => mods[key]),
].join(' ');
