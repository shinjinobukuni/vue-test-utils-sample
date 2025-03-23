<template>
    <form @submit.prevent="submit">
        <input type="email" v-model="form.email" class="form-control"/>

        <textarea v-model="form.description" class="form-control"></textarea>

        <select v-model="form.city" class="form-control">
            <option value="new-york">New York</option>
            <option value="moscow">Moscow</option>
        </select>

        <input type="checkbox" v-model="form.subscribe" class="form-control"/>

        <input type="radio" value="weekly" v-model="form.interval" class="form-control"/>
        <input type="radio" value="monthly" v-model="form.interval" class="form-control"/>

        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                description: '',
                city: '',
                subscribe: false,
                interval: ''
            }
        }
    },
    methods: {
        async submit() {
            this.$emit('form-submit', this.form)
        }
    }
}
</script>
<style scoped>
.form-control {
    display: block;
    margin-bottom: 1rem;
}
</style>