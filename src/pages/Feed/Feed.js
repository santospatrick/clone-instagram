import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';

import Post from '../../components/Post';
import { Loading } from './styles';

function Feed() {
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refresing, setRefresing] = useState(false);
    const [viewable, setViewable] = useState([]);

    async function loadPage(pageNumber = page, shouldRefresh = false) {
        if (total && pageNumber > total) return;

        setLoading(true);

        const response = await fetch(
            `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`,
        );
        const data = await response.json();
        const totalItems = response.headers.get('X-Total-Count');

        setTotal(Math.floor(totalItems / 5));
        setFeed(shouldRefresh ? data : [...feed, ...data]);
        setPage(pageNumber + 1);

        setLoading(false);
    }

    useEffect(() => {
        loadPage();
    }, []);

    async function refreshList() {
        setRefresing(true);

        await loadPage(1, true);

        setRefresing(false);
    }

    const handleViewableChanged = useCallback(({ changed }) => {
        setViewable(changed.map(({ item }) => item.id));
    }, []);

    return (
        <View>
            <FlatList
                data={feed}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <Post item={item} shouldLoad={viewable.includes(item.id)} />
                )}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 20,
                }}
                onViewableItemsChanged={handleViewableChanged}
                onRefresh={refreshList}
                refreshing={refresing}
                onEndReached={() => loadPage()}
                onEndReachedThreshold={0.1}
                ListFooterComponent={loading && <Loading />}
            />
        </View>
    );
}

export default Feed;
