<script>
  import Input from './Input.svelte';
  import JobForm from './JobForm.svelte';
  import { formatDate } from './utils';
  let primaryModel;
  let compareTillInit = new Date();
  compareTillInit.setFullYear(new Date().getFullYear() + 1);
  let compareTill = formatDate(compareTillInit);
</script>

<div class="flex-1 flex flex-col items-center justify-center gap-8">
  <Input type="date" placeholder="Last Date" bind:value={compareTill} label="Calculate Until" />
  
  <div class="p-2 gap-4 flex flex-row justify-around items-center self-stretch">
    <JobForm compareTill={new Date(compareTill)} primary bind:model={primaryModel}/>
    <JobForm compareTill={new Date(compareTill)} compareWith={primaryModel}/>
  </div>
</div>