function Engineer(name) {
    this.name = name;

    Engineer.prototype.getGithub = function() {
        return `${this.name} is my github name`;
    }
}

module.exports = Engineer;