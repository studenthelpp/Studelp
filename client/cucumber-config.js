let cucumberOptions = [
  "-f @cucumber/pretty-formatter",
  "--require ./seleniumTests/steps/**/*.js",
  "--tags '@run_all'",
  "./seleniumTests/features/**/*.feature",
  "--require cucumber-parallel",
  "--publish-quiet",
].join(" ");

module.exports = { default: cucumberOptions };
