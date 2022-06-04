<script>
import { computeForDate } from "./compare";
import { monthNames } from "./utils";

export let ofJob = null;
export let withJob = null;
export let compareTill; 
export let growTill = new Date();
export let growth = 0;
export let inflation = 0;

const computeFor = []
for(let date = new Date(); date < compareTill; date.setMonth(date.getMonth() + 1)) computeFor.push(new Date(date))

$: data = computeFor.map(date => [date, computeForDate({growTill, growth, inflation, date: new Date(date), compareTill, oldJob: withJob, newJob: ofJob})])
  
</script>
  

{#if ofJob != null && withJob != null}
  <div class="p-2 flex flex-row flex-wrap justify-center items-center gap-2 md:max-w-xl">
    {#each data as point}
    <div class="{point[1] > 0 ? "bg-green-100" : "bg-red-100"} h-12 w-32 mb-4 md:mb-0 rounded-md flex items-center justify-center">
      <div tabindex="0" class="focus:outline-none flex items-center">
          <span class="text-xs {point[1] > 0 ? "text-green-800" : "text-red-800"} font-normal">{monthNames[point[0].getMonth()]} ({Math.round(point[1])})</span>
      </div>
    </div>
    {/each}
  </div>
{/if}