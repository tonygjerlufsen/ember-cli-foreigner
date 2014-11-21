// jshint node:true

module.exports = {
  description: 'Installs foreigner.js with Bower',

  afterInstall: function() {
    return this.addBowerPackageToProject('foreigner.js', '0.0.1');
  },

  normalizeEntityName: function() {}
};