<!-- src/components/TaxChart.svelte -->

<script lang="ts">
    import {onDestroy, onMount} from 'svelte';
    import {app} from '$lib/tax.svelte';
    import {Chart} from 'chart.js/auto';
    import 'chartjs-adapter-moment';
    import Device from "svelte-device-info";


    let chart = $state(undefined);
    let maintainAspectRatio = true;

    onMount(() => {
        maintainAspectRatio = !Device.isPhone
        console.log(maintainAspectRatio)
        draw()
    })

    // Cleanup the chart when the component is destroyed
    onDestroy(() => {
        if (chart) {
            chart.destroy();
        }
    });

    function draw() {
        if (chart) {
            chart.destroy();
        }

        const ctx = document.getElementById('taxChart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: app.dataset
            },
            options: {
                responsive: true,
                maintainAspectRatio: maintainAspectRatio,
                plugins: {
                    title: {
                        display: true,
                        text: 'French Tax Chart - Cubic interpolation mode'
                    },
                },
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Taxable Income (Euros)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Total Tax (Euros)'
                        }
                    }
                }
            }
        });
    }


</script>

<div class="p-6 flex flex-row items-center justify-between min-h-96">
    <canvas id="taxChart"></canvas>
</div>


