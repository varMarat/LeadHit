<template>
    <v-container class="pa-0">

        <v-row class="d-flex justify-center mt-16">
            <h1>LeadHit</h1>
        </v-row>
        <v-row class="mt-16">
            <v-col cols="6" offset="3">
                <v-card class="pa-10 mt-16" height="200px">
                    <form @submit.prevent="onSubmit">
                        <v-text-field
                            v-model="id"
                            @focus="onFocus($event)"
                            :error-messages="errorMessages"
                            :counter="24"
                            label="Id"
                            required
                        >
                        </v-text-field>

                        <v-btn
                            class="mr-4 mt-10"
                            @click="onSubmit"
                        >
                        Войти
                        </v-btn>
                    </form>
                </v-card>
            </v-col>    
        </v-row>

    </v-container>
</template>

<script>


export default{
    name: 'Authorization',
    data() {
        return {
            id: '',
            errorMessages: '',
            url: 'https://track-api.leadhit.io/client/test_auth',
        }
    },
    methods: {
        onSubmit: async function() {
            if(this.id.length===24) {
                try {
                    const response = await fetch(this.url, {
                        method: 'GET',
                        headers: {
                            'Api-Key': '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
                            'Leadhit-Site-Id': this.id,
                        }
                    })

                    const result = await response.json()

                    if(result.message === 'ok'){
                        localStorage.setItem("leadhit-site-id", this.id)
                        this.$router.push('analytics')
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            else { 
                this.errorMessages = 'id сайта должен содержать 24 символа'
            }       
        },
        onFocus(event) {
            this.errorMessages = ''
        }
    },
}
</script>

<style scoped>
</style>