<template>
    <section class="main-info">
        <img src="../assets/img/png/Logo.png" alt="Упс.." class="logo">
        <InfoCard />
    </section>

</template>


<script>
import InfoCard from '@/components/UI/cards/InfoCard'

    export default {
        name: 'InfoBlock',
        components: {
            InfoCard
        }
    }

</script>