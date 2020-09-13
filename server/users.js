const users = [];

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase()

    const existinguser = users.find((user) => user.room === room && user.name === name)

    if(existinguser) {
        return {error: 'Username is taken'}
    }

    const user = {id, name, room}
    users.push(user);
    console.log(users);
    
    return {user}
}

const removeUser = () => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id)

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {
    addUser,
    removeUser,
    getUsersInRoom,
    getUser
}