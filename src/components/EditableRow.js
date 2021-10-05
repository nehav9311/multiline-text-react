import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
      <TextField
            variant="outlined"
            placeholder="Type here"
          required="required"
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></TextField>
      </td>
      
      
      
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;