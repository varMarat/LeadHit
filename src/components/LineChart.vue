<script>
    import { Line } from "vue-chartjs"
    export default {
        extends: Line,
        props: {
            chartData: {
                type: Array
            },
            label: {
                type: String
            },
            chartColors: {
                type: Object
            },
            options: {
                type: Object
            }
        },
        mounted() {
            const dtf = new Intl.DateTimeFormat('ru-RU', {
                month: 'long',
                day: '2-digit'
            })
            const dates = this.chartData.map(item => {
                return dtf.format(Date.parse(item.date))
            })
            const visits = this.chartData.map(item => item.visits)
            this.renderChart(
                {
                    labels: dates,
                    datasets: [
                        {
                            label: this.label,
                            data: visits,
                            ...this.chartColors,
                        }
                    ]
                }, 
                this.options
            )
        }
    }

</script>