import React from 'react'

const AddCategory = () => {
  return (
    <div>
      <div className="m-4 ">
        <form>
          <div class="form-group m-2">
            <label for="exampleFormControlInput1">Title For Category</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddCategory



