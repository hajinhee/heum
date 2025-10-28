import { StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { View, Text } from '@/components/common/Themed';
import { useState } from 'react';

// 임시 데이터
const SAMPLE_POOLS = [
  { id: '1', name: '올림픽 수영장', address: '서울시 송파구 올림픽로 424', distance: '1.2km' },
  { id: '2', name: '삼성 스포츠센터', address: '서울시 강남구 테헤란로 123', distance: '2.5km' },
  { id: '3', name: '강남 수영장', address: '서울시 강남구 강남대로 456', distance: '3.0km' },
  { id: '4', name: '코엑스 아쿠아리움', address: '서울시 강남구 영동대로 513', distance: '2.8km' },
];

export default function PoolSearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [pools, setPools] = useState(SAMPLE_POOLS);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setPools(SAMPLE_POOLS);
    } else {
      const filtered = SAMPLE_POOLS.filter(pool => 
        pool.name.toLowerCase().includes(query.toLowerCase()) ||
        pool.address.toLowerCase().includes(query.toLowerCase())
      );
      setPools(filtered);
    }
  };

  const renderPoolItem = ({ item }: { item: typeof SAMPLE_POOLS[0] }) => (
    <TouchableOpacity style={styles.poolItem}>
      <View style={styles.poolInfo}>
        <Text style={styles.poolName}>{item.name}</Text>
        <Text style={styles.poolAddress}>{item.address}</Text>
      </View>
      <Text style={styles.poolDistance}>{item.distance}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleSearch}
          placeholder="수영장 이름이나 주소를 검색하세요"
          placeholderTextColor="#9CA3AF"
        />
      </View>

      <FlatList
        data={pools}
        renderItem={renderPoolItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>검색 결과가 없습니다</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  searchSection: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  searchInput: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: '#111827',
  },
  listContent: {
    padding: 16,
  },
  poolItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  poolInfo: {
    flex: 1,
  },
  poolName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  poolAddress: {
    fontSize: 14,
    color: '#6B7280',
  },
  poolDistance: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3B82F6',
    marginLeft: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyText: {
    fontSize: 16,
    color: '#9CA3AF',
  },
});

