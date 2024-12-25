<script>
 
</script>

<template>

<NavMenu/>

<div class="page-inner">
        <div class="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
            <div>
                <h3 class="fw-bold mb-3">Today Currency Rate</h3>
                <!-- <h6 class="op-7 mb-2">Free Bootstrap 5 Admin Dashboard</h6> -->
            </div>
            <!-- <div class="ms-md-auto py-2 py-md-0">
                <a href="#" class="btn btn-label-info btn-round me-2">Manage</a>
                <a href="#" class="btn btn-primary btn-round">Add Customer</a>
            </div> -->
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Today Currency Rate with BitCoin</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <p v-if="records_loading" style="font-size: 15px; font-weight: bold; text-align: center;">
                                        Data Loading.......
                            </p>
                            <table v-else class="table table-bordered table-head-bg-primary table-striped">                              
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Code</th>
                                        <th>Rate</th>
                                        <th>Flat Rate</th>
                                        <th>Symbol</th>
                                    </tr>
                                </thead>
                                <tbody>                                                                       
                                    <tr v-for="(item, index) in records" :key="index">
                                        <td>{{ item['description'] }} </td>
                                        <td>{{ item['code'] }} </td>
                                        <td>{{ item['rate'] }} </td>
                                        <td>{{ item['rate_flat'] }} </td>
                                        <td>{{ item['symbol'] }} </td>
                                     
                                       
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!-- <div class="container">
    <div class="container mt-3">
  <h2>Striped Rows</h2>
  <p>The .table-striped class adds zebra-stripes to a table:</p>            
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>
</div> -->
    
</template>

<script>
    import axios from 'axios'
    const baseURL = import.meta.env.VITE_API_BASE_URL
    export default{  
        data(){
           return {
            records:[],
            records_loading:true,
           }
        },
        mounted(){
            this.getTodayCurrencyRateAPIRecords()
        },
        methods:{
            
            async getTodayCurrencyRateAPIRecords(){
               const url = baseURL.concat('currentprice.json')
                debugger
                axios.get(url)
                .then(response => (
                    this.records = response.data.bpi,
                    this.records_loading = false,
                    console.log(response.data)
                ))
                .catch(error => console.log(error))
            }
        }
    };

</script>