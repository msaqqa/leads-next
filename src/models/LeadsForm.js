import mongoose from "mongoose";

const leadsFormSechema = new mongoose.Schema({
  productId: { type: Number, required: true },
  answers: [
    {
      questionId: { type: Number, required: true },
      answer: { type: mongoose.Schema.Types.Mixed, required: true },
    },
  ],
  date: { type: String, required: true },
});

const LeadsForm =
  mongoose.models.leads_form || mongoose.model("leads_form", leadsFormSechema);

export default LeadsForm;
