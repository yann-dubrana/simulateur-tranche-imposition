<script lang="ts">

    import {app, type TaxBracketResult} from "$lib/tax.svelte";
    import {Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from "flowbite-svelte";

    let {bracket}: { bracket: TaxBracketResult } = $props()
</script>

{#if bracket.total > 0}

    <Heading tag="h3" class="mb-4 text-2xl {app.mostAvantageous.name === bracket.name ? 'text-emerald-700' : ''}">
        Grille {bracket.name}: {bracket.total.toLocaleString('fr-FR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + " € annuels, soit " + (bracket.total / 12).toLocaleString('fr-FR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + "€ mensuels"}
    </Heading>
    <Table>
        <TableHead>
            <TableHeadCell>Tranche (€)</TableHeadCell>
            <TableHeadCell>Taxable (€)</TableHeadCell>
            <TableHeadCell>Taux (%)</TableHeadCell>
            <TableHeadCell>Montant (€)</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
            {#each bracket.items as b}
                <TableBodyRow>
                    <TableBodyCell class="text-right">{b.rangeLabel()}</TableBodyCell>
                    <TableBodyCell class="text-right">{(b.taxableAmount).toLocaleString('fr-FR', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    })} €
                    </TableBodyCell>
                    <TableBodyCell class="text-right">{(b.rate * 100).toLocaleString('fr-FR', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    })} %
                    </TableBodyCell>
                    <TableBodyCell class="text-right">{b.tax.toLocaleString('fr-FR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }) + " €"}</TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>

{/if}
