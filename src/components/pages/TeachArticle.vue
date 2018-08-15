<template>
<div class="article">
  <h2 class="article_hd">教你挑选适合 你的好古筝</h2>
  <div class="article_con">
  <p class="callName"></p>
  <p v-for="para in content_1st">{{para.value}}</p>
  <img src="" alt=""/>
  <h3></h3>
  <p v-for="para in content_2ed">{{para.value}}</p>
  <img src="" alt=""/>
  <p v-for="para in content_3th">{{para.value}}</p>
</div>
</div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
            return {
              content_1st:[
                {id:'01',value:'古筝是中国民族传统乐器中的筝乐器，它是中国独特的、重要的民族乐器之一。古筝音色优美，音域宽广、演奏技巧丰富，具有相当强的表现力，因此它深受广大人民群众的喜爱。'},
                {id:'02',value:'如今越来越多的人投身古筝学习，“如何挑选一台好古筝”亦是备受关注的问题。乐器的挑选始终坚持音色为主，然而古筝是工艺与音色并重的乐器。下面为您做一个全面的古筝挑选介绍。'},
              ],
              content_2ed:[
                {id:'01',value:'现代工艺筝：八十年代前采用的是喷面工艺，此工艺制作的古筝音色干涩、发闷。八十年代后，采用的创新的现代烘烤工艺。满足了日益增长的市场需求量，这便是现代工艺筝的改革。现代古筝制作，上海地区略早于扬州地区，而烘面工艺也是上海地区最早制作并延续至今。其主要代表作有'},
                {id:'02',value:'传统手工筝：手工筝与现代筝的差异在于面板与原材料的储备处理，手工筝的面板，不采用烘烤处理，自然风干，露天存放若干年，时效处理水份，消除内应力，木质纤维完整，音色最佳。手工古筝代表作：朱雀古筝、东韵古筝。。'},
                {id:'03',value:'新型手工筝：木头制作乐器，其发生原理一直都被学者所研究。于是乎，将专业声学与传统科学相互结合形成了新型手工筝，是古筝制作的一次革命。简言之，新型手工筝是传统手工筝的升级版，在制作方面，对于面板与材料更为苛求，每一款古筝都尤其独特性，只做最好的古筝。尽管与市场需求不符合，却依旧坚守音色与品质。代表作：'},
              ],
              content_3th:[
                {id:'01',value:'音色、外观、品牌是古筝挑选三大重点，下面重点讲解音色试音。'},
                {id:'02',value:'古筝一共有五个音区，高音区、中音区、低音区、倍低音区、倍高音区，通过拨通每个音区的弦，听古筝的音色是否连贯，过渡自然。值得注意的是，在拨弦的时候要注意古筝的手感是否合适，如果触弦的感太差则要看筝码摆放是否有问题。此外，还有将古筝调准，才能更好的对比音色。古筝因材料、制法、琴弦、油漆和装配的差异而在音色上有很大的不同，音色好的琴必须具备高音纯净柔美，低音丰满深厚有力，并且要发音含蓄，集中。具体到每一根琴弦和每个区域都要清晰：高音区柔美如歌，中音区优雅有度，低音区浑厚深沉。这样的琴声听起来就圆润，优美，没有任何杂音。'},
              ],
            }
        }
    }
</script>


<style scoped lang="scss">
.article{
  text-align: center;
background:#fff;
  .article_hd{
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 30px;
    font-weight: bold;
  }
  .article_con{
    padding: 5px;
    p{
      text-indent: 36px;
      font-size: 18px;
      text-align: left;
    }
  }
}
</style>
