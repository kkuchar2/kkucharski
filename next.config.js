const nextBuildId = require("next-build-id")

module.exports = {
  reactStrictMode: false,
  generateBuildId: async () => {
    const id = await nextBuildId({ dir: __dirname })
    console.log('Generating build hash for NextJS modules:', id);
    return id;
  }
}
