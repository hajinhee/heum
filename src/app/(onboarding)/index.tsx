import { StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import { View, Text } from '@/components/common/Themed';

export default function OnboardingScreen() {
  const router = useRouter();

  const handleStart = () => {
    // 온보딩 완료 후 인증 화면으로 이동
    router.replace('/(auth)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>🏊‍♂️</Text>
        <Text style={styles.title}>수영 기록을 시작하세요</Text>
        <Text style={styles.description}>
          매일의 수영 활동을 기록하고{'\n'}
          목표를 달성해보세요
        </Text>

        <View style={styles.features}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>📊</Text>
            <Text style={styles.featureText}>통계 분석</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🎯</Text>
            <Text style={styles.featureText}>목표 설정</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🏆</Text>
            <Text style={styles.featureText}>랭킹 확인</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <Text style={styles.startButtonText}>시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  icon: {
    fontSize: 100,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 48,
  },
  feature: {
    alignItems: 'center',
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#4B5563',
  },
  startButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

