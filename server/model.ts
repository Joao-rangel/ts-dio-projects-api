import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  technologies: { type: [String] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Project', ProjectSchema);
