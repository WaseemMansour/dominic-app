import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import { StyledButton, StyledInput } from './styles';
import { Post } from '../types';

const { TextArea } = Input;

type Props = {
  data: Post;
  onSubmit: (data: Post) => void;
};

const PostForm = ({ data, onSubmit }: Props) => {
  const [title, setTitle] = useState(data.title);
  const [body, setContent] = useState(data.body);

  useEffect(() => {
    const isEditMode = data?.id;
    if (isEditMode) {
      setTitle(data.title);
      setContent(data.body);
    } else {
      setTitle('');
      setContent('');
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const postData: Post = {
      title,
      body,
      // Handling Edit Mode
      ...(data?.id ? { id: data?.id, userId: data?.userId } : {}),
    };
    onSubmit(postData);
  };

  const canSubmit = Boolean(title.length) && Boolean(body.length);

  return (
    <form onSubmit={ handleSubmit }>
      <h3>Add Post</h3>
      <StyledInput
        type='text'
        value={ title }
        onChange={ (e) => setTitle(() => e.target.value) }
        placeholder='Title'
      />
      <TextArea
        rows={ 10 }
        value={ body }
        onChange={ (e) => setContent(() => e.target.value) }
        placeholder='Content'
      />
      <StyledButton
        type='primary'
        onClick={ handleSubmit }
        disabled={ !canSubmit }
      >
        { data.id ? 'Save changes' : 'Submit' }
      </StyledButton>
    </form>
  );
};

export default PostForm;
