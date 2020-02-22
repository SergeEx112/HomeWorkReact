import React from 'react';
import './style.scss';
import UserCard from '../../components/UserCard';
import Search from '../../components/Search';

const Users = ({ users }) => {
  return (
    <section className="users">
      <Search
        title="Search users"
        placeholder="Enter user name..."
        onChange={value => console.log(value)}
      />
      <main>
        {users.map(user => {
          return <UserCard user={user} key={user.name + user.id} />;
        })}
      </main>
    </section>
  );
};

export default Users;