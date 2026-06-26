let runner = "local";
let loglevel = runner === "local" ? "debug" : "info";
console.log("Log level:", loglevel);

runner === "local" ? "Info" : runner === "remote" ? "Debug" : "Error";
console.log("Runner:", runner);
