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
        text: '首页',
        icon: '',
        path: 'index'
      },
      {
        text: '产品',
        icon: '',
        path: 'product'
      },
      {
        text: '服务',
        icon: '',
        path: 'service'
      },
      {
        text: '联系',
        icon: '',
        path: 'contact'
      }
    ],
    currentlan: '中文',
    news: '趋势和新闻', //  标题
    foot: [
      {
        text: '中国合作伙伴',
        path: 'friends'
      },
      {
        text: '咨询服务',
        path: 'consult'
      },
      {
        text: '专利技术合作',
        path: 'skill'
      },
      {
        text: '隐私和数据保护',
        path: 'data'
      },
      {
        text: '版权说明',
        path: 'copyright'
      }
    ],
    area1: [
      {
        id: 1,
        title: '品牌故事',
        desc: '架起中德桥梁，整合德国最优质资源来服务国人',
        images: 'https://index.cuican520.com/menu1.png',
        path: 'brand'
      },
      {
        id: 2,
        title: '食品原料',
        desc: '用最好的原料，为您的产品锦上添花',
        images: 'https://index.cuican520.com/menu2.png',
        path: 'brand'
      },
      {
        id: 3,
        title: '衍生服务',
        desc: '用我们的专业为您提供优质的服务',
        images: 'https://index.cuican520.com/menu3.png',
        path: 'brand'
      },
      {
        id: 4,
        title: '自主产品',
        desc: '祛痘不留痕，打造完美肌肤，令您心情美好一整天',
        images: 'https://index.cuican520.com/menu4.png',
        path: 'brand'
      }
    ],
    product: { //  产品
      producttype: '产品分类',
      productlist: [
        {
          text: '原物料',
          pid: 1
        },
        {
          text: '德国品牌',
          pid: 2
        },
        {
          text: '自主品牌',
          pid: 3
        }
      ],
      productshow: '产品展示',
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
        gelatin__title: ['公司及其发展', '公司旗下主要产品', '市场份额以及国际化市场', '质量控制', '质量证书', '产品信息', '产品包装'],
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
          text: '胶原蛋白',
          images: 'https://index.cuican520.com/pro1.png',
          path: ''
        },
        {
          id: 2,
          text: '胶原蛋白',
          images: 'https://index.cuican520.com/pro2.png',
          path: ''
        },
        {
          id: 3,
          text: '胶原蛋白',
          images: 'https://index.cuican520.com/pro3.png',
          path: ''
        },
        {
          id: 4,
          text: '胶原蛋白',
          images: 'https://index.cuican520.com/pro4.png',
          path: ''
        },
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
        },
        {
          id: 7,
          text: '胶原蛋白',
          images: 'https://index.cuican520.com/pro7.png',
          path: ''
        },
        {
          id: 8,
          text: '胶原蛋白',
          images: 'https://index.cuican520.com/pro8.png',
          path: ''
        }
      ]
    },
    service: { //  服务
      title: '专业定制服务',
      more: `更多详情`, //  new add
      servicelist: [
        {
          id: 1,
          text: '医疗服务',
          desc: '开启德国抗衰老之旅',
          path: 'medical'
        },
        {
          id: 2,
          text: '咨询服务',
          desc: '海外投资移民一站式解决方案',
          path: 'consult'
        },
        {
          id: 3,
          text: '专利技术合作',
          desc: '海外技术合作',
          desc2: '海外(德国)专利引入中国',
          path: 'skill'
        }
      ]
    },
    contact: { //  联系我们
      title: '联系我们',
      contacttype: [
        {
          title: '电话',
          content: '021-10011001'
        },
        {
          title: '邮箱',
          content: '0011001@126.com'
        },
        {
          title: '传真',
          content: '021-10011001'
        },
        {
          title: '地址',
          content: '丹巴路99号 B3 1502'
        }
      ]
    },
    friends: { //  中国合作伙伴
      title: '中国合作伙伴',
      friendslist: [
        {
          name: '上海极朗实业有限公司'
        },
        {
          name: '上海西菲克食品科技有限公司'
        }
      ]
    },
    consult: { //  咨询服务
      consult_title_list: [
        {
          id: 1,
          text: '当前移民现状介绍'
        },
        {
          id: 2,
          text: '为什么选择德国'
        },
        {
          id: 3,
          text: '投资项目-德国新天鹅堡'
        },
        {
          id: 4,
          text: '我们的流程'
        },
        {
          id: 5,
          text: '实力展示'
        },
        {
          id: 6,
          text: '我们的优势'
        }
      ],
      immigrantproduce1: '移民最靠谱的结果就是获得绿卡。',
      immigrantproduce2: '德国移民分技术移民和投资移民，其中投资最少、最简单、最安全、成功率最高的移民方式当属',
      immigrantproduce3: '投资移民',
      immigrantproduce4: '。德国《外国人居留法》第21条规定：性质为投资创业移民，即申请人需在开办和经营一家公司，实现自雇5年，并达到当地政府期望的营业条件，则可申请',
      immigrantproduce5: '德国永久居留权',
      immigrantproduce6: '（俗称绿卡）。在德国持有长期居留许可满5年、确保生活有保障、交纳60个月的社会保险费、拥有经济活动（工作）许可、对德语有一定的认识、对法律和社会秩序以及在德国的生活有基本的认识、和家人都有足够的生存空间。对于选择法人签证的申请者，德国移民法第21条，满足以下三点的自主经营者（企业主或自由职业者）可获准得到居留许可，并且持有此居留许可满3年后可以转永久居留：1. 符合上层经济利益或地区性的特别需求；2. 公司业务预计会对经济带来积极影响；3. 能通过自有资本或贷款保障企业所需资金。',
      whycheckGermany1: '投资移民，三大理由选择欧洲最强经济过德国：文化政治经济稳定、严格遵守法律和次序、高福利保障，一家子来德国，会享受到优质的教育资源，完善的医疗体系，高品质生活，另外，德国也是一片投资乐土，德国以其良好的贸易秩序为投资者带来稳定的利润空间，德国包括家庭团聚类别，占整个配额的32%；技术移民类别，占整个配额的68%；38%为雇主担保类别；34%为独立技术移民类别；22%为州政府担保类别；6%为商业移民类别，另外的技术、科技、制造的基础能够整合到最有效的资源。',
      whycheckGermany2: '德国属于生根国，获得德国的签证和绿卡，在欧盟其他国家都畅通无阻，而获得德国绿卡后申请其他国家的签证基本没有问题。',
      newcastle: '德语：Schloss Neuschwanstein，全名新天鹅石城堡，是19世纪晚期的建筑，位于德国巴伐利亚西南方，邻近年代较早的高天鹅堡（Schloss Hohenschwangau，旧天鹅堡），距离菲森镇（Fussen）约4公里，离德国与奥地利边界不远。新天鹅城堡是德国的象征， 由于是迪斯尼城堡的原型，也有人叫白雪公主城堡。建于1869年。这座城堡是巴伐利亚国王路德维希二世的行宫之一。共有360个房间，其中只有14个房间依照设计完工，其他的346个房间则因为国王在1886年逝世而未完成。是德国境内受拍照最多的建筑物，也是最受欢迎的旅游景点之一。新天鹅堡平均每年来游览的人数大约为130万人次，其中华人占70%以上，有强大的购物潜力。',
      newcastleimglist: [
        {
          desc: '巴伐利亚州德国行必到景点',
          img: 'https://index.cuican520.com/cg1.png'
        },
        {
          desc: '冬季浪漫之城冰雪城',
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
      flow: '丝萃岚，免税店一站式投资移民，首先，我们经申请人授权，代表申请人行使，其次，花费400万欧元，签署借款文件、公司法律文件，获得51%代持股份，申请工作签证，之后获得工作签证，按工签要求每186天入境一次，最后工作签转绿卡，企业正常经营5年后转绿卡，全额400万欧元返还51%股份归还原股东。',
      showStrength: [
        {
          title: 'Ornee免税店',
          desc: '位处于杜塞尔多夫，集合各种大品牌：MWF 双立人 万宝龙 Fissher Lamy等的华人免税店。',
          img: 'https://index.cuican520.com/sg1.png'
        },
        {
          title: '海德堡',
          desc: '建于1869年。这座城堡是巴伐利亚国王路德维希二世的行宫之一。是德国境内受拍照最多的建筑物，也是最受欢迎的旅游景点之一。新天鹅堡平均每年来游览的人数大约为130万人次，其中华人占70%以上，有强大的购物潜力。',
          img: 'https://index.cuican520.com/sg2.png'
        },
        {
          title: '上海极朗实业',
          desc: '业务涵盖国内原料产品事业部及国外服务事业部，独立开发了一个电商事业部。',
          img: 'https://index.cuican520.com/sg3.png'
        },
        {
          title: '厦门尊琅',
          desc: '负责进出口贸易',
          img: 'https://index.cuican520.com/sg4.png'
        }
      ],
      advantage: [
        {
          title: '随时',
          text: '签署合同，即时生效，省去各种规章流程得时间'
        },
        {
          title: '随地',
          text: '专业服务公司全力配合下、操作'
        },
        {
          title: '零风险',
          text: '全额返还，无需承担法人风险'
        },
        {
          title: '零语言门槛',
          text: '无需英语、德语等语言工具'
        },
        {
          title: '好时机',
          text: '项目的大门只为您打开'
        },
        {
          title: '好前景',
          text: '加入经验丰富的团队获得更多机会'
        }
      ],
      mark: '*如果有任何问题, 请随时联系我们, 我们将竭诚为您服务, 感谢您的支持！'
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
      title: '隐私和数据保护',
      othertitle: '丝翠兰深知隐私对您的重要性，并会尊重您的隐私。请在提交个人数据之前，阅读、了解本条款。',
      datalist: [
        {
          id: 1,
          title: '1、个人信息',
          text: '在您访问本公司网站时，除非您个人自愿提供，我们不会收集您个人的任何信息。如果您不愿向我们提供个人信息，您仍可访问我们的网站。'
        },
        {
          id: 2,
          title: '2、收集信息方式',
          text: '如果您访问丝翠兰网站，我们并不要求提供个人信息，只是在自愿的基础上，收集个人信息，该信息包括但不限于：您的名字、地址、电子号码和电子信箱地址'
        },
        {
          id: 3,
          title: '3、使用您的信息的方式',
          text: '在某些服务由丝翠兰的授权合作伙伴提供的情况下，丝翠兰会如本政策描述与该合作伙伴共享您的个人数据。在适用的法律要求或响应法律程序的情况下，丝翠兰也可能会向相关的执法机关或者其他政府机关披露您的个人数据。丝翠兰还会在存在合理需求的情况下披露您的数据，例如出于执行合同以及我们认为为阻止身体损害或财产损失或调查可能的或实际的非法行为有必要披露且披露是适当的。'
        },
        {
          id: 4,
          title: '4、集成和统计数据',
          text: '丝翠兰利用网络记录信息来帮助我们设计网站、识别热销的特色产品，及用于其它管理方面。但是，必要时，我们会使用网站记录以帮助识别是否有人想闯入或破坏我们的网站，如果我们确信有证据表明有破坏计算机安全或违反有关法律的行为，我们会与执法部门共享网站记录信息。'
        },
        {
          id: 5,
          title: '5、数据安全及责任 ',
          text: '丝翠兰承诺：我们会保护您提供给我们的数据的安全，并采取合理的防范措施，以免您的个人信息被丢失，滥用或更改。鉴于丝翠兰的合作伙伴，能够看到您的个人信息，我们则要求他们对该信息进行保密，除了在丝翠兰提供服务方面，不得以任何其它方式使用该信息。'
        },
        {
          id: 6,
          title: '6、本政策如何更新',
          text: '丝翠兰保留不时更新或修改本政策的权利。如果我们的隐私政策变更，我们会将最新版隐私政策发布在这里'
        },
        {
          id: 7,
          title: '7、联系方式',
          text: '如果您已经通过丝翠兰公司的某一网站或交互广告提供了个人可识别信息，或别人已通过丝翠兰公司的网站或交互广告提供了您的个人可识别信息，而您希望将此信息进行修改或从我方的数据库中删除，请Email给我们，并向我方提供必要的信息（您来自的网站，姓名，以及email），我们则会尽量合理的努力从我方文件中删除您的个人可识别信息。如果您欲索要丝翠兰公网站收集到的您的个人可识别信息，丝翠兰会尽量合理的努力向您提供该种信息，并改正其中的实时性不准确之处。'
        }
      ]
    },
    copyright: { //  版本说明
      title: '网站版权说明',
      othertitle: '网站版权声明非常感谢您最我们的产品感兴趣并访问我们的网站。在您使用本网站之前，请您仔细阅读本声明的所有条款。您一旦链接、使用本网站，即表示您无条件地接受本声明，您应该罪受本声明的相关法律规定。',
      copyrightlist: [
        {
          id: 1,
          text: '本公司网站保留所有的权利：所有的文字，图片，有声文件，动画文件，和其他知识产权均受中国包括著作权法在内的所有相关工业产权和知识产权保护。不可复制用于商业目的或发行，也不可修改后在其他网站使用。'
        },
        {
          id: 2,
          text: '本网站中出现的所有商标、标识和服务标识的所有权均归本公司网站。未经本公司网站司的书面许可，禁止将其以任何方式使用、永久下载、复制、分发。'
        },
        {
          id: 3,
          text: '本网站的内容和软件均受《中华人民共和国民法通则》、《中华人民共和国著作权法》、国际公约中有关著作权保护的规定以及其它相关法律法规的保护。任何单位或个人均不得将本网站提供的内容与服务用于商业、盈利性活动；将本网站提供的内容与服务用于非商业用途时，应遵守著作权法以及其他相关法律法规的规定，不得侵犯网站所有者及相关权利人的权益。'
        },
        {
          id: 4,
          text: '本公司网站保留根据业务需要随时对本声明内容进行更新的权利，请您在每次登陆本网站时访问此页，查看本网站的当前声明内容。'
        },
        {
          id: 5,
          text: '以上声明内容的解释权归本公司网站所有。'
        }
      ]
    },
    medical: { //  海外医疗
      antiaging: '抗衰老：著名诗人席慕蓉曾说过：青春是一本太仓促的书。每个人从出生到死亡，青春也许一瞬而过，漫长而短暂的一生，衰老不可避免。随着近来老龄化人口的加快，“初老族”屡见不鲜。全球对衰老与抗衰老的研究也愈加活跃，抗衰老是人类医学一个永恒的话题。', //  抗衰老
      howtoface: '如何面对？',
      naturaltherapy: [
        {
          id: 1,
          text: '体检建立档案'
        },
        {
          id: 2,
          text: '初步排毒调理'
        },
        {
          id: 3,
          text: '干细胞深度修复'
        },
        {
          id: 4,
          text: '开展德国抗衰老之旅'
        }
      ], //  自然疗法
      diymedical: [
        {
          id: 1,
          text: '体检报告入档',
          bgicon: 'https://index.cuican520.com/lg1.png'
        },
        {
          id: 2,
          text: 'DNA大病检测',
          bgicon: 'https://index.cuican520.com/lg2.png'
        },
        {
          id: 3,
          text: '制定个性化疗程',
          bgicon: 'https://index.cuican520.com/lg3.png'
        },
        {
          id: 4,
          text: '执行治疗方案',
          bgicon: 'https://index.cuican520.com/lg4.png'
        }
      ], //  体检建立当当
      gene: '基因检测：抗衰老基因检测套餐、慢性病基因检测套餐、男性健康基因检测套餐、呵护女性基因检测套餐、快乐儿童性基因检测套餐、关爱老人基因检测套餐', //  基因检测
      enginery: '重金属排毒、过敏原排毒、酸碱平衡和血液净化排毒',
      purify: '其中血液净化排毒：“血液净化排毒”是欧美等发达国家提出的一个全新的健康理念。血浆中所含脂类统称为血脂，其中包括：甘油三酯、少量甘油二酯和甘油一酯、磷脂、胆固醇和胆固醇酯及非酯化脂，过多的这些脂类就是血液毒素，特别还因为国内环境污染导致的体内重金属积聚, 血液净化排毒是通过德国类似血透机器的装置将人体的血浆分离出来，采用德国独有专利技术将多余的血脂及重金属，农药等毒素清除，并将过滤后鲜活干净的血液通过另一个管道输回体内的过程，相当于给身体全身血液进行一次大扫除，在恢复体内环境循环畅通的同时还可以起到很好的延缓衰老，增加生命活力，防癌、消除炎症因子预防疾病的作用。',
      exp: '明星案例, 香港明星吴XX',
      expdesc: '中新网12月16日电 据台湾“东森新闻”报道，吴XX16日在德国做完血液净化，竟然奇迹般地恢复听力，也让人意外得知他的左耳听力10年前就已经只剩10%，消息曝光后，让粉丝都相当心疼，他则表示一点也不痛，“没有任何风险，只是收费不便宜。',
      repair: '德国是世界上唯一经批准开展活细胞疗法的国家，也是当今唯一继承了保罗•尼汉斯医生活细胞提取。技术的国家。这个跟德国人严谨的态度与对质量的追求不无关系。如今，瑞士、法国以及不同国家，几乎都采用冷冻后干燥保存的羊胚胎细胞进行治疗。而鲜活细胞疗法能保证羊胚胎细胞的有效成分及其活性不会丧失。因此，鲜活细胞疗法名称本身就是对其治疗效果的最好诠释！鲜活细胞精华',
      swot: [
        {
          id: 1,
          title: '年轻十岁',
          desc: '注射器管细胞腺体提取物“鲜活细胞精华”，激活衰老器官的干细胞，让五脏六腑重新替换衰老细胞，从里到外的年轻直接的效果就是，工作没有疲劳感，精力充沛，过敏症消失，睡眠质量提高，皮肤细腻透亮，体感年轻十岁。',
          bgc: 'background:#a25b67',
          descborder: 'border-bottom: 1px solid #ddd;padding:0px 20px 20px 0;'
        },
        {
          id: 2,
          title: '诺贝尔生理学或医学奖',
          desc: '古特·布洛伯尔（Günter Blobel）德籍美国生物学家，因发现信号肽被授予诺贝尔生理学或医学奖。蛋白质导向：“地址标签”信号肽引导新合成的蛋白质分子到达细胞内恰当的地点。',
          bgc: 'background:#fcd1ab',
          descborder: 'border-left: 1px solid #ddd;padding:0px 0px 20px 20px;'
        },
        {
          id: 3,
          title: '激活器官干细胞',
          desc: '根据每个人情况不同，选用不同器官细胞提取物，例如胸腺精华素针对人体免疫力，脾脏细胞提取精华恢复造血功能，肝脏细胞提取物提高肝脏排毒功能，还有相应的胎盘素调节机体激素水平。此外还有心脏，肾脏，肺，骨关节，睾丸，间质干细胞等何种细胞提取物，这些生长因子通过他们的“找家”原理发挥作用，找到自己相应的靶器官，激活干细胞，生成信息报替代衰老细胞达到修复及恢复这个器官的功能。',
          bgc: 'background:#493c3c',
          descborder: 'border-right: 1px solid #ddd;padding:30px 20px 20px 0;'
        },
        {
          id: 4,
          title: '升级羊肽素',
          desc: '瑞士外科医生从小羊胚胎中提取出羊胎素，用来进行细胞治疗，提高机体免疫力。上世纪70年代，在此基础上研发了新一代产品——细胞器官腺体提取物。这种治疗避免了采取细胞导致的过敏现象。打破特定器官细胞膜，高速离心去除带有抗原的细胞膜，提纯细胞内的生长因子，直接冷冻，不添加任何保鲜剂，同事将所有样品进行病毒及细菌检测，完全符合医疗标准后才用于人体',
          bgc: 'background:#cc816e',
          descborder: 'border-top: 1px solid #ddd;padding:30px 0px 20px 20px;'
        }
      ],
      aging: [
        {
          id: '1',
          text: '血液报告提前一周给到德国医生，医生制定一对一治疗方案，治疗前三天按医生食谱进食。'
        },
        {
          id: '2',
          text: '第一天排毒，静脉注射，排重金属，肠道排毒等，第二天接受抗衰老鲜活细胞精华+脏器功能调理，第三~六天 一天一针细胞精华+脏器功能调理。'
        },
        {
          id: '3',
          text: '医疗费用：',
          price: '￥59980，包含接送机+住宿+每日治疗接送，旅游签证及在德疗养期的住宿及其他生活费用自理',
          color: 'color:#c0979d'
        }
      ]
    },
    brand: {
      banner__title: '品牌故事',
      banner__desc: '选择欧洲人口最为稠密、经济最发达的北莱茵的目的就是未来更好的整合到德国最优秀的资源到中国STRAHLEND集众人之力，实现大家最初的心愿',
      brand__title: [
        {
          title: '公司的由来'
        },
        {
          title: '璀璨电商平台(跨境电商APP)'
        }
      ],
      brand__origin: {
        part2: '圣诞节的冬夜，好友们围坐，壁炉篝火温暖而舒适，德国友人Thomas设在古堡里的聚会熏陶在红酒中畅所欲言，屋子里弥漫德国的热情和身在在异国淡淡的悲伤。老姚是在德国生活多年的温州人，他也是德国华人餐饮协会的会长，在德国汉堡、科隆、不来梅开了三家中餐馆，诚信经营在当地积累了良好的口碑，深受当地的德国人喜爱。老姚的严格在采购的食材中表现得淋漓尽致，选择当地最好的供货商合作，每次到货都亲自查验，确保食材的新鲜。老姚的父母仍然生活在中国，而中国假货横行，食品安全问题频发，状况令人堪忧，于是老姚常常快递德国的产品给父母和亲戚，而中国海关的对海外邮包抽检率提高了许多，食品必须要商检，所以已经无法快递回国，他忧心重重。王博士在德国研究所工作已经十多年了，准备回国发展，习惯使用德国品质的商品，担心回国后就不能方便地购买到，而国内买又怕买到冒牌进口的假货。王博士更担心回国后无法找到和德国一样高品质的原料，用于她的研究和未来生物技术产品的生产。',
        part3: ' “我们为何不成立一家公司来解决大家的担忧呢？”阿明打破了沉寂，阿明是Thomas的好友做客德国，在国际公司工作多年，乐观开朗，思路清晰，他提议成立一家致力于德国产品向中国出口甚至技术转化的公司，将正宗的德国产品带入中国，将德国的优质原料提供给中国的良心企业，做一个中德之间的商业桥梁，服务国内的消费者；同时也能把中国优秀的产品出口到德国。老蒋在德国开免税店和珠宝表行，多年的诚信经营，成为德国销量最好的免税店之一，与德国众多厂商关系密切，他能够组织到最好的、正宗的商品货源。在德国旅游的华人经常光顾老蒋在杜塞尔多夫的免税店和海德堡的表行，但是因为行李的限制，客人们购物时非常纠结，意犹未尽。老蒋更希望能服务到国人。'
      },
      cuicanApp: [
        {
          text: '关于璀璨电商平台构思'
        },
        {
          text: '璀璨人生，品质生活, 璀璨尊品成为生活伴侣，成为日常消费习惯, 从一个购物平台起步，最终打造一个高品质生活平台'
        },
        {
          text: '医食驻形'
        },
        {
          text: '1. 医：德国自然疗法，养生，提高免疫力，年轻体态，提升能力，治疗慢性疾病'
        },
        {
          text: '2. 食：健康食品，德国天然植物精华，功能性食品等'
        },
        {
          text: '3. 驻：驻颜有术，无添加的化妆品护肤品，祛痘、消除痘印、保湿抗皱、消除细纹暗斑等'
        },
        {
          text: '4. 形：不论是轻奢还是奢华，不论是珠宝钟表和名牌服饰箱包，集欧洲之荟萃。'
        },
        {
          text: '我们提供的不是商品而是生活的品质，定制化的服务，目标人群是1.09亿的中产阶层，也同样吸引其他中高端消费人群。'
        },
        {
          text: '会员制购物平台，通过购物积分或者直接充值获得不同级别会籍，享受积分换物和对应的会员折扣。'
        },
        {
          text: '海外直邮、自贸区保税仓快速清关快递，平台提供商品派送信息供会员查阅。'
        }
      ],
      scanme: '扫我下载app'
    }
  }
}
