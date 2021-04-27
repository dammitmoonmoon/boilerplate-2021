<template>
    <div>
        {{text}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const text: string = 'hello world!';

export default defineComponent({
    name: "App",
    data() {
        return { text }
    },
});
</script>
