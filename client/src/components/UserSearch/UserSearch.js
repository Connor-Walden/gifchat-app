function UserSearch({ search, updateSearch }) {
    return (
        <div className="row gutters-sm">
            <div className="col-md-12 mb-3">
                <label htmlFor="inputPassword5" className="form-label">Search for friends</label>
                <input
                    type="text"
                    id="friendSearch"
                    className="form-control"
                    aria-describedby="searchHelpBlock"
                    onChange={(event) => updateSearch(event)}
                    value={search}
                />
            </div>
        </div>
    );
}

export default UserSearch;