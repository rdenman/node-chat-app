const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Rob',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Sam',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Rick',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Rob',
      room: 'The Office Fans'
    };
    const responseUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
    expect(responseUser).toMatchObject(user);
  });

  it('should return names for Node Course', () => {
    const userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Rob', 'Rick']);
  });

  it('should return names for React Course', () => {
    const userList = users.getUserList('React Course');
    expect(userList).toEqual(['Sam']);
  });

  it('should remove a user', () => {
    const id = '1';
    const user = users.removeUser(id);
    const filteredUsers = users.users.filter(user => user.id === id);
    expect(users.users.length).toBe(2);
    expect(filteredUsers.length).toBe(0);
    expect(user).toMatchObject({ id, name: 'Rob', room: 'Node Course'});
  });

  it('should not remove a user', () => {
    const id = '4';
    const user = users.removeUser(id);
    expect(users.users.length).toBe(3);
    expect(user).toBe(undefined);
  });

  it('should find user', () => {
    const id = '1';
    const user = users.getUser(id);
    expect(user).toMatchObject({ id, name: users.users[0].name, room: users.users[0].room });
  });

  it('should not find user', () => {
    const id = '4';
    const user = users.getUser(id);
    expect(user).toBe(undefined);
  });
});
