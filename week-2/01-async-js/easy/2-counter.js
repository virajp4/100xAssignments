function startCounter(count, limit) {
  if (count <= limit) {
    console.log(count);
    count++;
    setTimeout(function () {
      startCounter(count, limit);
    }, 1000);
  }
}

startCounter(1, 5);
