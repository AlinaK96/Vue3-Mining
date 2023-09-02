<template>
    <div>
        <div role="progressbar"  aria-valuemin="0" aria-valuemax="100" :style=style>{{data}}</div>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: {
        data: String,
        style: String
    }
}
</script>

<style lang="css">
    @keyframes progress {
        0% { --percentage: 0; }
        100% { --percentage: var(--value); }
    }

    @property --percentage {
        syntax: '<number>';
        inherits: true;
        initial-value: 0;
    }

    html.light [role="progressbar"]{
        --primary: #ef7f1b;
        --secondary: #b1bbcf;
    }

    [role="progressbar"] {
        --percentage: var(--value);
        --primary: #a0c24c;
        --secondary: #353d54;
        --size: 80px;
        animation: progress 2s 0.5s forwards;
        width: var(--size);
        aspect-ratio: 1;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        display: grid;
        place-items: center;
    }

    [role="progressbar"]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: conic-gradient(var(--primary) calc(var(--percentage) * 5%), var(--secondary) 0);
        mask: radial-gradient(white 55%, transparent 0);
        mask-mode: alpha;
        -webkit-mask: radial-gradient(#0000 55%, #000 0);
        -webkit-mask-mode: alpha;
    }
</style>