//模型的增删改查
const NewsModel = require("../../schema/newsschema/newsschema")
const baseURL = 'http://localhost:3000'

const news = new NewsModel({

    "news":
        [{
            title: '河南卫视《重阳奇妙游》即将和大家见面',
            author: '河南卫视',

            time: '2021年9月13日',

            content: "<P>登高辞青，赏花饮酒……除了这些，古人在重阳节还会做什么?10月13日河南卫视的《重阳奇妙游》带你来一次“深度体验”。春节、元宵、清明、端午、七夕、中秋……河南卫视的“中国节日”系列节目惊艳了观众，也收获了前所未有的赞美。作为中国节日系列的收官之作，这次的《重阳奇妙游》，主创们也花尽了心思。据节目组透露，这次会带大家登高祈福，祭祖赏菊，展示民俗与礼制;也要带你插花、焚香、点茶、吃酒，体验宋人风雅……当然还会有一如继往绝妙的舞蹈。</P><P>《重阳奇妙游》的风格将延续该系列的风格特点，采取线上+线下的模式，以及网剧+网综的形式架构，并且这次会联动开封菊花节。总导演钱林林正是《清明奇妙游》的总导演，她和团队也会继续挖掘传统文化和节日的丰富内涵。“其实在做《清明奇妙游》时，我们也是摸着石头过河，观众们给了我们莫大的鼓励”。钱林林坦言，这份鼓励也变成了动力和压力。她记得，当时做完《清明奇妙游》之后就开始研究重阳，“特别想把重阳节在古代的一些民俗和礼制告诉大家。”</P><P>在他们看来，重阳的来历、演变、内涵都非常丰富，“对中华民族来讲，同样是非常重要的节日。他们在创意的时候，也是通过“情和味”串联起各个节目。以前古人过重阳节做什么?登高、祈福、祭祖、赏菊、吃菊花糕、喝菊花酒，包括吃重阳面等等，这些也都会节目中展示。“我们特别想把节目做好，给大家呈现更多不一样的中国节日内容。也希望通过节目，让大家爱上我们的传统文化。”除此之外，节目也会突出当代老人“老有所乐、老有所用、老有所依”的生活，他们希望用年轻的视角来解读现在的老人，把他们积极向上以及追求内心青春的部分展现出来。</P><P>具体到节目的亮点，一定要提双人舞蹈节目《有凤来仪》。主创们介绍，这次的双人舞是以往节目里没有展示过的。这个节目里面有凤凰元素，会用五种色彩来表达凤凰的精神境界，“体现的是我们赋予凤凰的美好寄托，希望在这一天带给所有中国人吉祥，也期待着和大家一起随着凤凰展翅飞翔”。</P><P>此外，舞蹈演员胡阳表演的剑舞《逍遥》，以及毛不易的歌曲《给你给我》等节目也值得期待。踏水而歌、剑舞为形。《逍遥》讲的是李白豁达、乐观的人生态度。用总导演的话说就是，这两年经历了种种困难，“想通过节目给大家鼓鼓劲儿，相信只要大家都向着自己的愿望努力，未来我们的生活都会非常好”。这次的拍摄地点在云台山潭瀑峡景点，画面看起来唯美飘逸，但实际拍摄也让主创们吃尽了苦头，但“只要努力了、付出了，总会得到最好的结果”。</P><P>而毛不易谈起这次的歌曲时介绍“这是一首充满温情的歌曲”，他希望在这个讲“情”的节日里，每个人都能用力爱、用心爱。他说，《重阳奇妙游》就是一份送给家人的礼物。</P>", zhushi: '<P>1.豫章：滕王阁在今江西省南昌市。南昌，为汉豫章郡治。唐代宗当政之后，为了避讳唐代宗的名(李豫)，“豫章故郡”被替换为“南昌故郡”。所以现在滕王阁内的石碑以及苏轼的手书都作“南昌故郡”。</P><P>2.故：以前的。</P>           ',
            img: baseURL + '/image/花儿.jpg', 
            id: 1,
            
        },
        {
            title: '大湾区“文采会”下月将在东莞举办',
            author: '大湾区',

            time: '2021年10月11日',
            content: "<P>2021年全国文采会“东莞站”——2021粤港澳大湾区公共文化和旅游产品(东莞)采购会(下称文采会)新闻发布会昨日在东莞市文化馆举行。会上，主办方宣布东莞将于11月5日至7日在东莞市文化馆举办2021“文采会”，同时，根据文化和旅游部统一部署，本届文采会也将作为2021全国文采会“东莞站”，是全国三大区域文采会之一。</P><P>广东省文化和旅游厅公共服务处处长、本届文采会组委会副主任王惠表示，东莞作为大湾区的重要节点城市和广东省的文化大市，积极围绕粤港澳大湾区共建人文湾区、构筑休闲湾区的建设目标，在2018、2019年举办文采会的基础上，进一步提升规模，增强效应，今年举办2021年粤港澳大湾区文采会，将进一步推动广东文化和旅游产品供给侧改革、丰富大湾区文化旅游产品供给，为加强大湾区公共文化和旅游服务领域交流合作起到积极促进作用。</P><P>东莞市文化广电旅游体育局负责人表示，本届文采会是粤港澳大湾区公共文化和旅游产品资源的一次集中展示推介，也是送给大湾区市民群众的一场文化盛宴。“我们将以办好文采会为抓手，全面融入粤港澳大湾区世界级城市群，进一步增强高质量文化供给，为广大市民提供更高品质、更加多元的公共文化产品和服务。”</P><P>本届文采会将邀请粤港澳大湾区乃至全国同行共同参与。文采会按“文”“旅”“体”分3大类11区。重点企业、重点项目可以给予区域核心位置。参展对象除了粤港澳大湾区的文化、创意、旅游、体育领域的企业、机构、社会组织以外，还计划邀请长三角、京津冀、成渝等区域性文采会主办单位或优质参展商参与。</P><P>在展销采购方面，主办方将广泛邀请各级机关、事业单位、国有企业，以及群团组织，并欢迎有文旅体公共服务需求的社会企业、机构、组织参与采购。同时，提前征集相关政府单位、基层公共文化和旅游服务机构的意见，制定了2022年东莞市公共文旅服务的采购需求清单，让有意向的供应商可以量体裁衣，策划、制作出更多符合采购需求的文化产品，实现供需双方的精准对接。</P><P>文采会期间，主办方还将举行一系列的研学交流活动，如“旗峰山对话”大湾区超级文创IP交流沙龙、2021研学旅游产品交流会、社会力量参与公共文化服务机制创新研讨会等;同时还将发动东莞33个镇街(园区)文化分馆作为文采会的分会场，开展文化惠民周活动，推出公益培训班、公益展演、公益文化体验活动等产品供市民体验。</P>", zhushi: '(1)岳：此指东岳泰山。 (2)岱宗：泰山亦名岱山，在今山东省泰安市城北。古代以泰山为五岳之首，诸山所宗，故又称\”岱宗\”。历代帝王凡举行封禅大典，皆在此山。 (3)齐、鲁：古代齐鲁两国以泰山为界，齐国在泰山北，鲁国在泰山南。青未了，指郁郁苍苍的山色无边无际，浩茫浑涵，难以尽言。 (4)造化：天地，大自然。钟：聚集。神秀：指山色的奇丽。 (5)阴阳：这里指山北山南。割：划分。这句是说，泰山横天蔽日，山南向阳，天色明亮；山北背阴，天色晦暗。同一时刻却是两个世界。 (6)曾：通“层”。 (7)决：张大。眦：眼眶。决眦形容极目远视的样子。入归鸟：目光追随归鸟。 (8)会当：一定要。凌：登上。',
            jieshi: '巍峨的泰山，到底如何雄伟?走出齐鲁，依然可见那青青的峰顶。神奇自然汇聚了千种美景，山南山北分隔出清晨和黄昏。层层白云，荡涤胸中沟壑；翩翩归鸟，飞入赏景眼圈。定要登上泰山顶峰，俯瞰群山，豪情满怀。',
            img: baseURL + '/image/花儿.jpg', 
            id: 2,
           
        }
        ],





})
// news.save()

class NewsController {
    // async getCenter(ctx) {
    //     const data = await PoetryModel.find()
    //     const result = {
    //         code: 200,
    //         data
    //     }

    //     ctx.body = result
    // }

    async getNews(ctx) {
        // const ids = ctx.request.query.id
        // console.log(ctx.request.query.id)
        const data = await NewsModel.find(
            // {"news.id":ids},
            // {"news":{$elemMatch:{"id":ids}}}
            // {id:ids}
        )
        const result = {
            code: 200,
            news: data,
        }
        ctx.body = result
    }

}
module.exports = new NewsController()
