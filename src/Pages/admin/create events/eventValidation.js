// src/pages/admin/events/eventValidation.js
import * as Yup from "yup";

export const eventValidation = Yup.object().shape({
  title: Yup.string().required("Event title is required"),
  description: Yup.string().required("Event description is required"),
  category: Yup.string().required("Category is required"),
  address: Yup.string().required("Event address is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .min(Yup.ref("startDate"), "End date cannot be before start date")
    .required("End date is required"),
  capacity: Yup.number()
    .positive("Capacity must be positive")
    .integer("Capacity must be an integer")
    .required("Capacity is required"),
  image: Yup.string().required("Image URL is required"),
  tickets: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("Ticket name is required"),
        price: Yup.number()
          .typeError("Price must be a number")
          .min(0, "Price cannot be negative")
          .required("Price is required"),
        quantityAvailable: Yup.number()
          .integer("Quantity must be an integer")
          .min(1, "Quantity must be at least 1")
          .required("Quantity is required"),
        maxPerOrder: Yup.number()
          .integer()
          .min(1)
          .required("Max per order is required"),
      })
    )
    .required("At least one ticket is required"),
});
