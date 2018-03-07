const chalk = require('chalk')

module.exports = {
  v2SuffixTemplatesDeprecated (template, name) {
    const initCommand = 'funmi init ' + template.replace('-2.0', '') + ' ' + name

    console.log(chalk.red('  This template is deprecated, as the original template now uses funmi 2.0 by default.'))
    console.log()
    console.log(chalk.yellow('  Please use this command instead: ') + chalk.green(initCommand))
    console.log()
  },
  v2BranchIsNowDefault (template, name) {
    const funmi1InitCommand = 'funmi init ' + template + '#1.0' + ' ' + name

    console.log(chalk.green('  This will install funmi 2.x version of the template.'))
    console.log()
    console.log(chalk.yellow('  For funmi 1.x use: ') + chalk.green(funmi1InitCommand))
    console.log()
  }
}
