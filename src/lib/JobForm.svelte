<script>
import Input from "./Input.svelte";
import JobComparison from "./JobComparison.svelte";

export let key;
export let close = () => {};
export let compareTill;
export let growTill = new Date();
export let growth = 0;
export let inflation = 0;
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
  {#if !primary}
    <button on:click={close} type="button" class="bg-white self-end rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
      <span class="sr-only">Close menu</span>
      <!-- Heroicon name: outline/x -->
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  {/if}
  <div>
    <Input key={key} type="text" label="{primary ? "Current" : ""} Job Name" placeholder="Name" bind:value={model.name} />
    <Input key={key} type="number" label="Annual Salary" placeholder="Salary" bind:value={model.salary} />
    <Input key={key} type="number" label="Tax %" placeholder="Tax %" bind:value={model.tax} />
    <Input key={key} type="number" label="Monthly Expenses" placeholder="Expenses" bind:value={model.expenses} />
    <Input key={key} type="number" label="Bonus" placeholder="Year End Bonus" bind:value={model.bonus} />
    {#if !primary}
      <Input key={key} type="number" label="Expense To Move" placeholder="Shifting Expense" bind:value={model.shiftingExpenses} />
    {/if}
    {#if primary}
      <Input key={key} type="date" label="Joining Date" placeholder="Joining Date" bind:value={model.joiningDate} />
    {/if}
  </div>
  {#if compareWith != null && compareWith.salary && compareWith.tax && compareWith.joiningDate}
    <JobComparison growTill={growTill} growth={growth} inflation={inflation} compareTill={compareTill} ofJob={model} withJob={compareWith} />
  {/if}
</div>