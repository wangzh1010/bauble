<template>
  <div class="book-container">
    <div class="book">
      <ul>
        <li class="paper" data-right>
          <div class="page page-back">
            <img src="../assets/1.png" alt="">
                </div>
            <div class="page page-front">
              <img src="../assets/2.png" alt="">
                </div>
        </li>
        <li class="paper">
          <div class="page page-front">
            <img src="../assets/3.png" alt="">
                </div>
            <div class="page page-back">
              <img src="../assets/4.png" alt="">
                </div>
        </li>
        <li class="paper">
          <div class="page page-front">
            <img src="../assets/5.png" alt="">
                </div>
            <div class="page page-back">
              <img src="../assets/6.png" alt="">
                </div>
        </li>
        <li class="paper">
          <div class="page page-front">
            <img src="../assets/8.png" alt="">
                </div>
            <div class="page page-back">
              <img src="../assets/7.png" alt="">
                </div>
        </li>
      </ul>
    </div>
    <div>
      <Button id="prev" @click="prev">Prev</Button>
      <Button id="next" @click="next">Next</Button>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      running: false,
      direction: '',
      reverse: ''
    }
  },
  mounted() {
    var self = this;
    var papers = document.querySelectorAll('.paper');
    console.log(papers.length)
    Array.from(papers).forEach(paper => {
      paper.addEventListener('webkitAnimationStart', function() {
        self.running = true;
        console.log('webkitAnimationStart')
      });
      paper.addEventListener('webkitAnimationEnd', function() {
        self.running = false;
        console.log('webkitAnimationEnd~')
        this.removeAttribute('data-' + self.reverse);
        this.setAttribute('data-' + self.direction, true);
        var p1 = this.querySelector('.page-front');
        var p2 = this.querySelector('.page-back');
        p1.classList.remove('page-front');
        p1.classList.add('page-back');
        p2.classList.remove('page-back');
        p2.classList.add('page-front');
        this.classList.remove('filp-' + self.direction);
        var nextElem = this.nextElementSibling;
        if (nextElem) {
          if ('left' === self.direction) {
            nextElem.setAttribute('data-right', true)
          } else {
            nextElem.removeAttribute('data-right')
          }
        }
      })
    })
  },
  methods: {
    prev() {
      if (this.running) { return; }
      var papers = document.querySelectorAll('[data-left]');
      if (!papers.length) { return; }
      var paper = papers[papers.length - 1];
      this.direction = 'right';
      this.reverse = 'left';
      paper.classList.add('filp-right')
    },
    next() {
      if (this.running) { return; }
      var paper = document.querySelector('[data-right]');
      if (!paper) { return; }
      this.direction = 'left';
      this.reverse = 'right';
      paper.classList.add('filp-left');
    }
  }
}

</script>
<style type="text/css">
.book {
  margin: 30px 0px;
}

.book ul {
  position: relative;
  width: 300px;
  height: 200px;
  margin-left: 100px;
}

.paper {
  position: absolute;
  display: none;
  right: 0;
  transform-style: preserve-3d;
}

.paper img {
  width: 150px;
  vertical-align: middle;
}

[data-left] {
  top: 0;
  left: 0;
  right: auto;
  display: block;
  z-index: 2;
}

[data-right] {
  top: 0;
  right: 0;
  display: block;
  z-index: 2;
}

[data-right]+.paper {
  display: block;
}

.page-front {
  z-index: 1;
  position: relative;
  transform: translateZ(1px);
}

.page-back {
  transform: scale(-1, 1);
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes filp-to-left {
  from {
    transform: perspective(800px) rotateY(0deg);
  }

  to {
    transform: perspective(800px) rotateY(-180deg);
  }
}

@keyframes filp-to-right {
  from {
    transform: perspective(800px) rotateY(0deg);
  }

  to {
    transform: perspective(800px) rotateY(180deg);
  }
}

.filp-left {
  z-index: 3;
  transform-origin: left center;
  animation: filp-to-left 1.8s ease-in-out forwards;
}

.filp-right {
  z-index: 3;
  transform-origin: right center;
  animation: filp-to-right 1.8s ease-in-out forwards;
}

button {
  font-size: 14px;
  padding: 5px 8px;
}

</style>
