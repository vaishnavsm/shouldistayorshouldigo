import { describe, expect, it } from "vitest";
import { computeForDate } from "./compare";

it("should be a function", () => {
  expect(typeof computeForDate, "computeForDate should be a function [sanity check]").toBe('function')
})

describe("Tests on salary computes", () => {
  
})

// computeForDate({
//   growth: 0, 
//   inflation: 0, 
//   growTill: '', 
//   compareTill: '',
//   date: '', 
//   oldJob: {
//     joiningDate:,
//     tax:,
//     bonus:,
//     salary:,
//     expenses:,
//     shiftingExpenses:
//   }, 
//   newJob: {
//     joiningDate:,
//     tax:,
//     bonus:,
//     salary:,
//     expenses:,
//     shiftingExpenses:
//   }
// })