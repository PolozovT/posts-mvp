import React from "react";
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';


const PostFilter = ({ filter, setFilter }) => {



  return (
    <div>
      <MyInput
        placeholder='search'
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='sorting'
        options={[
          {
            value: 'title',
            name: 'by title',
          },
          {
            value: 'body',
            name: 'by body',
          },
        ]}
      />
    </div>
  );
}

export default PostFilter;