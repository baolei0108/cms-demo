/**
 * Created by Administrator on 2018/3/20 0020.
 */
var router = require('koa-router')();


router.get('/',async (ctx)=>{

    ctx.body="还没有开始动工，请访问后台";

})

module.exports=router.routes();