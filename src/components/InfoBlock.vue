<template>
    <div>
            <p>блок с карточками</p>
    <InfoCard />
    </div>

</template>


<script>
import InfoCard from '@/components/UI/cards/InfoCard'

    export default {
    name: 'MainPage',
    components: {
        InfoCard
    }
    }

</script>