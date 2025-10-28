import { useColorScheme as useNativeColorScheme, ColorSchemeName } from 'react-native';

export function useColorScheme(): 'light' | 'dark' | null {
    const scheme: ColorSchemeName = useNativeColorScheme();
    return scheme ?? null;
}