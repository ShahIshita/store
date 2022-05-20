<template>
    <base-card>
    {{ userDetail.userName }}<br>
    {{ userDetail.email }}
    
    </base-card>
</template>

<script>
import BaseCard from './ui/BaseCard.vue';
export default {
    components:{
        BaseCard,
    },
    computed:{
        userDetail(){
            return this.$store.getters['userDetail'];
        }
    }
};
</script>