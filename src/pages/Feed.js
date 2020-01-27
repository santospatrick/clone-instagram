import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import Post from '../components/Post';

function Feed() {
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    async function loadPage(pageNumber = page) {
        if (total && pageNumber > total) return;

        const response = await fetch(
            `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`,
        );
        const data = await response.json();
        const totalItems = response.headers.get('X-Total-Count');

        setTotal(Math.floor(totalItems / 5));
        setFeed([...feed, ...data]);
        setPage(pageNumber + 1);
    }

    useEffect(() => {
        loadPage();
    }, []);

    return (
        <View>
            <FlatList
                data={feed}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <Post item={item} />}
                onEndReached={() => loadPage()}
                onEndReachedThreshold={0.1}
            />
        </View>
    );
}

export default Feed;
