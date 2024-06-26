<!-- src/components/TaxChart.svelte -->

<script>
    import Chart from "$lib/Chart.svelte";
    import Calculator from "$lib/Calculator.svelte";
    import {app} from "$lib/tax.svelte";
</script>

<div class="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
    <div class="lg:col-span-4">
        <Calculator />
    </div>
    <div class="lg:col-span-8">
        {#key app.dataset}
            <Chart />
        {/key}
    </div>
</div>