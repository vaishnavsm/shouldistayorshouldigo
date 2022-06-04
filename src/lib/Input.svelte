<script>
  export let type="text";
  export let value = undefined;
  export let label;
  export let placeholder;
</script>

<div class="md:flex md:items-center mb-2 self-stretch">
  <div class="md:w-1/3">
    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
      {label}
    </label>
  </div>
  <div class="md:w-2/3">
    { #if type === 'number'}
      <input 
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password"
        type='number'
        placeholder={placeholder}
        bind:value={value}
      >
      
    { :else if type === 'date' }
      <input 
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password"
        type='date'
        placeholder={placeholder}
        bind:value={value}
      >
    { :else }
      
      <input 
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password"
        type="text"
        placeholder={placeholder}
        bind:value={value}
      >
    {/if}
  </div>
</div>