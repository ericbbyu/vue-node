<template>
  <v-app light class="methodology">
    <main>
      <v-parallax src="static/assets/images/methodology-banner.jpeg" height=400>
        <v-layout row align-center justify-center>
          <v-flex xs10 md8>
            <h2 class="black--text">WE BELIEVE IN PASSIVE INVESTMENT</h2>
            <v-btn outline light to="/methodology">See How It Works</v-btn>
          </v-flex>
        </v-layout>
      </v-parallax>
      <v-layout column wrap align-center class="my-5">
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md6>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title>
                    <h3 class="text-xs-center">Do less <span class="success--text">Earn More</span></h3>
                  </v-card-title>
                  <v-card-text class="body-2">
                    Put your money into a diversified portfolio of low-cost index funds and hold it for a long time to deliver a market rate
                    of return with less volatility. This is the philosophy of passive investing, which has been proven feasible
                    by academic research and industry practice.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn flat success>See Why</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md6>
                <v-card class="elevation-0 transparent">
                  <img src="static/assets/images/passive-inflow.png" style="width:100%;">
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs10 class="my-5">
          <div class="text-xs-center">
            <h3>Active fund <span class="success--text">doesn't </span>act well</h3>
            <span class="subheading">
            <span class="display-2 primary--text">93% </span> percent of actively managed U.S. equity funds underperformed
            their benchmark in 2016.
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center class="my-5">
              <v-flex xs12 md4>
                <v-card class="elevation-2 transparent">
                  <v-card-title primary-title>
                    <h2 class="success--text">40%</h2>
                  </v-card-title>
                  <v-card-text class="body-2">
                    active funds couldn't operate for 10 years because of bad performance
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-2 transparent">
                  <v-card-title primary-title>
                    <h2 class="success--text">64%</h2>
                  </v-card-title>
                  <v-card-text class="body-2">
                    funds drift away from their originally declared style of investing.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-2 transparent">
                  <v-card-title primary-title>
                    <h2 class="success--text">83%</h2>
                  </v-card-title>
                  <v-card-text class="body-2">
                    active funds in the US fail to match their chosen benchmarks over 10 years.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center justify-center>
              <v-flex xs12>
                <v-tabs dark fixed centered style="height:600px">
                  <v-tabs-bar class="primary">
                    <v-tabs-slider class="white"></v-tabs-slider>
                    <v-tabs-item :href="'#tab-1'">
                      Selection
                    </v-tabs-item>
                    <v-tabs-item :href="'#tab-2'">
                      Algorithm
                    </v-tabs-item>
                    <v-tabs-item :href="'#tab-3'">
                      Backtest
                    </v-tabs-item>
                  </v-tabs-bar>
                  <v-tabs-items>
                    <v-tabs-content :id="'tab-1'">
                      <v-card flat>
                        <v-card-title primary-title class="success--text">
                          <h4 class="text-xs-center">Focus on ETF and take full advantage of it</h4>
                        </v-card-title>
                        <v-card-text class="body-2">All of portfolios we recommend consist of different ETFs. ETFs can track market without much operations
                          and the fee is low, these two features make it suitable to do passive investment.</v-card-text>
                      </v-card>
                    </v-tabs-content>
                    <v-tabs-content :id="'tab-2'">
                      <v-card flat>
                        <v-card-title primary-title class="success--text">
                          <h4 class="text-xs-center">Backed by optimized modern economic theory, making portfolios perform better</h4>
                        </v-card-title>
                        <v-card-text class="body-2">All of portfolios we recommend consist of different ETFs. ETFs can track market without much operations
                          and the fee is low, these two features make it suitable to do passive investment.</v-card-text>
                      </v-card>
                    </v-tabs-content>
                    <v-tabs-content :id="'tab-3'">
                      <v-card flat class="text-xs-center">
                        <img src="static/assets/images/backtest.png" style="width:80%;">
                      </v-card>
                    </v-tabs-content>
                  </v-tabs-items>
                </v-tabs>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </main>
  </v-app>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {}
    }
  }

</script>
