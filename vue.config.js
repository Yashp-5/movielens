const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = defineConfig({
  chainWebpack: config => {
    // Add webpack configuration here
    // For example, to add an alias for importing modules
    config.resolve.alias
      
      // Add aliases for Firebase modules if needed
      .set('firebase', 'firebase/app')
      .set('firebase-auth', 'firebase/auth')
      .set('firebase-firestore', 'firebase/firestore')
  }
})