import React, { useState } from 'react';

export default function SearchBox(props) {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row">
        <input
          type="text"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="primary
        "
        >
          {' '}
          <i className="fa fa-search"></i>{' '}
        </button>
      </div>
    </form>
  );
}
