import React from 'react';
import MySelect from "../components/UI/Select/MySelect";
import MyInput from "../components/UI/Input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <MyInput
        //   value={searchQuery}
          value={filter.query}
        //   onChange={(e) => setSearchQuery(e.target.value)}
          onChange={(e) => setFilter({...filter, query: e.target.value})}
          placeholder="Search..."
        />
        <MySelect
        //   value={selectedSort}
          value={filter.sort}
        //   onChange={sortPosts}
        onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Sort"
          options={[
            { value: "title", name: "Name" },
            { value: "description", name: "Description" },
          ]}
        />
      </div>
    );
};

export default PostFilter;