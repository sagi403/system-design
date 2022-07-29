const fs = require("fs");

const HOSTS = process.env.HOSTS.split(",");

function generateLatencies() {
  for (const host of HOSTS) {
    const fileName = `${host}/latencies.txt`;
    for (let i = 0; i < 100; i++) {
      const value = Math.floor(Math.random() * (25000 - 5000)) + 5000;
      fs.appendFileSync(fileName, value + "\n");
    }
  }
}

generateLatencies();
