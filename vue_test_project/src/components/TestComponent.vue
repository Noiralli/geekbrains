<template>
    <div>
        {{ title }}
        <br />
        {{ content }}

        <ul v-for="item in testArray" :key="item.a">
            <li>{{ item.a }}</li>
            <li>{{ item.b }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: () => 'Default data',
        }
    },
    data: () => ({
        title: 'Javascript 2',
        testArray: [{a: 1, b: 11 }, {a: 2, b: 22}, {a: 3, b: 33}],
    }),
    methods: {
        func() {
            console.log(this.content)
            // this.$props
        }
    }
}
</script>
