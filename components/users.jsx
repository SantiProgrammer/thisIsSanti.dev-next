"use client";
import { useRouter } from "next/navigation";

const Users = ({ users }) => {
  const router = useRouter();

  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => {
              router.push(`/users/${user.id}`);
            }}
          >
            <div>
              <img src={user.avatar} alt={user.email} />
              <h5>
                {user.id} {user.first_name} {user.last_name}{" "}
              </h5>
              <p>Email: {user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
