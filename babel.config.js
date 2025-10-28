module.exports = function(api) {
    api.cache(true);
    return {
        presets: [
            'babel-preset-expo',
            // NativeWind v4는 babel preset입니다 (react-native-css-interop/babel re-export)
            'nativewind/babel',
        ],
        plugins: [
            // Reanimated v4에서는 worklets 플러그인이 사용되며,
            // nativewind/babel 내부에 포함되어 있어 별도 추가가 필요 없습니다.
            // 필요 시 다른 프로젝트용 플러그인을 여기에 추가하세요.
        ],
    };
};