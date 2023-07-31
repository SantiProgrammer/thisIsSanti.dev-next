const getUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
};

const UserDetails = async ({ params }) => {
  const user = await getUser(params.id);

  return (
    <div>
      <h2>User Details of {user.first_name}</h2>
      <div>
        <img src={user.avatar} alt="" />
        <h3>{user.id}</h3>
        <p>{user.email}</p>
        <p>
          {user.first_name} {user.last_name}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
