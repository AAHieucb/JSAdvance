// Nhiều người chat với nhau qua chatroom, không phụ thuộc trực tiếp

class ChatRoom {
  constructor() {
    this.users = {}; // lưu trữ người dùng
  }

  // Đăng ký người dùng vào phòng chat
  register(user) {
    this.users[user.name] = user;
    user.chatroom = this;
  }

  // Gửi tin nhắn từ người gửi đến người nhận (nếu không có người nhận, gửi đến tất cả)
  send(message, from, to) {
    if (to) {
      // Gửi tin nhắn riêng
      to.receive(message, from);
    } else {
      // Gửi tin nhắn công khai đến tất cả người dùng khác
      for (let key in this.users) {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      }
    }
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  // Gửi tin nhắn
  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  // Nhận tin nhắn
  receive(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

// Sử dụng
const chatroom = new ChatRoom();

const john = new User('John');
const jane = new User('Jane');
const doe = new User('Doe');

chatroom.register(john);
chatroom.register(jane);
chatroom.register(doe);

john.send("Hi Jane!", jane); // Gửi tin nhắn riêng từ John đến Jane
jane.send("Hey John!", john); // Gửi tin nhắn riêng từ Jane đến John
doe.send("Hello everyone!"); // Gửi tin nhắn công khai từ Doe