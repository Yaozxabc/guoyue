import Mock from 'mockjs'

Mock.Random.extend({
          products: function(date) {
            var products = [
              'http://www.guoyueyihao.com/uploads/160811/1-160Q11A334423.jpg',
              'http://www.guoyueyihao.com/uploads/160307/2-16030G1320QW.jpg',
              'http://www.guoyueyihao.com/uploads/160305/2-160305145ZI34.jpg',
              'http://www.guoyueyihao.com/uploads/allimg/170929/2-1F9291G1160-L.jpg',
              'http://www.guoyueyihao.com/uploads/allimg/180731/2-1PI1142K00-L.jpg',
              'http://www.guoyueyihao.com/uploads/180104/2-1P104153KH18.jpg',
              'http://www.guoyueyihao.com/uploads/allimg/180724/2-1PH41146120-L.jpg']
            return this.pick(products)
          }
        })
const data=Mock.mock({
  'list|100':[{
    'id|+1':1,
    'name':'@ctitle',
    'oldprice':'@natural(1600,2000)',
    'newprice':'@natural(1000,1600)',
    'count':'@natural(25,230)',
    'brand':'@csentence(3,6)',
    'discount_full':'@natural(1000,1005)',
    'discount_reduce':'@natural(100,105)',
    'src':'@products'
  }]
})
export default {
  data
}
