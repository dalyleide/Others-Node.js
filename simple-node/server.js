const windir = process.env.windir;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`MY_VARIABLE : ${windir}`);
    await sleep(5000);
  }
}

main();
