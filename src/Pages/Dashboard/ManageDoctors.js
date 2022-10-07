import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://hidden-temple-24648.herokuapp.com/doctor", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1>Total Doctors {doctors?.length} </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {doctors?.map((doctor, index) => (
              <DoctorRow
                index={index}
                refetch={refetch}
                key={doctor._id}
                doctor={doctor}
                setDeleteDoctor={setDeleteDoctor}
              />
            ))}
          </tbody>
          {deleteDoctor && (
            <DeleteConfirmModal
              setDeleteDoctor={setDeleteDoctor}
              refetch={refetch}
              deleteDoctor={deleteDoctor}
            />
          )}
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
