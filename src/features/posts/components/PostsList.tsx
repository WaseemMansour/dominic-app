import React from 'react';
import { Button, List } from 'antd';
import { PaginationConfig } from 'antd/lib/pagination';
import PostItem from './PostItem';
import { Post } from '../types';
import { StyledList, StyledListContainer } from './styles';

type Props = {
  posts: Post[];
  handleEditPost: (postId: number) => void;
  handleDeletePost: (postId: number) => void;
};

const paginationOptions: PaginationConfig = {
  position: 'bottom',
  align: 'center',
  pageSize: 5,
  showSizeChanger: false,
};

const PostList = ({ posts, handleEditPost, handleDeletePost }: Props) => (
  <StyledListContainer>
    <h2>Posts</h2>
    <StyledList
      pagination={ paginationOptions }
      className='demo-loadmore-list'
      itemLayout='horizontal'
      dataSource={ posts }
      renderItem={ (item) => {
        const postItem: Post = item as Post;
        return (
          <List.Item
            actions={ [
              <Button
                key='list-loadmore-edit'
                onClick={ () => {
                  handleEditPost(postItem?.id!);
                } }
              >
                edit
              </Button>,
              <Button
                key='list-loadmore-more'
                onClick={ () => handleDeletePost(postItem?.id!) }
              >
                delete
              </Button>
            ] }
          >
            <PostItem key={ `${postItem.id}` } post={ postItem } />
          </List.Item>
        );
      } }
    />
  </StyledListContainer>
);

export default PostList;
