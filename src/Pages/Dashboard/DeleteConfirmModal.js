import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
  const { name, email } = deleteDoctor;
  const handleDelete = () => {
    fetch(`https://hidden-temple-24648.herokuapp.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor: ${name} is deleted`);
          setDeleteDoctor(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold  text-red-500">
            Are you sure you want to delete {name}!
          </h3>

          <div class="modal-action">
            <button
              class="btn btn-xs  btn-error"
              onClick={() => handleDelete()}
            >
              Delete
            </button>
            <label
              for="my-modal-6"
              class="btn btn-xs bg-green-500 text-white border-0"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
