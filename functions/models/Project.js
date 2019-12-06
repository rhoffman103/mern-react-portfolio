const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    pathName: {
        type: String,
        required: true
    },
    applicationType: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    repoUrl: {
        type: String,
        required: true
    },
    deployedUrl: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }],
    allTechnologies: [{
        type: String,
        required: true
    }],
    image: {
        type: String,
        required: true
    },
    imageSlides: [{
        type: String,
        required: true
    }]
});

// creates model from the above schema using mongoose's model method
const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;