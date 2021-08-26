import { calculateAvailability, generateTimeSlots } from "./Availability";

// All values are in minutes ( 10 * 60 = 600 or 10am )
const shift = { start: 600, end: 900, interval: 15, tables: 2 };

const reservations = [
  { scheduled: 600, duration: 90 },
  { scheduled: 675, duration: 75 },
  { scheduled: 690, duration: 90 }
];

describe("generateTimeSlots()", () => {
  it("should return an empty array if there is no shift argument", () => {
    const result = generateTimeSlots(shift);

    expect(result).toEqual([]);
  });
});

describe("calculateAvailability()", () => {
  it("should return an empty array if there is no shift argument", () => {
    const timeslots = generateTimeSlots(shift);

    const result = calculateAvailability(timeslots, reservations);

    expect(result).toEqual([]);
  });
});