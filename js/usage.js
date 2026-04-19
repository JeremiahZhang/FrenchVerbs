// 所有动词的使用说明
const usageInfo = {
  "être": [
    "être 是法语中最常用的动词之一，表示'是'、'存在'等含义",
    "在复合过去时中，être 是某些动词的助动词（如 aller, venir, partir 等）",
    "être 常用于描述身份、职业、状态等",
    "例句：Je suis étudiant. (我是学生)"
  ],
  "avoir": [
    "avoir 是法语中最常用的动词之一，表示'有'、'拥有'等含义",
    "在复合过去时中，avoir 是大多数动词的助动词",
    "avoir 常用于表达拥有、经历、年龄等",
    "例句：J'ai un chat. (我有一只猫)"
  ],
  "aller": [
    "aller 表示'去'、'前往'等含义",
    "aller 可以用来构成最近将来时 (aller + 不定式)",
    "aller 的复合过去时使用 être 作为助动词",
    "例句：Je vais à l'école. (我去学校)"
  ],
  "faire": [
    "faire 表示'做'、'制造'、'进行'等含义",
    "faire 是一个非常常用的动词，可以与很多名词搭配使用",
    "faire 的复合过去时使用 avoir 作为助动词",
    "例句：Je fais du yoga. (我做瑜伽)"
  ],
  "prendre": [
    "prendre 表示'拿'、'取'、'乘坐'、'吃'等含义",
    "prendre 是第三组动词，变位不规则",
    "prendre 可以与交通工具、食物等搭配使用",
    "例句：Je prends un café. (我喝咖啡)"
  ],
  "acheter": [
    "acheter 表示'买'、'购买'等含义",
    "acheter 是第一组动词，但在某些变位中需要添加重音符号",
    "acheter 常用于购物场景",
    "例句：J'ai acheté une baguette. (我买了一条法棍)"
  ],
  "aider": [
    "aider 表示'帮助'、'援助'等含义",
    "aider 是第一组规则动词",
    "aider 可以用于表达帮助某人做某事",
    "例句：Pouvez-vous m'aider? (你能帮我吗？)"
  ],
  "aimer": [
    "aimer 表示'爱'、'喜欢'等含义",
    "aimer 是第一组规则动词",
    "aimer 可以用于表达对某人或某事的喜爱",
    "例句：Je t'aime. (我爱你)"
  ],
  "appeler": [
    "appeler 表示'叫'、'打电话'、'命名'等含义",
    "appeler 是第一组动词，但在某些变位中需要双写 l",
    "appeler 常用于打电话或给某人命名",
    "例句：Je m'appelle Lou. (我叫露)"
  ],
  "apprendre": [
    "apprendre 表示'学习'、'得知'等含义",
    "apprendre 是第三组动词，过去分词是 appris",
    "apprendre 常用于表达学习某事或得知某消息",
    "例句：J'apprends le français. (我在学法语)"
  ],
  "arrêter": [
    "arrêter 表示'停止'、'阻止'等含义",
    "arrêter 是第一组动词，但在某些变位中需要双写 t",
    "arrêter 常用于表达停止做某事",
    "例句：Arrêtez de faire du bruit! (别再制造噪音了！)"
  ],
  "arriver": [
    "arriver 表示'到达'、'发生'等含义",
    "arriver 是第一组规则动词",
    "arriver 常用于表达到达某地或某事发生",
    "例句：On va arriver bientôt. (我们快到了)"
  ],
  "attendre": [
    "attendre 表示'等待'、'期待'等含义",
    "attendre 是第三组动词",
    "attendre 常用于表达等待某人或某事",
    "例句：Attendez-moi! (等等我！)"
  ],
  "boire": [
    "boire 表示'喝'、'饮用'等含义",
    "boire 是第三组不规则动词",
    "boire 常用于表达喝饮料",
    "例句：Je bois du café tous les matins. (我每天早上喝咖啡)"
  ],
  "choisir": [
    "choisir 表示'选择'、'挑选'等含义",
    "choisir 是第二组规则动词",
    "choisir 常用于表达做出选择",
    "例句：J'ai choisi de rester. (我选择留下)"
  ],
  "commencer": [
    "commencer 表示'开始'、'着手'等含义",
    "commencer 是第一组规则动词",
    "commencer 常用于表达开始做某事",
    "例句：Je commence à apprendre le français. (我开始学法语)"
  ],
  "compter": [
    "compter 表示'计算'、'依赖'、'打算'等含义",
    "compter 是第一组规则动词",
    "compter 常用于表达依赖某人或打算做某事",
    "例句：Je compte sur toi! (我就靠你了！)"
  ],
  "comprendre": [
    "comprendre 表示'理解'、'明白'等含义",
    "comprendre 是第三组动词，过去分词是 compris",
    "comprendre 常用于表达理解某事",
    "例句：Je ne comprends pas. (我不懂)"
  ],
  "connaître": [
    "connaître 表示'认识'、'了解'、'知道'等含义",
    "connaître 是第三组动词，过去分词是 connu",
    "connaître 常用于表达认识某人或了解某事",
    "例句：Tu connais Claire? (你认识克莱儿吗？)"
  ],
  "continuer": [
    "continuer 表示'继续'、'持续'等含义",
    "continuer 是第一组规则动词",
    "continuer 常用于表达继续做某事",
    "例句：Je continue à travailler. (我继续工作)"
  ],
  "croire": [
    "croire 表示'相信'、'认为'等含义",
    "croire 是第三组动词，过去分词是 cru",
    "croire 常用于表达相信某事或某人",
    "例句：Je ne crois pas. (我不相信)"
  ],
  "demander": [
    "demander 表示'请求'、'询问'、'要求'等含义",
    "demander 是第一组规则动词",
    "demander 常用于表达请求或询问",
    "例句：Demande à ta mère. (去问你妈)"
  ],
  "descendre": [
    "descendre 表示'下'、'下降'、'下车'等含义",
    "descendre 是第三组动词",
    "descendre 常用于表达下车或下楼",
    "例句：Je descends à la prochaine gare. (我在下一站下车)"
  ],
  "devoir": [
    "devoir 表示'必须'、'应该'、'欠'等含义",
    "devoir 是第三组不规则动词",
    "devoir 常用于表达必须做某事",
    "例句：Je dois partir maintenant. (我现在得走了)"
  ],
  "discuter": [
    "discuter 表示'讨论'、'辩论'等含义",
    "discuter 是第一组规则动词",
    "discuter 常用于表达讨论某事",
    "例句：Je veux discuter avec toi. (我想跟你讨论一下)"
  ],
  "dire": [
    "dire 表示'说'、'告诉'、'表达'等含义",
    "dire 是第三组不规则动词",
    "dire 常用于表达说话或告诉某人某事",
    "例句：Qu'est-ce que tu as dit? (你刚刚说什么？)"
  ],
  "donner": [
    "donner 表示'给'、'给予'、'提供'等含义",
    "donner 是第一组规则动词",
    "donner 常用于表达给某人某物",
    "例句：Donne-moi ton numéro. (给我你的号码)"
  ],
  "dormir": [
    "dormir 表示'睡觉'、'睡眠'等含义",
    "dormir 是第三组不规则动词",
    "dormir 常用于表达睡觉",
    "例句：Tu dors? (你在睡觉吗？)"
  ],
  "écrire": [
    "écrire 表示'写'、'书写'等含义",
    "écrire 是第三组不规则动词",
    "écrire 常用于表达写东西",
    "例句：J'ai écrit une lettre à mon ami. (我给我朋友写了封信)"
  ],
  "écouter": [
    "écouter 表示'听'、'倾听'等含义",
    "écouter 是第一组规则动词",
    "écouter 常用于表达听音乐或听某人说话",
    "例句：Quel genre de musique écoutes-tu? (你听哪种音乐？)"
  ],
  "emprunter": [
    "emprunter 表示'借'、'借用'等含义",
    "emprunter 是第一组规则动词",
    "emprunter 常用于表达借东西",
    "例句：Il m'a emprunté de l'argent. (他跟我借钱)"
  ],
  "entendre": [
    "entendre 表示'听见'、'听到'等含义",
    "entendre 是第三组动词",
    "entendre 常用于表达听到声音",
    "例句：Tu m'entends? (你听得见我说话吗？)"
  ],
  "entrer": [
    "entrer 表示'进入'、'进来'等含义",
    "entrer 是第一组规则动词",
    "entrer 常用于表达进入某地",
    "例句：Puis-je entrer? (我可以进来吗？)"
  ],
  "envoyer": [
    "envoyer 表示'发送'、'寄送'等含义",
    "envoyer 是第一组动词，但在某些变位中需要特殊处理",
    "envoyer 常用于表达发送邮件或包裹",
    "例句：Je voudrais envoyer ce paquet. (我想要寄这个包裹)"
  ],
  "essayer": [
    "essayer 表示'尝试'、'试'等含义",
    "essayer 是第一组规则动词",
    "essayer 常用于表达尝试做某事",
    "例句：Puis-je essayer la taille 9? (我能试试9号吗？)"
  ],
  "étudier": [
    "étudier 表示'学习'、'研究'等含义",
    "étudier 是第一组规则动词",
    "étudier 常用于表达学习某学科",
    "例句：J'étudie la littérature en France. (我在法国读文学)"
  ],
  "expliquer": [
    "expliquer 表示'解释'、'说明'等含义",
    "expliquer 是第一组规则动词",
    "expliquer 常用于表达解释某事",
    "例句：Pouvez-vous m'expliquer pourquoi? (你可以跟我解释为什么吗？)"
  ],
  "falloir": [
    "falloir 表示'需要'、'必须'等含义",
    "falloir 是第三组不规则动词，只用于第三人称单数",
    "falloir 常用于表达需要做某事",
    "例句：Il faut faire encore plus. (我们需要做更多)"
  ],
  "finir": [
    "finir 表示'完成'、'结束'等含义",
    "finir 是第二组规则动词",
    "finir 常用于表达完成某事",
    "例句：J'ai fini mes devoirs. (我写完了作业)"
  ],
  "gagner": [
    "gagner 表示'赢得'、'获得'、'赚'等含义",
    "gagner 是第一组规则动词",
    "gagner 常用于表达赢得比赛或赚钱",
    "例句：On gagne de 2 points. (我们得了2分)"
  ],
  "habiter": [
    "habiter 表示'居住'、'住在'等含义",
    "habiter 是第一组规则动词",
    "habiter 常用于表达住在某地",
    "例句：Vous habitez où? J'habite à Taipei. (你住在哪里？我住在台北)"
  ],
  "interdire": [
    "jeter 表示'扔'、'丢'、'投'等含义",
    "jeter 是第一组动词，但在某些变位中需要双写 t",
    "jeter 常用于表达扔东西",
    "例句：Je le jette à la poubelle. (我把它丢到垃圾桶)"
  ],
  "jouer": [
    "jouer 表示'玩'、'演奏'、'表演'等含义",
    "jouer 是第一组规则动词",
    "jouer 常用于表达玩游戏或演奏乐器",
    "例句：Il joue au football. (他踢足球)"
  ],
  "laisser": [
    "laisser 表示'让'、'留下'、'允许'等含义",
    "laisser 是第一组规则动词",
    "laisser 常用于表达让某人做某事或留下某物",
    "例句：Laisse-moi tranquille. (别管我/让我静一静)"
  ],
  "lire": [
    "lire 表示'读'、'阅读'等含义",
    "lire 是第三组不规则动词",
    "lire 常用于表达阅读书籍或文章",
    "例句：J'aime lire des romans. (我喜欢看小说)"
  ],
  "manger": [
    "manger 表示'吃'、'用餐'等含义",
    "manger 是第一组规则动词",
    "manger 常用于表达吃东西",
    "例句：J'ai mangé un pain au chocolat. (我吃了一个巧克力面包)"
  ],
  "manquer": [
    "manquer 表示'缺少'、'想念'等含义",
    "manquer 是第一组规则动词",
    "manquer 常用于表达想念某人",
    "例句：Tu me manques. (我想你)"
  ],
  "mettre": [
    "mettre 表示'放'、'穿'、'戴'等含义",
    "mettre 是第三组不规则动词",
    "mettre 常用于表达放东西或穿衣服",
    "例句：Je mets un chapeau. (我戴上一顶帽子)"
  ],
  "montrer": [
    "montrer 表示'展示'、'显示'等含义",
    "montrer 是第一组规则动词",
    "montrer 常用于表达展示某物",
    "例句：Je vais te montrer. (我会展示给你看)"
  ],
  "montrer": [
    "montrer 表示'展示'、'显示'等含义",
    "montrer 是第一组规则动词",
    "montrer 常用于表达展示某物",
    "例句：Je vais te montrer. (我会展示给你看)"
  ],
  "moquer": [
    "se moquer 表示'嘲笑'、'取笑'等含义",
    "se moquer 是代词式动词",
    "se moquer 常用于表达嘲笑某人",
    "例句：Il se moque de moi. (他嘲笑我)"
  ],
  "obtenir": [
    "obtenir 表示'获得'、'得到'等含义",
    "obtenir 是第三组动词",
    "obtenir 常用于表达获得某物",
    "例句：Tu obtiens un bonus. (你获得一项红利)"
  ],
  "offrir": [
    "offrir 表示'提供'、'赠送'等含义",
    "offrir 是第三组动词",
    "offrir 常用于表达提供或赠送某物",
    "例句：Il m'offre un cadeau. (他给我一个礼物)"
  ],
  "oublier": [
    "oublier 表示'忘记'等含义",
    "oublier 是第一组规则动词",
    "oublier 常用于表达忘记某事",
    "例句：J'ai oublié de te dire. (我忘了告诉你)"
  ],
  "ouvrir": [
    "ouvrir 表示'打开'等含义",
    "ouvrir 是第三组动词",
    "ouvrir 常用于表达打开门或窗户",
    "例句：Ouvrez la fenêtre, s'il vous plaît. (请把窗户打开)"
  ],
  "parler": [
    "parler 表示'说'、'讲'、'谈话'等含义",
    "parler 是第一组规则动词",
    "parler 常用于表达说话或讲某种语言",
    "例句：Je parle anglais et chinois. (我说英文和中文)"
  ],
  "participer": [
    "participer 表示'参加'、'参与'等含义",
    "participer 是第一组规则动词",
    "participer 常用于表达参加活动",
    "例句：Je dois participer à la réunion. (我必须参加会议)"
  ],
  "partir": [
    "partir 表示'离开'、'出发'等含义",
    "partir 是第三组动词",
    "partir 常用于表达离开某地",
    "例句：Je pars demain. (我明天离开)"
  ],
  "penser": [
    "penser 表示'想'、'思考'、'认为'等含义",
    "penser 是第一组规则动词",
    "penser 常用于表达思考或想念某人",
    "例句：Je pense à toi. (我在想你)"
  ],
  "perdre": [
    "perdre 表示'失去'、'丢失'、'输'等含义",
    "perdre 是第三组动词",
    "perdre 常用于表达失去某物",
    "例句：J'ai perdu mon portable. (我遗失了我的手机)"
  ],
  "pouvoir": [
    "pouvoir 表示'能够'、'可以'、'可能'等含义",
    "pouvoir 是第三组不规则动词",
    "pouvoir 常用于表达能够做某事",
    "例句：Je peux vous aider? (我可以帮你吗？)"
  ],
  "préférer": [
    "préférer 表示'更喜欢'、'宁愿'等含义",
    "préférer 是第一组动词，但在某些变位中需要添加重音符号",
    "préférer 常用于表达更喜欢某物",
    "例句：Je préfère le vin rouge. (我更喜欢红酒)"
  ],
  "prêter": [
    "prêter 表示'借出'、'借给'等含义",
    "prêter 是第一组规则动词",
    "prêter 常用于表达借东西给某人",
    "例句：Il m'a prêté de l'argent. (他借了我一些钱)"
  ],
  "promettre": [
    "promettre 表示'承诺'、'答应'等含义",
    "promettre 是第三组动词",
    "promettre 常用于表达承诺做某事",
    "例句：Je te promets. (我答应你)"
  ],
  "proposer": [
    "proposer 表示'提议'、'建议'、'提供'等含义",
    "proposer 是第一组规则动词",
    "proposer 常用于表达提议或建议",
    "例句：Je te propose un choix. (我给你一个选择)"
  ],
  "raconter": [
    "raconter 表示'讲述'、'叙述'等含义",
    "raconter 是第一组规则动词",
    "raconter 常用于表达讲故事",
    "例句：Je raconte une histoire. (我讲一个故事)"
  ],
  "recevoir": [
    "recevoir 表示'收到'、'接待'等含义",
    "recevoir 是第三组动词",
    "recevoir 常用于表达收到邮件或接待客人",
    "例句：J'ai reçu un e-mail. (我收到一封邮件)"
  ],
  "réfléchir": [
    "réfléchir 表示'思考'、'考虑'、'反思'等含义",
    "réfléchir 是第二组规则动词",
    "réfléchir 常用于表达思考某事",
    "例句：Je vais réfléchir. (我考虑一下)"
  ],
  "refuser": [
    "refuser 表示'拒绝'等含义",
    "refuser 是第一组规则动词",
    "refuser 常用于表达拒绝某事",
    "例句：Je refuse de croire. (我拒绝相信)"
  ],
  "regarder": [
    "regarder 表示'看'、'观看'等含义",
    "regarder 是第一组规则动词",
    "regarder 常用于表达看电视或看某人",
    "例句：Je regarde un programme de télévision. (我在看一个电视节目)"
  ],
  "remercier": [
    "remercier 表示'感谢'、'致谢'等含义",
    "remercier 是第一组规则动词",
    "remercier 常用于表达感谢某人",
    "例句：Je vous remercie pour votre aide. (谢谢你的帮助)"
  ],
  "rencontrer": [
    "rencontrer 表示'遇见'、'遇到'等含义",
    "rencontrer 是第一组规则动词",
    "rencontrer 常用于表达遇见某人",
    "例句：Je suis content de vous rencontrer. (我很高兴遇到你)"
  ],
  "rendre": [
    "rendre 表示'归还'、'返回'、'使成为'等含义",
    "rendre 是第三组动词",
    "rendre 常用于表达归还某物",
    "例句：J'ai rendu le livre. (我还了那本书)"
  ],
  "rentrer": [
    "rentrer 表示'回家'、'返回'等含义",
    "rentrer 是第三组动词",
    "rentrer 常用于表达回家",
    "例句：Je suis rentré chez moi. (我回到家)"
  ],
  "répondre": [
    "répondre 表示'回答'、'回复'等含义",
    "répondre 是第三组动词",
    "répondre 常用于表达回答问题或回复消息",
    "例句：S'il vous plaît répondre dès que possible. (请尽速回复)"
  ],
  "rester": [
    "rester 表示'停留'、'保持'、'剩下'等含义",
    "rester 是第一组规则动词",
    "rester 常用于表达留在某地",
    "例句：Je reste au lit. (我仍在床上)"
  ],
  "réussir": [
    "réussir 表示'成功'、'通过'等含义",
    "réussir 是第二组规则动词",
    "réussir 常用于表达成功做某事",
    "例句：Tu vas réussir. (你会成功的)"
  ],
  "rêver": [
    "rêver 表示'做梦'、'梦想'等含义",
    "rêver 是第一组规则动词",
    "rêver 常用于表达做梦",
    "例句：J'ai rêvé de toi. (我梦见你了)"
  ],
  "rire": [
    "rire 表示'笑'、'发笑'等含义",
    "rire 是第三组不规则动词",
    "rire 常用于表达笑",
    "例句：Tout le monde s'est mis à rire. (大家都笑了起来)"
  ],
  "savoir": [
    "savoir 表示'知道'、'懂得'、'会'等含义",
    "savoir 是第三组不规则动词",
    "savoir 常用于表达知道某事或会做某事",
    "例句：Je sais pas. (我不知道)"
  ],
  "sembler": [
    "sembler 表示'似乎'、'好像'等含义",
    "sembler 是第一组规则动词",
    "sembler 常用于表达似乎某事",
    "例句：Il semble t'aimer. (他似乎喜欢你)"
  ],
  "sortir": [
    "sortir 表示'出去'、'外出'、'拿出'等含义",
    "sortir 是第三组动词",
    "sortir 常用于表达外出或拿出某物",
    "例句：Je sors d'ici. (我要离开这里)"
  ],
  "souhaiter": [
    "souhaiter 表示'希望'、'祝愿'等含义",
    "souhaiter 是第一组规则动词",
    "souhaiter 常用于表达希望或祝愿",
    "例句：Je te souhaite une bonne journée. (我祝你有美好的一天)"
  ],
  "suivre": [
    "suivre 表示'跟随'、'追踪'、'遵循'等含义",
    "suivre 是第三组动词",
    "suivre 常用于表达跟随某人",
    "例句：Suivez-moi. (跟我来)"
  ],
  "téléphoner": [
    "téléphoner 表示'打电话'等含义",
    "téléphoner 是第一组规则动词",
    "téléphoner 常用于表达给某人打电话",
    "例句：J'ai téléphoné à mon papa. (我打了电话给我爸)"
  ],
  "tenir": [
    "tenir 表示'拿'、'握'、'保持'等含义",
    "tenir 是第三组不规则动词",
    "tenir 常用于表达拿东西或保持某种状态",
    "例句：Tiens moi au courant. (再跟我说（之后怎样）)"
  ],
  "traduire": [
    "traduire 表示'翻译'等含义",
    "traduire 是第三组动词",
    "traduire 常用于表达翻译某物",
    "例句：Pouvez-vous traduire cela pour moi? (你可以帮我翻译这个吗？)"
  ],
  "travailler": [
    "travailler 表示'工作'、'劳动'等含义",
    "travailler 是第一组规则动词",
    "travailler 常用于表达工作",
    "例句：Je travaille de la maison. (我在家工作)"
  ],
  "vendre": [
    "vendre 表示'卖'、'销售'等含义",
    "vendre 是第三组动词",
    "vendre 常用于表达卖东西",
    "例句：J'ai vendu ma voiture. (我卖了我的车子)"
  ],
  "venir": [
    "venir 表示'来'、'来到'等含义",
    "venir 是第三组不规则动词",
    "venir 常用于表达来到某地",
    "例句：Viens ici avec moi. (来这边和我一起)"
  ],
  "voir": [
    "voir 表示'看'、'看见'、'观看'等含义",
    "voir 是第三组不规则动词",
    "voir 常用于表达看见某人或某物",
    "例句：Est-ce que tu me vois? (你看到我了吗？)"
  ],
  "vouloir": [
    "vouloir 表示'想要'、'愿意'等含义",
    "vouloir 是第三组不规则动词",
    "vouloir 常用于表达想要某物",
    "例句：Je veux le savoir. (我想要知道)"
  ],
  "voyager": [
    "voyager 表示'旅行'、'旅游'等含义",
    "voyager 是第一组规则动词",
    "voyager 常用于表达旅行",
    "例句：Je voyage en train. (我搭火车旅行)"
  ],
  "se coucher": [
    "se coucher 表示'睡下'、'睡觉'等含义",
    "se coucher 是代词式动词",
    "se coucher 常用于表达去睡觉",
    "例句：Je vais me coucher. (我要去睡了)"
  ],
  "se doucher": [
    "se doucher 表示'洗澡'等含义",
    "se doucher 是代词式动词",
    "se doucher 常用于表达去洗澡",
    "例句：Je vais me doucher. (我要去洗澡)"
  ],
  "s'habituer": [
    "s'habituer 表示'习惯'、'适应'等含义",
    "s'habituer 是代词式动词",
    "s'habituer 常用于表达习惯某事",
    "例句：Je ne suis pas habitué à ça. (我不习惯这个)"
  ],
  "s'inquiéter": [
    "s'inquiéter 表示'担心'、'忧虑'等含义",
    "s'inquiéter 是代词式动词",
    "s'inquiéter 常用于表达担心某事",
    "例句：T'inquiète pas. (别担心)"
  ],
  "s'intéresser": [
    "s'intéresser 表示'对...感兴趣'等含义",
    "s'intéresser 是代词式动词",
    "s'intéresser 常用于表达对某事感兴趣",
    "例句：Ça t'intéresse ou pas? (这你有兴趣吗？)"
  ],
  "se moquer": [
    "se moquer 表示'嘲笑'、'取笑'等含义",
    "se moquer 是代词式动词",
    "se moquer 常用于表达嘲笑某人",
    "例句：Il se moque de moi. (他嘲笑我)"
  ],
  "s'occuper": [
    "s'occuper 表示'照顾'、'处理'、'忙于'等含义",
    "s'occuper 是代词式动词",
    "s'occuper 常用于表达照顾某人",
    "例句：Je m'occupe de toi. (我照顾你)"
  ],
  "se reposer": [
    "se reposer 表示'休息'等含义",
    "se reposer 是代词式动词",
    "se reposer 常用于表达休息",
    "例句：Je me repose à la maison. (我在家休息)"
  ],
  "se souvenir": [
    "se souvenir 表示'记得'、'回忆'等含义",
    "se souvenir 是代词式动词",
    "se souvenir 常用于表达记得某事",
    "例句：Je ne me souviens plus. (我不记得了)"
  ],
  "se tromper": [
    "se tromper 表示'搞错'、'弄错'等含义",
    "se tromper 是代词式动词",
    "se tromper 常用于表达搞错某事",
    "例句：Je me suis trompé. (我搞错了)"
  ],
  "visiter": [
    "visiter 表示'参观'、'访问'、'游览'等含义",
    "visiter 是第一组规则动词",
    "visiter 常用于表达参观博物馆、城市、景点等",
    "例句：Je visite Paris. (我参观巴黎)"
  ],
  "déménager": [
    "déménager 表示'搬家'、'迁移'等含义",
    "déménager 是第一组动词，在某些变位中需要特殊处理重音符号",
    "déménager 常用于表达搬家到新地方",
    "例句：Je déménage demain. (我明天搬家)"
  ]
};
