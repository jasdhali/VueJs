<template>
    <div id="emojiapp">
        <label>Sound level</label>
        <input type="number" v-model.number="soundLevel">
        <sound-icon :level="soundLevel"></sound-icon>
    </div>
</template>

<style>
    body {
        background: #20262E;
        padding: 20px;
        font-family: Helvetica;
    }
    #emojiapp {
        background: #fff;
        border-radius: 2px;
        padding: 10px;
        transition: all 0.2s;
    }

</style>