const markdownParser = require("../src/index");
const vfile = require("to-vfile");

const parser = async (content) => {
  const doc = await markdownParser(content);
  console.log(doc);
};

const data = vfile.readSync("./dev/example.md");

parser(data);
