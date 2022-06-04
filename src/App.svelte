<script>
  import './global.css'
  import Calculator from './lib/Calculator.svelte';
</script>

<main class="flex-1 p-2 flex flex-col justify-around items-center">
  <div class="flex flex-col items-center py-4 md:py-8">
    <h1 class="text-4xl tracking-wide font-bold">Should I Stay Or Should I Go? 🤔</h1>
    <p class="text-lg">
      A simple calculator to see if changing jobs make sense? Na, you should really be considering other factors too. They're probably more important.
    </p>
  </div>
  <Calculator />
</main>
  
<footer class="bg-gray-200 px-8 py-16">

</footer>