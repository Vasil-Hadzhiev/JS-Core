class Entity {
    constructor(name) {
        if (new.target === Entity) {
            throw new Error('Attempting to create an object of abstract class!');
        }
        this.name = name;
    }
}

module.exports = Entity;