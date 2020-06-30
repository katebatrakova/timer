// process.stdout.write('\x07');
const args = process.argv;
if (args) {
  for (let time of args) {
    if (time > 0 && typeof time === 'string') {
      setTimeout(() => {
        console.log('beep');
      }, time)
    }
  }
}