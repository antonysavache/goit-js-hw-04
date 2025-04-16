const profile = {
  username: "Jacob",
  playTime: 300,
  
  // Метод для изменения имени пользователя
  changeUsername(newName) {
    this.username = newName;
  },
  
  // Метод для обновления игрового времени
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  
  // Метод для получения информации о профиле
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  }
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"