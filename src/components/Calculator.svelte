<script>
  import Input from './Input.svelte';
  import JobForm from './JobForm.svelte';
  import { formatDate } from '../lib/utils';
  let primaryModel;
  let compareTillInit = new Date();
  compareTillInit.setFullYear(new Date().getFullYear() + 1);
  let compareTill = formatDate(compareTillInit);
  let company = [0];
  const addCompany = () => {
    company = [...company, company[company.length-1] + 1];
  }

  let useInterest = false;
  $: growth = useInterest ? 0 : 0;
  $: inflation = useInterest ? 0 : 0;
  $: growTill = useInterest ? formatDate(new Date()) : formatDate(new Date());
</script>

<div class="flex-1 flex flex-col items-center justify-center gap-8">
  <div class="p-4 w-screen md:w-96">
    <Input type="date" placeholder="Last Date" bind:value={compareTill} label="Calculate Until" />
  </div>
  <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
    <input type="checkbox" bind:checked={useInterest} id="default-toggle" class="sr-only peer">
    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    <span class="ml-3 text-sm font-medium text-gray-600">Calculate Growth and Inflation</span>
  </label>
  <p class="{useInterest ? "" : "hidden"} p-2 w-screen text-center">When you set these, the figures you see will be the post growth figures adjusted for inflation to today.</p>
  <div class="flex flex-col md:flex-row md:flex-wrap md:gap-8 {useInterest ? "" : "hidden"}">
    <div class="p-4 w-screen md:w-96">
      <Input type="number" placeholder="Annual Growth %" bind:value={growth} label="Annual Growth %" />
    </div>
    <div class="p-4 w-screen md:w-96">
      <Input type="number" placeholder="Annual Inflation %" bind:value={inflation} label="Annual Inflation %" />
    </div>
    <div class="p-4 w-screen md:w-96">
      <Input type="date" placeholder="Last Date of Growth" bind:value={growTill} label="Project Growth Until" />
    </div>
  </div>
  
  <div class="p-2 gap-4 flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center self-stretch">
    <JobForm key="primary" compareTill={new Date(compareTill)} primary bind:model={primaryModel}/>
    {#each company as c (c)}
      <JobForm close={() => {company = company.filter(x => x !== c)}} growth={growth} growTill={new Date(growTill)} inflation={inflation} key={c} compareTill={new Date(compareTill)} compareWith={primaryModel}/>
    {/each}
    <div on:click={addCompany} class="w-full h-32 md:w-auto md:h-auto md:p-32 hover:cursor-pointer hover:bg-slate-100 flex flex-col justify-around items-center rounded-md border-2 border-gray-200 gap-2">
      <svg height=64 width=64 stroke="#d9d9d9" fill="#d2d2d2" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero"/></svg>
    </div>
  </div>
</div>