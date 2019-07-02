<template>
    <!-- 这是为了布局清晰 -->
    <div>
      <div class="box">
        <p class="title" v-text="title"></p>
        <slot></slot>
      </div>
    </div>
</template>
<script>
    export default {
        name: 'layout',
        props: {
            title: {
                type: String,
                default: 'title'
            }
        }
    }
</script>
