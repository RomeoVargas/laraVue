<script>
export default {
    name: "YesNoModal",
    props: {
        id: String,
        action: String,
        actionTitle: String
    },
    methods: {
        handleYes() {
            this.$emit('yes');
            $('#yesNoModal').modal('hide');
        }
    }
}
</script>

<template>
    <div class="modal fade" :id="id" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">{{ actionTitle }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Are you sure you want to {{ action }}?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    <button @click="handleYes" type="button" class="btn btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
