import { calculateAvailability, generateTimeSlots } from "./Availability";

// INTERVIEWER to provive configuration for the input: https://github.com/opentable/availabilityChallenge_interviewRepo/wiki

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