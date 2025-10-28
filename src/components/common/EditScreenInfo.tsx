import React from 'react';
import { StyleSheet, Text as DefaultText, View as DefaultView } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { useColorScheme } from '@/hooks/useColorScheme';

import Colors from '@/constants/Colors';

export default function EditScreenInfo({ path }: { path: string }) {
    return (
        <ThemedView>
            <ThemedView style={styles.getStartedContainer}>
                <ThemedText style={styles.getStartedText}>
                    Open up the code for this screen:
                </ThemedText>

                <ThemedView style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
                    <MonoText>{path}</MonoText>
                </ThemedView>

                <ThemedText style={styles.getStartedText}>
                    Change any of the text, save the file, and your app will automatically update.
                </ThemedText>
            </ThemedView>

            <ThemedView style={styles.helpContainer}>
                <ExternalLink style={styles.helpLink} href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
                    <ThemedText style={styles.helpLinkText} lightColor={Colors.light.tint}>
                        Tap here if your app doesn't automatically update after making changes
                    </ThemedText>
                </ExternalLink>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    },
});

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    const theme = useColorScheme() ?? 'light';
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
}

export function ThemedText(props: TextProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function ThemedView(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
