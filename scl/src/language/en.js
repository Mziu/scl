// cn.js
export default {
  m: {
    lan: [ //  标题导航
      {
        text: '',
        icon: 'https://index.cuican520.com/cuican.png',
        path: ''
      },
      {
        text: 'Home',
        icon: '',
        path: 'index'
      },
      {
        text: 'Product',
        icon: '',
        path: 'product'
      },
      {
        text: 'Service',
        icon: '',
        path: 'service'
      },
      {
        text: 'Contact',
        icon: '',
        path: 'contact'
      }
    ],
    currentlan: 'ENGLISH',
    news: 'trends and news', //  标题
    foot: [
      {
        text: 'Chinese partner',
        path: 'friends'
      },
      {
        text: 'Consulting service',
        path: 'consult'
      },
      {
        text: 'Patent technology cooperation',
        path: 'skill'
      },
      {
        text: 'Privacy and data protection',
        path: 'data'
      },
      {
        text: 'Copyright description',
        path: 'copyright'
      }
    ],
    area1: [
      {
        id: 1,
        title: 'Brand story',
        desc: 'Set up a Sino-German bridge and integrate the best resources of Germany to serve the Chinese',
        images: 'https://index.cuican520.com/menu1.png',
        path: 'brand'
      },
      {
        id: 2,
        title: 'Raw-food material',
        desc: 'Add the best of your product with the best ingredients',
        images: 'https://index.cuican520.com/menu2.png',
        path: 'brand'
      },
      {
        id: 3,
        title: 'Derivative service',
        desc: 'Provide quality service with our professionalism',
        images: 'https://index.cuican520.com/menu3.png',
        path: 'brand'
      },
      {
        id: 4,
        title: 'Independent product',
        desc: 'Remove acne without leaving marks, create perfect skin and make you feel good all day.',
        images: 'https://index.cuican520.com/menu4.png',
        path: 'brand'
      }
    ],
    product: { //  产品
      producttype: 'Product Categories',
      productlist: [
        {
          text: 'raw material',
          pid: 1
        },
        {
          text: 'German brand',
          pid: 2
        },
        {
          text: 'own brand',
          pid: 3
        }
      ],
      productshow: 'Product display',
      productshowarray: {
        materiel: [ //  原物料
          {
            id: 1,
            text: '明胶',
            images: 'https://index.cuican520.com/gelatin.png',
            path: 'gelatin',
            children: {
              mod1: {
                title: `Ewald 是一家主要生产吉利丁完全家族企业， 在离法兰克福仅仅100公里的工厂，170名员工全年全天无休生产, 厂里使用最佳可行技术， 生产出高质量的吉利丁出口全国。`,
                list: [
                  {
                    title: `1886年`,
                    desc: `建设生产胶体`
                  },
                  {
                    title: `1906年`,
                    desc: `生产食用吉利丁`
                  },
                  {
                    title: `1946年`,
                    desc: `二战后重建工厂`
                  },
                  {
                    title: `1972年`,
                    desc: `采用猪皮原料生产吉利丁`
                  },
                  {
                    title: `2004年`,
                    desc: `生产有机吉利丁`
                  },
                  {
                    title: `2010年`,
                    desc: `吉利丁细粉生产线`
                  },
                  {
                    title: `2013年`,
                    desc: `实施新原物料厂`
                  }
                ]
              },
              mod2: [ //  主要产品
                {
                  title: `吉利丁片`,
                  img: `https://index.cuican520.com/gelatin_jld1.png`
                },
                {
                  title: `吉利丁粉`,
                  img: `https://index.cuican520.com/gelatin__jld2.png`
                }
              ],
              mod3: [ //  市场份额
                {
                  title: ``,
                  img: `https://index.cuican520.com/gelatin__area1.png`
                },
                {
                  title: ``,
                  img: `https://index.cuican520.com/grlatin__area2.png`
                }
              ],
              mod4: [ //  质量控制
                {
                  title: ``,
                  img: `https://index.cuican520.com/gelatin__zl.png`
                }
              ],
              mod5: [ //  质量证书
                {
                  title: `FSSC 22000`,
                  img: `https://index.cuican520.com/gelatin__zls1.png`
                },
                {
                  title: `DIN-ISO 9001:2008`,
                  img: `https://index.cuican520.com/gelatin__zls2.png`
                },
                {
                  title: `HACCP`,
                  img: `https://index.cuican520.com/gelatin__zls3.png`
                },
                {
                  title: `BIO(organic) certificate`,
                  img: `https://index.cuican520.com/gelatin__zls4.png`
                }
              ],
              mod6: [ //  产品信息
                {
                  title: ``,
                  img: `https://index.cuican520.com/gelatin__rule.png`
                }
              ],
              mod7: [ //  产品包装
                {
                  title: ``,
                  img: `https://index.cuican520.com/gelatin__pag.png`
                },
                {
                  title: ``,
                  img: `https://index.cuican520.com/gelatin__pag2.png`
                }
              ]
            }
          },
          {
            id: 2,
            text: '胶原蛋白',
            images: 'https://index.cuican520.com/pro1.png',
            path: ''
          }
        ],
        gelatin__title: [`公司及其发展`, `公司旗下主要产品`, `市场份额以及国际化市场`, `质量控制`, `质量证书`, `产品信息`, `产品包装`],
        germanybrand: [ //  德国品牌
          {
            id: 0,
            text: '手表',
            images: 'https://index.cuican520.com/brand_watch.png',
            path: 'watch',
            children: [
              {
                id: 1, //  编号
                title: '万宝龙', //  标题
                imglist: ['https://index.cuican520.com/w1.png', 'https://index.cuican520.com/w2.png', 'https://index.cuican520.com/w3.png'], //  图片列表
                showimg: '', //  展示图片
                desc: 'Montblanc International (GmbH) 万宝龙国际是历峰集团旗下位于德国的一家精品钢笔、手表与配件的制造商。以「白色六角星」商标作为识别。于1906年在德国汉堡由一个文具商、一个工程师、和一个银行家共同创立，在1911年采纳万宝龙的商标前该公司以Simplo Filler Pen Company的名字成立。该公司后来由登喜路所有而现时为历峰集团形式上的一部份。' //  描述
              },
              {
                id: 2, //  编号
                title: '萧邦', //  标题
                imglist: ['https://index.cuican520.com/x1.png', 'https://index.cuican520.com/x2.png', 'https://index.cuican520.com/x3.png'], //  图片列表
                showimg: '',
                desc: '萧邦（英文名Chopard），是1860年路易于利斯-萧邦在瑞士创立的高级手表珠宝品牌 。萧邦的产品风格是工艺考究和时尚动感，跨越一百四十多年历史的瑞士珠宝钟表品牌萧邦表，一向结合非凡创意与华贵用料，设计出品味出众与新颖的时计. 2013年肖邦品牌秉承过去丰盛的成果，着力究研多款复杂功能腕表，推出更多元化的创作. 其中这款以创始人的英文缩写而命名的款式，采用了2007年自家研制的机芯，而腕表设计简约，性格十足，充满强烈的线条感。' //  描述
              },
              {
                id: 3, //  编号
                title: '卡地亚', //  标题
                imglist: [
                  'https://index.cuican520.com/k1.png',
                  'https://index.cuican520.com/k2.png',
                  'https://index.cuican520.com/k3.png'], //  图片列表
                showimg: '',
                desc: '卡地亚（Cartier ）是一家法国钟表及珠宝制造商，于1847年由Louis-François Cartier在巴黎Rue Montorgueil 31号创办。现为瑞士历峰集团（Compagnie Financière Richemont SA）下属公司。1874年，其子亚法·卡地亚继承其管理权，由其孙子路易·卡地亚、皮尔·卡地亚与积斯·卡地亚将其发展成世界著名品牌。全世界第一支兼具装饰及功能性的现代腕表，就是由卡地亚所设计。卡地亚在手表的设 计中融入珠宝镶嵌的概念与技巧，使手表呈现出另一种华丽与尊贵。' //  描述
              },
              {
                id: 4, //  编号
                title: '江诗丹顿', //  标题
                imglist: [
                  'https://index.cuican520.com/j1.png',
                  'https://index.cuican520.com/j2.png',
                  'https://index.cuican520.com/j3.png'], //  图片列表
                showimg: '',
                desc: '江诗丹顿（Vacheron Constantin），世界最著名钟表品牌之一，1755年创立于瑞士日内瓦，为世界最古老最早的钟表制造厂，也是世界最著名的表厂之一。江诗丹顿传承了瑞士的传统制表精华，未曾间断，同时也创新了许多制表技术，对制表业有莫大的贡献。江诗丹顿有着两百多年的制表历史，是世界上历史最悠久、延续时间最长的名牌手表，其表盘上的如瑞士国徽般的十字标记，已经是品位、地位和财富的象征。如今，江诗丹顿俨然为“时间”的同义词，更是爱表人士眼中无可取代的腕上艺术品。' //  描述
              },
              {
                id: 5, //  编号
                title: '百达斐丽', //  标题
                imglist: [
                  'https://index.cuican520.com/b1.png',
                  'https://index.cuican520.com/b2.png',
                  'https://index.cuican520.com/b3.png'], //  图片列表
                showimg: '',
                desc: '百达翡丽是一家始于1839年的瑞士著名钟表品牌，世界十大名表之首。是瑞士仅存的真正的独立制表商之一，由头至尾都是自己生产。百达翡丽在设计、生产直至装配的整体过程中享受着全面的创新自由，打造出令世人专家交口称赞的全球钟表杰作，并谨遵品牌创始人百达先生(Antoine Norbert de Patek)和翡丽先生(Jean-Adrien Philippe) 的卓越远见，凭借超凡的专业技能，秉承优质的创新传统，百达翡丽至今拥有超越80余项技术专利。百达翡丽是“手表中的蓝血贵族”。' //  描述
              },
              {
                id: 6, //  编号
                title: 'IWC', //  标题
                imglist: [
                  'https://index.cuican520.com/i1.png',
                  'https://index.cuican520.com/i2.png',
                  'https://index.cuican520.com/i3.png'], //  图片列表
                showimg: '',
                desc: 'IWC万国创立于1868年，排名世界第十一位，仅次于劳力士。其表厂位于瑞士的沙夫豪森，万国潜心钻研制表工艺，其设计与技术在同行业中一直领先，打造出永恒经典的作品。万国非凡的技术与精湛的工艺不仅是沙夫豪森优异、纯正的制表工艺的象征，同时也体现出万国对其宗旨的一贯坚持。万国表兼具精确的技术性能和出色的设计，在世界钟表制造业界具有举足轻重的地位。万国素有“高档钟表工程师”之称，经典的款式加上巧妙的设计，典雅而精致，操作也极其简便。自1868年起，万国所生产的每一只表都记录在手表出厂记录簿中，同时重要备用零件都存放在高高的橱柜里，所以万国的制表师甚至能够彻底大修最古老的表芯。因此，每一只万国表足堪作为未来数代的传家宝。' //  描述
              },
              {
                id: 7, //  编号
                title: '浪琴', //  标题
                imglist: [
                  'https://index.cuican520.com/l1.png',
                  'https://index.cuican520.com/l2.png',
                  'https://index.cuican520.com/l3.png'], //  图片列表
                showimg: '',
                desc: '浪琴(LONGINES)是一个由欧内斯特富兰西林在瑞士的圣艾米尔成立的公司。它的起源可以追述到19世纪30年代，浪琴还拥有最古老的表类注册商标(一个带翅膀的沙漏)。浪琴公司属于瑞士斯沃琪集团。浪琴以它的“飞行家”表而著名，是世界上高档防水名表之一。拥有百余年历史的浪琴表，向来坚持最好的品质的工作哲学，对时间工艺不断地努力创新，浪琴表已然成为精准的代名词了!' //  描述
              },
              {
                id: 8, //  编号
                title: '天梭', //  标题
                imglist: [
                  'https://index.cuican520.com/t1.png',
                  'https://index.cuican520.com/t2.png',
                  'https://index.cuican520.com/t3.png'], //  图片列表
                showimg: '',
                desc: '天梭成立于瑞士汝拉山区的小镇力洛克，而其总部至今仍位于那里。天梭标志中的“+”号是瑞士品质的象征，展现了品牌自1853年以来不懈追求的可靠质量。天梭腕表在超过160个国家销售，它们由特殊材质打造而成品质纯正，价格亲民，配备先进功能，设计一丝不苟。天梭始终坚守着“非凡创意，源于传统” 的品牌精神。天梭的高端品质屡获肯定。品牌曾经担任众多体育赛事的官方指定计时与合作伙伴，包括：篮球领域的美国国家篮球协会（NBA）和国际篮球联合会（FIBA）；自行车领域的环法自行车赛和UCI世界自行车锦标赛；摩托车领域 的世界摩托车锦标赛（MotoGPTM）和国际摩联(FIM)世界超级摩托车锦标赛；以及橄榄球领域的RBS六国橄榄球赛、法国橄榄球TOP14联赛、欧洲橄榄球冠军杯和挑战杯。品牌也是击剑与冰上曲棍球世界锦标赛和美国橄榄球联盟（AFL）的官方指定计时。' //  描述
              },
              {
                id: 9, //  编号
                title: '积家', //  标题
                imglist: [
                  'https://index.cuican520.com/jj1.png',
                  'https://index.cuican520.com/jj2.png',
                  'https://index.cuican520.com/jj3.png'], //  图片列表
                showimg: '',
                desc: '积家（Jaeger-LeCoultre）是一家位于瑞士勒桑捷（Le Sentier）的高级钟表制造商。自1833年成立于瑞士汝拉山谷（Vallée de Joux）以来，便成为制表历史上举足轻重的钟表品牌。作为顶级制表行业的先驱，积家不仅将精确计时技术和精湛艺术天赋进行糅合统一，对整个制表业的发展也做出了卓越的贡献。作为精品名表的代言人，积家钟表共有40个专职分工和20项尖端科技，兼顾每一个生产细节，遵循精湛传统制表工艺的同时不断追求技术创新，对制造的每一枚钟表都倾注了高度的热情，研制出卓越出众的腕表。时至今日，积家不断超越自我连创佳绩，共计发明了一千两百多枚机芯，获享398项注册专利，从世界上最小巧的款式到多功能复杂腕表，还有超薄手表及Atmos恒动空气钟，每一款杰作，都传承了积家178年之久的制表工艺，堪称高级制表业界中的典范。' //  描述
              },
              {
                id: 10, //  编号
                title: '伯爵', //  标题
                imglist: [
                  'https://index.cuican520.com/bj1.png',
                  'https://index.cuican520.com/bj2.png',
                  'https://index.cuican520.com/bj3.png'], //  图片列表
                showimg: '',
                desc: '1874年，PIAGET伯爵由年仅19岁的乔治·爱德华·伯爵（Georges Edouard Piaget）创立，至今PIAGET伯爵仍以其为名承袭并开创伯爵的创作历史。从1874年诞生以来，伯爵一直秉承“永远做得比要求的更好”的品牌精神，将精湛工艺与无限创意融入每一件作品中，同时优先发展创意和对细节的追求，将腕表与珠宝的工艺完全融合在一起。创立伊始，伯爵专注于腕表机芯的设计和生产' //  描述
              }
            ]
          },
          {
            id: 1,
            text: '珠宝',
            images: 'https://index.cuican520.com/brand_2.png',
            path: 'watch',
            children: [
              {
                id: 1, //  编号
                title: '卡地亚', //  标题
                imglist: [
                  'https://index.cuican520.com/zbk1.png',
                  'https://index.cuican520.com/zbk2.png',
                  'https://index.cuican520.com/zbk3.png'], //  图片列表
                showimg: '',
                desc: `卡地亚（Cartier ）是一家法国钟表及珠宝制造商，于1847年由Louis-François Cartier在巴黎Rue Montorgueil 31号创办。如今Cartier设计，无论是高端珠宝或当代珠宝产品线，例如Caresser d'Orchidées par Cartier collection，均在独特技术诀窍、风格及专业技术的基础上诠释了Maison的价值观。Cartier华丽古典的造型使他的项链、手链、腕表、戒指、耳环大受上流人士的欢迎。除 了经典的三环设计外，大自然里的动物如大象、鸟也是Cartier珠宝中经常出现的主题。卡地亚不但是上流社会的表征，也是见证永恒爱情的经典品牌。不论是具有一定地位的人士，或是年轻的情侣们，卡地亚始终传递着无法抗拒的爱情魔力。时代特色结合传统工艺 神韵是卡地亚高级珠宝系列一直追求的最高境界。在流畅的线条、明澄的色彩中，卡地亚演绎着美的真谛——美在于简单而不在于繁复、在于和谐而不在于冲突` //  描述
              },
              {
                id: 2, //  编号
                title: `伯爵`, //  标题
                imglist: [
                  'https://index.cuican520.com/zbbj1.png',
                  'https://index.cuican520.com/zbbj2.png',
                  'https://index.cuican520.com/zbbj3.png'], //  图片列表
                showimg: '',
                desc: '1874年，PIAGET伯爵由年仅19岁的乔治·爱德华·伯爵（Georges Edouard Piaget）创立，至今PIAGET伯爵仍以其为名承袭并开创伯爵的创作历史。从1874年诞生以来，伯爵一直秉承“永远做得比要求的更好”的品牌精神，将精湛工艺与无限创意融入每一件作品中，同时优先发展创意和对细节的追求，将腕表与珠宝的工艺完全融合在一起。对伯爵而言，创意与珍贵金属同等重要。品牌不断在其设计工作室推陈出新，从而巩固非凡钟表及珠宝商的地位。在那里，伯爵设计师发挥自由创意与大胆精神，全新诠释品牌标志性元素。' //  描述
              },
              {
                id: 3, //  编号
                title: '萧邦', //  标题
                imglist: [
                  'https://index.cuican520.com/zbx1.png',
                  'https://index.cuican520.com/zbx2.png',
                  'https://index.cuican520.com/zbx3.png'], //  图片列表
                showimg: '',
                desc: '萧邦（英文名Chopard），是1860年路易于利斯-萧邦在瑞士创立的高级手表珠宝品牌 。萧邦的产品风格是工艺考究和时尚动感，跨越一百四十多年历史的瑞士珠宝钟表品牌萧邦表，一向结合非凡创意与华贵用料，设计出品味出众与新颖的时计. 2013年肖邦品牌秉承过去丰盛的成果，着力究研多款复杂功能腕表，推出更多元化的创作. 其中这款以创始人的英文缩写而命名的款式，采用了2007年自家研制的机芯，而腕表设计简约，性格十足，充满强烈的线条感。' //  描述
              }
            ]
          },
          {
            id: 2,
            text: '日用品',
            images: 'https://index.cuican520.com/brand_3.png',
            path: 'watch',
            children: [
              {
                id: 1, //  编号
                title: '贺本清', //  标题
                imglist: [
                  'https://index.cuican520.com/rhbq1.png',
                  'https://index.cuican520.com/rhbq2.png',
                  'https://index.cuican520.com/rhbq3.png'], //  图片列表
                showimg: '',
                desc: `贺本清德国小甘菊Herbacin的产品原料，都是选择高品质的植物萃取，再以严密的德国制造流程，生产优质的手部护理、龟裂肌肤护理、脸部护理、植物护发、沐浴身体护理产品。采用德国洋甘菊萃取精华，为肌肤和头发提供即时的绝妙护理效果。贺本清德国小甘菊产品皆经过德国皮肤科医学成分测试，且都在德国研发制造。符合严苛的德国生产标准与效果证实。被香港杂志评为100个最值得拥有的化妆品之一曾获香港yahoo网站的产品测试高达五颗星的最高评分清香、滋润度高,使用后清爽不油腻更是成为日本杂志常见的座上客！！` //  描述
              },
              {
                id: 2, //  编号
                title: '博朗', //  标题
                imglist: [
                  'https://index.cuican520.com/rbl1.png',
                  'https://index.cuican520.com/rbl2.png',
                  'https://index.cuican520.com/rbl3.png'], //  图片列表
                showimg: '',
                desc: `德国博朗的产品分为六大类：电动剃须刀，女用剃毛器，美发产品，厨房小家电，蒸汽电熨斗，一秒体温计。德国博朗所追寻的目标一向是明确，简单与平衡的线条。
                德国博朗的宗旨延伸至今成为独一无二的Braun Design德国博朗设计哲学： 创新，品质，实用，美观，简洁，细节，经典，环保 。
                几十年间，德国博朗凭借其对于品质近乎苛刻的执着追求、对每一个细节的关注、天才的创意和人性化的设计，成为拥有10大类200多种产品的全球家电巨头。` //  描述
              },
              {
                id: 3, //  编号
                title: '芭乐雅', //  标题
                imglist: [
                  'https://index.cuican520.com/rbly1.png',
                  'https://index.cuican520.com/rbly2.png',
                  'https://index.cuican520.com/rbly3.png'], //  图片列表
                showimg: '',
                desc: `1973年成立于德国的卡尔斯鲁厄（Karlsruhe），目前在德国已拥有869家连锁市场，在欧洲其他国家拥有851家连锁市场。德国dm连锁商店在德国每个城市真的是无处不在。` //  描述
              },
              {
                id: 4, //  编号
                title: '德国世家 ', //  标题
                imglist: [
                  'https://index.cuican520.com/rdgsj1.png',
                  'https://index.cuican520.com/rdgsj2.png',
                  'https://index.cuican520.com/rdgsj3.png'], //  图片列表
                showimg: '',
                desc: `起源於西元1929年，Dr.Hauschka有对于肌肤应该采取更加基本与尊重的方式，将每一个使用在肌肤上面素材的环节认真且花大量的时间处理，并且推出一系列具有整体性的产品，也就是您目前所看见的商品，至今配方不变，口碑也一如推出的时候般好评不减。
                如今德国世家在整个欧洲来说一直稳站龙头地位，不仅在OKO的评鉴中维持了「BEST BUY」的评鉴，同时各大健康的杂志也不约而同提到这个打从培养植物就已经开始「与众不同」的品牌。在有机评价里，德国世家也是前三名的常客。商品里面，最知名的律动甘露几乎屡屡缺货，由于本身制造的速度固定，无法无限量供应，常常需要等待。` //  描述
              },
              {
                id: 5, //  编号
                title: '曼哈顿', //  标题
                imglist: [
                  'https://index.cuican520.com/rmhd1.png',
                  'https://index.cuican520.com/rmhd2.png',
                  ''], //  图片列表
                showimg: 'https://index.cuican520.com/rmhd1.png',
                showimg2: 'https://index.cuican520.com/rmhd2.png',
                desc: `“MANHATTAN彩妆由德国Dr.Scheller化妆品公司出品。公司本部位于德国最发达的地区—慕尼黑/斯图加特，已经有60年的历史。MANHATTAN系列彩妆分唇部,眼部,甲油类,脸部粉妆类及配件五大类，非常完整地提供所有彩妆系列产品。` //  描述
              },
              {
                id: 6, //  编号
                title: '泰瑞美', //  标题
                imglist: [
                  'https://index.cuican520.com/rtrm1.png',
                  'https://index.cuican520.com/rtrm2.png',
                  'https://index.cuican520.com/rtrm3.png'], //  图片列表
                showimg: 'https://index.cuican520.com/rtrm1.png',
                desc: `德国汉高拥有近140年的历史，业务遍及欧洲、北美洲、亚太区和拉丁美洲，在近75个国家生产经营1万余种民用和工业用产品。泰瑞美是汉高旗下著名口腔护理品牌，汉高旗下众多品牌处于市场领先定位并享有美誉，比如宝莹、施华蔻、乐泰等。` //  描述
              },
              {
                id: 7, //  编号
                title: '碧欧图灵', //  标题
                imglist: [
                  'https://index.cuican520.com/rbotl1.png',
                  'https://index.cuican520.com/rbotl2.png',
                  'https://index.cuican520.com/rbotl3.png'], //  图片列表
                showimg: '',
                desc: `她，自2014年上市以来，就迅速成为当下欧美名媛名流的护肤新宠，全球知名媒体争相报道；她，连一直以时尚著称的法国香榭丽舍大道都能席卷，获得无数时尚人士的点赞。
                她，就是Biotulin 碧欧图灵天然除皱补水霜，是英国凯特王妃、美国第一夫人米歇尔、西班牙王后、卡尔拉格斐&香奈儿首席设计师、麦当娜、莱昂纳多等众多知名人物一直称赞的一款产品。
                Biotulin 碧欧图灵天然除皱补水霜第一次让世人震惊，是英国凯特王妃在2015年产下夏洛特小公主几个小时候后便于媒体见面，之后一周内欧洲媒体都在质疑凯特王妃诞下小公主的真实性。而质疑的缘由则是因为大众认为正常人不可能在产后短短几个小时就能恢复到如此好的气色与肤质。对此，凯特王妃的护理团队通过官方发言透露，那是因为凯特王妃一直在使用Biotulin 碧欧图灵天然除皱补水霜。
                究竟这款补水霜有什么神奇之处？能让凯特王妃如此青睐，并有如此强大的功效了？Biotulin 碧欧图灵1小时神奇效果立现，除皱和消眼袋功能即时体验；24小时高效持续抗皱保湿，让肌肤整体水润滑弹；30天皮肤得到本质改善，逆龄效果惊喜呈现。这就是Biotulin 碧欧图灵如此备受青睐的原因。
                Biotulin 碧欧图灵的出现，让人们彻底告别了注射肉毒杆菌素，其由千日菊酰胺、白茅、透明质酸和金纽扣制成，通过天然成分消除皮下多余的肌肉，从而达到去除皱纹的目的。此外，她具备的天然保湿因子能完美巩固皮肤锁水功能，确保肌肤24小时水嫩光滑，让肌肤年轻光彩永驻。`
              },
              {
                id: 8, //  编号
                title: '雪本诗', //  标题
                imglist: [
                  'https://index.cuican520.com/rxbs1.png',
                  'https://index.cuican520.com/rxbs2.png',
                  'https://index.cuican520.com/rxbs3.png'], //  图片列表
                showimg: '',
                desc: 'Haus Schaebens是一家具有悠久历史传统的中型家庭企业。公司总部位于科隆附近的Frechen.。公司具有献身精神和干劲十足的员工，积极的、合作的团队精神，致力于客户的满意的经营理念。公司经营化妆品、药品、保健领域的特殊产品，C＆C和消费市场以及SB大卖场多种销售渠道。 专业和高效的经营理念，使产品范围不断扩大和改进。对于未来的灵活性和创新性，使得Haus Schaebens取得了高销量的增长。发展远远超过行业平均水平。Haus Schaebens的产品致力于你的健康和美丽，并改善你的生活质量。' //  描述
              }
            ]
          },
          {
            id: 3,
            text: '保健功能品',
            images: 'https://index.cuican520.com/brand_4.png',
            path: 'watch',
            children: [
              {
                id: 1, //  编号
                title: '双心', //  标题
                imglist: [
                  'https://index.cuican520.com/bsx1.png',
                  'https://index.cuican520.com/bsx2.png',
                  ''], //  图片列表
                showimg: '',
                desc: `双心,Doppelherz：由两颗心组成，是德国著名保健品品牌，服务理念是“将顾客的健康放在我们心中”，致力于从纯天然原材料中开发和研制高品质保健产品，深受德国及欧洲地区消费者信赖。德国拥有世界上最严格的药检标准和最规范的医药品市场。产品以品质纯正、药效显著闻名世界，药检过程比宽松的美国、加拿大等国保健品严格得多。
                1919年，德国化学家Josef Peter Hennes从草药和其他天然植物中提取了有效成分，制成双心至今闻名的草本能量调理液（用于心脏功能调理），"双心”的名称也由此而得。
                发展至今，"双心"俨然已经成为保健品市场的先导者。它的产品不再局限于心脏保健，更延伸到人们需要的各个领域。
                德国Doppelherz出品的所有产品，都是高疗效的保健药品或天然保健品，不含副作用的化学成分。目前国内有相当部分的高端消费人群对其也有很高的认可度。发展至今，"双心"俨然已经成为保健品市场的先导者。` //  描述
              },
              {
                id: 2, //  编号
                title: '沐舒坦', //  标题
                imglist: [
                  'https://index.cuican520.com/bmst1.png',
                  'https://index.cuican520.com/bmst2.png',
                  ''], //  图片列表
                showimg: '',
                desc: `沐舒坦（盐酸氨溴索口服溶液/片/缓释胶囊），非处方药，适用于痰液粘稠而不易咳出者。拥有三种剂型，包括口服溶液/片剂和缓释胶囊，适合不同人群。
                沐舒坦的活性成分是“盐酸氨溴索”简称“氨溴索”，此类药物的前身溴己新是从鸭嘴花碱中提取的。鸭嘴花碱来自一种亚洲植物，被证明在祛痰方面非常有效，能疏松和稀化在呼吸道内堆积的痰液，防止新的粘液产生，从而提高呼吸道的清洁功能。更具体讲，它能增加呼吸道粘膜浆液腺的分泌，减少粘液腺分泌，从而降低痰液粘度，促进肺泡表面活性物质的分泌，增加支气管纤毛运动，使痰液易于咳出，达到缓解咳嗽症状的疗效。
                沐舒坦作为祛痰药受到《儿童呼吸安全用药专家共识_感冒和退热用药》《普通感冒规范诊治的专家共识》以及《咳嗽的诊断与治疗指南》推荐。` //  描述
              },
              {
                id: 3, //  编号
                title: '拜耳', //  标题
                imglist: [
                  'https://index.cuican520.com/bbe1.png',
                  'https://index.cuican520.com/bbe2.png',
                  'https://index.cuican520.com/bbe3.png'], //  图片列表
                showimg: '',
                desc: `拜耳公司是世界最为知名的世界500强企业之一。公司的总部位于德国的勒沃库森，在六大洲的200个地点建有750家生产厂；拥有120,000名员工及350家分支机构，几乎遍布世界各国。高分子、医药保健、化工以及农业是公司的四大支柱产业。公司的产品种类超过10，000种，是德国最大的产业集团。该公司生产的阿司匹林，被人们称为“世纪之药”，也创造出了“魔鬼的杰作”，就是海洛因。` //  描述
              }
            ]
          },
          {
            id: 4,
            text: '箱包',
            images: 'https://index.cuican520.com/brand_5.png',
            path: 'watch',
            children: [
              {
                id: 1, //  编号
                title: '日默瓦', //  标题
                imglist: [
                  'https://index.cuican520.com/xrmg1.png',
                  'https://index.cuican520.com/xrmg2.png',
                  'https://index.cuican520.com/xrmg3.png'], //  图片列表
                showimg: 'https://index.cuican520.com/xrmg1.png',
                desc: `在全世界众多旅行箱品牌中，日默瓦 (Rimova) 以其一贯坚持采用铝镁合金材质制作产品而独树一帜，以至于日默瓦 (Rimova) 已成为铝制旅行箱的代名词，也正是这份“德国式”的固执与坚持，成就了 日默瓦 (Rimova) 辉煌的传奇。迄今为止， 日默瓦 (Rimova) 已在数不清的好莱坞大片中出现，甚至吸引了保时捷和德国汉莎航空的关注，邀请 日默瓦 (Rimova) 为它们进行专属设计。 
                这个附有沟槽设计、历史绵延一个多世纪的德国品牌，理所当然地成为了成功人士的必要装备， 日默瓦 (Rimova) 也因之而被看作为“时尚＋实用”的代名词。
                更值得一提的是，所有 日默瓦 (Rimova) 铝镁合金行李箱至今依然保持着手工打造的传统，并且为了保证质量， 日默瓦 (Rimova) 产品只在欧洲境内制造，而无一家海外分厂——不得不说，相较于当今工业化产业的迅猛发展，如此重“质”而轻“量”的做法实在难能可贵。` //  描述
              },
              {
                id: 2, //  编号
                title: 'TUMI', //  标题
                imglist: [
                  'https://index.cuican520.com/xtumi1.png',
                  'https://index.cuican520.com/xtumi2.png',
                  'https://index.cuican520.com/xtumi3.png'], //  图片列表
                showimg: '',
                desc: `TUMI是于1975年在美国兴起的品牌。主要产品以旅行包，商务包为主，该品牌的尼龙材料制作的包十分耐磨，其寿命远远长于其他品牌，达到了军用标准，是其他同类产品所望尘莫及的，从而也确立了Tumi 在市场的领先地位。
                一直致力于打造高品质商务和旅行配件的TUMI推出了许多款式各异的背包，用心的产品设计、持续的技术创新、卓越的原料品质以及精湛的制造工艺，所有这一切缔造了TUMI非凡的产品。TUMI背包好不好，看细节就能知道。小到定型实心钢机螺钉到TUMI特别的防磨损FXTTM弹道尼龙材料，都是TUMI所坚守的精益求精的理念。` //  描述
              },
              {
                id: 3, //  编号
                title: '新秀丽', //  标题
                imglist: [
                  'https://index.cuican520.com/xxxl1.png',
                  'https://index.cuican520.com/xxxl2.png',
                  'https://index.cuican520.com/xxxl3.png'], //  图片列表
                showimg: '',
                desc: 'Samsonite（新秀丽）品牌1910年始创于美国，迄今已有一百多年历史。当时，杰西.施瓦德先生希望为新款旅行箱起一个别名，能够象征商品坚固、耐用的特性。施瓦德先生在喜爱的英雄人物中，选择了《圣经》中的大力士参孙(Samson)来象征商品特点。公司奉行“待人如己”的经营理念时刻以顾客的满意作为自己追求的目标。秉承“以人为本”的设计理念，严格质量检测，使其产品成为艺术与科技完美结合的典范。作为旅行用品领域的行家，它以世界带头人和创新者的形象，不断创造出别具匠心、经久耐用、时尚舒适的箱包产品。' //  描述
              }
            ]
          },
          {
            id: 5,
            text: '厨具',
            images: 'https://index.cuican520.com/brand_6.png',
            path: 'watch',
            children: [
              {
                id: 1, //  编号
                title: '双立人 ', //  标题
                imglist: [
                  '',
                  '',
                  ''], //  图片列表
                showimg: 'https://index.cuican520.com/cslr1.png',
                showimg2: 'https://index.cuican520.com/cslr2.png',
                desc: `双立人（ZWILLING）成立于公元1731年6月13日，时值西历双子星座，于是双立人的“两个人”标志在德国莱茵河畔的小镇索林根诞生。由于当时还没有商标局，双立人标志在当地一间教堂内公告。这是人类历史上最古老的商标之一，也是一种稀有品质与不朽传奇的化身，它拥有谜一般的钢材配方，独步天下的-200摄氏度冰锻工艺，是一种极至生活品质与尽善尽美精神的经典象征。
                德国锅具具有天然抗菌和耐高温性质，既能节能环保，导热效果又极佳，以至人们说，“使用这种德国锅具，一根蜡烛就能弄一顿美味佳肴”。德国人生产的一口锅，可以用上100年，因此很多德国人用的都是奶奶传下来的锅。对德国人来说，任何一样厨具，一辈子只需要买一次，不需要买第二次，因为你一辈子也用不坏它。德国人生产的煨汤用的锅，完全是钢铁铸造的，沉重得连男人都有点端不动，那锅盖内侧有奇特的花纹，曾经有人问过厂家：“搞这些花纹干嘛？”他说：“它盖上去后，水蒸气就能上下自然循环，不易烧干，这是一种技术。”德国的锅具，盖上去个个严丝合缝，说三分钟开锅就三分钟开锅，这能为你省下不少煤气费。` //  描述
              },
              {
                id: 2, //  编号
                title: 'WMF', //  标题
                imglist: [
                  'https://index.cuican520.com/cwmf1.png',
                  'https://index.cuican520.com/cwmf2.png',
                  'https://index.cuican520.com/cwmf3.png'], //  图片列表
                showimg: '',
                desc: `1880年，以销售为导向的公司Straub，与一家技术上更为领先的对手Ritter合并。公司被命名为：Wurttembergische Metallwaren Fabrik AG 简称WMF。
                新艺术运动带来了产品设计艺术的现代化构想，从1895年起，WMF就将曲线及不对称造型等艺术应用于产品设计中，实现了传统与现代艺术的结合。
                如今，WMF在德国各城市以及欧洲主要国家瑞士、奥地利和法国的黄金地段等地拥有190多家子公司，在美国、日本和中国均成立了销售子公司，产品远销90多个国家。` //  描述
              },
              {
                id: 3, //  编号
                title: '菲仕乐', //  标题
                imglist: [
                  'https://index.cuican520.com/cfsl1.png',
                  'https://index.cuican520.com/cfsl2.png',
                  'https://index.cuican520.com/cfsl3.png'], //  图片列表
                showimg: '',
                desc: `德国菲仕乐所有产品均通过欧洲认证标准。产品卓越的品质和简洁雅致的设计，让菲仕乐在全球拥有众多的爱用者及收藏者。
                德国菲仕乐是世界上现存的，最古老的锅具品牌之一。菲仕乐的历史，就是世界厨具发展的编年史，几乎关于厨具点点滴滴的历史进步，都离不开菲仕乐的发明与技术革新。` //  描述
              },
              {
                id: 4, //  编号
                title: '碧然德 ', //  标题
                imglist: [
                  'https://index.cuican520.com/cbrd1.png',
                  'https://index.cuican520.com/cbrd2.png',
                  'https://index.cuican520.com/cbrd3.png'], //  图片列表
                showimg: 'https://index.cuican520.com/cbrd1.png',
                desc: `来自德国的滤水专家碧然德，改善自来水质，有效减少氯气，水垢和重金属。始于1966年的碧然德，畅销全球60多个国家，材质安全，欧洲权威机构食品级品质认证!
                公司愿景：我们将改变人们饮水的方式，并保证持续性发展！` //  描述
              }
            ]
          },
          {
            id: 6,
            text: '母婴',
            images: 'https://index.cuican520.com/brand_7.png',
            path: 'watch',
            children: [
              {
                id: 1, //  编号
                title: '贝娜婷', //  标题
                imglist: [
                  'https://index.cuican520.com/mbnt1.png',
                  'https://index.cuican520.com/mbnt2.png',
                  'https://index.cuican520.com/mbnt3.png'], //  图片列表
                showimg: '',
                desc: `德国婴儿护肤品牌三大巨头之一 -- Penaten贝娜婷
                PENATEN贝娜婷公司1904年，MaxRiese发明了这种对于护理婴儿娇嫩皮肤的贝娜婷护理霜(PenatenCreme)，并于同年的9月14日在柏林注册了他的发明。同时在德国波恩这座城市附近的Rhoendorf成立的Penaten公司。
                1929年的统计，共计销售了436,000个贝娜婷护理霜（PenatenCreme），证明了这种产品的成功。到了10年之后的1939年，销售量达到了令人惊讶的6,019,000个。
                二战期间，Riese继承人把Penaten的生产线分别置于不同的地点，并在战后的1945年重新开始生产护理霜，同时重建企业。
                1951年开始，Penaten公司在保证经典产品－护理霜的同时，开始把多样性的婴儿油，护肤香皂爽身粉等产品推向市场，并获得成功，形成了自己的婴儿护理产品系列。` //  描述
              },
              {
                id: 2, //  编号
                title: '维蕾德 ', //  标题
                imglist: [
                  'https://index.cuican520.com/mwld1.png',
                  'https://index.cuican520.com/mwld2.png',
                  'https://index.cuican520.com/mwld3.png'], //  图片列表
                showimg: 'https://index.cuican520.com/mwld1.png',
                desc: `婴儿护肤三巨头之一
                总部在德国南部的WELEDA是人智学创始人，医学博士Rudolf Steiner (1861-1925澳大利亚人)。在瑞士1921年所创办的品牌，是一个在世界上超过40个国家，致力于人类健康的获得和巩固强化为宗旨的的企业。从一开始，它就将人与自然和谐统一作为企业最核心的精神，维蕾德Weleda的发展、生产和运做在于医药品，营养补给品和身体保养品方面。多年来，WELEDA和大学以及国家级研究机构长期紧密合作，拥有自己的实验室和欧洲最大的保养品用花草种植园，充分保证了货源的纯净和充足，并于2004入选为德国最佳企业之一。` //  描述
              },
              {
                id: 3, //  编号
                title: '爱他美', //  标题
                imglist: [
                  'https://index.cuican520.com/matm1.png',
                  'https://index.cuican520.com/matm2.png',
                  'https://index.cuican520.com/matm3.png'], //  图片列表
                showimg: '',
                desc: `德国领先的高端奶粉品牌，是德国市场份额第一的奶粉，也是欧洲销量最好的奶粉之一。
                爱他美奶粉产自德国，是德国美乐宝（Milupa）集团旗下品牌，后美乐宝被达能集团收购。2007年，达能再收购Royal Numico（纽迪希亚持有人），将旗下的婴幼儿营养及医学营养进行了内部合并。爱他美与诺优能、可瑞康三个奶粉品牌均属于纽迪希亚旗下。` //  描述
              },
              {
                id: 4, //  编号
                title: '喜宝', //  标题
                imglist: [
                  'https://index.cuican520.com/mxb1.png',
                  'https://index.cuican520.com/mxb2.png',
                  ''], //  图片列表
                showimg: '',
                desc: `德国的喜宝品牌自1899年由JOSEF HIPP先生创建，至今已有110年的历史了。涉及母婴的食品、用品、玩具等许多领域。早在1956年，喜宝品牌的经营者就成为了全球天然生物食品的先锋，该奶粉不含面筋蛋白（Gluten Free.It Gesetz）。他们开始尝试在不含化学肥料的农庄的土地上种植水果和蔬菜，放养乳牛。喜宝拥有自己的优质天然农。所有的产品都经过德国专家严格的品质检控。不同于一般市售产品为了满足消费者在口味上的喜好及错误的以为营养素越多对宝宝越好的迷思，添加人工香料及化学营养素，反而造成宝宝的肾脏及肠胃道的负担。` //  描述
              }
            ]
          },
          {
            id: 7,
            text: '文具',
            images: 'https://index.cuican520.com/brand_8.png',
            path: 'watch',
            children: [
              {
                id: 1, //  编号
                title: 'LAMY', //  标题
                imglist: [
                  'https://index.cuican520.com/wLAMY1.png',
                  'https://index.cuican520.com/wLAMY2.png',
                  'https://index.cuican520.com/wLAMY3.png'], //  图片列表
                showimg: '',
                hasstyle: `position: absolute;
                width: 272px;
                height: 272px;
                right: 0;`,
                desc: `LAMY由 C. Joseph 於1930年在海德堡创立，是一家由家族承继的独立企业公司。LAMY的品牌自1952年起已屹立至今，创业的第一年已推出脱颖之作LAMY 27墨水笔系列，充分显现公司的创新敏锐触觉。
                LAMY每年生产超过6百万件书写工具，营业额每年超出5千万欧罗，今天的LAMY不单是德国书写工具市场的巨人，也是名噪国际的优秀德国设计品牌。
                LAMY也十分重视可持续生产，坚持在德国内完成每个工序。LAMY的产品成功树立了「德国制造」优质标志的典范 — 除LAMY外，有谁配得起此等美誉？ 
                LAMY标志着品质、创意与时尚的设计，秉持LAMY品牌的一贯承诺：至尊设计无懈，书写完美境界。 
                LAMY书写工具拥有非凡的魅力，全赖其卓越技术与时尚品味。 
                在LAMY的广告中，公司拥有人诉说出LAMY对他们各自的意义。他们并非泛泛之辈，而是LAMY的中心灵魂，反映着LAMY所坚持的理念。他们都是独立的时代男女，都有自己的一个传奇故事。` //  描述
              }
            ]
          }
        ],
        mybrand: [ //  自主品牌
          {
            id: 5,
            text: '胶原蛋白',
            images: 'https://index.cuican520.com/pro5.png',
            path: ''
          },
          {
            id: 6,
            text: '胶原蛋白',
            images: 'https://index.cuican520.com/pro6.png',
            path: ''
          }
        ]
      },
      productshowlist: [
        {
          id: 1,
          text: 'Collagen',
          images: 'https://index.cuican520.com/pro1.png',
          path: ''
        },
        {
          id: 2,
          text: 'Collagen',
          images: 'https://index.cuican520.com/pro2.png',
          path: ''
        },
        {
          id: 3,
          text: 'Collagen',
          images: 'https://index.cuican520.com/pro3.png',
          path: ''
        },
        {
          id: 4,
          text: 'Collagen',
          images: 'https://index.cuican520.com/pro4.png',
          path: ''
        },
        {
          id: 5,
          text: 'Collagen',
          images: 'https://index.cuican520.com/pro5.png',
          path: ''
        },
        {
          id: 6,
          text: 'Collagen',
          images: 'https://index.cuican520.com/pro6.png',
          path: ''
        },
        {
          id: 7,
          text: '胶Collagen',
          images: 'https://index.cuican520.com/pro7.png',
          path: ''
        },
        {
          id: 8,
          text: 'Collagen',
          images: 'https://index.cuican520.com/pro8.png',
          path: ''
        }
      ]
    },
    service: { //  服务
      title: 'Professional customized service',
      more: `更多详情`, //  new add
      servicelist: [
        {
          id: 1,
          text: 'medical service',
          desc: 'Open the German anti-aging journey',
          path: 'medical'
        },
        {
          id: 2,
          text: 'consultation service',
          desc: 'One-stop solution for overseas investment immigration',
          path: 'consult'
        },
        {
          id: 3,
          text: 'Patent technology cooperation',
          desc: 'Overseas technical cooperation',
          desc2: 'Overseas (Germany) patents introduced into China',
          path: 'skill'
        }
      ]
    },
    contact: { //  联系我们
      title: 'Contact us',
      contacttype: [
        {
          title: 'phone',
          content: '021-10011001'
        },
        {
          title: 'mailbox',
          content: '0011001@126.com'
        },
        {
          title: 'Fax',
          content: '021-10011001'
        },
        {
          title: 'address',
          content: 'No. 99 Danba Road, B3 1502'
        }
      ]
    },
    friends: { //  中国合作伙伴
      title: 'Chinese partners',
      friendslist: [
        {
          name: 'SHANGHAI JILANG INDUSTRY CO.,LTD'
        },
        {
          name: 'CFC'
        }
      ]
    },
    consult: { //  咨询服务
      consult_title_list: [
        {
          id: 1,
          text: 'Current status of immigration'
        },
        {
          id: 2,
          text: 'Why do we choose Germany'
        },
        {
          id: 3,
          text: 'Investment Project - Schloss Neuschwanstein, Germany'
        },
        {
          id: 4,
          text: 'Our process'
        },
        {
          id: 5,
          text: 'Strength display'
        },
        {
          id: 6,
          text: 'Our advantage'
        }
      ],
      immigrantproduce1: 'The most reliable result of immigration is getting a green card.',
      immigrantproduce2: 'German immigrants are divided into skilled immigrants and investment immigrants. The least expensive, simplest, safest and highest success rate of immigration is',
      immigrantproduce3: 'Investment immigration',
      immigrantproduce4: '.Article 21 of the German Alien Residence Act stipulates that the nature of investment in entrepreneurial immigrants, that is, the applicant must start and operate a company, achieve self-employment for 5 years, and meet the business conditions expected by the local government, then apply.',
      immigrantproduce5: 'German permanent residency',
      immigrantproduce6: '(commonly known as the green card).Hold a long-term residence permit in Germany for 5 years, ensure a safe life, pay 60 months of social insurance premiums, have economic activity (work) permission, have a certain understanding of German, have a legal and social order, and live in Germany. Have a basic understanding, and family have enough living space. For applicants who choose a corporate visa, Article 21 of the German Immigration Act, a self-employed person (business owner or freelancer) who meets the following three points may be granted a residence permit and may be permanently transferred after holding the residence permit for 3 years. Residence: 1. Meet the special needs of the upper economic interests or regional; 2. The company‘s business is expected to have a positive impact on the economy; 3. It can guarantee the funds required by the company through its own capital or loans.',
      whycheckGermany1: `Investment immigration, three reasons to choose Europe's strongest economy over Germany: cultural and political stability, strict compliance with laws and order, high welfare security, a family to Germany, will enjoy quality education resources, a sound medical system, high-quality life In addition, Germany is also an investment land. Germany has a stable profit margin for investors with its good trade order. Germany includes family reunion category, accounting for 32% of the total quota; and skilled immigrant category, accounting for 68% of the entire quota; 38% are employer sponsorship categories; 34% are independent skilled immigrant categories; 22% are state government guarantee categories; 6% are business immigration categories, and additional technology, technology, and manufacturing bases can be integrated into the most effective resources.`,
      whycheckGermany2: `Germany belongs to the Schengen country. It has obtained German visas and green cards. It is unimpeded in other EU countries. After obtaining the German green card, it is basically no problem to apply for visas from other countries.`,
      newcastle: `德语：Schloss Neuschwanstein，全名新天鹅石城堡，是19世纪晚期的建筑，位于德国巴伐利亚西南方，邻近年代较早的高天鹅堡（Schloss Hohenschwangau，旧天鹅堡），距离菲森镇（Fussen）约4公里，离德国与奥地利边界不远。新天鹅城堡是德国的象征， 由于是迪斯尼城堡的原型，也有人叫白雪公主城堡。建于1869年。这座城堡是巴伐利亚国王路德维希二世的行宫之一。共有360个房间，其中只有14个房间依照设计完工，其他的346个房间则因为国王在1886年逝世而未完成。是德国境内受拍照最多的建筑物，也是最受欢迎的旅游景点之一。新天鹅堡平均每年来游览的人数大约为130万人次，其中华人占70%以上，有强大的购物潜力。`, //  new add
      newcastleimglist: [
        {
          desc: 'Bavaria, Germany must go to the sights',
          img: 'https://index.cuican520.com/cg1.png'
        },
        {
          desc: 'Winter Romance City Ice Snow City',
          img: 'https://index.cuican520.com/cg2.png'
        },
        {
          desc: '',
          img: 'https://index.cuican520.com/cg3.png'
        },
        {
          desc: '',
          img: 'https://index.cuican520.com/cg4.png'
        }
      ],
      flow: 'Strahlend，One-stop investment immigration of duty-free shops. First, we are authorized by the applicant to exercise on behalf of the applicant. Secondly, we spend 4 million euros, sign loan documents, company legal documents, obtain 51% of the shares, apply for a work visa, and then get a job. Visa, according to the requirements of the work permit, once every 186 days, the final work will be transferred to the green card. After 5 years of normal business operation, the company will transfer the green card. The full amount of 4 million euros will be returned to 51% of the shares.',
      showStrength: [
        {
          title: 'Ornee Duty free shop',
          desc: 'Located in Düsseldorf, a collection of major brands: MWF Zwilling Montblanc Fissher Lamy and other Chinese duty-free shops.',
          img: 'https://index.cuican520.com/sg1.png'
        },
        {
          title: 'Heidelberg',
          desc: 'It was built in 1869. This castle is one of the palaces of the Bavarian King Ludwig II. It is the most photographed building in Germany and one of the most popular tourist attractions. On average, the number of people visiting Neuschwanstein is about 1.3 million, of which more than 70% are Chinese and have strong shopping potential.',
          img: 'https://index.cuican520.com/sg2.png'
        },
        {
          title: 'SHANGHAI JILANG INDUSTRY CO.,LTD',
          desc: 'The business covers the domestic raw materials business unit and the foreign service business unit, and independently developed an e-commerce business unit.',
          img: 'https://index.cuican520.com/sg3.png'
        },
        {
          title: 'Xiamen Zunlang Biological Engineering Co.Ltd',
          desc: 'In charge of import and export trade',
          img: 'https://index.cuican520.com/sg4.png'
        }
      ],
      advantage: [
        {
          title: 'whenever necessary',
          text: 'Signing the contract, effective immediately, saving time for various regulatory processes'
        },
        {
          title: 'anywhere',
          text: 'Professional service company fully cooperates with and operates'
        },
        {
          title: 'Zero risk',
          text: 'Full refund, no need to bear the risk of legal person'
        },
        {
          title: 'Zero language threshold',
          text: 'No need for language tools such as English and German'
        },
        {
          title: 'good time',
          text: 'The door of the project will only be opened for you.'
        },
        {
          title: 'Good prospects',
          text: 'Join an experienced team for more opportunities'
        }
      ],
      mark: '*If you have any questions, please feel free to contact us, we will be happy to help you, thank you for your support!'
    },
    skill: { //  专利技术合作
      title: `如何申请专利`,
      desc: {
        title: `专利分为3类：发明专利、实用型专利、外观设计专利`,
        list: [
          {
            text: `发明专利的申请审批流程：专利申请—受理—初审—公布—实质审查请求—实质审查—授权`
          },
          {
            text: `实用新型专利申请审批流程：专利申请—受理—初审—公告—授权`
          },
          {
            text: `申请外观专利的流程：专利申请—受理—初步审查—公告—授权`
          }
        ]
      },
      overseas: {
        title: `海外专利引入`,
        desc: `海外（德国）专利引入中国，在中国专利备案，海外（德国）在工作申请专利等原需要律师费2万欧元，但丝萃岚只需2万人民币的律师代理费`,
        service: `我们同样可以提供以下服务：`,
        list: [
          {
            text: `商标注册`
          },
          {
            text: `专利注册`
          },
          {
            text: `引进海外科学技术---德国电子黑科技以及生物科技`
          },
          {
            text: `进口商品备案`
          },
          {
            text: `委托加工（德国、中国）`
          }
        ]
      }
    },
    data: { //  隐私和数据保护
      title: 'Privacy and data protection',
      othertitle: `Strahlend' understand the importance of privacy to you and respect your privacy. Please read and understand these terms before submitting your personal data.`,
      datalist: [
        {
          id: 1,
          title: '1、Personal information',
          text: 'When you visit our website, we will not collect any personal information from you unless you voluntarily provide it. If you do not wish to provide us with personal information, you can still visit our website.'
        },
        {
          id: 2,
          title: '2、Way of collecting information',
          text: 'If you visit the 丝 website, we do not require personal information, but collect personal information on a voluntary basis, including but not limited to: your name, address, electronic number and email address'
        },
        {
          id: 3,
          title: '3、The way you use your information',
          text: 'In the case where certain services are provided by an authorized partner of Silkland, Silkland will share your personal data with the partner as described in this policy. In the case of applicable legal requirements or in response to legal proceedings, Estuilan may also disclose your personal data to relevant law enforcement agencies or other government agencies. Strahlend also discloses your data in the presence of reasonable demand, for example, due to the execution of the contract and the disclosure and disclosure that we believe is necessary to prevent physical damage or property damage or to investigate possible or actual illegal acts.'
        },
        {
          id: 4,
          title: '4、Integration and statistics',
          text: 'Strahlend uses the web to record information to help us design websites, identify hot featured products, and use it for other management purposes. However, if necessary, we use website records to help identify if someone wants to break into or break our website, and if we believe there is evidence of computer damage or violations of the law, we will share the website record with law enforcement. .'
        },
        {
          id: 5,
          title: '5、Data security and responsibility ',
          text: `Strahlend Commitment: We will protect the security of the data you provide to us and take reasonable precautions to prevent your personal information from being lost, misused or altered. In view of the presence of your company's personal information, we ask them to keep this information confidential and not to use it in any other way than to provide services in Silkland.`
        },
        {
          id: 6,
          title: '6、Update of this policy',
          text: 'Strahlend reserves the right to update or modify this policy from time to time. If our privacy policy changes, we will post the latest version of our privacy policy here.'
        },
        {
          id: 7,
          title: '7、Contact information',
          text: 'If you have provided personally identifiable information through a website or interactive advertisement of the Strahlend Company, or someone else has provided your personally identifiable information through the website of Strahlend or interactive advertising, and you wish to have this information To modify or delete from our database, please email us and provide us with the necessary information (the website you came from, name, and email), we will try our best to remove you from our documents. Personally identifiable information. If you want to ask for your personally identifiable information collected by the Strahlend website, Strahlend will try its best to provide you with such information and correct the real-time inaccuracies.'
        }
      ]
    },
    copyright: { //  版本说明
      title: 'Website copyright notice',
      othertitle: 'The website copyright statement is very grateful to you for your interest in our products and to visit our website. Please read all the terms of this statement carefully before using this website. By linking and using this website, you express your unconditional acceptance of this statement and you should be guilty of the relevant laws of this statement.',
      copyrightlist: [
        {
          id: 1,
          text: `The company's website retains all rights: all texts, images, audio files, animation files, and other intellectual property rights are protected by all relevant industrial property rights and intellectual property rights, including China's copyright law. It may not be copied for commercial purposes or distribution, and may not be modified for use on other websites.`
        },
        {
          id: 2,
          text: `All trademarks, logos and service marks appearing on this website are the property of the company. It may not be used, permanently downloaded, copied, or distributed in any way without the written permission of the Company's website division.`
        },
        {
          id: 3,
          text: `The contents and software of this website are protected by the Copyright Law of the People's Republic of China, the Copyright Law of the People's Republic of China, the provisions of international conventions on copyright protection, and other relevant laws and regulations. No unit or individual may use the content and services provided on this website for commercial or profitable activities; when using the content and services provided by this website for non-commercial purposes, it shall abide by the provisions of the Copyright Law and other relevant laws and regulations. Infringe the rights of website owners and related rights holders.`
        },
        {
          id: 4,
          text: `The company's website reserves the right to update the contents of this statement at any time according to the needs of the business. Please visit this page each time you visit this website to view the current statement content of this website.`
        },
        {
          id: 5,
          text: `The right to interpret the above statements is the property of the company's website.`
        }
      ]
    },
    medical: { //  海外医疗
      antiaging: 'Anti aging: the famous poet Xi Murong once said: youth is a book that is too hasty. Everyone from birth to death, youth may be a flash, a long and short life, aging is inevitable. With the acceleration of the aging population, the "old and old people" are common. Global research on aging and anti-aging has become increasingly active, anti-aging is an eternal topic in human medicine.', //  抗衰老
      howtoface: 'How to face?',
      naturaltherapy: [
        {
          id: 1,
          text: 'Medical examination'
        },
        {
          id: 2,
          text: 'Preliminary detoxification conditioning'
        },
        {
          id: 3,
          text: 'Stem cell depth repair'
        },
        {
          id: 4,
          text: 'Launching a German anti-aging journey'
        }
      ], //  自然疗法
      diymedical: [
        {
          id: 1,
          text: 'Entry of physical examination report',
          bgicon: 'https://index.cuican520.com/lg1.png'
        },
        {
          id: 2,
          text: 'DNA major disease detection',
          bgicon: 'https://index.cuican520.com/lg2.png'
        },
        {
          id: 3,
          text: 'Develop a personalized chemotherapy program',
          bgicon: 'https://index.cuican520.com/lg3.png'
        },
        {
          id: 4,
          text: 'Executive treatment plan',
          bgicon: 'https://index.cuican520.com/lg4.png'
        }
      ], //  体检建立当当
      gene: `Genetic testing: anti-aging gene testing package, chronic disease genetic testing package, male health genetic testing package, care for women's genetic testing package, happy children's genetic testing package, caring for the elderly genetic testing package.`, //  基因检测
      enginery: 'Heavy metal detoxification, allergen detoxification, acid-base balance and blood purification and detoxification',
      purify: `Blood purification and detoxification: "blood purification and detoxification" is a new health concept put forward by developed countries such as Europe and the United States. The lipids in plasma are collectively called blood lipids, including triglycerides, small amounts of diesters and monoglycerides, phospholipids, cholesterol and cholesterol esters, and non-esterified lipids. Excessive amounts of these lipids are blood toxins, especially the accumulation of heavy metals in the body caused by domestic environmental pollution. Blood purification and detoxification are carried out through German products. A device similar to a hemodialysis machine is used to separate human plasma, remove excess blood lipids, heavy metals, pesticides and other toxins using a German patent technology, and transfuse the filtered fresh and clean blood back into the body through another tube, which is equivalent to a sweep of the whole body's blood and restore the inner ring. At the same time, it can also play a very good role in delaying aging, increasing vitality, preventing cancer, eliminating inflammatory factors and preventing disease.`,
      exp: 'Star case, Hong Kong star Wu XX',
      expdesc: `Xinhua BEIJING, Dec. 16, according to Taiwan's "Dongsen News" reported that Wu XX16 in Germany after blood purification, even miraculously restored hearing, but also let people know that his left ear hearing 10 years ago has only 10%, after the news exposure, so that fans are very distressed, he said that there is no pain, "no risk, It's just that the charge is not cheap.`,
      repair: `Among them, blood purification and detoxification: "blood purification and detoxification" is a brand new health concept put forward by developed countries such as Europe and the United States. The lipids contained in plasma are collectively referred to as blood lipids, including: triglycerides, small amounts of diglycerides and monoglycerides, phospholipids, cholesterol and cholesterol esters, and non-esterified lipids. Too much of these lipids are blood toxins, especially Because of the accumulation of heavy metals in the body caused by domestic environmental pollution, blood purification and detoxification is to separate the human body's plasma through a German hemodialysis machine. The German patented technology is used to remove excess blood lipids, heavy metals, pesticides and other toxins, and will filter. After the fresh and clean blood is returned to the body through another pipe, it is equivalent to a large sweep of the body's whole body blood, which can also restore the body's environmental circulation and also play a good role in delaying aging, increasing vitality and preventing cancer. Eliminate the role of inflammatory factors in preventing diseases.`,
      swot: [
        {
          id: 1,
          title: 'Young ten years old',
          desc: 'Syringe tube cell gland extract "fresh cell extract", activates the stem cells of the aging organs, and allows the internal organs to replace the aging cells. The direct effect from the inside to the outside is that there is no fatigue, energy, and allergies disappear. The quality of sleep is improved, the skin is delicate and translucent, and the body is young and ten years old.',
          bgc: 'background:#a25b67',
          descborder: 'border-bottom: 1px solid #ddd;padding:0px 20px 20px 0;'
        },
        {
          id: 2,
          title: 'Nobel Prize in Physiology or Medicine',
          desc: 'Günter Blobel,German American biologist was awarded the Nobel Prize in Physiology or Medicine for discovering signal peptides. Protein targeting: The "address tag" signal peptide directs the newly synthesized protein molecule to the appropriate location within the cell.',
          bgc: 'background:#fcd1ab',
          descborder: 'border-left: 1px solid #ddd;padding:0px 0px 20px 20px;'
        },
        {
          id: 3,
          title: 'Activated organ stem cells',
          desc: 'According to the different conditions of each person, different organ cell extracts are selected, for example, thymus essence is used for human immunity, spleen cell extract extracts to restore hematopoiesis, liver cell extracts improve liver detoxification function, and corresponding placenta regulates body hormone levels. In addition, there are cell extracts such as heart, kidney, lung, bone and joint, testis, mesenchymal stem cells, etc. These growth factors work through their "home-seeking" principle to find their own target organs, activate stem cells, and generate information. Reporting the replacement of aging cells to restore and restore the function of this organ.',
          bgc: 'background:#493c3c',
          descborder: 'border-right: 1px solid #ddd;padding:30px 20px 20px 0;'
        },
        {
          id: 4,
          title: 'Upgrade of amphotericin',
          desc: 'Swiss surgeons extract sheep placenta from lamb embryos for cell therapy and improve immunity. In the 1970s, a new generation of products, cell organ gland extracts, was developed. This treatment avoids allergies caused by cells. Breaking the cell membrane of specific organs, removing the cell membrane with antigen by high-speed centrifugation, purifying the growth factor in the cell, directly freezing, without adding any preservative, colleagues will test all the samples for virus and bacteria, and fully use the medical standard before they are used in the human body.',
          bgc: 'background:#cc816e',
          descborder: 'border-top: 1px solid #ddd;padding:30px 0px 20px 20px;'
        }
      ],
      aging: [
        {
          id: '1',
          text: `The blood report was given to a German doctor a week in advance, and the doctor developed a one-on-one treatment plan to eat according to the doctor's recipe three days before the treatment.`
        },
        {
          id: '2',
          text: 'The first day of detoxification, intravenous injection, heavy metal, intestinal detoxification, etc., the next day to receive anti-aging fresh cell extract + organ function conditioning, the third to the sixth day, a needle of cell essence + organ function conditioning.'
        },
        {
          id: '3',
          text: 'Medical expenses:',
          price: '￥59980，Including pick-up plane + accommodation + daily treatment pick-up, tourist visa and accommodation and other living expenses in Germany convalescent period',
          color: 'color:#c0979d'
        }
      ]
    },
    brand: {
      banner__title: 'Brand story',
      banner__desc: `The choice of Europe's most densely populated and economically developed North Rhine is to better integrate the best resources in Germany into the STRAHLEND in China, and to fulfill everyone's initial wishes.`,
      brand__title: [
        {
          title: 'The origin of the company'
        },
        {
          title: 'Strahlend E-commerce platform (cross-border e-commerce APP)'
        }
      ],
      brand__origin: {
        part2: `On the winter night of Christmas, the friends sit around and the fireplace is warm and comfortable. The German friend Thomas’s party in the old castle is immersed in the red wine. The room is filled with German enthusiasm and sorrow in the exotic. Lao Yao is a Wenzhou native who has lived in Germany for many years. He is also the president of the German Chinese Restaurant Association. He has opened three Chinese restaurants in Hamburg, Cologne and Bremen in Germany. The integrity management has accumulated a good reputation in the local area and is well received by local Germans. favorite. Lao Yao's strict performance in the procurement of ingredients, select the best local suppliers to cooperate, each time the arrival of the goods are personally checked to ensure the freshness of the ingredients. Lao Yao’s parents still live in China, and China’s fake goods are rampant, food safety problems are frequent, and the situation is worrying. So Lao Yao often expresses German products to parents and relatives, while China Customs’s inspection rate of overseas parcels has increased. Many, food must be inspected, so it is impossible to return to China by courier. He is worried. Dr. Wang has been working at the German Institute for more than ten years. He is ready to return to China for development. He is accustomed to using German-quality goods. He is worried that he can't easily buy it after returning home, and domestic buyers are afraid to buy counterfeit fakes. Dr. Wang is more worried that after returning home, he will not be able to find the same high-quality raw materials as Germany for her research and the production of future biotechnology products.`,
        part3: ' “Why don’t we set up a company to solve everyone’s concerns?” Amin broke the silence. Amin is a friend of Thomas who is a guest in Germany. He has worked in international companies for many years, is optimistic and clear, and has clear ideas. He proposed to set up a company dedicated to German products. Chinese companies that export or even transform technology bring authentic German products to China, provide high-quality raw materials from Germany to Chinese conscience companies, and serve as a commercial bridge between China and Germany to serve domestic consumers. Excellent products are exported to Germany. Lao Jiang opened duty-free shops and jewellery watches in Germany. After years of good faith management, he became one of the best-selling duty-free shops in Germany. He has close ties with many German manufacturers and he can organize the best and authentic goods. The Chinese who travel in Germany often visit Chiang Kai-shek’s duty-free shops in Düsseldorf and Heidelberg’s watches, but because of the restrictions on luggage, the guests are very entangled in shopping, and the meaning is still unfinished. Lao Jiang hopes to serve the Chinese.'
      },
      cuicanApp: [
        {
          text: 'About Strahlend E-commerce platform concept'
        },
        {
          text: ' Strahlend becomes a life partner, becomes a daily consumption habit, starts from a shopping platform, and finally creates a high-quality life platform.'
        },
        {
          text: 'Medical, Food, Maintain, Shape'
        },
        {
          text: '1. Medical：German natural therapy, health, improve immunity, young body, improve ability, treat chronic diseases'
        },
        {
          text: '2. Food：Healthy food, German natural plant extracts, functional foods, etc.'
        },
        {
          text: '3. Maintain：There are no cosmetics and skin care products, acne, acne marks, moisturizing and anti-wrinkle, eliminating fine lines and dark spots.'
        },
        {
          text: `Shape：Whether it's luxury or luxury, whether it's jewellery watches and designer clothing bags, it's a collection of European collections.`
        },
        {
          text: 'What we offer is not the goods but the quality of life, customized services, the target population is the middle class of 109 million, and it also attracts other middle and high-end consumers.'
        },
        {
          text: 'The membership-based shopping platform can obtain different levels of membership through shopping points or direct recharge, and enjoy the points exchange and corresponding member discounts.'
        },
        {
          text: 'Overseas direct mail, free trade zone bonded warehouse fast customs clearance, the platform provides goods delivery information for members to view.'
        }
      ],
      scanme: 'Scan download app'
    }
  }
}
