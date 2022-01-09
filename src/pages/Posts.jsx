import React, { useEffect, useRef, useState } from 'react';
import Counter from '../components/Counter';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import MyPagination from '../components/UI/pagination/MyPagination';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/select/MySelect';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastPost = useRef();
  const observer = useRef();

  const [fetchPosts, isPostsLoading, errorPosts] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter(x => x.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
  }

  useEffect(async () => {
    await fetchPosts(limit, page);
  }, [page, limit]);

  useObserver(lastPost, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  return (
    <div className="App">
      <Counter />
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        add post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm
          create={createPost}
        />
      </MyModal>
      <hr style={{ margin: '15px 0px ' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='count of posts on page'
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'all' },
        ]}
      />
      {errorPosts && (
        <h1>
          something went wrong... ${errorPosts}
        </h1>
      )}
      {
        isPostsLoading &&
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <MyLoader />
        </div>
      }
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title='List of posts'
      />
      <div ref={lastPost} style={{ height: 20, backgroundColor: 'red' }} />
      <MyPagination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;
