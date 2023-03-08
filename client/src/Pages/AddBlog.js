import React from "react";

const AddBlog = () => {
  return (
    <div>
      <div className="m-4 ">
        <form>
          <div class="form-group m-2">
            <label for="exampleFormControlInput1">Title</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="form-group m-2">
            <label for="exampleFormControlSelect1">Category</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group m-2">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="form-group m-2">
            <label for="exampleFormControlFile1">Thumbnail</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
