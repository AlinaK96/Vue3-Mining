<template>
    <div class="theme__toggle">
        <input id="toggle__body" type="checkbox">
        <label for="toggle__body">
            <div class="toggle__ball"></div>
        </label>
    </div>
</template>

<script>
export default {
    name: 'ThemeToggler',
}
</script>

<style lang="css" scooped>
.theme__toggle {
    position: relative;
    top: 100px;
    border: 2px solid transparent;
    border-radius: 130px;
    margin-bottom: 45px;
    padding: 1px 2px;
    cursor: pointer;
    display: flex;
    align-self: flex-end;
}

.theme__toggle:last-child {
    margin-bottom: 0;
}
.theme__toggle input[type="checkbox"] {
    display: none;
}

.theme__toggle label {
    position: relative;
    display: inline-block;
    width: 65px;
    height: 20px;
    background: var(--background-primary);
    border-radius: 80px;
    cursor: pointer;
    transition: background .5s;
}

.theme__toggle input[type="checkbox"]:checked + label {
    background: var(--main-content);
}

.toggle__ball {
    position: absolute;
    top: -8px;
    left: -10px;
    width: 35px;
    height: 35px;
    border: 1px solid #e5e5e5;
    background: repeating-radial-gradient(circle at 50% 50%, rgba(200,200,200,.2) 0%, rgba(200,200,200,.2) 2%, transparent 2%, transparent 3%, rgba(200,200,200,.2) 3%, transparent 3%), conic-gradient(white 0%, silver 10%, white 35%, silver 45%, white 60%, silver 70%, white 80%, silver 95%, white 100%);
    border-radius: 50%;
    box-shadow: 3px 5px 10px 0 rgba(0,0,0,.4);
    transition: left .4s;
}

.theme__toggle input[type="checkbox"]:checked + label > .toggle__ball {
    left: calc(100% - 35px + 10px);
}

@media (max-width: 849px){
    .theme__toggle{
        top: 20px;
    }
}

</style>