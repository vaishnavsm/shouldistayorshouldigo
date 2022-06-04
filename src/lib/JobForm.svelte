<script>
import Input from "./Input.svelte";
import JobComparison from "./JobComparison.svelte";

export let compareTill;
export let primary = false;
export let model = {
  name: "",
  salary: undefined,
  tax: undefined,
  expenses: 0,
  shiftingExpenses: 0,
  bonus: 0,
};

export let compareWith = null;

</script>

<div class="p-2 flex flex-col justify-around items-center rounded-md border-2 {primary ? "border-red-200":"border-gray-200"} gap-2">
  <div>
    <Input type="text" label="{primary ? "Current" : ""} Job Name" placeholder="Name" bind:value={model.name} />
    <Input type="number" label="Annual Salary" placeholder="Salary" bind:value={model.salary} />
    <Input type="number" label="Tax %" placeholder="Tax %" bind:value={model.tax} />
    <Input type="number" label="Monthly Expenses" placeholder="Expenses" bind:value={model.expenses} />
    <Input type="number" label="Bonus" placeholder="Year End Bonus" bind:value={model.bonus} />
    {#if !primary}
      <Input type="number" label="Expense To Move" placeholder="Shifting Expense" bind:value={model.shiftingExpenses} />
    {/if}
    {#if primary}
      <Input type="date" label="Joining Date" placeholder="Joining Date" bind:value={model.joiningDate} />
    {/if}
  </div>
  {#if compareWith != null && compareWith.salary && compareWith.tax && compareWith.joiningDate}
    <JobComparison compareTill={compareTill} ofJob={model} withJob={compareWith} />
  {/if}
</div>