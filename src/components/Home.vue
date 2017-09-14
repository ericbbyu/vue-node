<template>
  <v-app light class="home">
    <main>
      <v-parallax src="static/assets/images/home-banner.jpg">
        <v-layout column align-center justify-center>
          <v-flex xs10 offset-xs1 md8>
            <br><br><br><br><br>
            <h2 class="black--text">Professional Investment For Everyone</h2>
            <h4 class="black--text">Start to build your wealth today</h4>
            <v-btn success to="/">Invest Now</v-btn>
            <v-btn outline success to="/methodology">Learn More</v-btn>
          </v-flex>
        </v-layout>
      </v-parallax>
      <v-layout column wrap align-center class="my-5">
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Do Simple <span class="success--text">Do Right</span></h2>
            <span class="subheading">
            Customize Your Investment in 3 steps
          </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-2 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon large class="success--text text--lighten-2">assessment</v-icon>
                  </v-card-text>
                  <v-card-title primary-title>
                    <h3 class="headline text-xs-center">Help us know you better</h3>
                  </v-card-title>
                  <v-card-text>
                    Complete a questionnaire based on your financial object, risk preferance and Investment Period
                  </v-card-text>
                  <v-card-actions>
                    <v-btn flat success>Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-2 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon large class="success--text text--lighten-2">trending_up</v-icon>
                  </v-card-text>
                  <v-card-title primary-title>
                    <h3 class="headline">Customize your portfolio</h3>
                  </v-card-title>
                  <v-card-text>
                    We will recommend a personalized portfolio of ETFs which is diversified globally to achieve your goal
                  </v-card-text>
                  <v-card-actions>
                    <v-btn flat success>Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-2 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon large class="success--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title>
                    <h3 class="headline text-xs-center">Leave the heavy work to us</h3>
                  </v-card-title>
                  <v-card-text>
                    We will invest your money, using technology to monitor and rebalance your portfolio automactically
                  </v-card-text>
                  <v-card-actions>
                    <v-btn flat success>Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-left">
            <h2 class="headline">New Choice <span class="success--text">New Features</span></h2>
            <span class="subheading">
                Technology is redefining investment
              </span>
          </div>
        </v-flex>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md6 sm12 lg5 offset-lg1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title>
                  <h2 class="headline text-xs-center">Design Your Path</h2>
                </v-card-title>
                <v-card-text>
                  Set up your investment goal, design your profolio and rebalance it to keep you on track. Once you adjust your goal, we resonstruct
                  investment plan to achieve it.
                </v-card-text>
                <v-list class="text-xs-left transparent">
                  <v-list-tile>
                    <v-list-tile-avatar>
                      <v-icon large class="primary--text text--lighten-2">trending_up</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>General Saving Plan</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-btn flat success>Explore</v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-avatar>
                      <v-icon large class="primary--text text--lighten-2">trending_up</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Retirement Plan</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-btn flat success>Explore</v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-avatar>
                      <v-icon large class="primary--text text--lighten-2">trending_up</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Education Plan</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-btn flat success>Explore</v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-avatar>
                      <v-icon large class="primary--text text--lighten-2">trending_up</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>Major Purchase Plan</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-btn flat success>Explore</v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
            <v-flex xs12 md6>
              <v-card class="elevation-0 transparent">
                <img src="static/assets/images/home-path.png" class="hidden-xs-only" style="width:500px;">
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
      <v-parallax src="static/assets/images/home-map.gif" height=400>
        <v-layout column align-center justify-center>
          <v-flex xs10 offset-xs1 md8>
            <br><br><br><br><br>
            <div class="headline black--text mb-3">Global Diversification</div>
            <p class="black--text">Investing in ETFs of different regions, markets and asset classes makes globally diversification possible, which
              is an efficent way to reduce risk.</p>
            <v-btn success to="/">Invest Now</v-btn>
            <v-btn outline success to="/blog">Learn More About ETFs</v-btn>
          </v-flex>
        </v-layout>
      </v-parallax>
      <v-layout column wrap align-center class="my-5">
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md6>
              <v-card class="elevation-0 transparent">
                <img src="static/assets/images/home-expert.png" class="hidden-xs-only" style="width:500px;">
              </v-card>
            </v-flex>
            <v-flex xs12 md6 sm12 lg5 offset-lg1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title>
                  <h2 class="headline text-xs-center">Expertise and Technology</h2>
                </v-card-title>
                <v-card-text>
                  Our experts will give professional advice and invite technology to monitor your portfolio 24/7 and rebalance it automatically
                  when needed.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
      <HomeChart></HomeChart>
    </main>
  </v-app>
</template>

<script>
import HomeChart from '../components/Charts/HomeChart'

  export default {
    name: 'hello',
    data() {
      return {

      }
    },
    components: {
      HomeChart
    }
  }

</script>
