import hospital from "../../assets/hospital.png";
import doc from "../../assets/doc.png";
import book from "../../assets/Schedule.png";

export const stats = [
  {
    value: "153k+",
    title: "Cases resolved",
    num: 1,
  },
  {
    value: "92%",
    title: "Satisfaction",
    num: 2,
  },
  {
    value: "120",
    title: "Specialists",
    num: 3,
  },
];

export const processes = [
  {
    title: "Select Hospital",
    description:
      "Select hospital near you to find a specialist for your needs.",
    icon: hospital,
    num: 1,
  },
  {
    title: "Select Doctor",
    description: "Select a specialist for your needs and check their profiles.",
    icon: doc,
    num: 2,
  },
  {
    title: "Book Appointment",
    description:
      "Schedule an appointment with your selected specialist.",
    icon: book,
    num: 3,
  },
];
