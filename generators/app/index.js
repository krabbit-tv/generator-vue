var Generator = require("yeoman-generator");
var path = require('path');
var _ = require('lodash');

module.exports = class extends Generator {

    constructor (args, opts) {
        super(args, opts);
        this.argument('name', {
            type: String,
            required: true
        });
        this.argument('path', {
            type: String,
            required: false
        });
    }

    copyIndex() {
        this._copyFile('index.vue', this.args[0] + '.vue');
    }

    copyHtml() {
        this._copyFile('index.html', this.args[0] + '.html');
    }

    copyCss() {
        this._copyFile('index.css', this.args[0] + '.css');
    }

    copyJs() {
        this._copyFile('index.js', this.args[0] + '.js');
    }


    _copyFile(fileName, fileDest) {
        var pathComponent = (this.args.length > 1 ? this.args[1] + path.sep: '') + this.args[0] + path.sep + fileDest;
        this.fs.copyTpl(this.templatePath(fileName), this.destinationPath(pathComponent), {
            name: this.args[0],
            name_kebab: _.kebabCase(this.args[0])
        });
    }
};