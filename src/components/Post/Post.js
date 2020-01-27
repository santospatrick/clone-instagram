import React from 'react';

import {
    Header,
    Avatar,
    Name,
    Container,
    PostImage,
    Description,
} from './styles';

const Post = ({ item }) => {
    return (
        <Container>
            <Header>
                <Avatar source={{ uri: item.author.avatar }} />
                <Name>{item.author.name}</Name>
            </Header>
            <PostImage ratio={item.aspectRatio} source={{ uri: item.image }} />
            <Description>
                <Name>{item.author.name}</Name> {item.description}
            </Description>
        </Container>
    );
};

export default Post;
