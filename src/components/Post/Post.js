import React from 'react';

import { Header, Avatar, Name, Container, Description } from './styles';
import LazyImage from '../LazyImage';

const Post = ({ item }) => {
    return (
        <Container>
            <Header>
                <Avatar source={{ uri: item.author.avatar }} />
                <Name>{item.author.name}</Name>
            </Header>
            <LazyImage
                ratio={item.aspectRatio}
                source={{ uri: item.image }}
                smallSource={{ uri: item.small }}
            />
            <Description>
                <Name>{item.author.name}</Name> {item.description}
            </Description>
        </Container>
    );
};

export default Post;
