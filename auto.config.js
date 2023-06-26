const npmOptions = {
  exact: true,
  canaryScope: "@auto-canary",
};

/** Auto configuration */
module.exports = () => {
  return {
    plugins: [
      "released",
      ["npm", npmOptions],
      ["conventional-commits", { "preset": "angular" }]
    ],
  };
}