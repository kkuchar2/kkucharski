const nextBuildId = require("next-build-id")

module.exports = {
  reactStrictMode: false,
  generateBuildId: async () => {
    const id = await nextBuildId({ dir: __dirname })
    console.log('Generating build hash:', id);
    return id;
  }
}
