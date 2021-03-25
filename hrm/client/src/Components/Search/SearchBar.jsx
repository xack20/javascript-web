import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import './SearchBar.css';
const RoundSearch = styled(Input.Search)`
  .ant-input {
    border-radius: 25px;
  }
`;
const onSearch = (value) => console.log(value);
export default function SearchBar() {
  return (
    <RoundSearch
      placeholder="search"
      size="large"
      onSearch={onSearch}
      className="search-bar"
    />
  );
}
