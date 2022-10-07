import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Allusers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://hidden-temple-24648.herokuapp.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make an admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          {users.map((user, index) => (
            <UserRow
              user={user}
              key={user._id}
              refetch={refetch}
              index={index}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Allusers;
