import React from 'react'

export default function Form({search,setSearch}) {
  const handleSubmit = (e) => {
    e.preventDefault() // Preventing any default events when submiting
  }
    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="search-input"
            type="text"
            tabIndex="-1"
            placeholder="Search for an artist..."
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="input-group-append">
            <button type="submit" className="btn search-btn" >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    );
}
