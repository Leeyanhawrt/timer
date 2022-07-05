const arguments = process.argv.slice(2)

let timer = () => {
  for (const time of arguments) {
    if (time < 1 || time === "" || isNaN(time)) {
      return
    }

    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * time)
  }
}

timer();