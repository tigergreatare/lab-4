export default function PostForm({ newPost, handleOnChange, handleOnSubmit }) {
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleOnChange}
          value={newPost.title}
        />
        <br />
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          name="body"
          onChange={handleOnChange}
          value={newPost.body}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
