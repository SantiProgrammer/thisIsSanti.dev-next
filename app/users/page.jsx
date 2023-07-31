import Users from "@/components/users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

const UsersPage = async () => {
  const users = await fetchUsers();

  return (
    <>
      <section id="portfolio">
        <div className="div-animation">
          <h2>Users</h2>
          <Users users={users} />
        </div>
      </section>
    </>
  );
};

export default UsersPage;
