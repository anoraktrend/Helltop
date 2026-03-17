<script lang="ts">
  import { onMount } from 'svelte';

  type Flavor = 'mocha' | 'frappe' | 'macchiato' | 'latte';
  const flavors: Flavor[] = ['mocha', 'frappe', 'macchiato', 'latte'];
  
  let currentFlavor: Flavor = $state('mocha');

  const icons = {
    mocha: '🌙',
    frappe: '☁️',
    macchiato: '☕',
    latte: '☀️'
  };

  function setFlavor(flavor: Flavor) {
    currentFlavor = flavor;
    if (typeof document !== 'undefined') {
      document.documentElement.className = flavor;
      localStorage.setItem('catppuccin-flavor', flavor);
    }
  }

  function nextFlavor() {
    const index = flavors.indexOf(currentFlavor);
    const nextIndex = (index + 1) % flavors.length;
    setFlavor(flavors[nextIndex]);
  }

  onMount(() => {
    const saved = localStorage.getItem('catppuccin-flavor') as Flavor;
    if (saved && flavors.includes(saved)) {
      setFlavor(saved);
    } else {
      setFlavor('mocha');
    }
  });
</script>

<button
  onclick={nextFlavor}
  class="p-2 rounded-lg hover:bg-ctp-surface0 transition-colors flex items-center justify-center gap-2 text-xl"
  title="Switch Flavor"
>
  <span>{icons[currentFlavor]}</span>
  <span class="text-xs uppercase font-bold tracking-widest text-ctp-subtext0 hidden sm:inline">
    {currentFlavor}
  </span>
</button>
