const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({

    title: String,

    subject: String,

    level: String,

    semester: String,

    category: String,

    pdfUrl: String,

    downloads: {
        type: Number,
        default: 0
    },

    uploadedAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("PDF", pdfSchema);
