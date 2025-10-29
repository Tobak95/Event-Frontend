// validations/ticketSchema.js
import * as Yup from "yup";

export const ticketSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ticket name is required")
    .oneOf(["Regular", "VIP", "VVIP"], "Invalid ticket name"),

  type: Yup.string()
    .required("Ticket type is required")
    .oneOf(["paid", "free"], "Invalid ticket type"),

  startDate: Yup.date()
    .required("Start date is required")
    .typeError("Invalid date"),

  endDate: Yup.date()
    .required("End date is required")
    .min(Yup.ref("startDate"), "End date must be after start date")
    .typeError("Invalid date"),

  price: Yup.number()
    .required("Price is required")
    .min(0, "Price cannot be negative")
    .when("type", {
      is: "free",
      then: (schema) => schema.max(0, "Free tickets must have $0 price"),
      otherwise: (schema) => schema.min(1, "Paid tickets must have price > 0"),
    }),

  quantityAvailable: Yup.number()
    .required("Quantity is required")
    .positive("Must be positive")
    .integer("Must be whole number")
    .min(1, "At least 1 ticket"),

  maxPerOrder: Yup.number()
    .required("Max per order is required")
    .positive("Must be positive")
    .integer("Must be whole number")
    .min(1, "At least 1")
    .max(Yup.ref("quantityAvailable"), "Cannot exceed available quantity"),
});
