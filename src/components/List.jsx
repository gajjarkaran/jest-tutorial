const List = () => {
  return (
    <div
      style={{ marginLeft: "auto", marginTop: "500px", marginBottom: "500px" }}
    >
      <h1>This is a list</h1>
      <ul style={{ listStyleType: "none" }}>
        <li>This is the first list entry</li>
      </ul>
      <button>This button can add a new entry to the list</button>
    </div>
  );
};

export default List;
