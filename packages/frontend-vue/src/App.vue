<template>
    <div>
        {{text}}
    </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "App",
    data() {
        return { text: "hello world"}
    },
});
</script>
