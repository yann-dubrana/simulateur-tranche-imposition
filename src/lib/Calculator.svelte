<script lang="ts">

    import {app} from "$lib/tax.svelte";
    import CalculatorResult from "$lib/CalculatorResult.svelte";
    import {Input, Label} from "flowbite-svelte";

</script>

<div class="grid gap-6 mb-6 md:grid-cols-3">
    <div>
        <Label for="taxable-income" class="mb-2">Net imposable:</Label>
        <Input id="taxable-income" class="right" type="number" bind:value={app.income} placeholder="Taxable Income"/>
    </div>
    <div>
        <Label for="people-number" class="mb-2">Nombres de parts</Label>
        <Input id="people-number" class="right" type="number" bind:value={app.numPeople} min="1" placeholder="Number of People"/>
    </div>
    <div>
        <Label for="graph-factor" class="mb-2">Facteur du graphe:</Label>
        <Input id="graph-factor" class="right" type="number" bind:value={app.graphFactor} min="1" placeholder="Number of People"/>
    </div>
</div>

<div class="space-y-6">
    {#each app.taxBracketsResult as taxBracket}
        <CalculatorResult bracket={taxBracket }/>
    {/each}
</div>
