<template>
    <div>
        <h1>re menu</h1>
        <div>
            <v-text-field
              class="relative"
              v-model="ifDisplayValue"
              :loading=isIfLoading></v-text-field>
            <p>になったら</p>
            <v-text-field
              class="relative"
              v-model="thenDisplayValue"
              :loading=isThenLoading></v-text-field>
            <p>をする。</p>
            <v-btn class="relative">新しい方法をで習慣を管理する</v-btn>
        </div>
        <div class="area">
            <ul class="square">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      ifDisplayValue: 'ご飯を食べる前に',
      thenDisplayValue: '腕立て伏せ',
      isIfLoading: false,
      isThenLoading: false,
      count: 0
    }
  },
  created () {
    const setDisplay = () => {
      if (this.count === 0) {
        // if loading
        this.isIfLoading = true
        this.count = 1
      } else if (this.count === 1) {
        // if value change
        this.isIfLoading = false
        this.count = 2
      } else if (this.count === 2) {
        // then loading
        this.isThenLoading = true
        this.count = 3
      } else if (this.count === 3) {
        // then value change
        this.isThenLoading = false
        this.count = 0
      }
    }
    setInterval(setDisplay, 3000)
  }
}
</script>

<style scoped>
    .relative {
        position: relative;
        z-index: 30;
    }
    .area {
        /* background: #4e54c8; */
        /* background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8); */
        width: 100%;
        height:50vh;
    }

    .square {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 20;
    }

    .square li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: animate 25s linear infinite;
        bottom: -150px;
    }

    .square li:nth-child(1){
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }

    .square li:nth-child(2){
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }

    .square li:nth-child(3){
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }

    .square li:nth-child(4){
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }

    .square li:nth-child(5){
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }

    .square li:nth-child(6){
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }

    .square li:nth-child(7){
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }

    .square li:nth-child(8){
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }

    .square li:nth-child(9){
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }

    .square li:nth-child(10){
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
    }

    @keyframes animate {

        0%{
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }

        100%{
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }

    }

</style>
