import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import Post from '../components/Post';

function Feed() {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        async function loadFeed() {
            const response = await fetch(
                'http://localhost:3000/feed?_expand=author&_limit=5&_page=1',
            );
            const data = await response.json();

            setFeed(data);
        }

        loadFeed();
    }, []);
    return (
        <View>
            <FlatList
                data={feed}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <Post item={item} />}
            />
        </View>
    );
}

export default Feed;
