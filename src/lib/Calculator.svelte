<script>
  import Input from './Input.svelte';
  import JobForm from './JobForm.svelte';
  import { formatDate } from './utils';
  let primaryModel;
  let compareTillInit = new Date();
  compareTillInit.setFullYear(new Date().getFullYear() + 1);
  let compareTill = formatDate(compareTillInit);
  let company = [0];
  const addCompany = () => {
    company = [...company, company[company.length-1] + 1];
  }
</script>

<div class="flex-1 flex flex-col items-center justify-center gap-8">
  <div class="w-96">
    <Input type="date" placeholder="Last Date" bind:value={compareTill} label="Calculate Until" />
  </div>
  
  <div class="p-2 gap-4 flex flex-row flex-wrap justify-center items-center self-stretch">
    <JobForm key="primary" compareTill={new Date(compareTill)} primary bind:model={primaryModel}/>
    {#each company as c (c)}
      <JobForm close={() => {company = company.filter(x => x !== c)}} key={c} compareTill={new Date(compareTill)} compareWith={primaryModel}/>
    {/each}
    <div on:click={addCompany} class="p-32 hover:cursor-pointer hover:bg-slate-100 flex flex-col justify-around items-center rounded-md border-2 border-gray-200 gap-2">
      <svg height=64 width=64 stroke="#d9d9d9" fill="#d2d2d2" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/></svg>
    </div>
  </div>
</div>